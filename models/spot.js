class Spot {
  constructor(
    id,
    name,
    description = "",
    lat,
    long,
    img,
    address,
    city,
    category,
    url
  ) {
    this.id = id;
    this.name = name;
    this.desc = description;
    this.lat = lat;
    this.long = long;
    this.img = img;
    this.address = address;
    this.city = city;
    this.category = category;
    this.url = url;
  }
}

export default Spot;
