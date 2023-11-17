import { motion, MotionValue, useTransform, Variants } from 'framer-motion';
import './header.scss';
import { HeaderLink } from './HeaderLink.tsx';
import { Burger } from './burger/Burger.tsx';
import { useMediaQuery } from '../../hooks/mediaQuery.hook.ts';

const container: Variants = {
  initial: { y: 15 },
  animate: {
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 300,
      damping: 20,
      delay: 1,
      delayChildren: 0.2,
      staggerChildren: 0.2,
    },
  },
};

type HeaderProps = {
  scroll?: MotionValue<number>;
};

export const Header = ({ scroll }: HeaderProps) => {
  const isLaptop = useMediaQuery('(min-width: 800px)');

  const xHeader = useTransform(
    scroll ?? new MotionValue<number>(),
    [0, 1],
    [isLaptop ? '0%' : '175%', '175%'],
  );

  return (
    <motion.div
      className='header'
      variants={container}
      initial='initial'
      animate='animate'
    >
      <div className='wrapper'>
        <HeaderLink href='/' className='logo'>
          MKas
        </HeaderLink>
        <motion.div style={{ x: xHeader }} className='navigation'>
          <HeaderLink href='#hero'>Главная</HeaderLink>
          <HeaderLink href='#about'>Обо мне</HeaderLink>
          <HeaderLink href='#works'>Проекты</HeaderLink>
          <HeaderLink href='#contacts'>Контакты</HeaderLink>
        </motion.div>
        <Burger isLaptop={isLaptop} scroll={scroll} />
      </div>
    </motion.div>
  );
};
