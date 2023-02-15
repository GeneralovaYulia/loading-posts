import React from 'react';
import styles from './text.css';
import classNames from 'classnames';

export enum EColor {
  black = 'black',
  orange = 'orange',
  green = 'green',
  white = 'white',
  grayF4 = 'grayF4',
  grayF3 = 'grayF3',
  grayD9 = 'grayD9',
  grayC4 = 'grayC4',
  gray99 = 'gray99',
  gray66 = 'gray66',
}

type TSizes = 28 | 20 | 16 | 14 | 12 | 10;

interface ITextProps {
  As?: 'span' | 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'div';
  children?: React.ReactNode;
  size: TSizes;
  mobileSize?: TSizes;
  tableSize?: TSizes;
  desktopSize?: TSizes;
  color?: EColor;
}

export function Text(props: ITextProps) {
  const {
    As = 'span',
    color = 'EColor.black',
    children,
    size,
    mobileSize,
    desktopSize,
    tableSize
  } = props;

  const classes = classNames(
    styles[`s${size}`],
    { [styles[`m${mobileSize}`]]: mobileSize },
    { [styles[`t${tableSize}`]]: tableSize },
    { [styles[`d${desktopSize}`]]: desktopSize },
    styles[color],
  )

  return (
    <As className={classes}>
      {children}
    </As>
  );
}
