import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Field, FieldLabel } from "@/components/ui/field";
import FileUploader from "../file-uploader";

const VerificationForm = () => {
  return (
    <Card className="mx-auto my-10 w-full max-w-2xl">
      <CardHeader>
        <CardTitle>Verify Your Account</CardTitle>
      </CardHeader>
      <CardContent>
        <form className="flex flex-col gap-6">
          <Field>
            <FieldLabel htmlFor="college-id">College Id</FieldLabel>
            <FileUploader
              inputId="college-id"
              restrictions={{
                allowedTypes: ["image/jpeg", "image/png"],
                maxFileSize: 2 * 1024 * 1024, // 5MB
                maxNumberOfFiles: 10,
              }}
            />
          </Field>
        </form>
      </CardContent>
      <CardFooter className="border-0">
        <Button type="submit" className="w-full">
          Submit
        </Button>
      </CardFooter>
    </Card>
  );
};

export default VerificationForm;
