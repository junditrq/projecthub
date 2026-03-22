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
import { CreateVerificationRequestDTO } from "@/core/application/dtos/verification-request.dto";
import { CreateVerificationRequestSchema } from "@/lib/schemas/verification-form.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import FileUploader from "../file-uploader";

const VerificationForm = () => {
  const {
    handleSubmit,
    control,
    formState: { isSubmitting },
    clearErrors,
  } = useForm<Omit<CreateVerificationRequestDTO, "userId">>({
    resolver: zodResolver(
      CreateVerificationRequestSchema.omit({ userId: true }),
    ),
    defaultValues: {
      arabicName: "",
      collegeIdFileKey: "",
    },
  });

  const [uploading, setUploading] = useState(false);

  const onSubmit = (data: Omit<CreateVerificationRequestDTO, "userId">) => {
    console.log(data);
  };

  return (
    <Card className="mx-auto my-10 w-full max-w-xl">
      <CardHeader>
        <CardTitle>Verify Your Account </CardTitle>
        <CardDescription>
          Become a student to be able to publish your own projects.
        </CardDescription>
      </CardHeader>

      <CardContent>
        <form id="verification-form" onSubmit={handleSubmit(onSubmit)}>
          <FieldGroup>
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
          disabled={uploading || isSubmitting}
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
