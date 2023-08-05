

import Form from "@/components/auth/form";
import { signIn } from "next-auth/react";
import { useRouter } from "next/router";
import Header from "../../components/header";

export default function SignIn() {
  const router = useRouter();

  const onSubmit = async (email, password) => {
    try {
      const data = await signIn("credentials", { redirect: false, email, password });

      
      data && router.push("/profile");
    } catch (err) {
      console.error("Login failed:", err);
    }
  };

  return (
    <div>
      <Header />
      <Form signin={true} onFormSubmit={onSubmit} />
    </div>
  );
}
