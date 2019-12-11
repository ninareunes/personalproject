class Spot {
  constructor(
    id,
    name,
    description = "",
    img,
    address,
    city,
    category,
    price,
    url,
    isOpen
  ) {
    this.id = id;
    this.name = name;
    this.desc = description;
    this.img = img;
    this.address = address;
    this.city = city;
    this.category = category;
    this.price = price;
    this.url = url;
    this.isOpen = isOpen;
  }
}

export default Spot;
