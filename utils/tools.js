import fs from "fs/promises";
import path from 'path';

const getDataFromJson = async ()=>{
    const jsonPath = path.join(process.cwd(),"utils","db.json");
    const data = await fs.readFile(jsonPath);
    return JSON.parse(data);

}

export default getDataFromJson