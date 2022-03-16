const express = require("express");
const bodyParser = require("body-parser");
const { validationResult } = require("express-validator");
const repo = require("./repository");
const { validateDOB, validationChain } = require("./validator");
const formTemplet = require("./form");
const { getAll } = require("./repository");
// const crypto = require("crypto");
const bcrypt = require("bcrypt");

const app = express();
const port = process.env.PORT || 3000;

// The body-parser middleware to parse form data
app.use(bodyParser.urlencoded({ extended: true }));

// Get route to display HTML form
app.get("/", (req, res) => {
  res.send(formTemplet({}));
});

app.post("/", function (req, res, next) {
  firstname = req.body.first_name;
  lastname = req.body.last_name;
  username = req.body.username;
  app.post("/", function (req, res, next) {
    firstname = req.body.first_name;
    lastname = req.body.last_name;
    username = req.body.username;
    password = req.body.password;
    bcrypt.hash(password, 10, function (err, hash) {
      repo = [[firstname, lastname, username, hash]];
      res.send(formTemplet({}));

      repo,
        [values],
        function (err, result) {
          if (err) throw err;
          res.send({
            status: "success",
            message: "User registered successfully!",
          });
        };
    });
  });
});
// Post route to handle form submission logic and
app.post("/info", [validationChain], [validateDOB], async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.send(formTemplet({ errors }));
  }

  const {
    email,
    firstname,
    lastname,
    gender,
    address,
    password,
    password_repeat,
    phone,
    dob,
  } = req.body;

  // New record
  await repo.create({
    email,
    firstname,
    lastname,
    gender,
    address,
    Password: password,
    password_repeat,
    phone,
    "Date of Birth": dob,
  });
  res.send(
    "<strong>Information is saved to " + "the database successfully</strong>"
  );
});

// Server setup
app.listen(port, () => {
  console.log(`Server start on port ${port}`);
});
