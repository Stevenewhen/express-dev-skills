const Skill = require('../models/skill')

module.exports = {
    index,
    show,
    new: newSkill,
    create,
    delete: deleteSkill,
    edit,
    update
};

function update(req, res) {
    const skillId = req.params.id;
    const updatedData = req.body;

    Skill.updateOne(skillId, updatedData);

    res.redirect('/skills');
}


function edit(req, res) {
    const skillId = req.params.id;
    const skill = Skill.getOne(skillId);

    res.render('skills/edit', { skill });
}


function deleteSkill(req,res) {
    Skill.deleteOne(req.params.id);
    res.redirect('/skills')
}


function newSkill(req,res) {
    res.render('skills/new'), {
        title: 'New Skill'
    }
}

function create(req, res) {
    Skill.create(req.body)
    res.redirect('/skills')
}

function index(req, res) {
    res.render('skills/index', {
        skills: Skill.getAll()
    });
}

function show(req, res) {
    res.render('skills/show', {
        skill: Skill.getOne(req.params.skillsId),
    });
}


