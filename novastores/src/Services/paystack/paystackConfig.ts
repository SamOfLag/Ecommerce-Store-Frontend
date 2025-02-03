import { PaystackConfig } from '../../Utils/interfaces.utils';


const generatePaystackConfig = (email: string, amountInNaira: number): PaystackConfig => {
  
  const amountInKobo = amountInNaira * 100;

  return {
    email,
    amount: amountInKobo,
    publicKey: '', // Ensure you add this to your .env file
    metadata: {
      custom_fields: [
        {
            display_name: "Customer Email",
            variable_name: "customer_email", // Add this line
            value: email,
        },
      ],
    },
  };
};

export default generatePaystackConfig;