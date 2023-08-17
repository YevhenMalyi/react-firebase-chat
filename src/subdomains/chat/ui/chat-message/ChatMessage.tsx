import { IMessage } from 'subdomains/chat';

interface IChatMessageProps {
  message: IMessage;
}

export const ChatMessage = ({ message }: IChatMessageProps) => {
  const { text } = message;
  return (
    <p>{ text }</p>
  );
};