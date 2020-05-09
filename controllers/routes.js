const express = require('express');
const router = express();
const ToDos = require('../models/todos');

router.get('/', (req, res) => {
    ToDos.find({}, (err, foundTodos) => {
        // res.send(foundTodos)
        res.render('Index', {foundTodos})
    });
})


router.get('/seed', async (req, res) => {
    const todos =
      [
        {
            name: 'walk dog',
            done: true
        }
      ]
    try {
      const seedItems = await ToDos.create(todos)
      res.redirect('/');
    } catch (err) {
      res.send(err.message)
    }
})

module.exports = router;