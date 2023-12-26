import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type TextsDocument = Texts & Document;

@Schema({ collection: 'texts' })
export class Texts {
  @Prop({ required: true, type: String })
  text: string;
}

export const TextsSchema = SchemaFactory.createForClass(Texts);
