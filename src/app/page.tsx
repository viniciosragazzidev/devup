import Squares from "@/components/features/Squares";
import Button from "@/components/ui/button";
import Icon from "@/public/icon.svg";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex h-screen flex-col items-center justify-between">
      <div className="absolute w-screen h-screen top-0 left-0 ">
        <div className="relative w-screen h-screen">
          <Squares
            speed={0.5}
            squareSize={40}
            direction="diagonal" // up, down, left, right, diagonal
            borderColor="#18181B"
            hoverFillColor="#222"
          />
        </div>
      </div>

      <div className="container flex w-full h-full flex-col items-center justify-center text-center max-w-150 gap-3  ">
        <div className="flex items-center gap-2 z-50">
          <Image src={Icon} alt="Logo DevUp" width={68} />
          <h1 className="text-[80px] font-semibold font-inter">DevUp</h1>
        </div>

        <p className="mb-4 z-50">
          Compartilhe seus <span className="text-primary">projetos</span> com
          estilo, monte um perfil único e{" "}
          <span className="text-primary">conecte-se</span> com uma comunidade de
          devs e designers apaixonados.
        </p>
        <Link href="/feed" className="z-50">
          <Button>
            Começar <ArrowRight className="w-4 h-4" />
          </Button>
        </Link>
      </div>
    </main>
  );
}
