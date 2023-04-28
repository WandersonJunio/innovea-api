import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsEnum, IsOptional, IsString } from 'class-validator';
import {
  IFilterArticles,
  Language,
  SearchIn,
  SortOptions,
} from 'src/modules/articles/dto/article.dto';
import { SearchInDto, SortOptionsDto } from './Filters.dto';

export class ListArticles implements IFilterArticles {
  @IsString()
  @IsOptional()
  @ApiProperty({
    description: 'Keywords for query',
    example: 'q=searchKey',
    type: [String],
  })
  keyword?: string;

  @Type(() => SearchInDto)
  searchIn?: SearchIn;

  @Type(() => SortOptionsDto)
  sortBy?: SortOptions;

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
  period?: { from?: Date; to?: Date };

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
