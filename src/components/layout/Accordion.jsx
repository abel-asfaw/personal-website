import { useState } from 'react';
import { AiFillPlusCircle, AiFillMinusCircle } from 'react-icons/ai';

export default function Accordion({ items }) {
    const [expandedIndex, setExpandedIndex] = useState(-1);

    const handleClick = nextIndex => {
        setExpandedIndex(currentIndex =>
            nextIndex === currentIndex ? -1 : nextIndex
        );
    };

    const renderedItems = items.map((item, index) => {
        const isExpanded = index === expandedIndex;
        const icon = (
            <span className="[&>*]:h-5 [&>*]:w-5">
                {isExpanded ? <AiFillMinusCircle /> : <AiFillPlusCircle />}
            </span>
        );
        const classes =
            'flex h-full rounded bg-gray-800 p-4 gap-4 items-center cursor-pointer mb-4';

        return (
            <div key={index}>
                <div className={classes} onClick={() => handleClick(index)}>
                    <div className="text-green-400">{icon}</div>
                    <div className="flex flex-1 justify-between gap-1">
                        <span className="font-medium text-white">
                            {item.title}
                        </span>
                        <span className="text-right">{item.date}</span>
                    </div>
                </div>
                {isExpanded && (
                    <div className="mb-4 flex h-full items-center rounded border-2 border-gray-800 bg-gray-900 p-4">
                        {item.desc}
                    </div>
                )}
            </div>
        );
    });

    return <div className="w-full">{renderedItems}</div>;
}
