export default function HotelDetailsPage({ params }: { params: { id: string } }) {
    const hotel = {
        name: "Luxury Halal Hotel",
        description: "A luxurious hotel experience with halal-friendly amenities.",
        price: 200,
        location: "Istanbul",
        amenities: ["Free Wi-Fi", "Separate Pools", "Halal Food"],
        image: "/hotel1.jpg",
    };

    return (
        <main className="min-h-screen bg-gray-50 text-gray-800">
            <header className="bg-[#145e5e] text-white py-6">
                <div className="container mx-auto px-4">
                    <h1 className="text-2xl font-bold">{hotel.name}</h1>
                </div>
            </header>

            <section className="container mx-auto px-4 py-12">
                <div className="flex flex-col md:flex-row gap-8">
                    <img src={hotel.image} alt={hotel.name} className="w-full md:w-1/2 rounded-lg shadow" />
                    <div className="flex-1">
                        <h2 className="text-3xl font-bold mb-4">{hotel.name}</h2>
                        <p className="text-gray-600 mb-6">{hotel.description}</p>
                        <p className="text-lg font-bold mb-4">Price: ${hotel.price} / night</p>
                        <ul className="mb-6">
                            {hotel.amenities.map((amenity, index) => (
                                <li key={index} className="text-gray-600">✔ {amenity}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>
        </main>
    );
}
