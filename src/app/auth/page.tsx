import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import React from "react";
import { signIn } from "../../../auth";
import SignIn from "@/components/sign-in";
import Link from "next/link";

const Auth = () => {
  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-130px)] inter-font">
      <Card className={`w-[400px] h-[250px] flex justify-between`}>
        <CardHeader className="text-ce">
          <CardTitle>Welcome to Avida</CardTitle>
          <CardDescription className="mt-3">
            Sign in or create an account with Google to get started
          </CardDescription>
        </CardHeader>
        {/* <CardContent>
            <p>hi</p>
        </CardContent> */}

        <CardFooter className="flex flex-col items-center gap-2">
          <SignIn />
          <p>OR</p>
          <Link href="/wall" className="min-w-full flex items-center justify-center font-semibold px-8 py-2 rounded-md bg-black text-white">Sign in as guest</Link>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Auth;
