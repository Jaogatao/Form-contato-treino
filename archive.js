const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();

// Configurando o body-parser para tratar requisições POST
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Conectando ao banco de dados
mongoose.connect('mongodb://localhost:27017', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('Conexão com o banco de dados estabelecida!'))
.catch(err => console.error('Erro ao conectar com o banco de dados:', err));

// Definindo o modelo de dados
const ContatoSchema = new mongoose.Schema({
    nome: String,
    numero: String,
    email: String
});

const Contato = mongoose.model('Contato', ContatoSchema);

// Definindo as rotas
app.get('/', (req, res) => {
    res.send('Olá, mundo!');
});

// Listar todos os contatos
app.get('/contatos', (req, res) => {
    Contato.find()
        .then(contatos => res.json(contatos))
        .catch(err => res.status(400).json('Erro: ' + err));
});

// Adicionar um novo contato
app.post('/contatos', (req, res) => {
    const novoContato = new Contato({
        nome: req.body.nome,
        numero: req.body.numero,
        email: req.body.email
    });

    novoContato.save()
        .then(() => res.json('Contato adicionado com sucesso!'))
        .catch(err => res.status(400).json('Erro: ' + err));
});

// Buscar um contato pelo ID
app.get('/contatos/:id', (req, res) => {
    Contato.findById(req.params.id)
        .then(contato => res.json(contato))
        .catch(err => res.status(400).json('Erro: ' + err));
});

// Atualizar um contato pelo ID
app.put('/contatos/:id', (req, res) => {
    Contato.findById(req.params.id)
        .then(contato => {
            contato.nome = req.body.nome;
            contato.numero = req.body.numero;
            contato.email = req.body.email;

            contato.save()
                .then(() => res.json('Contato atualizado com sucesso!'))
                .catch(err => res.status(400).json('Erro: ' + err));
        })
        .catch(err => res.status(400).json('Erro: ' + err));
});

// Deletar um contato pelo ID
app.delete('/contatos/:id', (req, res) => {
    Contato.findByIdAndDelete(req.params.id)
        .then(() => res.json('Contato deletado com sucesso!'))
        .catch(err => res.status(400).json('Erro: ' + err));
});

// Iniciando o servidor
app.listen(3000, () => {
    console.log('Servidor iniciado na porta 3000!');
});