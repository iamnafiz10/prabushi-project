import React from 'react';
import Link from "next/link";
import Image from "next/image";
import calenderImg from "../../../../public/assets/images/calender.png";
import timeImg from "../../../../public/assets/images/timer.png";
import zoomImg from "../../../../public/assets/images/zoom.png";
import levelImg from "../../../../public/assets/images/level.png";

function Page() {
    return (
        <>
            <section id="details_section" className="py-12 mt-[50px] md:mt-[100px] lg:mt-[200px]">
                <div className="container hidden lg:block">
                    <div className="grid lg:grid-cols-12 gap-10">
                        <div className="col-span-4">
                            <div className="price_card py-8 px-10 bg-white border shadow rounded-xl">
                                <h1 className="font-bold text-[30px]">$120</h1>
                                <div className="flex gap-5 items-center mt-4">
                                    <div className="icon_img">
                                        <Image src={calenderImg}
                                               width={100}
                                               height={100}
                                               className="w-[20px]" alt="calenderImg"/>
                                    </div>
                                    <div className="text">
                                        <p className="text-[14px] text-gray-500">
                                            February: June 20 - Aug 20
                                        </p>
                                    </div>
                                </div>
                                <div className="flex gap-4 items-center mt-4">
                                    <div className="icon_img">
                                        <Image src={timeImg}
                                               width={100}
                                               height={100}
                                               className="w-[23px]" alt="timeImg"/>
                                    </div>
                                    <div className="text">
                                        <p className="text-[14px] text-gray-500">
                                            8:00 9:20PM ET
                                        </p>
                                    </div>
                                </div>
                                <div className="flex gap-4 items-center mt-4">
                                    <div className="icon_img">
                                        <Image src={zoomImg}
                                               width={100}
                                               height={100}
                                               className="w-[22px]" alt="zoomImg"/>
                                    </div>
                                    <div className="text">
                                        <p className="text-[14px] text-gray-500">
                                            Zoom
                                        </p>
                                    </div>
                                </div>
                                <div className="flex gap-3 items-center mt-4">
                                    <div className="icon_img">
                                        <Image src={levelImg}
                                               width={100}
                                               height={100}
                                               className="w-[22px]" alt="levelImg"/>
                                    </div>
                                    <div className="text">
                                        <p className="text-[14px] text-gray-500">
                                            Suitable for all levels
                                        </p>
                                    </div>
                                </div>

                                <div className="flex justify-center">
                                    <button type='button'
                                            className="mt-6 rounded-full font-semibold text-[13px] lg:text-[15px] py-3 px-10 bg-black text-white hover:bg-primary hover:text-white transition">
                                        SIGN UP NOW
                                    </button>
                                </div>
                                <p className="text-black text-[14px] mt-6">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae deserunt dolores
                                    doloribus fugit modi, nobis suscipit? Deleniti dicta itaque mollitia odio quisquam
                                    quo saepe <Link href='/' className="font-semibold underline">Learn More</Link>
                                </p>
                            </div>
                        </div>
                        <div className="col-span-8">
                            <h3 className="font-semibold text-primary text-[22px]">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                                has been the industry standard dummy text ever since the 1500s, when an unknown
                                printer took a galley of type and scrambled it to make a type specimen book. It has
                                survived not only five centuries.
                            </h3>
                            <p className="text-[16px] mt-6 text-primary italic">
                                Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a
                                piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard
                                McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of
                                the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through
                                the cites of the word in classical literature, discovered the undoubtable source. Lorem
                                Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The
                                Extremes of Good and Evil) by Cicero.
                                <br/>
                                <br/>
                                The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those
                                interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum by Cicero
                                are also reproduced in their exact original form, accompanied by English versions from
                                the 1914 translation by H. Rackham. There are many variations of passages of Lorem
                                Ipsum.
                            </p>
                        </div>
                    </div>
                    <h2 className="text-center mt-12 font-semibold text-[22px] text-primary">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda blanditiis et ex
                        exercitationem id illum, ipsam neque nesciunt, quam quisquam ratione repellendus reprehenderit
                        temporibus.
                    </h2>
                </div>

                {/*For Mobile Responsive*/}
                <div className="container block lg:hidden">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                        <div className="col-span-8">
                            <h3 className="font-semibold text-primary text-[22px]">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                                has been the industry standard dummy text ever since the 1500s, when an unknown
                                printer took a galley of type and scrambled it to make a type specimen book. It has
                                survived not only five centuries.
                            </h3>
                            <p className="text-[16px] mt-6 text-primary italic">
                                Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a
                                piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard
                                McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of
                                the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through
                                the cites of the word in classical literature, discovered the undoubtable source. Lorem
                                Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The
                                Extremes of Good and Evil) by Cicero.
                                <br/>
                                <br/>
                                The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those
                                interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum by Cicero
                                are also reproduced in their exact original form, accompanied by English versions from
                                the 1914 translation by H. Rackham. There are many variations of passages of Lorem Ipsum
                                available.
                            </p>
                        </div>
                        <div className="col-span-4">
                            <div className="price_card mt-10 py-8 px-10 bg-white border shadow rounded-xl">
                                <h1 className="font-bold text-[30px]">$120</h1>
                                <div className="flex gap-5 items-center mt-4">
                                    <div className="icon_img">
                                        <Image src={calenderImg}
                                               width={100}
                                               height={100}
                                               className="w-[20px]" alt="calenderImg"/>
                                    </div>
                                    <div className="text">
                                        <p className="text-[14px] text-gray-500">
                                            February: June 20 - Aug 20
                                        </p>
                                    </div>
                                </div>
                                <div className="flex gap-4 items-center mt-4">
                                    <div className="icon_img">
                                        <Image src={timeImg}
                                               width={100}
                                               height={100}
                                               className="w-[23px]" alt="timeImg"/>
                                    </div>
                                    <div className="text">
                                        <p className="text-[14px] text-gray-500">
                                            8:00 9:20PM ET
                                        </p>
                                    </div>
                                </div>
                                <div className="flex gap-4 items-center mt-4">
                                    <div className="icon_img">
                                        <Image src={zoomImg}
                                               width={100}
                                               height={100}
                                               className="w-[22px]" alt="zoomImg"/>
                                    </div>
                                    <div className="text">
                                        <p className="text-[14px] text-gray-500">
                                            Zoom
                                        </p>
                                    </div>
                                </div>
                                <div className="flex gap-3 items-center mt-4">
                                    <div className="icon_img">
                                        <Image src={levelImg}
                                               width={100}
                                               height={100}
                                               className="w-[22px]" alt="levelImg"/>
                                    </div>
                                    <div className="text">
                                        <p className="text-[14px] text-gray-500">
                                            Suitable for all levels
                                        </p>
                                    </div>
                                </div>

                                <div className="flex justify-center">
                                    <button type='button'
                                            className="mt-6 rounded-full font-semibold text-[13px] lg:text-[15px] py-3 px-10 bg-black text-white hover:bg-primary hover:text-white transition">
                                        SIGN UP NOW
                                    </button>
                                </div>
                                <p className="text-black text-[14px] mt-6">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae deserunt dolores
                                    doloribus fugit modi, nobis suscipit? Deleniti dicta itaque mollitia odio quisquam
                                    quo saepe <Link href='/' className="font-semibold underline">Learn More</Link>
                                </p>
                            </div>
                        </div>
                    </div>
                    <h2 className="text-center mt-8 font-semibold text-[22px] text-primary">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda blanditiis et ex
                        exercitationem id illum, ipsam neque nesciunt, quam quisquam ratione repellendus reprehenderit
                        temporibus.
                    </h2>
                </div>
            </section>
        </>
    );
}

export default Page;