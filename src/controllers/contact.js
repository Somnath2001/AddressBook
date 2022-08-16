require("dotenv").config();
require("../db/connection");
const Contact = require("../models/contact");
const mongoose = require("mongoose");

//find All the Contact in ContactBook
exports.findContact = (req, res) => {
  Contact.find()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.findContactByPagination = async (req, res) => {
  const page = parseInt(req.query.page);
  const limit = parseInt(req.query.limit);
  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;

  const result = {};

  if (endIndex < (await Contact.countDocuments().exec())) {
    result.next = {
      page: page + 1,
      limit: limit,
    };
  }
  if (startIndex > 0) {
    result.previous = {
      page: page - 1,
      limit: limit,
    };
  }

  try {
    result.results = await Contact.find().limit(limit).skip(startIndex);
    return res.status(200).send(result);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};

//find the contact By id
exports.findContactById = (req, res) => {
  const _id = req.params.contactId;
  Contact.findById(_id)
    .then((data) => {
      if (!data) {
        return res.status(404).send({ message: "Contact not exit..." });
      } else {
        res.send(data);
      }
    })
    .catch((err) => {
      res.status(500).send({
        error: "Contact not Found",
      });
    });
};

//to update the contact
exports.updateContactById = (req, res) => {
  const _id = req.params.contactId;

  console.log(req.body);

  Contact.findByIdAndUpdate(_id, req.body)
    .then((data) => {
      if (!data) {
        return res.status(404).send();
      } else {
        res.send(data);
      }
    })
    .catch((err) => {
      res.status(404).send({
        error: "Failed to update the Contact",
      });
    });
};

//to delete the student
exports.deleteContactById = (req, res) => {
  const _id = req.params.contactId;
  Contact.findByIdAndDelete(_id)
    .then((data) => {
      if (!data) {
        return res.status(400).send();
      } else {
        res.send({
          message: "contact is successfully deleted",
          deletedContact: data,
        });
      }
    })
    .catch((err) => {
      res.status(404).send({
        error: "Failed to Delete the Contact",
      });
    });
};

//create new Contact
exports.contactRegister = async (req, res) => {
  try {
    const contactProfile = {
      authorizedContactCreaterId: req.auth._id,
      name: req.body.name,
      email: req.body.email,
      phone: req.body.phone,
      address: req.body.address,
    };

    const data = await Contact.create(contactProfile);
    res.status(200).json(data);
  } catch (error) {
    if (error.keyPattern.email === 1 || error.keyPattern.phone === 1) {
      return res
        .status(500)
        .send({ message: "email or phone is already exit" });
    } else {
      return res.status(500).send(error);
    }
  }
};

exports.BulkcontactRegister = async (req, res) => {
  try {
    let bulkRecord = [];

    req.body.forEach((record) => {
      bulkRecord.push({
        authorizedContactCreaterId: req.auth._id,
        name: record.name,
        email: record.email,
        phone: record.phone,
        address: record.address,
      });
    });

    const data = await Contact.insertMany(bulkRecord);
    res.status(200).json(data);
  } catch (error) {
    console.log(error);
  }
};

//token
exports.getToken = (req, res) => {
  try {
    const Token = req.cookies.token;

    return res.status(200).send({ token: Token });
  } catch (error) {
    console.log(error);

    return res.status(500).send({ error: "failed to fetch the token" });
  }
};
