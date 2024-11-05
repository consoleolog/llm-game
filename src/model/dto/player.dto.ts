import {Player} from "@/model/entity/player";

export class PlayerDto {
    get useYn(): "Y" | "N" {
        return this._useYn;
    }

    set useYn(value: "Y" | "N") {
        this._useYn = value;
    }
    get updUser(): string {
        return this._updUser;
    }

    set updUser(value: string) {
        this._updUser = value;
    }
    get updDt(): Date {
        return this._updDt;
    }

    set updDt(value: Date) {
        this._updDt = value;
    }
    get regDt(): Date {
        return this._regDt;
    }

    set regDt(value: Date) {
        this._regDt = value;
    }
    get lastLoginDt(): Date {
        return this._lastLoginDt;
    }

    set lastLoginDt(value: Date) {
        this._lastLoginDt = value;
    }
    get playerDisplayName(): string {
        return this._playerDisplayName;
    }

    set playerDisplayName(value: string) {
        this._playerDisplayName = value;
    }
    get playerPassword(): string {
        return this._playerPassword;
    }

    set playerPassword(value: string) {
        this._playerPassword = value;
    }
    get playerLoginId(): string {
        return this._playerLoginId;
    }

    set playerLoginId(value: string) {
        this._playerLoginId = value;
    }
    get playerId(): string {
        return this._playerId;
    }

    set playerId(value: string) {
        this._playerId = value;
    }
    private _playerId : string;

    private _playerLoginId : string;

    private _playerPassword: string;

    private _playerDisplayName: string;

    private _lastLoginDt: Date;

    private _regDt: Date;

    private _updDt: Date;

    private _updUser: string;

    private _useYn: 'Y' | 'N';

    constructor(
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

    public toDto(player: Player): PlayerDto{
        return PlayerDto.build(
            player.getPlayerId,
            player.getPlayerLoginId,
            player.getPlayerPassword,
            player.getPlayerDisplayName,
            player.getLastLoginDt,
            player.getRegDt,
            player.getUpdDt,
            player.getUpdUser,
            player.getUseYn
        );
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
    ): PlayerDto {
        return new PlayerDto(
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