"use client";
import React from 'react';
import {useState} from 'react';
import Image from "next/image";
import tabBookImg from "../../../../../public/assets/images/tab-book.png";
import Link from "next/link";

function Page() {
    // State to track the active tab
    const [activeTab, setActiveTab] = useState<string>('tabOne');
    return (
        <>
            <section id="tab-section" className="py-10">
                <div className="container">
                    <h1 className="text-[25px] md:text-[35px] font-semibold text-center">
                        Lorem ipsum dolor sit amet, consectetur<br/> adipisicing elit.
                    </h1>
                    <p className="text-center text-[16px] md:text-[18px] mt-3">
                        Ea nesciunt quos soluta tempore temporibus Ipsum. Lorem ipsum dolor sit amet.
                    </p>

                    {/*Tab Title*/}
                    <div
                        className="tab_title px-3 pb-3 flex items-center gap-3 mt-6 overflow-x-auto md:justify-center md:overflow-hidden whitespace-nowrap">
                        <button
                            type="button"
                            onClick={() => setActiveTab('tabOne')}
                            className={`text-[16px] font-semibold py-3 px-8 rounded-full ${
                                activeTab === 'tabOne' ? 'bg-black text-white' : 'bg-white text-black hover:bg-black hover:text-white transition'
                            }`}
                        >
                            Tab One
                        </button>
                        <button
                            type="button"
                            onClick={() => setActiveTab('tabTwo')}
                            className={`text-[16px] font-semibold py-3 px-8 rounded-full ${
                                activeTab === 'tabTwo' ? 'bg-black text-white' : 'bg-white text-black hover:bg-black hover:text-white transition'
                            }`}
                        >
                            Tab Two
                        </button>
                        <button
                            type="button"
                            onClick={() => setActiveTab('tabThree')}
                            className={`text-[16px] font-semibold py-3 px-8 rounded-full ${
                                activeTab === 'tabThree' ? 'bg-black text-white' : 'bg-white text-black hover:bg-black hover:text-white transition'
                            }`}
                        >
                            Tab Three
                        </button>
                        <button
                            type="button"
                            onClick={() => setActiveTab('tabFour')}
                            className={`text-[16px] font-semibold py-3 px-8 rounded-full ${
                                activeTab === 'tabFour' ? 'bg-black text-white' : 'bg-white text-black hover:bg-black hover:text-white transition'
                            }`}
                        >
                            Tab Four
                        </button>
                        <button
                            type="button"
                            onClick={() => setActiveTab('tabFive')}
                            className={`text-[16px] font-semibold py-3 px-8 rounded-full ${
                                activeTab === 'tabFive' ? 'bg-black text-white' : 'bg-white text-black hover:bg-black hover:text-white transition'
                            }`}
                        >
                            Tab Five
                        </button>
                    </div>

                    {/*Tap Content*/}
                    <div className="tab_content_wrap mt-6">
                        {activeTab === 'tabOne' && (
                            <div className="tab_one_content">
                                <div
                                    className="block md:flex items-center justify-center gap-6 bg-white py-6 px-8 rounded">
                                    <div className="book_image flex items-center gap-2 md:block">
                                        <Image src={tabBookImg} className="w-[40px] md:w-[150px]" alt="tabBookImg"/>
                                        <h4 className="block md:hidden text-[18px] font-semibold">Content One</h4>
                                    </div>
                                    <div className="book_content">
                                        <h4 className="hidden md:block text-[18px] font-semibold">Content One</h4>
                                        <p className="mt-2 ml-2 md:ml-0 text-[16px]">
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam
                                            consequatur consequuntur deleniti ducimus hic ipsum magni minus nisi, porro
                                            provident reprehenderit suscipit veniam, vero, voluptates.
                                        </p>
                                    </div>
                                </div>

                                {/*Tab Table Desktop*/}
                                <div className="hidden md:block overflow-x-auto bg-white py-6 px-8 rounded mt-6">
                                    <table className="min-w-full border-collapse border-b border-gray-300">
                                        <thead>
                                        <tr>
                                            <th className="px-4 py-2 text-left border-b border-gray-300 font-normal">
                                                Lorem
                                            </th>
                                            <th className="px-4 py-2 text-left border-b border-gray-300 font-normal">
                                                Lorem Ipsum
                                            </th>
                                            <th className="px-4 py-2 text-left border-b border-gray-300 font-normal">
                                                Lorem 1
                                            </th>
                                            <th className="px-4 py-2 text-left border-b border-gray-300 font-normal"></th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr>
                                            <td className="px-4 py-2 border-b border-gray-300 font-semibold">
                                                Lorem
                                            </td>
                                            <td className="px-4 py-2 border-b border-gray-300">November 7, 2024</td>
                                            <td className="px-4 py-2 border-b border-gray-300">Thursday</td>
                                            <td className="px-4 py-2 border-b border-gray-300">
                                                <div className="flex items-center justify-center gap-4">
                                                    <Link href='/one'
                                                          className="py-1 px-4 rounded text-[14px] font-semibold bg-white text-black border border-black hover:bg-black hover:text-white transition">
                                                        Lorem
                                                    </Link>
                                                    <Link href='/one'
                                                          className="py-1 px-4 rounded text-[14px] font-semibold bg-white text-black border border-black hover:bg-black hover:text-white transition">
                                                        Ipsum
                                                    </Link>
                                                    <Link href='/one'
                                                          className="py-1 px-4 rounded text-[14px] font-semibold bg-white text-black border border-black hover:bg-black hover:text-white transition">
                                                        Lorem
                                                    </Link>
                                                </div>
                                            </td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>

                                {/*Tab Table Mobile*/}
                                <div className="block md:hidden bg-white py-6 px-8 rounded mt-6">
                                    <div className="border-b-2 pb-2">
                                        <h4 className="font-semibold text-[16px]">Lorem 1</h4>
                                        <div className="flex items-center justify-between gap-2 mt-2 text-[14px]">
                                            <h4>November 7, 2024</h4>
                                            <h4>Thursday</h4>
                                        </div>
                                        <div className="flex items-center justify-center gap-4 mt-4">
                                            <Link href='/one'
                                                  className="py-1 px-4 rounded text-[14px] font-semibold bg-white text-black border border-black hover:bg-black hover:text-white transition">
                                                Lorem
                                            </Link>
                                            <Link href='/one'
                                                  className="py-1 px-4 rounded text-[14px] font-semibold bg-white text-black border border-black hover:bg-black hover:text-white transition">
                                                Ipsum
                                            </Link>
                                            <Link href='/one'
                                                  className="py-1 px-4 rounded text-[14px] font-semibold bg-white text-black border border-black hover:bg-black hover:text-white transition">
                                                Lorem
                                            </Link>
                                        </div>
                                    </div>

                                    <div className="border-b-2 pb-2 mt-3">
                                        <h4 className="font-semibold text-[16px]">Lorem 1</h4>
                                        <div className="flex items-center justify-between gap-2 mt-2 text-[14px]">
                                            <h4>November 7, 2024</h4>
                                            <h4>Thursday</h4>
                                        </div>
                                        <div className="flex items-center justify-center gap-4 mt-4">
                                            <Link href='/one'
                                                  className="py-1 px-4 rounded text-[14px] font-semibold bg-white text-black border border-black hover:bg-black hover:text-white transition">
                                                Lorem
                                            </Link>
                                            <Link href='/one'
                                                  className="py-1 px-4 rounded text-[14px] font-semibold bg-white text-black border border-black hover:bg-black hover:text-white transition">
                                                Ipsum
                                            </Link>
                                            <Link href='/one'
                                                  className="py-1 px-4 rounded text-[14px] font-semibold bg-white text-black border border-black hover:bg-black hover:text-white transition">
                                                Lorem
                                            </Link>
                                        </div>
                                    </div>

                                    <div className="border-b-2 pb-2 mt-3">
                                        <h4 className="font-semibold text-[16px]">Lorem 1</h4>
                                        <div className="flex items-center justify-between gap-2 mt-2 text-[14px]">
                                            <h4>November 7, 2024</h4>
                                            <h4>Thursday</h4>
                                        </div>
                                        <div className="flex items-center justify-center gap-4 mt-4">
                                            <Link href='/one'
                                                  className="py-1 px-4 rounded text-[14px] font-semibold bg-white text-black border border-black hover:bg-black hover:text-white transition">
                                                Lorem
                                            </Link>
                                            <Link href='/one'
                                                  className="py-1 px-4 rounded text-[14px] font-semibold bg-white text-black border border-black hover:bg-black hover:text-white transition">
                                                Ipsum
                                            </Link>
                                            <Link href='/one'
                                                  className="py-1 px-4 rounded text-[14px] font-semibold bg-white text-black border border-black hover:bg-black hover:text-white transition">
                                                Lorem
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                        {activeTab === 'tabTwo' && (
                            <div className="tab_two_content">
                                <div
                                    className="block md:flex items-center justify-center gap-6 bg-white py-6 px-8 rounded">
                                    <div className="book_image flex items-center gap-2 md:block">
                                        <Image src={tabBookImg} className="w-[40px] md:w-[150px]" alt="tabBookImg"/>
                                        <h4 className="block md:hidden text-[18px] font-semibold">Content Two</h4>
                                    </div>
                                    <div className="book_content">
                                        <h4 className="hidden md:block text-[18px] font-semibold">Content Two</h4>
                                        <p className="mt-2 ml-2 md:ml-0 text-[16px]">
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam
                                            consequatur consequuntur deleniti ducimus hic ipsum magni minus nisi, porro
                                            provident reprehenderit suscipit veniam, vero, voluptates.
                                        </p>
                                    </div>
                                </div>

                                {/*Tab Table Desktop*/}
                                <div className="hidden md:block overflow-x-auto bg-white py-6 px-8 rounded mt-6">
                                    <table className="min-w-full border-collapse border-b border-gray-300">
                                        <thead>
                                        <tr>
                                            <th className="px-4 py-2 text-left border-b border-gray-300 font-normal">
                                                Lorem
                                            </th>
                                            <th className="px-4 py-2 text-left border-b border-gray-300 font-normal">
                                                Lorem Ipsum
                                            </th>
                                            <th className="px-4 py-2 text-left border-b border-gray-300 font-normal">
                                                Lorem 2
                                            </th>
                                            <th className="px-4 py-2 text-left border-b border-gray-300 font-normal"></th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr>
                                            <td className="px-4 py-2 border-b border-gray-300 font-semibold">
                                                Lorem
                                            </td>
                                            <td className="px-4 py-2 border-b border-gray-300">November 7, 2024</td>
                                            <td className="px-4 py-2 border-b border-gray-300">Thursday</td>
                                            <td className="px-4 py-2 border-b border-gray-300">
                                                <div className="flex items-center justify-center gap-4">
                                                    <Link href='/one'
                                                          className="py-1 px-4 rounded text-[14px] font-semibold bg-white text-black border border-black hover:bg-black hover:text-white transition">
                                                        Lorem
                                                    </Link>
                                                    <Link href='/one'
                                                          className="py-1 px-4 rounded text-[14px] font-semibold bg-white text-black border border-black hover:bg-black hover:text-white transition">
                                                        Ipsum
                                                    </Link>
                                                    <Link href='/one'
                                                          className="py-1 px-4 rounded text-[14px] font-semibold bg-white text-black border border-black hover:bg-black hover:text-white transition">
                                                        Lorem
                                                    </Link>
                                                </div>
                                            </td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>

                                {/*Tab Table Mobile*/}
                                <div className="block md:hidden bg-white py-6 px-8 rounded mt-6">
                                    <div className="border-b-2 pb-2">
                                        <h4 className="font-semibold text-[16px]">Lorem 2</h4>
                                        <div className="flex items-center justify-between gap-2 mt-2 text-[14px]">
                                            <h4>November 7, 2024</h4>
                                            <h4>Thursday</h4>
                                        </div>
                                        <div className="flex items-center justify-center gap-4 mt-4">
                                            <Link href='/one'
                                                  className="py-1 px-4 rounded text-[14px] font-semibold bg-white text-black border border-black hover:bg-black hover:text-white transition">
                                                Lorem
                                            </Link>
                                            <Link href='/one'
                                                  className="py-1 px-4 rounded text-[14px] font-semibold bg-white text-black border border-black hover:bg-black hover:text-white transition">
                                                Ipsum
                                            </Link>
                                            <Link href='/one'
                                                  className="py-1 px-4 rounded text-[14px] font-semibold bg-white text-black border border-black hover:bg-black hover:text-white transition">
                                                Lorem
                                            </Link>
                                        </div>
                                    </div>

                                    <div className="border-b-2 pb-2 mt-3">
                                        <h4 className="font-semibold text-[16px]">Lorem 2</h4>
                                        <div className="flex items-center justify-between gap-2 mt-2 text-[14px]">
                                            <h4>November 7, 2024</h4>
                                            <h4>Thursday</h4>
                                        </div>
                                        <div className="flex items-center justify-center gap-4 mt-4">
                                            <Link href='/one'
                                                  className="py-1 px-4 rounded text-[14px] font-semibold bg-white text-black border border-black hover:bg-black hover:text-white transition">
                                                Lorem
                                            </Link>
                                            <Link href='/one'
                                                  className="py-1 px-4 rounded text-[14px] font-semibold bg-white text-black border border-black hover:bg-black hover:text-white transition">
                                                Ipsum
                                            </Link>
                                            <Link href='/one'
                                                  className="py-1 px-4 rounded text-[14px] font-semibold bg-white text-black border border-black hover:bg-black hover:text-white transition">
                                                Lorem
                                            </Link>
                                        </div>
                                    </div>

                                    <div className="border-b-2 pb-2 mt-3">
                                        <h4 className="font-semibold text-[16px]">Lorem 2</h4>
                                        <div className="flex items-center justify-between gap-2 mt-2 text-[14px]">
                                            <h4>November 7, 2024</h4>
                                            <h4>Thursday</h4>
                                        </div>
                                        <div className="flex items-center justify-center gap-4 mt-4">
                                            <Link href='/one'
                                                  className="py-1 px-4 rounded text-[14px] font-semibold bg-white text-black border border-black hover:bg-black hover:text-white transition">
                                                Lorem
                                            </Link>
                                            <Link href='/one'
                                                  className="py-1 px-4 rounded text-[14px] font-semibold bg-white text-black border border-black hover:bg-black hover:text-white transition">
                                                Ipsum
                                            </Link>
                                            <Link href='/one'
                                                  className="py-1 px-4 rounded text-[14px] font-semibold bg-white text-black border border-black hover:bg-black hover:text-white transition">
                                                Lorem
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                        {activeTab === 'tabThree' && (
                            <div className="tab_three_content">
                                <div
                                    className="block md:flex items-center justify-center gap-6 bg-white py-6 px-8 rounded">
                                    <div className="book_image flex items-center gap-2 md:block">
                                        <Image src={tabBookImg} className="w-[40px] md:w-[150px]" alt="tabBookImg"/>
                                        <h4 className="block md:hidden text-[18px] font-semibold">Content Three</h4>
                                    </div>
                                    <div className="book_content">
                                        <h4 className="hidden md:block text-[18px] font-semibold">Content Three</h4>
                                        <p className="mt-2 ml-2 md:ml-0 text-[16px]">
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam
                                            consequatur consequuntur deleniti ducimus hic ipsum magni minus nisi, porro
                                            provident reprehenderit suscipit veniam, vero, voluptates.
                                        </p>
                                    </div>
                                </div>

                                {/*Tab Table Desktop*/}
                                <div className="hidden md:block overflow-x-auto bg-white py-6 px-8 rounded mt-6">
                                    <table className="min-w-full border-collapse border-b border-gray-300">
                                        <thead>
                                        <tr>
                                            <th className="px-4 py-2 text-left border-b border-gray-300 font-normal">
                                                Lorem
                                            </th>
                                            <th className="px-4 py-2 text-left border-b border-gray-300 font-normal">
                                                Lorem Ipsum
                                            </th>
                                            <th className="px-4 py-2 text-left border-b border-gray-300 font-normal">
                                                Lorem 3
                                            </th>
                                            <th className="px-4 py-2 text-left border-b border-gray-300 font-normal"></th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr>
                                            <td className="px-4 py-2 border-b border-gray-300 font-semibold">
                                                Lorem
                                            </td>
                                            <td className="px-4 py-2 border-b border-gray-300">November 7, 2024</td>
                                            <td className="px-4 py-2 border-b border-gray-300">Thursday</td>
                                            <td className="px-4 py-2 border-b border-gray-300">
                                                <div className="flex items-center justify-center gap-4">
                                                    <Link href='/one'
                                                          className="py-1 px-4 rounded text-[14px] font-semibold bg-white text-black border border-black hover:bg-black hover:text-white transition">
                                                        Lorem
                                                    </Link>
                                                    <Link href='/one'
                                                          className="py-1 px-4 rounded text-[14px] font-semibold bg-white text-black border border-black hover:bg-black hover:text-white transition">
                                                        Ipsum
                                                    </Link>
                                                    <Link href='/one'
                                                          className="py-1 px-4 rounded text-[14px] font-semibold bg-white text-black border border-black hover:bg-black hover:text-white transition">
                                                        Lorem
                                                    </Link>
                                                </div>
                                            </td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>

                                {/*Tab Table Mobile*/}
                                <div className="block md:hidden bg-white py-6 px-8 rounded mt-6">
                                    <div className="border-b-2 pb-2">
                                        <h4 className="font-semibold text-[16px]">Lorem 3</h4>
                                        <div className="flex items-center justify-between gap-2 mt-2 text-[14px]">
                                            <h4>November 7, 2024</h4>
                                            <h4>Thursday</h4>
                                        </div>
                                        <div className="flex items-center justify-center gap-4 mt-4">
                                            <Link href='/one'
                                                  className="py-1 px-4 rounded text-[14px] font-semibold bg-white text-black border border-black hover:bg-black hover:text-white transition">
                                                Lorem
                                            </Link>
                                            <Link href='/one'
                                                  className="py-1 px-4 rounded text-[14px] font-semibold bg-white text-black border border-black hover:bg-black hover:text-white transition">
                                                Ipsum
                                            </Link>
                                            <Link href='/one'
                                                  className="py-1 px-4 rounded text-[14px] font-semibold bg-white text-black border border-black hover:bg-black hover:text-white transition">
                                                Lorem
                                            </Link>
                                        </div>
                                    </div>

                                    <div className="border-b-2 pb-2 mt-3">
                                        <h4 className="font-semibold text-[16px]">Lorem 3</h4>
                                        <div className="flex items-center justify-between gap-2 mt-2 text-[14px]">
                                            <h4>November 7, 2024</h4>
                                            <h4>Thursday</h4>
                                        </div>
                                        <div className="flex items-center justify-center gap-4 mt-4">
                                            <Link href='/one'
                                                  className="py-1 px-4 rounded text-[14px] font-semibold bg-white text-black border border-black hover:bg-black hover:text-white transition">
                                                Lorem
                                            </Link>
                                            <Link href='/one'
                                                  className="py-1 px-4 rounded text-[14px] font-semibold bg-white text-black border border-black hover:bg-black hover:text-white transition">
                                                Ipsum
                                            </Link>
                                            <Link href='/one'
                                                  className="py-1 px-4 rounded text-[14px] font-semibold bg-white text-black border border-black hover:bg-black hover:text-white transition">
                                                Lorem
                                            </Link>
                                        </div>
                                    </div>

                                    <div className="border-b-2 pb-2 mt-3">
                                        <h4 className="font-semibold text-[16px]">Lorem 3</h4>
                                        <div className="flex items-center justify-between gap-2 mt-2 text-[14px]">
                                            <h4>November 7, 2024</h4>
                                            <h4>Thursday</h4>
                                        </div>
                                        <div className="flex items-center justify-center gap-4 mt-4">
                                            <Link href='/one'
                                                  className="py-1 px-4 rounded text-[14px] font-semibold bg-white text-black border border-black hover:bg-black hover:text-white transition">
                                                Lorem
                                            </Link>
                                            <Link href='/one'
                                                  className="py-1 px-4 rounded text-[14px] font-semibold bg-white text-black border border-black hover:bg-black hover:text-white transition">
                                                Ipsum
                                            </Link>
                                            <Link href='/one'
                                                  className="py-1 px-4 rounded text-[14px] font-semibold bg-white text-black border border-black hover:bg-black hover:text-white transition">
                                                Lorem
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                        {activeTab === 'tabFour' && (
                            <div className="tab_four_content">
                                <div
                                    className="block md:flex items-center justify-center gap-6 bg-white py-6 px-8 rounded">
                                    <div className="book_image flex items-center gap-2 md:block">
                                        <Image src={tabBookImg} className="w-[40px] md:w-[150px]" alt="tabBookImg"/>
                                        <h4 className="block md:hidden text-[18px] font-semibold">Content Four</h4>
                                    </div>
                                    <div className="book_content">
                                        <h4 className="hidden md:block text-[18px] font-semibold">Content Four</h4>
                                        <p className="mt-2 ml-2 md:ml-0 text-[16px]">
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam
                                            consequatur consequuntur deleniti ducimus hic ipsum magni minus nisi, porro
                                            provident reprehenderit suscipit veniam, vero, voluptates.
                                        </p>
                                    </div>
                                </div>

                                {/*Tab Table Desktop*/}
                                <div className="hidden md:block overflow-x-auto bg-white py-6 px-8 rounded mt-6">
                                    <table className="min-w-full border-collapse border-b border-gray-300">
                                        <thead>
                                        <tr>
                                            <th className="px-4 py-2 text-left border-b border-gray-300 font-normal">
                                                Lorem
                                            </th>
                                            <th className="px-4 py-2 text-left border-b border-gray-300 font-normal">
                                                Lorem Ipsum
                                            </th>
                                            <th className="px-4 py-2 text-left border-b border-gray-300 font-normal">
                                                Lorem 3
                                            </th>
                                            <th className="px-4 py-2 text-left border-b border-gray-300 font-normal"></th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr>
                                            <td className="px-4 py-2 border-b border-gray-300 font-semibold">
                                                Lorem
                                            </td>
                                            <td className="px-4 py-2 border-b border-gray-300">November 7, 2024</td>
                                            <td className="px-4 py-2 border-b border-gray-300">Thursday</td>
                                            <td className="px-4 py-2 border-b border-gray-300">
                                                <div className="flex items-center justify-center gap-4">
                                                    <Link href='/one'
                                                          className="py-1 px-4 rounded text-[14px] font-semibold bg-white text-black border border-black hover:bg-black hover:text-white transition">
                                                        Lorem
                                                    </Link>
                                                    <Link href='/one'
                                                          className="py-1 px-4 rounded text-[14px] font-semibold bg-white text-black border border-black hover:bg-black hover:text-white transition">
                                                        Ipsum
                                                    </Link>
                                                    <Link href='/one'
                                                          className="py-1 px-4 rounded text-[14px] font-semibold bg-white text-black border border-black hover:bg-black hover:text-white transition">
                                                        Lorem
                                                    </Link>
                                                </div>
                                            </td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>

                                {/*Tab Table Mobile*/}
                                <div className="block md:hidden bg-white py-6 px-8 rounded mt-6">
                                    <div className="border-b-2 pb-2">
                                        <h4 className="font-semibold text-[16px]">Lorem 4</h4>
                                        <div className="flex items-center justify-between gap-2 mt-2 text-[14px]">
                                            <h4>November 7, 2024</h4>
                                            <h4>Thursday</h4>
                                        </div>
                                        <div className="flex items-center justify-center gap-4 mt-4">
                                            <Link href='/one'
                                                  className="py-1 px-4 rounded text-[14px] font-semibold bg-white text-black border border-black hover:bg-black hover:text-white transition">
                                                Lorem
                                            </Link>
                                            <Link href='/one'
                                                  className="py-1 px-4 rounded text-[14px] font-semibold bg-white text-black border border-black hover:bg-black hover:text-white transition">
                                                Ipsum
                                            </Link>
                                            <Link href='/one'
                                                  className="py-1 px-4 rounded text-[14px] font-semibold bg-white text-black border border-black hover:bg-black hover:text-white transition">
                                                Lorem
                                            </Link>
                                        </div>
                                    </div>

                                    <div className="border-b-2 pb-2 mt-3">
                                        <h4 className="font-semibold text-[16px]">Lorem 4</h4>
                                        <div className="flex items-center justify-between gap-2 mt-2 text-[14px]">
                                            <h4>November 7, 2024</h4>
                                            <h4>Thursday</h4>
                                        </div>
                                        <div className="flex items-center justify-center gap-4 mt-4">
                                            <Link href='/one'
                                                  className="py-1 px-4 rounded text-[14px] font-semibold bg-white text-black border border-black hover:bg-black hover:text-white transition">
                                                Lorem
                                            </Link>
                                            <Link href='/one'
                                                  className="py-1 px-4 rounded text-[14px] font-semibold bg-white text-black border border-black hover:bg-black hover:text-white transition">
                                                Ipsum
                                            </Link>
                                            <Link href='/one'
                                                  className="py-1 px-4 rounded text-[14px] font-semibold bg-white text-black border border-black hover:bg-black hover:text-white transition">
                                                Lorem
                                            </Link>
                                        </div>
                                    </div>

                                    <div className="border-b-2 pb-2 mt-3">
                                        <h4 className="font-semibold text-[16px]">Lorem 4</h4>
                                        <div className="flex items-center justify-between gap-2 mt-2 text-[14px]">
                                            <h4>November 7, 2024</h4>
                                            <h4>Thursday</h4>
                                        </div>
                                        <div className="flex items-center justify-center gap-4 mt-4">
                                            <Link href='/one'
                                                  className="py-1 px-4 rounded text-[14px] font-semibold bg-white text-black border border-black hover:bg-black hover:text-white transition">
                                                Lorem
                                            </Link>
                                            <Link href='/one'
                                                  className="py-1 px-4 rounded text-[14px] font-semibold bg-white text-black border border-black hover:bg-black hover:text-white transition">
                                                Ipsum
                                            </Link>
                                            <Link href='/one'
                                                  className="py-1 px-4 rounded text-[14px] font-semibold bg-white text-black border border-black hover:bg-black hover:text-white transition">
                                                Lorem
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                        {activeTab === 'tabFive' && (
                            <div className="tab_five_content">
                                <div
                                    className="block md:flex items-center justify-center gap-6 bg-white py-6 px-8 rounded">
                                    <div className="book_image flex items-center gap-2 md:block">
                                        <Image src={tabBookImg} className="w-[40px] md:w-[150px]" alt="tabBookImg"/>
                                        <h4 className="block md:hidden text-[18px] font-semibold">Content Five</h4>
                                    </div>
                                    <div className="book_content">
                                        <h4 className="hidden md:block text-[18px] font-semibold">Content Five</h4>
                                        <p className="mt-2 ml-2 md:ml-0 text-[16px]">
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam
                                            consequatur consequuntur deleniti ducimus hic ipsum magni minus nisi, porro
                                            provident reprehenderit suscipit veniam, vero, voluptates.
                                        </p>
                                    </div>
                                </div>

                                {/*Tab Table Desktop*/}
                                <div className="hidden md:block overflow-x-auto bg-white py-6 px-8 rounded mt-6">
                                    <table className="min-w-full border-collapse border-b border-gray-300">
                                        <thead>
                                        <tr>
                                            <th className="px-4 py-2 text-left border-b border-gray-300 font-normal">
                                                Lorem
                                            </th>
                                            <th className="px-4 py-2 text-left border-b border-gray-300 font-normal">
                                                Lorem Ipsum
                                            </th>
                                            <th className="px-4 py-2 text-left border-b border-gray-300 font-normal">
                                                Lorem 5
                                            </th>
                                            <th className="px-4 py-2 text-left border-b border-gray-300 font-normal"></th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr>
                                            <td className="px-4 py-2 border-b border-gray-300 font-semibold">
                                                Lorem
                                            </td>
                                            <td className="px-4 py-2 border-b border-gray-300">November 7, 2024</td>
                                            <td className="px-4 py-2 border-b border-gray-300">Thursday</td>
                                            <td className="px-4 py-2 border-b border-gray-300">
                                                <div className="flex items-center justify-center gap-4">
                                                    <Link href='/one'
                                                          className="py-1 px-4 rounded text-[14px] font-semibold bg-white text-black border border-black hover:bg-black hover:text-white transition">
                                                        Lorem
                                                    </Link>
                                                    <Link href='/one'
                                                          className="py-1 px-4 rounded text-[14px] font-semibold bg-white text-black border border-black hover:bg-black hover:text-white transition">
                                                        Ipsum
                                                    </Link>
                                                    <Link href='/one'
                                                          className="py-1 px-4 rounded text-[14px] font-semibold bg-white text-black border border-black hover:bg-black hover:text-white transition">
                                                        Lorem
                                                    </Link>
                                                </div>
                                            </td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>

                                {/*Tab Table Mobile*/}
                                <div className="block md:hidden bg-white py-6 px-8 rounded mt-6">
                                    <div className="border-b-2 pb-2">
                                        <h4 className="font-semibold text-[16px]">Lorem 5</h4>
                                        <div className="flex items-center justify-between gap-2 mt-2 text-[14px]">
                                            <h4>November 7, 2024</h4>
                                            <h4>Thursday</h4>
                                        </div>
                                        <div className="flex items-center justify-center gap-4 mt-4">
                                            <Link href='/one'
                                                  className="py-1 px-4 rounded text-[14px] font-semibold bg-white text-black border border-black hover:bg-black hover:text-white transition">
                                                Lorem
                                            </Link>
                                            <Link href='/one'
                                                  className="py-1 px-4 rounded text-[14px] font-semibold bg-white text-black border border-black hover:bg-black hover:text-white transition">
                                                Ipsum
                                            </Link>
                                            <Link href='/one'
                                                  className="py-1 px-4 rounded text-[14px] font-semibold bg-white text-black border border-black hover:bg-black hover:text-white transition">
                                                Lorem
                                            </Link>
                                        </div>
                                    </div>

                                    <div className="border-b-2 pb-2 mt-3">
                                        <h4 className="font-semibold text-[16px]">Lorem 5</h4>
                                        <div className="flex items-center justify-between gap-2 mt-2 text-[14px]">
                                            <h4>November 7, 2024</h4>
                                            <h4>Thursday</h4>
                                        </div>
                                        <div className="flex items-center justify-center gap-4 mt-4">
                                            <Link href='/one'
                                                  className="py-1 px-4 rounded text-[14px] font-semibold bg-white text-black border border-black hover:bg-black hover:text-white transition">
                                                Lorem
                                            </Link>
                                            <Link href='/one'
                                                  className="py-1 px-4 rounded text-[14px] font-semibold bg-white text-black border border-black hover:bg-black hover:text-white transition">
                                                Ipsum
                                            </Link>
                                            <Link href='/one'
                                                  className="py-1 px-4 rounded text-[14px] font-semibold bg-white text-black border border-black hover:bg-black hover:text-white transition">
                                                Lorem
                                            </Link>
                                        </div>
                                    </div>

                                    <div className="border-b-2 pb-2 mt-3">
                                        <h4 className="font-semibold text-[16px]">Lorem 5</h4>
                                        <div className="flex items-center justify-between gap-2 mt-2 text-[14px]">
                                            <h4>November 7, 2024</h4>
                                            <h4>Thursday</h4>
                                        </div>
                                        <div className="flex items-center justify-center gap-4 mt-4">
                                            <Link href='/one'
                                                  className="py-1 px-4 rounded text-[14px] font-semibold bg-white text-black border border-black hover:bg-black hover:text-white transition">
                                                Lorem
                                            </Link>
                                            <Link href='/one'
                                                  className="py-1 px-4 rounded text-[14px] font-semibold bg-white text-black border border-black hover:bg-black hover:text-white transition">
                                                Ipsum
                                            </Link>
                                            <Link href='/one'
                                                  className="py-1 px-4 rounded text-[14px] font-semibold bg-white text-black border border-black hover:bg-black hover:text-white transition">
                                                Lorem
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </section>
        </>
    );
}

export default Page;