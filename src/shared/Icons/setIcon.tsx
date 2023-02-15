import React, { ReactNode } from 'react';
import styles from './menuitemslist.css';
import { BlockIcon } from './BlockIcon';
import { WarningIcon } from './WarningIcon';
import { CommentsIcon } from './CommentsIcon';
import { ShareIcon } from './ShareIcon';
import { SaveIcon } from './SaveIcon';

export enum EIcons {
  block = 'BlockIcon',
  warning = 'WarningIcon',
  comment = 'CommentsIcon',
  share = 'ShareIcon',
  save = 'SaveIcon',
}

export function setIcon(name: EIcons): ReactNode {
  switch (name) {

    case EIcons.block:
      return <BlockIcon />

    case EIcons.warning:
      return <WarningIcon />

    case EIcons.comment:
      return <CommentsIcon />

    case EIcons.share:
      return <ShareIcon />

    case EIcons.save:
      return <SaveIcon />

    default:
      return <svg></svg>
  }
}
