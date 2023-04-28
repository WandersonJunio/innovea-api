import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsNumber, IsOptional, IsString } from 'class-validator';
import {
  IFilterArticles,
  Language,
  SortOptions,
} from 'src/modules/articles/dto/article.dto';

export class ListArticles implements IFilterArticles {
  @IsString()
  @IsOptional()
  page?: string;

  @IsString()
  @IsOptional()
  pageSize?: string;

  @IsString()
  @IsOptional()
  @ApiProperty({
    description: 'Keywords for query',
    example: 'q=searchKey',
    type: [String],
  })
  q?: string;

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

  @IsString()
  @IsOptional()
  @ApiProperty({
    description: 'Sort articles by element',
    example: 'relevancy',
    type: [String],
  })
  @IsEnum(['relevancy', 'popularity', 'publishedAt'])
  sortBy: SortOptions;

  @IsString()
  @IsOptional()
  @ApiProperty({
    description: 'Filter by sourcers',
    example: 'Martin Bob',
    type: [String],
  })
  sources?: string;

  @IsString()
  @IsOptional()
  @ApiProperty({
    description: 'Filter from fonts domains',
    example: 'myarticle.net',
    type: [String],
  })
  domains?: string;

  @IsString()
  @IsOptional()
  @ApiProperty({
    description: 'Filter by period',
    example: '28/04/2023',
    type: [String],
  })
  from?: string;

  @IsString()
  @IsOptional()
  @ApiProperty({
    description: 'Filter by period',
    example: '28/04/2023',
    type: [String],
  })
  to?: string;

  @IsString()
  @IsOptional()
  @ApiProperty({
    description: 'Sort articles by element',
    example: 'relevancy',
    type: [String],
  })
  @IsEnum([
    'ar',
    'de',
    'en',
    'es',
    'fr',
    'he',
    'it',
    'nl',
    'no',
    'pt',
    'ru',
    'sv',
    'ud',
    'zh',
  ])
  language?: Language;
}
