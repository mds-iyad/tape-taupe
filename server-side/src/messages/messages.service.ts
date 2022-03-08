import { Injectable } from '@nestjs/common';
import { CreateMessagesDto } from './dto/messages.dto';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Message, MessageDocument } from './schema/messages.schema';


@Injectable()
export class MessagesService {

    constructor(@InjectModel(Message.name) private messagesModel: Model<MessageDocument>) {}
    
    async create(createMessagesDto: CreateMessagesDto): Promise<Message> 
    {
        const createdMessage = new this.messagesModel(createMessagesDto);
        return createdMessage.save();
    }

    async findAll(): Promise<Message[]> 
    {
        return this.messagesModel.find().exec();
    } 
    
    async findOne(id: string): Promise<Message> 
    {
        return this.messagesModel.findOne({ _id: id }).exec();
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


    private messages: Message[] = []; 
    private id: number = 0;
    private date: Date;


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

