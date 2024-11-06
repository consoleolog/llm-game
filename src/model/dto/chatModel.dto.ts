import {ChatModel} from "@/model/entity/chatModel";

export class ChatModelDto {
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
    get regUser(): string {
        return this._regUser;
    }

    set regUser(value: string) {
        this._regUser = value;
    }
    get regDt(): Date {
        return this._regDt;
    }

    set regDt(value: Date) {
        this._regDt = value;
    }
    get modelDescription(): string {
        return this._modelDescription;
    }

    set modelDescription(value: string) {
        this._modelDescription = value;
    }
    get modelName(): string {
        return this._modelName;
    }

    set modelName(value: string) {
        this._modelName = value;
    }
    get modelSn(): string {
        return this._modelSn;
    }

    set modelSn(value: string) {
        this._modelSn = value;
    }

    private _modelSn: string;

    private _modelName: string;

    private _modelDescription: string;

    private _regDt: Date;

    private _regUser: string;

    private _updDt : Date;

    private _updUser: string;

    private _useYn: 'Y' | 'N';

    constructor(
        modelSn: string,
        modelName: string,
        modelDescription: string,
        regDt: Date,
        regUser: string,
        updDt: Date,
        updUser: string,
        useYn: 'Y' | 'N'
    ) {
        this.modelSn = modelSn;
        this.modelName = modelName;
        this.modelDescription = modelDescription;
        this.regDt = regDt;
        this.regUser = regUser;
        this.updDt = updDt;
        this.updUser = updUser;
        this.useYn = useYn;
    }

    static build(
        modelSn: string,
        modelName: string,
        modelDescription: string,
        regDt: Date,
        regUser: string,
        updDt: Date,
        updUser: string,
        useYn: 'Y' | 'N'
    ): ChatModelDto {
        return new ChatModelDto(
            modelSn,
            modelName,
            modelDescription,
            regDt,
            regUser,
            updDt,
            updUser,
            useYn
        );
    }

    public toDto(chatModel: ChatModel): ChatModelDto{
        return ChatModelDto.build(
            chatModel.getModelSn,
            chatModel.getModelName,
            chatModel.getModelDescription,
            chatModel.getRegDt,
            chatModel.getRegUser,
            chatModel.getUpdDt,
            chatModel.getUpdUser,
            chatModel.getUseYn
        );
    }

}