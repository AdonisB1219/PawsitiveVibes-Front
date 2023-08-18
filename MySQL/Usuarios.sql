USE pawsitivevibes;

INSERT INTO usuario (nombre, telefono, correo, contraseña, imagen, administrador)
VALUE ('Adonis', '5512345671', 'adonis@gmail.com', 'adonis123$', 1, 1);

INSERT INTO usuario (nombre, telefono, correo, contraseña, imagen, administrador)
VALUE ('Adriana', '5512345672', 'adriana@gmail.com', 'adriana123$', 2, 1);

INSERT INTO usuario (nombre, telefono, correo, contraseña, imagen, administrador)
VALUE ('Carlos', '5512345673', 'carlos@gmail.com', 'carlos123$', 3, 1);

INSERT INTO usuario (nombre, telefono, correo, contraseña, imagen)
VALUE ('Diego', '5512345674', 'diego@gmail.com', 'diego123$', 4);

INSERT INTO usuario (nombre, telefono, correo, contraseña, imagen)
VALUE ('Bety', '5512345675', 'bety@gmail.com', 'bety123$', 5);

INSERT INTO usuario (nombre, telefono, correo, contraseña, imagen)
VALUE ('Mariel', '5512345676', 'mariel@gmail.com', 'mariel123$' ,6);

SELECT * FROM usuario;