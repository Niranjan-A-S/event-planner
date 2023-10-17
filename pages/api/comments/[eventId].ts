import { getDb } from "@/config/db";
import { buildFilePath, extractData } from "@/utils/helpers";
import { randomUUID } from "crypto";
import fs from "fs/promises"
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
    const { db, client } = await getDb();
    await db.collection('comments').insertOne(newComment);
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

    const { db, client } = await getDb();
    const result = await db.collection('comments').find({}).toArray();
    res.status(201).json(result.map(({ _id, name, email, text }) => ({
        id: _id, name, email, text
    })));
    client.close();
}
