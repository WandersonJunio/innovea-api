import { IFilterArticles } from '../dto/article.dto';
import { requestArticle } from '../infra/providers/article.provider';

export class ListArticlesUsecase {
  public async execute(filters: IFilterArticles): Promise<any> {
    filters.page = filters.page ?? '1';
    filters.pageSize = filters.pageSize ?? '20';
    const articles = await requestArticle(filters);
    return {
      page: filters.page,
      pageSize: filters.pageSize,
      total: articles['totalResults'],
      articles: articles['articles'],
    };
  }
}
