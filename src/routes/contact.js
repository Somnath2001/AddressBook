const express = require("express");
const { isSignedIn } = require("../controllers/auth");
const router = new express.Router();
const {
  findContact,
  findContactById,
  updateContactById,
  deleteContactById,
  contactRegister,
  BulkcontactRegister,
  findContactByPagination,
  getToken,
} = require("../controllers/contact");

//Get all contacts
router.get("/contacts", isSignedIn, findContact);

//Get all contacts by pagination
router.get("/contacts/paginated", isSignedIn, findContactByPagination);

//Get contact by id
router.get("/contact/:contactId", isSignedIn, findContactById);

//update the contact
router.put("/contact/update/:contactId", isSignedIn, updateContactById);

//delete the contact
router.delete("/contact/delete/:contactId", isSignedIn, deleteContactById);

//create the contact registration
router.post("/contact/register", isSignedIn, contactRegister);

//create the bulk contact record
router.post("/bulk/contact/register", isSignedIn, BulkcontactRegister);

// get token
router.get("/token", isSignedIn, getToken);

module.exports = router;
