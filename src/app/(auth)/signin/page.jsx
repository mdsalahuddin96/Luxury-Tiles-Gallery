"use client";

import { authClient } from "@/lib/auth-client";
import { ArrowRightToSquare, EyeSlash } from "@gravity-ui/icons";
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
import { useState } from "react";

import { FcGoogle } from "react-icons/fc";
import { IoIosEye, IoIosEyeOff } from "react-icons/io";
import { toast } from "react-toastify";
const SignInPage = () => {
  const [passwordValue, setPasswordValue] = useState("");
  const [isShow,setIsShow]=useState(false)
  const onSubmit =async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const userData=Object.fromEntries(formData)
    const {data,error}=await authClient.signIn.email({
      email:userData.email,
      password:userData.password,
      rememberMe: true,
      callbackURL:'/'
    })
    if(error){
      toast.error(error.message)
    }
    else{
      toast.success('Sign In Successful!')
    }
  };
  return (
    <div className="flex flex-col gap-10 items-center min-h-screen">
      <div className="text-center mt-10">
        <h1 className="text-4xl font-bold text-[var(--text-main)]">
          Welcome Back
        </h1>
        <p className="text-sm text-[var(--text-muted)]">
          Enter your email and password to access your account
        </p>
      </div>
      <div className="flex min-w-96 flex-col justify-center items-center bg-[var(--bg-card)]  p-6 rounded-[14px] border border-[var(--border-color)] shadow-sm">
        <Form className="flex w-full flex-col gap-4 " onSubmit={onSubmit}>
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
            type={isShow?'text':'password'}
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
                {isShow?<IoIosEye onClick={()=>setIsShow(!isShow)} />:<IoIosEyeOff onClick={()=>setIsShow(!isShow)} />}
                
              </span>
            )}

            <Description>
              Must be at least 8 characters with 1 number{" "}
             
            </Description>
            <FieldError />
          </TextField>

          <div className="flex flex-col gap-2">
            <Button type="submit" className="w-full btn-primary shadow-none">
              <ArrowRightToSquare />
              Sign In
            </Button>
            <Button className="w-full btn-secondary ">
              <FcGoogle />
              Sign In with Google
            </Button>
          </div>
        </Form>
        <p className="mt-10">
          Don&apos;t have an account?{" "}
          <Link href="/register" className="text-blue-400 underline">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignInPage;
