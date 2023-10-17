import { getDb } from "@/config/db";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === "POST") {
        await handleUserRegister(req, res);
    }
    else res.send('Send a post request')
}

const handleUserRegister = async (req: NextApiRequest, res: NextApiResponse) => {
    if (!req.body) {
        res.status(404).send('Empty body');
    }

    const { email } = req.body
    if (!email || !email.includes('@')) {
        return res.status(422).json({ message: 'Invalid email' });
    }
    const newUser = {
        email,
    }
    let db, client;
    try {
        const connection = await getDb();
        db = connection.db;
        client = connection.client;
    } catch (error) {
        return res.status(500).json({ message: 'Error connecting to DB' });
    }

    try {
        await db?.collection('emails').insertOne(newUser);
        client?.close();
    } catch (error) {
        return res.status(500).json({ message: 'Failed to store the document to DB' });
    }

    res.status(201).send({
        message: 'User registered',
        user: newUser
    })
}
