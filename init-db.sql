CREATE TABLE shopping_cart(
id serial unique primary key,
	product varchar(40),
	price smallint,
	quantity smallint

)