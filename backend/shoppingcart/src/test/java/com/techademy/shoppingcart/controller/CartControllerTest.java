package com.techademy.shoppingcart.controller;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.techademy.shoppingcart.dto.AddItemRequest;
import com.techademy.shoppingcart.dto.UpdateItemRequest;
import com.techademy.shoppingcart.repository.CartRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

@SpringBootTest
@AutoConfigureMockMvc
public class CartControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @Autowired
    private CartRepository cartRepository;

    @Autowired
    private ObjectMapper objectMapper;

    private String userId = "user123";

    @BeforeEach
    void setup() {
        cartRepository.deleteAll();
    }

    @Test
    void testAddItemToCart() throws Exception {
        AddItemRequest req = new AddItemRequest("prod1", 2);

        mockMvc.perform(post("/api/v1/carts/" + userId + "/items")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(objectMapper.writeValueAsString(req)))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.userId").value(userId))
                .andExpect(jsonPath("$.items[0].productId").value("prod1"))
                .andExpect(jsonPath("$.items[0].quantity").value(2));
    }

    @Test
    void testUpdateItemInCart() throws Exception {
        AddItemRequest addReq = new AddItemRequest("prod1", 2);
        mockMvc.perform(post("/api/v1/carts/" + userId + "/items")
                .contentType(MediaType.APPLICATION_JSON)
                .content(objectMapper.writeValueAsString(addReq)));

        UpdateItemRequest updateReq = new UpdateItemRequest(5);
        mockMvc.perform(put("/api/v1/carts/" + userId + "/items/prod1")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(objectMapper.writeValueAsString(updateReq)))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.items[0].quantity").value(5));
    }

    @Test
    void testGetCart() throws Exception {
        AddItemRequest addReq = new AddItemRequest("prod2", 1);
        mockMvc.perform(post("/api/v1/carts/" + userId + "/items")
                .contentType(MediaType.APPLICATION_JSON)
                .content(objectMapper.writeValueAsString(addReq)));

        mockMvc.perform(get("/api/v1/carts/" + userId))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.userId").value(userId))
                .andExpect(jsonPath("$.items[0].productId").value("prod2"))
                .andExpect(jsonPath("$.items[0].quantity").value(1));
    }

    @Test
    void testDeleteItemFromCart() throws Exception {
        AddItemRequest addReq = new AddItemRequest("prod3", 3);
        mockMvc.perform(post("/api/v1/carts/" + userId + "/items")
                .contentType(MediaType.APPLICATION_JSON)
                .content(objectMapper.writeValueAsString(addReq)));

        mockMvc.perform(delete("/api/v1/carts/" + userId + "/items/prod3"))
                .andExpect(status().isNoContent());

        mockMvc.perform(get("/api/v1/carts/" + userId))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.items").isEmpty());
    }

    @Test
    void testClearCart() throws Exception {
        AddItemRequest addReq1 = new AddItemRequest("prod4", 1);
        AddItemRequest addReq2 = new AddItemRequest("prod5", 2);
        mockMvc.perform(post("/api/v1/carts/" + userId + "/items")
                .contentType(MediaType.APPLICATION_JSON)
                .content(objectMapper.writeValueAsString(addReq1)));
        mockMvc.perform(post("/api/v1/carts/" + userId + "/items")
                .contentType(MediaType.APPLICATION_JSON)
                .content(objectMapper.writeValueAsString(addReq2)));

        mockMvc.perform(delete("/api/v1/carts/" + userId))
                .andExpect(status().isNoContent());

        mockMvc.perform(get("/api/v1/carts/" + userId))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.items").isEmpty());
    }
}
