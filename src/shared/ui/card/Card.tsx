interface ICardProps {
  children: JSX.Element;
  className?: string;
}

export const Card = ({ children, className = '' }: ICardProps) => {
  return (
    <section className={`bg-white rounded-2xl p-4 shadow-lg ${ className }`}>
      { children }
    </section>
  );
};