import { Controller, Get, Query } from '@nestjs/common';
import { ModuleRef } from '@nestjs/core';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { ListArticlesUsecase } from '../usecases/ListArticles.usecase';
import { ListArticleResponse } from './http/dto/ListArticlesResponsedto';
import { ListArticles } from './http/dto/ListArticles.dto';

@Controller()
@ApiTags('article')
export class ArticleController {
  constructor(private readonly moduleRef: ModuleRef) {}

  @ApiResponse({
    status: 200,
    description: 'List article filtered',
    type: ListArticleResponse,
  })
  @ApiResponse({
    status: 400,
    description: 'Some filters is not valid',
  })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  @ApiOperation({
    summary: 'List articles using filters',
    description: 'List articles from a third api using filters',
  })
  @Get('/')
  public async listAll(
    @Query()
    {
      domains,
      keyword,
      language,
      period,
      searchIn,
      sortBy,
      sources,
    }: ListArticles,
  ): Promise<any> {
    return this.moduleRef.get(ListArticlesUsecase).execute();
  }
}
