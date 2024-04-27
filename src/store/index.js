import { configureStore, createSlice } from '@reduxjs/toolkit';


const counterSlice = createSlice(
  {
    name: 'counter',
    initialState : { counter: 0 },
    reducers: {
      increase(state, action) {
        state.counter += 1;
       },
      decrease(state, action) {
        state.counter -= 1;
      
       },
      add(state, action) {
        state.counter += 100 ;
      
       }
    }
  }
)

export const actions = counterSlice.actions;

const store = configureStore({
  reducer: counterSlice.reducer
})


export default store;