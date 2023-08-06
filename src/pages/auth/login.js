


import Form from "@/components/auth/form";
import { signIn } from "next-auth/react";
import { useRouter } from "next/router";
import Header from "../../components/header";
import { useSession, signOut } from "next-auth/react";

export default function SignIn() {
  const { data: session } = useSession();

  const onSubmit = async (email, password) => {
    try {
      const data = await signIn("credentials", { redirect: false, email, password });

      data && router.push("/profile");
    } catch (err) {
      console.error("Login failed:", err);
    }
  };

  if (session) {
   
    return (
      <div>
        <Header />
       <h1> Signed in as {session.user.email} <br /></h1>
        <button onClick={() => signOut()}>Sign out</button>
      </div>
    );
  } else {
    
    return (
      <div>
        <Header />
        <Form signin={true} onFormSubmit={onSubmit} />
      </div>
    );
  }
}