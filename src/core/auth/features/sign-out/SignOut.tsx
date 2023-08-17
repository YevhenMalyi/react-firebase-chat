import { auth } from 'core';
import { Button, ButtonType } from 'shared';

export const SignOut = () => {
  return (
    <Button type={ ButtonType.OUTLINED } action={ () => auth.signOut() }>
      Sign Out
    </Button>
  );
};