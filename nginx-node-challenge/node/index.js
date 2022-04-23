const express = require('express');
const { Sequelize, DataTypes } = require('sequelize');

const app = express();
const port = 3000;

const sequelize = new Sequelize('nodedb', 'root', 'root', {
    host: 'db',
    dialect: 'mariadb'
});

const People = sequelize.define('people', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
});

app.get('/', async (req, res) => {
    const result = await People.findAll();
    
    const response = [
        '<h1>Full cycle</h1><br>',
        '<table>',
        '<th><td>ID</td><td>NOME</td></th>',
        result.map(item => `<td><td>${item.id}</td><td>${item.name}</td></td>`).join(''),
        '</table>'
    ].join('');

    res.send(response);
});

app.post('/people', (req, res) => {
    const { name } = req.body;
    //cadastrar pessoa
});

app.delete('/people/:id', (req, res) => {
    const { id } = req.params;
    // deletar
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
});


function createTable() {
    
}

function create(name) {

}

function deletebyId(id) {

}