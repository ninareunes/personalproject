import React from "react";
import Svg, { Path } from "react-native-svg";
// import SearchBar from "react-native-dynamic-search-bar";

const SearchSvg = props => (
  <Svg width={24} height={24} {...props}>
    <Path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0016 9.5 6.5 6.5 0 109.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
    {/* <Path d="M0 0h44v44H0z" fill="none" /> */}
  </Svg>
);

export default SearchSvg;
