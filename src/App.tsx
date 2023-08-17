import { useAuthState } from 'react-firebase-hooks/auth';

import { auth } from 'core';
import { SignIn, SignOut } from 'subdomains/auth';
import { ChatRoom } from 'subdomains/chat';

const App = () => {
  const [ user ] = useAuthState(auth);

  return (
    <div>
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
