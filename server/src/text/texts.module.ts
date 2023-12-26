import { Module } from '@nestjs/common';
import { TextsController } from './texts.controller';
import { TextsService } from './texts.service';
import { MongooseModule } from '@nestjs/mongoose';
import { TextsSchema, Texts } from './texts.model';

@Module({
  controllers: [TextsController],
  providers: [TextsService],
  imports: [
    MongooseModule.forFeature([{ name: Texts.name, schema: TextsSchema }]),
  ],
  exports: [TextsService],
})
export class TextsModule {}
