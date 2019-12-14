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
  filteredSpots: SPOTS, //filteredspots
  favoriteSpots: [] //store data on server so user don't have to restart
};

const state = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_FAVORITE:
      // const existingIndex = state.favoriteSpots.findIndex(
      //   spot => spot.id === action.spotId
      // );
      //find if id exists in favoriteSpots array
      //console.log(existingIndex);
      // if (existingIndex >= 0) {
      //   const updatedFavSpots = [...state.favoriteSpots];
      //   updatedFavSpots.splice(existingIndex, 1);
      //   return { ...state, favoriteSpots: updatedFavSpots };
      //   //if so delete from array
      // } else {
      //   const spot = state.spots.find(spot => spot.id === action.spotId);
      //   return { ...state, favoriteSpots: state.favoriteSpots.concat(spot) };
      //   //if not, put in array
      // }
      const spot = state.spots.find(spot => spot.id === action.spotId);
      return { ...state, favoriteSpots: state.favoriteSpots.concat(spot) };

    case DELETE_FAVORITE:
      const existingIndex = state.favoriteSpots.findIndex(
        spot => spot.id === action.spotId
      );
      const updatedFavSpots = [...state.favoriteSpots];
      updatedFavSpots.splice(existingIndex, 1);
      return { ...state, favoriteSpots: updatedFavSpots };

    case SET_FILTERS:
      const appliedFilters = action.filters;
      const updatedFilteredSpots = state.spots.filter(spot => {
        if (appliedFilters.open && !spot.isOpen) {
          return false;
        }

        return true;
      });
      return { ...state, filteredSpots: updatedFilteredSpots };

    case SET_SPOTS:
      return { ...state, spots: action.spots };

    case SET_DETAILS:
      return { ...state, detailsSpot: action.details };
    default:
      return state;
  }
};

export default state;
