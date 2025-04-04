import express, { Request, Response } from "express";
import path from "path";

const router = express.Router();

/**
 * GET /download/:filename
 * Serves a file from the uploads folder for downloading.
 */
router.get("/download/:filename", (req: Request, res: Response): void => {
    // Extract the filename from the URL parameter
    const { filename } = req.params;
    // Construct the absolute file path: adjust the path if necessary
    const filePath = path.join(__dirname, "../../uploads", filename);

    // Use res.download to send the file to the client
    res.download(filePath, filename, (err) => {
        if (err) {
            // If there's an error (e.g., file not found), send a 500 error with a message.
            res.status(500).json({ message: "Could not download the file." });
        }
    });
});

export default router;