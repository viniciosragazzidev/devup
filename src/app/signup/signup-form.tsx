"use client";

import Button from "@/components/ui/button";
import Input from "@/components/ui/input";
import {
  ArrowRight,
  AtSign,
  Loader,
  RectangleEllipsis,
  Tag,
  UserPlus,
} from "lucide-react";
import { z } from "zod";

import { useForm } from "react-hook-form";

import { registerUser } from "@/lib/api/user";
import { UserCreateType } from "@/types/created";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

const formSchema = z.object({
  email: z.string().email(),
  name: z.string(),
  lastName: z.string(),
  userName: z.string(),
  password: z.string().min(6).max(12),
});

type FormData = z.infer<typeof formSchema>;

const SignupForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });
  const router = useRouter();
  const mutation = useMutation({
    mutationFn: registerUser,
    onSuccess: () => {
      // Invalidate and refetch
      // queryClient.invalidateQueries({ queryKey: ["todos"] });
      router.push("/signin");
    },
    onError: (error) => {
      console.log(error);
    },
  });
  const handleFormSubmit = (data: FormData) => {
    const userCreated: UserCreateType = {
      email: data.email,
      password: data.password,
      Profile: {
        fullName: `${data.name} ${data.lastName}`,
        userName: data.userName,
      },
    };

    // console.log(userCreated);

    mutation.mutate(userCreated);
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
      <div className="flex gap-2.5">
        <Input
          {...register("name")}
          placeholder="Nome"
          className={`${errors.name ? "border-red-500" : ""}`}
        >
          <UserPlus className="w-4 h-4" />
        </Input>
        <Input
          {...register("lastName")}
          placeholder="Sobrenome"
          className={`${errors.lastName ? "border-red-500" : ""}`}
        >
          <UserPlus className="w-4 h-4" />
        </Input>
      </div>
      <Input
        {...register("userName")}
        placeholder="Username"
        className={`${errors.userName ? "border-red-500" : ""}`}
      >
        <Tag className="w-4 h-4" />
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
            Criar conta
            <ArrowRight className="w-4 h-4" />
          </>
        )}
      </Button>
    </form>
  );
};

export default SignupForm;
