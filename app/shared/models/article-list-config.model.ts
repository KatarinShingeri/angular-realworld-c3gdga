export class ArticleListConfig {
  type = 'all';

  filters: {
    event?: string;
    author?: string;
    favorited?: string;
    limit?: number;
    offset?: number;
  } = {};
}
