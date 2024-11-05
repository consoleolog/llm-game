export class PlayerRepository {
    
    private readonly db;
    
    constructor(db: never) {
        this.db = db;
    }
    
    findById(playerId: string) {
        const query = `select * from player where player_id = $1`
        return new Promise((resolve, reject) => {
           return this.db.query(query,[playerId] ,(err: unknown, result: unknown) => err ? reject(err) : resolve(result)); 
        });
    }
    
    
}