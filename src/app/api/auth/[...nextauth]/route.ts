import NextAuth from "next-auth";
import { authOptionsWithLogError } from "./AuthOptions";
import { AxiomRequest, withAxiom } from "next-axiom";

const handler = withAxiom(async (req: AxiomRequest, context) =>
  NextAuth(req, context, authOptionsWithLogError(req.log.error))
);

export { handler as GET, handler as POST };
