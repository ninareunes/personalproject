import Spot from "../../models/spot";
export const TOGGLE_FAVORITE = "TOGGLE_FAVORITE";
export const DELETE_FAVORITE = "DELETE_FAVORITE";
export const SET_FILTERS = "SET_FILTERS";
export const SET_SPOTS = "SET_SPOTS";
export const SET_DETAILS = "SET_DETAILS";
export const SET_FAVORITES = "SET_FAVORITES";

export const fetchSpots = (fetchLocation, filters) => {
  lng = fetchLocation.longitude;
  lat = fetchLocation.latitude;
  open = filters.open;
  intent = filters.intent;
  limit = 7;
  client_id = "WAQ1DXFGRQU2AGEWCSVB14ZVMK4DUSY1F3VNHR3BJ35BWGLN";
  client_secret = "KCXKV1MRTCAVBADDZ4HJ4YVGNYGGJQ5CVVN0NLMN1XIEXNAO";
  versionDate = 20191201;
  return async dispatch => {
    const response = await fetch(
      `https://api.foursquare.com/v2/search/recommendations?client_id=${client_id}&client_secret=${client_secret}&v=${versionDate}&limit=${limit}&ll=${lat},${lng}&intent=${intent}&openNow=${open}`
    );
    const resData = await response.json();
    let items = resData.response.group.results;

    const loadedSpots = [];

    items.map(item => {
      let image = "";

      if (item.photo) {
        image = `${item.photo.prefix}1068x1900${item.photo.suffix}`;
      } else {
        image = `${item.venue.categories[0].icon.prefix}512${item.venue.categories[0].icon.suffix}`;
      }

      loadedSpots.push(
        new Spot(
          item.venue.id,
          item.venue.name,
          "alle spots desc",
          item.venue.location.lat,
          item.venue.location.lng,
          image,
          item.venue.location.address,
          item.venue.location.city,
          item.venue.categories[0].name,
          "no site found"
        )
      );
    });
    dispatch({ type: SET_SPOTS, spots: loadedSpots });
  };
};

export const detailsSpot = id => {
  client_id = "WAQ1DXFGRQU2AGEWCSVB14ZVMK4DUSY1F3VNHR3BJ35BWGLN";
  client_secret = "KCXKV1MRTCAVBADDZ4HJ4YVGNYGGJQ5CVVN0NLMN1XIEXNAO";
  return async dispatch => {
    const response = await fetch(
      `https://api.foursquare.com/v2/venues/${id}?client_id=${client_id}&client_secret=${client_secret}&v=20180323`
    );

    const resData = await response.json();

    let item = resData.response.venue;
    const chosenSpot = new Spot(
      item.id,
      item.name,
      item.description,
      item.location.lat,
      item.location.lng,
      `${item.bestPhoto.prefix}612x612${item.bestPhoto.suffix}`,
      item.location.address,
      item.location.city,
      item.categories[0].shortName,
      item.url
    );
    //console.log(chosenSpot);

    dispatch({ type: SET_DETAILS, details: chosenSpot });
  };
};

export const fetchFavorites = () => {
  return async dispatch => {
    const response = await fetch(
      "https://neighbourhood-d7cd8.firebaseio.com/favorites.json"
    );

    if (!response.ok) {
      throw new Error("Something is not working");
    }

    const resData = await response.json();
    dispatch({ type: SET_FAVORITES, favorites: [] });
  };
};

export const toggleFavorite = favId => {
  return async dispatch => {
    const response = await fetch(
      "https://neighbourhood-d7cd8.firebaseio.com/favorites.json",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ favId })
      }
    );

    if (!response.ok) {
      throw new Error("Something is not working");
    }

    const resData = await response.json();

    dispatch({
      type: TOGGLE_FAVORITE,
      spotId: favId
    });
  };
}; //adding favorite id to database

export const deleteFavorite = id => {
  return async dispatch => {
    await fetch(
      `https://neighbourhood-d7cd8.firebaseio.com/favorites/${id}.json`,
      {
        method: "DELETE"
      }
    );
    dispatch({ type: DELETE_FAVORITE, spotId: id });
  };
};

export const setFilters = filterSettings => {
  return { type: SET_FILTERS, filters: filterSettings };
}; //filterSettings = object
