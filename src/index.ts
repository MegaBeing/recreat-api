
import express from 'express';
import Compiler from './compiler';
import { allowedOrigins, config } from './config'

const cors = require('cors')
const app: express.Application = express();
const port = config.PORT

const corsOptions = {
	origin: (origin: string | undefined, callback: (error: Error | null, allow?: boolean) => void) => {
		if (!origin || allowedOrigins.includes(origin)) {
			callback(null, true); // Allow the request
		} else {
			callback(new Error('Not allowed by CORS')); // Reject the request
		}
	},
	methods: 'GET,POST,PUT,DELETE', // Allowed HTTP methods
	credentials: true, // Allow cookies and authentication headers
};

app.use(cors(corsOptions))
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