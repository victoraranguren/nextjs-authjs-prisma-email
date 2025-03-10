"use client";

import { signOut } from "next-auth/react";
import { Button } from "./ui/button";

const LogoutButton = () => {
  const handleClick = async () => {
    await signOut({
      callbackUrl: "/",
    });
  };
  return <Button onClick={handleClick}>Logout</Button>;
};

export default LogoutButton;
