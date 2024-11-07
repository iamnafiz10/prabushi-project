import React from 'react';
import Image from "next/image";
import tabImgOne from "../../../../../public/assets/images/tab-card1.png";
import tabImgTwo from "../../../../../public/assets/images/tab-card2.png";
import tabImgThree from "../../../../../public/assets/images/tab-card3.png";

function Page() {
    return (
        <>
            <section id="tab_card_section">
                <div className="container pt-4 pb-12">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="col">
                            <div className="flex-col items-center justify-center">
                                <Image src={tabImgOne} className="w-[95px] h-[70px]" alt="tabImgOne"/>
                                <div className="ml-2">
                                    <h3 className="text-[18px] font-semibold mt-1">Lorem Ipsum</h3>
                                    <p className="text-[14px] mt-2">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ad assumenda eveniet
                                        nostrum odit reprehenderit repudiandae similique suscipit tempora.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="flex-col items-center justify-center">
                                <Image src={tabImgTwo} className="w-[95px] h-[70px]" alt="tabImgTwo"/>
                                <div className="ml-2">
                                    <h3 className="text-[18px] font-semibold mt-1">Lorem Ipsum</h3>
                                    <p className="text-[14px] mt-2">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ad assumenda eveniet
                                        nostrum odit reprehenderit repudiandae similique suscipit tempora.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="flex-col items-center justify-center">
                                <Image src={tabImgThree} className="w-[95px] h-[70px]" alt="tabImgThree"/>
                                <div className="ml-2">
                                    <h3 className="text-[18px] font-semibold mt-1">Lorem Ipsum</h3>
                                    <p className="text-[14px] mt-2">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ad assumenda eveniet
                                        nostrum odit reprehenderit repudiandae similique suscipit tempora.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Page;