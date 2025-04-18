import { Router } from "express"; 
import { body } from "express-validator";

import { getUser, postRegisterUser, postLoginUser } from "../controllers/authController.js";
import isAuth from "../middleware/isAuthenticated.js";

const router = Router();

// GET /user
router.get('/', isAuth, getUser);

// POST /user/register
router.post(
  '/register',
  [
    body('name')
      .notEmpty()
      .trim(),
    body('email')
      .isEmail()
      .normalizeEmail(),
    body('password')
      .trim()
      .isLength({ min: 5 })
  ],
  postRegisterUser
);

// POST /user/login
router.post(
  '/login',
  [
    body('email')
      .isEmail()
      .normalizeEmail(),
    body('password')
      .trim()
      .notEmpty(),
  ],
  postLoginUser
);

export default router;