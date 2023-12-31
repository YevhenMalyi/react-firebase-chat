import { useState } from 'react';
import { Button, ButtonType } from 'shared';


export const MessageField = () => {
  const [text, setText] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.stopPropagation();
    setText(event.target.value);
  };

  const send = (text: string) => {
    console.log(text)
  };

  return (
    <div className="flex w-full items-center justify-center gap-4">
      <input 
        className="p-2 w-[300px]"
        type="text" 
        onChange={ handleChange } value={ text } 
      />

      <Button type={ ButtonType.PRIMARY } action={ () => send(text) }>
        Send
      </Button>
    </div>
  );
};