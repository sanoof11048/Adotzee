import React from 'react';
import { GraduationCap, Building2, Plus, Users, BookOpen, Award, BarChart3 } from 'lucide-react';
import StatsCard from './StatsCard';
import Card from '../UI/Card';
import Button from '../UI/Button';
import { useApi } from '../../hooks/useApi';
import { apiService } from '../../services/api';
import { AddonResponseDTO, CollegeResponseDTO, CourseResponseDTO } from '../../../types';

const Dashboard: React.FC = () => {
  const { data: coursesResponse, loading: coursesLoading } = useApi<CourseResponseDTO[]>(apiService.getCourses);
  const { data: collegesResponse, loading: collegesLoading } = useApi<CollegeResponseDTO[]>(apiService.getColleges);
  const { data: addonsResponse, loading: addonsLoading } = useApi<AddonResponseDTO[]>(apiService.getAddons);

  const courses = coursesResponse || [];
  const colleges = collegesResponse || [];
  const addons = addonsResponse || [];
  const loading = coursesLoading || collegesLoading || addonsLoading;

  const stats = {
    totalCourses: courses.length,
    totalColleges: colleges.length,
    totalAddons: addons.length,
    ugCourses: courses.filter(c => c.type === 'UG').length,
    pgCourses: courses.filter(c => c.type === 'PG').length,
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
        <div>
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Dashboard</h1>
          <p className="text-lg text-gray-600">Welcome back! Here's your platform overview.</p>
        </div>
        <div className="flex space-x-3 mt-4 lg:mt-0">
          <Button variant="outline" icon={BarChart3}>View Reports</Button>
          <Button icon={Plus}>Quick Add</Button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatsCard
          title="Total Courses"
          value={stats.totalCourses}
          subtitle={`${stats.ugCourses} UG, ${stats.pgCourses} PG`}
          icon={GraduationCap}
          color="blue"
          trend={8.2}
          loading={loading}
        />
        <StatsCard
          title="Total Colleges"
          value={stats.totalColleges}
          icon={Building2}
          color="green"
          trend={12.5}
          loading={loading}
        />
        <StatsCard
          title="Total Addons"
          value={stats.totalAddons}
          icon={Plus}
          color="purple"
          trend={-2.1}
          loading={loading}
        />
        <StatsCard
          title="Active Users"
          value={1247}
          icon={Users}
          color="orange"
          subtitle="This month"
          trend={15.3}
          loading={loading}
        />
      </div>

      {/* Placeholder Cards */}
      <Card hover>
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-bold text-gray-900">Platform Analytics</h3>
          <div className="flex space-x-2">
            <Button variant="ghost" size="sm">7D</Button>
            <Button variant="ghost" size="sm">30D</Button>
            <Button size="sm">90D</Button>
          </div>
        </div>
        <div className="h-64 bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl flex items-center justify-center">
          <div className="text-center">
            <BarChart3 size={48} className="text-gray-400 mx-auto mb-4" />
            <p className="text-gray-600 font-medium">Analytics Chart Coming Soon</p>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Dashboard;
