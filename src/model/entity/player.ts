import {PlayerDto} from "@/model/dto/player.dto";

export class Player {
    private playerSn : string;

    private playerId : string;

    private playerPassword: string;

    private playerDisplayName: string;

    private lastLoginDt: Date;

    private regDt: Date;

    private updDt: Date;

    private updUser: string;

    private useYn: 'Y' | 'N';

    public toDto(player: Player): PlayerDto{
        return PlayerDto.build(
            player.getPlayerSn,
            player.getPlayerId,
            player.getPlayerPassword,
            player.getPlayerDisplayName,
            player.getLastLoginDt,
            player.getRegDt,
            player.getUpdDt,
            player.getUpdUser,
            player.getUseYn
        );
    }

    protected constructor(
        playerSn : string,
        playerId : string,
        playerPassword: string,
        playerDisplayName: string,
        lastLoginDt: Date,
        regDt: Date,
        updDt: Date,
        updUser: string,
        useYn: 'Y' | 'N',
    ) {
        this.playerSn = playerSn;
        this.playerId = playerId;
        this.playerPassword = playerPassword;
        this.playerDisplayName = playerDisplayName;
        this.lastLoginDt = lastLoginDt;
        this.regDt = regDt;
        this.updDt = updDt;
        this.updUser = updUser;
        this.useYn = useYn;
    }

    static build(
        playerSn : string,
        playerId : string,
        playerPassword: string,
        playerDisplayName: string,
        lastLoginDt: Date,
        regDt: Date,
        updDt: Date,
        updUser: string,
        useYn: 'Y' | 'N',
    ): Player {
        return new Player(
            playerSn,
            playerId,
            playerPassword,
            playerDisplayName,
            lastLoginDt,
            regDt,
            updDt,
            updUser,
            useYn,
        );
    }

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

    get getPlayerId(): string {
        return this.playerId;
    }

    get getPlayerSn(): string {
        return this.playerSn;
    }

}