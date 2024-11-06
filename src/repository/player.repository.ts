import {CrudRepository} from "@/repository/crud.repository";
import {Player} from "@/model/entity/player";

export class PlayerRepository extends CrudRepository<Player, string> {

    constructor(db) {
        super(db);
    }
    
    findById(playerId: string):Promise<Player> {
        const query = `select * from player where player_id = $1`
        return new Promise((resolve, reject) => {
           return this.db.query(query,[playerId] ,(err, result) => err ? reject(err) : resolve(result.row[0]));
        });
    }

    findAll() {
    }

    updateOne() {
    }
    
    
}