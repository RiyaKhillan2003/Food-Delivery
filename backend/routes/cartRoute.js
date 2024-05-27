import express from 'express'
import { addToCart , removeFromCart, getCart } from '../controllers/cartController.js'
import authMiddle from '../middleware/auth.js';

const cartRouter = express.Router();

cartRouter.post("/add",authMiddle,addToCart);
cartRouter.post("/remove",authMiddle,removeFromCart);
cartRouter.post("/get",authMiddle,getCart);

export default cartRouter;
