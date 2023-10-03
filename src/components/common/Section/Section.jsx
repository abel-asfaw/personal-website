import { SectionContent } from '.';
import { SectionHeader } from '.';

export default function Section({ id, title, blurb, className, children }) {
    return (
        <section id={id} className="flex flex-col gap-6">
            <SectionHeader title={title} blurb={blurb} />
            <SectionContent className={className}>{children}</SectionContent>
        </section>
    );
}
