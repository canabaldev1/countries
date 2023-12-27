import {
  EMPTY_COUNTRIES,
  SEARCH_COUNTRIES,
  FILTER,
  ADD_ACTIVITY,
} from "./actions";

const initialState = {
  countries: [],
  countriesToShow: [],
  activities: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_COUNTRIES:
      return {
        ...state,
        countries: action.payload,
        countriesToShow: action.payload,
      };

    case EMPTY_COUNTRIES:
      return {
        ...state,
        countries: [],
        countriesToShow: [],
      };

    case FILTER:
      const filterData = action.payload;
      const { order, continents, activities } = filterData;

      let filteredCountries = [...state.countries];

      filteredCountries = continents.length
        ? filteredCountries.filter((country) =>
            continents.some((country) => country === country.continent)
          )
        : filteredCountries;

      filteredCountries = activities.length
        ? filteredCountries.filter(
            (country) => {
              // console.log(country);
              console.log(activities);
              const activitiesOfCountry = country.Activities.map(
                (act) => act.name
              );
              console.log(activitiesOfCountry);

              return activities.some((act) =>
                activitiesOfCountry.includes(act)
              );
            }

            // activities.some((activity) => {
            //   console.log(activity);
            //   console.log(country);
            //   console.log(country.Activities);

            //   return activity === country.Activities.name;
            // })
          )
        : filteredCountries;

      if (order === "ascending") {
        filteredCountries = filteredCountries.sort();
      } else {
        filteredCountries = filteredCountries.sort().reverse();
      }

      return { ...state, countriesToShow: filteredCountries };

    case ADD_ACTIVITY:
      return { ...state };

    default:
      return { ...state };
  }
};

export default rootReducer;
