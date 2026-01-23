import express from 'express';
import helloWorldRoutes from './routes/helloworld.routes.js';

const app = express();

app.use('/', helloWorldRoutes);

export default app;
