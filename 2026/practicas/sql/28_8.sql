DROP DATABASE IF EXISTS Ventas;

CREATE DATABASE Ventas;

USE Ventas;


-- =========================================
-- 1. COUNTRIES
-- =========================================

CREATE TABLE COUNTRIES (
    country_id INT PRIMARY KEY,
    country_name VARCHAR(100),
    country_subregion VARCHAR(100),
    country_region VARCHAR(100)
);


-- =========================================
-- 2. CUSTOMERS
-- =========================================

CREATE TABLE CUSTOMERS (
    cust_id INT PRIMARY KEY,
    country_id INT,
    cust_first_name VARCHAR(100),
    cust_last_name VARCHAR(100),
    cust_city VARCHAR(100),
    cust_state_province VARCHAR(100),
    cust_postal_code VARCHAR(20),
    cust_income_level VARCHAR(50),
    cust_credit_limit DECIMAL(12,2),

    FOREIGN KEY (country_id)
        REFERENCES COUNTRIES(country_id)
);


-- =========================================
-- 3. PRODUCTS
-- =========================================

CREATE TABLE PRODUCTS (
    prod_id INT PRIMARY KEY,
    prod_name VARCHAR(150),
    prod_desc VARCHAR(255),
    prod_category VARCHAR(100),
    prod_subcategory VARCHAR(100),
    prod_list_price DECIMAL(12,2),
    prod_min_price DECIMAL(12,2)
);


-- =========================================
-- 4. TIMES
-- =========================================

CREATE TABLE TIMES (
    time_id INT PRIMARY KEY,
    day_name VARCHAR(20),
    calendar_month_desc VARCHAR(20),
    calendar_quarter_desc VARCHAR(20),
    calendar_year INT,
    fiscal_month_desc VARCHAR(20),
    fiscal_quarter_desc VARCHAR(20),
    fiscal_year INT
);


-- =========================================
-- 5. CHANNELS
-- =========================================

CREATE TABLE CHANNELS (
    channel_id INT PRIMARY KEY,
    channel_desc VARCHAR(100),
    channel_class VARCHAR(50)
);


-- =========================================
-- 6. PROMOTIONS
-- =========================================

CREATE TABLE PROMOTIONS (
    promo_id INT PRIMARY KEY,
    promo_name VARCHAR(150),
    promo_category VARCHAR(100),
    promo_subcategory VARCHAR(100),
    promo_cost DECIMAL(12,2),
    promo_begin_date DATE,
    promo_end_date DATE
);


-- =========================================
-- 7. SALES
-- =========================================

CREATE TABLE SALES (
    sales_id INT PRIMARY KEY,
    cust_id INT,
    prod_id INT,
    time_id INT,
    channel_id INT,
    promo_id INT,
    quantity_sold INT,
    amount_sold DECIMAL(12,2),

    FOREIGN KEY (cust_id)
        REFERENCES CUSTOMERS(cust_id),

    FOREIGN KEY (prod_id)
        REFERENCES PRODUCTS(prod_id),

    FOREIGN KEY (time_id)
        REFERENCES TIMES(time_id),

    FOREIGN KEY (channel_id)
        REFERENCES CHANNELS(channel_id),

    FOREIGN KEY (promo_id)
        REFERENCES PROMOTIONS(promo_id)
);


-- =========================================
-- 8. COSTS
-- =========================================

CREATE TABLE COSTS (
    cost_id INT PRIMARY KEY,
    prod_id INT,
    time_id INT,
    channel_id INT,
    unit_cost DECIMAL(12,2),
    unit_price DECIMAL(12,2),

    FOREIGN KEY (prod_id)
        REFERENCES PRODUCTS(prod_id),

    FOREIGN KEY (time_id)
        REFERENCES TIMES(time_id),

    FOREIGN KEY (channel_id)
        REFERENCES CHANNELS(channel_id)
);

select cust_first_name, prod_name, amount_sold
from SALES
inner JOIN customers
on SALES.cust_id = customers.cust_id
inner JOIN products
on SALES.prod_id = products.prod_id

select products.prod_category,
sum(SALES.amount_sold) as total_facturado
from products
inner JOIN SALES
on products.prod_id = SALES.prod_id
group by products.prod_category

SELECT 
    CHANNELS.channel_desc,
    TIMES.calendar_year,
    SUM(SALES.amount_sold) AS total_ventas
FROM SALES
INNER JOIN CHANNELS
    ON SALES.channel_id = CHANNELS.channel_id
INNER JOIN TIMES
    ON SALES.time_id = TIMES.time_id
GROUP BY 
    CHANNELS.channel_desc,
    TIMES.calendar_year
ORDER BY 
    TIMES.calendar_year,
    CHANNELS.channel_desc;

select customers.cust_id, customers.cust_first_name, countries.country_name, sum(sales.amount_sold) as total_facturado
from customers
inner join countries
on customers.country_id = countries.country_id
inner join sales
on customers.cust_id = sales.cust_id
group by customers.cust_id, customers.cust_first_name, countries.country_name

select promotions.promo_name, promotions.promo_category, sales.quantity_sold
from promotions
inner join sales
on promotions.promo_id = sales.promo_id

