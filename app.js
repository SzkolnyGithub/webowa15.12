const express = require('express');
const os = require('os');

const app = express();
let cpu_list = os.cpus();
let wolnaPamiec = os.freemem();
let calaPamiec = os.totalmem();
app.get('/', (req, res) => {
    res.send(cpu_list)
})
app.get('/procki', (req, res) => {
    let numer = req.query.numer;
    res.send(cpu_list[numer]);
})
app.get('/mem', (req, res) => {
    let procentWolnaPamiec = Math.round((wolnaPamiec / calaPamiec) * 100);
    res.send("Procent wolnej pamięci: " + procentWolnaPamiec + "%");
})

app.listen(3000, () => {
    console.log(`Server is Listening on 3000`);
})