import { useRouter } from "next/router";
import { useEffect } from "react";

type RedirectProps = {
  to: string;
};

export const Redirect = ({ to }:RedirectProps) => {
  const router = useRouter();
  useEffect(() => {
    router.push(to);
  }, [router, to]);

  return null;
};
