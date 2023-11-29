import { SEARCH_COUNTRIES } from "./actions";

const initialState = {
  countries: [],
  activities: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_COUNTRIES:
      return {
        ...state,
        countries: action.payload,
      };

    default:
      return { ...state };
  }
};

export default rootReducer;
