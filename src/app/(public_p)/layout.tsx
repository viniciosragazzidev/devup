"use server";
import { AvatarMenu } from "@/components/features/AvatarMenu";
import Button from "@/components/ui/button";
import { getUser } from "@/lib/api/user";
import Icon from "@/public/icon.svg";
import { BellDot } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import NavLinks from "./components/navlinks";
export default async function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const user = await getUser();

  return (
    <main>
      <header className="w-full h-14  relative block">
        <div className="w-full h-14 flex items-center justify-center border-b fixed z-50 bg-background/80 backdrop-blur-md border-zinc-800/30">
          <nav className="container w-full h-full flex items-center justify-between max-md:px-3">
            <Link href="/feed" className="flex items-center gap-1">
              <Image src={Icon} alt="Logo DevUp" width={20} />
              <h1 className="font-semibold font-inter text-lg">DevUp</h1>
            </Link>
            <NavLinks />

            <div className="flex items-center gap-4">
              <span className="cursor-pointer text-zinc-400">
                <BellDot className="w-5 h-5" />
              </span>
              {user ? (
                <AvatarMenu user={user} />
              ) : (
                <Link href="/signin">
                  <Button className=" text-xs text-primary" variant="secondary">
                    Entrar
                  </Button>
                </Link>
              )}
            </div>
          </nav>
        </div>
      </header>
      {children}
    </main>
  );
}
