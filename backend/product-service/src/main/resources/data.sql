
-- Categories
INSERT INTO categories (name, description) VALUES ('T-Shirts', 'Comfortable cotton t-shirts for everyday wear');
INSERT INTO categories (name, description) VALUES ('Jeans', 'Durable denim jeans in various fits');
INSERT INTO categories (name, description) VALUES ('Jackets', 'Stylish jackets for all seasons');
INSERT INTO categories (name, description) VALUES ('Dresses', 'Elegant dresses for casual and formal occasions');
INSERT INTO categories (name, description) VALUES ('Activewear', 'High-performance wear for workouts');

-- Products (Men)
INSERT INTO products (name, description, price, gender, category_id, image_url, created_at) VALUES ('Classic White Tee', 'Premium cotton crew neck t-shirt. breathable and soft.', 499.00, 'MEN', 1, 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500', NOW());
INSERT INTO products (name, description, price, gender, category_id, image_url, created_at) VALUES ('Slim Fit Blue Jeans', 'Modern slim fit jeans with stretch comfort.', 1299.00, 'MEN', 2, 'https://images.unsplash.com/photo-1542272617-08f086302542?w=500', NOW());
INSERT INTO products (name, description, price, gender, category_id, image_url, created_at) VALUES ('Black Denim Jacket', 'Rugged black denim jacket with button closure.', 2499.00, 'MEN', 3, 'https://images.unsplash.com/photo-1559582930-bb01987cf4dd?w=500', NOW());
INSERT INTO products (name, description, price, gender, category_id, image_url, created_at) VALUES ('Graphic Print T-Shirt', 'Urban style graphic tee, regular fit.', 699.00, 'MEN', 1, 'https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=500', NOW());
INSERT INTO products (name, description, price, gender, category_id, image_url, created_at) VALUES ('Running Shorts', 'Lightweight shorts for running and training.', 899.00, 'MEN', 5, 'https://images.unsplash.com/photo-1617317376997-8748e6862c01?w=500', NOW());

-- Products (Women)
INSERT INTO products (name, description, price, gender, category_id, image_url, created_at) VALUES ('Floral Summer Dress', 'Light and breezy floral print dress.', 1599.00, 'WOMEN', 4, 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=500', NOW());
INSERT INTO products (name, description, price, gender, category_id, image_url, created_at) VALUES ('High Waist Skinny Jeans', 'Flattering high waist jeans in dark wash.', 1499.00, 'WOMEN', 2, 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=500', NOW());
INSERT INTO products (name, description, price, gender, category_id, image_url, created_at) VALUES ('Oversized Hoodie', 'Cozy oversized hoodie in pastel pink.', 1199.00, 'WOMEN', 3, 'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=500', NOW());
INSERT INTO products (name, description, price, gender, category_id, image_url, created_at) VALUES ('Yoga Leggings', 'High-stretch leggings perfect for yoga.', 999.00, 'WOMEN', 5, 'https://images.unsplash.com/photo-1506619216599-9d16d0903dfd?w=500', NOW());
INSERT INTO products (name, description, price, gender, category_id, image_url, created_at) VALUES ('V-Neck Blouse', 'Elegant v-neck blouse for work or casual.', 799.00, 'WOMEN', 1, 'https://images.unsplash.com/photo-1551163943-3f6a29e39bb7?w=500', NOW());

-- Products (Unisex)
INSERT INTO products (name, description, price, gender, category_id, image_url, created_at) VALUES ('Basic Hoodie', 'Essential everyday hoodie for everyone.', 1299.00, 'UNISEX', 3, 'https://images.unsplash.com/photo-1578768079052-aa76e52ff62e?w=500', NOW());
INSERT INTO products (name, description, price, gender, category_id, image_url, created_at) VALUES ('Canvas Cap', 'Adjustable canvas cap in beige.', 399.00, 'UNISEX', 5, 'https://images.unsplash.com/photo-1588850561407-ed78c282e89f?w=500', NOW());

-- Variants
INSERT INTO product_variants (product_id, size, stock_quantity) VALUES (1, 'S', 50);
INSERT INTO product_variants (product_id, size, stock_quantity) VALUES (1, 'M', 100);
INSERT INTO product_variants (product_id, size, stock_quantity) VALUES (1, 'L', 80);
INSERT INTO product_variants (product_id, size, stock_quantity) VALUES (2, 'S', 20);
INSERT INTO product_variants (product_id, size, stock_quantity) VALUES (2, 'M', 40);
INSERT INTO product_variants (product_id, size, stock_quantity) VALUES (2, 'L', 35);
INSERT INTO product_variants (product_id, size, stock_quantity) VALUES (3, 'M', 10);
INSERT INTO product_variants (product_id, size, stock_quantity) VALUES (3, 'L', 0);
INSERT INTO product_variants (product_id, size, stock_quantity) VALUES (4, 'S', 25);
INSERT INTO product_variants (product_id, size, stock_quantity) VALUES (4, 'M', 25);
INSERT INTO product_variants (product_id, size, stock_quantity) VALUES (5, 'M', 60);
INSERT INTO product_variants (product_id, size, stock_quantity) VALUES (5, 'L', 40);
INSERT INTO product_variants (product_id, size, stock_quantity) VALUES (6, 'S', 30);
INSERT INTO product_variants (product_id, size, stock_quantity) VALUES (6, 'M', 20);
INSERT INTO product_variants (product_id, size, stock_quantity) VALUES (7, 'S', 20);
INSERT INTO product_variants (product_id, size, stock_quantity) VALUES (7, 'M', 40);
INSERT INTO product_variants (product_id, size, stock_quantity) VALUES (8, 'S', 50);
INSERT INTO product_variants (product_id, size, stock_quantity) VALUES (8, 'M', 50);
INSERT INTO product_variants (product_id, size, stock_quantity) VALUES (9, 'S', 0);
INSERT INTO product_variants (product_id, size, stock_quantity) VALUES (9, 'M', 45);
INSERT INTO product_variants (product_id, size, stock_quantity) VALUES (10, 'S', 20);
INSERT INTO product_variants (product_id, size, stock_quantity) VALUES (10, 'M', 20);
INSERT INTO product_variants (product_id, size, stock_quantity) VALUES (11, 'S', 30);
INSERT INTO product_variants (product_id, size, stock_quantity) VALUES (11, 'M', 60);
INSERT INTO product_variants (product_id, size, stock_quantity) VALUES (12, 'M', 100);
