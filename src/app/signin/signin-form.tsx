"use client";

import Button from "@/components/ui/button";
import Input from "@/components/ui/input";
import { ArrowRight, AtSign, Loader, RectangleEllipsis } from "lucide-react";
import { z } from "zod";

import { useForm } from "react-hook-form";

import { loginUser } from "@/lib/api/user";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

const formSchema = z.object({
  email: z.string().email(),

  password: z.string().min(6).max(12),
});

type FormData = z.infer<typeof formSchema>;

const SigninForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const router = useRouter();
  const mutation = useMutation({
    mutationFn: loginUser,
    onSuccess: (data) => {
      toast.success(data?.message);

      router.push("/feed");
    },
    onError: (error) => {
      const err = JSON.parse(error.message);

      toast.error(
        err.code === 401 ? "E-mail ou senha inválidos" : err.message,
        {
          description: "Verifique seus dados e tente novamente",
        }
      );
    },
  });
  const handleFormSubmit = (data: FormData) => {
    mutation.mutate(data);
  };
  return (
    <form
      onSubmit={handleSubmit((data) => handleFormSubmit(data))}
      className="flex flex-col gap-3 mt-5"
    >
      <Input
        {...register("email")}
        placeholder="E-mail"
        className={`${errors.email ? "border-red-500" : ""}`}
      >
        <AtSign className="w-4 h-4" />
      </Input>

      <Input
        {...register("password")}
        type="password"
        placeholder="***********"
        className={`${errors.password ? "border-red-500" : ""}`}
      >
        <RectangleEllipsis className="w-4 h-4" />
      </Input>
      <Button className="w-full">
        {mutation.isPending ? (
          <Loader className="w-4 h-4 animate-spin" />
        ) : (
          <>
            Entrar <ArrowRight className="w-4 h-4" />
          </>
        )}
      </Button>
    </form>
  );
};

export default SigninForm;
