import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import FileUploader from "../file-uploader";

const VerificationForm = () => {
  return (
    <Card className="mx-auto mt-10 w-full max-w-lg">
      <CardHeader>
        <CardTitle>Verify Your Account</CardTitle>
      </CardHeader>
      <CardContent>
        <form className="flex flex-col gap-6">
          <FileUploader
            restrictions={{
              allowedTypes: ["image/jpeg", "image/png"],
              maxFileSize: 2 * 1024 * 1024, // 5MB
              maxNumberOfFiles: 3,
            }}
          />
          <Button>Submit</Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default VerificationForm;
