'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { hotels } from '@/app/data/hotels';
import { PaperAirplaneIcon, BuildingOfficeIcon, SparklesIcon } from '@heroicons/react/24/solid';

export default function HomePage() {
    const [isSearching, setIsSearching] = useState(false);
    const [flights, setFlights] = useState<any[]>([]);

    const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSearching(true);

        setTimeout(() => {
            setFlights([
                { id: 1, from: 'Istanbul', to: 'Antalya', date: '2024-12-01', price: '$120' },
                { id: 2, from: 'Ankara', to: 'Izmir', date: '2024-12-05', price: '$90' },
                { id: 3, from: 'Istanbul', to: 'Dubai', date: '2024-12-10', price: '$450' },
            ]);
            setIsSearching(false);
        }, 2000);
    };

    return (
        <div>
            {/* Hero Section */}
            <section className="relative h-[500px] bg-gradient-to-r from-blue-600 to-teal-400 flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-5xl font-extrabold text-white mb-4 animate-slide-in">
                        Discover Halal-Friendly Travel
                    </h1>
                    <p className="text-lg text-[#1b4747]">Plan your perfect trip with ease.</p>
                </div>
                <div className="absolute bottom-4 left-0 right-0 text-center">
                    <PaperAirplaneIcon className="w-10 h-10 text-white animate-bounce mx-auto" />
                </div>
            </section>

            {/* Services Section */}
            <section id="services" className="py-16 bg-gray-50">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-3xl font-bold mb-8">Our Services</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                title: 'Hotel Reservations',
                                description: 'Find halal-certified accommodations worldwide.',
                                Icon: BuildingOfficeIcon,
                            },
                            {
                                title: 'Airport Transfers',
                                description: 'Reliable, hassle-free transfers to your destination.',
                                Icon: PaperAirplaneIcon,
                            },
                            {
                                title: 'Special Offers',
                                description: 'Enjoy exclusive deals on luxury travel packages.',
                                Icon: SparklesIcon,
                            },
                        ].map((service, index) => (
                            <div
                                key={index}
                                className="p-6 bg-white rounded-lg shadow hover:scale-105 transition-transform"
                            >
                                <service.Icon className="h-12 w-12 text-[#1b4747] mx-auto mb-4" />
                                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                                <p className="text-gray-600">{service.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Recommended Hotels Section */}
            <section id="hotels" className="py-16 bg-gray-50">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold mb-8 text-center">Recommended Hotels</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {hotels.slice(0, 3).map((hotel) => (
                            <div
                                key={hotel.id}
                                className="rounded-lg shadow-lg overflow-hidden hover:scale-105 transition-transform"
                            >
                                <div className="relative w-full h-48">
                                    <Image
                                        src={hotel.images[0]}
                                        alt={hotel.name}
                                        layout="fill"
                                        objectFit="cover"
                                    />
                                </div>
                                <div className="p-4">
                                    <h3 className="text-xl font-bold">{hotel.name}</h3>
                                    <p className="text-gray-600">{hotel.location}</p>
                                    <p className="text-[#1b4747] font-bold mt-2">${hotel.price} / night</p>
                                    <Link
                                        href={`/hotels/${hotel.id}`}
                                        className="mt-4 inline-block text-white bg-[#1b4747] px-4 py-2 rounded hover:bg-[#145e5e]"
                                    >
                                        View Details
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Flight Search Section */}
            <section id="flights" className="py-16 bg-gray-100">
                <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                    <form
                        onSubmit={handleSearch}
                        className="bg-white text-gray-800 p-6 rounded-lg shadow-lg max-w-md w-full"
                    >
                        <h2 className="text-2xl font-bold mb-4 text-center text-[#1b4747]">Book Your Flight</h2>
                        <div className="mb-4">
                            <label htmlFor="from" className="block text-gray-700">
                                From
                            </label>
                            <input
                                type="text"
                                id="from"
                                placeholder="Enter departure city"
                                className="w-full border border-gray-300 rounded-lg p-2 mt-1"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="to" className="block text-gray-700">
                                To
                            </label>
                            <input
                                type="text"
                                id="to"
                                placeholder="Enter destination city"
                                className="w-full border border-gray-300 rounded-lg p-2 mt-1"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="departure" className="block text-gray-700">
                                Departure Date
                            </label>
                            <input
                                type="date"
                                id="departure"
                                className="w-full border border-gray-300 rounded-lg p-2 mt-1"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="return" className="block text-gray-700">
                                Return Date
                            </label>
                            <input
                                type="date"
                                id="return"
                                className="w-full border border-gray-300 rounded-lg p-2 mt-1"
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full px-4 py-2 bg-[#145e5e] text-white font-bold rounded-lg hover:bg-blue-700 transition"
                        >
                            Search Flights
                        </button>
                    </form>
                    {isSearching && (
                        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                                <h3 className="text-2xl font-bold text-[#1b4747] mb-4">Searching...</h3>
                                <p className="text-gray-700">Please wait while we find the best options for you.</p>
                            </div>
                        </div>
                    )}
                    {flights.length > 0 ? (
                        <div className="bg-white p-6 rounded-lg shadow-lg max-w-2xl w-full">
                            <h2 className="text-2xl font-bold text-[#1b4747] mb-4">Flight Results</h2>
                            <ul>
                                {flights.map((flight) => (
                                    <li
                                        key={flight.id}
                                        className="border-b border-gray-300 py-3 flex justify-between items-center"
                                    >
                                        <div>
                                            <p className="font-bold">
                                                {flight.from} → {flight.to}
                                            </p>
                                            <p className="text-gray-600 text-sm">{flight.date}</p>
                                        </div>
                                        <p className="font-bold text-[#1b4747]">{flight.price}</p>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ) : (
                        <div className="flex flex-col justify-center bg-blue-100 p-6 rounded-lg shadow-lg">
                            <h2 className="text-2xl font-bold mb-4 text-[#1b4747]">Why Book with Us?</h2>
                            <p className="text-gray-700 mb-4">
                                Enjoy hassle-free flight bookings with halal-friendly options. Whether you are traveling
                                for business or leisure, we ensure the best deals for you.
                            </p>
                            <ul className="space-y-2">
                                <li className="flex items-center">
                                    <PaperAirplaneIcon className="h-6 w-6 text-[#1b4747] mr-2"/>
                                    Reliable and affordable flights.
                                </li>
                                <li className="flex items-center">
                                    <PaperAirplaneIcon className="h-6 w-6 text-[#1b4747] mr-2"/>
                                    Exclusive halal-friendly packages.
                                </li>
                                <li className="flex items-center">
                                    <PaperAirplaneIcon className="h-6 w-6 text-[#1b4747] mr-2"/>
                                    24/7 customer support for all your needs.
                                </li>
                            </ul>
                        </div>

                    )}
                </div>
            </section>
        </div>
    );
}
