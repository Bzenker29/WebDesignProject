// src/app/about/page.tsx or src/pages/about.tsx
export default function AboutPage() {
  return (
    <main
      style={{
        backgroundColor: "var(--background)",
        color: "var(--foreground)",
      }}
      className="min-h-screen px-6 py-16"
    >
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-[var(--primary)]">About Us</h1>

        <p className="text-lg leading-7 mb-4">
          Welcome to Colangelo Group Engineering and Manufacturing Services CGEMS — your one-stop shop for innovative tech solutions.
        </p>
        <p className="text-lg leading-7 mb-4">
          We specialize in providing top-notch products and services to help businesses grow and stay competitive in the modern digital landscape.
        </p>
        <p className="text-lg leading-7 mb-12">
          Our mission is to simplify technology for our customers while delivering exceptional value and support.
        </p>

        {/* President Section */}
        <div className="bg-white p-6 rounded-lg shadow-md flex flex-col sm:flex-row items-center gap-6">
          <img
            src="/rocketleague.jpeg" 
            alt="Company President"
            className="w-40 h-40 object-cover rounded border-4 border-red-700"
          />
          <div>
            <h2 className="text-2xl font-semibold text-[var(--primary)] mb-2">
              Meet Our President
            </h2>
            <p className="text-lg leading-7">
            Todd Colangelo is the President of Colangelo Manufacturing and Engineering. He graduated from the University of Texas at Austin and brings a passion for leadership and innovation to the company. 
            In his free time, Todd enjoys playing Rocket League, shooting hoops on the basketball court, and staying actively involved in the local community.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}

  