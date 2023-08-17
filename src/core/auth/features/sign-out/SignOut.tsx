import { auth } from 'core';

export const SignOut = () => {
  return auth.currentUser && (
    <button onClick={ () => auth.signOut() }>Sign Out</button>
  );
};