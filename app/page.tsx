// "use client";
// import Image from "next/image";
// import Hero from "@/features/home/sections/Hero";
// import AboutSection from "@/features/home/sections/AboutSection";
// import EventsSection from "@/features/home/sections/EventsSection";
// import { blogPosts } from "@/features/data/blog";
// import "./globals.css";

// export default function Home() {

//   return (
//     <>
//       <main>
//         <Hero />

//         <AboutSection />

//         <EventsSection />

//         {/* Blog Section start */}
//         <section className="home-blog-section">
//           <div className="home-blog-container">

//             <div className="home-blog-header">
//               <h2>Health Insights Blog</h2>

//               <p>
//                 Explore practical health tips, preventive care guidance, and trusted
//                 insights to help you make informed decisions about your well-being.
//               </p>
//             </div>

//             <div className="home-blog-grid">
//               {blogPosts.slice(0, 4).map((blog) => (
//                 <article
//                   className="home-blog-card"
//                   key={blog.id}
//                 >
//                   <div className="home-blog-image">
//                     <Image
//                       src={blog.image}
//                       alt={blog.title}
//                       fill
//                       sizes="(max-width: 575px) 100vw, (max-width: 767px) 50vw, (max-width: 1199px) 33vw, 25vw"
//                     />
//                   </div>

//                   <div className="home-blog-content">
//                     <span className="home-blog-subtitle">
//                       {blog.subtitle}
//                     </span>

//                     <h3>
//                       {blog.title}
//                     </h3>

//                     <p>
//                       {blog.description}
//                     </p>

//                     <a href="#">
//                       Read More →
//                     </a>
//                   </div>
//                 </article>
//               ))}
//             </div>

//           </div>
//         </section>
//         {/* Blog Section end */}

//         {/* OUR OFFICIAL PARTNER start */}
//         <section>
//           <div>
//             <h1>OUR OFFICIAL PARTNER start</h1>
//           </div>
//         </section>

//         {/* OUR OFFICIAL PARTNER start */}

//       </main>
//     </>
//   );
// }



"use client";

import Image from "next/image";
import Slider from "react-slick";

import "./globals.css";
import Hero from "@/features/home/sections/Hero";
import AboutSection from "@/features/home/sections/AboutSection";
import EventsSection from "@/features/home/sections/EventsSection";
import { blogPosts } from "@/features/data/blog";

export default function Home() {
  const partners = [
    {
      id: 1,
      image: "/assets/images/gallery/healthians.webp",
      name: "Partner 1",
    },
    {
      id: 2,
      image: "/assets/images/logo.webp",
      name: "Partner 2",
    },
    {
      id: 3,
      image: "/assets/images/gallery/healthians.webp",
      name: "Partner 3",
    },
    {
      id: 4,
      image: "/assets/images/logo.webp",
      name: "Partner 4",
    },
    {
      id: 5,
      image: "/assets/images/gallery/healthians.webp",
      name: "Partner 5",
    },
    {
      id: 6,
      image: "/assets/images/logo.webp",
      name: "Partner 6",
    },
  ];

  const sliderSettings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 600,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <main>
      <Hero />

      <AboutSection />

      <EventsSection />

      {/* Blog Section */}
      <section className="home-blog-section">
        <div className="home-blog-container">
          <div className="home-blog-header">
            <h2>Health Insights Blog</h2>

            <p>
              Explore practical health tips, preventive care guidance, and
              trusted insights to help you make informed decisions about your
              well-being.
            </p>
          </div>

          <div className="home-blog-grid">
            {blogPosts.slice(0, 4).map((blog) => (
              <article
                className="home-blog-card"
                key={blog.id}
              >
                <div className="home-blog-image">
                  <Image
                    src={blog.image}
                    alt={blog.title}
                    fill
                    sizes="(max-width: 575px) 100vw, (max-width: 767px) 50vw, (max-width: 1199px) 33vw, 25vw"
                  />
                </div>

                <div className="home-blog-content">
                  <span className="home-blog-subtitle">
                    {blog.subtitle}
                  </span>

                  <h3>{blog.title}</h3>

                  <p>{blog.description}</p>

                  <a href="#">Read More →</a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* <section style={{ display: "flex", alignItems: "center", justifyContent: "center", margin: "30px" }}>
        <div className=" w-full max-w-[1450px] px-4 sm:px-6 lg:px-8">
          <div className="text-center ">
            <h2 style={{ marginBottom: "30px" }}>
              Our Official Partner
            </h2>
          </div>
          <div className="partner-slider">
            <Slider {...sliderSettings}>
              {partners.map((partner) => (
                <div key={partner.id} className="px-2 sm:px-2.5">
                  <div className="flex h-[105px] items-center justify-center bg-white px-4 shadow-[0_2px_14px_rgba(0,0,0,0.18)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_5px_18px_rgba(0,0,0,0.25)]">
                    <Image
                      src={partner.image}
                      alt={partner.name}
                      width={200}
                      height={85}
                      style={{ marginLeft: "10px", marginRight: "10px" }}
                      className="h-[75px] w-full object-cover"
                    />
                  </div>
                </div>
              ))}
            </Slider>
          </div>

        </div>
      </section> */}


      {/* Official Partner Section */}
      <section style={{ display: "flex", alignItems: "center", justifyContent: "center" }} className="my-12 w-full px-4 sm:my-16 sm:px-6 lg:my-20 lg:px-8">
        <div className="mx-auto  home-blog-container">

          {/* Heading */}
          <div className="mb-10 text-center sm:mb-12">
            <h2 className="font-serif text-4xl font-medium leading-tight text-[#164c3b] sm:text-5xl lg:text-5xl small">
              Our Official Partner
            </h2>
          </div>
          <div className="partner-slider w-full">
            <Slider {...sliderSettings}>
              {partners.map((partner) => (
                <div key={partner.id} className="px-2 sm:px-3">
                  <div className="flex h-[120px] w-full items-center justify-center bg-white px-5 py-4 shadow-[0_2px_14px_rgba(0,0,0,0.15)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_6px_20px_rgba(0,0,0,0.2)] sm:h-[135px]">

                    <Image
                      src={partner.image}
                      alt={partner.name}
                      width={220}
                      height={100}
                      className="h-[90px] w-[220px] object-contain "
                    />

                  </div>
                </div>
              ))}
            </Slider>
          </div>

        </div>
      </section>
    </main>
  );
}