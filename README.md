Descripcion

La api permite gestionar un catalogo de productos, incluyendo operaciones CRUD(Crear, Leer, Actualizar, Eliminar) y busquedas especificas


Iniciar Proyecto

El comando 'npm start' ejecuta el programa


Autenticacion

Su uso requiere autenticacion por medio de POST user/register. Una vez creado el usuario, necesita loguearse por medio de GET auth/login. Despues de loguearse le dara un token para usar la api con operaciones basicas y busquedas.



Endpoints

Obtener todos los productos
GET api/products

Respuesta: 200 OK
[
    {
        "id": "6hZqvU6LxLe3j0pD66ltd",
        "name": "Samsung A02 red modificado",
        "stock": 16,
        "category": "samsung",
        "price": 330000
    },
    {
        "id": "A4UPt4qqt4rnq3yvId6Ga",
        "category": "samsung",
        "stock": 15,
        "name": "Samsung galaxi A03",
        "price": 209800
    },
    {
        "id": "GQA5sNxs3t5trXrryjH0d",
        "category": "samsung",
        "stock": 18,
        "name": "Samsung A10 black",
        "price": 310000
    },
    {
        "id": "oTy9EJ0iTMMlMdsbSx2Ma",
        "category": "samsung",
        "price": 330000,
        "name": "Samsung A02 red",
        "stock": 16
    }
]

Obtener un producto por ID
GET api/products/{id}

Respuesta: 200 OK
{
    "id": "6hZqvU6LxLe3j0pD66ltd",
    "name": "Samsung A02 red modificado",
    "stock": 16,
    "category": "samsung",
    "price": 330000
}


Crear un producto
POST api/products

Cuerpo de solicitud:
{
    "name": "Samsung A03",
    "stock": 9,
    "category": "samsung",
    "price": 370000
}

Respuesta: 201 Created
{
    "name": "Samsung A03",
    "price": 370000,
    "category": "samsung",
    "stock": 9
}

Filtrar productos por categoria
GET api/products-category?category={category}

Respuesta: 200 OK
[
    {
        "id": "6hZqvU6LxLe3j0pD66ltsjka",
        "name": "Samsung A02 red modificado",
        "stock": 16,
        "category": "samsung",
        "price": 330000
    },
    {
        "id": "A4UPt4qqt4rnq3yvId6Gshjs",
        "category": "samsung",
        "stock": 15,
        "name": "Samsung galaxi A03",
        "price": 209800
    },
    {
        "id": "GQA5sNxs3t5trXrryjH0swwq",
        "category": "samsung",
        "stock": 18,
        "name": "Samsung A10 black",
        "price": 310000
    },
    {
        "id": "ifjDcOZIvVXPgsCO6la6sfha",
        "name": "Samsung A03",
        "price": 370000,
        "category": "samsung",
        "stock": 9
    },
    {
        "id": "oTy9EJ0iTMMlMdsbSx2Maf",
        "category": "samsung",
        "price": 330000,
        "name": "Samsung A02 red",
        "stock": 16
    }
]

Actualizar producto por ID
PUT api/products/{id}

Cuerpo de solicitud:
{
    "name": "Samsung A03 modificado",
    "stock": 17,
    "category": "samsung",
    "price": 770000
}

Respuesta: 200 OK
{
    "name": "Samsung A03 modificado",
    "price": 770000,
    "category": "samsung",
    "stock": 17
}


Actualizar parcialmente producto por ID
PATCH api/products/{id}

Cuerpo de solicitud:
{
    "name": "Samsung A03 modificado",
    "stock": 17,
    "category": "samsung",
    "price": 770000
}

Respuesta: 200 OK
{
    "name": "Samsung A03 change",
    "price": 770000,
    "category": "samsung",
    "stock": 17
}

Eliminar producto por ID
DELETE api/products/{id}

Respuesta: 200 OK 
{
    "message": "Se elimino exitosamente"
}

Crear usuario
POST user/register

Cuerpo de la solicitud:
{
    "email": "noe@gmail.com",
    "name": "noelia",
    "password": "programacion"
}

Respuesta: 201 Created
{
    "message": "Se creo exitosamente"
}

Obtener todos los usuarios
GET user/users

Respuesta: 200 OK
[
    {
        "id": "00045",
        "name": "nerea",
        "password": "7635",
        "email": "nere@gmail.com"
    },
    {
        "id": "IVNezXDBbB8JDHZpK1QNjdft",
        "name": "javi",
        "email": "javi2@gmail.com",
        "password": "tec"
    },
    {
        "id": "Vbqhmjm5Udsz7QAOeI0sdgyfa",
        "name": "noelia",
        "email": "noe@gmail.com",
        "password": "programacion-4"
    },
    {
        "id": "lg3duRQpjUszBIHAFn9Bdrz",
        "name": "pablo",
        "email": "pa@gmail.com",
        "password": "electrik34"
    }
]

Verifica usuario por email
POST user/check-user

Cuerpo de la solicitud:
{
    "email": "noe@gmail.com"
}

respuesta: 200 OK

{
        "id": "Vbqhmjm5Udsz7QAOeI0sdgyfa",
        "name": "noelia",
        "email": "noe@gmail.com",
        "password": "programacion-4"
}

Verifica si estan autenticados
GET auth/login

Cuerpo de solicitud:
{
    "email": "noe@gmail.com",
    "password": "programacion"
}

respuesta: 200 OK
{
    "token": "JWT"
}




