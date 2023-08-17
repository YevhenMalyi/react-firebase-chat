export enum ButtonType {
  PRIMARY = 'primary',
  OUTLINED = 'outlined',
}

interface IButtonProps {
  text: string;
  action: () => void;
  type: ButtonType
}

export const Button = ({ text, action, type }: IButtonProps) => {
  const className = {
    [ButtonType.PRIMARY]: ' bg-orange-500 text-white hover:bg-orange-700 hover:border-orange-700',
    [ButtonType.OUTLINED]: 'bg-white text-black hover:bg-orange-500 hover:text-white'
  };

  return (
    <button 
      className={ `border-orange-500 rounded border-2 p-2 transition duration-300 ${className[type]}` } 
      onClick={ () => action() }
    >
      { text }
    </button>
  );
};