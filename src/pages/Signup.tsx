import { useState } from "react";
import { useForm } from "react-hook-form";
import { Eye, EyeOff, AtSign, Phone } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp";
import { Toggle } from "@/components/ui/toggle";
import { toast } from "sonner";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

type SignupFormData = {
  firstName: string;
  lastName: string;
  gender: string;
  dob: string;
  email: string;
  mobile: string;
  password: string;
  confirmPassword: string;
  acceptTerms: boolean;
};

type LoginFormData = {
  identifier: string;
  password?: string;
  otp?: string;
  useOTP: boolean;
};

const Signup = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [showLoginPassword, setShowLoginPassword] = useState(false);
  const [useOTP, setUseOTP] = useState(false);

  const signupForm = useForm<SignupFormData>({
    defaultValues: {
      firstName: "",
      lastName: "",
      gender: "",
      dob: "",
      email: "",
      mobile: "",
      password: "",
      confirmPassword: "",
      acceptTerms: false,
    },
  });

  const loginForm = useForm<LoginFormData>({
    defaultValues: {
      identifier: "",
      password: "",
      otp: "",
      useOTP: false,
    },
  });

  const onSignupSubmit = (data: SignupFormData) => {
    console.log("Signup data:", data);
    toast.success("Account created successfully!");
    navigate("/consent"); // Navigate to consent page after signup
  };

  const onLoginSubmit = (data: LoginFormData) => {
    console.log("Login data:", data);
    const isEmail = data.identifier.includes("@");
    const validPassword = "Test@1234";
    const validOTP = "123456";

    if (useOTP) {
      if (data.otp === validOTP) {
        toast.success("Login successful!");
        navigate("/vault"); // Navigate to vault page after successful login
      } else {
        toast.error("Invalid OTP");
      }
    } else {
      if (data.password === validPassword) {
        toast.success("Login successful!");
        navigate("/vault"); // Navigate to vault page after successful login
      } else {
        toast.error("Invalid password");
      }
    }
  };

  const handleOTPToggle = (pressed: boolean) => {
    setUseOTP(pressed);
    if (pressed) {
      // Here you would typically trigger the OTP sending
      toast.success("OTP sent to your registered mobile/email");
    }
  };

  return (
    <div className="min-h-screen bg-background pt-16 md:pt-20">
      <div className="container max-w-lg mx-auto px-4 py-8">
        <Tabs defaultValue="signup" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="signup">Sign Up</TabsTrigger>
            <TabsTrigger value="login">Login</TabsTrigger>
          </TabsList>

          <TabsContent value="signup" className="mt-6">
            <div className="space-y-6">
              <div>
                <h1 className="text-2xl font-bold text-ninja-gray-900">
                  Create Your Account
                </h1>
                <p className="text-sm text-ninja-gray-600 mt-2">
                  Your information is secure with us. Users will be able to search
                  for you by your name or email address.
                </p>
              </div>

              <Form {...signupForm}>
                <form onSubmit={signupForm.handleSubmit(onSignupSubmit)} className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <FormField
                      control={signupForm.control}
                      name="firstName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>First Name</FormLabel>
                          <FormControl>
                            <Input placeholder="John" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={signupForm.control}
                      name="lastName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Last Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Doe" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={signupForm.control}
                    name="gender"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Gender</FormLabel>
                        <FormControl>
                          <RadioGroup
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                            className="flex gap-4"
                          >
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="male" id="male" />
                              <label htmlFor="male">Male</label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="female" id="female" />
                              <label htmlFor="female">Female</label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem
                                value="prefer-not-to-say"
                                id="prefer-not-to-say"
                              />
                              <label htmlFor="prefer-not-to-say">
                                Prefer not to say
                              </label>
                            </div>
                          </RadioGroup>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={signupForm.control}
                    name="dob"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Date of Birth</FormLabel>
                        <FormControl>
                          <Input type="date" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={signupForm.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <div className="relative">
                            <AtSign className="absolute left-3 top-2.5 h-5 w-5 text-ninja-gray-500" />
                            <Input
                              type="email"
                              placeholder="john.doe@example.com"
                              className="pl-10"
                              {...field}
                            />
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={signupForm.control}
                    name="mobile"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Mobile Number</FormLabel>
                        <FormControl>
                          <div className="relative">
                            <Phone className="absolute left-3 top-2.5 h-5 w-5 text-ninja-gray-500" />
                            <Input
                              type="tel"
                              placeholder="+91 9999999999"
                              className="pl-10"
                              {...field}
                            />
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={signupForm.control}
                    name="password"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Password</FormLabel>
                        <FormControl>
                          <div className="relative">
                            <Input
                              type={showPassword ? "text" : "password"}
                              {...field}
                            />
                            <Button
                              type="button"
                              variant="ghost"
                              size="icon"
                              className="absolute right-0 top-0"
                              onClick={() => setShowPassword(!showPassword)}
                            >
                              {showPassword ? (
                                <EyeOff className="h-4 w-4" />
                              ) : (
                                <Eye className="h-4 w-4" />
                              )}
                            </Button>
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={signupForm.control}
                    name="confirmPassword"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Confirm Password</FormLabel>
                        <FormControl>
                          <div className="relative">
                            <Input
                              type={showConfirmPassword ? "text" : "password"}
                              {...field}
                            />
                            <Button
                              type="button"
                              variant="ghost"
                              size="icon"
                              className="absolute right-0 top-0"
                              onClick={() =>
                                setShowConfirmPassword(!showConfirmPassword)
                              }
                            >
                              {showConfirmPassword ? (
                                <EyeOff className="h-4 w-4" />
                              ) : (
                                <Eye className="h-4 w-4" />
                              )}
                            </Button>
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={signupForm.control}
                    name="acceptTerms"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                        <FormControl>
                          <input
                            type="checkbox"
                            checked={field.value}
                            onChange={field.onChange}
                            className="mt-1"
                          />
                        </FormControl>
                        <div className="space-y-1 leading-none">
                          <FormLabel>
                            By joining, you agree to our{" "}
                            <a
                              href="#"
                              className="text-ninja-primary hover:underline"
                            >
                              Terms and Conditions
                            </a>
                          </FormLabel>
                        </div>
                      </FormItem>
                    )}
                  />

                  <Button
                    type="submit"
                    className="w-full bg-ninja-primary hover:bg-ninja-primary/90"
                  >
                    Proceed to secure your accounts
                  </Button>
                </form>
              </Form>
            </div>
          </TabsContent>

          <TabsContent value="login" className="mt-6">
            <div className="space-y-6">
              <div>
                <h1 className="text-2xl font-bold text-ninja-gray-900">
                  Welcome Back
                </h1>
                <p className="text-sm text-ninja-gray-600 mt-2">
                  Login with your email or mobile number
                </p>
              </div>

              <Form {...loginForm}>
                <form onSubmit={loginForm.handleSubmit(onLoginSubmit)} className="space-y-6">
                  <FormField
                    control={loginForm.control}
                    name="identifier"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email or Mobile Number</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Enter your email or mobile number"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <div className="flex items-center justify-between">
                    <span className="text-sm text-ninja-gray-600">Verify using:</span>
                    <Toggle
                      pressed={useOTP}
                      onPressedChange={handleOTPToggle}
                      className="data-[state=on]:bg-ninja-primary"
                    >
                      {useOTP ? "OTP" : "Password"}
                    </Toggle>
                  </div>

                  {useOTP ? (
                    <FormField
                      control={loginForm.control}
                      name="otp"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Enter OTP</FormLabel>
                          <FormControl>
                            <InputOTP
                              maxLength={6}
                              render={({ slots }) => (
                                <InputOTPGroup>
                                  {slots.map((slot, i) => (
                                    <InputOTPSlot key={i} {...slot} index={i} />
                                  ))}
                                </InputOTPGroup>
                              )}
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  ) : (
                    <FormField
                      control={loginForm.control}
                      name="password"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Password</FormLabel>
                          <FormControl>
                            <div className="relative">
                              <Input
                                type={showLoginPassword ? "text" : "password"}
                                {...field}
                              />
                              <Button
                                type="button"
                                variant="ghost"
                                size="icon"
                                className="absolute right-0 top-0"
                                onClick={() =>
                                  setShowLoginPassword(!showLoginPassword)
                                }
                              >
                                {showLoginPassword ? (
                                  <EyeOff className="h-4 w-4" />
                                ) : (
                                  <Eye className="h-4 w-4" />
                                )}
                              </Button>
                            </div>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  )}

                  <Button
                    type="submit"
                    className="w-full bg-ninja-primary hover:bg-ninja-primary/90"
                  >
                    Login
                  </Button>
                </form>
              </Form>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Signup;