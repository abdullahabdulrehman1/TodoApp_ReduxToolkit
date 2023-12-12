
import { configureStore } from '@reduxjs/toolkit';
import todoslice from './todoslice';

const store = configureStore({
    reducer: todoslice,
});

export default store;
