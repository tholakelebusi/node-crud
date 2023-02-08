const router = require("express").Router();
const { getTodos } = require("./controllers/Todo");
const {createTodo } = require("./controllers/Todo");
const {updateTodo} = require("./controllers/Todo");
const {deleteTodo} = require("./controllers/Todo");




router.get("/", (req, res) => {
  res.send("Let's build a CRUD API!");
});

router.get("/todos", getTodos)
{
    const getTodos = (req, res) => {
        Todo.find((err, todos) => {
          if (err) {
            res.send(err);
          }
          res.json(todos);
        });
      };
      
}
router.post("/todos", createTodo)
{
    const createTodo = (req, res) => {
        const todo = new Todo({
          title: req.body.title,
          description: req.body.description,
          completed: req.body.completed,
        });
      
        todo.save((err, todo) => {
          if (err) {
            res.send(err);
          }
          res.json(todo);
        });
      };
      
}
router.put("/todos/:todoID", updateTodo)
{
    const updateTodo = (req, res) => {
        Todo.findOneAndUpdate(
          { _id: req.params.todoID },
          {
            $set: {
              title: req.body.title,
              description: req.body.description,
              completed: req.body.completed,
            },
          },
          { new: true },
          (err, Todo) => {
            if (err) {
              res.send(err);
            } else res.json(Todo);
          }
        );
      };
      
      router.delete("/todos/:todoID", deleteTodo);
{

}
}



module.exports = router;
