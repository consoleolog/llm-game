import {PlayerDto} from "@/model/dto/player.dto";
import {Player} from "@/model/entity/player";
import {PlayerService} from "@/service/player.service";
import {PlayerRepository} from "@/repository/player.repository";

export class PlayerServiceImpl implements PlayerService {

    private readonly playerRepository: PlayerRepository;

    constructor(playerRepository: PlayerRepository) {
        this.playerRepository = playerRepository;
    }

    register(playerDto: PlayerDto){

        const player: Player = playerDto.toEntity(playerDto);



    }


}