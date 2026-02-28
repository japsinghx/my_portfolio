const Introduction = () => {
    return (
        <section className="max-w-3xl px-12 pt-24 pb-12">
            {/* Header */}
            <div className="mb-16">
                <h1 className="text-4xl font-normal text-gray-900 dark:text-gray-100 mb-1">
                    Japmanpreet Singh
                </h1>
                <p className="text-lg text-gray-500 dark:text-gray-400">
                    Product-Oriented Engineer
                </p>
            </div>

            {/* About Section */}
            <div className="mb-0">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-6">
                    About
                </h2>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                    I'm a hands-on engineer passionate about owning products end-to-end. From discovering user needs and shaping strategy to leading cross-functional delivery and driving measurable outcomes.
With experience owning feature lifecycles and platform deliveries in fintech, mobile apps, and e-commerce. I excel at prioritizing high-impact work, automating secure workflows in regulated environments, and iterating fast with AI-powered tools.
                </p>
                <a 
                    href="/experience" 
                    className="inline-flex items-center gap-1 text-[#2997FF] hover:text-[#147CE5] transition-colors"
                >
                    View my experience
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15 15" className="w-3 h-3" fill="#2997FF">
                        <path d="M11.5 3a.5.5 0 0 1 .5.5V9l-.01.102a.5.5 0 0 1-.98-.001L11 9V4.707l-6.647 6.647a.5.5 0 0 1-.707-.707L10.293 4H6a.5.5 0 0 1 0-1z"/>
                    </svg>
                </a>
            </div>
        </section>
    );
};

export default Introduction;
