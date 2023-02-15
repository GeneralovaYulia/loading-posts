import React from 'react';
import styles from './preview.css';

interface IPreviewProps {
  previewImg: string;
}

export function Preview({ previewImg } : IPreviewProps) {
  return (
    <div className={styles.preview}>
      <img className={styles.previewImg} src={previewImg ? previewImg : "https://cdn.dribbble.com/userupload/3841455/file/original-8366cea320dfb9d7b848909876a0de12.png?compress=1&resize=752x"} alt="pic" />
    </div>
  );
}
