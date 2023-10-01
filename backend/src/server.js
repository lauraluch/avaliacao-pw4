const express = require('express');
const app = express();
const cors = require('cors');
app.use(express.json());
app.use(cors());

app.use(cors({
    origin: ['http://localhost:3000']
}));

const users =  [
    {username: 'Laura', password: 'laura@123', pokemonList: []},
    {username: 'Maria', password: 'maria@234', pokemonList: []},
    {username: 'Hilton', password: 'hilton@345', pokemonList: []},
    {username: 'Luiz', password: 'luiz@456', pokemonList: []},
]

function authenticateUser(username, password) {
    const user = users.find(user => user.username === username && user.password === password);
    return user
}

function addPokemon(username, pokemonName) {
    try {
        // const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
        // const pokemonData = response.data;
        // console.log(pokemonData)
        const user = users.find(user => user.username === username);
        
        if (user) {
            user.pokemonList.push(pokemonName);
            return true;
        }
        return false;
    } catch (error) {
        console.error(error);
        return false;
    }
}

app.post('/login', (req, res) => {
    const {username, password} = req.body;
    const authenticatedUser = authenticateUser(username, password);

    // if (authenticatedUser) {
    //     res.status(200).send('Login successful!');
    // } else {
    //     res.status(401).send('Authentication failed');
    // }
    if (authenticatedUser) {
        res.status(200).json({
            username: authenticatedUser.username,
            pokemonList: authenticatedUser.pokemonList
        });
    } else {
        res.status(401).send('Authentication failed');
    }
})

app.post('/addPokemon', async (req, res) => {
    const {username, pokemonName} = req.body;
    const success = addPokemon(username, pokemonName);

    if (success) {
        res.status(200).send('Pokemon added successfully!');
    } else {
        res.status(400).send('Failed to add Pokemon.');
    }
});

app.get('/users', (req, res) => {
    res.status(200).json(users);
});



app.get('/', (req, res) => {
    res.send("Pokemon server");
})

app.listen(3005, () => {
    console.log("Server running on port 3005");
})