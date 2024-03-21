import { Button } from "@/components/ui/button";
import { CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/use-toast";
import { cn } from "@/lib/utils";
import { logInSchema } from "@/validators/auth";
import { zodResolver } from "@hookform/resolvers/zod";

import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

type TLogInForm = z.infer<typeof logInSchema>;

const Login = () => {
  const logInForm = useForm<TLogInForm>({
    resolver: zodResolver(logInSchema),
    defaultValues: {
      email: "",
      password: ""
    }
  });

  const onsubmit = (value: TLogInForm) => {
    // toast({
    //   title: "로그인이 완료되었습니다!",
    //   variant: "default",
    //   duration: 1000
    // });
  };

  return (
    <>
      <CardHeader>
        <CardTitle>로그인</CardTitle>
        <CardContent className={cn("py-4 px-0")}>
          <Form {...logInForm}>
            <form className="space-y-3" onSubmit={logInForm.handleSubmit(onsubmit)}>
              <FormField
                control={logInForm.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>이메일:</FormLabel>
                    <FormControl>
                      <Input placeholder="test000@gmail.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={logInForm.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>비밀번호:</FormLabel>
                    <FormControl>
                      <Input type="password" placeholder="password" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div>
                <Button className={cn("w-full mt-4")} type="submit">
                  로그인
                </Button>
              </div>
            </form>
          </Form>
        </CardContent>
      </CardHeader>
    </>
  );
};

export default Login;
