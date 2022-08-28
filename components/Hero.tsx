import Link from 'next/link'
import React from 'react'
import Image from 'next/image';
import { FaDownload } from 'react-icons/fa';
import s from './Hero.module.css';

type Props = {}

const Hero = (props: Props) => {
    return (
        <section className={s.Hero}>
            <div className="bg -z-10">
                <Image src='/images/hero.jpg' layout='fill' objectFit='cover' objectPosition='center' />
            </div>

            <div className="container">

                <div className="content">
                    <h2>Grab your copy of</h2>
                    <h1>The <span>premium</span> quality PSD template for <span>free</span></h1>

                    <div className="cta">
                        <Link href='/#'>
                            <a>Download <FaDownload /></a>
                        </Link>
                    </div>

                </div>
                <div className="mb-24 w-full flex-row space-y-3 md:w-3/4">
                </div>


                <div className="">

                </div>
            </div>
        </section>
    )
}

export default Hero