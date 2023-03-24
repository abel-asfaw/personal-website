import { HiUser } from 'react-icons/hi2';

export default function Skills() {
    return (
        <section id="contact">
            <div className="container mx-auto px-5 py-10 lg:px-40">
                <div className="mb-10 text-center">
                    <HiUser className="mb-4 inline-block h-10 w-10" />
                    <h1 className="mb-4 font-cubano text-3xl text-white sm:text-4xl">
                        Reach Out
                    </h1>
                    <p className="mx-auto text-base leading-relaxed lg:w-3/4 xl:w-2/4">
                        Think my skills and experience might be a good fit for
                        your company? I'd love to chat! Feel free to reach out
                        with any inquiries, questions, or job opportunities you
                        want to discuss. I'm always on the lookout for new ways
                        to grow professionally and make a positive impact.
                    </p>
                </div>
                <div className="mx-auto flex w-1/2 items-center justify-center sm:mb-2">
                    <a href="mailto:abelalex@live.com" target="_blank">
                        <img
                            width="100%"
                            height="100%"
                            src="/assets/images/mail.jpeg"
                            alt="Drop me a line"
                            className="cursor-pointer rounded transition-all duration-500 hover:scale-110"
                        />
                    </a>
                </div>
            </div>
        </section>
    );
}
