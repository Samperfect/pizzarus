import { Keyable } from '../../utilities/interface';
declare global {
  namespace NodeJS {
    interface ProcessEnv {
      PORT: 7000;
      DATABASE_URL: 'mongodb+srv://veehuelabs:admin%40veehuelabs.com@veehue.eaigm.mongodb.net/pizzarus?retryWrites=true&w=majority';
      JWT_SECRET: 'thisisnotsosecretive';
    }
  }
}

export {};
