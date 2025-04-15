const express = require("express");
const app = express();
const PORT = 5000;
const routes = require("./routes");

app.use(express.json());
app.use("/", routes);

app.get("/", (req, res) => {
    res.send("<h1>Hello, server is running.</h1>");
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
