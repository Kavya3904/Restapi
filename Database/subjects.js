const knex = require("./knex");

function create_subject(subject) {
    return knex("subjects").insert(subject);
}

function get_subjects(){
    return knex("subjects").select("*");
}
function get_subjects_id(id,subject){
    return knex("subjects").where("id",id).forShare(subject[id])
}

function delete_subject(id){
    return knex("subjects").where("id",id).del();
}
function add_subject(id,subject){
    return knex("subjects").where("id",id).update(subject);
}

module.exports = {
    create_subject,
    get_subjects,
    get_subjects_id,
    delete_subject,
    add_subject
}
