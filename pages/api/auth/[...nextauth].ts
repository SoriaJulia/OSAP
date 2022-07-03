/* eslint-disable no-param-reassign */
import { AuthUserRoles } from 'types/enums';
import OSAPUser from '@appTypes/user';
import { JWT_SECRET_KEY, SERVER_ERROR } from '@lib/constants';
import { getAfiliado } from '@services/user';
import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { GCROSSService } from '@services/gcross';

export type Credentials = { username: string; password: string; role: AuthUserRoles };

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        username: { label: 'Username', type: 'text' },
        password: { label: 'Password', type: 'password' },
        role: { label: 'role', type: 'text' },
      },
      async authorize(credentials): Promise<OSAPUser | null> {
        if (!credentials) {
          return null;
        }

        const loginResult = await GCROSSService.login(credentials as Credentials);

        if (loginResult.message) {
          throw new Error(loginResult.message);
        }

        return loginResult.data;
      },
    }),
  ],
  secret: JWT_SECRET_KEY,
  callbacks: {
    async session({ session, token }) {
      // eslint-disable-next-line no-param-reassign
      session.user = token.user;
      return session;
    },
    async jwt({ user, token }) {
      if (user) {
        // TODO - try to fix this. user coming from jwt callback params should be of type OSAPUser.
        // the type has been extended but for some reason TS still looks for type on next-auth type declarations
        token.user = user as unknown as OSAPUser;
      }
      return token;
    },
  },
  session: {
    // Set to jwt in order to CredentialsProvider works properly
    strategy: 'jwt',
  },
  pages: {
    signIn: '/',
    signOut: '/',
    error: '/', // Error code passed in query string as ?error=
  },
});
