import { useAuthState } from 'react-firebase-hooks/auth';

import { auth, SignIn, SignOut } from 'core';
import { ChatRoom } from 'subdomains/chat';

const App = () => {
  const [ user ] = useAuthState(auth);

  return (
    <div className="h-screen bg-orange-200 flex justify-center items-center">
      <header>
        <SignOut />
      </header>

      <section>
        { user ? <ChatRoom /> : <SignIn /> }
      </section>
    </div>
  );
};

export default App;
