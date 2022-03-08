import { Body, Controller, Get, Post, Delete, Param, Put } from '@nestjs/common';
import { MessagesService } from './messages.service';
import { CreateMessagesDto } from './dto/messages.dto';
import { Message } from './Schema/messages.schema'


@Controller('messages')
export class MessagesController {
    constructor(private readonly messagesService: MessagesService) {}

    @Get()
    getMessages(): Promise<Message[]> {
        return this.messagesService.findAll();
    }

    @Post()
    createMessages(@Body() createMessagesDto: CreateMessagesDto): Promise<CreateMessagesDto> {
        return this.messagesService.create(createMessagesDto);
    }

    @Get(':id')
    findOne(@Param('id') id) {
        return this.messagesService.findOne(id)
    }

    @Delete(':id')
    remove(@Param('id') id) {
      return this.messagesService.delete(id);
    }

    @Put(':id')
    update(@Param('id') id, @Body() message: CreateMessagesDto) {
        return this.messagesService.update(id, message);
    }

}

