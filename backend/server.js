require('dotenv').config();
const express = require('express');
const cors = require('cors');
const db = require('./models');
const { sequelize, User } = db;
const { router: authRoutes, authenticateToken } = require('./routes/auth');
const characterRoutes = require('./routes/characters');
const apiLimiter = require('./middleware/rateLimiter');
const sanitizeInputs = require('./middleware/sanitizer');
const { handleError } = require('./utils/errorHandler');
const referenceVirtuesFlawsRouter = require('./routes/referenceVirtuesFlaws');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(sanitizeInputs); // Added this line

// Apply rate limiter to all API routes
app.use("/api/", apiLimiter);

// Auth routes
app.use('/api/auth', authRoutes);

// Protected routes
app.use('/api/users', authenticateToken, authRoutes);
app.use('/api/characters', authenticateToken, characterRoutes);

// Reference virtues and flaws route
app.use('/api/reference-virtues-flaws', referenceVirtuesFlawsRouter);

// Test route
app.get('/', (req, res) => {
  res.send('Ars Saga Manager API is running');
});

// Test the database connection and start server
async function startServer() {
  try {
    await sequelize.authenticate();
    console.log('Database connected...');

    await sequelize.sync({ force: false });
    console.log('Database & tables created!');
    console.log('User model:', User);

    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  } catch (err) {
    console.error('Unable to start server:', err);
    process.exit(1);
  }
}

startServer();

// Error handling middleware (should be last)
app.use((err, req, res, next) => {
  handleError(err, res);
});