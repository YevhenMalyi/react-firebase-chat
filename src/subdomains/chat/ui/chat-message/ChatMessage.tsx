import { IMessage } from 'subdomains/chat';

import { auth } from 'core';

interface IChatMessageProps {
  message: IMessage;
}

export const ChatMessage = ({ message }: IChatMessageProps) => {
  const { text, userName, userId } = message;
  const className = 'flex-row-reverse';
  return (
    <div className={ `flex w-full ${ auth.currentUser?.uid === userId ? className : '' } `}>
      <div className="flex justify-center items-center w-10 h-10 rounded-full bg-primary-700 text-white">{ userName[0] }</div>
      <p className="px-4 py-2 bg-white rounded-md mx-2">{ text }</p>
    </div>
  );
};