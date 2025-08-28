import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BadgeCheckIcon } from "lucide-react";
import Image from "next/image";

type CourseStatus = "new" | "inProgress" | "completed";

interface CourseCardProps {
  courseName: string;
  author: string;
  duration: string;
  rating: number;
  progress?: number; // потрібен тільки для inProgress
  status: CourseStatus;
  courseIcon?: string; // додано для іконки курсу
}

export function CourseCard({
  courseName,
  author,
  duration,
  rating,
  progress = 0,
  status,
  courseIcon = "/germanFlag.webp", // замінити на реальний шлях до іконки
}: CourseCardProps) {
  const buttonConfig = {
    new: { text: "View Course", bg: "bg-black", hover: "hover:bg-gray-800" },
    inProgress: {
      text: "Continue",
      bg: "bg-black",
      hover: "hover:bg-gray-800",
    },
    completed: {
      text: "Completed",
      bg: "bg-gray-400",
      hover: "hover:bg-gray-500",
    },
  };

  return (
    <div
      className={`flex items-center cursor-pointer shadow-md rounded-xl p-4 mt-6 transition-transform hover:scale-105 ${
        status === "new" ? "bg-white hover:shadow-lg" : ""
      } ${status === "inProgress" ? "bg-green-0 hover:shadow-lg" : ""} ${
        status === "completed" ? "bg-gray-100" : ""
      }`}
    >
      {/* Іконка курсу */}
      <div className="mr-4">
        <Image
          src={courseIcon} // замініть на реальний шлях до іконки
          width={60}
          height={60}
          alt="flag"
          className="rounded-full"
        />
      </div>

      <div className="flex-1">
        <p className="font-semibold text-lg">{courseName}</p>
        <p className="text-gray-500 text-sm flex gap-4 items-center">
          by {author}{" "}
          <Badge
            variant="secondary"
            className="bg-blue-500 text-white dark:bg-blue-600"
          >
            <BadgeCheckIcon /> Verified
          </Badge>
        </p>

        {status === "inProgress" && (
          <div className="w-full bg-gray-200 h-2 rounded-full mt-2">
            <div
              className="bg-green-500 h-2 rounded-full transition-all"
              style={{ width: `${progress}%` }}
            />
          </div>
        )}
      </div>

      <div className="flex flex-col items-end ml-4">
        <div className="flex gap-2 text-gray-500 text-sm mb-2">
          <span>{duration}</span>
          <span>⭐ {rating}</span>
        </div>

        <Button
          className={`px-4 py-1 text-white rounded-lg transition ${buttonConfig[status].bg} ${buttonConfig[status].hover}`}
          disabled={status === "completed"}
        >
          {buttonConfig[status].text}
        </Button>
      </div>
    </div>
  );
}

