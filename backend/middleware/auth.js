const jwt = require("jsonwebtoken");
const User = require("../models/user");
const ErrorHandler = require("../util/errorHandler");
const HttpError = require("../util/httpError.js");
const catchAsyncError = require("./catchAsyncError");

exports.auth = catchAsyncError(async (req, res, next) => {
  try {
    // const { token } = req.cookies;
    const token = req.headers.authorization.split(" ")[1];
    // console.log(token);

    if (!token) {
      return next(
        new ErrorHandler("Please login to access this resource", 401)
      );
    }

    // verifying user if he is logged in or not
    const verifyUser = jwt.verify(token, process.env.JWT_SECRET);

    req.user = await User.findById(verifyUser.id);

    // new auth
    // const token = req.headers.authorization.split(" ")[1];

    // let decodedData;

    // if (token) {
    //   decodedData = jwt.verify(token, process.env.JWT_SECRET);

    //   req.userId = decodedData?.id;
    // } else {
    //   decodedData = jwt.decode(token);

    //   req.user = decodedData?.sub;
    // }
    next();
  } catch (e) {
    return next(new HttpError("Internal server error", 500));
  }
});

exports.authorizeRoles = (roles) => {
  return (req, res, next) => {
    // req.user.role -> role we assigned in db req.user ->   req.user = await User.findById(decodeData.id);
    if (!roles.includes(req.user.role)) {
      return next(
        new ErrorHandler(
          `Role: ${req.user.role} is not allowed to access this resource`,
          403 // refused by server
        )
      );
    }
    next();
  };
};

// exports.combineRoles = ([...role1], [...role2]) => {
exports.combineRoles = (...role1) => {
  return (req, res, next) => {
    // req.user.role -> role we assigned in db req.user ->   req.user = await User.findById(decodeData.id);
    if (!role1.includes(req.user.role)) {
      return next(
        new ErrorHandler(
          `Role: ${req.user.role} is not allowed to access this resource`,
          403 // refused by server
        )
      );
    }
    next();
  };
};
