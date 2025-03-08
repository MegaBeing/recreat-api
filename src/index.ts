
import express from 'express';
import Compiler from './compiler';
import { config } from './config'
const cors = require('cors')
const app: express.Application = express();
const port = config.PORT
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

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

module.exports = app