import {
  motion,
  MotionValue,
  useScroll,
  useTransform,
  Variants,
} from 'framer-motion';
import './hero.scss';
import './typing.scss';
import { useEffect, useRef } from 'react';

const container: Variants = {
  initial: {},
  animate: {
    transition: {
      type: 'spring',
      stiffness: 300,
      damping: 20,
      delay: 1,
      delayChildren: 0.2,
      staggerChildren: 0.15,
    },
  },
};

const item: Variants = {
  initial: { y: 20, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
  },
};

type HeroProps = {
  onScroll?: (scroll: MotionValue<number>) => void;
};

export const Hero = ({ onScroll }: HeroProps) => {
  const ref = useRef<HTMLElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });
  const xHeroText = useTransform(scrollYProgress, [0, 1], ['0', '-20%']);
  const xWorksButton = useTransform(scrollYProgress, [0, 1], ['0', '-100%']);
  const xContactsButton = useTransform(scrollYProgress, [0, 1], ['0', '-150%']);
  const xImg = useTransform(scrollYProgress, [0, 1], ['0', '40%']);
  const opacity = useTransform(scrollYProgress, [0, 1], ['1', '0']);

  useEffect(() => {
    if (onScroll) onScroll(scrollYProgress);
  }, [scrollYProgress, onScroll]);

  return (
    <motion.section
      id='hero'
      className='hero'
      variants={container}
      initial='initial'
      animate='animate'
      ref={ref}
    >
      <div className='left-side'>
        <motion.div
          style={{ x: xHeroText, opacity }}
          className='text'
          variants={item}
        >
          <h1 className='name'>Привет, я Макс,</h1>
          <h1 className='typing'></h1>
        </motion.div>
        <div className='buttons'>
          <motion.a
            style={{ x: xWorksButton, opacity }}
            href='#works'
            className='btn'
            variants={item}
          >
            Что сделал
          </motion.a>
          <motion.a
            style={{ x: xContactsButton, opacity }}
            href='#contacts'
            className='btn alt'
            variants={item}
          >
            Контакты
          </motion.a>
        </div>
      </div>
      <div className='right-side'>
        <motion.div
          style={{ x: -xHeroText, opacity }}
          className='background'
          variants={item}
        ></motion.div>
        <motion.img
          style={{ x: xImg, opacity }}
          src='/hero/hero.png'
          className='hero-image'
          alt='Me'
          variants={item}
          ref={imgRef}
        />
        <motion.p
          style={{ x: -xContactsButton, opacity }}
          className='hero-extra'
          variants={item}
        >
          "Фронтенд разработчик - мастер воплощения визуальных мечтаний в коде."
        </motion.p>
      </div>
      <motion.div style={{ opacity }} className='background-slider'>
        Frontend Backend Design Pretty Frontend Backend Design Pretty&nbsp;
      </motion.div>
    </motion.section>
  );
};
