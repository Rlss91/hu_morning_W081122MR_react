import { createSlice } from "@reduxjs/toolkit";
//const [counter, setCounter] = useState(initialState)

/*
    ... = useState({
        counter: 0
    })
*/

const initialState = {
  counter: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    add1(state) {
      state.counter = state.counter + 1;
    },
  },
});

/*
    createSlice({
        name: "like react key",
        initialState,
        reducers: {
            functions to update the state
            each function called action
        },
    });
*/

export const counterActions = counterSlice.actions;
/*
    const counterActions = counterSlice.actions
    export counterActions
*/

export default counterSlice.reducer;
/*
    reducer has state and actions
*/
