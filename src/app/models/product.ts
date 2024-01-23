export interface ProductModels {
  id: Number;
  title: String;
  price: Number;
  description: String;
  category: String;
  image: String;
  onClickCard: () => void;
}
