import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"

import { UseFormSetValue } from "react-hook-form";
import { SignupFormData } from "@/pages/Signup"; // Import SignupFormData

interface TermsAndConditionsDialogProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  formSetValue: UseFormSetValue<SignupFormData>; // Add formSetValue prop
}

export const TermsAndConditionsDialog = (props: TermsAndConditionsDialogProps) => {
  const { isOpen, onOpenChange, formSetValue } = props;
  return (
    <AlertDialog open={isOpen} onOpenChange={onOpenChange}>
      <AlertDialogContent className="max-w-md rounded-xl bg-white text-black shadow-lg border">
        <AlertDialogHeader className="flex flex-row justify-between items-center">
          <AlertDialogTitle className="text-lg font-semibold">Terms of Use</AlertDialogTitle>
          <AlertDialogCancel>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-x-square"
            >
              <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
              <path d="m15 9-6 6" />
              <path d="m9 9 6 6" />
            </svg>
          </AlertDialogCancel>
        </AlertDialogHeader>
        <div className="max-h-[60vh] overflow-y-auto px-4 pb-6">
          <p className="text-sm text-gray-700 mt-2 font-semibold">
            1. Acceptance of Terms
          </p>
          <p className="text-sm text-gray-600 mt-1">
            By accessing and using Ninja Finance Hub, you agree to be bound by these Terms and Conditions.
          </p>
          <p className="text-sm text-gray-700 mt-4 font-semibold">
            2. Account Registration
          </p>
          <p className="text-sm text-gray-600 mt-1">
            You must be at least 18 years old to register for an account. You agree to provide accurate, current, and complete information during the registration process.
          </p>
          <p className="text-sm text-gray-700 mt-4 font-semibold">
            3. User Conduct
          </p>
          <p className="text-sm text-gray-600 mt-1">
            You are responsible for your conduct and all activities under your account.
          </p>
          <p className="text-sm text-gray-700 mt-4 font-semibold">
            4. Privacy Policy
          </p>
          <p className="text-sm text-gray-600 mt-1">
            Your privacy is important to us. Please refer to our Privacy Policy for details on how we collect, use, and protect your information.
          </p>
          <p className="text-sm text-gray-700 mt-4 font-semibold">
            5. Modifications to Terms
          </p>
          <p className="text-sm text-gray-600 mt-1">
            Ninja Finance Hub reserves the right to modify these Terms and Conditions at any time.
          </p>
          <p className="text-sm text-gray-700 mt-4 font-semibold">
            6. Governing Law
          </p>
          <p className="text-sm text-gray-600 mt-1">
            These Terms and Conditions shall be governed by and construed in accordance with the laws of India.
          </p>
        </div>
        <AlertDialogFooter className="px-4 pb-4">
          <AlertDialogAction
            onClick={() => props.formSetValue("acceptTerms", true)}
          >
            Accept
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}