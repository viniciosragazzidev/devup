"use client";
import Button from "@/components/ui/button";
import Icon from "@/public/icon.svg";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import SignupForm from "./signup-form";
const Signup = () => {
  const route = useRouter();

  return (
    <main className="w-full min-h-screen">
      <div className="section w-full h-screen flex">
        <section className="w-full h-full flex flex-col justify-center gap-14 items-center max-w-lg bg-zinc-800/28 max-md:hidden px-2">
          <div className="flex flex-col justify-center items-center max-w-[330px] gap-3 ">
            <h1 className="text-4xl/11 ">
              Compartilhe seus projetos da melhor forma.
            </h1>

            <p className="text-sm/5">
              Compartilhe seus projetos com estilo, monte um perfil único e
              conecte-se com uma comunidade de devs e designers apaixonados.
            </p>
          </div>
          <Button
            onClick={() => route.push("/signin")}
            variant="secondary"
            className="w-full max-w-sm"
          >
            Fazer Login <ArrowRight className="w-4 h-4" />
          </Button>
        </section>
        <section className="w-full h-full flex justify-center items-center">
          <div className="flex flex-col w-full max-w-[343px]">
            <Image src={Icon} alt="Logo DevUp" width={54} />

            <div className="flex flex-col mt-3">
              <header className="flex flex-col gap-3">
                <h1 className="text-3xl font-medium">Entre na sua conta</h1>
                <p className="text-zinc-400 text-sm">
                  Informe abaixo suas informações de acesso para continuar
                </p>
              </header>

              <SignupForm />
              <p className="text-xs text-zinc-500 mt-6">
                Ao criar a sua conta, você está concordando com todos os nossos
                <span className=" cursor-pointer font-semibold">
                  {" "}
                  Termos de Uso e Políticas de Privacidade
                </span>
                .
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Signup;
