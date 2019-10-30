const initialState = '';

export const filterReducer = (state=initialState, action) => {
    switch(action.type) {
        case 'SEARCH':
            const newState = action.content;
            return newState;
        
        default: return state;
    }
};

export const updateSearchString = (input) => {
    return {
        type: 'SEARCH',
        content: input
    };
};
