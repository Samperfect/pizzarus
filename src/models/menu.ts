import { Schema, model, Model } from 'mongoose';

const cartSchema: Schema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    shipping: {
      type: Number,
      default: 0,
    },
    images: [String],
    category: String,
    description: String,
  },
  { timestamps: true }
);

const Cart: Model<any> = model('cart', cartSchema);

export default Cart;
