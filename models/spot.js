class Spot {
  constructor(
    id,
    name,
    description,
    img,
    rating,
    isVegan,
    isVegetarian,
    isChildProof
  ) {
    this.id = id;
    this.name = name;
    this.desc = description;
    this.img = img;
    this.rating = rating;
    this.isVegan = isVegan;
    this.isVegetarian = isVegetarian;
    this.isChildProof = isChildProof;
  }
}

export default Spot;
