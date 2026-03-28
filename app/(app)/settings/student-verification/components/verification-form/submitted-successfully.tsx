import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import Link from "next/link";

export default function SubmittedSuccessfully() {
  return (
    <section className="grid grow place-items-center content-center text-center [&>h1]:max-w-[20ch]">
      <CheckCircle
        className="text-primary size-20"
        strokeWidth={1.8}
        aria-hidden="true"
      />
      <h1 className="mt-6 text-2xl font-bold tracking-tight sm:text-3xl">
        Request Submitted Successfully
      </h1>

      <p className="mt-3 max-w-md text-sm leading-relaxed sm:text-base">
        Your student verification request is now pending review. We will notify
        you once admins approves it.
      </p>

      <Button asChild className="mt-6">
        <Link href="/" className="">
          Return to Homepage
        </Link>
      </Button>
    </section>
  );
}
