const { check } = require("express-validator");
const repository = require("./repository");
module.exports = {
  // Get all existing records
  validationChain: [
    check("email").isEmail().withMessage("Email is required").normalizeEmail(),
    check("password")
      .isLength({ min: 5 })
      .withMessage("Password must be at least 5 chars long"),
    check("password_repeat").custom((value, { req }) => {
      if (value !== req.body.password) {
        throw new Error("Passwords do not match");
      }
      return true;
    }),
    check("Address").isLength({ min: 10 }).withMessage("Address is required"),

    check("Phone")
      .isLength({ min: 10 }, { max: 10 })
      .withMessage("Phone is required"),
  ],

  validateDOB: check("dob")
    // To delete leading and trailing space
    .trim()

    // Validate DOB to be a valid date
    .isDate()

    // Custom message
    .withMessage("Must be a valid date"),
};
