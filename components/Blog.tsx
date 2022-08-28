import Link from 'next/link'
import React from 'react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import s from './Blog.module.css';
import Image from 'next/image';

type Props = {}

const Blog = (props: Props) => {
    return (
        <section className={s.Blog}>
            <div className="container">
                <div className="grid justify-center">
                    <h2 id="blog" className="text-center font-raleway text-3xl font-semibold uppercase text-primary">Our Blog</h2>
                    <span className="mx-auto my-12 h-1.5 w-20 bg-primary"></span>
                    <p className="max-w-md text-center">Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim</p>
                </div>
            </div>

            <div className="container my-16 flex flex-col gap-16 md:my-28">

                <div className="flex flex-wrap items-start justify-between gap-4 md:gap-20">

                    <div className="md:flex-1">
                        <div className="carousel max-w-[474px]">
                            <Image src='/images/camera.jpg' width={474} height={270} />
                            <div className="nav">
                                <FaChevronLeft />
                                <FaChevronRight />
                            </div>
                        </div>
                    </div>

                    <div className="md:flex-1">
                        <p className="font-raleway font-medium text-light">01 April 2014</p>
                        <h3 className="my-2 text-2xl md:my-5">Typi non habent claritatem insitam</h3>
                        <p className="text-lightest">Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui [...]</p>
                    </div>
                </div>

                <div className="flex flex-row-reverse flex-wrap items-start justify-between gap-4 md:gap-20">

                    <div className="md:flex-1">
                        <Image src='/images/camera.jpg' width={474} height={270} />
                    </div>

                    <div className="justify-end md:flex-1 md:text-end">
                        <p className="font-raleway font-medium text-light">20 March 2014</p>
                        <h3 className="my-2 text-2xl md:my-5">Typi non habent claritatem insitam</h3>
                        <p className="text-lightest">Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui [...]</p>
                    </div>
                </div>

                <div className="flex flex-wrap items-start justify-between gap-4 md:gap-20">

                    <div className="md:flex-1">
                        <Image src='/images/camera.jpg' width={474} height={270} />
                    </div>

                    <div className="md:flex-1">
                        <p className="font-raleway font-medium text-light">10 January 2014</p>
                        <h3 className="my-2 text-2xl md:my-5">Typi non habent claritatem insitam</h3>
                        <p className="text-lightest">Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui [...]</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Blog