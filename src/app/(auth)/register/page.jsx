"use client";

import { authClient } from "@/lib/auth-client";
import {
  Button,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { IoIosEye, IoIosEyeOff } from "react-icons/io";
import { toast } from "react-toastify";

const RegisterPage = () => {
  const [passwordValue, setPasswordValue] = useState("");
  const [isShow, setIsShow] = useState(false);
  const router = useRouter();
  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const userData = Object.fromEntries(formData);
    console.log(userData)
    const { data, error } = await authClient.signUp.email(
      {
        name: userData.name,
        email: userData.email,
        password: userData.password,
        image: userData.image,
      },
      {
        onSuccess: () => {
          router.push("/signin");
        },
      },
    );
    if (data) {
      toast.success("Sign Up Successful!");
    } else {
      toast.error("Error signing up: " + error.message);
    }
  };
  const handleGoogleLogin = async () => {
    const data = await authClient.signIn.social({
      provider: "google",
    });
  };
  return (
    <div className="flex flex-col gap-5 items-center min-h-screen mb-10">
      <div className="text-center mt-10">
        <h1 className="text-4xl font-bold text-[var(--text-main)]">
          Create Your Account
        </h1>
        <p className="text-sm text-[var(--text-muted)]">
          Enter details to create your account
        </p>
      </div>
      <div className="min-w-96 flex flex-col justify-center items-center bg-[var(--bg-card)] p-6 rounded-[14px] border border-[var(--border-color)] shadow-sm">
        <Form className="flex w-full flex-col gap-4 " onSubmit={onSubmit}>
          <TextField
            isRequired
            name="name"
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
          <TextField name="image" type="url">
            <Label>Photo-url(link)</Label>
            <Input placeholder="Enter Photo URL" />
          </TextField>
          <TextField
            isRequired
            name="email"
            type="email"
            validate={(value) => {
              if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                return "Please enter a valid email address";
              }
              return null;
            }}
          >
            <Label>Email</Label>
            <Input placeholder="Enter your email" />
            <FieldError />
          </TextField>

          <TextField
            className="relative"
            isRequired
            minLength={8}
            name="password"
            type={isShow ? "text" : "password"}
            validate={(value) => {
              if (value.length < 8) {
                return "Password must be at least 8 characters";
              }

              if (!/[0-9]/.test(value)) {
                return "Password must contain at least one number";
              }

              return null;
            }}
          >
            <Label>Password</Label>
            <Input
              value={passwordValue}
              onChange={(e) => setPasswordValue(e.target.value)}
              placeholder="Enter your password"
            />
            {passwordValue.length > 0 && (
              <span className="absolute top-8 cursor-pointer right-3 p-1">
                {isShow ? (
                  <IoIosEye onClick={() => setIsShow(!isShow)} />
                ) : (
                  <IoIosEyeOff onClick={() => setIsShow(!isShow)} />
                )}
              </span>
            )}
            <Description>
              Must be at least 8 characters with 1 number
            </Description>
            <FieldError />
          </TextField>

          <div className="flex flex-col gap-2">
            <Button type="submit" className="w-full btn-primary shadow-none">
              Register
            </Button>
            <p className="text-center text-[var(--text-muted)]">Or</p>
            <Button
              className="w-full btn-secondary"
              onClick={handleGoogleLogin}
            >
              <FcGoogle />
              Sign In with Google
            </Button>
          </div>
        </Form>
        <p className="mt-10">
          Already have an account?{" "}
          <Link href="/signin" className="text-blue-400 underline">
            SignIn
          </Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;
