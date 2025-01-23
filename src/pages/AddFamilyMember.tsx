import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { ArrowLeft, UserPlus, Info } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

type FamilyMemberFormData = {
  relationship: "parent" | "spouse" | "sibling" | "child";
  name: string;
  dateOfBirth: string;
  certificateNumber?: string;
  consentGiven: boolean;
};

const AddFamilyMember = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 3;

  const form = useForm<FamilyMemberFormData>({
    defaultValues: {
      relationship: "parent",
      name: "",
      dateOfBirth: "",
      certificateNumber: "",
      consentGiven: false,
    },
  });

  const onSubmit = (data: FamilyMemberFormData) => {
    if (currentStep < totalSteps) {
      setCurrentStep(prev => prev + 1);
      return;
    }

    // Final submission
    console.log("Form submitted:", data);
    toast({
      title: "Family member added",
      description: "They will receive a verification link shortly.",
    });
    navigate("/family-tree");
  };

  return (
    <div className="min-h-screen bg-background py-6 px-4 md:py-20">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <Button 
            variant="ghost" 
            size="icon"
            onClick={() => navigate("/family-tree")}
            aria-label="Go back"
          >
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-ninja-gray-900">
              Add Family Member
            </h1>
            <p className="text-sm md:text-base text-ninja-gray-600">
              Step {currentStep} of {totalSteps}: {
                currentStep === 1 ? "Basic Information" :
                currentStep === 2 ? "Additional Details" :
                "Consent & Review"
              }
            </p>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="w-full h-2 bg-ninja-gray-200 rounded-full mb-8">
          <div 
            className="h-full bg-ninja-primary rounded-full transition-all duration-300"
            style={{ width: `${(currentStep / totalSteps) * 100}%` }}
          />
        </div>

        {/* Form */}
        <div className="bg-white rounded-lg border border-ninja-gray-200 p-6 md:p-8">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              {currentStep === 1 && (
                <>
                  <FormField
                    control={form.control}
                    name="relationship"
                    render={({ field }) => (
                      <FormItem className="space-y-3">
                        <FormLabel>Relationship</FormLabel>
                        <FormControl>
                          <RadioGroup
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                            className="grid grid-cols-2 gap-4"
                          >
                            {[
                              { value: "parent", label: "Parent" },
                              { value: "spouse", label: "Spouse" },
                              { value: "sibling", label: "Sibling" },
                              { value: "child", label: "Child" },
                            ].map(({ value, label }) => (
                              <FormItem key={value}>
                                <FormControl>
                                  <div className="flex items-center space-x-2">
                                    <RadioGroupItem value={value} id={value} />
                                    <FormLabel htmlFor={value} className="cursor-pointer">
                                      {label}
                                    </FormLabel>
                                  </div>
                                </FormControl>
                              </FormItem>
                            ))}
                          </RadioGroup>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Full Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter full name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </>
              )}

              {currentStep === 2 && (
                <>
                  <FormField
                    control={form.control}
                    name="dateOfBirth"
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
                    control={form.control}
                    name="certificateNumber"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>
                          <span className="flex items-center gap-2">
                            Certificate Number
                            <span className="text-sm text-ninja-gray-600">(Optional)</span>
                            <Info className="h-4 w-4 text-ninja-gray-600" />
                          </span>
                        </FormLabel>
                        <FormControl>
                          <Input placeholder="Enter certificate number if available" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </>
              )}

              {currentStep === 3 && (
                <FormField
                  control={form.control}
                  name="consentGiven"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                      <div className="space-y-1 leading-none">
                        <FormLabel>
                          I confirm I have permission to share this information
                        </FormLabel>
                        <p className="text-sm text-ninja-gray-600">
                          By proceeding, you confirm that you have obtained consent to share this information for verification purposes.
                        </p>
                      </div>
                    </FormItem>
                  )}
                />
              )}

              <div className="flex justify-between pt-6">
                {currentStep > 1 && (
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => setCurrentStep(prev => prev - 1)}
                  >
                    Previous
                  </Button>
                )}
                <Button
                  type="submit"
                  className="ml-auto"
                >
                  {currentStep === totalSteps ? (
                    "Add Family Member"
                  ) : (
                    "Continue"
                  )}
                </Button>
              </div>
            </form>
          </Form>
        </div>

        {/* Privacy Notice */}
        <p className="text-sm text-ninja-gray-600 mt-4 text-center">
          Your data is protected. Read our{" "}
          <Button variant="link" className="p-0 h-auto font-normal">
            Privacy Policy
          </Button>
        </p>
      </div>
    </div>
  );
};

export default AddFamilyMember;