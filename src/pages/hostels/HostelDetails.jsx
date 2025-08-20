import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
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
  faPhone,
  faUser,
  faArrowLeft,
  faCalendarAlt,
  faCheckCircle,
  faTimesCircle
} from '@fortawesome/free-solid-svg-icons';
import toast from 'react-hot-toast';

const HostelDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { getPropertyById, createBooking } = useHostel();
  
  const property = getPropertyById(id);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [showBookingForm, setShowBookingForm] = useState(false);
  const [bookingData, setBookingData] = useState({
    studentName: '',
    email: '',
    phone: '',
    fromDate: '',
    toDate: '',
    roomType: 'single',
    specialRequests: ''
  });

  if (!property) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Property not found</h2>
          <button 
            onClick={() => navigate('/hostels')}
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
          >
            Back to Hostels
          </button>
        </div>
      </div>
    );
  }

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
      'Study Area': faBook,
      'Laundry': faShieldAlt,
      'Common Room': faBook,
      'Recreation Room': faBook
    };
    return iconMap[amenity] || faShieldAlt;
  };

  const handleBookingSubmit = (e) => {
    e.preventDefault();
    
    // Basic validation
    if (!bookingData.studentName || !bookingData.email || !bookingData.phone || 
        !bookingData.fromDate || !bookingData.toDate) {
      toast.error('Please fill in all required fields');
      return;
    }

    // Check if from date is before to date
    if (new Date(bookingData.fromDate) >= new Date(bookingData.toDate)) {
      toast.error('Check-out date must be after check-in date');
      return;
    }

    // Create booking
    const booking = createBooking({
      propertyId: property.id,
      propertyName: property.name,
      ...bookingData,
      totalAmount: calculateTotalAmount()
    });

    toast.success('Booking request submitted successfully!');
    setShowBookingForm(false);
    
    // Reset form
    setBookingData({
      studentName: '',
      email: '',
      phone: '',
      fromDate: '',
      toDate: '',
      roomType: 'single',
      specialRequests: ''
    });
  };

  const calculateTotalAmount = () => {
    if (!bookingData.fromDate || !bookingData.toDate) return 0;
    
    const fromDate = new Date(bookingData.fromDate);
    const toDate = new Date(bookingData.toDate);
    const diffTime = Math.abs(toDate - fromDate);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    const months = Math.ceil(diffDays / 30);
    
    return months * property.price;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBookingData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="pt-24 pb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Button */}
          <button
            onClick={() => navigate('/hostels')}
            className="flex items-center text-blue-600 hover:text-blue-800 mb-6 transition-colors duration-200"
          >
            <FontAwesomeIcon icon={faArrowLeft} className="mr-2" />
            Back to Hostels
          </button>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column - Images and Details */}
            <div className="lg:col-span-2">
              {/* Image Gallery */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
                <div className="relative h-96">
                  <img
                    src={property.images[selectedImageIndex]}
                    alt={property.name}
                    className="w-full h-full object-cover"
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
                  <div className="absolute top-4 right-4 bg-white rounded-full px-3 py-1">
                    <div className="flex items-center">
                      <FontAwesomeIcon icon={faStar} className="text-yellow-400 mr-1" />
                      <span className="font-semibold">{property.rating}</span>
                    </div>
                  </div>
                </div>
                
                {/* Thumbnail Images */}
                <div className="flex space-x-2 p-4">
                  {property.images.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImageIndex(index)}
                      className={`w-20 h-20 rounded-lg overflow-hidden border-2 ${
                        selectedImageIndex === index ? 'border-blue-500' : 'border-gray-200'
                      }`}
                    >
                      <img
                        src={image}
                        alt={`${property.name} ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              </div>

              {/* Property Details */}
              <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                <h1 className="text-3xl font-bold text-gray-800 mb-4">{property.name}</h1>
                
                <div className="flex items-center text-gray-600 mb-4">
                  <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2" />
                  <span>{property.location} • {property.distance}</span>
                </div>

                <div className="flex items-center text-3xl font-bold text-blue-600 mb-6">
                  <FontAwesomeIcon icon={faRupeeSign} className="mr-2" />
                  {property.price.toLocaleString()}
                  <span className="text-lg text-gray-500 ml-2">/month</span>
                </div>

                <p className="text-gray-700 mb-6 leading-relaxed">{property.description}</p>

                {/* Amenities */}
                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">Amenities</h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {property.amenities.map((amenity, index) => (
                      <div key={index} className="flex items-center bg-gray-50 p-3 rounded-lg">
                        <FontAwesomeIcon 
                          icon={getAmenityIcon(amenity)} 
                          className="text-blue-600 mr-3" 
                        />
                        <span className="text-gray-700">{amenity}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Room Availability */}
                <div className="border-t pt-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">Availability</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <div className="text-2xl font-bold text-gray-800">{property.totalRooms}</div>
                      <div className="text-gray-600">Total Rooms</div>
                    </div>
                    <div className="bg-green-50 p-4 rounded-lg">
                      <div className="text-2xl font-bold text-green-600">{property.availableRooms}</div>
                      <div className="text-gray-600">Available Rooms</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Booking Form */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Book Your Stay</h3>
                
                {!showBookingForm ? (
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <span className="text-gray-600">Price per month</span>
                      <span className="text-xl font-bold text-blue-600">
                        ₹{property.price.toLocaleString()}
                      </span>
                    </div>
                    
                    <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <span className="text-gray-600">Availability</span>
                      <span className={`font-semibold ${
                        property.availableRooms > 0 ? 'text-green-600' : 'text-red-600'
                      }`}>
                        {property.availableRooms > 0 
                          ? `${property.availableRooms} rooms available` 
                          : 'No rooms available'
                        }
                      </span>
                    </div>

                    <button
                      onClick={() => setShowBookingForm(true)}
                      disabled={property.availableRooms === 0}
                      className={`w-full py-3 px-4 rounded-lg font-semibold transition-colors duration-200 ${
                        property.availableRooms > 0
                          ? 'bg-blue-600 text-white hover:bg-blue-700'
                          : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                      }`}
                    >
                      {property.availableRooms > 0 ? 'Book Now' : 'Not Available'}
                    </button>

                    {/* Contact Information */}
                    <div className="border-t pt-4 mt-6">
                      <h4 className="font-semibold text-gray-800 mb-3">Contact Owner</h4>
                      <div className="space-y-2">
                        <div className="flex items-center text-gray-600">
                          <FontAwesomeIcon icon={faUser} className="mr-2" />
                          <span>{property.ownerName}</span>
                        </div>
                        <div className="flex items-center text-gray-600">
                          <FontAwesomeIcon icon={faPhone} className="mr-2" />
                          <a href={`tel:${property.contactNumber}`} className="text-blue-600 hover:underline">
                            {property.contactNumber}
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleBookingSubmit} className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Student Name *
                      </label>
                      <input
                        type="text"
                        name="studentName"
                        value={bookingData.studentName}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={bookingData.email}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={bookingData.phone}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          From Date *
                        </label>
                        <input
                          type="date"
                          name="fromDate"
                          value={bookingData.fromDate}
                          onChange={handleInputChange}
                          min={new Date().toISOString().split('T')[0]}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          To Date *
                        </label>
                        <input
                          type="date"
                          name="toDate"
                          value={bookingData.toDate}
                          onChange={handleInputChange}
                          min={bookingData.fromDate || new Date().toISOString().split('T')[0]}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Room Type
                      </label>
                      <select
                        name="roomType"
                        value={bookingData.roomType}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      >
                        <option value="single">Single Room</option>
                        <option value="double">Double Sharing</option>
                        <option value="triple">Triple Sharing</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Special Requests
                      </label>
                      <textarea
                        name="specialRequests"
                        value={bookingData.specialRequests}
                        onChange={handleInputChange}
                        rows="3"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Any special requirements..."
                      />
                    </div>

                    {/* Total Amount */}
                    {bookingData.fromDate && bookingData.toDate && (
                      <div className="bg-blue-50 p-4 rounded-lg">
                        <div className="flex justify-between items-center">
                          <span className="font-semibold text-gray-700">Estimated Total:</span>
                          <span className="text-xl font-bold text-blue-600">
                            ₹{calculateTotalAmount().toLocaleString()}
                          </span>
                        </div>
                      </div>
                    )}

                    <div className="flex space-x-3">
                      <button
                        type="button"
                        onClick={() => setShowBookingForm(false)}
                        className="flex-1 py-2 px-4 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                        className="flex-1 py-2 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
                      >
                        Submit Booking
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default HostelDetails;