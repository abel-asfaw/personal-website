import { useState } from 'react';

export default function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    function encode(data) {
        return Object.keys(data)
            .map(
                key =>
                    encodeURIComponent(key) +
                    '=' +
                    encodeURIComponent(data[key])
            )
            .join('&');
    }

    function handleSubmit(e) {
        // e.preventDefault();
        fetch('/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: encode({ 'form-name': 'contact', name, email, message }),
        })
            .then(() => {
                alert('Message sent!');
                // reset fields
                setName('');
                setEmail('');
                setMessage('');
            })
            .catch(error => alert(error));
    }

    return (
        <section id="contact" className="relative">
            <div className="container mx-auto flex flex-wrap px-5 py-10 md:flex-nowrap">
                <div className="relative flex items-center justify-between overflow-hidden rounded-lg p-10 sm:mr-10 md:w-1/2 lg:w-2/3">
                    <a
                        href="https://dribbble.com/shots/16604576-Drop-me-a-line"
                        target="_blank"
                    >
                        <img
                            width="100%"
                            height="100%"
                            src="/images/mail.jpeg"
                            alt="Drop me a line"
                            className="rounded"
                        />
                    </a>
                </div>
                <form
                    netlify
                    name="contact"
                    onSubmit={handleSubmit}
                    className="mt-8 flex w-full flex-col md:ml-auto md:mt-0 md:w-1/2 md:py-8 lg:w-1/3"
                >
                    <h2 className="mb-1 font-cubano text-3xl font-medium text-white sm:text-4xl">
                        Contact Me
                    </h2>
                    <p className="mb-5 leading-relaxed">
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Illum suscipit officia aspernatur veritatis.
                        Asperiores, aliquid?
                    </p>
                    <div className="relative mb-4">
                        <label
                            htmlFor="name"
                            className="text-sm leading-7 text-gray-400"
                        >
                            Name
                        </label>
                        <input
                            required
                            type="text"
                            id="name"
                            name="name"
                            value={name}
                            className="w-full rounded border border-gray-700 bg-gray-800 py-1 px-3 text-base leading-8 text-gray-100 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900"
                            onChange={e => setName(e.target.value)}
                        />
                    </div>
                    <div className="relative mb-4">
                        <label
                            htmlFor="email"
                            className="text-sm leading-7 text-gray-400"
                        >
                            Email
                        </label>
                        <input
                            required
                            type="email"
                            id="email"
                            name="email"
                            value={email}
                            className="w-full rounded border border-gray-700 bg-gray-800 py-1 px-3 text-base leading-8 text-gray-100 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900"
                            onChange={e => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="relative mb-4">
                        <label
                            htmlFor="message"
                            className="text-sm leading-7 text-gray-400"
                        >
                            Message
                        </label>
                        <textarea
                            required
                            id="message"
                            name="message"
                            value={message}
                            className="h-32 w-full resize-none rounded border border-gray-700 bg-gray-800 py-1 px-3 text-base leading-6 text-gray-100 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900"
                            onChange={e => setMessage(e.target.value)}
                        />
                    </div>
                    <button
                        type="submit"
                        className="rounded border-0 bg-indigo-600 py-2 px-6 font-cubano text-lg text-white duration-200 ease-in hover:bg-indigo-500 focus:outline-none"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </section>
    );
}
