import {PlayerRepository} from "@/repository/player.repository";
import {PlayerService} from "@/service/player.service";
import {PlayerServiceImpl} from "@/service/impl/player.service.impl";

export class Container {

    private readonly _playerRepository: PlayerRepository;

    private readonly _playerService: PlayerService;

    constructor(db) {
        this._playerRepository = new PlayerRepository(db);
        this._playerService = new PlayerServiceImpl(this.playerRepository);
    }

    get playerRepository(){
        return this._playerRepository;
    }

    get playerService(){
        return this._playerService;
    }


}