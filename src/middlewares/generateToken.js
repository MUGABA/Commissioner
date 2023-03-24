const jwt = require("jsonwebtoken");

const generateToken = (id, email, name, userSide) => {
  const token = jwt.sign(
    {
      id,
      email,
      name,
      userSide,
    },
    "secretKey"
  );
  return token;
};

module.exports = generateToken;
