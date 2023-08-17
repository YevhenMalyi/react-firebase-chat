import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from 'core';

export const SignIn = () => {
  const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider);
  };

  return (
    <button onClick={signInWithGoogle}>Sign In with Google</button>
  );
};