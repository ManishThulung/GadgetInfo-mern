const bcrypt = require("bcryptjs");
const mongoose = require("mongoose");
const ErrorHandler = require("../util/errorHandler");
const catchAsyncError = require("../middleware/catchAsyncError");

const User = require("../models/user");
const sendToken = require("../util/jwtToken");

// Route 1: register user
const registerUser = catchAsyncError(async (req, res, next) => {
  const { email } = req.body;

  const emailId = await User.findOne({ email });

  if (emailId) {
    return next(
      new ErrorHandler("Email already exists. Please login instead.", 400)
    );
  }

  const user = await User.create(req.body);

  const token = await user.getJWTToken();

  // res.cookie("token", token, {
  //   expires: new Date(
  //     Date.now() + process.env.COOKIE_EXPIRE * 24 * 60 * 60 * 1000
  //   ),
  //   httponly: true,
  // });
  // res.cookie("token", token, {
  //   expires: new Date(new Date().getTime() + 10 * 86400000),
  //   httponly: true,
  // });
  res.status(200).json({ success: true, token, user });
});

// sendToken(user, 201, res, token);
// sendToken(user, 201, res);

// Route 2: login user
const userLogin = catchAsyncError(async (req, res, next) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email }).select("+password");

  if (!user) {
    return next(new ErrorHandler("Please enter valid credentials", 401));
  }

  const isPasswordMatched = await user.comparePassword(password);
  // const isPasswordMatched = await bcrypt.compare(password, user.password);

  if (!isPasswordMatched) {
    return next(new ErrorHandler("Please enter valid credentials", 401));
  }

  const token = await user.getJWTToken();

  // sendToken(user, 201, res, token);
  res
    .status(200)
    // .cookie("token", token, {
    //   expires: new Date(
    //     Date.now() + process.env.COOKIE_EXPIRE * 24 * 60 * 60 * 1000
    //   ),
    //   httpOnly: true,
    // })
    // .json({ success: true, token });
    .json({ success: true, token, user });
});

// Route 3: logout
const userLogout = catchAsyncError(async (req, res, next) => {
  res.cookie("token", null, {
    expires: new Date(Date.now()),
    httpOnly: true,
  });

  res.status(200).json({ success: true, message: "logout successful" });
});

// Route 4: get user details
const getUserDetail = catchAsyncError(async (req, res, next) => {
  let user = await User.findById(req.user.id);

  res.status(200).json({ success: true, user });
});

// Route 5: update the user profile
const updateProfile = catchAsyncError(async (req, res, next) => {
  const newUserData = {
    name: req.body.name,
    email: req.body.email,
  };

  const user = await User.findByIdAndUpdate(req.user.id, newUserData, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });

  res.status(200).json({
    success: true,
  });
});

// Route 7: get all the user - Admin
const getAllUser = catchAsyncError(async (req, res, next) => {
  let users = await User.find();

  if (!users) {
    return res.status(404).json({ message: "user not found" });
  }

  res.status(200).json({
    success: true,
    users,
  });
});

// Route 7: delete a user - admin
const deleteUser = catchAsyncError(async (req, res, next) => {
  const user = await User.findById(req.params.id);

  if (!user) {
    return next(
      new ErrorHandler(`Users not found with id: ${req.params.id}`, 404)
    );
  }

  await user.remove();

  res.status(200).json({
    success: true,
    message: "User deleted successfully",
  });
});

// Route 8: update user role - admin
const updateUserRole = catchAsyncError(async (req, res, next) => {
  const newUserData = {
    name: req.body.name,
    email: req.body.email,
    role: req.body.role,
  };

  await User.findByIdAndUpdate(req.params.id, newUserData, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });

  res.status(200).json({
    success: true,
  });
});

// Route 9: get a single user (admin)
const getSingleUser = catchAsyncError(async (req, res, next) => {
  const user = await User.findById(req.params.id);

  if (!user) {
    return next(
      new ErrorHandler(
        `User does not match with the id : ${req.params.id}`,
        404
      )
    );
  }

  res.status(200).json({
    success: true,
    user,
  });
});

exports.registerUser = registerUser;
exports.userLogin = userLogin;
exports.userLogout = userLogout;
exports.getAllUser = getAllUser;
exports.updateProfile = updateProfile;
exports.deleteUser = deleteUser;
exports.getUserDetail = getUserDetail;
exports.updateUserRole = updateUserRole;
exports.getSingleUser = getSingleUser;
