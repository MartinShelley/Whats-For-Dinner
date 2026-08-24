import express, { type Express } from 'express';
import cors from 'cors';
import { router } from './routes/routes';

const app: Express = express();

app.use(express.json());
app.use(cors());
app.use('/api', router);

app.get('/', (rep, res) => {
  res.send('You can do this! :)');
});

export default app;