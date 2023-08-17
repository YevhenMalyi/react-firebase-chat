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
    [ButtonType.PRIMARY]: 'border-orange-500 rounded border-2 p-2 bg-orange-500 text-white hover:bg-orange-400',
    [ButtonType.OUTLINED]: 'border-orange-500 rounded border-2 p-2 bg-white text-black hover:bg-orange-500 hover:text-white'
  };

  return (
    <button className={ className[type] } onClick={ () => action() }>
      { text }
    </button>
  );
};