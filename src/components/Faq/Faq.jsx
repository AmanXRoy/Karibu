import React from 'react'

const Faq = () => {

    const faq = [
        {
            question: "How can I buy a lottery ticket?",
            answer: "Create an account, choose the lottery game, select your numbers or go with a quick pick, and proceed to checkout. Our secure payment options make buying tickets simple and safe."
        },
        {
            question: "Who is eligible to participate?",
            answer: "You must be at least [age requirement] years old and meet the legal requirements in your area. Check your local regulations to ensure eligibility."
        },
        {
            question: "How will I know if I win?",
            answer: "Winners are notified directly through their account contact details. You can also view winning numbers on the 'Results' page or in the 'My Tickets' section."
        },
        {
            question: "How do I claim my prize?",
            answer: "Smaller winnings are credited directly to your account. For larger prizes, follow the instructions provided in your winner notification, or contact support at [Karibuwinner@gmail.com]."
        },
        {
            question: "Are tickets refundable?",
            answer: "All sales are final. Please confirm your selections before completing your purchase, as tickets cannot be canceled or refunded."
        },
        {
            question: "Is my personal and payment information secure?",
            answer: "Yes, we prioritize your security. Our site uses encryption, and payments are processed through secure third-party providers to keep your information safe."
        },
        {
            question: "Can I play from outside the country?",
            answer: "Participation may be restricted by location, so please review our terms and your local regulations before purchasing."
        },
        {
            question: "What happens if I don’t claim a prize immediately?",
            answer: "Prizes must typically be claimed within [specified time frame, e.g., 90 days]. Unclaimed prizes may be forfeited after this period."
        },
        {
            question: "How do I check the latest lottery results?",
            answer: "Lottery results are posted in real-time on our site’s 'Results' page, and you can also check your tickets in your account."
        },
        {
            question: "Can I contact support with questions?",
            answer: "Of course! Our support team is here to help. Reach us at [Karibuwinner@gmail.com] or through our 'Contact Us' page with any questions or concerns."
        }
    ];

    return (
        <div className='px-16 py-8 text-[#000]'>
            <h1 className='text-5xl  font-semibold mb-3'>FAQ</h1>
            <p className='text-xl text-[#5BB450] mb-6'>Frequently Asked Questions</p>
            <ol>
                {faq.map((item, index) => <li className='mb-4'>
                    <p>{index + 1}. {item.question}</p>
                    <p>{item.answer}</p>
                </li>)}
            </ol>
        </div>
    )
}

export default Faq