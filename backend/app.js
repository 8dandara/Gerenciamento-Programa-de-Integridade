const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

// Rotas
app.use('/api/auth', require('./routes/authRoutes'));
// app.use('/api/pilares', require('./routes/pilaresRoutes')); // virá depois

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
