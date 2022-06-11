// creating token and saving in cookie

// const sendToken = (user, statusCode, res, token) => {
const sendToken = (user, statusCode, res, token) => {
  // const token = user.getJWTToken();

  const options = {
    expires: new Date(
      Date.now() + process.env.COOKIE_EXPIRE * 24 * 60 * 60 * 1000 // hr min sec milisec
    ),
    httpOnly: true, // now client side scripting language cannot remove or change the value of cookie
  };

  res
    .status(statusCode)
    .cookie("token", token, options)
    .json({ success: true, user, token });
};

module.exports = sendToken;
