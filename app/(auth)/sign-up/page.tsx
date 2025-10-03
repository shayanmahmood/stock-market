"use client";
import { CountrySelectField } from "@/components/forms/CountrySelectField";
import FooterLink from "@/components/forms/FooterLink";
import InputField from "@/components/forms/InputField";
import SelectField from "@/components/forms/SelectField";
import { Button } from "@/components/ui/button";
import {
  INVESTMENT_GOALS,
  PREFERRED_INDUSTRIES,
  RISK_TOLERANCE_OPTIONS,
} from "@/lib/constants";
import { SubmitHandler, useForm } from "react-hook-form";

const SignUp = () => {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignUpFormData>({
    defaultValues: {
      fullName: "",
      email: "",
      password: "",
      country: "US",
      investmentGoals: "Growth",
      riskTolerance: "Medium",
      preferredIndustry: "Technology",
    },
    mode: "onBlur",
  });
  const onSubmit = async (data: SignUpFormData) => {
    try {
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <h1 className="form-title">Sign Up & Personalize</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        <InputField
          name="fullName"
          label="full Name"
          placeholder="John Doe"
          disabled={isSubmitting}
          validation={{ required: "Full Name is required", minLength: 2 }}
          register={register}
          error={errors.fullName}
        />

        <InputField
          name="email"
          label="Email"
          placeholder="contact@example.com"
          disabled={isSubmitting}
          validation={{
            required: "Email  is required",
            pattern: /^\w+@\w+\.\w+$/,
            message: "Email Adress is required",
          }}
          register={register}
          error={errors.email}
        />

        <InputField
          name="password"
          label="Password"
          placeholder="Enter a Strong Password"
          disabled={isSubmitting}
          validation={{
            required: "Password  is required",
            minLength: 8,
          }}
          register={register}
          error={errors.password}
          type="password"
        />

        <CountrySelectField
          name="country"
          label="Country"
          control={control}
          required
        />

        <SelectField
          name="investmentGoals"
          label="Investment Goals"
          placeholder="Define Your Goals"
          options={INVESTMENT_GOALS}
          control={control}
          error={errors.investmentGoals}
          required
        />

        <SelectField
          name="riskTolerance"
          label="Risk Tolerance"
          placeholder="Define Your Risk Level"
          options={RISK_TOLERANCE_OPTIONS}
          control={control}
          error={errors.riskTolerance}
          required
        />

        <SelectField
          name="preferredIndustry"
          label="Preferred Industry"
          placeholder="Enter Your Preferred Industry"
          options={PREFERRED_INDUSTRIES}
          control={control}
          error={errors.preferredIndustry}
          required
        />

        <Button type="submit" className="yellow-btn w-full mt-5">
          {isSubmitting ? "Creating Account" : "Start Your Investing Journey"}
        </Button>

        <FooterLink
          href="/sign-in"
          text="Already Have an account"
          linkText="Sign in"
        />
      </form>
    </>
  );
};

export default SignUp;
