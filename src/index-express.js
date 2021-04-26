const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hola Patagonia!');
});

app.get('/usuarios', (req, res) => {
    res.json([{ usuario: 'Pepe' }, { usuario: 'Juan' }]);
});

app.listen(3000, () => {
    console.log('Server on port 3000');
});