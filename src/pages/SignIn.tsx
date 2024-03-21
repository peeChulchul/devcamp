import React from "react";
import { CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { signInSchema } from "@/validators/auth";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { toast } from "@/components/ui/use-toast";
import { useAuthContextUpdate } from ".";

type TSignInForm = z.infer<typeof signInSchema>;

const SignIn = () => {
  const signInForm = useForm<TSignInForm>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      username: "",
      email: "",
      phone: "",
      password: "",
      confirmPassword: "",
      userRole: undefined
    }
  });

  const onClickLogin = useAuthContextUpdate();

  const onsubmit = (value: TSignInForm) => {
    toast({
      title: "회원가입이 완료되었습니다!",
      variant: "default",
      duration: 1000
    });
  };

  return (
    <>
      <CardHeader>
        <CardTitle>회원가입</CardTitle>
        <CardContent className={cn("py-4 px-0")}>
          <Form {...signInForm}>
            <form className="space-y-3" onSubmit={signInForm.handleSubmit(onsubmit)}>
              <FormField
                control={signInForm.control}
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>이름:</FormLabel>
                    <FormControl>
                      <Input placeholder="홍길동" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={signInForm.control}
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
                control={signInForm.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>연락처:</FormLabel>
                    <FormControl>
                      <Input placeholder="01012345678" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={signInForm.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>비밀번호:</FormLabel>
                    <FormControl>
                      <Input type="password" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={signInForm.control}
                name="confirmPassword"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>비밀번호 확인:</FormLabel>
                    <FormControl>
                      <Input type="password" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={signInForm.control}
                name="userRole"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>역할:</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="포지션을 선택해주세요" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="front-end">프론트엔드</SelectItem>
                        <SelectItem value="back-end">백엔드</SelectItem>
                        <SelectItem value="design">디자인</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={signInForm.control}
                name="userAge"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>연령:</FormLabel>
                    <FormControl>
                      <RadioGroup
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                        className="flex items-center justify-between"
                      >
                        <FormItem className="flex  space-x-1 space-y-0">
                          <FormControl>
                            <RadioGroupItem value="10" />
                          </FormControl>
                          <FormLabel className="font-normal">10대</FormLabel>
                        </FormItem>
                        <FormItem className="flex  space-x-1 space-y-0">
                          <FormControl>
                            <RadioGroupItem value="20" />
                          </FormControl>
                          <FormLabel className="font-normal">20대</FormLabel>
                        </FormItem>
                        <FormItem className="flex space-x-1 space-y-0">
                          <FormControl>
                            <RadioGroupItem value="30" />
                          </FormControl>
                          <FormLabel className="font-normal">30대</FormLabel>
                        </FormItem>
                        <FormItem className="flex  space-x-1 space-y-0">
                          <FormControl>
                            <RadioGroupItem value="other" />
                          </FormControl>
                          <FormLabel className="font-normal">40대 이상</FormLabel>
                        </FormItem>
                      </RadioGroup>
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="px-2 flex justify-end">
                <span
                  onClick={() => onClickLogin("logIn")}
                  className="cursor-pointer text-sm text-muted-foreground font-semibold hover:text-accent-foreground
                "
                >
                  로그인
                </span>
              </div>

              <div>
                <Button className={cn("w-full")} type="submit">
                  회원가입
                </Button>
              </div>
            </form>
          </Form>
        </CardContent>
      </CardHeader>
    </>
  );
};

export default SignIn;
