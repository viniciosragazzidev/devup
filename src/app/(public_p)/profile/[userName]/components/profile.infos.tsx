"use client";
import Button from "@/components/ui/button";
import { ProfileInterface } from "@/types/base";
import { AlertCircle, BadgeCheck, Edit, UserPlus } from "lucide-react";

const ProfileInfos = ({
  profile,
  isUser,
}: {
  profile: ProfileInterface;
  isUser: boolean;
}) => {
  return (
    <div className="flex flex-col pt-8 relative max-lg:-top-17 max-md:items-center">
      <h1 className="font-semibold text-2xl flex items-center text-center gap-2">
        {profile?.fullName} <BadgeCheck className="w-6 h-6 text-primary" />{" "}
      </h1>
      <span className="text-zinc-400">@{profile?.userName}</span>

      <p className="pt-2 text-zinc-400 text-sm max-w-lg max-md:text-center">
        {profile?.bio ? (
          profile?.bio
        ) : (
          <span className="sm cursor-pointer flex items-center gap-1">
            <AlertCircle className="w-4 h-4 text-zinc-400" />
            Adicionar biografia
          </span>
        )}
      </p>

      <div className="flex mt-3">
        {isUser ? (
          <Button variant="outline" className="w-min text-nowrap">
            <Edit className="w-4 h-4 mr-2" /> Editar perfil
          </Button>
        ) : (
          <Button variant="secondary" className="w-min text-nowrap">
            <UserPlus className="w-4 h-4 mr-2" /> Seguir
          </Button>
        )}
      </div>
    </div>
  );
};

export default ProfileInfos;
