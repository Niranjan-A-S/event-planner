import { connectToDatabase, insertDocument } from "@/config/db";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === "POST") {
        await updateComments(req, res);
    }
    else await getRequestHandler(req, res);
}

const updateComments = async (req: NextApiRequest, res: NextApiResponse) => {
    const eventId = req.query.eventId;
    if (!req.body) {
        res.status(404).send('Empty body');
    }
    const comment = req.body
    const { email, name, text } = comment;
    if (!email.includes('@') || !name || name.trim() === '' || !text || text.trim() === '') {
        return res.status(422).json({ message: 'Invalid input' });
    }

    const newComment = {
        ...comment,
        eventId
    }

    let db, client;
    try {
        const connection = await connectToDatabase();
        db = connection.db;
        client = connection.client;
    } catch (error) {
        return res.status(500).json({ message: 'Error connecting to DB' });
    }

    try {
        await insertDocument(db, 'comments', newComment);
        client?.close();
    } catch (error) {
        return res.status(500).json({ message: 'Failed to store the document to DB' });
    }
    // const filePath = buildFilePath('comments');
    // const data = await extractData(filePath);
    // data.push(newComment);
    // await fs.writeFile(filePath, JSON.stringify(data), { encoding: 'utf-8' });
    res.status(201).send({
        message: 'Comment Added',
        user: newComment
    });
    client.close();
}

const getRequestHandler = async (req: NextApiRequest, res: NextApiResponse) => {
    let db, client, result;
    try {
        const connection = await connectToDatabase();
        db = connection.db;
        client = connection.client;
    } catch (error) {
        return res.status(500).json({ message: 'Error connecting to DB' });
    }

    try {
        result = await db.collection('comments').find({}).toArray();
        client?.close();
    } catch (error) {
        return res.status(500).json({ message: 'Failed to store the document to DB' });
    }
    res.status(201).json(result.map(({ _id, name, email, text }) => ({
        id: _id, name, email, text
    })));
}
