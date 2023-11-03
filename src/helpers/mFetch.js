const products = [
    { id: 1, name: 'Producto 1', price: 3000, stock: 300, description: 'ddddddddddddddddddddddddddddddddddddddddddddd', img: 'https://static.nike.com/a/images/t_default/f8dfa191-60b3-44c1-b730-b25e0a908c35/calzado-air-force-1-07-easyon-vpmlK3.png ' },
    { id: 2, name: 'Producto 2', price: 3500, stock: 250, description: 'eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee', img: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/daa7956d-d866-4f4a-a90a-32b94028782c/air-force-1-07-lv8-zapatillas-00zsgK.png' },
    { id: 3, name: 'Producto 3', price: 5000, stock: 150, description: 'fffffffffffffffffffffffffffffffffffffffffffff', img: 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/176ae550-15e0-4e85-abfd-f5a1685f2031/air-max-pulse-zapatillas-DtVTbL.png' },
    { id: 3, name: 'Producto 3', price: 5000, stock: 150, description: 'fffffffffffffffffffffffffffffffffffffffffffff', img: 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/176ae550-15e0-4e85-abfd-f5a1685f2031/air-max-pulse-zapatillas-DtVTbL.png' },
];

export const mFetch = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 500)
    });
};


export const getProductById = (productId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve (products.find(prod => prod.id === productId))
        }, 500)
    })
}