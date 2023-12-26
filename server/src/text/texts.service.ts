import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { TextsDocument, Texts } from './texts.model';
import { CreateTextDto } from './dtos/create-text.dto';

@Injectable()
export class TextsService {
  constructor(
    @InjectModel(Texts.name) private textsModel: Model<TextsDocument>,
  ) {}

  async create(dto: CreateTextDto): Promise<TextsDocument> {
    const text = new this.textsModel(dto);
    return text.save();
  }

  async getTextAll(): Promise<TextsDocument[]> {
    return this.textsModel.find().exec();
  }

  async getTextsById(id: string): Promise<TextsDocument> {
    return this.textsModel.findById(id).exec();
  }

  async delete(id: string): Promise<TextsDocument> {
    return this.textsModel.findOneAndDelete({ _id: id }).exec();
  }
}
