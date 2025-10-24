"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */
import { redirect } from "next/dist/client/components/navigation";
import { useSelector } from "react-redux";

export default function AccountPage() {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  if (!currentUser) {
    redirect("/Account/Signin");
  } else {
    redirect("/Account/Profile");
  }
}
