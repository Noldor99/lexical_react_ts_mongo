import { ApiProperty } from '@nestjs/swagger';

export class CreateTextDto {
  @ApiProperty({
    description: 'The text of the text',
    example: 'simple',
  })
  readonly text: string;
}
