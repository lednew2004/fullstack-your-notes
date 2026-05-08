"use client";

import { useStripe } from "../hooks/use-stripe";

export default function Portalbutton() {
  const { handleCreateStripePortal } = useStripe();

  return (
    <button
      className="cursor-pointer text-zinc-50"
      onClick={handleCreateStripePortal}
    >
      Portal
    </button>
  );
}
