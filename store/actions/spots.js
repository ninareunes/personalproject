import Spot from "../../models/spot";
export const TOGGLE_FAVORITE = "TOGGLE_FAVORITE";
export const SET_FILTERS = "SET_FILTERS";
export const SET_SPOTS = "SET_SPOTS";
export const SET_DETAILS = "SET_DETAILS";

export const fetchSpots = () => {
  long = 40.7243;
  lat = -74.0018;
  query = "";
  limit = 100;
  versionDate = 20191201;
  return async dispatch => {
    const response = await fetch(
      `https://api.foursquare.com/v2/venues/explore?client_id=BYABJHNNNEE0TPKCVF0GDJKEPUVZIUXKJCMXQT50LYYJITIL&client_secret=1BYWX15YDFTMWK0FKO3DUBUVXWDYJOFS4AX0QKANLLFN4OJG&v=${versionDate}&limit=${limit}&ll=40.7243,-74.0018&query=${query}`
    );
    const resData = await response.json();
    let items = resData.response.groups[0].items;

    const loadedSpots = [];

    items.map(item => {
      loadedSpots.push(
        new Spot(
          item.venue.id,
          item.venue.name,
          "alle spots desc",
          `${item.venue.categories[0].icon.prefix}512${item.venue.categories[0].icon.suffix}`,
          item.venue.location.address,
          item.venue.location.city,
          item.venue.categories[0].name
        )
      );
    });
    dispatch({ type: SET_SPOTS, spots: loadedSpots });
  };
};

export const detailsSpot = id => {
  return async dispatch => {
    const response = await fetch(
      `https://api.foursquare.com/v2/venues/${id}?client_id=BYABJHNNNEE0TPKCVF0GDJKEPUVZIUXKJCMXQT50LYYJITIL&client_secret=1BYWX15YDFTMWK0FKO3DUBUVXWDYJOFS4AX0QKANLLFN4OJG&v=20180323`
    );

    const resData = await response.json();
    let item = resData.response.venue;
    const chosenSpot = new Spot(
      item.id,
      item.name,
      item.description,
      `${item.bestPhoto.prefix}612x612${item.bestPhoto.suffix}`,
      item.location.address,
      item.location.city,
      item.categories[0].shortName,
      item.price.tier,
      item.url,
      item.popular.isOpen
    );

    dispatch({ type: SET_DETAILS, details: chosenSpot });
  };
};

export const toggleFavorite = id => {
  return { type: TOGGLE_FAVORITE, spotId: id };
};

export const setFilters = filterSettings => {
  return { type: SET_FILTERS, filters: filterSettings };
};
