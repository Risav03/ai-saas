import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";
import { connectDB } from "@/lib/db";
import User from "@/models/User";

const stripe = new Stripe(process.env.STRIPE_LIVE_KEY!);

export async function POST(req: NextRequest) {
  const body = await req.text();
  const signature = req.headers.get("stripe-signature");

  if (!signature) {
    return NextResponse.json({ error: "Missing signature" }, { status: 400 });
  }

  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(
      body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET!
    );
  } catch {
    return NextResponse.json(
      { error: "Invalid signature" },
      { status: 400 }
    );
  }

  if (event.type === "checkout.session.completed") {
    const session = event.data.object as Stripe.Checkout.Session;
    const email = session.metadata?.userEmail || session.customer_email;

    if (email) {
      await connectDB();

      const update: Record<string, unknown> = {
        hasPurchasedBook: true,
        bookPurchasedAt: new Date(),
        stripeCheckoutSessionId: session.id,
      };

      if (session.customer) {
        update.stripeCustomerId = session.customer as string;
      }

      if (session.payment_intent) {
        update.stripePaymentIntentId = session.payment_intent as string;
      }

      await User.updateOne({ email }, update);
    }
  }

  return NextResponse.json({ received: true });
}
