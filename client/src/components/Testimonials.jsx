function Testimonials() {
  const testimonials = [
    {
      name: "Alex M.",
      role: "Weekend Traveler",
      emoji: "🚗",
      text: "Share Ride completely changed how I travel between cities. I’ve saved money, met awesome people, and every trip feels like a mini-adventure."
    },
    {
      name: "Sofia K.",
      role: "Business Commuter",
      emoji: "💼",
      text: "Affordable, reliable, and surprisingly fun. Who knew commuting could come with great conversations and company?"
    },
    {
      name: "Luca R.",
      role: "Digital Nomad",
      emoji: "🌍",
      text: "Traveling solo gets expensive, but Share Ride makes it social and budget-friendly. Every ride feels unique."
    },
    {
      name: "Maria P.",
      role: "Student Explorer",
      emoji: "🎒",
      text: "As a student, every euro counts. Share Ride lets me travel more, stress less, and make real connections."
    },
    {
      name: "Nina T.",
      role: "First-Time User",
      emoji: "✨",
      text: "I was nervous at first, but it felt safe and easy. Now it’s my go-to for city trips!"
    }
  ];

  return (
    <section className="py-16 px-6 bg-gray-50">
      <h1 className="text-4xl font-bold text-center mb-12">
        What Our Travelers Say
      </h1>

      <div className="grid gap-8 max-w-6xl mx-auto sm:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((t, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-shadow duration-300"
          >
            <p className="text-gray-700 italic mb-6">“{t.text}”</p>

            <div className="flex items-center gap-4">
              <span className="text-3xl">{t.emoji}</span>

              <div>
                <p className="font-semibold text-gray-900">{t.name}</p>
                <p className="text-sm text-gray-500">{t.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;
