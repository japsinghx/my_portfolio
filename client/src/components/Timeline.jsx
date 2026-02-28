import { Link } from "react-router-dom";
import { useState } from "react";
import { timelineItems } from "../data/timelineData";

const Timeline = () => {
    // State to track current item index - start with last item (most recent)
    const [currentIndex, setCurrentIndex] = useState(timelineItems.length - 1);

    const currentItem = timelineItems[currentIndex];

    return (
        <section className="w-full py-12 px-8">
            <div className="flex items-center gap-4 mb-8">
                <h2 className="text-2xl text-gray-500 dark:text-gray-400">Professional Journey</h2>
                <Link to="/experience" className="text-sm text-blue-500 hover:text-blue-400 dark:text-blue-400 dark:hover:text-blue-300 transition">
                    Learn more &rsaquo;
                </Link>
            </div>

            {/* Apple-style Segmented Control */}
            <div className="mb-8">
                <div className="inline-flex bg-gray-100 dark:bg-gray-800 rounded-full p-1">
                    {timelineItems.map((item, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentIndex(index)}
                            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                                index === currentIndex
                                    ? 'bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 shadow-sm'
                                    : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200'
                            }`}
                        >
                            {item.displayName}
                        </button>
                    ))}
                </div>
            </div>

            {/* Card - iPod minimalist style */}
            <div className="inline-block max-w-4xl">
                <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-sm border border-gray-200 dark:border-gray-800">
                    <h3 className="text-lg font-large text-gray-900 dark:text-gray-100 mb-3">{currentItem.title}</h3>
                    <p className="text-base font-medium text-gray-600 dark:text-gray-400 mb-1">{currentItem.organization}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-500 mb-1">{currentItem.location}</p>
                    <p className="text-sm text-gray-400 dark:text-gray-600 mb-6">{currentItem.date}</p>
                    
                    {currentItem.technologies && currentItem.technologies.length > 0 && (
                        <div className="flex flex-wrap gap-2">
                            {currentItem.technologies.map((tech, i) => (
                                <span
                                    key={i}
                                    className="text-sm bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 px-3 py-1.5 rounded-lg"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Timeline;