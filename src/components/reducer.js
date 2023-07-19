export const COMPLETED = "COMPLITED";
export const UNCOMPLETED = "UNCOMPLITED";

export const initialState = [
  {
    params: {},
  },
  {
    products: [],
  },
  {
    sheets: [],
  },
];

export const reducer = (state, action) => {
  switch (action.type) {
    case COMPLETED:
      return state.map((i) => {
        if (i.name === action.payload) i.isCompleted = true;
        return i;
      });
    case UNCOMPLETED:
      return state.map((i) => {
        if (i.name === action.payload) i.isCompleted = false;
        return i;
      });
    default:
      return state;
  }
};
