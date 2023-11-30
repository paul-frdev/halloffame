import { getRefund } from '@/actions/content';
import { PaymentBackClient } from "@/components/paymentBackClient";
import React from "react";

const PaymentBackPage = async () => {
  const getRefundBack = await getRefund()
  return <PaymentBackClient refund={getRefundBack} />;
};

export default PaymentBackPage;
