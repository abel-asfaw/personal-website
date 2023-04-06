import Section from './common/Section';

export default function Skills() {
    const id = 'contact',
        title = 'Contact Me',
        blurb = (
            <span>
                Feel free to reach out with any questions or job opportunities
                you want to discuss. I'm always on the lookout for new ways to
                grow professionally and make a positive impact.
                <p className="font-medium text-white">
                    Click below to send me an email!
                </p>
            </span>
        );

    return (
        <Section id={id} title={title} blurb={blurb}>
            <div className="mx-auto flex w-1/2 items-center justify-center sm:mb-2 xl:w-1/3">
                <a href="mailto:abelalex@live.com" target="_blank">
                    <img
                        width="100%"
                        height="100%"
                        src="/assets/images/mail.webp"
                        alt="Drop me a line"
                        className="cursor-pointer rounded duration-500 hover:scale-110"
                    />
                </a>
            </div>
        </Section>
    );
}
