import { useState } from 'react';
import { AiFillPlusCircle, AiFillMinusCircle } from 'react-icons/ai';
import classNames from 'classnames';

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
            <span className="[&>*]:h-6 [&>*]:w-6">
                {isExpanded ? <AiFillMinusCircle /> : <AiFillPlusCircle />}
            </span>
        );
        const classes = classNames(
            'mb-4 flex h-full cursor-pointer items-center gap-3 rounded p-4 duration-200 sm:hover:bg-gray-700',
            { 'bg-gray-800': !isExpanded, 'bg-gray-700': isExpanded }
        );

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
                    <div className="mb-4 flex h-full rounded border-2 border-gray-800 bg-gray-900 p-4 text-white">
                        <span>{item.description}</span>
                    </div>
                )}
            </div>
        );
    });

    return <div className="w-full">{renderedItems}</div>;
}
