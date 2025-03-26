const express = require("express");
const cors = require("cors");
const todosRouter = require("./routes/Todos");
const app = express();

// middleware
app.use(cors());
app.use(express.json());

//routes
app.use("/todos", todosRouter);

// launch server
PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running at port: ${PORT}`);
});
