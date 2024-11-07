import React from 'react';
import Image from "next/image";
import iconImg from "../../../../public/assets/images/icon.png";

function Page() {
    return (
        <>
            <section id="card_section" className="mt-[80px]">
                <div className="container">
                    <h2 className="text-[22px] text-black text-center font-semibold">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet illo<br/> inventore nesciunt
                        officiis perferendis voluptatem.
                    </h2>
                    <p className="text-[18px] font-semibold mt-3 text-center text-primary">
                        Eveniet excepturi impedit ipsa ipsam itaque iusto modi neque odit perspiciatis.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-10">
                        <div className="col card_box py-4 px-6 bg-[#E9E9FB] rounded-xl border">
                            <div className="flex items-center gap-4">
                                <Image src={iconImg}
                                       width={100}
                                       height={100}
                                       className="w-[27%]" alt="iconImg"/>
                                <h3 className="text-[20px] font-semibold">
                                    Lorem ipsum dolor sit consectetur.
                                </h3>
                            </div>
                            <p className="text-[16px] mt-4 leading-[28px]">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis corporis distinctio
                                dolores ea fugiat, fugit harum hic itaque, maiores nobis officia quidem sequi voluptas!
                                Aliquid eveniet facilis fugit quasi qui sunt voluptate. Beatae, facilis, sequi.
                            </p>
                        </div>
                        <div className="col card_box py-4 px-6 bg-[#E9E9FB] rounded-xl border">
                            <div className="flex items-center gap-4">
                                <Image src={iconImg}
                                       width={100}
                                       height={100}
                                       className="w-[27%]" alt="iconImg"/>
                                <h3 className="text-[20px] font-semibold">
                                    Lorem ipsum dolor sit consectetur.
                                </h3>
                            </div>
                            <p className="text-[16px] mt-4 leading-[28px]">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis corporis distinctio
                                dolores ea fugiat, fugit harum hic itaque, maiores nobis officia quidem sequi voluptas!
                                Aliquid eveniet facilis fugit quasi qui sunt voluptate. Beatae, facilis, sequi.
                            </p>
                        </div>
                        <div className="col card_box py-4 px-6 bg-[#E9E9FB] rounded-xl border">
                            <div className="flex items-center gap-4">
                                <Image src={iconImg}
                                       width={100}
                                       height={100}
                                       className="w-[27%]" alt="iconImg"/>
                                <h3 className="text-[20px] font-semibold">
                                    Lorem ipsum dolor sit consectetur.
                                </h3>
                            </div>
                            <p className="text-[16px] mt-4 leading-[28px]">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis corporis distinctio
                                dolores ea fugiat, fugit harum hic itaque, maiores nobis officia quidem sequi voluptas!
                                Aliquid eveniet facilis fugit quasi qui sunt voluptate. Beatae, facilis, sequi.
                            </p>
                        </div>
                        <div className="col card_box py-4 px-6 bg-[#E9E9FB] rounded-xl border">
                            <div className="flex items-center gap-4">
                                <Image src={iconImg}
                                       width={100}
                                       height={100}
                                       className="w-[27%]" alt="iconImg"/>
                                <h3 className="text-[20px] font-semibold">
                                    Lorem ipsum dolor sit consectetur.
                                </h3>
                            </div>
                            <p className="text-[16px] mt-4 leading-[28px]">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis corporis distinctio
                                dolores ea fugiat, fugit harum hic itaque, maiores nobis officia quidem sequi voluptas!
                                Aliquid eveniet facilis fugit quasi qui sunt voluptate. Beatae, facilis, sequi.
                            </p>
                        </div>
                        <div className="col card_box py-4 px-6 bg-[#E9E9FB] rounded-xl border">
                            <div className="flex items-center gap-4">
                                <Image src={iconImg}
                                       width={100}
                                       height={100}
                                       className="w-[27%]" alt="iconImg"/>
                                <h3 className="text-[20px] font-semibold">
                                    Lorem ipsum dolor sit consectetur.
                                </h3>
                            </div>
                            <p className="text-[16px] mt-4 leading-[28px]">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis corporis distinctio
                                dolores ea fugiat, fugit harum hic itaque, maiores nobis officia quidem sequi voluptas!
                                Aliquid eveniet facilis fugit quasi qui sunt voluptate. Beatae, facilis, sequi.
                            </p>
                        </div>
                        <div className="col card_box py-4 px-6 bg-[#E9E9FB] rounded-xl border">
                            <div className="flex items-center gap-4">
                                <Image src={iconImg}
                                       width={100}
                                       height={100}
                                       className="w-[27%]" alt="iconImg"/>
                                <h3 className="text-[20px] font-semibold">
                                    Lorem ipsum dolor sit consectetur.
                                </h3>
                            </div>
                            <p className="text-[16px] mt-4 leading-[28px]">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis corporis distinctio
                                dolores ea fugiat, fugit harum hic itaque, maiores nobis officia quidem sequi voluptas!
                                Aliquid eveniet facilis fugit quasi qui sunt voluptate. Beatae, facilis, sequi.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Page;