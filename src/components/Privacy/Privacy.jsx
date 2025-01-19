import React from 'react'

const Privacy = () => {
    const privacyPolicy = [
        {
          section: "Introduction",
          content: "Welcome to Karibu Winner! We value your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, and safeguard your data when you use our website or services."
        },
        {
          section: "Information We Collect",
          content: [
            "Personal Information: We may collect personal details such as your name, email address, mailing address, and phone number when you register, purchase a ticket, or interact with our site.",
            "Payment Information: For ticket purchases, we may collect payment details, such as credit card information, which is securely processed through our third-party payment provider.",
            "Usage Data: We collect data about how you access and use the site, including your IP address, browser type, and interaction with site features to improve our services."
          ]
        },
        {
          section: "How We Use Your Information",
          content: [
            "Process your lottery ticket purchases and notify you of winnings.",
            "Enhance and personalize your experience on our site.",
            "Send promotional offers and updates (you can opt-out at any time).",
            "Comply with legal obligations and prevent fraud."
          ]
        },
        {
          section: "Sharing Your Information",
          content: "Your data will not be sold or shared with third parties except: With trusted partners who help us operate the site and process payments. To comply with legal obligations or respond to lawful requests."
        },
        {
          section: "Data Security",
          content: "We implement security measures to protect your data from unauthorized access. However, no online service is 100% secure, and we cannot guarantee absolute security."
        },
        {
          section: "Your Rights",
          content: "Depending on your location, you may have rights regarding your personal data, such as accessing, updating, or deleting it. Contact us at Karibuwinner@gmail.com to exercise your rights."
        },
        {
          section: "Changes to This Privacy Policy",
          content: "We may update this policy from time to time. Changes will be posted on this page, and we encourage you to review the policy periodically."
        },
        {
          section: "Contact Us",
          content: "For any questions or concerns about our Privacy Policy, please contact us at [Karibuwinner@gmail.com]."
        }
      ];
    
      return (
        <div className='px-16 py-8 text-[#000]'>
          <h1 className='text-5xl  font-semibold mb-3'>Privacy Policy</h1>
          {privacyPolicy.map((section, index) => (
            <div key={index} style={{ marginBottom: "20px" }}>
              <h2 className='mb-2 font-semibold'>{index + 1}. {section.section}</h2>
              {Array.isArray(section.content) ? (
                <ul>
                  {section.content.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              ) : (
                <p>{section.content}</p>
              )}
            </div>
          ))}
        </div>
      );
    
}

export default Privacy