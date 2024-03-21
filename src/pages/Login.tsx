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
import { useAuthContextUpdate } from ".";

type TLogInForm = z.infer<typeof logInSchema>;

const Login = () => {
  const onClickSignIn = useAuthContextUpdate();

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
              <div className="px-2 flex justify-end">
                <span
                  onClick={() => onClickSignIn("signIn")}
                  className="cursor-pointer text-sm text-muted-foreground font-semibold hover:text-accent-foreground
                "
                >
                  회원가입
                </span>
              </div>

              <div>
                <Button className={cn("w-full ")} type="submit">
                  로그인
                </Button>
              </div>

              {/* <div className="flex items-center">
                <hr className="flex-grow border-t-2 border-dashed" />
                <span className="mx-2 text-sm text-muted-foreground">또는</span>
                <hr className="flex-grow border-t-2 border-dashed" />
              </div>
              <div>
                <Button className={cn("w-full my-4")} type="submit">
                  회원가입
                </Button>
              </div> */}
            </form>
          </Form>
        </CardContent>
      </CardHeader>
    </>
  );
};

export default Login;
