const db = require('../models/db');

exports.listarAcoes = (req, res) => {
  const sql = `
    SELECT a.*, p.nome AS nome_pilar, u.nome AS nome_responsavel
    FROM acoes a
    JOIN pilares p ON a.pilar_id = p.id
    JOIN usuarios u ON a.responsavel_id = u.id
  `;
  db.query(sql, (err, results) => {
    if (err) return res.status(500).json(err);
    res.json(results);
  });
};

exports.criarAcao = (req, res) => {
  const { pilar_id, titulo, prazo_conclusao, situacao, responsavel_id, metodo } = req.body;

  const sql = `
    INSERT INTO acoes (pilar_id, titulo, prazo_conclusao, situacao, responsavel_id, metodo)
    VALUES (?, ?, ?, ?, ?, ?)
  `;

  db.query(sql, [pilar_id, titulo, prazo_conclusao, situacao, responsavel_id, metodo], (err, result) => {
    if (err) return res.status(500).json(err);
    res.status(201).json({ message: 'Ação criada com sucesso', id: result.insertId });
  });
};

exports.atualizarAcao = (req, res) => {
  const { id } = req.params;
  const { titulo, prazo_conclusao, situacao, responsavel_id, metodo } = req.body;

  const sql = `
    UPDATE acoes
    SET titulo = ?, prazo_conclusao = ?, situacao = ?, responsavel_id = ?, metodo = ?
    WHERE id = ?
  `;

  db.query(sql, [titulo, prazo_conclusao, situacao, responsavel_id, metodo, id], (err) => {
    if (err) return res.status(500).json(err);
    res.json({ message: 'Ação atualizada com sucesso' });
  });
};

exports.excluirAcao = (req, res) => {
  const { id } = req.params;

  db.query('DELETE FROM acoes WHERE id = ?', [id], (err) => {
    if (err) return res.status(500).json(err);
    res.json({ message: 'Ação excluída com sucesso' });
  });
};
