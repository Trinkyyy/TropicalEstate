const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json()); // For parsing JSON data

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/your-database-name', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

// User Schema
const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

const User = mongoose.model('User', userSchema);

// Cart Schema
const cartSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  products: [
    {
      productId: String,
      name: String,
      quantity: Number,
      price: Number,
    },
  ],
});

const Cart = mongoose.model('Cart', cartSchema);

// Orders Schema
const orderSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  products: [
    {
      productId: String,
      name: String,
      quantity: Number,
      price: Number,
    },
  ],
  totalAmount: { type: Number, required: true },
  orderDate: { type: Date, default: Date.now },
});

const Order = mongoose.model('Order', orderSchema);

// Routes for authentication and cart management

// Sign-up route
app.post('/signup', async (req, res) => {
  const { username, email, password } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ username, email, password: hashedPassword });
    await newUser.save();
    res.status(201).json({ success: true, message: 'User created successfully' });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Error creating user', error });
  }
});

// Login route
app.post('/login', async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ success: false, message: 'Invalid credentials' });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ success: false, message: 'Invalid credentials' });
    }
    const token = jwt.sign({ userId: user._id }, 'yourSecretKey', { expiresIn: '1h' });
    res.json({ success: true, token });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Error logging in', error });
  }
});

// Add to cart
app.post('/cart', async (req, res) => {
  const { userId, product } = req.body;
  try {
    let cart = await Cart.findOne({ userId });
    if (!cart) {
      cart = new Cart({ userId, products: [product] });
    } else {
      cart.products.push(product);
    }
    await cart.save();
    res.status(200).json({ success: true, message: 'Product added to cart', cart });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Error adding product to cart', error });
  }
});

// Get cart
app.get('/cart/:userId', async (req, res) => {
  const { userId } = req.params;
  try {
    const cart = await Cart.findOne({ userId });
    res.status(200).json({ success: true, cart });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Error fetching cart', error });
  }
});

// Remove from cart
app.delete('/cart/:userId/:productId', async (req, res) => {
  const { userId, productId } = req.params;
  try {
    const cart = await Cart.findOne({ userId });
    cart.products = cart.products.filter(product => product.productId !== productId);
    await cart.save();
    res.status(200).json({ success: true, message: 'Product removed from cart', cart });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Error removing product from cart', error });
  }
});

// Place an order and clear the cart
app.post('/checkout', async (req, res) => {
  const { userId, totalAmount } = req.body;
  try {
    const cart = await Cart.findOne({ userId });
    if (!cart) {
      return res.status(400).json({ success: false, message: 'No items in the cart' });
    }

    // Create a new order with cart products and totalAmount
    const newOrder = new Order({
      userId,
      products: cart.products,
      totalAmount,
    });

    await newOrder.save();

    // Clear the cart after successful order
    cart.products = [];
    await cart.save();

    res.status(200).json({ success: true, message: 'Order placed successfully', newOrder });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Error placing the order', error });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
