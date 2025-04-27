import Image from 'next/image';
import Link from 'next/link';

const destinations = [
  {
    title: 'Sigiriya Rock Fortress',
    image: '/sigiriya.jpg', 
    description: 'Climb the ancient Sigiriya Rock Fortress, a UNESCO World Heritage site offering breathtaking views of the surrounding jungle and landscapes.',
    link: '/sigiriya',
  },
  {
    title: 'Galle Fort',
    image: '/galle-fort.jpg', 
    description: 'Explore the colonial charm of Galle Fort, a historic Dutch fortification with cobblestone streets, museums, and cafes.',
    link: '/galle-fort',
  },
  {
    title: 'Nuwara Eliya',
    image: '/nuwara-eliya.jpg', 
    description: 'Known as “Little England”, Nuwara Eliya offers a cool climate, tea plantations, and picturesque landscapes.',
    link: '/nuwara-eliya',
  },
  {
    title: 'Ella',
    image: '/ella.jpg', 
    description: 'Ella is a small town in the heart of the island, known for its stunning waterfalls, hiking trails, and scenic vistas.',
    link: '/ella',
  },
  {
    title: 'Yala National Park',
    image: '/yala.jpg', 
    description: 'Discover Sri Lanka’s diverse wildlife at Yala National Park, home to leopards, elephants, and a wide range of birds.',
    link: '/yala-national-park',
  },
  {
    title: 'Adam\'s Peak',
    image: '/adams-peak.jpg', 
    description: 'Hike up to Adam\'s Peak, a sacred mountain revered by Buddhists, Hindus, and Christians alike, offering a spiritual experience and stunning sunrise views.',
    link: '/adams-peak',
  },
];

const navigationLinks = [
  { href: '/components/Where', key: 'Where', label: 'Where to go' },
  // other links
];

const Navigation = () => {
  return (
    <nav className="flex items-center justify-between bg-gray-800 p-4">
      <ul className="flex space-x-8">
        {navigationLinks.map((link) => (
          <li key={link.key}>
            <Link href={link.href}>
              <a className="text-white hover:text-blue-500">{link.label}</a>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

const WhereToGo = () => {
  return (
    <section className="py-10 bg-gray-50">
      <div className="max-container">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-8">
          Where to Go in Sri Lanka
        </h2>
        <p className="text-center text-lg text-gray-600 mb-12">
          Explore some of the most beautiful and culturally rich destinations in Sri Lanka.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {destinations.map((destination) => (
            <Link href={destination.link} key={destination.title}>
              <div className="rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition duration-300 ease-in-out transform hover:scale-105">
                <div className="relative h-64 w-full">
                  <Image
                    src={destination.image}
                    alt={destination.title}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-t-xl"
                  />
                </div>
                <div className="bg-white p-6 rounded-b-xl">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{destination.title}</h3>
                  <p className="text-gray-700 mb-4">{destination.description}</p>
                  <span className="text-blue-600 font-semibold">Learn more &rarr;</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhereToGo;
