import cn from 'classnames';
import { CSSProperties, FC, ReactNode } from 'react';
import styles from './TextLink.module.scss';
import { TextLinkProps } from './TextLink.props';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const TextLink: FC<TextLinkProps> = ({ text, href, css, colors, type, isRouterLink }) => {
  const getCssStyles = (): CSSProperties => {
    let sx = {};

    if (css) {
      if (css.fontSize) {
        (sx as CSSProperties).fontSize = css.fontSize;
      }

      if (css.fontWeight) {
        switch (css.fontWeight) {
          case 'light': {
            (sx as CSSProperties).fontWeight = 300;
            break;
          }
          case 'regular': {
            (sx as CSSProperties).fontWeight = 'normal';
            break;
          }
        }
      }
    }

    if (colors) {
      if (colors.initial) {
        sx = {...sx, '--initial-color': colors.initial};
      }

      if (colors.hover) {
        sx = {...sx, '--hover-color': colors.hover}
      }
    }

    return sx as CSSProperties;
  };

  const getIcon = (): ReactNode => {
    switch (type) {
      case 'external': return <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M8 3.5C8 3.77614 7.77614 4 7.5 4H2C1.44772 4 1 4.44772 1 5V12C1 12.5523 1.44772 13 2 13H9C9.55228 13 10 12.5523 10 12V6.5C10 6.22386 10.2239 6 10.5 6V6C10.7761 6 11 6.22386 11 6.5V12C11 13.1046 10.1046 14 9 14H2C0.895431 14 0 13.1046 0 12V5C0 3.89543 0.895431 3 2 3H7.5C7.77614 3 8 3.22386 8 3.5V3.5Z" fill="black"/>
        <path d="M13.5 1C13.5 0.723858 13.2761 0.5 13 0.5H8.5C8.22386 0.5 8 0.723858 8 1C8 1.27614 8.22386 1.5 8.5 1.5H12.5V5.5C12.5 5.77614 12.7239 6 13 6C13.2761 6 13.5 5.77614 13.5 5.5V1ZM4.35355 10.3536L13.3536 1.35355L12.6464 0.646447L3.64645 9.64645L4.35355 10.3536Z" fill="black"/>
      </svg>
    }
  }

  return (
    <>
      {isRouterLink === undefined ?
        <motion.a style={getCssStyles()} href={href} className={cn(styles.link)}>
          {text}

          {getIcon()}
        </motion.a>
        : <Link to={href ? href : '/'} className={cn(styles.link)}>
          {text}

          {getIcon()}
        </Link>
      }
    </>
  );
};

export default TextLink;
