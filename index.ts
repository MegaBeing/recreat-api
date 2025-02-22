
import express from 'express';
import Compiler from './src/compiler';

const app: express.Application = express();
app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));
const port: number = 3000;

app.get('/', (req, res) => {
	res.send('<h1>Recreate API</h1>')
})
app.post('/compile/', (req, res) => {
	const body = req.body;
	const responseBody = Compiler(body);
	res.json(responseBody);
});

"TypeScript With Express"
app.listen(port, () => {
	console.log(`TypeScript with Express 
		http://localhost:${port}/`);
});

