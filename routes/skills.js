var express = require('express');
var router = express.Router();
var skillsCtrl = require('../controllers/skills');

//Require the controller that exports Skill
//CRUD functions

/* GET users listing. */
// All actual paths start with "/skills"

//GET all skills
router.get('/', skillsCtrl.index)

//GET router for form--> /skills/new
router.get('/new', skillsCtrl.new)

//GET one skill --> /:skillsId
router.get('/:skillsId', skillsCtrl.show);

//POST a skill --> /skills
router.post('/', skillsCtrl.create);

//DELETE a skill
router.delete('/:id', skillsCtrl.delete)

//EDIT
router.get('/edit/:id', skillsCtrl.edit);

//UPDATE
router.put('/:id', skillsCtrl.update);


module.exports = router;
