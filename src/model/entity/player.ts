import {PlayerDto} from "@/model/dto/player.dto";

export class Player {
    get getUseYn(): "Y" | "N" {
        return this.useYn;
    }

    get getUpdUser(): string {
        return this.updUser;
    }


    get getUpdDt(): Date {
        return this.updDt;
    }

    get getRegDt(): Date {
        return this.regDt;
    }

    get getLastLoginDt(): Date {
        return this.lastLoginDt;
    }

    get getPlayerDisplayName(): string {
        return this.playerDisplayName;
    }

    get getPlayerPassword(): string {
        return this.playerPassword;
    }

    get getPlayerLoginId(): string {
        return this.playerLoginId;
    }

    get getPlayerId(): string {
        return this.playerId;
    }

    private playerId : string;

    private playerLoginId : string;

    private playerPassword: string;

    private playerDisplayName: string;

    private lastLoginDt: Date;

    private regDt: Date;

    private updDt: Date;

    private updUser: string;

    private useYn: 'Y' | 'N';

    public toEntity(playerDto: PlayerDto): Player {
        return Player.build(
            playerDto.playerId,
            playerDto.playerLoginId,
            playerDto.playerPassword,
            playerDto.playerDisplayName,
            playerDto.lastLoginDt,
            playerDto.regDt,
            playerDto.updDt,
            playerDto.updUser,
            playerDto.useYn,
        );
    }

    protected constructor(
        playerId : string,
        playerLoginId : string,
        playerPassword: string,
        playerDisplayName: string,
        lastLoginDt: Date,
        regDt: Date,
        updDt: Date,
        updUser: string,
        useYn: 'Y' | 'N',
    ) {
        this.playerId = playerId;
        this.playerLoginId = playerLoginId;
        this.playerPassword = playerPassword;
        this.playerDisplayName = playerDisplayName;
        this.lastLoginDt = lastLoginDt;
        this.regDt = regDt;
        this.updDt = updDt;
        this.updUser = updUser;
        this.useYn = useYn;
    }

    static build(
        playerId : string,
        playerLoginId : string,
        playerPassword: string,
        playerDisplayName: string,
        lastLoginDt: Date,
        regDt: Date,
        updDt: Date,
        updUser: string,
        useYn: 'Y' | 'N',
    ): Player {
        return new Player(
            playerId,
            playerLoginId,
            playerPassword,
            playerDisplayName,
            lastLoginDt,
            regDt,
            updDt,
            updUser,
            useYn,
        );
    }

}