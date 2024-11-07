import React from 'react';
import Image from "next/image";
import bookImg from "../../../../public/assets/images/book.png";

function Page() {
    return (
        <>
            <section id="hero_section" className="bg-primary relative">
                <div className="container">
                    <div className="pt-[50px] md:pt-[90px] lg:pt-[120px] grid grid-cols-1 lg:grid-cols-2 gap-6">
                        <div className="col text-center lg:text-start">
                            <button type='button' className="bg-yellow-200 text-primary py-1 px-4 rounded">
                                <h3 className="text-[16px] md:text-[18px] lg:text-[20px] font-semibold">
                                    REGISTRATIONS NOW OPEN
                                </h3>
                            </button>
                            {/*Tablet/Phone Book Image*/}
                            <div className="book_image lg:hidden flex justify-center">
                                <Image src={bookImg}
                                       width={100}
                                       height={100}
                                       className="w-[50%] h-auto" alt="bookImg"/>
                            </div>
                            <h2 className="mt-4 text-[25px] md:text-[30px] lg:text-[40px] font-bold leading-[35px] lg:leading-[45px] text-white">
                                My Sample Course: A <br/>Guide to ABC Hello <br/> World
                            </h2>
                            <p className="mt-4 text-white text-[16px] md:text-[18px] lg:text-[20px]">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet ex iure
                                maxime omnis.
                            </p>
                            <button type='button'
                                    className="mt-6 rounded-full font-semibold text-[16px] lg:text-[18px] py-3 px-14 bg-white text-primary hover:bg-black hover:text-white transition">
                                SIGN UP NOW
                            </button>
                        </div>
                        <div className="col">
                            <div className="book_image lg:block hidden">
                                <Image src={bookImg}
                                       width={100}
                                       height={100}
                                       className="w-[70%] h-auto float-right" alt="bookImg"/>
                            </div>
                        </div>
                    </div>
                </div>
                {/*Wave */}
                <div className="wave absolute w-full h-full top-[100%] left-0">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                        <path fill="#3C347F" fillOpacity="1"
                              d="M0,192L60,181.3C120,171,240,149,360,154.7C480,160,600,192,720,192C840,192,960,160,1080,154.7C1200,149,1320,171,1380,181.3L1440,192L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path>
                    </svg>
                </div>
            </section>
        </>
    );
}

export default Page;