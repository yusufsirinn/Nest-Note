import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ErrorId } from 'src/base-exception-filter/error-id';
import { CustomError } from 'src/base-exception-filter/model/base-exception.model';
import { GetNoteRequestDTO } from './dto/get-note-request.dt0';
import { Note, NoteDocument } from './model/note.model';

@Injectable()
export class NoteService {
    constructor(@InjectModel(Note.name) private noteModel: Model<NoteDocument>){}

    async save(data:Note):Promise<Note>  {
        const note = new this.noteModel(data);
        return await note.save();
    }

    async gelAll(): Promise<Note[]>{
        return await this.noteModel.find();
    }

    async getNote(requestDto: GetNoteRequestDTO): Promise<Note>{
        const note = await this.noteModel.findOne(requestDto);
        if(!note){
            throw new CustomError(ErrorId.noteNotFound);
        }
        return note;
    }
}
