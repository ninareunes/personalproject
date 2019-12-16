import {
  TOGGLE_FAVORITE,
  SET_FILTERS,
  SET_SPOTS,
  SET_DETAILS,
  DELETE_FAVORITE,
  SET_FAVORITES
} from "../actions/spots";

let SPOTS = [];

const initialState = {
  spots: SPOTS, //all spots
  appliedFilters: { open: false, intent: "", prices: "" }, //filteredspots
  favoriteSpots: [] //store data on server so user don't have to restart
};

const state = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_FAVORITE:
      const spot = state.spots.find(spot => spot.id === action.spotId);
      return { ...state, favoriteSpots: state.favoriteSpots.concat(spot) };

    case DELETE_FAVORITE:
      const existingIndex = state.favoriteSpots.findIndex(
        spot => spot.id === action.spotId
      );
      const updatedFavSpots = [...state.favoriteSpots];
      updatedFavSpots.splice(existingIndex, 1);
      return { ...state, favoriteSpots: updatedFavSpots };

    case SET_SPOTS:
      return { ...state, spots: action.spots };

    case SET_DETAILS:
      return { ...state, detailsSpot: action.details };

    case SET_FILTERS:
      // const appliedFilters = action.filters;
      // const updatedFilteredSpots = state.spots.filter(spot => {
      //   if (appliedFilters.open && !spot.isOpen) {
      //     //if i'm looking for open spots but it's not open = drop it
      //     return false;
      //   }

      //   return true;
      // });

      console.log(action.filters);
      return { ...state, appliedFilters: action.filters };
    default:
      return state;
  }
};

export default state;
