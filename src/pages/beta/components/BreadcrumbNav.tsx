// ./pages/beta/components/BreadcrumbNav.tsx
import { useNavigate } from "react-router-dom";
import { useCourseFinderContext } from "../hooks/CourseFinderContext";

// Helper to format labels nicely
const formatLabel = (text: string) => {
  if (!text) return "";
  return text.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
};

const BreadcrumbNav = () => {
  const navigate = useNavigate();
  const { selection } = useCourseFinderContext();

  // Build breadcrumb steps based on current selection
  const segments = [
    { label: "Home", path: "/" },
    selection.type && { label: selection.type, path: `/explore/${selection.type}` },
    selection.stream && { label: selection.stream, path: `/explore/${selection.type}/${selection.stream}` },
    selection.course && { label: selection.course.name, path: `/explore/${selection.type}/${selection.stream}/${selection.course.name}` },
    selection.addon && { label: selection.addon.name, path: `/explore/${selection.type}/${selection.stream}/${selection.course.name}/${selection.addon.name}/colleges` },
  ].filter(Boolean); // remove falsy values

  return (
    <div className="sticky top-0 z-50 bg-white border-b shadow-sm">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center gap-2 text-sm overflow-x-auto">
        {segments.map((seg, index) => (
          <div key={index} className="flex items-center gap-2 whitespace-nowrap">
            {index !== 0 && <span className="text-gray-400">›</span>}
            <span
              onClick={() => navigate(seg.path)}
              className="cursor-pointer text-blue-600 hover:underline"
            >
              {formatLabel(seg.label)}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BreadcrumbNav;
