import React, { createContext, useContext, useState } from 'react';

const HostelContext = createContext();

export const useHostel = () => {
  const context = useContext(HostelContext);
  if (!context) {
    throw new Error('useHostel must be used within a HostelProvider');
  }
  return context;
};

export const HostelProvider = ({ children }) => {
  // Static data for colleges
  const colleges = [
    { id: 1, name: "ABC Engineering College", location: "Bangalore" },
    { id: 2, name: "XYZ Arts & Science College", location: "Bangalore" },
    { id: 3, name: "PQR Commerce College", location: "Bangalore" }
  ];

  // Static data for properties/hostels
  const properties = [
    {
      id: 101,
      collegeId: 1,
      name: "Sunrise PG",
      type: "PG",
      price: 3500,
      location: "Near ABC Engineering College",
      distance: "0.5 km from college",
      amenities: ["WiFi", "Food", "Laundry", "AC", "Security"],
      images: [
        "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/1743229/pexels-photo-1743229.jpeg?auto=compress&cs=tinysrgb&w=800"
      ],
      description: "Comfortable PG accommodation with all modern amenities. Perfect for engineering students.",
      rating: 4.5,
      totalRooms: 20,
      availableRooms: 5,
      contactNumber: "+91 9876543210",
      ownerName: "Mr. Rajesh Kumar"
    },
    {
      id: 102,
      collegeId: 1,
      name: "Green Valley Hostel",
      type: "Hostel",
      price: 4200,
      location: "Near ABC Engineering College",
      distance: "1.2 km from college",
      amenities: ["WiFi", "Food", "Gym", "Study Room", "Security", "Parking"],
      images: [
        "https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg?auto=compress&cs=tinysrgb&w=800"
      ],
      description: "Premium hostel facility with gym and study rooms. Ideal for focused students.",
      rating: 4.8,
      totalRooms: 30,
      availableRooms: 8,
      contactNumber: "+91 9876543211",
      ownerName: "Mrs. Priya Sharma"
    },
    {
      id: 103,
      collegeId: 2,
      name: "Student Paradise PG",
      type: "PG",
      price: 3200,
      location: "Near XYZ Arts & Science College",
      distance: "0.8 km from college",
      amenities: ["WiFi", "Food", "Laundry", "Security", "Common Room"],
      images: [
        "https://images.pexels.com/photos/1571457/pexels-photo-1571457.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/271743/pexels-photo-271743.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/1571461/pexels-photo-1571461.jpeg?auto=compress&cs=tinysrgb&w=800"
      ],
      description: "Affordable and comfortable PG for arts and science students with homely environment.",
      rating: 4.2,
      totalRooms: 15,
      availableRooms: 3,
      contactNumber: "+91 9876543212",
      ownerName: "Mr. Suresh Patel"
    },
    {
      id: 104,
      collegeId: 2,
      name: "Elite Student Hostel",
      type: "Hostel",
      price: 4800,
      location: "Near XYZ Arts & Science College",
      distance: "0.3 km from college",
      amenities: ["WiFi", "Food", "AC", "Gym", "Library", "Security", "Parking", "Recreation Room"],
      images: [
        "https://images.pexels.com/photos/1571464/pexels-photo-1571464.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/271639/pexels-photo-271639.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/1571459/pexels-photo-1571459.jpeg?auto=compress&cs=tinysrgb&w=800"
      ],
      description: "Premium hostel with all luxury amenities. Perfect for students who want the best facilities.",
      rating: 4.9,
      totalRooms: 25,
      availableRooms: 12,
      contactNumber: "+91 9876543213",
      ownerName: "Dr. Anita Reddy"
    },
    {
      id: 105,
      collegeId: 3,
      name: "Commerce Hub PG",
      type: "PG",
      price: 3800,
      location: "Near PQR Commerce College",
      distance: "0.6 km from college",
      amenities: ["WiFi", "Food", "Laundry", "Study Area", "Security"],
      images: [
        "https://images.pexels.com/photos/1571462/pexels-photo-1571462.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/271816/pexels-photo-271816.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/1571465/pexels-photo-1571465.jpeg?auto=compress&cs=tinysrgb&w=800"
      ],
      description: "Specially designed for commerce students with dedicated study areas and peaceful environment.",
      rating: 4.3,
      totalRooms: 18,
      availableRooms: 6,
      contactNumber: "+91 9876543214",
      ownerName: "Mr. Vikram Singh"
    }
  ];

  // State for bookings
  const [bookings, setBookings] = useState([]);

  // Helper functions
  const getCollegeById = (collegeId) => {
    return colleges.find(college => college.id === parseInt(collegeId));
  };

  const getPropertiesByCollegeId = (collegeId) => {
    return properties.filter(property => property.collegeId === parseInt(collegeId));
  };

  const getPropertyById = (propertyId) => {
    return properties.find(property => property.id === parseInt(propertyId));
  };

  const createBooking = (bookingData) => {
    const newBooking = {
      id: Date.now(),
      ...bookingData,
      createdAt: new Date().toISOString(),
      status: 'pending'
    };
    setBookings(prev => [...prev, newBooking]);
    return newBooking;
  };

  const value = {
    colleges,
    properties,
    bookings,
    getCollegeById,
    getPropertiesByCollegeId,
    getPropertyById,
    createBooking
  };

  return (
    <HostelContext.Provider value={value}>
      {children}
    </HostelContext.Provider>
  );
};