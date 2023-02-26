export interface ITextLink {
  css?: {
    fontSize?: string,
    fontWeight?: 'regular' | 'light',
  };
  colors?: {
    initial?: string,
    hover?: string,
  };
  type: 'external';
  isRouterLink?: true;
}

export interface TextLinkProps extends ITextLink {
  text?: string;
  href?: string;
}
