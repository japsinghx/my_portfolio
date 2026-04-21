const FlashbackPrivacy = () => {
    const sections = [
        {
            heading: "Overview",
            body: "Flashback is an instant-camera app that lets you capture and keep photos on your iPhone. This privacy policy explains what information the app accesses, how it is used, and how it is stored."
        },
        {
            heading: "Information We Access",
            body: "Flashback requests access to the following device features:",
            bullets: [
                { label: "Camera", detail: "used to capture photos within the app. Images are processed locally and saved directly to your device." },
                { label: "Location (While Using the App)", detail: "used only to look up your approximate city name, which is optionally printed on your photos. Your precise coordinates are never stored or transmitted." },
                { label: "Photo Library", detail: "used only when you choose to export a photo to your camera roll. Flashback does not read from your existing photo library." }
            ]
        },
        {
            heading: "How Your Data Is Stored",
            body: "All photos and app data are stored exclusively on your device using Apple's on-device storage (SwiftData and the local file system). No data is uploaded to any server, cloud service, or third party — by us or by any SDK we use.",
            footnote: "Deleting the app permanently removes all photos and data stored by Flashback."
        },
        {
            heading: "Data Sharing",
            body: "We do not share, sell, rent, or transmit your data to any third party. Flashback has no user accounts, no analytics, no advertising, and no third-party SDKs."
        },
        {
            heading: "Children's Privacy",
            body: "Flashback does not knowingly collect any information from anyone, including children under the age of 13. Because no data is collected at all, the app is safe for all ages."
        },
        {
            heading: "Changes to This Policy",
            body: "If this policy is updated, the revised version will be posted here with an updated date at the top of the page. Continued use of the app after any changes constitutes acceptance of the updated policy."
        }
    ];

    return (
        <section className="max-w-3xl mx-auto px-6 md:px-12 py-16 md:py-24">
            <div className="mb-12">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                    Flashback — Privacy Policy
                </h2>
                <p className="text-sm text-gray-400 dark:text-gray-500 mt-1">Last updated: April 17, 2026</p>
            </div>

            {/* Summary highlight */}
            <div className="border border-gray-200 dark:border-gray-800 rounded-xl px-6 py-5 mb-12">
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                    <span className="font-semibold text-gray-900 dark:text-gray-100">The short version:</span>{" "}
                    Flashback does not collect, transmit, or share any personal data. Everything stays on your device.
                </p>
            </div>

            <div className="space-y-10">
                {sections.map((section, i) => (
                    <div key={i} className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-2 md:gap-8 items-start">
                        <div className="text-sm font-medium text-gray-900 dark:text-gray-100 pt-0.5">
                            {section.heading}
                        </div>
                        <div>
                            {section.body && (
                                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                                    {section.body}
                                </p>
                            )}
                            {section.bullets && (
                                <ul className="mt-3 space-y-2">
                                    {section.bullets.map((bullet, j) => (
                                        <li key={j} className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed flex gap-2 items-start">
                                            <span className="text-gray-400 dark:text-gray-500 shrink-0">•</span>
                                            <span>
                                                <span className="font-medium text-gray-800 dark:text-gray-200">{bullet.label}</span>
                                                {" — "}
                                                {bullet.detail}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            )}
                            {section.footnote && (
                                <p className="mt-3 text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                                    {section.footnote}
                                </p>
                            )}
                        </div>
                    </div>
                ))}

                {/* Contact section */}
                <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-2 md:gap-8 items-start">
                    <div className="text-sm font-medium text-gray-900 dark:text-gray-100 pt-0.5">
                        Contact
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                        If you have any questions about this privacy policy, you can reach us at{" "}
                        <a
                            href="mailto:japsinghx@gmail.com"
                            className="text-[#2997FF] hover:text-[#147CE5] transition-colors"
                        >
                            japsinghx@gmail.com
                        </a>
                        .
                    </p>
                </div>
            </div>

            <p className="mt-16 text-xs text-gray-400 dark:text-gray-600">
                &copy; 2026 Flashback. All rights reserved.
            </p>
        </section>
    );
};

export default FlashbackPrivacy;
