CREATE TABLE 3duser (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    surname VARCHAR(255) NOT NULL,
    username VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    birth DATE,
    phone VARCHAR(255),
    address VARCHAR(255),
    verify BOOL(255),
    passwor VARCHAR(255),
    role enum(255),
    designs boolean(255),
    printer boolean(255),
);

INSERT INTO printer (name, surname, username, birth, phone, address, verify, passwor, role, designs, printer ) VALUES

/*---------------------------------------------------------------------------------------------------------*/
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

/*---------------------------------------------------------------------------------------------------------*/
CREATE TABLE software (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    version VARCHAR(255),
);

INSERT INTO sofware (name, version) VALUES
('Blender', '6.0'),
('Autocad', '16.0'),
('3dStudio', '2022'),
('STL', '6.0'),
('Archicad', '21.0'),
('Sketchup', '9.0'),

/*---------------------------------------------------------------------------------------------------------*/
CREATE TABLE design (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    description VARCHAR(255),
    `file` VARCHAR(255),
    price VARCHAR(255),
  3duser_id INT,
  FOREIGN KEY (3duser_id) REFERENCES 3duser (id),
);

INSERT INTO design (name, description, `file` , price, 3duser_id) VALUES


/*---------------------------------------------------------------------------------------------------------*/
CREATE TABLE design_sofware (
  id INT PRIMARY KEY AUTO_INCREMENT,
  design_id INT,
  software_id INT,
  FOREIGN KEY (design_id) REFERENCES design (id),
  FOREIGN KEY (software_id) REFERENCES software (id),
);

INSERT INTO design_sofware (design_id, software_id) VALUES
(2, 2),
(1, 3),
(4, 2),
(1, 1),
(1, 6),
(1, 2),
(3, 2);


/*---------------------------------------------------------------------------------------------------------*/
CREATE TABLE order_designs (
    id INT PRIMARY KEY AUTO_INCREMENT,
  3duser_id INT,
  design_id INT,
  FOREIGN KEY (3duser_id) REFERENCES 3duser (id),
  FOREIGN KEY (design_id) REFERENCES design (id),
);

INSERT INTO order_designs (3duser_id, design_id) VALUES
(2, 2),
(1, 3),
(4, 2),
(1, 1),
(1, 6),
(1, 2),
(3, 2);


/*---------------------------------------------------------------------------------------------------------*/
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


/*---------------------------------------------------------------------------------------------------------*/
CREATE TABLE design_category (
  id INT AUTO_INCREMENT PRIMARY KEY,
  design_id INT,
  category_id INT,
  FOREIGN KEY (design_id) REFERENCES design (id),
  FOREIGN KEY (category_id) REFERENCES category (id),

INSERT INTO design_category (design_id, category_id) VALUES


/*---------------------------------------------------------------------------------------------------------*/
CREATE TABLE 3duser_printer (
  id INT AUTO_INCREMENT PRIMARY KEY,
  3duser_id INT,
  printer_id INT,
  FOREIGN KEY (3duser_id) REFERENCES 3duser (id),
  FOREIGN KEY (printer_id) REFERENCES printer (id),
);


/*---------------------------------------------------------------------------------------------------------*/
CREATE TABLE material (
  id INT AUTO_INCREMENT PRIMARY KEY,
  material_type VARCHAR(255) NOT NULL,
);

INSERT INTO material (material_type) VALUES


/*---------------------------------------------------------------------------------------------------------*/
CREATE TABLE printer_material (
  id INT AUTO_INCREMENT PRIMARY KEY,
  material_type VARCHAR(255) NOT NULL,
  printer_id INT,
  material_id INT,
  FOREIGN KEY (printer_id) REFERENCES printer (id),
  FOREIGN KEY (material_id) REFERENCES material (id),
);

INSERT INTO printer_material (material_type, printer_id, material_id) VALUES


/*---------------------------------------------------------------------------------------------------------*/
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

INSERT INTO order_prints (layer_height, price, quantity, 3duser_sell_id, 3duser_buy_id, design_id, printer_id, material_id) VALUES


/*---------------------------------------------------------------------------------------------------------*/
CREATE TABLE comments (
  id INT AUTO_INCREMENT PRIMARY KEY,
  comments VARCHAR(255) NOT NULL,
  3duser_id INT,
  FOREIGN KEY (3duser_id) REFERENCES 3duser (id),
);

INSERT INTO comments (comments, 3duser_id) VALUES



