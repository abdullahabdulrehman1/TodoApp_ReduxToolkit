// import userReducer from './features/TodoSlice';

import { configureStore } from '@reduxjs/toolkit';
import TodoSlice from '../features/TodoSlice';

export default configureStore({
    reducer: {
        user: TodoSlice,
    },
});

// export default store;