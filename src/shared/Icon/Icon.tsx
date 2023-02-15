import React from 'react';
import styles from './icon.css';
import { setIcon, EIcons } from '../Icons/setIcon';

interface IIconProps {
  size?: number;
  name: EIcons
}

export function Icon({ name, size } : IIconProps) {
  return (
    <span style={{ width: `${size}px` }}>{setIcon(name)}</span>
  )
}
