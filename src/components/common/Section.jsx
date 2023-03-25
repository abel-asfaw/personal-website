export default function SectionContainer({ id, icon, title, blurb, children }) {
    return (
        <section id={id}>
            <div className="container mx-auto px-5 py-10">
                <div className="mb-10 flex w-full flex-col text-center">
                    <span className="[&>*]:mx-auto [&>*]:mb-4 [&>*]:inline-block [&>*]:h-10 [&>*]:w-10">
                        {icon}
                    </span>
                    <h1 className="mb-4 font-cubano text-3xl text-white sm:text-4xl">
                        {title}
                    </h1>
                    <p className="mx-auto text-base leading-relaxed lg:w-3/4 xl:w-2/4">
                        {blurb}
                    </p>
                </div>
                {children}
            </div>
        </section>
    );
}
