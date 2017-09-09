const express = require("express");
const validate = require("express-validation");
const router = express.Router();

//Controller (example)
const example = require('../controllers/example');
//Schema (example) 
const sch_project = require('../schemas/example');
//Routes (example)
router.get('/example', example.getAllExample);
router.get('/example/:id', example.getExampleById);
router.post('/example/add' , validate(sch_project.example),example.postExample);
router.put('/example/edit/:id', validate(sch_project.example), example.putExample);
router.delete('/example/delete/:id', example.deleteExample);

module.exports = router;
