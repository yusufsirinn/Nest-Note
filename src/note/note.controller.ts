import { Body, Controller, Post } from '@nestjs/common';
import { Note } from './model/note.model';
import { NoteService } from './note.service';

@Controller('note')
export class NoteController {
    constructor(private readonly noteService:NoteService){}

    @Post('/save')
    async save(@Body() body:Note): Promise<Note>{
        return await this.noteService.save(body);
    }
}
