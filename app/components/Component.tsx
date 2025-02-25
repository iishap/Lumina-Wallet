/**
 * v0 by Vercel.
 * @see https://v0.dev/t/ORKFIE0FVlT
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Image from "next/image"
import Link from "next/link"
import { BiBitcoin } from "react-icons/bi"
import { RxAvatar } from "react-icons/rx"
import hero from "../assets/hero.jpg"


export default function Component() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <header className="px-4 py-14 lg:px-16 h-14 flex items-center">
        <Link href="#" className="flex items-center gap-3 justify-center" prefetch={false}>
          <BiBitcoin className="h-6 w-6" />
          <p  className="text-lg ">Lumin Wallet</p>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link href="#" className="text-sm py-3 px-6 bg-black text-white rounded-lg font-medium hover:underline underline-offset-4" prefetch={false}>
            Features
          </Link>
          <Link href="#" className="text-sm py-3 px-6 bg-black text-white rounded-lg font-medium hover:underline underline-offset-4" prefetch={false}>
            Testimonials
          </Link>
          <Link href="#" className="text-sm py-3 px-6 bg-black text-white rounded-lg font-medium hover:underline underline-offset-4" prefetch={false}>
            Pricing
          </Link>
          <Link href="#" className="text-sm py-3 px-6 bg-black text-white rounded-lg font-medium hover:underline underline-offset-4" prefetch={false}>
            Contact
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-6">
          <div className="container px-4 md:px-6">
            <div className="flex mx-10 justify-between items-center align-middle">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Unlock Your Crypto's Potential <br /> with Our Lending Platform
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Borrow against your crypto assets and access the funds you need, while still maintaining ownership
                    and earning interest on your holdings.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link
                    href="#"
                    className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-white bg-black shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}
                  >
                    Get Started
                  </Link>
                  <Link
                    href="#"
                    className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}
                  >
                    Learn More
                  </Link>
                </div>
              </div>
              <Image
                src={hero}
                width="550"
                height="550"
                alt="Hero"
                // className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square"
              />
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Key Features</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Unlock the Power of Your Crypto Assets
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our crypto lending platform offers a range of features to help you maximize the potential of your
                  digital assets.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <ul className="grid gap-6">
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">Competitive Rates</h3>
                      <p className="text-muted-foreground">
                        Enjoy some of the best lending rates in the industry, allowing you to maximize your returns.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">Flexible Repayment</h3>
                      <p className="text-muted-foreground">
                        Choose from a variety of repayment options to fit your needs, including fixed-term and
                        open-ended loans.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">Instant Approval</h3>
                      <p className="text-muted-foreground">
                        Get approved for a loan in minutes, with no lengthy application process.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              <Image
                src=""
                width="550"
                height="310"
                alt="Features"
                // className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
              />
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Testimonials</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">What Our Customers Say</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Hear from our satisfied customers about their experience with our crypto lending platform.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <div className="grid gap-4 rounded-lg bg-background p-6 shadow-sm">
                  <div className="flex items-center gap-4">
                  <RxAvatar />
                  JD
                    <div>
                      <h4 className="text-lg font-semibold">John Doe</h4>
                      <p className="text-sm text-muted-foreground">Crypto Enthusiast</p>
                    </div>
                  </div>
                  <hr/>
                  <p className="text-muted-foreground">
                    "I\'ve been using Crypto Lending for a few months now and\n I\'m really impressed with the service.
                    The rates are\n competitive, and the process is so easy and\n straightforward. Highly recommended!"
                  </p>
                </div>
              </div>
              <div className="flex flex-col justify-center space-y-4">
                <div className="grid gap-4 rounded-lg bg-background p-6 shadow-sm">
                  <div className="flex items-center gap-4">
            
                        <RxAvatar />
                JD
                    <div>
                      <h4 className="text-lg font-semibold">Jane Smith</h4>
                      <p className="text-sm text-muted-foreground">Crypto Investor</p>
                    </div>
                  </div>
                  <hr />
                  <p className="text-muted-foreground">
                    "I\'ve been using Crypto Lending for a few months now and\n I\'m really impressed with the service.
                    The rates are\n competitive, and the process is so easy and\n straightforward. Highly recommended!"
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container grid items-center gap-4 px-4 md:px-6">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                Start Unlocking the Potential of Your Crypto Assets Today
              </h2>
              <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Sign up for our crypto lending platform and access the funds you need while still maintaining ownership
                and earning interest on your holdings.
              </p>
            </div>
            <div className="w-full max-w-sm space-y-2">
              <form className="flex gap-2">
                <input type="email" placeholder="Enter your email" className="max-w-lg flex-1" />
                <button                     className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-white bg-black shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50" type="submit">Get Started</button>
              </form>
              <p className="text-xs text-muted-foreground">
                By signing up, you agree to our{" "}
                <Link href="#" className="underline underline-offset-2" prefetch={false}>
                  Terms &amp; Conditions
                </Link>
              </p>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-muted p-6 md:py-12 w-full">
        <div className="container max-w-7xl grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 text-sm">
          <div className="grid gap-1">
            <h3 className="font-semibold">Company</h3>
            <Link href="#" prefetch={false}>
              About Us
            </Link>
            <Link href="#" prefetch={false}>
              Our Team
            </Link>
            <Link href="#" prefetch={false}>
              Careers
            </Link>
            <Link href="#" prefetch={false}>
              News
            </Link>
          </div>
          <div className="grid gap-1">
            <h3 className="font-semibold">Products</h3>
            <Link href="#" prefetch={false}>
              Crypto Lending
            </Link>
            <Link href="#" prefetch={false}>
              Crypto Staking
            </Link>
            <Link href="#" prefetch={false}>
              Crypto Wallets
            </Link>
            <Link href="#" prefetch={false}>
              Crypto Exchange
            </Link>
          </div>
          <div className="grid gap-1">
            <h3 className="font-semibold">Resources</h3>
            <Link href="#" prefetch={false}>
              Blog
            </Link>
            <Link href="#" prefetch={false}>
              Documentation
            </Link>
            <Link href="#" prefetch={false}>
              Support
            </Link>
            <Link href="#" prefetch={false}>
              FAQs
            </Link>
          </div>
          <div className="grid gap-1">
            <h3 className="font-semibold">Legal</h3>
            <Link href="#" prefetch={false}>
              Privacy Policy
            </Link>
            <Link href="#" prefetch={false}>
              Terms of Service
            </Link>
            <Link href="#" prefetch={false}>
              Cookie Policy
            </Link>
          </div>
          <div className="grid gap-1">
            <h3 className="font-semibold">Contact</h3>
            <Link href="#" prefetch={false}>
              Support
            </Link>
            <Link href="#" prefetch={false}>
              Sales
            </Link>
            <Link href="#" prefetch={false}>
              Press
            </Link>
            <Link href="#" prefetch={false}>
              Partnerships
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

function BitcoinIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M11.767 19.089c4.924.868 6.14-6.025 1.216-6.894m-1.216 6.894L5.86 18.047m5.908 1.042-.347 1.97m1.563-8.864c4.924.869 6.14-6.025 1.215-6.893m-1.215 6.893-3.94-.694m5.155-6.2L8.29 4.26m5.908 1.042.348-1.97M7.48 20.364l3.126-17.727" />
    </svg>
  )
}


function XIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  )
} 