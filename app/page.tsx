"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import DreamHouseSearchForm, {
  LabeledInput,
  LabeledTextarea,
} from "@/components/ui/DreamHouseSearchForm";
import { AiOutlineWhatsApp } from "react-icons/ai";
import Carousel from "@/components/ui/Carousel";

function ServiceCard({
  title,
  description,
  image,
  index,
}: {
  title: string;
  description: string;
  image: string;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      className="group"
    >
      <div className="relative w-full aspect-video overflow-hidden mb-8 bg-neutral-100 rounded-sm">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>
      <div className="space-y-4 max-w-xl">
        <h3 className="font-serif text-2xl text-neutral-900">{title}</h3>
        <p className="text-neutral-500 font-light leading-relaxed text-sm md:text-base">
          {description}
        </p>
        <Button
          variant="link"
          className="h-auto p-0 text-neutral-900 hover:text-neutral-500 text-xs uppercase tracking-widest decoration-transparent hover:decoration-neutral-900 transition-all mt-2"
        >
          Learn More
        </Button>
      </div>
    </motion.div>
  );
}

export default function Home() {
  return (
    <main className="w-full min-h-screen  bg-[#fafafa]">
      <section className="flex flex-col justify-center items-center h-[90vh] w-full relative">
        <motion.div
          className="flex flex-col items-center justify-center relative z-10"
          initial={{ scale: 2.8, opacity: 0, y: -20 }}
          animate={{ scale: 1.2, opacity: 1, y: 0 }}
          transition={{
            duration: 1.4,
            ease: [0.25, 1, 0.5, 1],
          }}
        >
          <div className="relative w-[80vw] max-w-[600px] aspect-4/1 flex justify-center items-center ">
            <Image
              src={"/company-logo.webp"}
              alt="The Ridge Realty Group"
              fill
              className="object-contain"
              priority
            />
          </div>

          <motion.div
            className="flex flex-col items-center mt-8 space-y-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 1 }}
          >
            <h1 className="text-center text-neutral-500 font-medium tracking-[0.4em] uppercase text-xs md:text-sm">
              The Ridge Realty Group
            </h1>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.4, duration: 0.8 }}
              className="flex items-center gap-6 text-neutral-400 text-xs tracking-widest uppercase"
            >
              <span className="font-light">Pahrump Realtor</span>
              <span className="text-neutral-300">•</span>
              <Button
                variant="link"
                className="h-auto p-0 text-neutral-500 hover:text-neutral-800 font-light tracking-widest uppercase text-xs decoration-neutral-300 hover:decoration-neutral-500 transition-colors"
              >
                Call now
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      <section className="bg-slate-50/50 h-fit w-full flex justify-center pb-32 px-4">
        <DreamHouseSearchForm />
      </section>

      <section className="w-full max-w-7xl mx-auto px-6 py-24 min-h-screen">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 relative items-start">
          <div className="lg:col-span-5 lg:sticky lg:top-32 h-fit self-start">
            <div className="flex flex-col gap-8">
              <div className="relative w-full aspect-3/4 overflow-hidden rounded-sm bg-neutral-100">
                <Image
                  src={"/human.webp"}
                  alt="Marci Metzger"
                  fill
                  className="object-cover grayscale-25 hover:grayscale-0 transition-all duration-700 ease-out"
                />
              </div>
              <div className="space-y-2">
                <h2 className="font-serif text-3xl md:text-4xl text-neutral-900">
                  Marci Metzger
                </h2>
                <p className="text-xs uppercase tracking-[0.2em] text-neutral-500">
                  Broker / Owner
                </p>
                <div className="h-px w-12 bg-neutral-200 my-4" />
                <p className="text-xs uppercase tracking-widest text-neutral-400 font-light leading-relaxed">
                  Realtor for nearly 3 decades!
                  <br />
                  <span className="text-neutral-900 font-medium mt-1 block">
                    206-919-6886
                  </span>
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-24 pt-12 lg:pt-0">
            <div className="space-y-4 mb-16">
              <h2 className="font-serif text-4xl md:text-5xl text-neutral-900 leading-tight">
                Our Services
              </h2>
              <div className="h-px w-24 bg-neutral-300" />
            </div>

            <ServiceCard
              title="Real Estate Done Right"
              description="Nervous about your property adventure? Don't be. Whether you're getting ready to buy or sell your residence, looking at investment properties, or just curious about the markets, our team ensures you get the best experience possible!"
              image="/service01.webp"
              index={0}
            />

            <ServiceCard
              title="Commercial & Residential"
              description="Large or small, condo or mansion, we can find it and get at the price that's right. Fixer-uppers? Luxury? We can help with all of it! We live, work, and play in this community. Happy to help you find where to put you hard-earned dollars."
              image="/service02.webp"
              index={1}
            />

            <ServiceCard
              title="Rely on Expertise"
              description="If you have questions about affordability, credit, and loan options, trust us to connect you with the right people to get the answers you need in a timely fashion. We make sure you feel confident and educated every step of the way."
              image="/service03.webp"
              index={2}
            />

            <div className="space-y-4 mb-16">
              <h2 className="font-serif text-4xl md:text-5xl text-neutral-900 leading-tight">
                Get It Sold!
              </h2>
              <div className="h-px w-24 bg-neutral-300" />
            </div>

            <ServiceCard
              title="Top Residential Sales Last 5 Years"
              description="We helped nearly 90 clients in 2021, and closed 28.5 million in sales! Our team works hard everyday to grow and learn, so that we may continue to excel in our market. Our clients deserve our best, & we want to make sure our best is better every year."
              image="/getItSold01.webp"
              index={0}
            />

            <ServiceCard
              title="Don't Just List it..."
              description="Get it SOLD! We exhaust every avenue to ensure our listings are at the fingertips of every possible buyer, getting you top dollar for your home."
              image="/getItSold02.webp"
              index={1}
            />

            <ServiceCard
              title="Guide to Buyers"
              description="Nobody knows the market like we do. Enjoy having a pro at your service. Market analysis, upgrades lists, contractors on speed dial, & more!"
              image="/getItSold03.webp"
              index={2}
            />
          </div>
        </div>
      </section>
      <section className="h-screen w-full flex flex-col justify-center items-center  py-24">
        <div className="space-y-4 mb-16 text-center">
          <h2 className="font-serif text-4xl md:text-5xl text-neutral-900 leading-tight">
            Photo Gallery
          </h2>
          <div className="h-px w-24 bg-neutral-300 mx-auto" />
        </div>

        <Carousel />

        <div className="mt-32 w-full max-w-4xl px-6">
          <p className="text-center text-xs uppercase tracking-[0.3em] text-neutral-400 mb-12">
            Trusted Partners & Affiliations
          </p>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-60 hover:opacity-100 transition-opacity duration-500">
            <Image
              src={"/trusted01.webp"}
              alt="Trusted Partner"
              width={100}
              height={60}
              className="object-contain h-12 w-auto grayscale hover:grayscale-0 transition-all duration-300"
            />

            <Image
              src={"/trusted02.webp"}
              alt="Trusted Partner"
              width={100}
              height={60}
              className="object-contain h-12 w-auto grayscale hover:grayscale-0 transition-all duration-300"
            />

            <Image
              src={"/trusted03.webp"}
              alt="Trusted Partner"
              width={100}
              height={60}
              className="object-contain h-12 w-auto grayscale hover:grayscale-0 transition-all duration-300"
            />

            <Image
              src={"/trusted04.webp"}
              alt="Trusted Partner"
              width={100}
              height={60}
              className="object-contain h-12 w-auto grayscale hover:grayscale-0 transition-all duration-300"
            />
          </div>
        </div>
      </section>
      <section className="w-full max-w-7xl mx-auto px-6 py-24">
        <div className="space-y-4 mb-20 text-center">
          <h2 className="font-serif text-4xl md:text-5xl text-neutral-900 leading-tight">
            Call or Visit
          </h2>
          <div className="h-px w-24 bg-neutral-300 mx-auto" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          <div className="space-y-16">
            <div className="space-y-8">
              <h3 className="font-serif text-2xl text-neutral-900">
                Send Message
              </h3>
              <div className="space-y-6">
                <LabeledInput label="Name" placeholder="Your Name" />
                <LabeledInput label="Email" placeholder="Your Email" />
                <LabeledTextarea
                  label="Message"
                  placeholder="How can we help you?"
                />
                <Button className="w-full h-12 bg-neutral-900 hover:bg-neutral-800 text-white rounded-sm uppercase tracking-widest text-xs font-medium mt-4">
                  Send Message
                </Button>
              </div>
            </div>

            <div className="space-y-8 pt-8 border-t border-neutral-100">
              <div className="space-y-6">
                <h3 className="font-serif text-2xl text-neutral-900">
                  Contact Info
                </h3>
                <Button
                  variant="outline"
                  className="w-full h-12 gap-3 border-green-600/20 text-green-700 hover:bg-green-50 hover:text-green-800 rounded-sm uppercase tracking-widest text-xs font-medium"
                >
                  <AiOutlineWhatsApp size={20} />
                  Message us on WhatsApp
                </Button>

                <div className="space-y-4 text-sm text-neutral-600 leading-relaxed">
                  <div>
                    <h4 className="text-xs uppercase tracking-widest text-neutral-400 mb-2">
                      Address
                    </h4>
                    <p className="font-medium text-neutral-900">
                      Marci Metzger - THE RIDGE REALTY GROUP
                    </p>
                    <p>3190 HW-160, Suite F</p>
                    <p>Pahrump, Nevada 89048, United States</p>
                  </div>

                  <div>
                    <h4 className="text-xs uppercase tracking-widest text-neutral-400 mb-2">
                      Phone
                    </h4>
                    <p className="font-medium text-neutral-900">
                      (206) 919-6886
                    </p>
                  </div>

                  <div>
                    <h4 className="text-xs uppercase tracking-widest text-neutral-400 mb-2">
                      Office Hours
                    </h4>
                    <p>Open Daily</p>
                    <p className="text-neutral-500 italic mt-1">
                      Appointments outside office hours available upon request.
                      Just call!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="h-[500px] lg:h-auto w-full bg-neutral-100 rounded-sm overflow-hidden relative">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3215.1540327668666!2d-115.95782812369666!3d36.18424937242852!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c6398c31855555%3A0xca2c250302350734!2s3190%20NV-160%20Suite%20F%2C%20Pahrump%2C%20NV%2089048!5e0!3m2!1sen!2sus!4v1701234567890!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0, filter: "grayscale(100%)" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0"
            ></iframe>
          </div>
        </div>
      </section>
    </main>
  );
}
