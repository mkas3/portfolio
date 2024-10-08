import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { StackElement } from './StackElement.tsx';

export interface IWork {
  title: string;
  description: string;
  image: string;
  href: string;
  github: string;
  stack: string[];
}

type WorkProps = {
  work: IWork;
  isLastWork?: boolean;
};

export const Work = ({ work, isLastWork = false }: WorkProps) => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['center start', 'center end'],
  });
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [isLastWork ? '1' : '0', '1', '0'],
  );
  const xTitle = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [isLastWork ? '0%' : '50%', '0%', '50%'],
  );
  const xDescription = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [isLastWork ? '0%' : '150%', '0%', '150%'],
  );
  const revX = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [isLastWork ? '0%' : '-50%', '0%', '-50%'],
  );
  const x = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [isLastWork ? '0%' : '200%', '0%', '200%'],
  );

  return (
    <section className='work' ref={ref}>
      <motion.div style={{ x: revX, opacity }} className='left-side'>
        <img src={work.image} alt={work.title} className='image' />
      </motion.div>
      <motion.div style={{ opacity }} className='right-side'>
        <motion.h1 style={{ x: xTitle }} className='title'>
          {work.title}
        </motion.h1>
        <motion.p style={{ x: xDescription }} className='description'>
          {work.description}
        </motion.p>
        <motion.div style={{ x }} className='stack'>
          {work.stack.map((el, index) => (
            <StackElement key={index} title={el} />
          ))}
        </motion.div>
        <motion.div style={{ x }} className='buttons'>
          <a href={work.href} className='btn'>
            Демо
          </a>
          <a href={work.github} className='btn alt'>
            Github
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};
