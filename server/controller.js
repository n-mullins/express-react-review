const express = require('express');
const router = express();

let todos = [];

// The controller is an object that defines how all of your requests are handled

const controller = {
  get: (req, res) => {
    res.status(200).send(todos);
  },

  post: (req, res) => {
    const { todo } = req.body;
    todos.push(todo);
    res.status(201).send(todos);
  },

  delete: (req, res) => {
    const { index } = req.query;
    todos.splice(index, 1);
    res.status(202).send(todos);
  }
}

module.exports = controller;
