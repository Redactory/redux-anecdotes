const initialState = 'Test notification';

export const notificationReducer = (state = initialState, action) => {
    switch (action.type){
        case 'PRESENT':
            const newNotification = action.content;
            return newNotification;

        default: return state;

    }
}