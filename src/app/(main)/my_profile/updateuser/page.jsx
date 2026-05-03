"use client";

import { authClient } from "@/lib/auth-client";
import {
  Avatar,
  Badge,
  Button,
  FieldError,
  Input,
  Label,
  Modal,
  TextField,
} from "@heroui/react";
import { redirect } from "next/navigation";
import { BiSave, BiUser } from "react-icons/bi";
import { GrUpdate } from "react-icons/gr";

const UserUpdatePage = () => {
  const onSubmit = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const image = e.target.image.value;
    const data=await authClient.updateUser({
      name: name,
      image: image,
    });
    if(data){
        redirect('/my_profile')
    }
  };
  return (
    <div className="flex flex-col gap-10 items-center min-h-screen mt-20">
      <h1 className="text-4xl font-bold">Update Your Profile</h1>
      <div className="min-w-96 bg-[var(--bg-card)]  p-6 rounded-[14px] border border-[var(--border-color)] shadow-sm">
        <div className="flex justify-center mb-5">
          <Badge.Anchor>
            <Avatar className="size-30">
              <Avatar.Image src="https://static.vecteezy.com/system/resources/previews/021/548/095/original/default-profile-picture-avatar-user-avatar-icon-person-icon-head-icon-profile-picture-icons-default-anonymous-user-male-and-female-businessman-photo-placeholder-social-network-avatar-portrait-free-vector.jpg" />
              <Avatar.Fallback>AB</Avatar.Fallback>
            </Avatar>
            <Badge color="accent" size="sm">
              Update
            </Badge>
          </Badge.Anchor>
        </div>
        <form onSubmit={onSubmit} className="flex w-full flex-col gap-4 ">
          <TextField
            className="w-full"
            name="name"
            type="text"
            validate={(value) => {
              if (value.length < 3) {
                return "Name must be at least 3 characters";
              }
              return null;
            }}
          >
            <Label>Name</Label>
            <Input placeholder="Enter your name" />
            <FieldError />
          </TextField>
          <TextField className="w-full" name="image" type="url">
            <Label>Image URL</Label>
            <Input placeholder="Enter Image URL" />
          </TextField>

          <Button type="submit" className="w-full">
            <GrUpdate /> Update
          </Button>
        </form>
      </div>
    </div>
  );
};

export default UserUpdatePage;
