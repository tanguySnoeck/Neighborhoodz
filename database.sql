CREATE DATABASE neighborhoodz;

CREATE TABLE neighborhoodz.locations (
	id_location INTEGER PRIMARY key auto_increment,
    title text,
    location_description text,
    image text, 
    town text, 
    capacity INTEGER
);

CREATE TABLE neighborhoodz.categories (
	id_category INTEGER PRIMARY KEY auto_increment,
    cat_name text,
    cat_type text,
    color text
);

CREATE TABLE neighborhoodz.location_category (
	id_location INTEGER NOT NULL,
    id_category INTEGER NOT NULL,
    FOREIGN KEY (id_category) REFERENCES categories (id_category),
    FOREIGN KEY (id_location) REFERENCES locations (id_location),
    PRIMARY KEY (id_location, id_category)
);