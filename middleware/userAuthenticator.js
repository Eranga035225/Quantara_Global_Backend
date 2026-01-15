import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config(); // Load environment variables from .env file

export default async function authenticateUser(req, res, next) {
   const tokenString = req.headers.authorization;

   if (tokenString == null) {
      next();
   } else {
      const token = tokenString.replace("Bearer ", "");
      try {
         const decoded = await jwt.verify(token, process.env.JWT_SECRET);
         req.user = decoded;
         next();
      } catch (error) {
         return res.status(500).json({
            message: error.message || "Internal server error"
         });
      }
   }
}