import express from 'express';
import routes from './api/routes';

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use('/api', routes);

app.listen(port, () => {
  console.log(`Zeryn AI Agents Framework running on port ${port}`);
});