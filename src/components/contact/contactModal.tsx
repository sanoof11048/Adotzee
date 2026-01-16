import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";
import { useCourse } from "../../Context/courseData";

/* ---------- Types ---------- */

interface AdmissionModalProps {
  isOpen: boolean;
  closeModal: () => void;
}

interface StudentData {
  name: string;
  phone: string;
  stream: "" | "Science" | "Commerce" | "Humanities";
  course: string;
  college_location: string;
  remarks: string;
}

interface CoursesData {
  science: string[];
  commerce: string[];
  humanities: string[];
}

/* ---------- Component ---------- */

const AdmissionModal: React.FC<AdmissionModalProps> = ({
  isOpen,
  closeModal,
}) => {
  const [studentData, setStudentData] = useState<StudentData>({
    name: "",
    phone: "",
    stream: "",
    course: "",
    college_location: "",
    remarks: "",
  });

  const [course, setCourse] = useState<string[]>([]);
  const { coursesData } = useCourse() as { coursesData: CoursesData };

  /* ---------- Reset form when modal opens ---------- */
  useEffect(() => {
    if (isOpen) {
      setStudentData({
        name: "",
        phone: "",
        stream: "",
        course: "",
        college_location: "",
        remarks: "",
      });
    }
  }, [isOpen]);

  /* ---------- Update courses based on stream ---------- */
  useEffect(() => {
    if (!studentData.stream) return;

    switch (studentData.stream) {
      case "Science":
        setCourse(coursesData.science);
        break;
      case "Commerce":
        setCourse(coursesData.commerce);
        break;
      case "Humanities":
        setCourse(coursesData.humanities);
        break;
      default:
        setCourse([]);
    }
  }, [studentData.stream, coursesData]);

  /* ---------- Submit Handler ---------- */
  const handleSave = (): void => {
    Swal.fire({
      title: "Confirm Admission?",
      text: "Are you sure you want to submit the admission request?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Submit",
    }).then((result) => {
      if (!result.isConfirmed) return;

      Swal.fire({
        title: "Loading...",
        text: "Please wait while we fetch the data.",
        allowOutsideClick: false,
        didOpen: () => Swal.showLoading(),
      });

      const formDataSend = new FormData();

      (Object.entries(studentData) as [keyof StudentData, string][]).forEach(
        ([key, value]) => {
          formDataSend.append(key, value);
        }
      );

      fetch(
        "https://script.google.com/macros/s/AKfycbxsdxL0fooufrcqwW5VEGSAgVWtYexmV-CoUguotifyETrOZJbU6j4HQ7C8HOjF6Gs/exec",
        {
          method: "POST",
          body: formDataSend,
        }
      )
        .then((response) => {
          if (!response.ok) {
            throw new Error("Failed to submit admission request");
          }
          return response.json();
        })
        .then(() => {
          Swal.fire(
            "Submitted!",
            "The admission request has been sent successfully.",
            "success"
          );
          closeModal();
        })
        .catch(() => {
          Swal.fire(
            "Error!",
            "Something went wrong while submitting the form. Please try again later.",
            "error"
          );
        });
    });
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50"
      onClick={closeModal}
    >
      <div
        className="bg-white p-8 rounded-lg max-w-lg w-full shadow-lg"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">
          Admission Enquiry Form
        </h2>

        <div className="space-y-1">
          {/* Full Name */}
          <input
            type="text"
            value={studentData.name}
            onChange={(e) =>
              setStudentData({ ...studentData, name: e.target.value })
            }
            placeholder="Enter your full name"
            className="w-full p-3 border rounded-lg"
          />

          {/* Phone */}
          <input
            type="tel"
            value={studentData.phone}
            onChange={(e) =>
              setStudentData({ ...studentData, phone: e.target.value })
            }
            placeholder="Enter your phone number"
            className="w-full p-3 border rounded-lg"
          />

          {/* Stream */}
          <select
            value={studentData.stream}
            onChange={(e) =>
              setStudentData({
                ...studentData,
                stream: e.target.value as StudentData["stream"],
              })
            }
            className="w-full p-3 border rounded-lg"
          >
            <option value="">Select Stream</option>
            <option value="Science">Science</option>
            <option value="Commerce">Commerce</option>
            <option value="Humanities">Humanities</option>
          </select>

          {/* Course */}
          {studentData.stream && (
            <select
              value={studentData.course}
              onChange={(e) =>
                setStudentData({ ...studentData, course: e.target.value })
              }
              className="w-full p-3 border rounded-lg"
            >
              <option value="">Select Course</option>
              {course.map((item, index) => (
                <option key={index} value={item}>
                  {item}
                </option>
              ))}
            </select>
          )}

          {/* College Location */}
          <input
            value={studentData.college_location}
            onChange={(e) =>
              setStudentData({
                ...studentData,
                college_location: e.target.value,
              })
            }
            placeholder="Preferred college location"
            className="w-full p-3 border rounded-lg"
          />

          {/* Remarks */}
          <textarea
            rows={3}
            value={studentData.remarks}
            onChange={(e) =>
              setStudentData({ ...studentData, remarks: e.target.value })
            }
            placeholder="Additional remarks"
            className="w-full p-3 border rounded-lg"
          />
        </div>

        <div className="flex justify-end mt-4 space-x-4">
          <button
            onClick={closeModal}
            className="px-6 py-2 bg-gray-500 text-white rounded-lg"
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            className="px-6 py-2 bg-indigo-600 text-white rounded-lg"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdmissionModal;
