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
    sub1(state) {
      state.counter = state.counter - 1;
    },
  },
});

/*
    const initialState = {counter:0}
    const [state, setState] = useState(initialState)
    state.counter

    createSlice({
        name: "like react key",
        initialState: {
          counter: 0
        },
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
    this export needed to connect it with the big pie
*/
