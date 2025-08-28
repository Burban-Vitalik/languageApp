import { CourseCard } from "@/featuers/home/components/CourseCard";
import { WelcomeCard } from "@/featuers/home/components/WelcomeCard";

export default function Home() {
  return (
    <div>
      <div className="">
        <WelcomeCard />
        <CourseCard
          author="John Doe"
          courseName="Learn React"
          progress={50}
          duration={"30 minutes"}
          rating={0}
          status={"inProgress"}
          courseIcon="/flagIcon.png"
        />
      </div>
    </div>
  );
}

