// This will never be executed in production, becuase of nginx
"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();

  useEffect(() => {
    router.replace("/recipes");
  }, [router]);

  return null;
}
