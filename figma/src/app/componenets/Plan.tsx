"use client"
import { useEffect, useRef, useState } from "react";
import { FiCheckCircle } from "react-icons/fi";

const Plan = () => {
  // State to track which card is hovered (by index) or null if no card is hovered
  const [hovered, setHovered] = useState<number | null>(null);

  // State to track the currently active card based on scroll position
  const [hoveredCard, setHoveredCard] = useState<number | null>(2);  // Initially set to the second card

  // Ref to get a reference to the scrollable container (div holding the cards)
  const cardsRef = useRef<HTMLDivElement | null>(null);

  // This effect runs when the component is mounted
  useEffect(() => {
    // This function will be called whenever the user scrolls the container
    const handleScroll = () => {
      if (cardsRef.current) {
        // Get the current scroll position of the container
        const scrollPosition = cardsRef.current.scrollLeft;
        
        // Calculate the width of a single card (assuming there are 3 cards)
        const cardWidth = cardsRef.current.scrollWidth / 3;

        // Check where the scroll position is and update the active card based on that
        if (scrollPosition < cardWidth / 2) {
          setHoveredCard(1);  // The first card is active
        } else if (scrollPosition >= cardWidth / 2 && scrollPosition < cardWidth * 1.5) {
          setHoveredCard(2);  // The second card is active
        } else {
          setHoveredCard(3);  // The third card is active
        }
      }
    };

    // Get the reference to the div containing the cards
    const refCurrent = cardsRef.current;
    
    if (refCurrent) {
      // Add the scroll event listener to the container
      refCurrent.addEventListener('scroll', handleScroll);
      
      // Scroll to the position that shows the second card by default
      refCurrent.scrollLeft = refCurrent.scrollWidth / 3;  // Adjust this value as needed
    }

    // Cleanup function: Remove the scroll event listener when the component unmounts
    return () => {
      if (refCurrent) {
        refCurrent.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);  // The empty dependency array means this effect runs only once when the component mounts

  return (
    <div className="sm:px-[32px] xl:[220px] px-[20px] flex flex-col gap-20 sm:mt-14">
        <div className="text-center">
            <h1 className="lg:text-[72px] sm:text-[7vw] text-[7vmax] font-[700]">Choose
                <span className="relative inline-block z-10">Your Plan</span></h1>

            <p className="md:w-[70%] lg:text-[18px] text-[18px] sm:mt-0 mt-2 mx-auto">Whether you want to get organized, keep your personal life on track, or boost workplace productivity, Evernote has the right plan for you.</p>
        </div>
        <div className="md:flex hidden  gap-6 h-screen">
                {/* 1 */}
                <div
                    onMouseEnter={() => setHovered(1)}
                    onMouseLeave={() => setHovered(null)}
                    className={`p-[40px] h-fit  w-[437px] rounded-md border border-zinc-700 flex flex-col gap-5 group transform transition-transform duration-300 
        ${hovered === 1 ? 'hover:scale-y-110 hover:scale-x-105 hover:bg-[#043873]' : ''}`}
                >
                    <div className="flex flex-col gap-3">
                        <p className="text-[24px] group-hover:text-white font-[600]">Free</p>
                        <h1 className="font-[700] text-[36px] group-hover:text-[#FFE492]">$0</h1>
                        <p className="text-[18px] group-hover:text-white font-[500]">Capture ideas and find them quickly</p>
                    </div>

                    <div className="flex flex-col gap-3 lg:w-[90%]">
                        <div className="lg:text-[15px] sm:text-[13px] group-hover:text-white font-[400] flex items-center gap-3"><span className="text-[20px] font-bold group-hover:text-[#FFE492]"><FiCheckCircle /></span> Sync unlimited devices</div>
                        <div className="lg:text-[15px] sm:text-[13px] group-hover:text-white font-[400] flex items-center gap-3"><span className="text-[20px] font-bold group-hover:text-[#FFE492]"><FiCheckCircle /></span> 10 GB monthly uploads</div>
                        <div className="lg:text-[15px] sm:text-[13px] group-hover:text-white font-[400] flex items-center gap-3"><span className="text-[20px] font-bold group-hover:text-[#FFE492]"><FiCheckCircle /></span>200 MB max. note size</div>
                        <div className="lg:text-[15px] sm:text-[13px] group-hover:text-white font-[400] flex items-center gap-3"><span className="text-[20px] font-bold group-hover:text-[#FFE492]"><FiCheckCircle /></span>Customize Home dashboard and access extra widgets</div>
                        <div className="lg:text-[15px] sm:text-[13px] group-hover:text-white font-[400] flex items-center gap-3"><span className="text-[20px] font-bold group-hover:text-[#FFE492]"><FiCheckCircle /></span>Connect primary Google Calendar account</div>
                        <div className="lg:text-[15px] sm:text-[13px] group-hover:text-white font-[400] flex items-center gap-3"><span className="text-[20px] font-bold group-hover:text-[#FFE492]"><FiCheckCircle /></span>Add due dates, reminders, and notifications to your tasks</div>
                    </div>

                    <div>
                        <button className="rounded-md border px-6 py-2 lg:text-[16px] sm:text-[14px] font-[500] group-hover:bg-[#4F9CF9] group-hover:border-none group-hover:text-white">Get Started</button>
                    </div>

                </div>
                {/* 2 */}
                <div
                    onMouseEnter={() => setHovered(2)}
                    onMouseLeave={() => setHovered(null)}
                    className={`p-[40px] h-fit  w-[437px] rounded-md border border-zinc-700 flex flex-col gap-5 group transform transition-transform duration-300 
        ${hovered === 2 || hovered === null ? 'scale-y-110 scale-x-105 bg-[#043873]' : ''}`}
                >

                    <div className="flex flex-col gap-3">
                        <p className={`text-[24px] font-[600] ${hovered === 2 || hovered === null ? 'text-white' : ''}`}>Personal</p>
                        <h1 className={`font-[700] text-[36px] ${hovered === 2 || hovered === null ? 'text-[#FFE492]' : ''}`}>$11.99</h1>
                        <p className={`text-[18px] font-[500] ${hovered === 2 || hovered === null ? 'text-white' : ''}`}>
                            Keep home and family on track
                        </p>
                    </div>


                    <div className="flex flex-col gap-3 lg:w-[90%]">
                        {[
                            'Sync unlimited devices',
                            '10 GB monthly uploads',
                            '200 MB max. note size',
                            'Customize Home dashboard and access extra widgets',
                            'Connect primary Google Calendar account',
                            'Add due dates, reminders, and notifications to your tasks',
                        ].map((text, index) => (
                            <div
                                key={index}
                                className={`lg:text-[15px] sm:text-[13px] font-[400] flex items-center gap-3 ${hovered === 2 || hovered === null ? 'text-white' : ''}`}
                            >
                                <span className={`text-[20px] font-bold ${hovered === 2 || hovered === null ? 'text-[#FFE492]' : ''}`}>
                                    <FiCheckCircle />
                                </span>
                                {text}
                            </div>
                        ))}
                    </div>


                    <div>
                        <button
                            className={`rounded-md border px-6 py-2 lg:text-[16px] sm:text-[14px] font-[500]
            ${hovered === 2 || hovered === null ? 'bg-[#4F9CF9] border-none text-white' : ''}`}
                        >
                            Get Started
                        </button>
                    </div>
                </div>
                {/* 3 */}
                <div
                    onMouseEnter={() => setHovered(3)}
                    onMouseLeave={() => setHovered(null)}
                    className={`p-[40px] h-fit  w-[437px] rounded-md border border-zinc-800 flex flex-col gap-5 group transform transition-transform duration-300 
        ${hovered === 3 ? 'hover:scale-y-110 hover:scale-x-105 hover:bg-[#043873]' : ''}`}
                >
                    <div className="flex flex-col gap-3">
                        <p className="text-[24px] font-[600] group-hover:text-white">Organization</p>
                        <h1 className="font-[700] text-[36px] group-hover:text-[#FFE492]">$49.99</h1>
                        <p className="text-[18px] font-[500] group-hover:text-white">Capture ideas and find them quickly</p>
                    </div>

                    <div className="flex flex-col gap-3 lg:w-[90%]">
                        <div className="lg:text-[15px] sm:text-[13px] group-hover:text-white font-[400] flex items-center gap-3"><span className="text-[20px] font-bold group-hover:text-[#FFE492]"><FiCheckCircle /></span> Sync unlimited devices</div>
                        <div className="lg:text-[15px] sm:text-[13px] group-hover:text-white font-[400] flex items-center gap-3"><span className="text-[20px] font-bold group-hover:text-[#FFE492]"><FiCheckCircle /></span> 10 GB monthly uploads</div>
                        <div className="lg:text-[15px] sm:text-[13px] group-hover:text-white font-[400] flex items-center gap-3"><span className="text-[20px] font-bold group-hover:text-[#FFE492]"><FiCheckCircle /></span>200 MB max. note size</div>
                        <div className="lg:text-[15px] sm:text-[13px] group-hover:text-white font-[400] flex items-center gap-3"><span className="text-[20px] font-bold group-hover:text-[#FFE492]"><FiCheckCircle /></span>Customize Home dashboard and access extra widgets</div>
                        <div className="lg:text-[15px] sm:text-[13px] group-hover:text-white font-[400] flex items-center gap-3"><span className="text-[20px] font-bold group-hover:text-[#FFE492]"><FiCheckCircle /></span>Connect primary Google Calendar account</div>
                        <div className="lg:text-[15px] sm:text-[13px] group-hover:text-white font-[400] flex items-center gap-3"><span className="text-[20px] font-bold group-hover:text-[#FFE492]"><FiCheckCircle /></span>Add due dates, reminders, and notifications to your tasks</div>
                    </div>

                    <div>
                        <button className="rounded-md border px-6 py-2 lg:text-[16px] sm:text-[14px] font-[500] group-hover:bg-[#4F9CF9] group-hover:border-none group-hover:text-white">Get Started</button>
                    </div>
                </div>
            </div>

            {/* cards on mobile */}
            <div
                ref={cardsRef}
                className="md:hidden flex snap-x gap-6  overflow-x-auto scroll-smooth"
            >
                {/* Card 1 */}
                <div
                    className={`px-[20px] py-[25px] mx-auto mb-10 h-fit w-[310px] flex-shrink-0 rounded-xl border border-zinc-700 flex flex-col gap-5 group transform transition-transform duration-300 snap-center ${hoveredCard === 1 ? 'bg-[#043873]' : ''}`}
                >
                    <div className="flex flex-col gap-1">
                        <p className={`text-[24px] font-[600] ${hoveredCard === 1 ? 'text-white' : 'text-black'}`}>Free</p>
                        <h1 className={`font-[700] text-[36px] ${hoveredCard === 1 ? 'text-[#FFE492]' : 'text-black'}`}>$0</h1>
                        <p className={`text-[18px] font-[500] ${hoveredCard === 1 ? 'text-white' : 'text-black'}`}>Capture ideas and find quickly</p>
                    </div>
                    <div className="flex flex-col gap-3 lg:w-[90%]">
                        {[
                            'Sync unlimited devices',
                            '10 GB monthly uploads',
                            '200 MB max. note size',
                            'Customize Home dashboard and access extra widgets',
                            'Connect primary Google Calendar account',
                            'Add due dates, reminders, and notifications to your tasks',
                        ].map((text, index) => (
                            <div
                                key={index}
                                className={`lg:text-[15px] sm:text-[13px] font-[400] flex items-center gap-3 ${hoveredCard === 1 ? 'text-white' : 'text-black'}`}
                            >
                                <span className={`text-[20px] font-bold ${hoveredCard === 1 ? 'text-[#FFE492]' : 'text-black'}`}>
                                    <FiCheckCircle />
                                </span>
                                {text}
                            </div>
                        ))}
                    </div>
                    <div>
                        <button
                            className={`rounded-md border px-6 py-2 lg:text-[16px] sm:text-[14px] font-[500] ${hoveredCard === 1 ? 'bg-[#4F9CF9] border-none text-white' : ''}`}
                        >
                            Get Started
                        </button>
                    </div>
                </div>

                {/* Card 2 (Center Card) */}
                <div
                    className={`px-[20px] py-[25px] mx-auto mb-10 h-fit w-[310px] flex-shrink-0 rounded-xl border border-orange-300 flex flex-col gap-5 group transform transition-transform duration-300 snap-center ${hoveredCard === 2 ? 'bg-[#043873]' : ''}`}
                >
                    <div className="flex flex-col gap-1">
                        <p className={`text-[24px] font-[600] ${hoveredCard === 2 ? 'text-white' : 'text-black'}`}>Personal</p>
                        <h1 className={`font-[700] text-[36px] ${hoveredCard === 2 ? 'text-[#FFE492]' : 'text-black'}`}>$11.99</h1>
                        <p className={`text-[18px] font-[500] ${hoveredCard === 2 ? 'text-white' : 'text-black'}`}>Keep home and family on track</p>
                    </div>
                    <div className="flex flex-col gap-3 lg:w-[90%]">
                        {[
                            'Sync unlimited devices',
                            '10 GB monthly uploads',
                            '200 MB max. note size',
                            'Customize Home dashboard and access extra widgets',
                            'Connect primary Google Calendar account',
                            'Add due dates, reminders, and notifications to your tasks',
                        ].map((text, index) => (
                            <div
                                key={index}
                                className={`lg:text-[15px] sm:text-[13px] font-[400] flex items-center gap-3 ${hoveredCard === 2 ? 'text-white' : 'text-black'}`}
                            >
                                <span className={`text-[20px] font-bold ${hoveredCard === 2 ? 'text-[#FFE492]' : 'text-black'}`}>
                                    <FiCheckCircle />
                                </span>
                                {text}
                            </div>
                        ))}
                    </div>
                    <div>
                        <button
                            className={`rounded-md border px-6 py-2 lg:text-[16px] sm:text-[14px] font-[500] ${hoveredCard === 2 ? 'bg-[#4F9CF9] border-none text-white' : ''}`}
                        >
                            Get Started
                        </button>
                    </div>
                </div>

                {/* Card 3 */}
                <div
                    className={`px-[20px] py-[25px] mx-auto mb-10 h-fit w-[310px] flex-shrink-0 rounded-xl border border-orange-300 flex flex-col gap-5 group transform transition-transform duration-300 snap-center ${hoveredCard === 3 ? 'bg-[#043873]' : ''}`}
                >
                    <div className="flex flex-col gap-1">
                        <p className={`text-[24px] font-[600] ${hoveredCard === 3 ? 'text-white' : 'text-black'}`}>Organization</p>
                        <h1 className={`font-[700] text-[36px] ${hoveredCard === 3 ? 'text-[#FFE492]' : 'text-black'}`}>$49.99</h1>
                        <p className={`text-[18px] font-[500] ${hoveredCard === 3 ? 'text-white' : 'text-black'}`}>Capture ideas and find quickly</p>
                    </div>
                    <div className="flex flex-col gap-3 lg:w-[90%]">
                        {[
                            'Sync unlimited devices',
                            '10 GB monthly uploads',
                            '200 MB max. note size',
                            'Customize Home dashboard and access extra widgets',
                            'Connect primary Google Calendar account',
                            'Add due dates, reminders, and notifications to your tasks',
                        ].map((text, index) => (
                            <div
                                key={index}
                                className={`lg:text-[15px] sm:text-[13px] font-[400] flex items-center gap-3 ${hoveredCard === 3 ? 'text-white' : 'text-black'}`}
                            >
                                <span className={`text-[20px] font-bold ${hoveredCard === 3 ? 'text-[#FFE492]' : 'text-black'}`}>
                                    <FiCheckCircle />
                                </span>
                                {text}
                            </div>
                        ))}
                    </div>
                    </div>
        </div>
        </div>
  )

}
export default Plan
