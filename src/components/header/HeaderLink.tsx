import { motion, MotionProps, Variants } from 'framer-motion';
import { MouseEventHandler } from 'react';

const item: Variants = {
  initial: { y: 20, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
  },
};

type HeaderLinkProps = MotionProps & {
  variants?: Variants;
  href?: string;
  className?: string;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
};

export const HeaderLink = ({
  children,
  variants,
  ...otherProps
}: HeaderLinkProps) => {
  return (
    <motion.a variants={variants ?? item} {...otherProps}>
      {children}
    </motion.a>
  );
};
