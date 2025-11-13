/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import * as client from "./client";
import { setCurrentUser } from "./reducer";
export default function Session({ children }: { children: any }) {
  const [pending, setPending] = useState(true);
  const dispatch = useDispatch();
  const fetchProfile = async () => {
    try {
      const currentUser = await client.profile();
      dispatch(setCurrentUser(currentUser));
    } catch (err: any) {
      console.error(err);
    }
    setPending(false);
  };
  useEffect(() => {
    fetchProfile();
  }, []);
  if (!pending) {
    return children;
  }
}
