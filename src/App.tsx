import { useAuthState } from 'react-firebase-hooks/auth';

import { auth, SignIn } from 'core';
import { ChatRoom } from 'subdomains/chat';

const App = () => {
  const [ user ] = useAuthState(auth);

  return (
    <div className="h-screen bg-primary-200 flex justify-center items-center">
      { user ? <ChatRoom /> : <SignIn /> }
    </div>
  );
};

export default App;
