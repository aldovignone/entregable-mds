import { Router } from 'express';
import { getHelloWorld } from '../controllers/helloworld.controller.js';

const router = Router();

router.get('/helloworld', getHelloWorld);

export default router;
