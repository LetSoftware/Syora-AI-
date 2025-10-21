export default function Team() {
  const team = [
    {
      name: "Simeon Stephen",
      role: "FOUNDER & CEO",
      alt: "Simeon Stephen - Founder and CEO",
      img: "/stephen.png"
    },
    {
      name: "Michael Dickson",
      role: "CO-FOUNDER & CTO",
      alt: "Dickson Michael - Co-Founder and CTO",
      img: "/Michael.jpg"
    },
    {
      name: "Yange Stephanie",
      role: "CO-FOUNDER & CTO",
      alt: "Yange Stephanie - Co-Founder and CTO",
      img: "/Stephanie.jpg"
    }
  ];

  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16">Meet the Team</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <div key={index} className="bg-white rounded-3xl shadow-lg p-6 text-center">
              <div className="w-full aspect-square rounded-3xl overflow-hidden mb-6 bg-gray-100">
                <img
                  src={member.img}
                  alt={member.alt}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-semibold text-lg mb-1">{member.name}</h3>
              <p className="text-sm text-gray-600 font-medium">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
