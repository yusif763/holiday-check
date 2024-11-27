'use client';

import { use, useState } from 'react';
import { useRouter } from 'next/navigation';
import { hotels } from '@/app/data/hotels';
import { Listbox, Transition } from '@headlessui/react';
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/24/solid';

export default function HotelDetails({ params }: { params: Promise<{ id: string }> }) {
    const { id } = use(params);
    const hotel = hotels.find((h) => h.id === parseInt(id));
    const [bookingData, setBookingData] = useState({
        checkIn: '',
        checkOut: '',
        guests: 1,
        roomType: '',
    });

    const router = useRouter();

    if (!hotel) {
        return <h1 className="text-center text-3xl font-bold mt-20">Hotel not found!</h1>;
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setBookingData((prev) => ({ ...prev, [name]: value }));
    };

    const handleRoomTypeChange = (room: string) => {
        setBookingData((prev) => ({ ...prev, roomType: room }));
    };

    const handleBooking = (e: React.FormEvent) => {
        e.preventDefault();
        router.push('/confirmation');
    };

    return (
        <div className="bg-gray-50 pb-16">
            {/* Cover Image Section */}
            <div
                className="relative h-[500px] bg-cover bg-center"
                style={{
                    backgroundImage: `url(${hotel.images[0]})`,
                }}
            >
                <div className="absolute bottom-0 left-0 w-full bg-opacity-50 bg-white py-8 px-6 sm:px-12">
                    <h1 className="text-4xl font-bold text-blue-900">{hotel.name}</h1>
                    <p className="mt-2 text-lg text-gray-600">{hotel.location}</p>
                </div>
            </div>

            {/* Main Content */}
            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Photo Gallery */}
                    <div className="lg:col-span-2">
                        <h2 className="text-2xl font-bold mb-6 text-[#1b4747]">Gallery</h2>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                            {hotel.images.map((image, index) => (
                                <img
                                    key={index}
                                    src={image}
                                    alt={`${hotel.name} photo ${index + 1}`}
                                    className="rounded-lg shadow-md w-full h-40 object-cover transition-transform transform hover:scale-105"
                                />
                            ))}
                        </div>
                    </div>

                    {/* Booking Section */}
                    <div className="bg-white p-8 rounded-lg shadow-md">
                        <h2 className="text-2xl font-bold text-[#1b4747] mb-6">Book Your Stay</h2>
                        <p className="text-lg font-semibold text-gray-800 mb-4">Price: ${hotel.price} / night</p>
                        <p className="text-gray-700 mb-6">{hotel.description}</p>
                        <form onSubmit={handleBooking}>
                            {/* Check-In and Check-Out */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                                <div>
                                    <label htmlFor="checkIn" className="block font-semibold mb-2 text-gray-600">
                                        Check-In
                                    </label>
                                    <input
                                        type="date"
                                        id="checkIn"
                                        name="checkIn"
                                        value={bookingData.checkIn}
                                        onChange={handleChange}
                                        className="w-full border border-gray-300 rounded-lg p-3 focus:ring focus:ring-blue-500"
                                        required
                                    />
                                </div>
                                <div>
                                    <label htmlFor="checkOut" className="block font-semibold mb-2 text-gray-600">
                                        Check-Out
                                    </label>
                                    <input
                                        type="date"
                                        id="checkOut"
                                        name="checkOut"
                                        value={bookingData.checkOut}
                                        onChange={handleChange}
                                        className="w-full border border-gray-300 rounded-lg p-3 focus:ring focus:ring-blue-500"
                                        required
                                    />
                                </div>
                            </div>

                            {/* Guests */}
                            <div className="mb-4">
                                <label htmlFor="guests" className="block font-semibold mb-2 text-gray-600">
                                    Guests
                                </label>
                                <input
                                    type="number"
                                    id="guests"
                                    name="guests"
                                    value={bookingData.guests}
                                    onChange={handleChange}
                                    min="1"
                                    className="w-full border border-gray-300 rounded-lg p-3 focus:ring focus:ring-blue-500"
                                    required
                                />
                            </div>

                            {/* Room Type */}
                            <div className="mb-6">
                                <label htmlFor="roomType" className="block font-semibold mb-2 text-gray-600">
                                    Room Type
                                </label>
                                <Listbox value={bookingData.roomType} onChange={handleRoomTypeChange}>
                                    <div className="relative">
                                        <Listbox.Button className="w-full border border-gray-300 rounded-lg p-3 text-left focus:ring focus:ring-blue-500 flex justify-between items-center">
                                            <span>
                                                {bookingData.roomType || 'Select a Room Type'}
                                            </span>
                                            <ChevronUpDownIcon className="w-5 h-5 text-gray-400" />
                                        </Listbox.Button>
                                        <Transition
                                            leave="transition ease-in duration-100"
                                            leaveFrom="opacity-100"
                                            leaveTo="opacity-0"
                                        >
                                            <Listbox.Options className="absolute mt-1 w-full bg-white border border-gray-300 rounded-lg shadow-lg z-10">
                                                {hotel.roomTypes.map((room, index) => (
                                                    <Listbox.Option
                                                        key={index}
                                                        value={room}
                                                        className={({ active }) =>
                                                            `cursor-pointer select-none relative py-2 px-4 ${
                                                                active
                                                                    ? 'bg-[#1b4747] text-white'
                                                                    : 'text-gray-800'
                                                            }`
                                                        }
                                                    >
                                                        {({ selected }) => (
                                                            <span
                                                                className={`flex items-center ${
                                                                    selected
                                                                        ? 'font-bold'
                                                                        : 'font-normal'
                                                                }`}
                                                            >
                                                                {selected && (
                                                                    <CheckIcon className="w-5 h-5 mr-2 text-white" />
                                                                )}
                                                                {room}
                                                            </span>
                                                        )}
                                                    </Listbox.Option>
                                                ))}
                                            </Listbox.Options>
                                        </Transition>
                                    </div>
                                </Listbox>
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                className="w-full bg-[#145e5e] text-white font-bold rounded-lg px-6 py-3 hover:bg-blue-700 transition"
                            >
                                Confirm Booking
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
