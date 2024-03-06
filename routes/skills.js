var express = require('express');
var router = express.Router();
var skillsCtrl = require('../controllers/skills');

//Require the controller that exports Skill
//CRUD functions

/* GET users listing. */
// All actual paths start with "/skills"

//GET all skills
router.get('/', skillsCtrl.index)


router.get('/:skillsId', skillsCtrl.show);

module.exports = router;
