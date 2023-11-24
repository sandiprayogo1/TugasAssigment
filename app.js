const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());


// Mengimpor rute dari file user.js
const userRoutes = require('./routes/user');

// Menambahkan rute user ke aplikasi
app.use('/users', userRoutes);

// Menjalankan server pada port tertentu (misalnya, 3000)
app.listen(3000, () => {
  console.log('Server berjalan pada port 3000');
});


