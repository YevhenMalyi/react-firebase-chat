import { twMerge } from 'tailwind-merge';

export enum ButtonType {
  PRIMARY = 'primary',
  OUTLINED = 'outlined',
}

interface IButtonProps {
  children: JSX.Element | string;
  action: () => void;
  type: ButtonType;
  disabled?: boolean;
}

export const Button = ({ 
  children, action, type, disabled = false 
}: IButtonProps) => {
  const className = {
    [ButtonType.PRIMARY]: 'border-primary-500  bg-primary-500 text-white enabled:hover:bg-primary-700 enabled:hover:border-primary-700',
    [ButtonType.OUTLINED]: 'border-primary-500  bg-white text-black enabled:hover:bg-primary-500 enabled:hover:text-white',
    disabled: {
      [ButtonType.PRIMARY]: 'cursor-not-allowed border-primary-300 bg-primary-300 text-white hover:none',
      [ButtonType.OUTLINED]: 'cursor-not-allowed border-primary-300 text-gray-400',
    },
  };

  return (
    <button 
      disabled={ disabled }
      className={ twMerge(
        'group rounded border-2 py-2 px-4 transition duration-300 relative',
        className[type],
        disabled && className.disabled[type],
      ) }
      onClick={ () => !disabled && action() }
    >
      { children }
    </button>
  );
};