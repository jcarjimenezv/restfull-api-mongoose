const studentsSchema = require("../schema/studentsSchema");

const validateBodyMiddleware = (req, res, next) => {
  if (!req.body.length) {
    const result = studentsSchema.validate(req.body, { abortEarly: false });
    if (result.error) {
      return res.status(400).send({
        error: result.error.details,
      });
    }
  } else {
    const errors = [];
    req.body.forEach((student) => {
      const result = studentsSchema.validate(student, { abortEarly: false });
      if (result.error) {
        errors.push(result.error);
      }
    });
    if (errors.length) {
      return res.status(400).send({
        errors: errors,
      });
    }
  }
  next();
};

module.exports = validateBodyMiddleware;
