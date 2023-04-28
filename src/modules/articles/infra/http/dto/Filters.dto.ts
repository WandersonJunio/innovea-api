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

export class SearchInDto implements SearchIn {
  @IsString()
  @IsOptional()
  @ApiProperty({
    description: 'Search in title',
    example: 'Title of book',
    type: [String],
  })
  title?: string;

  @IsString()
  @IsOptional()
  @ApiProperty({
    description: 'Search in description',
    example: 'This article talk about mathematics',
    type: [String],
  })
  description?: string;

  @IsString()
  @IsOptional()
  @ApiProperty({
    description: 'Seach in content article',
    example: 'Part of article, seconde paragraph',
    type: [String],
  })
  content?: string;
}
