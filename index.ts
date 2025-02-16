// Import the express in typescript file
import express from 'express';

// Initialize the express engine
const app: express.Application = express();

// Take a port 3000 for running server.
const port: number = 3000;

// Handling '/' Request
app.get('/', (req, res) => {
	res.send('<h1>Recreate API</h1>')
})
app.get('/compile/', (req, res) => {
	const body = req.body;
	
	res.send("TypeScript With Express");
});

// Server setup
app.listen(port, () => {
	console.log(`TypeScript with Express 
		http://localhost:${port}/`);
});

