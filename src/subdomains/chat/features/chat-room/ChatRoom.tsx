import { collection, orderBy, query } from 'firebase/firestore';
import { useCollectionData } from 'react-firebase-hooks/firestore';

import { SignOut, auth, db } from 'core';
import { ChatMessage, IMessage, MessageField } from 'subdomains/chat';

export const ChatRoom = () => {
  const q = query(collection(db, 'messages'), orderBy('createdAt'));
  const [ snapshot, loading, error ] = useCollectionData(q);

  return (
    <div className="flex flex-col w-full h-screen">
      <div className="flex justify-between mx-8 my-4 items-center">
        <span className="text-lg font-bold">
          Hello, { auth.currentUser?.displayName || 'some unnamed person'}!
        </span>

        <SignOut />
      </div>

      <div className="flex flex-col-reverse justify-start h-[calc(100vh-44px)] mx-8 my-4 gap-2">
        <MessageField />
        { 
          snapshot 
            ? (snapshot as IMessage[]).map(msg => <ChatMessage key={ msg.id } message={ msg } />) 
            : null 
        }
      </div>

      <div></div>
    </div>
  );
};