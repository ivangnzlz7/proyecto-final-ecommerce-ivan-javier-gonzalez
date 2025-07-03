export function nameValidated(name) {
    // Permite letras, numeros, espacios y algunos caracteres especiales
    const regex = /^[a-zA-Z0-9áéíóúÁÉÍÓÚñÑ\s.,-]+$/;

    if (!name || name.trim() === '') {
        throw new Error('El nombre no puede estar vacio');
    };

    if (name.length > 40) {
        throw new Error(`El nombre "${name}" no puede tener mas de 40 catacteres`);
    };

    if (!regex.test(name)) {
        throw new Error(`El nombre "${name}" contiene caracteres no permitidos`);
    };
    return;
}

export function priceValidated(price) {
    const priceNum = Number(price);
    const decimals = /^\d+(\.\d{1,2})?$/

    if (isNaN(priceNum)) {
        throw new Error('El precio debe ser un numero');
    }

    if (priceNum <= 0) {
        throw new Error('El precio debe ser mayor a cero');
    }

    if (priceNum > 1000000) {
        throw new Error('El precio no puede ser mayor a 1.000.000');
    }

    if (!decimals.test(price.toString())) {
        throw new Error('El precio no puede tener mas de 2 decimales');
    }
    return;
}

export function stockValidated(stock) {
    const stockNum = Number(stock);

    if (isNaN(stockNum)) {
        throw new Error('El stock debe ser un numero');
    }

    if (!Number.isInteger(stockNum)) {
        throw new Error('El stock debe ser un numero entero');
    }

    if (stockNum < 0) {
        throw new Error('El stock debe ser mayor a cero');
    }

    if (stockNum > 100000) {
        throw new Error('El stock no puede ser mayor a 100,000');
    }
    return;
}

export function categoryValidated(category) {
    if (!category || category.trim() === '') {
        throw new Error('La categoria no puede estar vacia');
    }
    return;
}

export function minAndMax(min, max){
    const minNum = Number(min);
    const maxNum = Number(max);
    
    if (isNaN(minNum) || isNaN(maxNum)) {
        throw new Error('Debe enviar un numero');
    }

    if (minNum < 0 || maxNum < 0) {
        throw new Error('No se permite numeros negativos');
    }
    return;
}

export const productValidated = ({ name, price, stock, category }) => {
    nameValidated(name);
    priceValidated(price);
    stockValidated(stock);
    categoryValidated(category);
    return {
        name,
        price,
        stock,
        category
    }
}