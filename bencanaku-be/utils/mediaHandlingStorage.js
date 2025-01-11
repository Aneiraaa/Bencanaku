// // utils/mediaHandlingStorage.js
// const multer = require("multer");

// const storageImage = multer.memoryStorage();

// const imageUpload = multer({
//   storage: storageImage,
//   fileFilter: (req, file, callback) => {
//     const allowedTypes = ["image/png", "image/jpg", "image/jpeg"];
//     if (allowedTypes.includes(file.mimetype)) {
//       callback(null, true);
//     } else {
//       callback(new Error("Only PNG, JPG, and JPEG formats are allowed!"), false);
//     }
//   },
// }).single("img");

// module.exports = {
//   imageUpload,
// };
