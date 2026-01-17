// TypePage.tsx
import React from "react";
import { GraduationCap, BookOpen } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useCourseFinderContext } from "../hooks/CourseFinderContext";

const TypePage = () => {
  const { selection, setType } = useCourseFinderContext();
  const navigate = useNavigate();

  const types = [
    {
      id: "UG",
      title: "Undergraduate (UG)",
      subtitle: "Bachelor's Degree Programs",
      description:
        "Build a strong foundation and open doors to diverse career paths.",
      icon: GraduationCap,
      color: "blue",
      gradient: "from-blue-500 to-blue-600",
      features: ["3-4 Years Duration", "Foundation Level", "Wide Career Options"],
    },
    {
      id: "PG",
      title: "Postgraduate (PG)",
      subtitle: "Master's Degree Programs",
      description:
        "Enhance your expertise and specialize in your chosen field.",
      icon: BookOpen,
      color: "purple",
      gradient: "from-purple-500 to-purple-600",
      features: ["1-2 Years Duration", "Advanced Level", "Specialization"],
    },
  ];

  const handleSelect = (typeId: string) => {
    setType(typeId);
    navigate(`/explore/${typeId}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50/30 to-purple-50/20 p-4 sm:p-8">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
          Choose Your Course Level
        </h1>
        <p className="text-gray-600 mb-12">
          Are you seeking an Undergraduate or Postgraduate program? Your choice
          determines the suitable courses and streams.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {types.map((type) => {
            const Icon = type.icon;
            const isSelected = selection.type === type.id;
            return (
              <div
                key={type.id}
                onClick={() => handleSelect(type.id)}
                className={`relative bg-white rounded-3xl p-8 border-2 cursor-pointer transition-all duration-300 ${
                  isSelected
                    ? `border-${type.color}-500 shadow-2xl scale-105`
                    : `border-gray-200 hover:border-${type.color}-400 hover:shadow-lg`
                }`}
              >
                <div
                  className={`inline-flex p-4 rounded-2xl mb-6 bg-gradient-to-br ${type.gradient}`}
                >
                  <Icon size={32} className="text-white" />
                </div>

                <h2 className="text-2xl font-bold mb-2">{type.title}</h2>
                <p className="text-sm text-gray-500 mb-4">{type.subtitle}</p>
                <p className="text-gray-600 mb-6">{type.description}</p>

                <div className="flex flex-wrap gap-2">
                  {type.features.map((feat, idx) => (
                    <span
                      key={idx}
                      className={`px-3 py-1.5 rounded-full text-xs font-medium bg-${type.color}-50 text-${type.color}-700 border border-${type.color}-200`}
                    >
                      {feat}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TypePage;