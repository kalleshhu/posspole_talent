

"use client";
import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';
import Link from 'next/link';
import { MdEmail } from "react-icons/md";

interface ContactusformProps {
  showAlways?: boolean;
}

const Contactusform = ({ showAlways = false }: ContactusformProps) => {
  let [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const closeModal = () => setIsOpen(false);
  const openModal = () => setIsOpen(true);

  // ✅ Handle Form Submission
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/xnnbwqjl", {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        alert("✅ Message sent successfully!");
        form.reset();
        closeModal();
      } else {
        alert("❌ Failed to send message, try again.");
      }
    } catch (error) {
      console.error(error);
      alert("❌ Failed to send message, try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto md:ml-6 sm:pr-0">
        <div className={showAlways ? '' : 'hidden lg:block'}>
          <button
            type="button"
            className="
    contact-gradient-btn
    justify-end text-xl font-semibold text-white 
    py-4 px-6 lg:px-12 rounded-full
    w-full hover:scale-105 transition-transform duration-300
  "
            onClick={openModal}
          >
            Contact Us
          </button>
        </div>
      </div>

      {/* Modal */}
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-50" onClose={closeModal}>
          {/* overlay */}
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          {/* modal content */}
          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="relative w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <button
                    type="button"
                    onClick={closeModal}
                    className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 text-2xl font-bold focus:outline-none"
                    aria-label="Close"
                  >
                    &times;
                  </button>
                  <div className="py-8 px-4 mx-auto max-w-screen-md">
                    <div className="flex flex-col items-center justify-center">
                      <MdEmail className="h-12 w-12 text-[#3159cfd7] mb-4" />
                      <Link
                        href="/"
                        className="text-2xl sm:text-3xl font-semibold text-black"
                      >
                        Get In Touch
                      </Link>
                    </div>
                    <p className="mb-8 font-light text-center text-gray-500 sm:text-xl">
                      Send us a message and we will respond as soon as possible.
                    </p>

                    {/* ✅ Form with handler */}
                    <form onSubmit={handleSubmit} className="space-y-8">
                      <div>
                        <label
                          htmlFor="name"
                          className="block mb-2 text-sm font-medium text-gray-900"
                        >
                          Your Name
                        </label>
                        <input
                          id="name"
                          name="name"
                          type="text"
                          required
                          className="block w-full rounded-md border border-gray-300 px-3 py-2"
                          placeholder="Name..."
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="email"
                          className="block mb-2 text-sm font-medium text-gray-900"
                        >
                          Your email
                        </label>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          required
                          className="block w-full rounded-md border border-gray-300 px-3 py-2"
                          placeholder="xyz@example.com"
                        />
                      </div>
                      <div className="sm:col-span-2">
                        <label
                          htmlFor="message"
                          className="block mb-2 text-sm font-medium text-gray-900"
                        >
                          Your message
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          required
                          className="block w-full rounded-md border border-gray-300 px-3 py-2"
                          placeholder="Leave a comment..."
                        />
                      </div>
                      <button
                        type="submit"
                        disabled={loading}
                        className="
    contact-gradient-btn
    justify-end text-xl font-semibold text-white 
    py-4 px-6 lg:px-12 rounded-full
    w-full hover:scale-105 transition-transform duration-300
  "
                      >
                        {loading ? "Sending..." : "Send message"}
                      </button>
{/* 
                      <button
  type="button"
  onClick={openModal}
  className="
    contact-gradient-btn
    justify-end text-xl font-semibold text-white 
    py-4 px-6 lg:px-12 rounded-full
    w-full hover:scale-105 transition-transform duration-300
  "
>
  Contact Us
</button> */}

                    </form>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default Contactusform;
