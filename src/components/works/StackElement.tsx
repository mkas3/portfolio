type StackElementProps = {
  title: string;
};

export const StackElement = ({ title }: StackElementProps) => {
  return (
    <span className='stack-element' title={title}>
      <img src={`/works/stack/${title}.svg`} alt={title} />
    </span>
  );
};
