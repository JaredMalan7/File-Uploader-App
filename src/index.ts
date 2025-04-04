import express from "express";
import uploadRoute from "./routes/upload";
import downloadRoute from "./routes/download";
import listRoute from "./routes/list";
import path from "path";

const app = express();
const PORT = 3000;

app.use(express.json());
// Serve uploaded files as static files
app.use("/uploads", express.static(path.join(__dirname, "../uploads"))); // Serve uploaded files
// Mount routes under /api
app.use("/api", uploadRoute); // Mount the upload route
app.use("/api", downloadRoute);  // Mount the download route
app.use("/api", listRoute);

app.get("/", (req, res) => {
    res.send("Welcome to the File Uploader App!");
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});