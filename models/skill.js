const skills = [
    {id: 125223, skill: 'HTML', done: true},
    {id: 127904, skill: 'CSS', done: true},
    {id: 139608, skill: 'JavaScript', done: true},
    {id: 134654, skill: 'Express', done: false}
];
  
module.exports = {
    getAll,
    getOne
};
  
function getAll() {
    return skills;
}

function getOne(id) {
    id = parseInt(id);
    const skill =  skills.find(skill => skill.id === id)
    return skill;
}