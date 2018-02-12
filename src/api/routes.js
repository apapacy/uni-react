'use strict'
const express = require('express');
const router = express.Router();
const users = require('./users.json');

router.get('/users', (rew, res, next) => {
  res.send(users.data.map((user, id) => ({id, name: user[0]})));
});

router.get('/users/:id', (req, res, next) => {
  const id = Number(req.params.id);
  const user = users.data[id];
  if (!user)   {
    return res.status(404).send();
  }
  const [name, phone, email, birtday] = user;
  res.send({id, name, phone, email, birtday});
});


module.exports = router;
