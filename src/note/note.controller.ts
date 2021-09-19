import { Body, Controller, Post, Request, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/auth.guard';
import { GetNoteRequestDTO } from './dto/get-note-request.dt0';
import { Note } from './model/note.model';
import { NoteService } from './note.service';

@Controller('note')
@UseGuards(new JwtAuthGuard())
export class NoteController {
    constructor(private readonly noteService:NoteService){}

    @Post('/save')
    async save(@Body() body:Note): Promise<Note>{
        return await this.noteService.save(body);
    }

    @Post('/getAll')
    async getAll(): Promise<Note[]>{
        return await this.noteService.gelAll();
    }

    @Post('/getNote')
    async getNote(@Request() req, @Body() body: GetNoteRequestDTO): Promise<Note>{
        console.log(req.user);
        return await this.noteService.getNote(body);
    }
}
