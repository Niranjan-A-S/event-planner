import { MongoClient } from "mongodb";

export const getDb = async () => {
    const client = await MongoClient.connect('mongodb+srv://next-user:rE3mNIWe8fOv45DP@cluster0.cupojqx.mongodb.net/newsletter?retryWrites=true&w=majority');
    const db = client.db();
    return { db, client };
}