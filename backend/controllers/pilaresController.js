const db = require('../models/db');

exports.listarPilares = (req, res) => {
  db.query('SELECT * FROM pilares', (err, results) => {
    if (err) return res.status(500).json(err);
    res.json(results);
  });
};

exports.criarPilar = (req, res) => {
  const { nome, descricao } = req.body;
  const criado_por = req.usuario.id; // vem do token JWT

  db.query(
    'INSERT INTO pilares (nome, descricao, criado_por) VALUES (?, ?, ?)',
    [nome, descricao, criado_por],
    (err, result) => {
      if (err) return res.status(500).json(err);
      res.status(201).json({ message: 'Pilar criado com sucesso', id: result.insertId });
    }
  );
};

exports.atualizarPilar = (req, res) => {
  const { id } = req.params;
  const { nome, descricao } = req.body;

  db.query(
    'UPDATE pilares SET nome = ?, descricao = ? WHERE id = ?',
    [nome, descricao, id],
    (err) => {
      if (err) return res.status(500).json(err);
      res.json({ message: 'Pilar atualizado com sucesso' });
    }
  );
};

exports.excluirPilar = (req, res) => {
  const { id } = req.params;

  db.query('DELETE FROM pilares WHERE id = ?', [id], (err) => {
    if (err) return res.status(500).json(err);
    res.json({ message: 'Pilar excluído com sucesso' });
  });
};
