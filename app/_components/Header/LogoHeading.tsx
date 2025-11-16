import { HEADING } from "@/content";
import { SiBlogger } from "react-icons/si";

const LogoHeading = () => {
  return (
    <div className="flex items-center gap-3 py-4">
      <SiBlogger className="text-violet-600 text-3xl"/>
      <h1 className="text-3xl">{HEADING}</h1>
    </div>
  );
};

export default LogoHeading;
