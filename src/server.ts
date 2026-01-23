import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.json({ message: 'HelloWorld' });
});

export default app;
