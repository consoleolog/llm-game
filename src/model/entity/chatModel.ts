import {ChatModelDto} from "@/model/dto/chatModel.dto";

export class ChatModel {
    private modelSn: string;

    private modelName: string;

    private modelDescription: string;

    private regDt: Date;

    private regUser: string;

    private updDt : Date;

    private updUser: string;

    private useYn: 'Y' | 'N';

    get getModelSn(){
        return this.modelSn;
    }
    get getModelName(){
        return this.modelName;
    }
    get getModelDescription(){
        return this.modelDescription;
    }
    get getRegDt(){
        return this.regDt;
    }
    get getUpdDt(){
        return this.updDt;
    }
    get getUpdUser(){
        return this.updUser;
    }
    get getUseYn(){
        return this.useYn;
    }
    get getRegUser(){
        return this.regUser;
    }

    protected constructor(
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
    ):ChatModel {
        return new ChatModel(
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

    public toEntity(chatModelDto: ChatModelDto): ChatModel{
        return ChatModel.build(
            chatModelDto.modelSn,
            chatModelDto.modelName,
            chatModelDto.modelDescription,
            chatModelDto.regDt,
            chatModelDto.regUser,
            chatModelDto.updDt,
            chatModelDto.updUser,
            chatModelDto.useYn
        );
    };
}