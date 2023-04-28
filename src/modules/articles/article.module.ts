import { DynamicModule, Logger, Module } from '@nestjs/common';
import { ArticleController } from './infra/article.controller';
import { ListArticlesUsecase } from './usecases/ListArticles.usecase';

@Module({
  imports: [],
  providers: [Logger],
  controllers: [ArticleController],
})
export class ArticleModule {
  static register(): DynamicModule {
    return {
      module: ArticleModule,
      providers: [
        {
          inject: [],
          provide: ListArticlesUsecase,
          useFactory: () => new ListArticlesUsecase(),
        },
      ],
      exports: [ListArticlesUsecase],
    };
  }
}
