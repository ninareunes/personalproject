import Spot from "../models/spot";

export const SPOTS = [
  new Spot(
    "1",
    "Luigis Place",
    "A small and cosy Italian restaurant",
    require("../assets/rest1.jpg"),
    5,
    "Mageleinestraat 6",
    "Gent",
    "lunch",
    "$$",
    "www.ninareunes.be",
    false
  ),
  new Spot(
    "2",
    "Pizza Heaven",
    "The best Pizza in town jummy jummy jummy jummy jummy jummy jummy jummy jummy",
    require("../assets/rest2.jpg"),
    4.3,
    "Veldstraat 6",
    "Gent",
    "dinner",
    "$",
    "www.hln.be",
    true
  )
];
