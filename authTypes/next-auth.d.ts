/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-interface */
import NextAuth from 'next-auth';
import OSAPUser from '@appTypes/user';
import { JWT } from 'next-auth/jwt';

declare module 'next-auth' {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  export interface Session {
    user?: OSAPUser;
  }
  export interface CallbacksOptions<
    P extends Record<string, unknown> = Profile,
    A extends Record<string, unknown> = Account
  > {
    /**
     * This callback is called whenever a JSON Web Token is created (i.e. at sign in)
     * or updated (i.e whenever a session is accessed in the client).
     * Its content is forwarded to the `session` callback,
     * where you can control what should be returned to the client.
     * Anything else will be kept from your front-end.
     *
     * ⚠ By default the JWT is signed, but not encrypted.
     *
     * [Documentation](https://next-auth.js.org/configuration/callbacks#jwt-callback) |
     * [`session` callback](https://next-auth.js.org/configuration/callbacks#session-callback)
     */
    jwt: (params: { token: JWT; user?: OSAPUser; account?: A; profile?: P; isNewUser?: boolean }) => Awaitable<JWT>;
  }
}

declare module 'next-auth/jwt' {
  /** Returned by the `jwt` callback and `getToken`, when using JWT sessions */
  export interface JWT {
    user: OSAPUser;
  }
}

declare module 'next-auth/core/types' {
  interface User {
    role: UserRoles;
    name: string;
    message: string;
    agentId: string;
    dni: string;
  }
}
