import { Cloud, Github, LifeBuoy, LogOut, Settings, User2 } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { UserInterface } from "@/types/base";
import Link from "next/link";
import LoginOut from "./logout";

export function AvatarMenu({ user }: { user: UserInterface }) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className="w-8 h-8 flex justify-center items-center bg-zinc-900 border border-zinc-800/50 rounded-full cursor-pointer">
          <User2 className="w-4 h-4" />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 mr-4">
        <DropdownMenuLabel>
          <span>@</span>
          {user.Profile?.userName}
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <Link href={`/profile/${user.Profile?.userName}`}>
            <DropdownMenuItem>
              <User2 className="text-primary" />
              <span>Profile</span>
              <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
            </DropdownMenuItem>
          </Link>

          <DropdownMenuItem>
            <Settings className="text-primary" />
            <span>Settings</span>
            <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />

        <DropdownMenuItem>
          <Github className="text-primary" />
          <span>GitHub</span>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <LifeBuoy className="text-primary" />
          <span>Support</span>
        </DropdownMenuItem>
        <DropdownMenuItem disabled>
          <Cloud className="text-primary" />
          <span>API</span>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <LoginOut>
          <DropdownMenuItem>
            <LogOut className="text-primary" />
            <span>Log out</span>
            <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
          </DropdownMenuItem>
        </LoginOut>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
