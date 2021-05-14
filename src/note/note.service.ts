import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
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
}
