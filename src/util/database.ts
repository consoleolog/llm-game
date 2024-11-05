import {Client} from "pg";

export class Database {
    private readonly _postgres;

    constructor() {
        this._postgres = new Client({
            user: "postgres",
            host: "localhost",
            database: "postgres",
            password: "",
            port: 5432,
        });
    }

    get psql(){
        this._postgres.connect().then(()=>{
            if (process.env.NODE_ENV === "development"){
                if (!global._psql) {
                    global._psql = this._postgres;
                }
                return global._psql;
            }
        });
        return this._postgres;
    }

}