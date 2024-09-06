import { Router } from 'express';
import { OAuth2Client } from 'google-auth-library';

const postRouter = Router();
const client = new OAuth2Client(process.env.CLIENT_ID)

postRouter.post('/', async (req, res) => {
    const { token } = req.body

    if (!token) return res.status(400).send({ message: 'Token is required' })

    const ticket = await client.verifyIdToken({
        idToken: token,
        audience: process.env.CLIENT_ID
    })

    const payload = ticket.getPayload()

    if (!payload) return res.status(400).send({ message: 'Invalid token' })

    res.status(200).send({ email: payload.email })
});

export default postRouter;
