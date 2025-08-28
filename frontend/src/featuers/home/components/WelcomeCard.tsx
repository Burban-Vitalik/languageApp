import Image from "next/image";

export function WelcomeCard() {
  return (
    <div className="bg-gray-50 p-6 rounded-2xl flex shadow-xl items-center">
      <div className="flex-1">
        <p className="text-2xl font-extrabold text-gray-800 mb-1">
          Hello Josh!
        </p>
        <p className="text-gray-500 text-sm">It is good to see you again.</p>
      </div>
      <div className="flex-shrink-0">
        <div className="w-24 h-24 rounded-full overflow-hidden shadow-lg">
          <Image
            src="/welcomePerson.png"
            width={96}
            height={96}
            alt="Welcome"
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
}

