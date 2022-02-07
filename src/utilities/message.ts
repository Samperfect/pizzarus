import { Keyable } from './interface';

class Message {
  messages: Keyable;

  constructor() {
    this.messages = {
      UNKNOWN_ERROR: 'An unknown error occurred',
      REGISTER_SUCCESS: 'Successfully registered user',
      REGISTER_FAILED: 'Error occured while registering user',
      TOKEN_ERROR: 'User token is required',
      INVALID_TOKEN: 'Invalid user token provided',
      EMAIL_DUPLICATE: 'Email already exists',
      USER_NOT_FOUND: 'User not found',
      INVALID_CREDENTIALS: 'Invalid sign in credentials',
      LOGIN_SUCCESS: 'Successfully logged in',
      UPDATE_SUCCESS: 'Successfully updated user',
      USER_QUERY_SUCCESS: 'Successfully queried user',
      USER_DELETE_SUCCESS: 'Successfully deleted user',
    };
  }

  getMessage(key: string): string {
    return this.messages[key];
  }
}

export default new Message();
