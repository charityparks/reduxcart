function cartReducer(state, action) {
    if (state === undefined) {
        return {
            totalCost: 0,
            productCart: []
        };
    }

    switch (action.type) {
        case "add Product":
            return {
                ...state,
                totalCost: state.totalCost+parseInt(action.productData.productPrice),
                productCart: state.productCart.concat({
                    productName: action.productData.productName,
                    productPrice: action.productData.productPrice
                })
            }
    }
}