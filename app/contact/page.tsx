'use client';

import { EnvelopeIcon, PhoneIcon, MapPinIcon } from '@heroicons/react/24/solid';

export default function ContactPage() {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        alert('Thank you for reaching out! We will get back to you soon.');
    };

    return (
        <div className="min-h-screen bg-gray-50 py-12">
            <div className="container mx-auto px-6">
                {/* Header */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-[#1b4747]">Contact Us</h1>
                    <p className="text-lg text-gray-600 mt-4">
                        Have questions? Need help? Feel free to get in touch with us!
                    </p>
                </div>

                {/* Contact Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* Contact Info */}
                    <div className="bg-white shadow-lg rounded-lg p-8">
                        <h2 className="text-2xl font-bold text-[#1b4747] mb-6">Get in Touch</h2>
                        <div className="space-y-4">
                            <div className="flex items-center">
                                <PhoneIcon className="w-6 h-6 text-[#1b4747] mr-3" />
                                <p className="text-lg">+90 242 510 4100</p>
                            </div>
                            <div className="flex items-center">
                                <EnvelopeIcon className="w-6 h-6 text-[#1b4747] mr-3" />
                                <p className="text-lg">info@halalholidaycheck.com</p>
                            </div>
                            <div className="flex items-center">
                                <MapPinIcon className="w-6 h-6 text-[#1b4747] mr-3" />
                                <p className="text-lg">
                                    Sugözü Mah. Zamanoğlu Cd. Petek İşhanı Sit. Aapt No:73/9 Alanya Antalya Turkey
                                </p>
                            </div>
                        </div>
                        <div className="mt-6">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31851.548098571047!2d31.9835628!3d36.5462576!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14dca2a9d5f514a3%3A0xb4e7f4893bb6a7a2!2sAlanya%2C%20Antalya%2C%20Turkey!5e0!3m2!1sen!2sus!4v1698319347469!5m2!1sen!2sus"
                                className="w-full h-64 rounded-lg shadow"
                                allowFullScreen
                                loading="lazy"
                            ></iframe>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-white shadow-lg rounded-lg p-8">
                        <h2 className="text-2xl font-bold text-[#1b4747] mb-6">Send Us a Message</h2>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    placeholder="Your name"
                                    required
                                    className="w-full border border-gray-300 rounded-lg p-3 focus:ring focus:ring-blue-500"
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    placeholder="Your email"
                                    required
                                    className="w-full border border-gray-300 rounded-lg p-3 focus:ring focus:ring-blue-500"
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    placeholder="Your message"
                                    rows={5}
                                    required
                                    className="w-full border border-gray-300 rounded-lg p-3 focus:ring focus:ring-blue-500"
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-[#145e5e] text-white font-bold py-3 rounded-lg hover:bg-blue-700 transition"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
