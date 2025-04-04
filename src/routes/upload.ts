import express, { Request, Response } from "express";
import multer from "multer";
import path from "path";

const router = express.Router();

// Configure multer storage: files will be saved in the "uploads/" directory
const storage = multer.diskStorage({
    destination: "uploads/",
    filename: (_req, file, cb) => {
        // Create a unique filename by prepending the current timestamp
        cb(null, `${Date.now()}-${file.originalname}`);
    }
});

const upload = multer({ storage });

// POST route to handle file upload
router.post("/upload", upload.single("file"), (req: Request, res: Response): void => {
    if (!req.file) {
        // If no file is provided, send a 400 status with an error message
        res.status(400).json({ message: "No file uploaded." });
        return; // Ensure we return void
    }
    // Respond with a success message and the filename of the uploaded file
    res.json({ message: "File uploaded successfully!", file: req.file.filename });
});

export default router;