import { collection, query } from 'firebase/firestore';
import { useCollectionData } from 'react-firebase-hooks/firestore';

import { db } from 'core';
import { ChatMessage, IMessage } from 'subdomains/chat';

export const ChatRoom = () => {
  const q = query(collection(db, 'messages'));
  const [ snapshot, loading, error ] = useCollectionData(q);
  console.log(snapshot, loading, error);
  return (
    <div>
      { 
        snapshot 
          ? (snapshot as IMessage[]).map(msg => <ChatMessage key={ msg.id } message={ msg } />) 
          : null 
      }
    </div>
  );
};