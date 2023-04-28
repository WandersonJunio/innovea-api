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
  keyword?: string;
  searchIn?: SearchIn;
  sources?: string;
  domains?: string;
  excludeDomains?: string;
  period?: {
    from?: Date;
    to?: Date;
  };
  language?: Language;
  sortBy?: SortOptions;
}

export type { IFilterArticles, SortOptions, Language, SearchIn, Keyword };
