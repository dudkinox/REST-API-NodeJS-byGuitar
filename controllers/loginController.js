"use strict";

const firebase = require("../db");
const Account = require("../models/login");
const firestore = firebase.firestore();

const addAccount = async (req, res, next) => {
  try {
    const data = req.body;
    await firestore.collection("login").doc().set(data);
    res.send("เพิ่มบัญชีสำเร็จ");
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const getAllAccount = async (req, res, next) => {
  try {
    const account = await firestore.collection("login");
    const data = await account.get();
    const AccountArray = [];
    if (data.empty) {
      res.status(404).send("ไม่พบข้อมูลใด");
    } else {
      data.forEach((doc) => {
        const account = new Account(
          doc.id,
          doc.data().username,
          doc.data().password,
          doc.data().email,
          doc.data().link
        );
        AccountArray.push(account);
      });
      res.send(AccountArray);
    }
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const getAccount = async (req, res, next) => {
  try {
    const id = req.params.id;
    const Account = await firestore.collection("login").doc(id);
    const data = await Account.get();
    if (!data.exists) {
      res.status(404).send("หาไม่เจอ");
    } else {
      res.send(data.data());
    }
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const updateAccount = async (req, res, next) => {
  try {
    const id = req.params.id;
    const data = req.body;
    const Account = await firestore.collection("login").doc(id);
    await Account.update(data);
    res.send("แก้ไขข้อมูลแล้ว");
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const deleteAccount = async (req, res, next) => {
  try {
    const id = req.params.id;
    await firestore.collection("login").doc(id).delete();
    res.send("ลบสำเร็จ");
  } catch (error) {
    res.status(400).send(error.message);
  }
};

module.exports = {
  addAccount,
  getAllAccount,
  getAccount,
  updateAccount,
  deleteAccount,
};
