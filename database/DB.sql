

CREATE TABLE 3duser (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    surname VARCHAR(255) NOT NULL,
    username VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    birth DATE,
    telephone VARCHAR(255),
    address VARCHAR(255),
    verify BOOL(255),
    passwor VARCHAR(255),
    rol enum(255),
    designer boolean(255),
    printer boolean(255),
);




CREATE TABLE design (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    description VARCHAR(255),
    `file` VARCHAR(255),
    price VARCHAR(255),
  3duser_id INT,
  FOREIGN KEY (3duser_id) REFERENCES 3duser (id),
);





CREATE TABLE order_designs (
    id INT PRIMARY KEY AUTO_INCREMENT,
  3duser_id INT,
  design_id INT,
  FOREIGN KEY (3duser_id) REFERENCES 3duser (id),
  FOREIGN KEY (design_id) REFERENCES design (id),
);




CREATE TABLE category (
    id INT PRIMARY KEY AUTO_INCREMENT,
    category_type VARCHAR(255) NOT NULL,
);

INSERT INTO category (category_type) VALUES
('2D Art'),
('Art Tools'),
('Coins & Badges'),
('Interactive Art'),
('Math Art'),
('Scans & Replicas'),
('Accessories'),
('Bracelets'),
('Costume'),
('Earrings'),
('Glasses'),
('Jewelry'),
('Audio'),
('Camera'),
('Computer'),
('Mobile Phone'),
('Tablet'),
('Video Games'),
('Automotive'),
('DIY'),
('Electronics'),
('Music'),
('R/C Vehicles'),
('Robotics'),
('Bathroom'),
('Containers'),
('Decor'),
('Household Supplies'),
('Kitchen & Dining'),
('Office Organization'),
('Biology'),
('Engineering'),
('Math'),
('Physics & Astronomy'),
('Animals'),
('Buildings & Structures'),
('Creatures'),
('Food & Drink'),
('Model Furniture'),
('Model Robots'),
('Hand Tools'),
('Machine Tools'),
('Tool Holders & boxes'),
('Chess'),
('Construction Toys'),
('Dice'),
('Games'),
('Mechanical Toys'),
('Playsets'),
('Other');


CREATE TABLE design_category (
  id INT AUTO_INCREMENT PRIMARY KEY,
  design_id INT,
  category_id INT,
  FOREIGN KEY (design_id) REFERENCES design (id),
  FOREIGN KEY (category_id) REFERENCES category (id),


CREATE TABLE printer (
  id INT AUTO_INCREMENT PRIMARY KEY,
  brand VARCHAR(255) NOT NULL,
  model VARCHAR(255) NOT NULL,
  tech VARCHAR(255) NOT NULL,
  speed INTEGER(255) NOT NULL,
  resolution DECIMAL(10, 2) NOT NULL,
  dimensions DECIMAL(10, 2) NOT NULL
);

INSERT INTO printer (brand, model, tech, speed, resolution, dimensions) VALUES
('Prusa Research', 'Prusa i3 MK3S+', , ,25.0, 0.05 ),
('Creality', 'Ender 3 Pro', 22.0, 0.1,  , ,),
('Ultimaker', 'S5', 330.0, 0.02,  , ,),
('LulzBot', 'Taz Pro S', 280.0, 0.01, , ,),
('FlashForge', 'Creator Pro 2',  , ,227.0, 0.05),
('MakerBot', 'Replicator+', , , 29.5, 0.01, );



CREATE TABLE 3duser_printer (
  id INT AUTO_INCREMENT PRIMARY KEY,
  3duser_id INT,
  printer_id INT,
  FOREIGN KEY (3duser_id) REFERENCES 3duser (id),
  FOREIGN KEY (printer_id) REFERENCES printer (id),
);



CREATE TABLE material (
  id INT AUTO_INCREMENT PRIMARY KEY,
  material_type VARCHAR(255) NOT NULL,
);



CREATE TABLE printer_material (
  id INT AUTO_INCREMENT PRIMARY KEY,
  material_type VARCHAR(255) NOT NULL,
  printer_id INT,
  material_id INT,
  FOREIGN KEY (printer_id) REFERENCES printer (id),
  FOREIGN KEY (material_id) REFERENCES material (id),
);



CREATE TABLE order_prints (
  id INT AUTO_INCREMENT PRIMARY KEY,
  layer_height VARCHAR(255) NOT NULL,
  price VARCHAR(255) NOT NULL,
  quantity VARCHAR(255) NOT NULL,
  3duser_sell_id INT,
  3duser_buy_id INT,
  design_id INT,
  printer_id INT,
  material_id INT,
  FOREIGN KEY (3duser_sell_id) REFERENCES 3duser (id),
  FOREIGN KEY (3duser_buy_id) REFERENCES 3duser (id),
  FOREIGN KEY (design_id) REFERENCES design (id),
  FOREIGN KEY (printer_id) REFERENCES printer (id),
  FOREIGN KEY (material_id) REFERENCES material (id),

);




CREATE TABLE comments (
  id INT AUTO_INCREMENT PRIMARY KEY,
  comments VARCHAR(255) NOT NULL,
  3duser_id INT,
  FOREIGN KEY (3duser_id) REFERENCES 3duser (id),
);
