import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUniversity,
  faBookOpen,
  faChalkboardTeacher,
  IconDefinition,
} from "@fortawesome/free-solid-svg-icons";
import AOS from "aos";
import "aos/dist/aos.css";

/* -------------------- Types -------------------- */

interface Stat {
  label: string;
  target: number;
  icon: IconDefinition;
}

interface AnimatedCounterProps {
  target: number;
  suffix?: string;
}

interface StatCardProps extends Stat {
  delay: number;
}

/* -------------------- Data -------------------- */

const stats: Stat[] = [
  { label: "Colleges", target: 50, icon: faUniversity },
  { label: "Courses Offered", target: 30, icon: faBookOpen },
  { label: "Add-on Courses", target: 200, icon: faChalkboardTeacher },
];

/* -------------------- Components -------------------- */

const AnimatedCounter: React.FC<AnimatedCounterProps> = ({
  target,
  suffix = "",
}) => {
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    const duration = 2000;
    const interval = 16;
    const increment = target / (duration / interval);

    const timer = window.setInterval(() => {
      setCount((prev) =>
        prev + increment >= target ? target : prev + increment
      );
    }, interval);

    return () => window.clearInterval(timer);
  }, [target]);

  return (
    <span className="text-5xl font-bold text-blue-600">
      {Math.floor(count)}
      {suffix}
    </span>
  );
};

const StatCard: React.FC<StatCardProps> = ({
  label,
  target,
  delay,
  icon,
}) => {
  return (
    <div
      className="text-center bg-white p-12 rounded-lg shadow-lg md:w-[20%] w-[80%] cursor-pointer hover:scale-110 transition-transform"
      data-aos="fade-up"
      data-aos-delay={delay}
    >
      <FontAwesomeIcon
        icon={icon}
        className="text-4xl text-blue-600 m-1 me-3"
      />
      <AnimatedCounter target={target} suffix="+" />
      <p className="text-xl text-gray-700 mt-2">{label}</p>
    </div>
  );
};

/* -------------------- Main -------------------- */

const Counts: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 1500,
      once: true,
    });
  }, []);

  return (
    <div className="bg-linear-to-r from-blue-50 to-gray-100 py-16 md:py-36 w-full">
      <div className="mx-auto">
        <div
          className="flex md:flex-row flex-col mx-10 md:mx-0 space-y-12 md:space-y-0 md:space-x-12 justify-center items-center"
          data-aos="fade-up"
        >
          {stats.map((stat, index) => (
            <StatCard
              key={stat.label}
              {...stat}
              delay={index * 200}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Counts;