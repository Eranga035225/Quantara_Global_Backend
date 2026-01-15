import Feedback from "../models/feedback.js";

// export async function createFeedback(req, res) {
//   try {
//     const { name, email, rating, message } = req.body;

//     if (!name || !email || !rating || !message) {
//       return res.status(400).json({
//         message: "All fields (name, email, rating, message) are required",
//       });
//     }

//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!emailRegex.test(email)) {
//       return res.status(400).json({
//         message: "Invalid email format",
//       });
//     }

//     if (rating < 1 || rating > 5) {
//       return res.status(400).json({
//         message: "Rating must be between 1 and 5",
//       });
//     }

//     if (message.length > 500) {
//       return res.status(400).json({
//         message: "Message must not exceed 500 characters",
//       });
//     }

//     const feedback = await Feedback.create({
//       name,
//       email,
//       rating,
//       message,
//     });

//     return res.status(201).json({
//       message: "Feedback submitted successfully",
//       data: feedback,
//     });
//   } catch (error) {
//     console.error("Create Feedback Error:", error);

//     return res.status(500).json({
//       message: "Internal server error",
//     });
//   }
// }

export async function createFeedback(req, res) {
  try {
    const newFeedback = new Feedback(req.body);
    const savedFeedback = await newFeedback.save();
    res.status(201).json(savedFeedback);
  } catch (error) {
    res.status(500).json({
      message: err.message,
    });
  }
}
