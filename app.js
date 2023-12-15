const express = require('express');
const os = require('os');

const app = express();
let cpu_list = os.cpus();
let wolnaPamiec = os.freemem();
let calaPamiec = os.totalmem();
let procentWolnaPamiec = Math.round((wolnaPamiec / calaPamiec) * 100);
app.get('/', (req, res) => {
    res.send(cpu_list)
})
app.get('/procki', (req, res) => {
    let numer = req.query.numer;
    res.send("User procesora " + numer + " to: " + cpu_list[numer].times.user.toString());
})
app.get('/mem', (req, res) => {
    res.send("Procent wolnej pamięci: " + procentWolnaPamiec + "%");
})
app.get('/html', (req, res) => {
    res.send(`
    <table border='2'>
        <tr>
            <th>Pamięć całkowita</th>
            <th>Pamięć wolna</th>
            <th>Procent wolnej pamięci</th>
        </tr>
        <tr>
            <td>${calaPamiec}</td>
            <td>${wolnaPamiec}</td>
            <td>${procentWolnaPamiec}%</td>
        </tr>
    </table>`)
})

app.listen(3000, () => {
    console.log(`Server is Listening on 3000`);
})