"use client";

import { toast } from "sonner";

const LoginOut = ({ children }: { children: React.ReactNode }) => {
  const handleLogout = async () => {
    const res = await fetch("/api/logout", { method: "GET" });

    if (res.ok) {
      toast.success("Logout realizado com sucesso");
      window.location.href = "/signin";
    } else {
      console.error("Erro ao fazer logout");
    }
  };
  return (
    <div className="w-full" onClick={handleLogout}>
      {children}
    </div>
  );
};

export default LoginOut;
