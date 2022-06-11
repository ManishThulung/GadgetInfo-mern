const express = require("express");
const { check } = require("express-validator");

const phoneControllers = require("../controllers/phone-controllers");
const { auth, authorizeRoles, combineRoles } = require("../middleware/auth");

const router = express.Router();

router.get("/", phoneControllers.getAllPhone);

router.get("/:pid", phoneControllers.getPhoneById);

router.get(
  "/admin/phones/",
  auth,
  authorizeRoles(["admin", "content_creator"]),
  phoneControllers.getAdminPhone
);

router.post(
  "/admin/phone/new",
  auth,
  authorizeRoles(["admin", "content_creator"]),
  phoneControllers.createPhone
);

router.put(
  "/admin/phone/:pid",
  auth,
  authorizeRoles(["admin", "content_creator"]),
  phoneControllers.updatePhone
);

router.delete(
  "/admin/phone/:pid",
  auth,
  authorizeRoles(["admin", "content_creator"]),
  phoneControllers.deletePhone
);

router.get("/compare/phone/:phoneOne/:phoneTwo", phoneControllers.comparePhone);

module.exports = router;
