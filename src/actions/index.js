export const BUY_ITEM = 'BUY_ITEM';
export const REMOVE_ITEM = 'REMOVE_ITEM'


//action option #1
export const buyItem = feature => {
    return {
        type: BUY_ITEM,
        payload: feature
    };
};

//action option #2
export const removeItem = feature => {
    return {
        type: REMOVE_ITEM,
        payload: feature
    };
};