import React from 'react';
import Image from "next/image";
import avaterImg from "../../../../public/assets/images/avater.jpg";

function Page() {
    return (
        <>
            <section id="profile-section" className="mt-[10px] lg:mt-[100px]">
                <div className="container">
                    <div className="wrapper bg-[#D8E9F6] rounded-xl py-12 flex justify-center">
                        <div className="w-[75%]">
                            <div className="profile_image flex items-center justify-center">
                                <Image src={avaterImg}
                                       width={100}
                                       height={100}
                                       className="rounded-full w-[90px] h-[90px]" alt="avaterImg"/>
                            </div>
                            <div className="content_area mt-4 text-center">
                                <h2 className="font-semibold text-black leading-[25px] md:leading-none text-[20px] md:text-[22px] lg:text-[25px]">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing.
                                </h2>
                                <p className="text-[16px] mt-4 leading-7">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium consequuntur
                                    dolor
                                    dolorem ea, eligendi, facere itaque molestiae nam soluta suscipit tempora, ullam.
                                    Alias
                                    atque commodi cum eaque et facere hic iste maiores, maxime minima obcaecati
                                    perferendis
                                    quas rerum similique sint soluta tempore totam voluptatem! Ea eligendi fugit
                                    mollitia
                                    nesciunt nihil perspiciatis quae quidem suscipit voluptate! At deleniti, enim
                                    eveniet
                                    iste nam quod sit soluta vel! Ad amet ex non sit.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Page;