const express = require('express');
const { Sequelize, DataTypes } = require('sequelize');
const ejs = require('ejs');
var bodyParser = require('body-parser');

const app = express();
const port = 3000;
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
//Criar Conexão com o banco de dados
const sequelize = new Sequelize('nodedb', 'root', 'root', {
    host: 'db',
    dialect: 'mariadb'
});

//Criar tabela people
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

People.sync({ force: true });

let people = [];
let current = 1;

//Criar rotas
app.get('/', async (req, res) => {
    const result = await People.findAll();
    //const result = people;
    res.render('page', { result: result });
});

app.post('/people', async (req, res) => {
    const { name } = req.body;
    
    const person = await People.create({ name: name });
    //const person = { id: current++, name: name };
    //people.push(person);
    res.send(person);
});

app.delete('/people/:id', async (req, res) => {
    const { id } = req.params;
    await People.destroy({
        where: {
            id: id
        }
    });
    //people = people.filter(person => person.id != id);
    res.send('deleted');
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
});
