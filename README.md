# API de productos

La api permite gestionar un catalogo de productos, incluyendo operaciones CRUD(Crear, Leer, Actualizar, Eliminar) y busquedas especificas

## Base URL
`https://ecommerce-api-y8cy.onrender.com`

## Iniciar Proyecto

El comando `npm run start` ejecuta el programa

## Dependencias

- **body-parser**
- **cors**
- **dotenv**
- **express**
- **firebase**
- **jsonwebtoken**

## Instalar dependencias
  ```
  npm install `aqui el nombre de las dependencias`
  ```


## Endpoints De Productos

### Obtener todos los productos
- **URL**: `GET api/products`
- **Descripcion**: Retorna todos los productos disponibles
- **Respuesta exitosa**:
  ```json
  [
    {
        "id": "M496845k4chS0kcE6zAJPQ8E06B9D",
        "name": "samsung grey 10 front",
        "stock": 15,
        "price": 468000,
        "category": "samsung"
    },
    {
        "id": "X37n53msf67HG64Gwqm266caFP7Y6va0",
        "name": "Samsung galaxi A04",
        "price": 20980.99,
        "category": "samsung",
        "stock": 20
    },
    {
        "id": "Y2LnY3Tio5YKM5lvoS56VGv7T8",
        "category": "apple",
        "price": 919000,
        "stock": 10,
        "name": "Iphone 15 blue front"
    },
    {
        "id": "qc482duxq93tf3VHFjHiD8wd6v",
        "name": "Samsung A012 Violet",
        "price": 900000,
        "category": "apple",
        "stock": 8
    },
    {
        "id": "wdqa3zZ8O5oT3498sO563aEd6",
        "category": "apple",
        "name": "Iphone PRO MAX blue 10",
        "price": 220980,
        "stock": 12
    }
  ]
  ```

### Obtiene un producto por ID

- **URL**: `GET api/products/{id}`
- **Descripcion**: Retorna el producto especifico
- **Respuesta exitosa**:
  ```json
   {
       "id": "M9635kc345hS07k6c4EzA8JPQ76E40BD",
       "name": "samsung grey 10 front",
       "stock": 15,
       "price": 468000,
       "category": "samsung"
   }
  ```

### Crea un producto

- **URL**: `POST api/products/create`
- **Descripcion**: Crea un producto
- **Cuerpo de la solicitud**:
  ```json
    {
        "name": "Iphone PRO MAX blue 10",
        "price": 220980,
        "category": "apple",
        "stock": 12
    }
  ```
- **Respuesta exitosa**:
  ```json
    {
        "name": "Iphone PRO MAX blue 10",
        "price": 220980,
        "category": "apple",
        "stock": 12
    }
  ```

### Actualiza totalmente un producto 

- **URL**: `PUT api/products/{id}`
- **Descripcion**: Actualiza todo el producto por ID
- **Cuerpo de la solicitud**:
  ```json
    {
        "category": "category",
        "name": "name",
        "price": "price",
        "stock": "stock"
    }
  ```

- **Respuesta exitosa**:
  ```json
    {
        "message": "Se ha actualizado correctamente"
    }
  ```

### Actualiza parcialmente un producto

- **URL**: `PATCH api/products/{id}`
- **Descripcion**: Actualiza parcialmente el producto por ID
- **Cuerpo de la solicitud**:
  ```json
    {
        "category": "category",
        "name": "name",
        "price": "price",
        "stock": "stock"
    }
  ```

- **Respuesta exitosa**:
  ```json
    {
        "message": "Se ha actualizado correctamente"
    }
  ```


### Elimina un producto

- **URL**: `DELETE api/products/{id}`
- **Descripcion**: Elimina el producto por ID
- **Respuesta exitosa**:
  ```json
    {
        "message": "Se elimino exitosamente"
    }
  ```

### Filtra productos por categoria

- **URL**: `GET api/products-category?category={category}`
- **Descripcion**: Obtiene aquellos productos especificos por categoria
- **Respuesta exitosa**:
  ```json
  [
    {
        "id": "M96384kchS0k34cE5zAJP565Q8E0B9D",
        "name": "samsung grey 10 front",
        "stock": 15,
        "price": 468000,
        "category": "samsung"
    },
    {
        "id": "X7n33msf65HG44Gw4qm26caFPY556va60",
        "name": "Samsung galaxi A04",
        "price": 20980.99,
        "category": "samsung",
        "stock": 20
    }
  ]
  ```

### Filtra productos por precio

- **URL**: `GET api/products-price?min={min}&max={max}`
- **Descripcion**: Obtiene aquellos productos especificos por precio
- **Respuesta exitosa**:
  ```json
   [
    {
        "id": "M96384kchS0k34cE5zAJP565Q8E0B9D",
        "name": "samsung grey 10 front",
        "stock": 15,
        "price": 468000,
        "category": "samsung"
    },
    {
        "id": "X7n33msf65HG44Gw4qm26caFPY556va60",
        "name": "Samsung galaxi A04",
        "price": 20980.99,
        "category": "samsung",
        "stock": 20
    }
  ]
  ```

## Endpoints De Usuarios

### Registra usuario

- **URL**: `POST user/register`
- **Descripcion**: Crea un usuario
- **Cuerpo de la solicitud**:
  ```json
    {
        "email": "Tu email",
        "name": "Tu name",
        "password": "Tu password"
    }
  ```
- **Respuesta exitosa**:
  ```json
    {
        "message": "Se creo exitosamente"
    }
  ```


### Verifica usuario

- **URL**: `POST user/check-user`
- **Descripcion**: verifica en la base de datos si existe el usuario
- **Cuerpo de la solicitud**:
  ```json
    {
        "email": "Tu email"
    }
  ```
- **Respuesta exitosa**:
  ```json
    { 
        "id": "fajh3424jkhda",
        "email": "Tu email",
        "name": "Tu name",
        "password": "Tu password"
    }
  ```


# Tecnologias Implementadas

- **Javascript**


# Autenticacion

Su uso requiere autenticacion por medio de `POST user/register`. Una vez creado el usuario, necesita loguearse por medio de `POST auth/login`. Despues de loguearse le dara un token para usar la api con operaciones basicas y busquedas.

### Iniciar sesion

- **URL**: `POST auth/login`
- **Descripcion**: Inicia sesion el usuario
- **Cuerpo de la solicitud**:
  ```json
    {
        "email": "Tu email",
        "password": "Tu password"
    }
  ```
- **Respuesta exitosa**:
  ```json
    {
        "token": "Tu token"
    }
  ```




