import { configureStore, createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: { counter: 0 },
  reducers: {
    increment(state, action) {
      state.counter++;
    },
    decrement(state, action) {
      state.counter--;
    },
    addBy(state, action) {
      state.counter += action.payload;
    },
  },
});

const store = configureStore({
  reducer: counterSlice.reducer,
});

export const actions = counterSlice.actions;

export default store;

/*
const initialState = { counter: 0 };

const reducerFn = (state = initialState, action) => {
  switch (action.type) {
    case "INC":
      return { counter: state.counter + 1 };
    case "DEC":
      return { counter: state.counter - 1 };
    case "ADD":
      return { counter: state.counter + action.payload };
    default:
      return state;
  }
};

const store = configureStore({
  reducer: reducerFn,
});

export default store;

*/
