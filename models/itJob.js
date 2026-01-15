import mongoose from "mongoose";

const ItJobSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  whatsappNumber: {
    type: String,
    required: true,
  },
  itSolutionType: {
    type: String,
    required: true,
  },
  jobDescription: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    enum: ["pending", "rejected", "completed"],
    default: "pending",
  },
});

const ItJob = mongoose.model("itJobs", ItJobSchema);

export default ItJob;
