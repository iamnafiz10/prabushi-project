import React from 'react';

function Page() {
    return (
        <>
            <section id="footer_area_section" className="mt-[80px] mb-[30px]">
                <div className="container">
                    <div className="content_area">
                        <h2 className="capitalize text-center text-[30px] font-bold">
                            Are you ready to participate?
                        </h2>
                        <div className="flex justify-center">
                            <button type='button'
                                    className="mt-6 rounded-full font-semibold text-[13px] lg:text-[15px] py-3 px-10 bg-black text-white hover:bg-primary hover:text-white transition">
                                SIGN UP!
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Page;