import { BASE_URL } from "./config";
import { AboutUsProps } from "@/components/aboutUs";
import { RefundProps } from "@/components/paymentBackClient";
import { Contact } from "@/types";
import axios from "axios";

export const getContact = async (): Promise<Contact> => {
  const res = await fetch(`${BASE_URL}/contacts`, { next: { revalidate: 0 } });

  return res.json();
};

export const getAboutUs = async (): Promise<AboutUsProps> => {
  const res = await fetch(`${BASE_URL}/about`, { next: { revalidate: 0 } });

  return res.json();
};

export const getRefund = async (): Promise<RefundProps> => {
  const res = await fetch(`${BASE_URL}/refund`, { next: { revalidate: 0 } });

  return res.json();
};
