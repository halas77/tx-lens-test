const constants = {
  brandName: "X",
  heading: "Effortless Blockchain Insights",
  highlightedText: "Understand Transactions Instantly",
  description:
    "No more digging through Etherscan. Get instant insights on transactions, smart contracts, and token details directly from your browser.",
  buttonText: "Explore Blockchain Data",
  formPlaceholder: "Enter a transaction hash or contract address",
  formButtonText: "Analyze",
  footerText: `© ${new Date().getFullYear()} Xesniper. All rights reserved.`,
};

const App = () => {
  return (
    <section className="min-h-screen bg-gray-950 flex flex-col items-center justify-start px-4 py-8 md:p-6 relative overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="bg-gradient-to-tl blur-[50px] md:blur-[100px] w-[80vw] h-[60vh] rounded-full from-lime-500/10 via-indigo-500/10 to-blue-500/10 animate-gradient-rotate" />
        </div>
      </div>

      {/* Logo */}
      <div className="flex items-center gap-2 my-4">
        <img src="/logo.png" alt="Logo" className="size-20 md:size-28" />
      </div>

      {/* Main Content */}
      <div className="max-w-3xl w-full px-4">
        <h1 className="text-2xl md:text-5xl font-bold bg-gradient-to-r from-gray-100 to-gray-50 bg-clip-text text-transparent mb-6 text-center leading-tight">
          {constants.heading}
          <br />
          <span className="bg-gradient-to-r from-blue-200 to-indigo-400 bg-clip-text text-transparent">
            {constants.highlightedText}
          </span>
        </h1>

        <p className="text-gray-300 mb-8 md:mb-12 max-w-3xl mx-auto text-center leading-relaxed text-base md:text-lg">
          {constants.description}
        </p>

        {/* Search Form for Transactions/Contracts */}
        <form className="flex flex-col md:flex-row gap-3 md:gap-4 max-w-xl mx-auto">
          <input
            type="text"
            placeholder={constants.formPlaceholder}
            className="flex-1 bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl px-4 md:px-6 py-3 md:py-3.5 text-gray-100 focus:outline-none focus:ring-2 focus:ring-white/20 placeholder:text-gray-400/60 transition-all duration-300 hover:border-white/20 text-sm md:text-base"
            required
          />
          <button
            type="submit"
            className="bg-gradient-to-r from-white/10 to-white/10 px-6 md:px-8 py-3 md:py-3.5 rounded-xl font-medium text-gray-100 border border-white/10 hover:border-white/20 hover:bg-white/15 backdrop-blur-lg transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer text-sm md:text-base disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {constants.formButtonText}
          </button>
        </form>
      </div>

      {/* Footer */}
      <footer className="absolute bottom-4 md:bottom-8 text-gray-200/70 text-xs md:text-sm mt-16">
        {constants.footerText}
      </footer>
    </section>
  );
};

export default App;
