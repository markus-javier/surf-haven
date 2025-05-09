import React, { useState } from 'react';
import { Calendar, ChevronLeft, ChevronRight, Sunrise, Umbrella, Wind, Droplets, Map, Menu, X } from 'lucide-react';
// Import images
import heroImage from '../images/1900x600.jpg';
import aboutImage from '../images/800x600.jpg';
import surfLessonsImage from '../images/surf-lesson-600x400.jpg';
import islandHoppingImage from '../images/island-hopping-600x400.jpg';
import sugbaLagoonImage from '../images/sugba-600x400.jpg';
import magpupungkoImage from '../images/magpupungko-600x400.jpg';
import jungleTrekkingImage from '../images/jungle-600x400.jpg';
import sunsetYogaImage from '../images/yoga-600x400.jpg';
import beachfrontVillaImage from '../images/beachfront-villa-600x400.jpg';
import gardenBungalowImage from '../images/garden-bungalow-600x400.jpg';
import surfCabinImage from '../images/surf-cabin-600x400.jpg';
import familySuiteImage from '../images/family-suite-600x400.jpg';
import treehouseImage from '../images/tree-house-600x400.jpg';
import deluxeRoomImage from '../images/deluxe-600x400.jpg';

const SiargaoResort = () => {
    const [activeNavItem, setActiveNavItem] = useState('home');
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [checkInDate, setCheckInDate] = useState('');
    const [checkOutDate, setCheckOutDate] = useState('');
    const [guests, setGuests] = useState(2);
    const [bookingSuccess, setBookingSuccess] = useState(false);
    const [email, setEmail] = useState('');
    const [specialRequests, setSpecialRequests] = useState('');
    const [selectedAccommodation, setSelectedAccommodation] = useState('');
    const [scrolled, setScrolled] = useState(false);

    // Add scroll event listener to change header appearance on scroll
    React.useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 50;
            if (isScrolled !== scrolled) {
                setScrolled(isScrolled);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [scrolled]);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    // Scroll with offset for navigation links
    const scrollToSection = (sectionId) => {
        setActiveNavItem(sectionId);
        const element = document.getElementById(sectionId);
        if (element) {
            const offsetTop = element.getBoundingClientRect().top + window.pageYOffset;
            const headerOffset = 80; // Adjust based on your header height
            window.scrollTo({
                top: offsetTop - headerOffset,
                behavior: 'smooth'
            });
        }
    };

    const handleBookNow = () => {
        if (checkInDate && checkOutDate) {
            setBookingSuccess(true);
            setTimeout(() => {
                setBookingSuccess(false);
                setCheckInDate('');
                setCheckOutDate('');
                setGuests(2);
                setSpecialRequests('');
                setSelectedAccommodation('');
            }, 3000);
        }
    };

    const handleSubmitNewsletter = () => {
        if (email) {
            alert('Thank you for subscribing to our newsletter!');
            setEmail('');
        }
    };

    // Navigation links
    const navItems = [
        { id: 'home', label: 'Home' },
        { id: 'about', label: 'About' },
        { id: 'activities', label: 'Activities' },
        { id: 'accommodations', label: 'Accommodations' },
        { id: 'contact', label: 'Contact' },
    ];

    return (
        <div className="font-sans text-gray-800">
            {/* Header/Navigation - Sticky */}
            <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
                scrolled
                    ? 'bg-gray-900 shadow-lg py-2'
                    : 'bg-gradient-to-b from-gray-900 to-transparent py-4'
            }`}>
                <div className="container mx-auto px-4 flex justify-between items-center">
                    <a href="#" className="text-white font-bold text-2xl">Siargao Surf Haven</a>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex space-x-8">
                        {navItems.map(item => (
                            <a
                                key={item.id}
                                href={`#${item.id}`}
                                className={`text-white hover:text-teal-300 transition ${activeNavItem === item.id ? 'border-b-2 border-teal-300' : ''}`}
                                onClick={(e) => {
                                    e.preventDefault();
                                    scrollToSection(item.id);
                                }}
                            >
                                {item.label}
                            </a>
                        ))}
                        <a
                            href="#booking"
                            className="bg-teal-500 text-white px-4 py-2 rounded hover:bg-teal-600 transition"
                        >
                            Book Now
                        </a>
                    </nav>

                    {/* Mobile menu button */}
                    <button
                        className="md:hidden text-white p-2"
                        onClick={toggleMenu}
                    >
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <div className="md:hidden bg-gray-900 bg-opacity-95">
                        <div className="container mx-auto px-4 py-4">
                            <nav className="flex flex-col space-y-4">
                                {navItems.map(item => (
                                    <a
                                        key={item.id}
                                        href={`#${item.id}`}
                                        className={`text-white hover:text-teal-300 transition ${activeNavItem === item.id ? 'text-teal-300' : ''}`}
                                        onClick={(e) => {
                                            e.preventDefault();
                                            scrollToSection(item.id);
                                            setIsMenuOpen(false);
                                        }}
                                    >
                                        {item.label}
                                    </a>
                                ))}
                                <a
                                    href="#booking"
                                    className="bg-teal-500 text-white px-4 py-2 rounded hover:bg-teal-600 transition text-center"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    Book Now
                                </a>
                            </nav>
                        </div>
                    </div>
                )}
            </header>

            {/* Hero Section */}
            <section id="home" className="relative h-screen bg-cover bg-center flex items-center" style={{backgroundImage: `url(${heroImage})`}}>
                <div className="absolute inset-0 bg-black bg-opacity-40"></div>
                <div className="container mx-auto px-4 pt-16 relative z-1">
                    <div className="max-w-2xl">
                        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Experience Paradise in Siargao</h1>
                        <p className="text-xl text-white mb-8">World-class surfing, pristine beaches, and unforgettable island experiences await you.</p>
                        <div className="flex flex-wrap gap-4">
                            <a href="#booking" className="bg-teal-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-teal-600 transition">Book Your Stay</a>
                            <a href="#activities" className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-lg font-medium hover:bg-white hover:text-gray-900 transition">Explore Activities</a>
                        </div>
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section id="about" className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Welcome to Siargao Surf Haven</h2>
                        <div className="w-24 h-1 bg-teal-500 mx-auto"></div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <p className="text-lg mb-6">Nestled on the eastern coast of Siargao Island, our resort offers the perfect blend of luxury and nature. With direct access to Cloud 9, one of the world's most renowned surf breaks, we provide an unparalleled experience for surf enthusiasts and nature lovers alike.</p>
                            <p className="text-lg mb-6">Our eco-friendly resort is designed to harmonize with the lush tropical surroundings while providing all the modern comforts you need for a memorable stay.</p>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="bg-gray-100 p-4 rounded flex items-center">
                                    <Sunrise className="text-teal-500 mr-3" size={24} />
                                    <span>Beachfront Views</span>
                                </div>
                                <div className="bg-gray-100 p-4 rounded flex items-center">
                                    <Wind className="text-teal-500 mr-3" size={24} />
                                    <span>Surf Access</span>
                                </div>
                                <div className="bg-gray-100 p-4 rounded flex items-center">
                                    <Umbrella className="text-teal-500 mr-3" size={24} />
                                    <span>Private Beach</span>
                                </div>
                                <div className="bg-gray-100 p-4 rounded flex items-center">
                                    <Droplets className="text-teal-500 mr-3" size={24} />
                                    <span>Infinity Pool</span>
                                </div>
                            </div>
                        </div>
                        <div className="rounded-lg overflow-hidden shadow-xl">
                            <img src={aboutImage} alt="Siargao Resort" className="w-full h-full object-cover" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Activities Section */}
            <section id="activities" className="py-16 bg-gray-100">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Island Activities</h2>
                        <div className="w-24 h-1 bg-teal-500 mx-auto mb-6"></div>
                        <p className="text-lg max-w-3xl mx-auto">Discover the beauty and adventure of Siargao Island with our curated experiences.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                title: "Surf Lessons",
                                description: "Learn to ride the waves with our experienced surf instructors. All skill levels welcome.",
                                image: surfLessonsImage
                            },
                            {
                                title: "Island Hopping",
                                description: "Explore the stunning islands surrounding Siargao, including Daku, Guyam, and Naked Island.",
                                image: islandHoppingImage
                            },
                            {
                                title: "Sugba Lagoon Tour",
                                description: "Visit the emerald waters of Sugba Lagoon for swimming, diving, and paddleboarding.",
                                image: sugbaLagoonImage
                            },
                            {
                                title: "Magpupungko Rock Pools",
                                description: "Experience the natural tidal pools formed among the rocky coastline during low tide.",
                                image: magpupungkoImage
                            },
                            {
                                title: "Jungle Trekking",
                                description: "Hike through lush tropical forests and discover hidden waterfalls and wildlife.",
                                image: jungleTrekkingImage
                            },
                            {
                                title: "Sunset Yoga",
                                description: "Find your balance with beach yoga sessions as the sun sets over the Pacific Ocean.",
                                image: sunsetYogaImage
                            }
                        ].map((activity, index) => (
                            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg transition transform hover:scale-105">
                                <img src={activity.image} alt={activity.title} className="w-full h-48 object-cover" />
                                <div className="p-6">
                                    <h3 className="text-xl font-bold mb-2">{activity.title}</h3>
                                    <p className="text-gray-600 mb-4">{activity.description}</p>
                                    <a href="#booking" className="text-teal-500 font-medium hover:text-teal-700 transition">Book this activity →</a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Accommodations Section */}
            <section id="accommodations" className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Accommodations</h2>
                        <div className="w-24 h-1 bg-teal-500 mx-auto mb-6"></div>
                        <p className="text-lg max-w-3xl mx-auto">Experience comfort and luxury with our range of accommodations designed to make your stay memorable.</p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                title: "Beachfront Villa",
                                price: "$250",
                                features: ["Ocean view", "Private deck", "King bed", "Outdoor shower"],
                                image: beachfrontVillaImage
                            },
                            {
                                title: "Garden Bungalow",
                                price: "$180",
                                features: ["Tropical garden view", "Queen bed", "Private patio", "Outdoor bathtub"],
                                image: gardenBungalowImage
                            },
                            {
                                title: "Surf Cabin",
                                price: "$120",
                                features: ["Steps from the beach", "Twin beds", "Hammock", "Shared facilities"],
                                image: surfCabinImage
                            },
                            {
                                title: "Family Suite",
                                price: "$320",
                                features: ["Two bedrooms", "Full kitchen", "Living area", "Large terrace"],
                                image: familySuiteImage
                            },
                            {
                                title: "Treehouse",
                                price: "$200",
                                features: ["Elevated view", "Queen bed", "Open-air concept", "Nature immersion"],
                                image: treehouseImage
                            },
                            {
                                title: "Deluxe Room",
                                price: "$150",
                                features: ["Resort view", "Queen bed", "Air conditioning", "Private bathroom"],
                                image: deluxeRoomImage
                            }
                        ].map((room, index) => (
                            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg border border-gray-200">
                                <img src={room.image} alt={room.title} className="w-full h-48 object-cover" />
                                <div className="p-6">
                                    <div className="flex justify-between items-center mb-4">
                                        <h3 className="text-xl font-bold">{room.title}</h3>
                                        <div className="text-teal-500 font-bold">{room.price}<span className="text-gray-600 text-sm">/night</span></div>
                                    </div>
                                    <ul className="mb-4">
                                        {room.features.map((feature, i) => (
                                            <li key={i} className="flex items-center text-gray-600 mb-2">
                                                <span className="mr-2 text-teal-500">•</span>
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                    <a
                                        href="#booking"
                                        className="block text-center bg-teal-500 text-white py-2 px-4 rounded hover:bg-teal-600 transition"
                                    >
                                        Book Now
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Booking Section */}
            <section id="booking" className="py-16 bg-teal-500 text-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Book Your Stay</h2>
                        <div className="w-24 h-1 bg-white mx-auto mb-6"></div>
                        <p className="text-lg max-w-3xl mx-auto">Reserve your piece of paradise today and start planning your Siargao adventure.</p>
                    </div>

                    <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-xl p-8 text-gray-800">
                        {bookingSuccess ? (
                            <div className="text-center py-8">
                                <div className="text-5xl text-teal-500 mb-4">✓</div>
                                <h3 className="text-2xl font-bold mb-2">Booking Request Received!</h3>
                                <p className="text-gray-600 mb-4">We've received your booking request and will contact you shortly to confirm your reservation.</p>
                                <button
                                    onClick={() => setBookingSuccess(false)}
                                    className="bg-teal-500 text-white px-6 py-2 rounded hover:bg-teal-600 transition"
                                >
                                    Make Another Booking
                                </button>
                            </div>
                        ) : (
                            <div>
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-gray-700 mb-2">Check-in Date</label>
                                        <div className="relative">
                                            <input
                                                type="date"
                                                value={checkInDate}
                                                onChange={(e) => setCheckInDate(e.target.value)}
                                                className="w-full p-3 border border-gray-300 rounded focus:ring-2 focus:ring-teal-500 focus:border-transparent transition"
                                            />
                                            <Calendar className="absolute right-3 top-3 text-gray-400" size={20} />
                                        </div>
                                    </div>
                                    <div>
                                        <label className="block text-gray-700 mb-2">Check-out Date</label>
                                        <div className="relative">
                                            <input
                                                type="date"
                                                value={checkOutDate}
                                                onChange={(e) => setCheckOutDate(e.target.value)}
                                                className="w-full p-3 border border-gray-300 rounded focus:ring-2 focus:ring-teal-500 focus:border-transparent transition"
                                            />
                                            <Calendar className="absolute right-3 top-3 text-gray-400" size={20} />
                                        </div>
                                    </div>
                                    <div>
                                        <label className="block text-gray-700 mb-2">Guests</label>
                                        <div className="flex">
                                            <button
                                                type="button"
                                                onClick={() => setGuests(Math.max(1, guests - 1))}
                                                className="px-4 py-3 bg-gray-200 rounded-l hover:bg-gray-300 transition"
                                            >
                                                <ChevronLeft size={20} />
                                            </button>
                                            <input
                                                type="number"
                                                value={guests}
                                                onChange={(e) => setGuests(Math.max(1, parseInt(e.target.value)))}
                                                className="w-full p-3 border-y border-gray-300 text-center focus:ring-2 focus:ring-teal-500 focus:border-transparent transition"
                                                min="1"
                                            />
                                            <button
                                                type="button"
                                                onClick={() => setGuests(guests + 1)}
                                                className="px-4 py-3 bg-gray-200 rounded-r hover:bg-gray-300 transition"
                                            >
                                                <ChevronRight size={20} />
                                            </button>
                                        </div>
                                    </div>
                                    <div>
                                        <label className="block text-gray-700 mb-2">Accommodation Type</label>
                                        <select
                                            className="w-full p-3 border border-gray-300 rounded focus:ring-2 focus:ring-teal-500 focus:border-transparent transition"
                                            value={selectedAccommodation}
                                            onChange={(e) => setSelectedAccommodation(e.target.value)}
                                        >
                                            <option value="">Select accommodation</option>
                                            <option value="beachfront">Beachfront Villa</option>
                                            <option value="garden">Garden Bungalow</option>
                                            <option value="surf">Surf Cabin</option>
                                            <option value="family">Family Suite</option>
                                            <option value="treehouse">Treehouse</option>
                                            <option value="deluxe">Deluxe Room</option>
                                        </select>
                                    </div>
                                    <div className="md:col-span-2">
                                        <label className="block text-gray-700 mb-2">Special Requests</label>
                                        <textarea
                                            className="w-full p-3 border border-gray-300 rounded focus:ring-2 focus:ring-teal-500 focus:border-transparent transition"
                                            rows="3"
                                            placeholder="Any special requirements or requests?"
                                            value={specialRequests}
                                            onChange={(e) => setSpecialRequests(e.target.value)}
                                        ></textarea>
                                    </div>
                                </div>
                                <div className="mt-6">
                                    <button
                                        onClick={handleBookNow}
                                        className="w-full bg-teal-500 text-white py-3 px-6 rounded-lg font-medium hover:bg-teal-600 transition"
                                    >
                                        Confirm Booking
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </section>

            {/* Map & Contact Section */}
            <section id="contact" className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Find Us</h2>
                        <div className="w-24 h-1 bg-teal-500 mx-auto mb-6"></div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12">
                        <div className="bg-gray-200 rounded-lg overflow-hidden h-64 md:h-auto">
                            {/* This would be a real map in a production environment */}
                            <div className="w-full h-full flex items-center justify-center bg-gray-300">
                                <Map size={48} className="text-gray-500" />
                                <span className="ml-4 text-gray-600 font-medium">Interactive Map</span>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>

                            <div className="space-y-6">
                                <div>
                                    <h4 className="font-bold text-lg mb-2">Address</h4>
                                    <p className="text-gray-600">
                                        Siargao Surf Haven<br />
                                        Tourism Road, General Luna<br />
                                        Siargao Island, Surigao del Norte<br />
                                        Philippines 8419
                                    </p>
                                </div>

                                <div>
                                    <h4 className="font-bold text-lg mb-2">Contact</h4>
                                    <p className="text-gray-600">
                                        Phone: +63 (123) 456-7890<br />
                                        Email: info@siargaosurfhaven.com
                                    </p>
                                </div>

                                <div>
                                    <h4 className="font-bold text-lg mb-2">Getting Here</h4>
                                    <p className="text-gray-600">
                                        Siargao is accessible via Sayak Airport (IAO) with direct flights from Cebu and Manila. Our resort offers airport transfers - please arrange with us prior to arrival.
                                    </p>
                                </div>
                            </div>

                            <div className="mt-8">
                                <a
                                    href="mailto:info@siargaosurfhaven.com"
                                    className="inline-block bg-teal-500 text-white py-2 px-6 rounded hover:bg-teal-600 transition"
                                >
                                    Contact Us
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-gray-900 text-white py-12">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-4 gap-8">
                        <div>
                            <h3 className="text-xl font-bold mb-4">Siargao Surf Haven</h3>
                            <p className="text-gray-400">Your paradise retreat on the surfing capital of the Philippines.</p>
                        </div>

                        <div>
                            <h4 className="font-bold mb-4">Quick Links</h4>
                            <ul className="space-y-2">
                                {navItems.map(item => (
                                    <li key={item.id}>
                                        <a
                                            href={`#${item.id}`}
                                            className="text-gray-400 hover:text-teal-300 transition"
                                        >
                                            {item.label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <h4 className="font-bold mb-4">Follow Us</h4>
                            <div className="flex space-x-4">
                                <a href="#" className="text-gray-400 hover:text-teal-300 transition">
                                    Facebook
                                </a>
                                <a href="#" className="text-gray-400 hover:text-teal-300 transition">
                                    Instagram
                                </a>
                                <a href="#" className="text-gray-400 hover:text-teal-300 transition">
                                    Twitter
                                </a>
                            </div>
                        </div>

                        <div>
                            <h4 className="font-bold mb-4">Newsletter</h4>
                            <p className="text-gray-400 mb-4">Subscribe for special offers and updates.</p>
                            <div className="flex">
                                <input
                                    type="email"
                                    placeholder="Your email"
                                    className="px-4 py-2 rounded-l text-gray-800 w-full"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                                <button
                                    onClick={handleSubmitNewsletter}
                                    className="bg-teal-500 text-white px-4 py-2 rounded-r hover:bg-teal-600 transition"
                                >
                                    →
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500">
                        <p>© {new Date().getFullYear()} Siargao Surf Haven. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default SiargaoResort;