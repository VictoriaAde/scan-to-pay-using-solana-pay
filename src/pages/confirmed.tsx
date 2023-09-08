import Confirmed from "@/components/Confirmed";
import BackLink from ".././components/BackLink";

interface PaymentSuccessProps {
  // You can pass any additional data or props you need here
}

const PaymentSuccess: React.FC<PaymentSuccessProps> = () => {
  return (
    <div className="flex flex-col gap-4 items-center mt-28">
      <BackLink href="/">Next order</BackLink>

      {/* <PageHeading>Thankyou, enjoy your cookies!</PageHeading> */}

      <div className="bg-inherit text-center p-8 rounded-lg shadow-md border  border-[#232323]">
        <h2 className="text-2xl font-bold text-[#50EA95]  mb-4">
          Payment Successful
        </h2>
        <p className="text-base text-white  mb-8">
          Thank you, enjoy your chocolates 🍫
        </p>
        <Confirmed />
        {/* You can add more information or links as needed */}
      </div>
    </div>
  );
};

export default PaymentSuccess;
