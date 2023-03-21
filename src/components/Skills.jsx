import React from 'react';
import { HiCpuChip } from 'react-icons/hi2';
import { skills } from '../data';

export default function Skills() {
    return (
        <section id="skills">
            <div className="container mx-auto px-5 py-10">
                <div className="mb-20 text-center">
                    <HiCpuChip className="mb-4 inline-block h-10 w-10" />
                    <h1 className="sm:text-4xl mb-4 font-cubano text-3xl text-white">
                        Skills &amp; Technologies
                    </h1>
                    <p className="lg:w-3/4 xl:w-2/4 mx-auto text-base leading-relaxed">
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Nisi sit ipsa delectus eum quo voluptas aspernatur
                        accusantium distinctio possimus est.
                    </p>
                </div>
                <div className="lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2 flex flex-wrap">
                    {Object.entries(skills).map(([skill, icon]) => (
                        <div key={skill} className="xs:w-1/2 w-full p-2">
                            <div className="flex h-full rounded bg-gray-800 p-4">
                                {icon}
                                <span className="font-medium text-white">
                                    {skill}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
