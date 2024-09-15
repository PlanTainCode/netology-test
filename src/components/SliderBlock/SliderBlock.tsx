import React, { useRef, useState } from 'react';
import styles from './SliderBlock.module.scss';

import Card1 from '../../assets/card1.png'
import Card2 from '../../assets/card2.png'
import Card3 from '../../assets/card3.png'
import Card4 from '../../assets/card4.png'
import Card5 from '../../assets/card5.png'



const SliderBlock: React.FC = () => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const scrollNext = () => {
    if (sliderRef.current) {
      const { scrollLeft } = sliderRef.current;
      const nextScrollPosition = scrollLeft + 423;
      sliderRef.current.scrollTo({ left: nextScrollPosition, behavior: 'smooth' });
    }
  };

  const scrollPrev = () => {
    if (sliderRef.current) {
      const { scrollLeft } = sliderRef.current;
      const prevScrollPosition = scrollLeft - 423;
      sliderRef.current.scrollTo({ left: prevScrollPosition, behavior: 'smooth' });
    }
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.pageX - sliderRef.current!.offsetLeft);
    setScrollLeft(sliderRef.current!.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - sliderRef.current!.offsetLeft;
    const walk = (x - startX);
    sliderRef.current!.scrollLeft = scrollLeft - walk;
  };

  const sliderData = [
    {
        img: Card1,
        title: 'Fashion ракурсы',
        description: 'Откройте для себя секреты создания уникальных fashion ракурсов с помощью Midjourney. Мы расскажем, как подобрать идеальный стиль, позу и атмосферу.'
    },
    {
        img: Card2,
        title: '3D объекты',
        description: 'Научитесь создавать впечатляющие 3D объекты с помощью Midjourney. Узнайте, как воплотить свои идеи в трехмерной форме и придать вашим проектам реалистичность.'
    },
    {
        img: Card3,
        title: 'Фоновые изображения',
        description: 'Погрузитесь в мир создания фоновых изображений с Midjourney. Узнайте, как подобрать идеальный фон для ваших проектов, чтобы подчеркнуть стиль.'
    },
    {
        img: Card4,
        title: 'Портреты',
        description: 'Откройте для себя искусство создания портретов с Midjourney. Узнайте, как передать эмоции, характер и стиль персонажа, создавая уникальные образы.'
    },
    {
        img: Card5,
        title: 'Персонажи',
        description: 'Создавайте захватывающих персонажей с помощью Midjourney. Узнайте, как воплотить в жизнь уникальные образы, придавая им характер и индивидуальность.'
    },
  ]

  return (
    <section className={styles.sliderBlock}>
        <div className={styles.preHeader}>
            <p>Библиотека</p>
        </div>
        <div className={styles.header}>
            <h2>Рандомные стили</h2>
            <div className={styles.controls}>
            <button onClick={scrollPrev} className={styles.arrow}>
                <svg width="14" height="21" viewBox="0 0 14 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2L3 10.5L12 19" stroke="white" strokeWidth="3" strokeLinecap="round"/>
                </svg>
            </button>
            <button onClick={scrollNext} className={styles.arrow}>
                <svg width="14" height="21" viewBox="0 0 14 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 2L11 10.5L2 19" stroke="white" strokeWidth="3" strokeLinecap="round"/>
                </svg>
            </button>
            </div>
        </div>

        <div
            className={styles.sliderWrapper}
            ref={sliderRef}
            onMouseDown={handleMouseDown}
            onMouseLeave={handleMouseLeave}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
        >
            <div className={styles.slider}>
            {/* Карточки */}
            {sliderData.map((item: {title: string, description: string, img: string}) => (
                <div key={Math.random()} className={styles.card}>
                    <img src={item.img} alt={item.title} />

                    <div className={styles.cardContent}>
                        <h3>{item.title}</h3>
                        <p>{item.description}</p>
                    </div>
                </div>
            ))}
            </div>
        </div>
    </section>
  );
};

export default SliderBlock;