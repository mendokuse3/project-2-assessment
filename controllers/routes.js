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
            done: false
        }
      ]
    try {
      const seedItems = await ToDos.create(todos)
      res.redirect('/');
    } catch (err) {
      res.send(err.message)
    }
})

router.post('/', (req, res) => {
    console.log(req.body)
    if (req.body.done === 'on'){
        req.body.done = true;
    } else {
        req.body.done = false;
    }
    ToDos.create(req.body, (err, createdToDo) => {
        res.redirect('/')
    })
})

router.delete('/', (req, res) => {
    ToDos.findByIdAndDelete(Object.keys(req.body)[0], (err, deletedToDo) => {
        res.redirect('/')
    })
})

module.exports = router;