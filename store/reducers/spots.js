import { SPOTS } from "../../data/dummy-data";
import { TOGGLE_FAVORITE } from "../actions/spots";

const initialState = {
  spots: SPOTS,
  filteredSpots: SPOTS,
  favoriteSpots: [] //store data on server so user don't have to restart
};

const spotsReducer = (state = initialState, action) => {
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
    default:
      return state;
  }
};

export default spotsReducer;
