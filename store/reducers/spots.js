import {
  TOGGLE_FAVORITE,
  SET_FILTERS,
  SET_SPOTS,
  SET_DETAILS
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
      const existingIndex = state.favoriteSpots.findIndex(
        spot => spot.id === action.spotId
      );
      if (existingIndex >= 0) {
        const updatedFavSpots = [...state.favoriteSpots];
        updatedFavSpots.splice(existingIndex, 1);
        return { ...state, favoriteSpots: updatedFavSpots };
      } else {
        const spot = state.spots.find(spot => spot.id === action.spotId);
        return { ...state, favoriteSpots: state.favoriteSpots.concat(spot) };
      }

    case SET_FILTERS:
      const appliedFilters = action.filters;
      const updatedFilteredSpots = state.spots.filter(spot => {
        if (appliedFilters.open && !spot.isOpen) {
          return false;
        }

        return true;
      });
      return { ...state, filteredSpots: updatedFilteredSpots };
    default:
      return state;

    case SET_SPOTS:
      return { ...state, spots: action.spots };

    case SET_DETAILS:
      return { ...state, detailsSpot: action.details };
  }
};

export default state;
