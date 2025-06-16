const router = require("express").Router;
const { getAllUsers } = require("../controllers/adminController");
const { updateUser, deleteUser, logoutUser } = require("../controllers/authController");
const { verifyToken, verifyAdmin } = require("../middleware/authMiddleware");

const usersRouter = router();

// Admin route
usersRouter.get("/", verifyToken, verifyAdmin, getAllUsers);

// User routes
usersRouter.put("/update", verifyToken, updateUser);
usersRouter.delete("/delete", verifyToken, deleteUser);
usersRouter.post("/logout", verifyToken, logoutUser);

module.exports = usersRouter;
