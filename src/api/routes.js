const express = require('express');
const router = express.Router();
const users = require('./users.json');

router.get('/users', (req, res) => {
  res.send(users.data.map((user, id) => ({ id, name: user[0], })));
});

router.get('/users/:id', (req, res) => {
  const id = Number(req.params.id);
  const user = users.data[id];

  if (!user) {
    return res.status(404).send();
  }
  const [name, phone, email, birtday] = user; // eslint-disable-line comma-dangle

  res.send({ id, name, phone, email, birtday, });
});

router.post('/token', (req, res) => {
  if (req.body.token) {
    res.cookie('token', req.body.token, { signed: true, httpOnly: true, });
  } else {
    res.cookie('token', '', { signed: false, });
  }
  res.send('');
});

module.exports = router;
