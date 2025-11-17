import { Button } from "@/components/ui/button";
import { FaUser } from "react-icons/fa6";
import { MY_POST } from "@/content";
import Link from "next/link";

const MyPost = () => {
  return (
    <Link href={MY_POST.route}>
      <Button>
        <FaUser />
        {MY_POST.text}
      </Button>
    </Link>
  );
};

export default MyPost;
