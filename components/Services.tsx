import Link from 'next/link'
import React from 'react'
import Image from 'next/image';
import { FaBullhorn, FaFlask, FaUsers } from 'react-icons/fa';
import s from './Services.module.css';

type Props = {}

const Services = (props: Props) => {
    return (
        <section className={s.Services}>
            <div className="container">
                <div className="mb-20 flex justify-center">
                    <div className="w-10/12 text-center">
                        <h2 className="mb-9 text-2xl font-semibold uppercase text-light" id="services">Services we provide</h2>
                        <p className="">
                            Volutpat wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel
                            illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent
                        </p>
                    </div>
                </div>

                <div className="flex flex-wrap items-start justify-center gap-12 md:justify-between">
                    <div className="grid justify-items-center gap-4 text-center md:flex-1">
                        <FaUsers className='text-light w-11 h-11' />
                        <p className="text-lg uppercase">Consultancy</p>
                        <p className="text-lightest">Claritas est etiam processus dynaicus qui sequitur mutationem consuetudium lectorum. Mirum est notare quam</p>
                    </div>
                    <div className="grid justify-items-center gap-4 text-center md:flex-1">
                        <FaBullhorn className='text-light w-9 h-9' />
                        <p className="text-lg uppercase">Marketing</p>
                        <p className="text-lightest">Claritas est etiam processus dynaicus qui sequitur mutationem consuetudium lectorum. Mirum est notare quam</p>
                    </div>
                    <div className="grid justify-items-center gap-4 text-center md:flex-1">
                        <FaFlask className='text-light w-9 h-9' />
                        <p className="text-lg uppercase">Research</p>
                        <p className="text-lightest">Claritas est etiam processus dynaicus qui sequitur mutationem consuetudium lectorum. Mirum est notare quam</p>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Services