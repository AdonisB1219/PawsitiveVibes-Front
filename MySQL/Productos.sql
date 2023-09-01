USE pawsitivevibes;

INSERT INTO productos (titulo, categoria, numstock, marca, descripcion, seccion, descuento, precio, imagen)
VALUES ('Arenero', 'Higiene', 5, 'Nupec', 'Arenero para gato', 'Gatos', 10, 450, '/src/img/imgProductos/arenero1.png');
INSERT INTO productos (titulo, categoria, numstock, marca, descripcion, seccion, descuento, precio, imagen)
VALUES ('Pelota', 'Juguete', 10, 'Nupec', 'Pelota limpiadora de dientes', 'Perros', 0, 95, './src/img/imgProductos/juguetePerro3.png');
INSERT INTO productos (titulo, categoria, numstock, marca, descripcion, seccion, descuento, precio, imagen)
VALUES ('Croqueta sabor salmón', 'Alimento', 10, 'Nupec', 'Alimento para perro, 2.5kg', 'Perros', 15, 1050.00, './src/img/imgProductos/comidaPerro1.png');
INSERT INTO productos (titulo, categoria, numstock, marca, descripcion, seccion, descuento, precio, imagen)
VALUES ('Rascador en torre', 'Hogar', 4, 'Nupec', 'Torre rascadora grande', 'Gatos', 10, 3600.00, './src/img/imgProductos/rascador1.png');
INSERT INTO productos (titulo, categoria, numstock, marca, descripcion, seccion, descuento, precio, imagen)
VALUES ('Comida en hojuelas', 'Alimento', 10, 'Nupec', 'Comida para peces en hojuelas, 1.5kg', 'Peces', 0, 150.00, './src/img/imgProductos/comidaPeces2.png');
INSERT INTO productos (titulo, categoria, numstock, marca, descripcion, seccion, descuento, precio, imagen)
VALUES ('Jaula para loro', 'Hogar', 7, 'Nupec', 'Jaula tamaño grande de metal', 'Aves', 10, 1500.00, './src/img/imgProductos/casaAve1.png');
INSERT INTO productos (titulo, categoria, numstock, marca, descripcion, seccion, descuento, precio, imagen)
VALUES ('Peluche de pato', 'Juguete', 10, 'Nupec', 'Juguete en forma de pato para perro grande', 'Perros', 0, 95.00, './src/img/imgProductos/juguetePerro2.png');

SELECT * FROM productos;