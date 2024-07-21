import { ReactNode } from "react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Terminal } from "lucide-react";

interface Props {
  classVal?: string;
  children: ReactNode;
}
export const MyAlert = ({ classVal, children }: Props) => {
  return (
    <>
      <Alert>
        <Terminal className="h-4 w-4" />
        <AlertTitle>{children}</AlertTitle>
        <AlertDescription>
          You can add components and dependencies to your app using the cli.
        </AlertDescription>
      </Alert>
    </>
  );
};
