const express = require("express");

const userControllers = require("../controllers/user-controllers");
const { auth, authorizeRoles } = require("../middleware/auth");

const router = express.Router();

router.post("/register", userControllers.registerUser);

router.post("/login", userControllers.userLogin);

router.get("/logout", userControllers.userLogout);

router.get("/me", auth, userControllers.getUserDetail);

router.put("/me/update", auth, userControllers.updateProfile);

router.get(
  "/admin/users",
  auth,
  authorizeRoles("admin"),
  userControllers.getAllUser
);

router.delete(
  "/admin/user/:id",
  auth,
  authorizeRoles("admin"),
  userControllers.deleteUser
);

router.put(
  "/admin/user/:id",
  auth,
  authorizeRoles("admin"),
  userControllers.updateUserRole
);

router.get(
  "/admin/user/:id",
  auth,
  authorizeRoles("admin"),
  userControllers.getSingleUser
);

module.exports = router;

// router.post("/login", (req, res, next) =>{
//   const { email, password } = req.body;

//   const user = await User.findOne({ email }).select("+password");

//   if (!user) {
//     return next(new ErrorHandler("Please enter valid credentials", 401));
//   }

//   const isPasswordMatched = await user.comparePassword(password);
//   // const isPasswordMatched = await bcrypt.compare(password, user.password);

//   if (!isPasswordMatched) {
//     return next(new ErrorHandler("Please enter valid credentials", 401));
//   }

//   const token = await user.getJWTToken();

//   // sendToken(user, 201, res, token);
//   res
//     .status(200)
//     .cookie("token", token, {
//       expires: new Date(
//         Date.now() + process.env.COOKIE_EXPIRE * 24 * 60 * 60 * 1000
//       ),
//       httpOnly: true,
//     })
//     .json({ success: true, user, token });
// })
