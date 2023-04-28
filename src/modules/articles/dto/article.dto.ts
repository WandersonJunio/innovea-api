type Keyword = {
  [key: string]: string;
};

type SearchIn = {
  title?: string;
  description?: string;
  content?: string;
};

enum Language {
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
}

enum SortOptions {
  'relevancy',
  'popularity',
  'publishedAt',
}

interface IFilterArticles {
  q?: string;
  title?: string;
  description?: string;
  content?: string;
  sources?: string;
  domains?: string;
  excludeDomains?: string;
  from?: string;
  to?: string;
  language?: Language;
  sortBy?: SortOptions;
  page?: string;
  pageSize?: string;
}

export type { IFilterArticles, SortOptions, Language, SearchIn, Keyword };
