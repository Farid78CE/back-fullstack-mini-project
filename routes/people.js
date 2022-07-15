const express = require('express');
const router = express.Router();
const {getPeople, getPerson, addPerson, deletePerson, updatePerson} = require('../controllers/people.js');


router.get("/", getPeople); 
router.get("/:id", getPerson);
router.post("/", addPerson);
router.delete('/:id', deletePerson);
router.put("/:id", updatePerson);

module.exports = router;