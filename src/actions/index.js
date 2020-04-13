export const types = {
    BUY_ITEM = 'BUY_ITEM',
    REMOVE_ITEM = 'REMOVE_ITEM'
};


//action option #1
export const buyItem = feature => {
    return {
        type: types.BUY_ITEM,
        payload: feature
    };
};

//action option #2
export const removeItem = feature => {
    return {
        type: types.REMOVE_ITEM,
        payload: feature
    };
};