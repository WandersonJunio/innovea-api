import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsOptional, IsString } from 'class-validator';
import { SearchIn, SortOptions } from 'src/modules/articles/dto/article.dto';

export class SortOptionsDto {
  @IsString()
  @IsOptional()
  @ApiProperty({
    description: 'Sort articles by element',
    example: 'relevancy',
    type: [String],
  })
  @IsEnum(['relevancy', 'popularity', 'publishedAt'])
  sortBy: SortOptions;
}

export class SearchInDto implements SearchIn {}
