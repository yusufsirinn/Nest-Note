import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { GetUser } from 'src/auth/get-user-decorator';
import { User } from 'src/auth/model/user.model';
import { Note } from './model/note.model';
import { NoteService } from './note.service';

@Controller('note')
@UseGuards(AuthGuard())
export class NoteController {
    constructor(private readonly noteService:NoteService){}

    @Post('/save')
    async save(@Body() body:Note): Promise<Note>{
        return await this.noteService.save(body);
    }

    @Post('/getAll')
    async getAll( @GetUser() user:User): Promise<Note[]>{
        return await this.noteService.gelAll();
    }
}
