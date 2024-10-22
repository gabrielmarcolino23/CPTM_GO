const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// Lista de itens (exemplo simples)
let items = [
  { id: 1, name: 'Produto A', description: 'Descrição do Produto A' },
  { id: 2, name: 'Produto B', description: 'Descrição do Produto B' }
];

// Endpoint para obter todos os itens
app.get('/api/items', (req, res) => {
  res.json(items);
});

// Endpoint para obter um item pelo ID
app.get('/api/items/:id', (req, res) => {
  const id = parseInt(req.params.id, 10);
  const item = items.find(item => item.id === id);
  if (item) {
    res.json(item);
  } else {
    res.status(404).send({ error: 'Item não encontrado' });
  }
});

// Inicia o servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
