import { z } from "zod";

export const signInSchema = z.object({
  username: z
    .string()
    .min(2, { message: "이름은 2글자 이상이어야 합니다." })
    .max(10, { message: "이름은 10글자 이하이어야 합니다." }),
  email: z.string().email({ message: "올바른 이메일을 입력해주세요." }),
  phone: z
    .string()
    .refine(
      (value) => {
        return /^010\d{8}$/.test(value);
      },
      {
        message: "010으로 시작하는 11자리 숫자를 입력해주세요"
      }
    )
    .refine(
      (value) => {
        return value.length === 11;
      },
      {
        message: "연락처는 11자리여야 합니다."
      }
    ),

  password: z
    .string()
    .min(6, "비밀번호는 최소 6자리 이상이어야 합니다.")
    .max(16, "비밀번호는 16자리 이하이어야 합니다.")
    .refine(
      (value) => {
        return /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}$/.test(value);
      },
      { message: "비밀번호는 최소 6자리 이상, 영문, 숫자, 특수문자를 포함해야 합니다." }
    ),
  confirmPassword: z
    .string()
    .min(6, "비밀번호는 최소 6자리 이상이어야 합니다.")
    .max(16, "비밀번호는 16자리 이하이어야 합니다.")
    .refine(
      (value) => {
        return /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}$/.test(value);
      },
      { message: "비밀번호는 최소 6자리 이상, 영문, 숫자, 특수문자를 포함해야 합니다." }
    ),
  userRole: z.string({
    required_error: "역할을 선택해주세요."
  }),
  userAge: z.string({
    required_error: "연령을 선택해주세요."
  })
});

export const logInSchema = z.object({
  email: signInSchema.shape.email,
  password: signInSchema.shape.password
});
