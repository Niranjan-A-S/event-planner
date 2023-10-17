import path from "path";
import fs from "fs/promises"

export const buildFilePath = (context: string) => path.join(process.cwd(), 'data', `${context}.json`);

export const extractData = async (filePath: string) => {
    const fileContent = await fs.readFile(filePath, { encoding: 'utf-8' });
    if (!fileContent) {
        await fs.writeFile(filePath, '[]', { encoding: 'utf-8' });
        return [];
    }
    return JSON.parse(fileContent);
}