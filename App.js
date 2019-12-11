import React, { useState } from "react";
import * as Font from "expo-font";
import { AppLoading } from "expo";
import { useScreens } from "react-native-screens";
import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import ReduxThunk from "redux-thunk";

import RecommendNavigator from "./navigation/RecommendNavigator";
import spotReducer from "./store/reducers/spots";

useScreens();

const rootReducer = combineReducers({
  spots: spotReducer
});

const store = createStore(
  rootReducer,
  // compose(
  //   applyMiddleware(ReduxThunk),
  //   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  // )
  applyMiddleware(ReduxThunk)
);

const fetchFonts = () => {
  return Font.loadAsync({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf")
  });
};

// long = 40.7243;
// lat = -74.0018;
// query = "pizza";
// limit = 2;

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);
  // fetch(
  //   `https://api.foursquare.com/v2/venues/explore?client_id=Q0ZIMZQ2FZNLR53UJCIRE2PPEKT53ELE5LDKHQXP2MTDFMST&client_secret=W5C5RGLLVRFASZLBXXJNLHATFFMBJMEH2EKMUYRTBGZIOTFP&v=20180323&ll=${this.long},${this.lat}&query=${this.query}&limit=${this.limit}`
  // )
  //   .then(res => res.json())
  //   .then(res => console.log(res.response.groups[0].items[0].venue));

  if (!fontLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setFontLoaded(true)}
      />
    );
  }
  return (
    <Provider store={store}>
      <RecommendNavigator />
    </Provider>
  );
}
