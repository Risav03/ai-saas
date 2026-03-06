import { redirect } from "next/navigation";
import { auth } from "@/lib/auth";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_LIVE_KEY!);

export default async function PurchasePage() {
  const session = await auth();

  if (!session?.user?.email) {
    redirect("/login?callbackUrl=/purchase");
  }

  const checkoutSession = await stripe.checkout.sessions.create({
    mode: "payment",
    line_items: [
      {
        price_data: {
          currency: "usd",
          product_data: {
            name: "Build a Company of AI Agents — Playbook",
            description: "66-page PDF guide. Instant download. Lifetime updates.",
          },
          unit_amount: 2900,
        },
        quantity: 1,
      },
    ],
    customer_email: session.user.email,
    metadata: {
      userEmail: session.user.email,
    },
    success_url: `${process.env.AUTH_URL}/purchase/success?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${process.env.AUTH_URL}`,
  });

  if (!checkoutSession.url) {
    throw new Error("Failed to create Stripe Checkout session");
  }

  redirect(checkoutSession.url);
}
