import {AnyError, Collection, Document, MongoClient, ObjectId} from "mongodb";

const url = "mongodb://root:root@localhost:27017/";
const db_name = "mini-shop"

export abstract class BaseRepository {
    abstract collectionName: string;

    getCollection(): Promise<{ db: MongoClient, collection: Collection }> {
        return new Promise((resolve, reject) => {
            MongoClient.connect(url).then(db => {
                const dbo = db.db(db_name);
                resolve({db, collection: dbo.collection(this.collectionName)});
            }).catch(reject)

        })
    }

    all(filter: object = {}): Promise<Document[] | undefined> {
        return new Promise((resolve, reject) => {
            this.getCollection()
                .then(dbc => {
                    dbc.collection.find(filter).toArray(function (err, result) {
                            if (err) return reject(err);
                            resolve(result)
                            dbc.db.close();
                        }
                    );
                })
                .catch(reject)
        })
    }


    findById(id: string) {
        return this.getCollection().then(dbc => {
            return new Promise((resolve, reject) => {

                dbc.collection.findOne({_id: new ObjectId(id)}, function (err, result) {
                    if (err) return reject(err);
                    resolve(result);
                    dbc.db.close();
                });
            });
        });
    }

    insert(data: object):Promise<any> {
        return this.getCollection().then(dbc => new Promise((resolve, reject) => {
            dbc.collection.insertOne(data, function (err, res) {
                if (err) return reject(err);
                resolve(res?.insertedId);
                dbc.db.close();
            });
        }))

    };

    async update(query: object, newData: object) {
        let dbc = await this.getCollection();
        return new Promise((resolve, reject) => {
            dbc.collection.updateOne(query, {$set: newData}, function (err, res) {
                if (err) return reject(err);
                resolve(true)
                dbc.db.close();
            });
        })
    };
}