import { Router } from 'express';
import postRouter from './api/post';

const apiRouter = Router();

apiRouter.get('/', (req, res) => {
    res.json({ message: 'API is working' });
});

apiRouter.use('/post', postRouter)

export default apiRouter;
