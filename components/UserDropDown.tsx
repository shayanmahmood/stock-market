"use client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useRouter } from "next/navigation";
import { Button } from "./ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { LogOut } from "lucide-react";
import NavItems from "./NavItems";

const UserDropDown = () => {
  const router = useRouter();

  const handleSignOut = async () => {
    router.push("/sign-up");
  };

  const user = {
    name: "Shayan",
    email: "shayanmahmood234@gmail.com",
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className="flex items-center gap-3 text-gray-4 hover:text-yellow-500"
        >
          <Avatar className="h-8 w-8">
            <AvatarImage src="data:image/jpeg;base64,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" />
            <AvatarFallback className="bg-yellow-500 text-yellow-900 text-sm font-bold">
              {user.name[0]}
            </AvatarFallback>
          </Avatar>
          <div className="hidden md:flex flex-col items-start">
            <span className="text-base font-medium text-gray-400">
              {user.name}
            </span>
          </div>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="text-gray-400">
        <DropdownMenuLabel>
          <div className="flex relative items-center gap-3 py-2">
            <Avatar className="h-10 w-10">
              <AvatarImage src="data:image/jpeg;base64,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" />
              <AvatarFallback className="bg-yellow-500 text-yellow-900 text-sm font-bold">
                {user.name[0]}
              </AvatarFallback>
            </Avatar>
            <div className="flex flex-col ">
              <span className="text-base font-medium text-gray-400">
                {user.name}
              </span>
              <span className="text-gray-500 text-sm">{user.email}</span>
            </div>
          </div>
          <DropdownMenuSeparator className="bg-gray-600" />
          <DropdownMenuItem
            onClick={handleSignOut}
            className="text-gray-100 text-md font-medium focus:bg-transparent focus:text-yellow-500 transition-colors cursor-pointer"
          >
            <LogOut className="h-4 w-4 mr-2 hidden sm:block" /> Logout
          </DropdownMenuItem>
          {/* <DropdownMenuSeparator className="hidden sm:block bg-gray-600" /> */}
          <nav className="sm:hidden">
            <NavItems />
          </nav>
        </DropdownMenuLabel>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserDropDown;
