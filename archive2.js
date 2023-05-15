/*// Definindo as rotas
app.get('archive2.js', (req, res) => {
    res.send('Olá, mundo!');
});

// Listar todos os contatos
app.get('/contatos', (req, res) => {
    Contato.find()
        .then(contatos => res.render('contatos', { contatos }))
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
        .then(() => res.redirect('/contatos'))
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
});*/