const bcrypt = require("bcryptjs");

const newUser = new User({
  name: req.body.name,
  email: req.body.email,
  password: req.body.password,
});

bcrypt.genSalt(10, (err, salt) => {
  bcrypt.hash(newUser.password, salt, (err, hash) => {
    if (err) throw err;

    // Set the hashed password and save the model
    newUser.password = hash;
    newUser
      .save()
      .then((user) => res.json(user))
      .catch((error) => console.log(error));
  });
});

// Pass saved encrypted password as second parameter
bcrypt.compare(PlaintextPassword, user.password, function (err, res) {
  // res == true
});

module.exports = bcrypt;
