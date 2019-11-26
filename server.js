const express = require("express");
const connectDB = require("./config/db");

const app = express();

connectDB();

app.use(express.json({ extended: false }));

app.get("/", (req, res) => res.json({ msg: "Welcome to Operations" }));

app.use("/api/approvals", require("./routes/approvals"));
app.use("/api/status", require("./routes/status"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server listening on Port ${PORT}`));
