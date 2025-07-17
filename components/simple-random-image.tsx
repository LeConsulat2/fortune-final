'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';

// 실제 이미지 파일들 (컴포넌트 밖에 정의)
const IMAGE_FILES = [
  'first-one.png',
  'life-fortune.png',
  'life-fortune-2.png',
  'fortune.png',
  'fortune-theme-1.png',
  'fortune-theme-2.png',
  'sadness-theme-3.png.png',
  'beauty-theme-4.png.png',
  'maybemust-theme-5.png',
  'akiharu-theme-6.png',
  'misfortune-theme-7.png',
  'noexperience-theme-8.png',
  'youtellmusic-theme-9.png',
  'lifemoments-theme.png',
  'timeerase-theme.png',
  'somelater-theme.png',
  'answerstime-theme.png',
  'slowdown-theme.png',
];

export function SimpleRandomImage() {
  const [imageSrc, setImageSrc] = useState('/images/akiharu-theme-6.png');

  useEffect(() => {
    // 페이지 로드할 때마다 랜덤 이미지 선택
    const randomIndex = Math.floor(Math.random() * IMAGE_FILES.length);
    setImageSrc(`/images/${IMAGE_FILES[randomIndex]}`);
  }, []);

  return (
    <Image
      src={imageSrc}
      alt="Random fortune image"
      width={320}
      height={320}
      className="rounded-xl shadow-2xl object-contain relative z-10"
      onError={(e) => {
        // 에러 발생시 기본 이미지로 fallback
        const target = e.target as HTMLImageElement;
        target.src = '/life-fortune-2.png';
      }}
    />
  );
}
