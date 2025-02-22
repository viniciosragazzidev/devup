import { Eye, Heart } from "lucide-react";

const ProjectsProfile = () => {
  return (
    <div className="projects w-full pt-10 overflow-hidden p-4">
      <ul className="flex gap-6 items-center  text-sm">
        <li className="cursor-pointer  font-semibold ">Todos</li>
        <li className="cursor-pointer   ">Frontend</li>
      </ul>
      <div className="flex w-full justify-center pt-10">
        <div className="w-full  grid grid-cols-4 max-xl:grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1 max-sm:justify-items-center gap-4 pb-4 mb-10">
          <div className="flex flex-col gap-2 w-72">
            <div className="w-72 h-52 block bg-zinc-900 rounded-2xl"></div>
            <div className="flex  justify-between items-center ">
              <span className="text-zinc-200 text-sm">Projeto Mentiroso</span>

              <div className="flex gap-2">
                <div className="flex text-xs items-center gap-1 border rounded-xl px-2 py-1">
                  <Heart className="w-3 h-3 text-zinc-300" />
                  <span className="text-zinc-300 ">22</span>
                </div>
                <div className="flex text-xs items-center gap-1 border rounded-xl px-2 py-1">
                  <Eye className="w-3 h-3 text-zinc-300" />
                  <span className="text-zinc-300 ">33</span>
                </div>
              </div>
            </div>
            <div className="flex tags items-center gap-1">
              <span className="text-zinc-300 text-xs">
                Frontend, React, Next
              </span>
            </div>
          </div>
          <div className="flex flex-col gap-2 w-72">
            <div className="w-72 h-52 block bg-zinc-900 rounded-2xl"></div>
            <div className="flex  justify-between items-center ">
              <span className="text-zinc-200 text-sm">Projeto Mentiroso</span>

              <div className="flex gap-2">
                <div className="flex text-xs items-center gap-1 border rounded-xl px-2 py-1">
                  <Heart className="w-3 h-3 text-zinc-300" />
                  <span className="text-zinc-300 ">22</span>
                </div>
                <div className="flex text-xs items-center gap-1 border rounded-xl px-2 py-1">
                  <Eye className="w-3 h-3 text-zinc-300" />
                  <span className="text-zinc-300 ">33</span>
                </div>
              </div>
            </div>
            <div className="flex tags items-center gap-1">
              <span className="text-zinc-300 text-xs">
                Frontend, React, Next
              </span>
            </div>
          </div>
          <div className="flex flex-col gap-2 w-72">
            <div className="w-72 h-52 block bg-zinc-900 rounded-2xl"></div>
            <div className="flex  justify-between items-center ">
              <span className="text-zinc-200 text-sm">Projeto Mentiroso</span>

              <div className="flex gap-2">
                <div className="flex text-xs items-center gap-1 border rounded-xl px-2 py-1">
                  <Heart className="w-3 h-3 text-zinc-300" />
                  <span className="text-zinc-300 ">22</span>
                </div>
                <div className="flex text-xs items-center gap-1 border rounded-xl px-2 py-1">
                  <Eye className="w-3 h-3 text-zinc-300" />
                  <span className="text-zinc-300 ">33</span>
                </div>
              </div>
            </div>
            <div className="flex tags items-center gap-1">
              <span className="text-zinc-300 text-xs">
                Frontend, React, Next
              </span>
            </div>
          </div>
          <div className="flex flex-col gap-2 w-72">
            <div className="w-72 h-52 block bg-zinc-900 rounded-2xl"></div>
            <div className="flex  justify-between items-center ">
              <span className="text-zinc-200 text-sm">Projeto Mentiroso</span>

              <div className="flex gap-2">
                <div className="flex text-xs items-center gap-1 border rounded-xl px-2 py-1">
                  <Heart className="w-3 h-3 text-zinc-300" />
                  <span className="text-zinc-300 ">22</span>
                </div>
                <div className="flex text-xs items-center gap-1 border rounded-xl px-2 py-1">
                  <Eye className="w-3 h-3 text-zinc-300" />
                  <span className="text-zinc-300 ">33</span>
                </div>
              </div>
            </div>
            <div className="flex tags items-center gap-1">
              <span className="text-zinc-300 text-xs">
                Frontend, React, Next
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsProfile;
