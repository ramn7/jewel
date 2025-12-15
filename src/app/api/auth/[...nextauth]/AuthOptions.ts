import GoogleProvider from "next-auth/providers/google";
import { AuthOptions } from "next-auth";
import { LogError } from "@/server/utils/logger";

export enum AuthProvider {
  Google = "google",
}

export const authOptionsWithLogError = (logError: LogError): AuthOptions => ({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
  ],
  pages: {
    signIn: "/auth/signin",
    error: "/auth/error",
  },
  callbacks: {
    async signIn(args) {
      const { user } = args;

      if (user.email == null) {
        return false;
      }

      try {
        return true;
        //   await initServer();
        //   const waitlistUser = await getOrCreateWaitlistUser(user.email);
        //   if (waitlistUser.state === WaitlistState.LIVE) {
        //     return true;
        //   } else {
        //     const autoLoginInviteCode = await addOrIncrementInviteCode(
        //       INTERNAL_AUTO_LOGIN_INVITE_CODE
        //     );
        //     if (
        //       autoLoginInviteCode &&
        //       autoLoginInviteCode.allowed &&
        //       autoLoginInviteCode.registeredCount < autoLoginInviteCode.allowed
        //     ) {
        //       await setWaitlistUserLive(waitlistUser.id);
        //       await Analytics.userWaitlistAutoOpen(waitlistUser.id);
        //       return true;
        //     } else {
        //       await Analytics.userWaitlist(waitlistUser.id);
        //       return false;
        //     }
        //   }
      } catch (error: any) {
        const errorMessage = `Internal auth Error on signIn: ${
          error.message
        } ${JSON.stringify(error)}`;
        logError(errorMessage);
        throw new Error(errorMessage);
      }
    },
    async jwt(args) {
      let { user, token, account } = args;

      // Called for the first time after sign in
      if (account && user) {
        if (!account.provider || !account.providerAccountId) {
          const errorMessage = "No account info for user";
          logError(errorMessage);
          throw new Error(errorMessage);
        }
        if (
          !Object.values(AuthProvider).includes(
            account.provider as AuthProvider
          )
        ) {
          const errorMessage = `auth error, Illegal provider: ${account.provider}`;
          logError(errorMessage);
          throw new Error(errorMessage);
        }
        if (!user.email) {
          const errorMessage = "No email for user";
          logError(errorMessage);
          throw new Error(errorMessage);
        }

        // try {
        //   await initServer();

        //   let dbUser = await findUserByAuth(
        //     account.provider as AuthProvider,
        //     account.providerAccountId
        //   );
        //   if (dbUser == null) {
        //     dbUser = await createUser({
        //       auth: {
        //         provider: account.provider as AuthProvider,
        //         providerId: account.providerAccountId,
        //       },
        //       email: user.email,
        //       name: user.name ?? undefined,
        //       photoUrl: user.image ?? undefined,
        //       plan: DefaultPlan,
        //     });
        //     await Promise.all([
        //       Analytics.userCreation(dbUser.id),
        //       sendWelcomeEmail(dbUser.id, dbUser.email, logError),
        //     ]);
        //   }
        //   token = { userId: dbUser.id };
        // } catch (error: any) {
        //   const errorMessage = `Internal auth Error on jwt: ${
        //     error.message
        //   } ${JSON.stringify(error)}`;
        //   logError(errorMessage);
        //   throw new Error(errorMessage);
        // }
      }

      return token;
    },
    async session(args) {
      return { userId: args.token.userId, expires: args.session.expires };
    },
  },
});
