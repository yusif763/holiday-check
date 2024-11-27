'use client';

import { useState } from 'react';
import { CheckCircleIcon, ArrowLeftIcon, TruckIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';

export default function ConfirmationPage() {
    const [airportTransfer, setAirportTransfer] = useState(false);

    const roomCost = 1500; // Sample cost for room
    const transferCost = airportTransfer ? 100 : 0;
    const totalCost = roomCost + transferCost;

    const toggleAirportTransfer = () => setAirportTransfer((prev) => !prev);

    return (
        <div className="min-h-screen  bg-gradient-to-r from-blue-50 to-teal-50 flex items-center justify-center px-6">
            <div className="bg-white rounded-xl my-[50px] shadow-lg p-8 max-w-3xl w-full">
                {/* Header */}
                <div className="flex flex-col items-center">
                    <CheckCircleIcon className="h-16 w-16 text-green-500 mb-4" />
                    <h1 className="text-4xl font-bold text-gray-800 mb-2">Booking Confirmed!</h1>
                    <p className="text-gray-600 text-lg">
                        Thank you for booking with us! Your reservation details have been sent to your email.
                    </p>
                </div>

                {/* Booking Summary */}
                <div className="bg-gray-50 mt-8 p-6 rounded-lg shadow-inner">
                    <h2 className="text-2xl font-semibold text-[#1b4747] mb-4">Booking Summary</h2>
                    <div className="space-y-3">
                        <p className="text-lg">
                            <span className="font-semibold">Hotel Name:</span> Luxury Halal Hotel
                        </p>
                        <p className="text-lg">
                            <span className="font-semibold">Room Type:</span> Family Suite
                        </p>
                        <p className="text-lg">
                            <span className="font-semibold">Check-In:</span> 2024-12-01
                        </p>
                        <p className="text-lg">
                            <span className="font-semibold">Check-Out:</span> 2024-12-10
                        </p>
                        <p className="text-lg">
                            <span className="font-semibold">Guests:</span> 2 Adults, 1 Child
                        </p>
                    </div>
                </div>

                {/* Add Airport Transfer */}
                <div className="bg-blue-50 mt-8 p-6 rounded-lg shadow-inner">
                    <h2 className="text-2xl font-semibold text-[#1b4747] mb-4">Need an Airport Transfer?</h2>
                    <div className="flex items-center justify-between">
                        <div className="text-gray-600">
                            <TruckIcon className="w-6 h-6 text-[#1b4747] inline-block mr-2" />
                            Add hassle-free airport transfers for just <span className="font-bold">$100</span>.
                        </div>
                        <button
                            onClick={toggleAirportTransfer}
                            className={`px-6 py-2 rounded-lg font-semibold text-white transition ${
                                airportTransfer
                                    ? 'bg-red-500 hover:bg-red-600'
                                    : 'bg-[#145e5e] hover:bg-[#1b4747]'
                            }`}
                        >
                            {airportTransfer ? 'Remove Transfer' : 'Add Transfer'}
                        </button>
                    </div>
                </div>

                {/* Total Cost */}
                <div className="bg-gray-50 mt-8 p-6 rounded-lg shadow-inner">
                    <h2 className="text-2xl font-semibold text-[#1b4747] mb-4">Total Cost</h2>
                    <div className="space-y-2">
                        <p className="text-lg text-gray-700">
                            Room Cost: <span className="font-bold">${roomCost}</span>
                        </p>
                        {airportTransfer && (
                            <p className="text-lg text-gray-700">
                                Airport Transfer: <span className="font-bold">${transferCost}</span>
                            </p>
                        )}
                        <p className="text-xl font-bold text-gray-800 mt-2">
                            Total: <span className="text-[#1b4747]">${totalCost}</span>
                        </p>
                    </div>
                </div>

                {/* Action Buttons */}
                <div className="flex justify-between mt-8">
                    <Link
                        href="/"
                        className="flex items-center text-[#1b4747] hover:underline font-semibold transition"
                    >
                        <ArrowLeftIcon className="h-5 w-5 mr-2" />
                        Back to Home
                    </Link>
                    <Link
                        href="/contact"
                        className="px-6 py-2 bg-[#145e5e] text-white rounded-lg font-semibold hover:bg-blue-700 transition"
                    >
                        Contact Support
                    </Link>
                </div>
            </div>
        </div>
    );
}
