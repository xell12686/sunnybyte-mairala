import Link from 'next/link'
import React from 'react'
import { FaChevronLeft, FaChevronRight, FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';
import s from './Footer.module.css';
import Image from 'next/image';

type Props = {}

const Footer = (props: Props) => {
    return (
        <footer className={s.Footer}>
            <div className="top px-8 pb-16 pt-12">
                <div className="container flex flex-wrap gap-8 md:justify-between">

                    <div className="md:flex-1">
                        <h2 className="logo">Mairala</h2>
                        <p className="mt-6 text-sm leading-6 text-lightest">Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore.</p>
                        <p className="mt-8 text-sm leading-6 text-lightest">
                            eugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Nam liber tempor cum soluta
                        </p>
                    </div>

                    <div className="md:flex-1">
                        <h1 className="text-lg uppercase text-lightest">Recent Posts</h1>
                        <ul>
                            <li className="mt-6 border-b border-neutral-600 pb-6">
                                <span className="date">March 30, 2014</span>
                                <p className="text-sm text-lightest">Duis autem vel eum iriure dolor</p>
                            </li>
                            <li className="mt-6 border-b border-neutral-600 pb-8">
                                <span className="date">March 30, 2014</span>
                                <p className="text-sm text-lightest">Duis autem vel eum iriure dolor</p>
                            </li>
                            <li className="mt-6 border-b border-neutral-600 pb-8">
                                <span className="date">March 30, 2014</span>
                                <p className="text-sm text-lightest">Duis autem vel eum iriure dolor</p>
                            </li>
                        </ul>
                    </div>

                    <div className="md:flex-1">
                        <h1 className="text-lg uppercase text-lightest">Twitter feeds</h1>
                        <ul>
                            <li className="mt-6 border-b border-neutral-600 pb-6">
                                <div className="author">
                                    <span className="text-neutral-300">about 2 days ago</span> <span className="text-sm text-light">@kristianplatt</span>
                                </div>
                                <p className="text-sm text-lightest">Good work buddy</p>
                            </li>
                            <li className="mt-6 border-b border-neutral-600 pb-6">
                                <div className="author">
                                    <span className="text-neutral-300">about 2 days ago</span> <span className="text-sm text-light">@fasteven</span>
                                </div>
                                <p className="text-sm text-lightest">Good work buddy</p>
                            </li>
                            <li className="mt-6 border-b border-neutral-600 pb-6">
                                <div className="author">
                                    <span className="text-neutral-300">about 2 days ago</span> <span className="text-sm text-light">@@streamer  </span>
                                </div>
                                <p className="text-sm text-lightest">Good work buddy</p>
                            </li>
                        </ul>
                    </div>

                    <div className="md:flex-1">
                        <h1 className="text-lg uppercase text-lightest">Our Address</h1>
                        <p className="mt-6 text-sm leading-6 text-lightest">
                            Investigationes demonstraverunt lectores legere me lius quod ii legunt saepius. Claritas est etiam processus dynamicus,luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Nam liber tempor cum soluta
                        </p>

                        <ul className="mt-8 text-sm text-lightest contact-info">
                            <li><FaMapMarkerAlt />Moonshine St. 14/05 Light, Jupiter</li>
                            <li><FaPhoneAlt /><a href='tel:00123456789'>+00 (123) 456 78 90</a></li>
                            <li><FaEnvelope /><a href="mailto:first.last@email.com">first.last@email.com</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="bottom p-7 text-center">
                <span>©2014 Imran Khan All Rights Reserved</span>
            </div>
        </footer >
    )
}

export default Footer