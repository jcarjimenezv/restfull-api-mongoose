const studentsModel = require("../models/studentModel");

const createStudents = async (data) => {
  return studentsModel.create(data);
};

const readStudents = async (query = {}) => {
  return studentsModel.find(query);
};

const updateStudents = async (query, data) => {
  return studentsModel.updateOne(query, data);
};

const deleteStudents = async (query) => {
  return studentsModel.deleteOne(query);
};

module.exports = {
  createStudents,
  readStudents,
  updateStudents,
  deleteStudents,
};
