import { ProfileInterface } from "@/types/base";
import { Camera } from "lucide-react";
import Image from "next/image";

const AvatarProfile = ({ profile }: { profile: ProfileInterface }) => {
  return (
    <div className="avatar w-56 h-56 z-40 bg-zinc-950 border flex justify-center items-center  rounded-4xl mr-4 relative -top-18">
      {profile?.avatarUrl ? (
        <Image
          src={profile?.avatarUrl}
          alt="Avatar"
          className="w-full h-full object-cover rounded-full"
        />
      ) : (
        <span>
          <Camera className="w-20 h-20 text-zinc-600" />
        </span>
      )}
    </div>
  );
};

export default AvatarProfile;
