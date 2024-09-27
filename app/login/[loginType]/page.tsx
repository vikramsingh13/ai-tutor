"use client";

import { useState } from "react";
// Import navigation hooks to help with redirection and getting query params.
import { useParams } from "next/navigation";
// Import the login types to decide whether to render signin or signup forms.
import { UserLoginType } from "@/types/types";
// Import Zod to help with validation and form schema.
import { z } from "zod";
// Import zod resolver to be used with react-hook-form.
import { zodResolver } from "@hookform/resolvers/zod";
// Import useForm react-hook-form as the ui components are built on top of it.
import { useForm } from "react-hook-form";
// Import shadcn ui components for the signin/signup forms.
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
// Import the shadcn tabs ui components to have separate tabs for signin and signup
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Login component will render the sign in and sign up pages.
const Login = () => {
  // Defines the form using useForm hook.
  const form = useForm();

  // Defines the LoginForm Schema.
  const LoginFormSchema = z.object({
    email: z.string().email({
      message: "A valid email is required.",
    }),
    password: z.string().min(8, {
      message: "Password must be at least 8 characters long.",
    }),
  });

  // Defines the form using useForm hook with the LoginFormSchema and zodResolver.
  const LoginForm = useForm<z.infer<typeof LoginFormSchema>>({
    resolver: zodResolver(LoginFormSchema),
    defaultValue: {
      password: "",
    },
  });

  // Handles sign in button click.
  const handleUserSignIn = (formValues: z.infer<typeof LoginFormSchema>) => {
    console.log("login/[loginType]/page: User tried to sign in!");
  };

  // Handles sign up button click.
  const handleUserSignUp = () => {
    console.log("login/[loginType]/page: User tried to sign up!");
  };

  // Get the login type from the query params
  const { loginTypeFromParams } = useParams();
  // Use state to track whether the user wants to sign in or sign up.
  const [loginType, setLoginType] = useState(loginTypeFromParams);
  return (
    <div className="flex flex-grow justify-center text-center items-center w-full min-h-screen">
      <Tabs defaultValue={UserLoginType.SIGN_IN} className="w-[400px]">
        {/* List of tabs we have. Use grid to style the tab buttons properly.*/}
        <TabsList className="grid w-full grid-cols-2">
          {/* Trigger values to display the respective TabsContent. */}
          <TabsTrigger value={UserLoginType.SIGN_IN}>Sign In</TabsTrigger>
          <TabsTrigger value={UserLoginType.SIGN_UP}>Sign Up</TabsTrigger>
        </TabsList>
        <TabsContent value={UserLoginType.SIGN_IN} className="py-4">
          {/* Use shadcn Form provider component. */}
          {/* LoginForm is a useForm() object */}
          <Form {...LoginForm}>
            {/* Nest the HTML form tag inside the Form provider */}
            {/* Pass the submit handler function to LoginForm.handleSubmit in the onSubmit prop.*/}
            {/* LoginForm.handleSubmit will take care of event handling,  prevent default, etc. */}
            <form
              onSubmit={LoginForm.handleSubmit(handleUserSignIn)}
              className=""
            >
              {/* Each FormField will have atleast the control, name and render props */}
              <FormField
                /* control takes the control of the login form we defined using useForm. */
                control={LoginForm.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="example@email.com"
                        type="email"
                        {...field}
                      />
                    </FormControl>
                    {/* Add a description for the form item for accessibility. */}
                    <FormDescription>
                      Your email will be your username
                    </FormDescription>
                    {/* Form messages, e.g. validation errors, required texts, etc., will go here. */}
                    <FormMessage />
                  </FormItem>
                )}
              />
              {/* Each FormField will have atleast the control, name and render props */}
              <FormField
                control={LoginForm.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input placeholder="" type="password" {...field} />
                    </FormControl>
                    {/* Add a description for the form item for accessibility. */}
                    <FormDescription>
                      Password must be at least 8 characters long.
                    </FormDescription>
                    {/* Form messages, e.g. validation errors, required texts, etc., will go here. */}
                    <FormMessage />
                  </FormItem>
                )}
              />
              {/* Sign In button. The submit handler passed on to the onSubmit as prop of the form tag will be triggered on clicking this button.*/}
              <Button type="submit" className="my-4">Sign In</Button>
            </form>
          </Form>
        </TabsContent>
        <TabsContent value={UserLoginType.SIGN_UP} className="py-4">
          {/* Use shadcn Form provider component. */}
          {/* LoginForm is a useForm() object */}
          <Form {...LoginForm}>
            {/* Nest the HTML form tag inside the Form provider */}
            {/* Pass the submit handler function to LoginForm.handleSubmit in the onSubmit prop.*/}
            {/* LoginForm.handleSubmit will take care of event handling,  prevent default, etc. */}
            <form
              onSubmit={LoginForm.handleSubmit(handleUserSignUp)}
              className=""
            >
              {/* Each FormField will have atleast the control, name and render props */}
              <FormField
                /* control takes the control of the login form we defined using useForm. */
                control={LoginForm.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="example@email.com"
                        type="email"
                        {...field}
                      />
                    </FormControl>
                    {/* Add a description for the form item for accessibility. */}
                    <FormDescription>
                      Your email will be your username
                    </FormDescription>
                    {/* Form messages, e.g. validation errors, required texts, etc., will go here. */}
                    <FormMessage />
                  </FormItem>
                )}
              />
              {/* Each FormField will have atleast the control, name and render props */}
              <FormField
                control={LoginForm.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input placeholder="" type="password" {...field} />
                    </FormControl>
                    {/* Add a description for the form item for accessibility. */}
                    <FormDescription>
                      Password must be at least 8 characters long.
                    </FormDescription>
                    {/* Form messages, e.g. validation errors, required texts, etc., will go here. */}
                    <FormMessage />
                  </FormItem>
                )}
              />
              {/* Sign In button. The submit handler passed on to the onSubmit as prop of the form tag will be triggered on clicking this button.*/}
              <Button type="submit" className="my-4">Sign Up</Button>
            </form>
          </Form>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Login;
