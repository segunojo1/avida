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

        <CardFooter>
          <SignIn />
        </CardFooter>
      </Card>
    </div>
  );
};

export default Auth;
