import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { CalendarClock, Contact, MapPin } from "lucide-react";
import React from "react";

const ContactUs = () => {
  return (
    <section className="mt-24">
      <div className="container pb-8">
        <div className="mb-4">
          <div className="mb-6 max-w-3xl text-center sm:text-center md:mx-auto md:mb-12">
            <h2 className="font-heading mb-4 text-2xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
              Get in Touch
            </h2>
            <p className="mx-auto mt-4 max-w-3xl text-xl text-gray-600 dark:text-slate-400">
              Drop your query and confusion!
            </p>
          </div>
        </div>
        <div className="flex items-stretch justify-center">
          <div className="grid md:grid-cols-2">
            <div className="h-full pr-6">
              <p className="mb-12 mt-3 p-4 text-lg text-gray-600 dark:text-slate-400">
                Productive Ielts try to make something for people .Where people
                can do it their study and find job for their future .Our team
                always proved their support with connect people.
              </p>
              <ul className="mb-6 p-4 md:mb-0">
                <li className="flex">
                  <div className="flex h-10 w-10 items-center justify-center rounded bg-primary text-white">
                    <MapPin color="white" />
                  </div>
                  <div className="mb-4 ml-4">
                    <h3 className="mb-2 text-lg font-medium leading-6 text-gray-900 dark:text-white">
                      Our Address
                    </h3>
                    <p className="text-gray-600 dark:text-slate-400">
                      1230 Maecenas Street Donec Road
                    </p>
                    <p className="text-gray-600 dark:text-slate-400">
                      New York, EEUU
                    </p>
                  </div>
                </li>
                <li className="flex">
                  <div className="flex h-10 w-10 items-center justify-center rounded bg-primary text-white">
                    <Contact color="white" />
                  </div>
                  <div className="mb-4 ml-4">
                    <h3 className="mb-2 text-lg font-medium leading-6 text-gray-900 dark:text-white">
                      Contact
                    </h3>
                    <p className="text-gray-600 dark:text-slate-400">
                      Mobile: +1 (123) 456-7890
                    </p>
                    <p className="text-gray-600 dark:text-slate-400">
                      Mail: tailnext@gmail.com
                    </p>
                  </div>
                </li>
                <li className="flex">
                  <div className="flex h-10 w-10 items-center justify-center rounded bg-primary text-white">
                    <CalendarClock color="white" />
                  </div>
                  <div className="mb-4 ml-4">
                    <h3 className="mb-2 text-lg font-medium leading-6 text-gray-900 dark:text-white">
                      Working hours
                    </h3>
                    <p className="text-gray-600 dark:text-slate-400">
                      Monday - Friday: 08:00 - 17:00
                    </p>
                    <p className="text-gray-600 dark:text-slate-400">
                      Saturday &amp; Sunday: 08:00 - 12:00
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="card h-fit max-w-6xl p-5 md:p-12" id="form">
              <h2 className="mb-4 text-2xl font-bold dark:text-white">
                Ready to Get Started?
              </h2>
              <form className="border-l-2 border-primary p-4">
                <div className="mb-6">
                  <div className="mx-0 mb-1 sm:mb-4">
                    <div className="mx-0 mb-1 sm:mb-4">
                      <label className="text-[16px] tracking-wider">Name</label>
                      <Input
                        type="text"
                        name="firstName"
                        className="mt-2 block w-full rounded-md border bg-secondary p-2.5 text-white"
                        placeholder="first name"
                      />
                    </div>
                    <div className="mx-0 mb-1 sm:mb-4">
                      <label className="text-[16px] tracking-wider">
                        Email
                      </label>
                      <Input
                        type="text"
                        name="firstName"
                        className="mt-2 block w-full rounded-md border bg-secondary p-2.5 text-white"
                        placeholder="first name"
                      />
                    </div>
                  </div>
                  <div className="mx-0 mb-1 sm:mb-4">
                    <label className="text-[16px] tracking-wider">
                      Message
                    </label>
                    <Textarea
                      name="message"
                      className="mt-2 block w-full rounded-lg border bg-secondary p-4"
                      placeholder="message"
                    ></Textarea>
                  </div>
                </div>
                <div className="text-center">
                  <Button
                    type="submit"
                    className="font-xl w-full rounded-md px-6 py-3 font-bold sm:mb-0"
                  >
                    Send Message
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
