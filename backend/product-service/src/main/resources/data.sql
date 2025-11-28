-- ==============================================
-- 1. Categories
-- ==============================================
INSERT INTO categories (name, description) VALUES
('T-Shirts', 'Comfortable cotton t-shirts for everyday wear'),
('Jeans', 'Durable denim jeans in various fits'),
('Jackets', 'Stylish jackets for all seasons'),
('Dresses', 'Elegant dresses for casual and formal occasions'),
('Activewear', 'High-performance wear for workouts');

-- ==============================================
-- 2. Products (Batch 1: IDs 1-25)
-- ==============================================
INSERT INTO products (name, description, price, gender, category_id, image_url, created_at) VALUES
('Classic White Tee', 'Premium cotton crew neck t-shirt.', 499.00, 'MEN', 1, 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500', NOW()),
('Slim Fit Blue Jeans', 'Modern slim fit jeans with stretch comfort.', 1299.00, 'MEN', 2, 'https://images.unsplash.com/photo-1542272617-08f086302542?w=500', NOW()),
('Black Denim Jacket', 'Rugged black denim jacket.', 2499.00, 'MEN', 3, 'https://images.unsplash.com/photo-1559582930-bb01987cf4dd?w=500', NOW()),
('Graphic Print T-Shirt', 'Urban style graphic tee.', 699.00, 'MEN', 1, 'https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=500', NOW()),
('Running Shorts', 'Lightweight shorts for running.', 899.00, 'MEN', 5, 'https://images.unsplash.com/photo-1617317376997-8748e6862c01?w=500', NOW()),
('Floral Summer Dress', 'Light and breezy floral print dress.', 1599.00, 'WOMEN', 4, 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=500', NOW()),
('High Waist Skinny Jeans', 'Flattering high waist jeans.', 1499.00, 'WOMEN', 2, 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=500', NOW()),
('Oversized Hoodie', 'Cozy oversized hoodie in pink.', 1199.00, 'WOMEN', 3, 'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=500', NOW()),
('Yoga Leggings', 'High-stretch leggings for yoga.', 999.00, 'WOMEN', 5, 'https://images.unsplash.com/photo-1506619216599-9d16d0903dfd?w=500', NOW()),
('V-Neck Blouse', 'Elegant v-neck blouse.', 799.00, 'WOMEN', 1, 'https://images.unsplash.com/photo-1551163943-3f6a29e39bb7?w=500', NOW()),
('Basic Hoodie', 'Essential everyday hoodie.', 1299.00, 'UNISEX', 3, 'https://images.unsplash.com/photo-1578768079052-aa76e52ff62e?w=500', NOW()),
('Canvas Cap', 'Adjustable canvas cap in beige.', 399.00, 'UNISEX', 5, 'https://images.unsplash.com/photo-1588850561407-ed78c282e89f?w=500', NOW()),
('Cargo Pants', 'Functional cargo pants with pockets.', 1499.00, 'MEN', 2, 'https://images.unsplash.com/photo-1517445312582-06b9da5217c3?w=500', NOW()),
('Oxford Shirt', 'Crisp white oxford shirt.', 1899.00, 'MEN', 1, 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=500', NOW()),
('Leather Biker Jacket', 'Classic faux leather biker jacket.', 3499.00, 'MEN', 3, 'https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?w=500', NOW()),
('Chino Shorts', 'Casual beige chino shorts.', 999.00, 'MEN', 2, 'https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=500', NOW()),
('Athletic Tank Top', 'Breathable tank for workout.', 599.00, 'MEN', 5, 'https://images.unsplash.com/photo-1581655353564-df123a1eb820?w=500', NOW()),
('Flannel Shirt', 'Red and black plaid flannel.', 1199.00, 'MEN', 1, 'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=500', NOW()),
('Ripped Skinny Jeans', 'Edgy ripped jeans in light blue.', 1699.00, 'MEN', 2, 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=500', NOW()),
('Puffer Vest', 'Warm sleeveless puffer vest.', 1999.00, 'MEN', 3, 'https://images.unsplash.com/photo-1544022613-e87ca19202b6?w=500', NOW()),
('Track Pants', 'Comfortable track pants.', 899.00, 'MEN', 5, 'https://images.unsplash.com/photo-1513269883723-d324cc696c6d?w=500', NOW()),
('Polo T-Shirt', 'Classic navy blue polo.', 799.00, 'MEN', 1, 'https://images.unsplash.com/photo-1625910515337-346c65e5a941?w=500', NOW()),
('Bomber Jacket', 'Olive green bomber jacket.', 2299.00, 'MEN', 3, 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=500', NOW()),
('Linen Trousers', 'Breathable linen trousers.', 1599.00, 'MEN', 2, 'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=500', NOW()),
('Maxi Dress', 'Flowy bohemian style dress.', 2199.00, 'WOMEN', 4, 'https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=500', NOW());

-- ==============================================
-- 3. Products (Batch 2: IDs 26-50)
-- ==============================================
INSERT INTO products (name, description, price, gender, category_id, image_url, created_at) VALUES
('Crop Top', 'Simple white crop top.', 499.00, 'WOMEN', 1, 'https://images.unsplash.com/photo-1503185912284-5271ff81b9a8?w=500', NOW()),
('Denim Skirt', 'Classic A-line denim skirt.', 899.00, 'WOMEN', 2, 'https://images.unsplash.com/photo-1582142306909-195727d3f674?w=500', NOW()),
('Trench Coat', 'Beige double-breasted coat.', 3999.00, 'WOMEN', 3, 'https://images.unsplash.com/photo-1564391215577-b1ce09d99d63?w=500', NOW()),
('Sports Bra', 'High impact sports bra.', 799.00, 'WOMEN', 5, 'https://images.unsplash.com/photo-1571945153262-39015f2a9012?w=500', NOW()),
('Wrap Dress', 'Red wrap dress for work.', 1899.00, 'WOMEN', 4, 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=500', NOW()),
('Mom Jeans', 'Vintage high-waisted jeans.', 1599.00, 'WOMEN', 2, 'https://images.unsplash.com/photo-1584370848010-d7ccb2ffaa3c?w=500', NOW()),
('Cardigan', 'Soft knit beige cardigan.', 1299.00, 'WOMEN', 3, 'https://images.unsplash.com/photo-1620799140408-ed534171bea5?w=500', NOW()),
('Biker Shorts', 'Stretchy biker shorts.', 699.00, 'WOMEN', 5, 'https://images.unsplash.com/photo-1548767797-d8c844163c4c?w=500', NOW()),
('Silk Blouse', 'Luxurious black silk blouse.', 2499.00, 'WOMEN', 1, 'https://images.unsplash.com/photo-1601924994987-69e26d50dc26?w=500', NOW()),
('Cocktail Dress', 'Little black dress.', 2999.00, 'WOMEN', 4, 'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=500', NOW()),
('Wide Leg Trousers', 'Elegant wide leg trousers.', 1799.00, 'WOMEN', 2, 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=500', NOW()),
('Beanie Hat', 'Warm knitted beanie in grey.', 399.00, 'UNISEX', 5, 'https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?w=500', NOW()),
('Oversized Tee', 'Streetwear style t-shirt.', 799.00, 'UNISEX', 1, 'https://images.unsplash.com/photo-1562157873-818bc0726f68?w=500', NOW()),
('Denim Shirt', 'Casual denim overshirt.', 1499.00, 'UNISEX', 1, 'https://images.unsplash.com/photo-1620012253295-c15cc3e65df4?w=500', NOW()),
('Windbreaker', 'Water resistant jacket.', 2199.00, 'UNISEX', 3, 'https://images.unsplash.com/photo-1605763240004-7b9a67700292?w=500', NOW()),
('Bucket Hat', 'Trendy 90s style bucket hat.', 499.00, 'UNISEX', 5, 'https://images.unsplash.com/photo-1622445275463-afa2ab738c34?w=500', NOW()),
('Zip Hoodie', 'Comfortable zip-up hoodie.', 1399.00, 'UNISEX', 3, 'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=500', NOW()),
('Scarf', 'Woolen winter scarf.', 699.00, 'UNISEX', 5, 'https://images.unsplash.com/photo-1520975661595-dc995d533309?w=500', NOW()),
('Striped Tee', 'Black and white striped tee.', 899.00, 'UNISEX', 1, 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=500', NOW()),
('Corduroy Pants', 'Vintage brown corduroy pants.', 1699.00, 'UNISEX', 2, 'https://images.unsplash.com/photo-1516445697968-569f2573f20f?w=500', NOW()),
('Fleece Jacket', 'Warm fleece jacket.', 1899.00, 'UNISEX', 3, 'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=500', NOW()),
('Sweatpants', 'Grey sweatpants for lounging.', 999.00, 'UNISEX', 5, 'https://images.unsplash.com/photo-1580906960736-27e77763b028?w=500', NOW()),
('Rain Jacket', 'Yellow waterproof rain jacket.', 2599.00, 'UNISEX', 3, 'https://images.unsplash.com/photo-1504194921103-f8b80cadd5e4?w=500', NOW()),
('Henley Shirt', 'Cotton henley shirt.', 1099.00, 'UNISEX', 1, 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=500', NOW()),
('Board Shorts', 'Colorful board shorts.', 1199.00, 'UNISEX', 5, 'https://images.unsplash.com/photo-1565190562649-5d8e22931617?w=500', NOW());

-- ==============================================
-- 4. Product Variants (Fixed 'ONESIZE' to 'M')
-- ==============================================
INSERT INTO product_variants (product_id, size, stock_quantity) VALUES
(1, 'S', 50), (1, 'M', 100), (1, 'L', 80),
(2, 'S', 20), (2, 'M', 40), (2, 'L', 35),
(3, 'M', 10), (3, 'L', 0),
(4, 'S', 25), (4, 'M', 25),
(5, 'M', 60), (5, 'L', 40),
(6, 'S', 30), (6, 'M', 20),
(7, 'S', 20), (7, 'M', 40),
(8, 'S', 50), (8, 'M', 50),
(9, 'S', 0), (9, 'M', 45),
(10, 'S', 20), (10, 'M', 20),
(11, 'S', 30), (11, 'M', 60),
(12, 'M', 100), -- Fixed cap size
(13, 'S', 20), (13, 'M', 30), (13, 'L', 15),
(14, 'M', 4), (14, 'L', 3),
(15, 'M', 0), (15, 'L', 0),
(16, 'S', 20), (16, 'M', 40), (16, 'L', 20),
(17, 'S', 10), (17, 'M', 50), (17, 'L', 30),
(18, 'M', 2), (18, 'L', 5),
(19, 'S', 15), (19, 'M', 25), (19, 'L', 10),
(20, 'M', 20), (20, 'L', 20),
(21, 'S', 15), (21, 'M', 30),
(22, 'M', 5), (22, 'L', 0),
(23, 'M', 0), (23, 'L', 0),
(24, 'M', 15), (24, 'L', 10),
(25, 'S', 10), (25, 'M', 15),
(26, 'S', 50), (26, 'M', 50),
(27, 'S', 3), (27, 'M', 4),
(28, 'M', 10), (28, 'L', 5),
(29, 'S', 30), (29, 'M', 40),
(30, 'M', 5),
(31, 'S', 20), (31, 'M', 20),
(32, 'S', 0), (32, 'M', 0),
(33, 'S', 25), (33, 'M', 30),
(34, 'S', 2), (34, 'M', 2),
(35, 'S', 10), (35, 'M', 10),
(36, 'M', 20), (36, 'L', 15),
(37, 'M', 100), -- Fixed beanie size
(38, 'M', 40), (38, 'L', 40),
(39, 'M', 5), (39, 'L', 3),
(40, 'M', 20), (40, 'L', 10),
(41, 'M', 30), -- Fixed hat size
(42, 'M', 0), (42, 'L', 0),
(43, 'M', 50), -- Fixed scarf size
(44, 'S', 4), (44, 'M', 4),
(45, 'M', 15), (45, 'L', 15),
(46, 'M', 20), (46, 'L', 20),
(47, 'S', 20), (47, 'M', 30),
(48, 'M', 3), (48, 'L', 2),
(49, 'M', 25), (49, 'L', 25),
(50, 'M', 30), (50, 'L', 20);
