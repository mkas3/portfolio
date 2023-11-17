import {
  motion,
  MotionProps,
  MotionValue,
  useTransform,
  Variants,
} from 'framer-motion';
import { useEffect, useState } from 'react';
import './burger.scss';
import { HeaderLink } from '../HeaderLink.tsx';

const background: Variants = {
  closed: {
    clipPath: 'circle(0 at 100% 0)',
    transition: {
      delay: 0.5,
    },
  },
  opened: {
    clipPath: 'circle(150% at 100% 0)',
    transition: {
      delay: 0.5,
      type: 'spring',
      stiffness: 400,
      damping: 40,
      delayChildren: 0.5,
      staggerChildren: 0.2,
    },
  },
};

const item: Variants = {
  closed: {
    y: 0,
    opacity: 0,
  },
  opened: {
    y: 20,
    opacity: 1,
  },
};

type BurgerProps = MotionProps & {
  isLaptop: boolean;
  scroll?: MotionValue<number>;
};

export const Burger = ({ isLaptop, scroll, ...otherProps }: BurgerProps) => {
  const [open, setOpen] = useState(false);
  const xButton = useTransform(
    scroll ?? new MotionValue<number>(),
    [0, 1],
    [isLaptop ? '500%' : '0%', '0%'],
  );

  const [isHero, setIsHero] = useState(false);

  useEffect(() => {
    scroll?.on('change', (value) => setIsHero(value === 0));
  });

  useEffect(() => {
    if (open && isHero && isLaptop) setOpen(false);
  }, [isHero, open, isLaptop]);

  return (
    <motion.div className='burger-wrapper' animate={open ? 'opened' : 'closed'}>
      <motion.div className='background' variants={background}>
        <HeaderLink href='#hero' variants={item} onClick={() => setOpen(false)}>
          Главная
        </HeaderLink>
        <HeaderLink
          href='#about'
          variants={item}
          onClick={() => setOpen(false)}
        >
          Обо мне
        </HeaderLink>
        <HeaderLink
          href='#works'
          variants={item}
          onClick={() => setOpen(false)}
        >
          Проекты
        </HeaderLink>
        <HeaderLink
          href='#contacts'
          variants={item}
          onClick={() => setOpen(false)}
        >
          Контакты
        </HeaderLink>
      </motion.div>
      <motion.button
        style={{ x: xButton }}
        className='burger'
        onClick={() => setOpen(!open)}
        type='button'
        {...otherProps}
      >
        <svg viewBox='0 0 24 24'>
          <motion.path
            stroke='#18181B'
            stroke-width='2'
            stroke-linecap='round'
            variants={{
              closed: { d: 'M4 18L20 18' },
              opened: { d: 'M4 20L20 4' },
            }}
          />
          <motion.path
            stroke='#18181B'
            stroke-width='2'
            stroke-linecap='round'
            variants={{
              closed: { d: 'M4 12L20 12' },
              opened: { d: 'M4 4L20 20' },
            }}
          />
          <motion.path
            stroke='#18181B'
            stroke-width='2'
            stroke-linecap='round'
            variants={{
              closed: { d: 'M4 6L20 6' },
              opened: { d: 'M4 4L20 20' },
            }}
          />
        </svg>
      </motion.button>
    </motion.div>
  );
};
