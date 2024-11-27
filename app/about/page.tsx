'use client';

import { PhoneIcon, MapPinIcon, EnvelopeIcon } from '@heroicons/react/24/solid';

export default function AboutPage() {
    return (
        <div className="bg-gray-50 min-h-screen py-12">
            <div className="container mx-auto px-6">
                {/* Header Section */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-[#1b4747]">About Us</h1>
                    <p className="text-lg text-gray-600 mt-4">
                        Discover why Halal Holiday Check is the trusted travel partner for Muslim travelers worldwide.
                    </p>
                </div>

                {/* Our Mission */}
                <section className="bg-white rounded-lg shadow-lg p-8 mb-12">
                    <h2 className="text-3xl font-bold text-[#1b4747] mb-4">Our Mission</h2>
                    <p className="text-gray-700 text-lg">
                        The mission of Halal Holiday Check is to make travel easier and more enjoyable for Muslim
                        travelers by offering reliable and quality accommodation options tailored to their specific
                        needs.
                    </p>
                </section>

                {/* What We Offer */}
                <section className="bg-white rounded-lg shadow-lg p-8 mb-12">
                    <h2 className="text-3xl font-bold text-[#1b4747] mb-4">What We Offer</h2>
                    <ul className="space-y-4">
                        <li className="text-gray-700 text-lg flex items-start">
                            <span className="text-[#1b4747] font-bold mr-2">•</span> Muslim-Friendly Accommodation: Halal
                            Holiday Check offers carefully selected hotels for Muslim travelers. Each facility is
                            evaluated to provide Muslim guests with a comfortable and safe accommodation experience
                            tailored to their specific needs.
                        </li>
                        <li className="text-gray-700 text-lg flex items-start">
                            <span className="text-[#1b4747] font-bold mr-2">•</span> Halal Food Options: To make your
                            holiday more special, hotels offered on our platform provide halal food options. Enhance
                            every moment of your journey with delicious and halal food choices.
                        </li>
                        <li className="text-gray-700 text-lg flex items-start">
                            <span className="text-[#1b4747] font-bold mr-2">•</span> Travel Support Team: Halal Holiday
                            Check provides a support team to assist you before, during, and after your travels. From
                            answering your questions to arranging your reservations, our expert team is here to help at
                            every step.
                        </li>
                    </ul>
                </section>

                {/* Why Choose Us */}
                <section className="bg-white rounded-lg shadow-lg p-8 mb-12">
                    <h2 className="text-3xl font-bold text-[#1b4747] mb-4">Why Choose Us</h2>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {[
                            'Expertise and Experience: Extensive experience in understanding and meeting the specific needs of Muslim travelers.',
                            'Reliability and Transparency: A trusted partner with fair pricing, real reviews, and detailed information.',
                            'Extensive Hotel Network: Access to a wide network of hotels catering to Muslim travelers worldwide.',
                            'Customer Satisfaction-Focused Approach: Every customer is valuable, and personalized service is our priority.',
                            'Innovative Technology: User-friendly technology that makes reservations easy and accessible.',
                        ].map((item, idx) => (
                            <li key={idx} className="text-gray-700 text-lg flex items-start">
                                <span className="text-[#1b4747] font-bold mr-2">•</span> {item}
                            </li>
                        ))}
                    </ul>
                </section>

                {/* Contact Information */}
                <section className="bg-[#145e5e] text-white rounded-lg shadow-lg p-8">
                    <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
                    <p className="text-lg mb-4">Feel free to reach out to us for any questions or assistance.</p>
                    <div className="space-y-4">
                        <div className="flex items-center">
                            <PhoneIcon className="w-6 h-6 text-white mr-3" />
                            <p className="text-lg">+90 242 510 4100</p>
                        </div>
                        <div className="flex items-center">
                            <EnvelopeIcon className="w-6 h-6 text-white mr-3" />
                            <p className="text-lg">info@halalholidaycheck.com</p>
                        </div>
                        <div className="flex items-center">
                            <MapPinIcon className="w-6 h-6 text-white mr-3" />
                            <p className="text-lg">
                                Sugözü Mah. Zamanoğlu Cd. Petek İşhanı Sit. Aapt No:73/9 Alanya Antalya Turkey
                            </p>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}
