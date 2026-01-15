// src/services/api.ts
import axiosInstance from './axiosInstance';
import { 
  CourseResponseDTO,
  CollegeCreateDTO,
  CollegeResponseDTO,
  CourseCreateDTO,
  AddonCreateDTO,
  AddonResponseDTO,
  ApiResponse
 } from '../../types';

class ApiService {
  /* ========================= COURSES ========================= */

  async getCourses() {
    return axiosInstance.get<ApiResponse<CourseResponseDTO[]>>('/courses');
  }

  async getCourse(id: number) {
    return axiosInstance.get<ApiResponse<CourseResponseDTO>>(`/courses/${id}`);
  }

  async createCourse(data: CourseCreateDTO) {
    return axiosInstance.post<ApiResponse<string>>('/courses', data);
  }

  async updateCourse(data: CourseCreateDTO & { id: number }) {
    return axiosInstance.put<ApiResponse<string>>('/courses', data);
  }

  async deleteCourse(id: number) {
    return axiosInstance.delete<ApiResponse<string>>(`/courses/${id}`);
  }

  async filterCourses(type: string, stream: string) {
    return axiosInstance.get<ApiResponse<CourseResponseDTO[]>>('/courses/filter', {
      params: { type, stream }
    });
  }

  async getCourseStats() {
    return axiosInstance.get<ApiResponse<any>>('/courses/stats');
  }

  async getAddonsForCourse(courseId: number) {
    return axiosInstance.get<ApiResponse<AddonResponseDTO[]>>(
      `/courses/${courseId}/addons`
    );
  }

  /* ========================= COLLEGES ========================= */

  async getColleges() {
    return axiosInstance.get<ApiResponse<CollegeResponseDTO[]>>('/colleges');
  }

  async getCollege(id: number) {
    return axiosInstance.get<ApiResponse<CollegeResponseDTO>>(`/colleges/${id}`);
  }

  async createCollege(data: CollegeCreateDTO) {
    return axiosInstance.post<ApiResponse<string>>('/colleges', data);
  }

  async updateCollege(data: CollegeCreateDTO & { id: number }) {
    return axiosInstance.put<ApiResponse<string>>('/colleges', data);
  }

  async deleteCollege(id: number) {
    return axiosInstance.delete<ApiResponse<string>>(`/colleges/${id}`);
  }

  /* ========================= ADDONS ========================= */

  async getAddons() {
    return axiosInstance.get<ApiResponse<AddonResponseDTO[]>>('/addons');
  }

  async getAddon(id: number) {
    return axiosInstance.get<ApiResponse<AddonResponseDTO>>(`/addons/${id}`);
  }

  async createAddon(data: AddonCreateDTO) {
    return axiosInstance.post<ApiResponse<string>>('/addons', data);
  }

  async updateAddon(id: number, data: AddonCreateDTO) {
    return axiosInstance.put<ApiResponse<string>>(`/addons/${id}`, {
      ...data,
      id
    });
  }

  async deleteAddon(id: number) {
    return axiosInstance.delete<ApiResponse<string>>(`/addons/${id}`);
  }

  async getAddonsByCourse(courseId: number) {
    return axiosInstance.get<ApiResponse<AddonResponseDTO[]>>(
      `/addons/by-course/${courseId}`
    );
  }

  async getCollegesByAddon(addonId: number) {
    return axiosInstance.get<ApiResponse<CollegeResponseDTO[]>>(
      `/addons/${addonId}/colleges`
    );
  }
}

export const apiService = new ApiService();
