
import Image from "next/image";

interface CampProps {
  backgroundImage: string;
  title: string;
  subtitle: string;
  peopleJoined: string;
}

const CampSite = ({ backgroundImage, title, subtitle, peopleJoined }: CampProps) => {
  return (
    <div className={`h-full w-full min-w-[1100px] ${backgroundImage} bg-cover bg-no-repeat lg:rounded-r-5xl 2xl:rounded-5xl`}>
      <div className="flex h-full flex-col items-start justify-between p-6 lg:px-20 lg:py-10">
        <div className="flexCenter gap-4">
          <div className="rounded-full bg-green-50 p-4">
            <Image
              src="/folded-map.svg"
              alt="map"
              width={28}
              height={28}
            />
          </div>
          <div className="flex flex-col gap-1">
            <h4 className="bold-18 text-white">{title}</h4>
            <p className="regular-14 text-white">{subtitle}</p>
          </div>
        </div>

     
      </div>
    </div>
  )
}

const Srilanka = () => {
  const campData = [
    {
      backgroundImage: "bg-bg-img-1",
      title: "Ella Rock",
      subtitle: "Uva Province",
      peopleJoined: "2,300+ Joined",
    },
    {
      backgroundImage: "bg-bg-img-1",
      title: "Little Adam’s Peak",
      subtitle: "Ella, Sri Lanka",
      peopleJoined: "1,800+ Joined",
    },
    {
      backgroundImage: "bg-bg-img-1",
      title: "Nine Arches Bridge",
      subtitle: "Demodara",
      peopleJoined: "3,000+ Joined",
    },
  ];

  return (
    <section className="2xl:max-container relative flex flex-col py-10 lg:mb-10 lg:py-20 xl:mb-20">
      <div className="hide-scrollbar flex h-[340px] w-full items-start justify-start gap-8 overflow-x-auto lg:h-[400px] xl:h-[640px]">
        {campData.map((camp, index) => (
          <CampSite 
            key={index}
            backgroundImage={camp.backgroundImage}
            title={camp.title}
            subtitle={camp.subtitle}
            peopleJoined={camp.peopleJoined}
          />
        ))}
      </div>

      <div className="flexEnd mt-10 px-6 lg:-mt-60 lg:mr-6">
        <div className="bg-green-50 p-8 lg:max-w-[500px] xl:max-w-[734px] xl:rounded-5xl xl:px-16 xl:py-20 relative w-full overflow-hidden rounded-3xl">
          <h2 className="regular-24 md:regular-32 2xl:regular-64 capitalize text-white">
            <strong>Why you</strong> choose our service?
          </h2>
          <p className="regular-14 xl:regular-16 mt-5 text-white">
          we believe that every journey should be easy, safe, and unforgettable.
We offer personalized travel guides, real-time tips, and expert-curated routes — making your adventures smooth and stress-free.
With our user-friendly design, local insights, and trusted recommendations, you’re never lost — only discovering more.
          </p>
          <Image 
            src="/quote.svg"
            alt="camp-2"
            width={186}
            height={219}
            className="camp-quote"
          />
        </div>
      </div>
    </section>
  )
}

export default Srilanka;
