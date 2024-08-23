import Image from "next/image";
import { Sidemenu } from "@/components/side-menu";
import EmployerLayout from "@/layouts/EmployerLayout";

export default function Home() {
  return (
    <EmployerLayout>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <h1 className="text-4xl font-bold text-center">
          Welcome to Astroexture
        </h1>
      </main>
    </EmployerLayout>
  );
}
