import Link from 'next/link'
import React from 'react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import s from './Contact.module.css';
import Image from 'next/image';

type Props = {}

const Contact = (props: Props) => {
    return (
        <section className={s.Contact}>
            <div className="container">
                <form action="#">

                    <h2 className="mb-24 text-center font-raleway text-3xl font-semibold uppercase text-primary">Contact</h2>

                    <div className="mx-auto mb-8 flex flex-wrap justify-between gap-20 md:w-8/12 border-b-black border">
                        <div className="relative w-full md:flex-1">
                            <input type="text" className="peer w-full border-x-0 focus:bg-white/60 border-t-4 border-b-0 border-t-black bg-transparent py-2 text-primary placeholder-transparent focus:border-t-black focus:ring-0" placeholder="Name*" id="name" />
                            <label htmlFor="name" className="absolute -top-4 left-2 -translate-y-1/2 transition-all peer-placeholder-shown:left-4 peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-placeholder peer-focus:-top-4 peer-focus:left-2"
                            >Name*</label>
                        </div>
                        <div className="relative w-full md:flex-1">
                            <input type="text" className="peer w-full border-x-0 focus:bg-white/60  border-t-4 border-b-0 border-t-black bg-transparent py-2 text-primary placeholder-transparent focus:border-t-black focus:ring-0" placeholder="Email*" id="email" />
                            <label htmlFor="email" className="absolute -top-4 left-2 -translate-y-1/2 transition-all peer-placeholder-shown:left-4 peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-placeholder peer-focus:-top-4 peer-focus:left-2"
                            >Email*</label>
                        </div>
                        <div className="relative w-full">
                            <textarea className="border-b-1 peer w-full border-x-0 focus:bg-white/60  border-t-4 border-y-black bg-transparent py-2 text-primary placeholder-transparent focus:border-y-black focus:ring-0" rows={6} placeholder="Message*" id="message"></textarea>
                            <label htmlFor="message" className="absolute -top-8 left-2 transition-all peer-placeholder-shown:left-4 peer-placeholder-shown:top-2 peer-placeholder-shown:text-placeholder peer-focus:-top-8 peer-focus:left-2">Message*</label>
                        </div>
                    </div>


                    <div className="flex w-full justify-center">
                        <a href="#" className="w-full border-2 border-black p-3 text-center font-raleway text-lg font-medium md:inline-block md:w-2/12 hover:bg-primary/50 hover:text-white">Submit</a>
                    </div>
                </form>
            </div>

        </section>
    )
}

export default Contact