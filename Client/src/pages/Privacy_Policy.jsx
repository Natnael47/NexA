import React, { useState } from 'react';

const PrivacyPolicy = () => {
    const [openSection, setOpenSection] = useState(null);

    const toggleSection = (section) => {
        setOpenSection(openSection === section ? null : section);
    };

    const sections = [
        { title: "Introduction", content: "Welcome to our Privacy Policy page. Your privacy is critically important to us, and we are committed to protecting your personal information." },
        { title: "Information We Collect", content: "We collect various types of information, including personal details (such as your name and email address), browsing data, and cookies to enhance your experience." },
        { title: "How We Use Your Information", content: "We use your data to personalize your experience, provide customer support, and improve our services. We do not sell or share your data without your consent." },
        { title: "Data Security", content: "We take appropriate security measures to protect your information from unauthorized access, alteration, or destruction." },
        { title: "Your Rights", content: "You have the right to access, update, or delete your personal data. If you have any concerns, please contact us." },
        { title: "Changes to This Policy", content: "We may update our Privacy Policy from time to time. Any changes will be posted on this page, so please review it periodically." },
        { title: "Contact Us", content: "If you have any questions about this Privacy Policy, feel free to contact us at support@example.com." }
    ];

    return (
        <div className='w-4/5 mx-auto mt-28 pb-16'>
            <h1 className='text-2xl sm:text-4xl font-bold mb-4 text-center'>Privacy <span className='font-light underline underline-offset-4 decoration-1'>Policy</span></h1>
            <p className="text-gray-500 max-w-lg text-center mb-8 mx-auto">
                Passionate About Properties, Dedicated to Your Vision
            </p>

            <div className='text-gray-700 text-lg space-y-4'>
                {sections.map((section, index) => (
                    <div key={index} className='border-b border-gray-300 py-3'>
                        <button
                            className='flex justify-between items-center w-full text-left text-xl font-semibold p-2 hover:bg-gray-100 rounded-lg transition'
                            onClick={() => toggleSection(index)}
                        >
                            {section.title}
                            <span className='text-2xl'>{openSection === index ? '−' : '+'}</span>
                        </button>
                        {openSection === index && (
                            <p className='p-3 bg-gray-50 rounded-lg shadow-md'>{section.content}</p>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PrivacyPolicy;