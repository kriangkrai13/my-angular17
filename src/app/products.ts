// Define the TypeScript interface for a product
export interface Product {
  productId: number;
  productName: string;
  productDetail: string;
  productImage: string;
  price: number;
}

// Create an array of products
export const PRODUCTS: Product[] = [
  {
    productId: 1,
    productName: 'Wireless Bluetooth Headphones',
    productDetail:
      'Over-ear noise-canceling headphones with 30-hour battery life.',
    productImage:
      'https://images.pexels.com/photos/3394658/pexels-photo-3394658.jpeg',
    price: 99.99,
  },
  {
    productId: 2,
    productName: '4K Ultra HD Smart TV',
    productDetail:
      '55-inch smart TV with built-in streaming apps and voice control.',
    productImage:
      'https://images.pexels.com/photos/4009402/pexels-photo-4009402.jpeg',
    price: 499.99,
  },
  {
    productId: 3,
    productName: 'Gaming Laptop',
    productDetail: 'High-performance laptop with RTX 4060 GPU and 16GB RAM.',
    productImage:
      'https://images.pexels.com/photos/4348403/pexels-photo-4348403.jpeg',
    price: 1299.99,
  },
  {
    productId: 4,
    productName: 'Smartphone',
    productDetail: 'Latest flagship phone with 120Hz display and 108MP camera.',
    productImage:
      'https://images.pexels.com/photos/5082579/pexels-photo-5082579.jpeg',
    price: 899.99,
  },
  {
    productId: 5,
    productName: 'Smartwatch',
    productDetail:
      'Fitness tracking smartwatch with heart rate monitor and GPS.',
    productImage:
      'https://images.pexels.com/photos/4370375/pexels-photo-4370375.jpeg',
    price: 199.99,
  },
  {
    productId: 6,
    productName: 'Mechanical Keyboard',
    productDetail:
      'RGB mechanical keyboard with customizable keys and ergonomic design.',
    productImage:
      'https://images.pexels.com/photos/5741073/pexels-photo-5741073.jpeg',
    price: 89.99,
  },
  {
    productId: 7,
    productName: 'Wireless Gaming Mouse',
    productDetail:
      'Ultra-lightweight wireless gaming mouse with 12K DPI sensor.',
    productImage:
      'https://images.pexels.com/photos/4792713/pexels-photo-4792713.jpeg',
    price: 59.99,
  },
  {
    productId: 8,
    productName: 'External Hard Drive',
    productDetail: '2TB USB 3.0 portable external hard drive.',
    productImage:
      'https://images.pexels.com/photos/3331451/pexels-photo-3331451.jpeg',
    price: 79.99,
  },
  {
    productId: 9,
    productName: 'Noise Cancelling Earbuds',
    productDetail: 'True wireless earbuds with active noise cancellation.',
    productImage:
      'https://images.pexels.com/photos/4480501/pexels-photo-4480501.jpeg',
    price: 129.99,
  },
  {
    productId: 10,
    productName: 'Portable Bluetooth Speaker',
    productDetail: 'Waterproof portable speaker with 20-hour battery life.',
    productImage:
      'https://images.pexels.com/photos/3394662/pexels-photo-3394662.jpeg',
    price: 69.99,
  },
  {
    productId: 11,
    productName: 'Tablet',
    productDetail: '10-inch tablet with 8-core processor and stylus support.',
    productImage:
      'https://images.pexels.com/photos/6476589/pexels-photo-6476589.jpeg',
    price: 399.99,
  },
  {
    productId: 12,
    productName: 'USB-C Hub',
    productDetail: '7-in-1 USB-C hub with HDMI, USB 3.0, and SD card reader.',
    productImage:
      'https://images.pexels.com/photos/4792733/pexels-photo-4792733.jpeg',
    price: 49.99,
  },
  {
    productId: 13,
    productName: 'Gaming Monitor',
    productDetail: '27-inch 144Hz gaming monitor with 1ms response time.',
    productImage:
      'https://images.pexels.com/photos/2347565/pexels-photo-2347565.jpeg',
    price: 299.99,
  },
  {
    productId: 14,
    productName: 'Action Camera',
    productDetail: 'Waterproof 4K action camera with image stabilization.',
    productImage:
      'https://images.pexels.com/photos/1545743/pexels-photo-1545743.jpeg',
    price: 199.99,
  },
  {
    productId: 15,
    productName: 'Smart Home Hub',
    productDetail: 'Voice-controlled smart home hub with IoT compatibility.',
    productImage:
      'https://images.pexels.com/photos/4491459/pexels-photo-4491459.jpeg',
    price: 129.99,
  },
  {
    productId: 16,
    productName: 'Electric Toothbrush',
    productDetail:
      'Rechargeable electric toothbrush with multiple cleaning modes.',
    productImage:
      'https://images.pexels.com/photos/7257664/pexels-photo-7257664.jpeg',
    price: 49.99,
  },
  {
    productId: 17,
    productName: 'VR Headset',
    productDetail:
      'Wireless VR headset with 4K resolution and motion tracking.',
    productImage:
      'https://images.pexels.com/photos/3183163/pexels-photo-3183163.jpeg',
    price: 399.99,
  },
  {
    productId: 18,
    productName: 'Home Security Camera',
    productDetail:
      '1080p wireless security camera with night vision and motion detection.',
    productImage:
      'https://images.pexels.com/photos/7130493/pexels-photo-7130493.jpeg',
    price: 99.99,
  },
  // Add more products to reach 50 as needed
];

// Export the products array as default
export default PRODUCTS;
