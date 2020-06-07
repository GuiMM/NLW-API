import express from 'express';

const app = express();
app.use(express.json());

// rota: endereço completo da requisição
// recurso: Qual entidade estamos acessando do sistema

// Request Param: Parâmetros que vem na própria rota que identificam um recurso.
// Query Param: Parametros de paginação e filtragem. São opcionais

const users = [
    'Diego', 
    'Clayton',
    'Stephanie', 
    'Marlon', 
    'teste'
];

app.get('/users' , (request, response) => {
    const search = String(request.query.search);
    const filteredUsers = search ? users.filter(user => user.includes(search)) : users
    return response.json(filteredUsers);
} );

app.get('/users/:id' , (request,response) => {
    console.log('listagem de usuarios');
    const id = Number(request.params.id);
    const user = users[id];
    return response.json(user);
});
app.post('/users', (request, response) =>{
    const data = request.body;
    console.log(data);

    const user = {
        name: data.name,
        email: data.email
    };
    return response.json(user); 

});
app.listen(3333);