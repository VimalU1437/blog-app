import { Button } from "@/components/ui/button";
import { FaPlus } from "react-icons/fa6";
import { NEW_POST } from "@/content";
import Link from "next/link";

const NewPost = () => {
  return (
    <Link href={NEW_POST.route}>
      <Button>
        <FaPlus />
        {NEW_POST.text}
      </Button>
    </Link>
  );
};

export default NewPost;
