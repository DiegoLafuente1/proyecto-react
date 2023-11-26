const products = [
    { id: 1, name: 'Producto 1', price: 3000, stock: 10, description: 'NIKE COURT VISION MID NN ', img: 'https://f.fcdn.app/imgs/7cf5e3/www.lacancha.uy/lcanuy/dc81/webp/catalogo/DN3577_600_1/800x800/nike-court-vision-mid-nn-nike-court-vision-mid.jpg ' },
    { id: 2, name: 'Producto 2', price: 3500, stock: 50, description: 'NIKE COURT VISION MID', img: 'https://f.fcdn.app/imgs/5dd654/www.lacancha.uy/lcanuy/636e/webp/catalogo/CD5466_200_1/800x800/nike-court-vision-mid-nike-court-vision-mid.jpg' },
    { id: 3, name: 'Producto 3', price: 5000, stock: 30, description: 'NIKE COURT VISION LOW', img: 'https://f.fcdn.app/imgs/c4ef81/www.lacancha.uy/lcanuy/2b73/webp/catalogo/DH2987_005_1/800x800/nike-court-vision-low-nike-court-vision-low.jpg' },
    { id: 4, name: 'Producto 4', price: 5000, stock: 60, description: 'NIKE FLEX PLUS 2 NN', img: 'https://f.fcdn.app/imgs/7c2711/www.lacancha.uy/lcanuy/725e/webp/catalogo/DV8999_003_1/800x800/nike-flex-plus-2-nn-nike-flex-plus-2-nn.jpg' },
    { id: 5, name: 'Producto 5', price: 2500, stock: 11, description: 'NIKE AIR ZOOM STRUCTURE 25', img: 'https://f.fcdn.app/imgs/77367f/www.lacancha.uy/lcanuy/a7f7/webp/catalogo/DJ7883_003_1/800x800/nike-air-zoom-structure-25-nike-air-zoom-structure-25.jpg' },
    { id: 6, name: 'Producto 6', price: 7000, stock: 22, description: 'NIKE AIR ZOOM PEGASUS 40', img: 'https://f.fcdn.app/imgs/183874/www.lacancha.uy/lcanuy/b5cc/webp/catalogo/DV3853_401_1/800x800/nike-air-zoom-pegasus-40-nike-air-zoom-pegasus-40.jpg' },
    { id: 7, name: 'Producto 7', price: 3600, stock: 24, description: 'NIKE AIR MAX EXCEE', img: 'https://f.fcdn.app/imgs/23f79a/www.lacancha.uy/lcanuy/e3e2/webp/catalogo/DZ0795_013_1/800x800/nike-air-max-excee-nike-air-max-excee.jpg' },
    { id: 8, name: 'Producto 8', price: 4000, stock: 50, description: 'NIKE AIR MAX EXCEE BLACK', img: 'https://f.fcdn.app/imgs/bcb354/www.lacancha.uy/lcanuy/9980/webp/catalogo/CD4165_003_1/800x800/nike-air-max-excee-nike-air-max-excee.jpg' },
    { id: 9, name: 'Producto 9', price: 3200, stock: 8, description: 'NIKE COURT VISION LOW BLACK', img: 'https://f.fcdn.app/imgs/57e3ab/www.lacancha.uy/lcanuy/0ed6/webp/catalogo/DH2987_002_1/800x800/nike-court-vision-low-nike-court-vision-low.jpg' },
    { id: 10, name: 'Producto 10', price: 6600, stock: 40, description: 'NIKE COURT LEGACY', img: 'https://f.fcdn.app/imgs/583210/www.lacancha.uy/lcanuy/ed0d/webp/catalogo/DH3162_002_1/800x800/nike-court-legacy-nike-court-legacy.jpg' },
    { id: 11, name: 'Producto 11', price: 5000, stock: 20, description: 'NIKE COURT VISION LOW', img: 'https://f.fcdn.app/imgs/4b02a1/www.lacancha.uy/lcanuy/7199/webp/catalogo/FJ5437_133_1/800x800/nike-court-vision-low-nike-court-vision-low.jpg' },
    { id: 12, name: 'Producto 12', price: 4200, stock: 13, description: 'NIKE COURT VISION MID NN', img: 'https://f.fcdn.app/imgs/80180a/www.lacancha.uy/lcanuy/05a5/webp/catalogo/DN3577_002_1/800x800/nike-court-vision-mid-nn-nike-court-vision-mid-nn.jpg' },
    
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
            resolve(products.find(prod => prod.id === +productId));  
        }, 500);
    });
};


console.log(products)