import { Injectable, Logger } from '@nestjs/common';
import { CreateMessagesDto } from './dto/messages.dto';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Message, MessageDocument } from './schema/messages.schema';
import { User } from 'src/users/Schemas/users.schema';
import { MessagesGateway } from './messages.gateway';
import { Cron, CronExpression } from '@nestjs/schedule';

@Injectable()
export class MessagesService {

    private readonly logger = new Logger(MessagesService.name);

    constructor(@InjectModel(Message.name) private messagesModel: Model<MessageDocument>, 
    private messagesGateway: MessagesGateway
    )
    {}
    
    async create(createMessagesDto: CreateMessagesDto, user: User): Promise<Message> 
    {
        const createdMessage = new this.messagesModel(createMessagesDto);
        createdMessage.user = user;

        await createdMessage.save();
        const message = await this.findOne(createdMessage._id)
        this.messagesGateway.sendNewMessage(message);
        return message;
    }


    async findAll(): Promise<Message[]> 
    {
        return this.messagesModel.find().populate('user').exec();
    } 
    
    async findOne(id: string): Promise<Message> 
    {
        return this.messagesModel.findOne({ _id: id }).populate('user').exec();
    }
    
    async delete(id: string) 
    {
        const deletedMessage = await this.messagesModel
            .findByIdAndRemove({ _id: id })
            .exec();
        return deletedMessage;
    }

    async update(id: number, message: CreateMessagesDto) : Promise<Message> {
        return this.messagesModel.findByIdAndUpdate(id, message);
    }


    @Cron(CronExpression.EVERY_30_SECONDS)
    handleCron() {
      this.logger.debug('Called every 30 seconds');
    }

    // async random(): Promise<Message> {
    //     const [message] = await this.messagesModel.aggregate([
    //         { $sample: { size: } }
    //     ])
    // }




    // getMessages(): Message[] {
    //     return this.messages;
    // }
    // createMessages(message: CreateMessagesDto) : Message {


    //     var oneMessage: Message  = {
    //         id : this.id,
    //         date : new Date(),
    //         content: message.content,
    //         name: message.name
    //     }
    //     this.messages.push(oneMessage);

    //     this.id ++;

    //     return oneMessage;

    // }

    // getMessagesById(id: number): Message{

    //     return this.messages[id];
    // }

    // deleteMessage(id: number): Message[]
    // {
    //     const messageId = this.messages.findIndex(message => (
    //         message.id == id));
    //     this.messages.splice(messageId, 1)
    //     return this.messages
    // }

    // updateMessage(id: number, message : CreateMessagesDto): Message
    // {
    //     this.messages = this.messages.map(msg =>{
    //         if(msg.id == id)
    //         {
    //             return {...msg, content: message.content, name: message.name}
    //             // return {
    //             //     id : msg.id,
    //             //     date: msg.date,
    //             //     content: message.content,
    //             //     name: message.content
    //             // }
    //         }
    //         else
    //         {
    //             return msg
    //         }
    //     })

    //     return this.getMessagesById(id);
    // }



}

