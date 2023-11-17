import './works.scss';
import works from '../../data/works.json';
import { Work } from './Work.tsx';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { useRef } from 'react';

export const Works = () => {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['50vh', '250vh'],
  });

  const scaleXSpring = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  const scaleX = useTransform(scaleXSpring, [0, 1], ['100%', '0%']);

  return (
    <div id='works' className='works' ref={ref}>
      <div className='progress'>
        <h1 className='progress-title'>
          Проекты
          <motion.span style={{ scaleX }} className='progress-bar' />
        </h1>
      </div>
      {works.map((work, index) => (
        <Work key={index} work={work} isLastWork={index === works.length - 1} />
      ))}
    </div>
  );
};
