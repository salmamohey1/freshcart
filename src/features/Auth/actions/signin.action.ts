"use server";

import axios from "axios";

export type SigninState = {
  success: boolean;
  message: string;
  user?: any;
  token?: string;
};

export async function signinAction(
  prevState: SigninState | null,
  formData: FormData
): Promise<SigninState> {
  try {
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    const response = await axios.post(
      "https://ecommerce.routemisr.com/api/v1/auth/signin",
      { email, password }
    );

    return {
      success: true,
      message: "Welcome back! Login successful.",
      user: response.data.user,
      token: response.data.token,
    };
  } catch (error: any) {
    return {
      success: false,
      message:
        error.response?.data?.message || "Invalid email or password.",
    };
  }
}