const express = require("express");
const multer = require("multer");
const path = require("path");
const fs = require("fs");

const app = express();
const UPLOADS_FOLDER = "uploads/";
const PORT = 3000;

/*
 * Home page
 * GET /
 */
app.use(express.static("public"));

/*
 * Upload file
 * POST /upload
 */
let storage = multer.diskStorage({
 destination: (req, file, cb) => {
  cb(null, UPLOADS_FOLDER);
 },
 filename: (req, file, cb) => {
  const fileExt = path.extname(file.originalname);
  const fileName =
   file.originalname
    .replace(fileExt, "")
    .replace(/-/g, "_")
    .toLowerCase()
    .split(" ")
    .join("_") +
   "_" +
   Date.now();
  cb(null, fileName + fileExt);
 },
});
let upload = multer({
 storage: storage,
 fileSize: 1000000, // 1MB = 1 000 kB = 1 000 000 B
 fileFilter: (req, file, cb) => {
  if (file.fieldname === "profile" || file.fieldname === "gallery") {
   if (
    file.mimetype === "image/png" ||
    file.mimetype === "image/jpeg" ||
    file.mimetype === "image/jpg"
   ) {
    cb(null, true); // error=null, file accepted=true
   } else {
    cb(new Error("Only .png, .jpg and .jpeg format allowed!")); // error=new Error()
   }
  } else {
   cb(new Error("Field name not found!"));
  }
 },
});
app.post(
 "/upload",
 upload.fields([
  { name: "profile", maxCount: 1 },
  { name: "gallery", maxCount: 3 },
 ]),
 (req, res) => {
  const profile = req.files["profile"][0];
  const gallery = req.files["gallery"];
  let profileImg = null,
   galleryImg = [];

  // generate id for user & store in data folder with profile & gallery images
  const id = Date.now();
  fs.writeFile(
   `data/${id}.json`,
   JSON.stringify({ id, profile, gallery }),
   (err) => {
    if (err) throw err;
    else {
        res.redirect(`/u/${id}`);
    }
   }
  );
 }
);

/*
 * Retrieve Profile with ID
 * GET /profile
 */
app.get("/u/:id", (req, res) => {
 const id = req.params.id;
 fs.readFile(`data/${id}.json`, (err, data) => {
  if (err) {
   res.status(404).send(`
    <html>
        <head>
            <title>UploadHub</title>
        </head>
        <body align="center">
            <h1>UploadHub</h1>
            <h3>Profile not found!</h3>
        </body>
    </html>
  `);
  } else {
   const { profile, gallery } = JSON.parse(data);
   let profileImg = null,
    galleryImg = [];
   fs.readFile(profile.path, (err, data) => {
    if (err) throw err;
    profileImg =
     "data:image/png;base64," + new Buffer.from(data).toString("base64");
    gallery.forEach((image) => {
     fs.readFile(image.path, (err, data) => {
      if (err) throw err;
      galleryImg.push(
       "data:image/png;base64," + new Buffer.from(data).toString("base64")
      );
      res.status(200).send(
       `
         <html>
             <head>
                 <title>UploadHub</title>
             </head>
             <body>
             <style>
               body {
                   font-family: Arial, Helvetica, sans-serif;
                   text-align: center;
               }
               img {
                   display: block;
                   margin: auto;
                   max-width: 300px;
                   height: auto;
                   min-height: 100px;
                   background-color: #f5f5f5;
                   object-fit: cover;
               }
               img.profile {
                   width: 150px;
                   height: 150px;
                   border-radius: 100rem;
                   border: 6px solid #ddd;
               }
               img.cover {
                   width: 100%;
                   border: 1px solid #ddd;
               }
               </style>
                 <h1>UploadHub</h1>
                 <h3>Profile Picture</h3>
                 <img src="${profileImg}" class="profile" alt="Profile Picture" />
                 <h3>Gallery</h3>
                 ${galleryImg.map((image) => {
                  return `<img src="${image}" class="cover" alt="Gallery Image" />`;
                 })}
             </body>
         </html>
         `
      );
     });
    });
   });
  }
 });
});

/*
 * Error handling
 */
app.use((err, req, res, next) => {
 if (err) {
  if (err instanceof multer.MulterError) {
   console.log("Multer error: ", err.message);
   res.status(500).send({
    error: "Error: there was a server side error!",
   });
  } else {
   res.status(500).send({
    error: "Error: " + err.message,
   });
  }
 } else {
  res.status(500).send({
   error: "Error: there was a server side error!",
  });
 }
});

app.listen(PORT, () => {
 console.log("Server is running on port 3000");
});
