// StreamPage.tsx
import React, { useEffect } from "react";
import { FlaskConical, TrendingUp, Users } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";
import { useCourseFinderContext } from "../hooks/CourseFinderContext";

const StreamPage = () => {
  const { type } = useParams();
  const navigate = useNavigate();
  const { selection, setStream } = useCourseFinderContext();

  const streams = [
    {
      id: "Science",
      title: "Science",
      description:
        "Ideal for students interested in experiments, research, and technical innovation.",
      icon: FlaskConical,
      color: "green",
      gradient: "from-green-500 to-emerald-600",
    },
    {
      id: "Commerce",
      title: "Commerce",
      description: "Best suited for students inclined towards business and finance.",
      icon: TrendingUp,
      color: "orange",
      gradient: "from-orange-500 to-amber-600",
    },
    {
      id: "Humanities",
      title: "Humanities",
      description: "Perfect for students passionate about society, culture, and human behavior.",
      icon: Users,
      color: "pink",
      gradient: "from-pink-500 to-rose-600",
    },
  ];

  useEffect(() => {
    if (!selection.type && type) {
      // If page refreshed, fallback to type from URL
      setStream("");
    }
  }, [selection.type, type]);

  const handleSelect = (streamId: string) => {
    setStream(streamId);
    navigate(`/explore/${type}/${streamId}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-purple-50/30 to-pink-50/20 p-4 sm:p-8">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-4">Select Your Stream</h1>
        <p className="text-gray-600 mb-12">
          Pick the stream that aligns with your high school focus or your career interests.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {streams.map((stream) => {
            const Icon = stream.icon;
            const isSelected = selection.stream === stream.id;

            return (
              <div
                key={stream.id}
                onClick={() => handleSelect(stream.id)}
                className={`relative bg-white rounded-3xl p-6 border-2 cursor-pointer transition-all duration-300 ${
                  isSelected
                    ? `border-${stream.color}-500 shadow-2xl scale-105`
                    : `border-gray-200 hover:border-${stream.color}-400 hover:shadow-lg`
                }`}
              >
                <div className={`inline-flex p-4 rounded-2xl mb-4 bg-gradient-to-br ${stream.gradient}`}>
                  <Icon size={28} className="text-white" />
                </div>

                <h2 className="text-xl font-bold mb-2">{stream.title}</h2>
                <p className="text-sm text-gray-600 mb-4">{stream.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default StreamPage;
