import {PlayerRepository} from "@/repository/player.repository";

export class Container {

    private readonly _playerRepository: PlayerRepository;

    constructor(db) {
        this._playerRepository = new PlayerRepository(db);
    }

    get playerRepository(){
        return this._playerRepository;
    }


}