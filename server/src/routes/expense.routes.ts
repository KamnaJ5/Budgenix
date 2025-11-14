import { Router } from "express";
import { createExpense } from "../controllers/expenses.controller.js";
const router = Router();

router.post("/create", createExpense);

export default router;