import { SummaryCard } from "@/featuers/home/components/SummaryCard";
import "./globals.css";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function RootLayout({
  courses,
  children,
}: Readonly<{
  courses: React.ReactNode;
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="flex">
          <div className="max-w-xs bg-amber-200 h-screen px-20 py-10">
            sidebar
          </div>
          <div className="p-4 flex gap-10 flex-1">
            <div className="flex-1 ">
              <div className="w-full">{children}</div>
              <div className="">{courses}</div>
            </div>
            <div className="flex-1  h-fit">
              <div className="flex items-center gap-4 mb-6">
                <Input
                  type="text"
                  placeholder="enter some text"
                  className="border"
                />
                <Button>Add</Button>
                <Button>Icon</Button>
              </div>
              <div className="flex gap-4">
                <SummaryCard title={"Courses Completed"} value={"11"} />
                <SummaryCard title={"Courses in progress"} value={"4"} />
              </div>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}

