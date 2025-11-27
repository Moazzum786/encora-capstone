package com.example.api_gateway.filter;

import com.example.api_gateway.client.AuthServiceGrpcClient;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import java.util.Base64;
import java.util.stream.Collectors;
import java.util.stream.StreamSupport;
import org.springframework.cloud.gateway.filter.GatewayFilter;
import org.springframework.cloud.gateway.filter.factory.AbstractGatewayFilterFactory;
import org.springframework.http.HttpCookie;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseCookie;
import org.springframework.http.server.reactive.ServerHttpRequest;
import org.springframework.stereotype.Component;
import org.springframework.web.server.ServerWebExchange;

/** JwtAuthenticationFilter */
@Component
public class JwtValidationGatewayFilterFactory
    extends AbstractGatewayFilterFactory<Object> {

    private AuthServiceGrpcClient authServiceGrpcClient;

    JwtValidationGatewayFilterFactory(
        AuthServiceGrpcClient authServiceGrpcClient
    ) {
        super(Object.class);
        this.authServiceGrpcClient = authServiceGrpcClient;
    }

    @Override
    public GatewayFilter apply(Object config) {
        return (exchange, chain) -> {
            HttpCookie accessTokenCookie = exchange
                .getRequest()
                .getCookies()
                .getFirst("accessToken");

            if (accessTokenCookie == null) {
                exchange.getResponse().setStatusCode(HttpStatus.UNAUTHORIZED);
                return exchange.getResponse().setComplete();
            }

            String accessTokenString = accessTokenCookie.getValue();

            return authServiceGrpcClient
                .validateToken(accessTokenString)
                .flatMap(validationResponse -> {
                    // Check if token is valid
                    if (!validationResponse.getIsValid()) {
                        exchange
                            .getResponse()
                            .setStatusCode(HttpStatus.UNAUTHORIZED);
                        return exchange.getResponse().setComplete();
                    }

                    // If token was refreshed, set the new token as a cookie
                    if (
                        validationResponse.getIsRefreshed() &&
                        validationResponse.hasRefreshedAccessToken()
                    ) {
                        // Set refreshed token as a new cookie
                        String newToken =
                            validationResponse.getRefreshedAccessToken();
                        exchange
                            .getResponse()
                            .addCookie(
                                ResponseCookie.from("accessToken", newToken)
                                    .httpOnly(true)
                                    .secure(false)
                                    .path("/")
                                    .maxAge(7 * 24 * 60 * 60)
                                    .build()
                            );
                    }

                    //enrich request
                    ServerWebExchange mutatedExchange = exchange;
                    try {
                        // 1. Decode the JWT Payload
                        String[] chunks = accessTokenString.split("\\.");
                        if (chunks.length > 1) {
                            String payload = new String(
                                Base64.getUrlDecoder().decode(chunks[1])
                            );
                            ObjectMapper objectMapper = new ObjectMapper();
                            JsonNode jsonNode = objectMapper.readTree(payload);

                            // 2. Extract fields safely
                            String userId = jsonNode.has("userId")
                                ? jsonNode.get("userId").asText()
                                : "";
                            String email = jsonNode.has("email")
                                ? jsonNode.get("email").asText()
                                : "";

                            String roles = "";
                            if (
                                jsonNode.has("roles") &&
                                jsonNode.get("roles").isArray()
                            ) {
                                roles = StreamSupport.stream(
                                    jsonNode.get("roles").spliterator(),
                                    false
                                )
                                    .map(JsonNode::asText)
                                    .collect(Collectors.joining(","));
                            }

                            // 3. Mutate the Request with new Headers
                            ServerHttpRequest request = exchange
                                .getRequest()
                                .mutate()
                                .header("x-user-id", userId)
                                .header("x-user-email", email)
                                .header("x-user-roles", roles)
                                .build();

                            // 4. Update the Exchange
                            mutatedExchange = exchange
                                .mutate()
                                .request(request)
                                .build();
                        }
                    } catch (Exception e) {
                        e.printStackTrace();
                    }

                    return chain.filter(mutatedExchange);
                })
                .onErrorResume(e -> {
                    exchange
                        .getResponse()
                        .setStatusCode(HttpStatus.UNAUTHORIZED);
                    return exchange.getResponse().setComplete();
                });
        };
    }
}
