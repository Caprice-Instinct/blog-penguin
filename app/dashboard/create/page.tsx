// import { prisma } from "@/app/utils/db";
import { handleSubmission } from "@/app/actions";
import { SubmitButton } from "@/components/general/SubmitButton";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export default function CreateBlogRoute() {
  // Server action (mutation) within a client component
  // Instead create an external file for the server action/mutation
  //   async function handleSubmission() {
  //     "use server";

  //     const data = await prisma.blogPost.create({
  //         data: {
  //             title: "New Post",
  //             content: "This is a new post",
  //             imageUrl: "https://example.com/image.jpg",
  //         }
  //     })
  //   }

  return (
    <div>
      <Card className="max-w-lg mx-auto">
        <CardHeader>
          <CardTitle>Create Post</CardTitle>
          <CardDescription>
            Create a new post to share with the world!
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form className="flex flex-col gap-6" action={handleSubmission}>
            <div className="flex flex-col gap-2">
              <Label>Title</Label>
              <Input name="title" required type="text" placeholder="Title" />
            </div>
            <div className="flex flex-col gap-2">
              <Label>Content</Label>
              <Textarea name="content" required placeholder="Content" />
            </div>
            <div className="flex flex-col gap-2">
              <Label>Image URL</Label>
              <Input name="url" required type="url" placeholder="Image url" />
            </div>

            <SubmitButton />
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
