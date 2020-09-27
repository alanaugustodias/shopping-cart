import products from '../data/products.json';

const initialState = {
    productsList: products
};

export default (state = initialState, action) => {
    switch (action) {
        default: {
            return state;
        }
    }
};
