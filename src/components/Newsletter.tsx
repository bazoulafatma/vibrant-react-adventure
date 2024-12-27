export const Newsletter = () => {
  return (
    <section className="py-24 bg-pearl">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <span className="inline-block px-3 py-1 mb-4 text-sm bg-sand/20 text-graphite rounded-full">
          Stay Updated
        </span>
        <h2 className="text-4xl font-bold text-neutral-dark mb-6">
          Join Our Newsletter
        </h2>
        <p className="text-neutral-dark/70 mb-8">
          Be the first to know about our latest updates and exclusive offers.
        </p>
        <form className="flex flex-col md:flex-row gap-4 max-w-xl mx-auto">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 px-6 py-4 rounded-full border border-neutral-light focus:outline-none focus:ring-2 focus:ring-sage/20 transition-all duration-300"
          />
          <button
            type="submit"
            className="px-8 py-4 bg-neutral-dark text-white rounded-full hover:bg-graphite transition-colors duration-300"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
};