'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image'; // Next.js Image Component
import { hotels } from '@/app/data/hotels';

export default function HotelsPage() {
    const [filters, setFilters] = useState({
        location: '',
        minPrice: '',
        maxPrice: '',
    });

    const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFilters((prev) => ({ ...prev, [name]: value }));
    };

    const filteredHotels = hotels.filter((hotel) => {
        const matchesLocation =
            filters.location === '' || hotel.location.toLowerCase().includes(filters.location.toLowerCase());
        const matchesPrice =
            (!filters.minPrice || hotel.price >= parseFloat(filters.minPrice)) &&
            (!filters.maxPrice || hotel.price <= parseFloat(filters.maxPrice));
        return matchesLocation && matchesPrice;
    });

    return (
        <div className="mt-[100px] bg-gray-50 pb-16">
            <h1 className="text-5xl font-bold text-center text-[#1b4747] py-12">Explore Our Hotels</h1>

            {/* Filters */}
            <div className="bg-white shadow-lg rounded-lg p-8 max-w-5xl mx-auto mb-12">
                <h2 className="text-2xl font-bold mb-6 text-center text-[#1b4747]">Filter Hotels</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                        <label htmlFor="location" className="block font-semibold mb-2 text-gray-600">
                            Location
                        </label>
                        <input
                            type="text"
                            id="location"
                            name="location"
                            placeholder="Enter location"
                            value={filters.location}
                            onChange={handleFilterChange}
                            className="w-full border border-gray-300 rounded-lg p-3 focus:ring focus:ring-blue-500"
                        />
                    </div>
                    <div>
                        <label htmlFor="minPrice" className="block font-semibold mb-2 text-gray-600">
                            Min Price ($)
                        </label>
                        <input
                            type="number"
                            id="minPrice"
                            name="minPrice"
                            placeholder="0"
                            value={filters.minPrice}
                            onChange={handleFilterChange}
                            className="w-full border border-gray-300 rounded-lg p-3 focus:ring focus:ring-blue-500"
                        />
                    </div>
                    <div>
                        <label htmlFor="maxPrice" className="block font-semibold mb-2 text-gray-600">
                            Max Price ($)
                        </label>
                        <input
                            type="number"
                            id="maxPrice"
                            name="maxPrice"
                            placeholder="500"
                            value={filters.maxPrice}
                            onChange={handleFilterChange}
                            className="w-full border border-gray-300 rounded-lg p-3 focus:ring focus:ring-blue-500"
                        />
                    </div>
                </div>
            </div>

            {/* Hotels List */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto px-4">
                {filteredHotels.map((hotel) => (
                    <div
                        key={hotel.id}
                        className="bg-white rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300"
                    >
                        <div className="relative w-full h-56">
                            <Image
                                src={hotel.images[0]}
                                alt={hotel.name}
                                layout="fill"
                                objectFit="cover"
                                className="rounded-t-lg"
                            />
                            <span className="absolute top-4 left-4 bg-yellow-500 text-white font-bold px-3 py-1 rounded-lg shadow-lg">
                                ⭐ {hotel.rating}
                            </span>
                        </div>
                        <div className="p-6">
                            <h2 className="text-xl font-bold text-gray-800">{hotel.name}</h2>
                            <p className="text-gray-600">{hotel.location}</p>
                            <p className="text-[#1b4747] font-bold text-lg mt-2">${hotel.price} / night</p>
                            <Link
                                href={`/hotels/${hotel.id}`}
                                className="inline-block mt-4 bg-[#1b4747] text-white font-bold px-6 py-2 rounded-lg hover:bg-[#145e5e] transition"
                            >
                                View Details
                            </Link>
                        </div>
                    </div>
                ))}
            </div>

            {filteredHotels.length === 0 && (
                <div className="text-center mt-12 text-gray-600">
                    <p>No hotels match your search criteria. Try adjusting the filters.</p>
                </div>
            )}
        </div>
    );
}
