import axios, { AxiosResponse } from 'axios';
import { IFilterArticles } from '../../dto/article.dto';

export const requestArticle = async (
  filters: IFilterArticles,
): Promise<AxiosResponse> => {
  const url = process.env.BASE_URL;
  const apiKey = process.env.API_KEY;
  const query = buildQueryParams(filters);

  const response = await axios.get(
    `${url}/everything?${query}&apiKey=${apiKey}`,
  );

  return response.data;
};

const buildQueryParams = (filters: IFilterArticles): string => {
  let query: string;
  Object.keys(filters).forEach((item) => {
    const value = filters[item];
    if (query) return (query = `${query}&${item}=${value}`);

    query = `${item}=${value}`;
  });

  return query;
};
