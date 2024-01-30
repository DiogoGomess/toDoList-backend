const express = require('express')
const app = express()

app.use(express.json())
const port = 3000


const config = require('./config/config')
const Task = require('./models/tasks').task



app.get('/', async (req, res) => {
  const tasks = await Task.find();
  return res.send(tasks)
})

app.post('/', async (req, res) => {
  const task = new Task({
    description: req.body.description,
    completed: false,
    duration:req.body.duration,
  })

  await task.save()
  return res.send(task)
})

app.put('/:id', async (req, res) => {
  const task  = await Task.findByIdAndUpdate(req.params.id, {
    description: req.body.description,
    completed: req.body.completed || false,
    duration: req.body.duration
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
