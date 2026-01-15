import express from "express";
import {
  createItJob,
  deleteItJob,
  getAllItJobs,
  getItJobById,
  updateItJobStatus,
} from "../controllers/itJobController.js";

const ItJobRouter = express.Router();

ItJobRouter.post("/", createItJob);
ItJobRouter.get("/", getAllItJobs);
ItJobRouter.get("/:id", getItJobById);
ItJobRouter.put("/:id", updateItJobStatus);
ItJobRouter.delete("/:id", deleteItJob);

export default ItJobRouter;
