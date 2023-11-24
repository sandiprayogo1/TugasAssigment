// routes/user.js
const express = require('express');
const router = express.Router();
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

/**
 * @swagger
 * /users:
 *   get:
 *     summary: Get all users.
 *     responses:
 *       200:
 *         description: Successful operation.
 *       500:
 *         description: Internal server error.
 */
router.get('/', async (req, res) => {
  try {
    const users = await prisma.user.findMany();
    res.json(users);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

// Implement other CRUD endpoints (POST, GET by ID, PUT, DELETE) here

module.exports = router;
