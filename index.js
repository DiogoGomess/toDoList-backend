const express = require('express')
const app = express()
const cors = require('cors');
app.use(express.json())
const port = 3000
app.use(cors());

const config = require('./config/config')
const Task = require('./models/tasks').task



app.get('/', async (req, res) => {
  const tasks = await Task.find();
  return res.send(tasks)
})

app.post('/', async (req, res) => {
  const task = new Task({
    title: req.body.title,
    type: req.body.type,
    completed: false,
    dueDate: req.body.dueDate,
    priority: req.body.priority
  })

  await task.save()
  return res.send(task)
})

app.put('/:id', async (req, res) => {
  const task  = await Task.findByIdAndUpdate(req.params.id, {
    title: req.body.title,
    type: req.body.type,
    completed: req.body.completed ||false,
    dueDate: req.body.dueDate,
    priority: req.body.priority
  }, { new:true })
  
  return res.send(task)
})

app.delete('/:id', async (req, res) =>{
  const task=await Task.findByIdAndDelete(req.params.id);

  return res.send(`Task com o id ${req.params.id} eliminado com sucesso!`)

})



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
