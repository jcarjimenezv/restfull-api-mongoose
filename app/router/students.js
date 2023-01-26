const express = require("express");
const students = express.Router();
const {
  createStudents,
  readStudents,
  updateStudents,
  deleteStudents,
} = require("../services/studentService");

const validateBodyMiddleware = require("../middlewares/validateBodyMiddleware");

// middleware that is specific to this router
students.use((req, res, next) => {
  console.log("Time: ", Date.now());
  next();
});
// define the home page route
students.put("/students", validateBodyMiddleware, async (req, res) => {
  try {
    const result = await createStudents(req.body);
    return res.status(200).send(result);
  } catch (error) {
    return res.status(500).send({
      error: `Àn error occurred trying to create students ${error.message}`,
    });
  }
});

students.get("/students", async (req, res) => {
  try {
    const result = await readStudents(req.query);
    return res.status(200).send(result);
  } catch (error) {
    return res.status(500).send({
      error: `Àn error occurred trying to read students ${error.message}`,
    });
  }
});

students.post("/students", async (req, res) => {
  try {
    const result = await updateStudents(req.query, req.body);
    return res.status(200).send(result);
  } catch (error) {
    return res.status(500).send({
      error: `Àn error occurred trying to update student ${error.message}`,
    });
  }
});

students.delete("/students", async (req, res) => {
    try {
      const result = await deleteStudents(req.query);
      return res.status(200).send(result);
    } catch (error) {
      return res.status(500).send({
        error: `Àn error occurred trying to update student ${error.message}`,
      });
    }
  });
  

module.exports = students;
