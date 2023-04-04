import { getDb } from "../db/mongo-conection.js";
import { ObjectId } from "mongodb";

export default class ZookepperModel{
    static async getAllZookeppers(){
        const collection = await getDb().collection('zookeper');
        const zookeper = await collection.find().toArray()
        return zookeper
    }
}