import Image from "next/image";
import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div style={{textAlign: "center" }}>
       <p>Please log in to continue</p>
      <h1>
        <Link href={"./auth/login"} style={{ fontSize: "30px" }}> Login Page</Link>
      </h1>
    </div>
  );
}
