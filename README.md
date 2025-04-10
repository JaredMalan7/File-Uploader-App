# 📁 File Uploader & Downloader App


## Overview
File Uploader & Downloader App is a backend web service developed using **TypeScript**, **Node.js**, and **Express**. It allows users to upload files to a server and later download or list them via simple RESTful endpoints. The app demonstrates key aspects of TypeScript including strong typing, asynchronous functions, and modular project structure. File uploads are handled with **Multer**, a middleware for Express that processes `multipart/form-data`.

Users can interact with the following features:
- Upload files via a POST request
- List all uploaded files through a recursive directory scan (via a GET endpoint)
- Download any of the uploaded files (via a GET endpoint)
- All responses are returned in JSON for integration testing and debugging.

---

## 👨‍💻 Author

**Jared Malan**  
Student @ Brigham Young University–Idaho
---
### [YouTube Video Demo]()

---

## 🛠 Installation and Setup

### Requirements
- Node.js (v14+ recommended)
- npm
- TypeScript

### Installation Steps

1. **Clone the Repository**
   ```bash
   git clone https://github.com/JaredMalan7/File-Uploader-App.git
   cd File-Uploader-App
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Configure TypeScript**

   Ensure your `tsconfig.json` includes the following:
   ```json
   {
     "compilerOptions": {
       "target": "es2016",
       "module": "commonjs",
       "esModuleInterop": true,
       "forceConsistentCasingInFileNames": true,
       "strict": true,
       "skipLibCheck": true
     }
   }
   ```

4. **Start the Development Server**
   ```bash
   npm run dev
   ```

   Server should be running at:

   ```
   http://localhost:3000
   ```

---

## 📂 Directory Structure

```
File-Uploader-App/
│
├── src/
│   ├── routes/
│   │   ├── upload.ts        # POST /upload
│   │   └── download.ts      # GET /download/:filename and GET /files
│   ├── index.ts             # Express app entry point
│
├── uploads/                 # Uploaded files are stored here
├── tsconfig.json            # TypeScript configuration
├── package.json             # NPM scripts and dependencies
└── README.md                # Project documentation
```

---

## 🚀 Features Demonstrated

- ✅ TypeScript strong typing
- ✅ Express routing with modular files
- ✅ Asynchronous file handling
- ✅ File upload with Multer
- ✅ File listing using `fs.readdirSync`
- ✅ JSON output for endpoints
- ✅ Error handling
- ✅ Clean code structure

---

## 🧪 How to Test the App

1. Launch Postman
2. Select POST method
3. Use `http://localhost:3000/api/upload`
4. Go to Body → form-data
5. Key: `file`, Type: File, then select a file to upload
6. Click **Send**

---

## 🚀 API Endpoints

### Upload a File

- **Method:** POST
- **URL:** `/api/upload`
- **Body Type:** `multipart/form-data`
- **Key:** `file`

- **Sample Request in Postman:**
   - Method: POST
   - URL: `http://localhost:3000/api/upload`
   - Body → form-data → Key: `file`, Type: File, Value: (select your file)

- **Response Example:**
```json
{
   "message": "File uploaded successfully!",
   "file": "1712345678910-sample.txt"
}
```

---

### Download and File Listing Endpoints

**GET** `/api/download/:filename`
- Downloads the specified file
- Example: `http://localhost:3000/api/download/1712345678910-sample.txt`

**GET** `/api/files`
- Lists all uploaded files in JSON format.

Example response:
```json
{
   "files": [
      "/Users/yourname/IdeaProjects/File-Uploader-App/uploads/1743663464387-TEST.rtf"
   ]
}
```

> 📄 Note: If the downloaded file is a browser-readable type (like `.txt` or `.rtf`), it may open directly in the browser. Otherwise, the file will trigger a download depending on browser settings.

---

## 📚 Resources Used

* [TypeScript Documentation](https://www.typescriptlang.org/docs/)
* [Node.js Official Site](https://nodejs.org/)
* [Express.js Guide](https://expressjs.com/)
* [Multer Middleware](https://github.com/expressjs/multer)
* [Postman API Tool](https://www.postman.com/)
* [TypeScript Node Starter](https://github.com/microsoft/TypeScript-Node-Starter)

---

## ✅ Stretch Challenge

- Created a route to **list all uploaded files**
- Implemented **clean modular design** with `routes/` folder

---

## 📦 Future Improvements

- Add frontend HTML form for upload
- Add file type and size validations
- User authentication layer
- File delete functionality


