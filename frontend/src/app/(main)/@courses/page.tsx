import { CourseCard } from "@/featuers/home/components/CourseCard";
import Link from "next/link";

const menuItems = [
  { name: "All Courses", href: "/courses" },
  { name: "The Newest", href: "/newest" },
  { name: "Top Rated", href: "/top-rated" },
  { name: "Most Popular", href: "/popular" },
];

export default function Home() {
  return (
    <div className="mt-6">
      <h2 className="text-2xl font-semibold mb-4">My Courses</h2>

      <div className="flex gap-4 mb-6">
        {menuItems.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className="text-gray-500 hover:text-gray-800 transition-colors duration-200"
          >
            {item.name}
          </Link>
        ))}
      </div>

      <CourseCard
        author="John Doe"
        courseName="Learn React"
        progress={50}
        duration={"30 minutes"}
        rating={4.5}
        status="new"
      />
      <CourseCard
        author="John Doe"
        courseName="Learn React"
        progress={50}
        duration={"30 minutes"}
        rating={4.5}
        status="new"
      />
      <CourseCard
        author="John Doe"
        courseName="Learn React"
        progress={50}
        duration={"30 minutes"}
        rating={4.5}
        status="completed"
      />
    </div>
  );
}

