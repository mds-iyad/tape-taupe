import { Body, Controller, Get, Post, Delete, Param, Put, Request, UseGuards } from '@nestjs/common';
import { MessagesService } from './messages.service';
import { CreateMessagesDto } from './dto/messages.dto';
import { Message } from './Schema/messages.schema'
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';


@Controller('messages')
export class MessagesController {
    constructor(private readonly messagesService: MessagesService) {}

    @Get()
    getMessages(): Promise<Message[]> {
        return this.messagesService.findAll();
    }

    @Post()
    @UseGuards(JwtAuthGuard)
    createMessages(@Body() createMessagesDto: CreateMessagesDto, @Request() req): Promise<CreateMessagesDto> {
        console.log(req.user)
        return this.messagesService.create(createMessagesDto,req.user.sub);
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

