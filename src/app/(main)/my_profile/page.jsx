"use client";
import { authClient, useSession } from "@/lib/auth-client";
import { Envelope } from "@gravity-ui/icons";
import { Avatar } from "@heroui/react";

const MyProfilePage = () => {
  const { data } = authClient.useSession();
  const user = data?.user;
  console.log(user?.createdAt.toLocaleString())
  return (
    <div className="container mx-auto flex justify-center items-center p-4 border border-amber-600 min-h-screen">
      <div className="h-80 w-100 relative bg-[var(--bg-card)] border border-[var(--border-color)] shadow-xl rounded-3xl">
        <Avatar className="size-30 absolute -top-15 left-36">
          <Avatar.Image
            src={user?.image}
            alt="user photo"
            referrerPolicy="no-referrer"
          ></Avatar.Image>
          <Avatar.Fallback className="bg-[var(--neutral-warm)] text-[var(--text-main)] text-6xl">
            {user?.name.charAt(0).toUpperCase()}
          </Avatar.Fallback>
        </Avatar>
        <div className="flex flex-col justify-center items-center mt-20">
          <h1 className="text-3xl font-bold ">{user?.name.charAt(0).toUpperCase()+user?.name.slice(1)}</h1>
          <p className="flex items-center gap-1.5 text-[var(--text-muted)]"><Envelope/><span>{user?.email}</span></p>
        </div>
        <div className="grid grid-cols-2 mt-10 px-4">
          <div className="text-center">
            <p>Created At</p>
            <span>{user?.createdAt.toLocaleString()}</span>
          </div>
          <div className="text-center">
            <p>Updated At</p>
            <span>{user?.updatedAt.toLocaleString()}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfilePage;
