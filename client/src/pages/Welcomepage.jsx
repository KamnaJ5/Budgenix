import React, { useState } from "react";

const Welcomepage = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden bg-slate-50 text-slate-900">
      {/* Header */}
      <header className="sticky top-0 z-50 flex justify-center border-b border-slate-200 bg-slate-50/80 backdrop-blur-sm">
        <div className="flex w-full max-w-6xl items-center justify-between whitespace-nowrap px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex items-center gap-3">
            <div className="size-6 text-teal-400">
              <svg
                fill="currentColor"
                viewBox="0 0 48 48"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_6_543)">
                  <path d="M42.1739 20.1739L27.8261 5.82609C29.1366 7.13663 28.3989 10.1876 26.2002 13.7654C24.8538 15.9564 22.9595 18.3449 20.6522 20.6522C18.3449 22.9595 15.9564 24.8538 13.7654 26.2002C10.1876 28.3989 7.13663 29.1366 5.82609 27.8261L20.1739 42.1739C21.4845 43.4845 24.5355 42.7467 28.1133 40.548C30.3042 39.2016 32.6927 37.3073 35 35C37.3073 32.6927 39.2016 30.3042 40.548 28.1133C42.7467 24.5355 43.4845 21.4845 42.1739 20.1739Z"></path>
                  <path
                    clipRule="evenodd"
                    d="M7.24189 26.4066C7.31369 26.4411 7.64204 26.5637 8.52504 26.3738C9.59462 26.1438 11.0343 25.5311 12.7183 24.4963C14.7583 23.2426 17.0256 21.4503 19.238 19.238C21.4503 17.0256 23.2426 14.7583 24.4963 12.7183C25.5311 11.0343 26.1438 9.59463 26.3738 8.52504C26.5637 7.64204 26.4411 7.31369 26.4066 7.24189C26.345 7.21246 26.143 7.14535 25.6664 7.1918C24.9745 7.25925 23.9954 7.5498 22.7699 8.14278C20.3369 9.32007 17.3369 11.4915 14.4142 14.4142C11.4915 17.3369 9.32007 20.3369 8.14278 22.7699C7.5498 23.9954 7.25925 24.9745 7.1918 25.6664C7.14534 26.143 7.21246 26.345 7.24189 26.4066ZM29.9001 10.7285C29.4519 12.0322 28.7617 13.4172 27.9042 14.8126C26.465 17.1544 24.4686 19.6641 22.0664 22.0664C19.6641 24.4686 17.1544 26.465 14.8126 27.9042C13.4172 28.7617 12.0322 29.4519 10.7285 29.9001L21.5754 40.747C21.6001 40.7606 21.8995 40.931 22.8729 40.7217C23.9424 40.4916 25.3821 39.879 27.0661 38.8441C29.1062 37.5904 31.3734 35.7982 33.5858 33.5858C35.7982 31.3734 37.5904 29.1062 38.8441 27.0661C39.879 25.3821 40.4916 23.9425 40.7216 22.8729C40.931 21.8995 40.7606 21.6001 40.747 21.5754L29.9001 10.7285ZM29.2403 4.41187L43.5881 18.7597C44.9757 20.1473 44.9743 22.1235 44.6322 23.7139C44.2714 25.3919 43.4158 27.2666 42.252 29.1604C40.8128 31.5022 38.8165 34.012 36.4142 36.4142C34.012 38.8165 31.5022 40.8128 29.1604 42.252C27.2666 43.4158 25.3919 44.2714 23.7139 44.6322C22.1235 44.9743 20.1473 44.9757 18.7597 43.5881L4.41187 29.2403C3.29027 28.1187 3.08209 26.5973 3.21067 25.2783C3.34099 23.9415 3.8369 22.4852 4.54214 21.0277C5.96129 18.0948 8.43335 14.7382 11.5858 11.5858C14.7382 8.43335 18.0948 5.9613 21.0277 4.54214C22.4852 3.8369 23.9415 3.34099 25.2783 3.21067C26.5973 3.08209 28.1187 3.29028 29.2403 4.41187Z"
                    fill="currentColor"
                    fillRule="evenodd"
                  ></path>
                </g>
                <defs>
                  <clipPath id="clip0_6_543">
                    <rect fill="white" height="48" width="48"></rect>
                  </clipPath>
                </defs>
              </svg>
            </div>
            <h2 className="text-xl font-bold leading-tight tracking-tight">
              BudgetAI
            </h2>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex flex-1 justify-end gap-8">
            <div className="flex items-center gap-8">
              <a
                className="text-sm font-medium hover:text-teal-400 transition-colors"
                href="#"
              >
                Features
              </a>
              <a
                className="text-sm font-medium hover:text-teal-400 transition-colors"
                href="#"
              >
                Pricing
              </a>
              <a
                className="text-sm font-medium hover:text-teal-400 transition-colors"
                href="#"
              >
                Blog
              </a>
            </div>
            <button className="flex min-w-[84px] cursor-pointer items-center justify-center rounded-lg h-10 px-4 bg-teal-400 text-slate-900 text-sm font-bold hover:bg-teal-300 transition-all">
              <span className="truncate">Sign Up</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-slate-900"
            >
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-slate-50 border-b border-slate-200 p-4">
            <div className="flex flex-col gap-4">
              <a
                className="text-sm font-medium hover:text-teal-400 transition-colors"
                href="#"
              >
                Features
              </a>
              <a
                className="text-sm font-medium hover:text-teal-400 transition-colors"
                href="#"
              >
                Pricing
              </a>
              <a
                className="text-sm font-medium hover:text-teal-400 transition-colors"
                href="#"
              >
                Blog
              </a>
              <button className="flex cursor-pointer items-center justify-center rounded-lg h-10 px-4 bg-teal-400 text-slate-900 text-sm font-bold hover:bg-teal-300 transition-all">
                Sign Up
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex flex-1 flex-col items-center">
        <div className="flex w-full max-w-6xl flex-col items-center gap-16 px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
          {/* Hero Section */}
          <section className="w-full">
            <div className="flex flex-col-reverse items-center gap-12 lg:flex-row lg:gap-8">
              <div className="flex w-full max-w-xl flex-col items-center gap-6 text-center lg:w-1/2 lg:items-start lg:text-left">
                <div className="flex flex-col gap-4">
                  <h1 className="text-4xl font-black leading-tight tracking-tight sm:text-5xl lg:text-6xl">
                    Take control of your money with AI.
                  </h1>
                  <p className="text-teal-600 text-base sm:text-lg">
                    Your personal finance expert, available 24/7. Chat your way
                    to a better budget.
                  </p>
                </div>
                <button className="flex w-fit cursor-pointer items-center justify-center rounded-lg h-12 px-6 bg-teal-400 text-slate-900 text-base font-bold hover:bg-teal-300 transition-all">
                  <span className="truncate">Try for free</span>
                </button>
              </div>
              <div className="w-full lg:w-1/2 flex justify-center">
                <img
                  alt="AI chat interface showing a conversation about spending habits"
                  className="rounded-xl shadow-2xl shadow-teal-400/20 max-w-md w-full"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCQYDNncpbpkcwWEhJOB9ZhpyWMD4859O2cdinKNBOSDZh7wDwRZRWqet1lMtIBvX7IO8-vlzFa-dZCo93Ob9EBVr66nN1Tqv4J1KkAcfyCGtglaGCgasv91Vn8utDj6-z2EPXy5txhHpMGnxwWXFyH1lrYVyJulm6IjeKz0d9su83VaSWf3ecgucrphWteIGeX89Sotj_ZhdsHzG7ECqkiRb4r0H2ghwJejk7wUJcPSIMrjcE84KORcqmzldJXVP_6ebrEgbLCamk"
                />
              </div>
            </div>
          </section>

          {/* How It Works Section */}
          <section className="flex w-full flex-col items-center gap-8 py-12 text-center">
            <h2 className="text-teal-600 text-sm font-bold uppercase tracking-wider">
              How It Works
            </h2>
            <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-3">
              {[
                {
                  icon: "🔗",
                  title: "1. Connect Accounts",
                  description:
                    "Securely link your bank accounts for automated expense tracking.",
                },
                {
                  icon: "💬",
                  title: "2. Chat with AI",
                  description:
                    "Ask our AI for spending patterns, budget tips, and financial advice.",
                },
                {
                  icon: "📊",
                  title: "3. Get Insights",
                  description:
                    "Receive personalized reports and actionable insights to improve your finances.",
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="flex flex-col gap-4 rounded-xl border border-slate-200 bg-white p-6 items-center shadow-lg"
                >
                  <div className="flex size-12 items-center justify-center rounded-full bg-teal-100 text-2xl">
                    {item.icon}
                  </div>
                  <div className="flex flex-col gap-1">
                    <h3 className="text-lg font-bold">{item.title}</h3>
                    <p className="text-teal-600 text-sm">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Testimonials Section */}
          <section className="flex w-full flex-col items-center gap-8 py-12 text-center">
            <h2 className="text-teal-600 text-sm font-bold uppercase tracking-wider">
              Loved by Students & Grads
            </h2>
            <div className="grid w-full grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  quote:
                    "BudgetAI helped me finally get a handle on my student loans and monthly spending. The AI chat is like having a financial advisor in my pocket!",
                  name: "Alex Johnson",
                  role: "University Student",
                  img: "https://lh3.googleusercontent.com/aida-public/AB6AXuD2a1K5-P7iDUIVo80F6YBpVi5a-wc1Sy0qmWMTmYaATIRP477DfcQ4rl18ckYtI2GWGXXYKO76SuCqFjpkESAa_mFXpdru-fYGlSxjmdqFjCS4O2UANdfcDIccnWoIkkYZHErdBhP2yI2L_Jlg4kMkeEv5aUsS54Ncu4zM6pT80yMjV5F-Lbseu9EWPsWJWOfAC7aRvSI6AeW499zxYECkp0ZzOhUUxvAflk8PAIdKS2FJltfAjgz26QBPIw6YCndFPN-WTppr_QM",
                },
                {
                  quote:
                    "As a recent grad in my first job, this app is a lifesaver. It automatically categorizes my spending so I know exactly where my money is going.",
                  name: "Samantha Lee",
                  role: "Junior Developer",
                  img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCV24Uj4v9tjPL7plPJBahRZrdfFz3eyCZJr4L0vJjsMxZf92jLKWj8Imolv7mAdayf31XtPwpIgH-VVNyKKhzf73Wj7o4dAOaJFlwEg0APAIRcjbWTd5EvHlxhnLJebW5dZkIj7TXzZlaz1wOH4z6lKrW_3uB0Dwfn8nWtuyeVlEAdAP39gEtG4_2DpxYck8Mqb8QKbTfE2nToAglH5f3-qlwt63rWdXKNMYcXChcYPhTeYTe9DsjuQKspc1emqacbwUpIvlIjRRY",
                },
                {
                  quote:
                    "I used to be so stressed about money. The weekly insights are amazing for building better habits without feeling overwhelmed. Highly recommend!",
                  name: "David Chen",
                  role: "Marketing Intern",
                  img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAzCSJ58NnMNu2yhOC3OA0sm2la6S3aFheDFyDauN6khpEphe4toOYsESeFWMQYT7PuOH-DpN3MYKL41QyNQDGs8Vcxdh5JYAKL8spNmm5rbAGKpDvc2pOqJOWILZR1LqX2hf5VtRWRTAg8La2_9bIj-nRW89XLI_ImDOVK6c-Tjy6ejhg8oQI0DR3fXvhoAnPrIvf_9g0RN2fy-4F1b0Xxv2e4svM0ZtsUG3L_KESNJQY3MFRtyhzY3ymYtDKDmfcsBkvIiQgdAko",
                },
              ].map((testimonial, idx) => (
                <div
                  key={idx}
                  className="flex flex-col gap-4 rounded-xl border border-slate-200 bg-white p-6 text-left shadow-lg"
                >
                  <p className="text-teal-600 text-base">
                    "{testimonial.quote}"
                  </p>
                  <div className="flex items-center gap-3 pt-2">
                    <img
                      className="h-10 w-10 rounded-full object-cover"
                      src={testimonial.img}
                      alt={testimonial.name}
                    />
                    <div>
                      <p className="font-bold">{testimonial.name}</p>
                      <p className="text-sm text-teal-600">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Final CTA Section */}
          <section className="w-full rounded-xl bg-teal-50 p-10 my-12 text-center flex flex-col items-center gap-6">
            <h2 className="text-3xl font-bold">
              Ready to simplify your finances?
            </h2>
            <p className="max-w-xl text-teal-600">
              Join thousands of students and young professionals who are taking
              control of their financial future with BudgetAI.
            </p>
            <button className="flex w-fit cursor-pointer items-center justify-center rounded-lg h-12 px-6 bg-teal-400 text-slate-900 text-base font-bold hover:bg-teal-300 transition-all">
              <span className="truncate">Get Started Now</span>
            </button>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full border-t border-slate-200">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-4 py-8 sm:px-6 lg:px-8 md:flex-row">
          <p className="text-sm text-teal-600">
            © 2024 BudgetAI. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a
              className="text-sm text-teal-600 hover:text-teal-400 transition-colors"
              href="#"
            >
              Privacy Policy
            </a>
            <a
              className="text-sm text-teal-600 hover:text-teal-400 transition-colors"
              href="#"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Welcomepage;
