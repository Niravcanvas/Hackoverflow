"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import SectionHeader from "@/components/SectionHeader";

interface EventType {
    id: number;
    date: string;
    type: string;
    title: string;
    description: string;
    fullDescription: string;
    duration: string;
    location: string;
    difficulty: string;
    participants: string;
    benefits: string[];
    image: string;
    registrationLink: string;
    isRegistrationOpen: boolean;
}


const Events = () => {
    const [selectedEvent, setSelectedEvent] = useState<EventType | null>(null);
    const [previewImage, setPreviewImage] = useState<string | null>(null);

    useEffect(() => {
        if (previewImage) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
        return () => { document.body.style.overflow = "auto"; };
    }, [previewImage]);


    const events: EventType[] = [
        {
            id: 1,
            date: "23rd February, 2026",
            type: "Motion Graphics",
            title: "Blender Basics - Workshop",
            description: "Learn the fundamentals of 3D animation and design using Blender.",
            fullDescription:
                "Blender Basics is a hands-on workshop designed to introduce participants to the world of 3D modeling, animation, and rendering using Blender.",
            duration: "3 Hours",
            location: "Engineering Reception, Pillai HOC Campus",
            difficulty: "Beginner",
            participants: "Counting...",
            benefits: [
                "3D modeling basics",
                "Animation fundamentals",
                "Rendering techniques",
                "Creative expression",
            ],
            image: "/images/Events/Blender Workshop.jpeg",
            registrationLink: "https://forms.gle/5h4fTREMg4y1AUoK9",
            isRegistrationOpen: true,
        },
        {
            id: 2,
            date: "28th January, 2026",
            type: "Gaming",
            title: "Free Fire",
            description: "Battle royale competition with strategic gameplay.",
            fullDescription:
                "Free Fire tournament where players compete in intense battle royale matches.",
            duration: "8 Hours",
            location: "Engineering Reception, Pillai HOC Campus",
            difficulty: "Intermediate",
            participants: "120",
            benefits: [
                "Strategic thinking",
                "Team coordination",
                "Quick decision making",
                "Competitive experience",
            ],
            image: "/images/Events/Domain Expansion-FreeFire.JPG",
            registrationLink: "Registration Closed",
            isRegistrationOpen: false,
        },
        {
            id: 3,
            date: "29th January, 2026",
            type: "Gaming",
            title: "BGMI",
            description: "High-intensity battle royale tournament.",
            fullDescription:
                "BGMI competitive event where squads compete for championship title. Focus on survival skills, communication, and tactical gameplay.",
            duration: "6 Hours",
            location: "Lab 1",
            difficulty: "Intermediate",
            participants: "150",
            benefits: [
                "Team communication",
                "Strategic planning",
                "Competitive gaming exposure",
            ],
            image: "/images/Events/Krafton-BGMI.jpg",
            registrationLink: "Registration Closed",
            isRegistrationOpen: false,
        },
        {
            id: 4,
            date: "1st February, 2026",
            type: "Gaming",
            title: "Real Cricket",
            description: "Robotics Challenge competition.",
            fullDescription:
                "RC is a robotics-based challenge where teams design and control robots to complete specific tasks.",
            duration: "5 Hours",
            location: "Workshop Area",
            difficulty: "Intermediate",
            participants: "60",
            benefits: [
                "Hands-on robotics",
                "Team collaboration",
                "Engineering application",
            ],
            image: "/images/Events/Krafton-RC Cricket.jpg",
            registrationLink: "Registration Closed",
            isRegistrationOpen: false,
        },
        {
            id: 5,
            date: "2nd February, 2026",
            type: "Cultural",
            title: "Cosplay",
            description: "Creative costume and character performance event.",
            fullDescription:
                "Cosplay event where participants dress up as their favorite characters and perform on stage.",
            duration: "3 Hours",
            location: "Main Auditorium",
            difficulty: "Beginner",
            participants: "160",
            benefits: [
                "Creativity showcase",
                "Stage performance confidence",
                "Fun cultural experience",
            ],
            image: "/images/Events/Domain Expansion-Cosplay.JPG",
            registrationLink: "Registration Closed",
            isRegistrationOpen: false,
        },
        // {
        //     id: 6,
        //     date: "30th January, 2026",
        //     type: "Educational",
        //     title: "Study Aboard",
        //     description: "Fun technical event combining learning and challenges.",
        //     fullDescription:
        //         "Study Abort is a creative technical event where participants solve tricky academic and logical challenges in a fun and engaging environment.",
        //     duration: "3 Hours",
        //     location: "Seminar Hall",
        //     difficulty: "Beginner",
        //     participants: "200",
        //     benefits: [
        //         "Logical reasoning",
        //         "Problem solving",
        //         "Fun learning experience",
        //     ],
        //     image: "/images/Events/#",
        // },
        // {
        //     id: 7,
        //     date: "31st January, 2026",
        //     type: "Educational",
        //     title: "AECC",
        //     description: "Annual Coding Championship competition.",
        //     fullDescription:
        //         "ACC is a coding competition designed to test programming skills, algorithmic thinking, and speed.",
        //     duration: "4 Hours",
        //     location: "Computer Lab 2",
        //     difficulty: "Advanced",
        //     participants: "100",
        //     benefits: [
        //         "Coding skills improvement",
        //         "Algorithm practice",
        //         "Competitive exposure",
        //     ],
        //     image: "/images/Events/#",
        // }
    ];

    const handleShare = async (event: EventType) => {
        const shareUrl = window.location.href;
        const shareData = {
            title: event.title,
            text: event.description,
            url: shareUrl,
        };

        try {
            if (navigator.share) {
                await navigator.share(shareData);
            } else {
                await navigator.clipboard.writeText(shareUrl);
                console.log("Copied!");
            }
        } catch (error) {
            console.error("Error sharing:", error);
        }
    };

    if (selectedEvent) {
        return (
            <section className="min-h-screen bg-linear-to-br from-black via-[#0d0d0d] to-black text-white px-6 py-32 relative">
                <div className="max-w-7xl mx-auto">
                    <button
                        onClick={() => setSelectedEvent(null)}
                        className="mb-10 text-orange-400 hover:text-orange-500 transition"
                    >
                        ← Back to Events
                    </button>

                    <div className="grid lg:grid-cols-2 gap-16 items-start">
                        <div
                            onClick={() => setPreviewImage(selectedEvent.image)}
                            className="relative h-105 w-full rounded-3xl overflow-hidden shadow-[0_0_60px_rgba(249,115,22,0.25)] cursor-zoom-in"
                        >
                            <Image
                                src={selectedEvent.image}
                                alt={selectedEvent.title}
                                fill
                                className={
                                    selectedEvent?.title === "Blender Basics - Workshop"
                                        ? "object-contain"
                                        : "object-cover hover:scale-105 transition duration-500"
                                }
                            />
                        </div>

                        <div>
                            <h1 className="text-5xl font-bold text-white mb-4">
                                {selectedEvent.title}
                            </h1>

                            <p className="text-orange-400 mb-6">
                                📅 {selectedEvent.date}
                            </p>

                            <p className="text-gray-400 leading-relaxed mb-10">
                                {selectedEvent.fullDescription}
                            </p>

                            <div className="grid sm:grid-cols-2 gap-6 mb-12">
                                <Info label="Duration" value={selectedEvent.duration} />
                                <Info label="Location" value={selectedEvent.location} />
                                <Info label="Difficulty" value={selectedEvent.difficulty} />
                                <Info label="Participants" value={selectedEvent.participants} />
                            </div>

                            <div className="mb-10">
                                <h3 className="text-2xl font-semibold mb-6">
                                    What You&apos;ll Learn
                                </h3>

                                <ul className="space-y-3 text-gray-300">
                                    {selectedEvent.benefits.map((item, i) => (
                                        <li key={i} className="flex items-start gap-3">
                                            <span className="text-orange-500">✔</span>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="flex gap-6">
                                {selectedEvent.isRegistrationOpen ? (
                                    <a
                                        href={selectedEvent.registrationLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="px-10 py-4 rounded-xl bg-linear-to-r from-orange-500 to-orange-600 font-semibold hover:scale-105 transition inline-block text-center"
                                    >
                                        REGISTER NOW
                                    </a>
                                ) : (
                                    <button
                                        disabled
                                        className="px-10 py-4 rounded-xl bg-gray-700 text-gray-400 font-semibold cursor-not-allowed"
                                    >
                                        REGISTRATION CLOSED
                                    </button>
                                )}

                                <button
                                    onClick={() => handleShare(selectedEvent)}
                                    className="px-10 py-4 rounded-xl border border-gray-600 hover:border-orange-500 transition"
                                >
                                    SHARE EVENT
                                </button>
                            </div>

                        </div>
                    </div>
                </div>

                {previewImage && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md">
                        <div
                            className="absolute inset-0"
                            onClick={() => setPreviewImage(null)}
                        />

                        {/* Image */}
                        <div className="relative w-[90%] max-w-6xl h-[85vh] z-10">
                            <Image
                                src={previewImage}
                                alt="Full View"
                                fill
                                className="object-contain"
                            />
                        </div>

                        {/* Close Button */}
                        <button
                            onClick={() => setPreviewImage(null)}
                            className="absolute top-6 right-6 z-20 text-white text-4xl font-bold hover:text-orange-500 transition"
                        >
                            ✕
                        </button>
                    </div>
                )}
            </section>
        );
    }

    return (
        <section className="relative py-32 px-6 bg-linear-to-b from-black via-[#0d0d0d] to-black overflow-hidden">
            <div className="relative max-w-7xl mx-auto">
                <div className="section-header-container">
                    <SectionHeader
                        badge="Journey Ahead"
                        title="Our"
                        gradientText="Events"
                        subtitle="The final countdown to three days of innovation, energy, and impact"
                    />
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
                    {events.map((event) => (
                        <div
                            key={event.id}
                            onClick={() => setSelectedEvent(event)}
                            className="group bg-[#111] border border-orange-500/20 rounded-3xl p-6 cursor-pointer transition-all duration-500 hover:-translate-y-4 hover:shadow-[0_0_40px_rgba(249,115,22,0.4)]"
                        >
                            <div className="relative h-44 w-full mb-6 rounded-xl overflow-hidden">
                                <Image
                                    src={event.image}
                                    alt={event.title}
                                    fill
                                    className="object-cover group-hover:scale-110 transition duration-500"
                                />
                            </div>

                            <p className="text-orange-400 text-sm mb-2">
                                {event.date}
                            </p>

                            <h3 className="text-2xl font-bold mb-3 group-hover:text-orange-400 transition">
                                {event.title}
                            </h3>

                            <p className="text-gray-400 text-sm">
                                {event.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>

    );
};

const Info = ({ label, value }: { label: string; value: string }) => (
    <div className="bg-[#111] border border-orange-500/20 rounded-2xl p-6">
        <p className="text-orange-400 text-sm mb-2 uppercase tracking-wide">
            {label}
        </p>
        <p className="text-xl font-semibold text-white">{value}</p>
    </div>
);

export default Events;