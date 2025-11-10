const express = require("express");
const app = express();
const studentRoutes = require("./routes/studentsRoutes");

app.use(express.json());

// Endpoint /api/info
app.get("/api/info", (req, res) => {
  res.json({
    service: "Students API UTS Web Service Engineering",
    author: "Nor Hayati",
    npm: "230104040203",
    resource: "students"
  });
});

// Routes utama
app.use("/api/students", studentRoutes);

// Port
app.listen(3000, () => {
  console.log("Server berjalan di http://localhost:3000");
});
