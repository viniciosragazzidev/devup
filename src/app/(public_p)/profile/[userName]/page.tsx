"use server";

import { getProfileByUserName } from "@/lib/api/profile";
import { getUser } from "@/lib/api/user";
import { ProfileInterface, UserInterface } from "@/types/base";
import AvatarProfile from "./components/avatar";
import ProfileFollowers from "./components/profile.followers";
import ProfileInfos from "./components/profile.infos";
import ProjectsProfile from "./components/projects";

const ProfilePage = async ({
  params,
}: {
  params: Promise<{ userName: string }>;
}) => {
  const userName = (await params).userName;
  //
  const profile: ProfileInterface = await getProfileByUserName(userName);
  const user: UserInterface = await getUser();
  const isUser = user?.Profile?.userName === userName;

  return (
    <main className="w-screen h-full min-h-[calc(100vh-80px)] flex justify-center items-center">
      <div className="container w-full h-full min-h-[calc(100vh-80px)] ">
        <div className="banner w-full h-[200px] max-sm:h-[180px] bg-zinc-900 rounded-b-2xl"></div>
        <div className="profile relative px-8 flex gap-5 justify-between items-center max-lg:flex-col max-lg:justify-center max-lg:items-centermax-lg:flex-col  max-lg:items-center">
          <div className="flex flex-1 gap-5 max-lg:flex-col max-lg:justify-center max-lg:items-center max-lg:gap-1">
            <AvatarProfile profile={profile} />
            <ProfileInfos profile={profile} isUser={isUser} />
          </div>
          <ProfileFollowers />
        </div>

        <ProjectsProfile />
      </div>
    </main>
  );
};

export default ProfilePage;
