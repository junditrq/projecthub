"use client";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import {
    Field,
    FieldDescription,
    FieldError,
    FieldGroup,
    FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { useFormActionResultHandlers } from "@/hooks/use-form-action-result-handlers";
import { createVerificationRequestAction } from "@/lib/actions/verification-requests.actions";
import {
    CreateVerificationRequestFormData,
    CreateVerificationRequestSchema,
} from "@/lib/schemas/verification-form.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAction } from "next-safe-action/hooks";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { toast } from "sonner";
import FileUploader from "../file-uploader";
import SubmittedSuccessfully from "./submitted-successfully";

const VerificationForm = () => {
  const [submittedSuccessfully, setSubmittedSuccessfully] = useState(false);
  const {
    handleSubmit,
    control,
    formState: { isSubmitting, errors },
    clearErrors,
    setError,
  } = useForm<CreateVerificationRequestFormData>({
    resolver: zodResolver(CreateVerificationRequestSchema),
    defaultValues: {
      arabicName: "",
      collegeIdFileKey: "",
    },
  });

  const [uploading, setUploading] = useState(false);

  const { handleError, handleSuccess } = useFormActionResultHandlers({
    setError,
    onSuccess: () => {
      setSubmittedSuccessfully(true);
      toast.success("Verification request submitted successfully!");
    },
  });

  const { execute, isExecuting } = useAction(createVerificationRequestAction, {
    onSuccess: async ({ data }) => handleSuccess(data),
    onError: async ({ error }) =>
      handleError(error.serverError, error.thrownError),
  });

  const onSubmit = (data: CreateVerificationRequestFormData) => {
    console.log(data);
    execute(data);
  };

  return submittedSuccessfully ? (
    <SubmittedSuccessfully />
  ) : (
    <Card className="mx-auto my-10 w-full max-w-xl">
      <CardHeader>
        <CardTitle>Become a Student</CardTitle>
        <CardDescription>
          Become a student to be able to publish your own projects.
        </CardDescription>
      </CardHeader>

      <CardContent>
        <form id="verification-form" onSubmit={handleSubmit(onSubmit)}>
          <FieldGroup>
            {errors.root?.message && (
              <FieldError>{errors.root.message}</FieldError>
            )}
            <Controller
              name="arabicName"
              control={control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor={field.name}>Your Name</FieldLabel>
                  <Input
                    {...field}
                    id={field.name}
                    type="text"
                    placeholder="Your name in the college list."
                    aria-invalid={fieldState.invalid}
                  />
                  <FieldDescription>
                    Copy paste your name from the college project list to make
                    sure it matches.
                  </FieldDescription>
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
            <Controller
              control={control}
              name="collegeIdFileKey"
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor={field.name}>College Id</FieldLabel>
                  <FileUploader
                    inputId={field.name}
                    restrictions={{
                      allowedTypes: ["image/jpeg", "image/png"],
                      maxFileSize: 5 * 1024 * 1024, // 5MB
                    }}
                    error={fieldState.invalid}
                    onChange={(uploadItems) => {
                      const successfulUpload = uploadItems.find(
                        (item) => item.status === "success",
                      );
                      const uploadingItem = uploadItems.find(
                        (item) => item.status === "uploading",
                      );

                      setUploading(!!uploadingItem);

                      if (successfulUpload) {
                        field.onChange(successfulUpload.fileKey);
                      } else if (uploadingItem) {
                        clearErrors("collegeIdFileKey");
                      } else {
                        field.onChange("");
                      }
                    }}
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
          </FieldGroup>
        </form>
      </CardContent>

      <CardFooter className="border-0">
        <Button
          disabled={uploading || isSubmitting || isExecuting}
          form="verification-form"
          type="submit"
          className="w-full"
        >
          Submit
        </Button>
      </CardFooter>
    </Card>
  );
};

export default VerificationForm;
