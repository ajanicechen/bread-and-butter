'use client';

import { useEffect, useState } from 'react';
import { stickers } from '@/data/stickers';
import Styles from './style.module.css';

export default function Sticker() {
  const [RandomSticker, setRandomSticker] = useState<React.FC<React.SVGProps<SVGSVGElement>> | null>(null);

  useEffect(() => {
    setRandomSticker(() => stickers[Math.floor(Math.random() * stickers.length)]);
  }, []);

  if (!RandomSticker) return null;

  return (
    <div className={Styles.sticker}>
      <RandomSticker />
    </div>
  );
}