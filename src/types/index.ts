// src/types/api.ts

/** ========================= GENERIC API RESPONSE ========================= */
export interface ApiResponse<T> {
  success: boolean;
  message: string;
  data: T;
}

/** ========================= DASHBOARD STATS ========================= */
export interface DashboardStats {
  totalCourses: number;
  totalColleges: number;
  totalAddons: number;
  ugCourses: number;
  pgCourses: number;
}

/** ========================= COURSE TYPES ========================= */
export interface Course {
  id: number;
  name: string;
  duration: string;
  type: 'UG' | 'PG';
  stream: string; // e.g., Science, Arts
  addons?: Addon[];
}

export interface CourseCreateDTO {
  name: string;
  duration?: string;
  type: 'UG' | 'PG';
  stream: string;
}

export interface CourseUpdateDTO extends CourseCreateDTO {
  id: number;
}

export interface CourseResponseDTO extends CourseCreateDTO {
  id: number;
  addons?: AddonResponseDTO[];
}

/** ========================= COLLEGE TYPES ========================= */
export interface College {
  id: number;
  name: string;
  address: string;
  latitude: number;
  longitude: number;
  googleMapsUrl?: string;
  placeId?: string;
  isRecommended: boolean;
  addons?: Addon[];
}

export interface CollegeCreateDTO {
  name: string;
  address: string;
  latitude?: number;
  longitude?: number;
  googleMapsUrl?: string;
  placeId?: string;
  isRecommended: boolean;
  addonIds?: number[];
}

export interface CollegeUpdateDTO extends CollegeCreateDTO {
  id: number;
}

export interface CollegeResponseDTO extends CollegeCreateDTO {
  id: number;
  addons: string[]
}

/** ========================= ADDON TYPES ========================= */
export interface Addon {
  id: number;
  name: string;
  courseId: number;
  courseName: string;
  collegeIds?: number[];
}

export interface AddonCreateDTO {
  name: string;
  courseId: number;
  collegeIds: number[];
}

export interface AddonUpdateDTO extends AddonCreateDTO {
  id: number;
}

export interface AddonResponseDTO {
  id: number;
  name: string;
  courseName: string;
  collegeNames: string[]; // Names of associated colleges
}

/** ========================= OPTIONAL UTILITY TYPES ========================= */
export type CourseType = 'UG' | 'PG';
export type StreamType = 'Science' | 'Arts' | 'Commerce' | string;


interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'danger' | 'ghost' | 'outline' | 'minimal' | 'soft' | 'subtle' | 'muted' | 'text';
  size?: 'sm' | 'md' | 'lg';
  icon?: React.ElementType;
  iconPosition?: 'left' | 'right';
  loading?: boolean;
  fullWidth?: boolean;
}