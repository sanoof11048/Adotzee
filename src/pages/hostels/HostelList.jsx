import React, { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useHostel } from '../../Context/HostelContext';
import Navbar from '../../components/common/Navbar';
import Footer from '../../components/common/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faMapMarkerAlt, 
  faStar, 
  faRupeeSign, 
  faWifi, 
  faUtensils, 
  faCar, 
  faDumbbell,
  faShieldAlt,
  faBook,
  faSnowflake,
  faSearch,
  faFilter
} from '@fortawesome/free-solid-svg-icons';

const HostelList = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { getCollegeById, getPropertiesByCollegeId, colleges } = useHostel();
  
  const collegeId = searchParams.get('collegeId') || '1';
  const [selectedCollege, setSelectedCollege] = useState(collegeId);
  const [priceFilter, setPriceFilter] = useState('all');
  const [typeFilter, setTypeFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const college = getCollegeById(selectedCollege);
  const allProperties = getPropertiesByCollegeId(selectedCollege);

  // Filter properties based on filters
  const filteredProperties = allProperties.filter(property => {
    const matchesSearch = property.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         property.location.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesPrice = priceFilter === 'all' || 
                        (priceFilter === 'low' && property.price <= 3500) ||
                        (priceFilter === 'medium' && property.price > 3500 && property.price <= 4500) ||
                        (priceFilter === 'high' && property.price > 4500);
    
    const matchesType = typeFilter === 'all' || property.type.toLowerCase() === typeFilter.toLowerCase();
    
    return matchesSearch && matchesPrice && matchesType;
  });

  const getAmenityIcon = (amenity) => {
    const iconMap = {
      'WiFi': faWifi,
      'Food': faUtensils,
      'Parking': faCar,
      'Gym': faDumbbell,
      'Security': faShieldAlt,
      'Library': faBook,
      'Study Room': faBook,
      'AC': faSnowflake,
      'Study Area': faBook
    };
    return iconMap[amenity] || faShieldAlt;
  };

  const handleCollegeChange = (newCollegeId) => {
    setSelectedCollege(newCollegeId);
    navigate(`/hostels?collegeId=${newCollegeId}`);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="pt-24 pb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Find Your Perfect Accommodation
            </h1>
            <p className="text-lg text-gray-600">
              Discover comfortable PGs and Hostels near your college
            </p>
          </div>

          {/* College Selector */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Select Your College</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {colleges.map(college => (
                <button
                  key={college.id}
                  onClick={() => handleCollegeChange(college.id)}
                  className={`p-4 rounded-lg border-2 transition-all duration-200 ${
                    selectedCollege == college.id
                      ? 'border-blue-500 bg-blue-50 text-blue-700'
                      : 'border-gray-200 hover:border-blue-300 hover:bg-gray-50'
                  }`}
                >
                  <h3 className="font-semibold">{college.name}</h3>
                  <p className="text-sm text-gray-600">{college.location}</p>
                </button>
              ))}
            </div>
          </div>

          {/* Filters */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <div className="flex flex-wrap items-center gap-4">
              <div className="flex items-center space-x-2">
                <FontAwesomeIcon icon={faSearch} className="text-gray-400" />
                <input
                  type="text"
                  placeholder="Search by name or location..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              
              <div className="flex items-center space-x-2">
                <FontAwesomeIcon icon={faFilter} className="text-gray-400" />
                <select
                  value={priceFilter}
                  onChange={(e) => setPriceFilter(e.target.value)}
                  className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="all">All Prices</option>
                  <option value="low">Under ₹3,500</option>
                  <option value="medium">₹3,500 - ₹4,500</option>
                  <option value="high">Above ₹4,500</option>
                </select>
              </div>

              <select
                value={typeFilter}
                onChange={(e) => setTypeFilter(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="all">All Types</option>
                <option value="pg">PG</option>
                <option value="hostel">Hostel</option>
              </select>
            </div>
          </div>

          {/* Results Header */}
          {college && (
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-gray-800">
                Accommodations near {college.name}
              </h2>
              <p className="text-gray-600">
                {filteredProperties.length} properties found
              </p>
            </div>
          )}

          {/* Properties Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProperties.map(property => (
              <div
                key={property.id}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 cursor-pointer"
                onClick={() => navigate(`/hostels/${property.id}`)}
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={property.images[0]}
                    alt={property.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                      property.type === 'PG' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-blue-100 text-blue-800'
                    }`}>
                      {property.type}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4 bg-white rounded-full px-2 py-1">
                    <div className="flex items-center">
                      <FontAwesomeIcon icon={faStar} className="text-yellow-400 text-sm mr-1" />
                      <span className="text-sm font-semibold">{property.rating}</span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{property.name}</h3>
                  
                  <div className="flex items-center text-gray-600 mb-2">
                    <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2" />
                    <span className="text-sm">{property.distance}</span>
                  </div>

                  <div className="flex items-center text-2xl font-bold text-blue-600 mb-4">
                    <FontAwesomeIcon icon={faRupeeSign} className="mr-1" />
                    {property.price.toLocaleString()}
                    <span className="text-sm text-gray-500 ml-1">/month</span>
                  </div>

                  {/* Amenities */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {property.amenities.slice(0, 4).map((amenity, index) => (
                      <div key={index} className="flex items-center bg-gray-100 px-2 py-1 rounded-full">
                        <FontAwesomeIcon 
                          icon={getAmenityIcon(amenity)} 
                          className="text-gray-600 text-xs mr-1" 
                        />
                        <span className="text-xs text-gray-700">{amenity}</span>
                      </div>
                    ))}
                    {property.amenities.length > 4 && (
                      <span className="text-xs text-gray-500 px-2 py-1">
                        +{property.amenities.length - 4} more
                      </span>
                    )}
                  </div>

                  {/* Availability */}
                  <div className="flex justify-between items-center">
                    <span className={`text-sm font-semibold ${
                      property.availableRooms > 0 ? 'text-green-600' : 'text-red-600'
                    }`}>
                      {property.availableRooms > 0 
                        ? `${property.availableRooms} rooms available` 
                        : 'No rooms available'
                      }
                    </span>
                    <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200">
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* No Results */}
          {filteredProperties.length === 0 && (
            <div className="text-center py-12">
              <div className="text-gray-400 text-6xl mb-4">🏠</div>
              <h3 className="text-xl font-semibold text-gray-600 mb-2">No properties found</h3>
              <p className="text-gray-500">Try adjusting your filters or search terms</p>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default HostelList;