import { Controller, Post, Get, Body, Param, Delete } from '@nestjs/common';
import { TextsService } from './texts.service';
import { CreateTextDto } from './dtos/create-text.dto';
import { ApiTags } from '@nestjs/swagger';
import { TextsDocument } from './texts.model';

@ApiTags('text')
@Controller('text')
export class TextsController {
  constructor(private textsService: TextsService) {}

  @Post()
  create(@Body() dto: CreateTextDto): Promise<TextsDocument> {
    return this.textsService.create(dto);
  }

  @Get()
  getAllTexts(): Promise<TextsDocument[]> {
    return this.textsService.getTextAll();
  }

  @Get('/:id')
  getByValue(@Param('id') id: string): Promise<TextsDocument> {
    return this.textsService.getTextsById(id);
  }

  @Delete('/:id')
  delete(@Param('id') id: string): Promise<TextsDocument> {
    return this.textsService.delete(id);
  }
}
