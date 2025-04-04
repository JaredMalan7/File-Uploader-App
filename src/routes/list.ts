// src/routes/list.ts
import express, { Request, Response } from 'express';
import fs from 'fs';
import path from 'path';

const router = express.Router();

/**
 * Recursively lists all files in a given directory.
 * @param directory - The path to the directory to scan.
 * @returns A promise that resolves to an array of file paths.
 */
async function listFilesRecursively(directory: string): Promise<string[]> {
    let files: string[] = [];
    // Read the directory contents with file types
    const items = await fs.promises.readdir(directory, { withFileTypes: true });
    for (const item of items) {
        const fullPath = path.join(directory, item.name);
        if (item.isDirectory()) {
            // Recursively scan subdirectories
            const nestedFiles = await listFilesRecursively(fullPath);
            files = files.concat(nestedFiles);
        } else {
            files.push(fullPath);
        }
    }
    return files;
}

/**
 * GET /api/list
 * Responds with a JSON array of all file paths in the 'uploads' folder.
 */
router.get('/list', async (req: Request, res: Response): Promise<void> => {
    try {
        // Construct the absolute path to the uploads folder (assumed to be in the project root)
        const directoryPath = path.join(__dirname, '../../uploads');
        const files = await listFilesRecursively(directoryPath);
        res.json({ files });
    } catch (err) {
        res.status(500).json({ message: 'Error reading files', error: err });
    }
});

export default router;