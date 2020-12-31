const knex = require('knex');
const config = require('../knexfile');
const db = knex(config.development);

const add = async (lesson) => {
    const [id] = await db('lessons').insert(lesson);
    return id;
};

const find = async () => {
    return db('lessons');
}

module.exports = {
    add, 
    find
};