export interface Product {
  title: string;
  description: string;
  price: number;
  _id: string;
  image_url: string; // Matches with productImage
  tags: string[]; // Array of strings
  quantity: number; // For cart functionality (optional)
}
