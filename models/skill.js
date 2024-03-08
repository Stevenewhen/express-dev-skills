const skills = [
    {id: 125223, skill: 'HTML', done: true},
    {id: 127904, skill: 'CSS', done: true},
    {id: 139608, skill: 'JavaScript', done: true},
    {id: 134654, skill: 'Express', done: false}
];
  
module.exports = {
    getAll,
    getOne,
    create,
    deleteOne,
    updateOne,
};
  

function updateOne(skillId, updatedData) {
    skillId = Number(skillId);
    const skillIdx = skills.findIndex(skill => skill.id === skillId);

    if (skillIdx !== -1) {
        skills[skillIdx] = { ...skills[skillIdx], ...updatedData };
    }
}


function deleteOne(id) {``
    id = Number(id);
    const idx = skills.findIndex(skill => skill.id === id);
    skills.splice(idx, 1);
}


function create(skill) {
    skill.id = Date.now() % 1000000;
    skill.done = false;
    console.log(skill)
    skills.push(skill);
}

function getAll() {
    return skills;
}

function getOne(id) {
    id = Number(id);
    const skill =  skills.find(skill => skill.id === id)
    return skill;
}