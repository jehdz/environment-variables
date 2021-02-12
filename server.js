const app = require('http')
    .createServer((req, res) => res.send('oh hi there'));

const PORT = process.env.PORT

app.listen(PORT, () => {
    console.log(`Server is listening to ${PORT}`);
});

console.log(PORT)

// the environment decides the port
//we declare it on the terminal 

