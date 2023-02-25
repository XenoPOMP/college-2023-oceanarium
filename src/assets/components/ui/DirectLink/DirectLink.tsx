import { FC } from 'react';
import { DirectLinkProps } from './DirectLink.props';
import TextLink from '@ui/TextLink/TextLink';

const DirectLink: FC<DirectLinkProps> = ({ type, css, colors, content }) => {
  return (
    <TextLink
      text={content}
      href={content}
      type={type}
      css={css}
      colors={colors}
    />
  );
};

export default DirectLink;
