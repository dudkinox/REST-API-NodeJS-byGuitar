"use strict";

const storage = require("../storage");
const bucket = storage.bucket();

const getAllAccount = async (req, res, next) => {
  try {
    const allStorage = await bucket.getFiles();
    const fileLinks = allStorage[0].map((file) => {
      const token =
        file.metadata.metadata.firebaseStorageDownloadTokens.split(",")[0];
      return {
        name: file.name,
        link: `https://firebasestorage.googleapis.com/v0/b/keep-image.appspot.com/o/${file.name}?alt=media&token=${token}`,
      };
    });
    const json = JSON.stringify(fileLinks);
    return res.status(200).send(json);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

module.exports = {
  getAllAccount,
};
