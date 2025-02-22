const ProfileFollowers = () => {
  return (
    <div className="flex  justify-end h-full items-center relative max-lg:-top-17  gap-10">
      <div className="flex flex-col gap-1">
        <span className="text-sm text-zinc-400">Projetos</span>
        <span className="text-4xl font-semibold">25</span>
      </div>
      <div className="flex flex-col gap-1">
        <span className="text-sm text-zinc-400">Seguindo</span>
        <span className="text-4xl font-semibold">100</span>
      </div>
      <div className="flex flex-col gap-1">
        <span className="text-sm text-zinc-400">Seguindo</span>
        <span className="text-4xl font-semibold">100</span>
      </div>
    </div>
  );
};

export default ProfileFollowers;
