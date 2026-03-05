import mongoose, { Schema, models, model } from "mongoose";

export interface IUser {
  name: string;
  email: string;
  image?: string;
  plan: "free" | "pro" | "enterprise";
  planExpiresAt?: Date;
  hasPurchasedBook: boolean;
  bookPurchasedAt?: Date;
  stripeCustomerId?: string;
  stripeSubscriptionId?: string;
  createdAt: Date;
  updatedAt: Date;
}

const UserSchema = new Schema<IUser>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    image: { type: String },
    plan: {
      type: String,
      enum: ["free", "pro", "enterprise"],
      default: "free",
    },
    planExpiresAt: { type: Date },
    hasPurchasedBook: { type: Boolean, default: false },
    bookPurchasedAt: { type: Date },
    stripeCustomerId: { type: String, sparse: true },
    stripeSubscriptionId: { type: String },
  },
  { timestamps: true }
);

const User = models.User || model<IUser>("User", UserSchema);

export default User as mongoose.Model<IUser>;
