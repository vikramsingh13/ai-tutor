'use client';

import { useRouter, redirect } from "next/navigation";
import { Button } from "@/components/ui/button";

export default function Home() {
  // Initialize the router.
  const router = useRouter();
  return (
    <div className="">
      { /* Redirect to /learning-section/test-user for now */ }
      { router.push('/learning-section/test-user') }
    </div>
  );
}
