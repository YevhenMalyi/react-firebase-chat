import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from 'core';
import { Button, ButtonType, Card } from 'shared';

export const SignIn = () => {
  const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider);
  };

  return (
    <Card className='flex flex-col gap-4'>
      <>
        <Button 
          type={ ButtonType.PRIMARY } 
          action={ signInWithGoogle }
        >
          Sign In with Google
        </Button>
      </>
    </Card>
  );
};