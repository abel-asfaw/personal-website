export default function Section({ id, icon, title, blurb, children }) {
    return (
        <section id={id}>
            <div className="container mx-auto px-5 py-10">
                <div className="mb-10 flex w-full flex-col gap-4 text-center">
                    <span className="[&>*]:mx-auto [&>*]:inline-block [&>*]:h-10 [&>*]:w-10">
                        {icon}
                    </span>
                    <h1 className="font-cubano text-3xl text-white sm:text-4xl">
                        {title}
                    </h1>
                    <span className="mx-auto leading-relaxed lg:w-3/4 xl:w-2/3">
                        {blurb}
                    </span>
                </div>
                {children}
            </div>
        </section>
    );
}
