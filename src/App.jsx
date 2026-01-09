import Nav from "./component/Nav";
import "./App.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";
gsap.registerPlugin(ScrollTrigger);
function App() {
  useEffect(() => {
    const ctx = gsap.context(
      () => {
const t1 = gsap.timeline();

        t1.from(
          ".becool",{
            y: 100,
            opacity: 0,
            ease: "power2.out",
          }
        )
        t1.from(
          ".can1",{
            y: 300,
            opacity: 0,
            ease: "ease.in",
          }
        )
        t1.from(
          ".just",{
            y: -200,
            opacity: 0,
            ease: "ease.in",
            stagger: 0.2,
          }
        )
        const t2 = gsap.timeline({
          scrollTrigger: {
            trigger: ".about",
            start: "top bottom",
            end: "bottom bottom",
            scrub: true,
          },
        });
        t2.to(
          ".can1",
          {
            x: -500,
            y: 800,
            rotation: 0,
            scale: 0.8,
            ease: "ease.in",
          },
          "first"
        );
        t2.to(
          ".lemon2",
          {
            y: 450,
            x: 80,
            rotation: 360,
            ease: "ease.in",
          },
          "first"
        );
        const t3 = gsap.timeline({
          scrollTrigger: {
            trigger: ".types",
            start: "top 90%",
            end: "bottom bottom",
            scrub: true,
          },
        });
        t3.to(
          ".can1",
          {
            x: 0,
            y:1500,
            rotation: 0,
            scale: 0.8,
            ease: "ease.in",
          },
          "second"
        );
        t3.to(
          ".lemon2",
          {
            y: 1650,
            x: 354,
            rotation: 360,
            ease: "ease.in",
          },
          "second"
        );
        t3.from(".can2,.lf1",{
          x: -300,
          opacity: 0,
          duration: 0.5,
          ease: "ease.in",
        },"second")
        t3.from(".can3,.lf3",{
          x: 300,
          opacity: 0,
          duration: 0.5,
          ease: "ease.in",
        },"second")
        const t4 = gsap.timeline({
          scrollTrigger: {
            trigger: ".contact",
            start: "top 90%",
            end: "bottom bottom",
            scrub: true,
          },
        })
        t4.to(".can1",{
          x: 400,
          y: 2351,
          rotation: 0,
          z:2,
          ease: "ease.in",
        },"last")
        t4.to(".can2",{
          x: 796,
          y: 854,
          rotation: -12,
          z: 1,
          ease: "ease.in",
        },"last")
        t4.to(".can3",{
          x: 0,
          y: 854,
          rotation:12,
          z: 1,
          ease: "ease.in",
        },"last")
      }

      // GSAP animation code can go here
    );
    return () => ctx.revert();
  }, []);
  return (
    <>
      {/* home session */}
      <Nav />
      <div className="main-wrapper text-[#f7e7c3] bg-[#000000] h-[100vh]">
        <div id="home" className=" relative content-wrapper bg-[url('/bg2.png')] flex items-center justify-center h-[100vh] ">
          <h1 className="becool text-[150px] opacity-20 font-bold">
            BE COOL...
          </h1>
          <img
            src="./can1.png"
            alt="can1"
            className="can1 z-40 h-[700px] absolute tranform rotate-12"
          />
          <img
            src="./lemon1.png"
            alt="lemon1"
            className=" just h-[200px] absolute top-[30%] left-[80%] transform -translate-x-1/2 -translate-y-1/2 shadow-lg"
          />
          <img
            src="./leaf1.png"
            alt="leaf1"
            className="just h-[200px] absolute top-[10%] left-[35%] transform rotate-678"
          />
          <img
            src="./lemon2.png"
            alt="lemon2"
            className=" just z-1 lemon2 h-[250px] absolute top-[65%] left-[20%] transform -translate-x-1/2 -translate-y-1/2"
          />
          <img
            src="./leaf3.png"
            alt="leaf3"
            className="just h-[250px] shadow-lg absolute top-[70%] left-[70%] transform -translate-x-1/2 -translate-y-1/2"
          />
        </div>
      </div>

      {/* about session */}
      <div id="about" className="about text-[#f7e7c3] bg-[url('/bg2.png')] h-screen">
        <h1 className="text-center pt-20 text-4xl font-bold">
          ABOUT THE DRINK
        </h1>
        <div className="flex  ">
          <div className="left text-center p-20 text-2xl font-bold">
            <div className="box w-[400px]  h-[500px] bg-gray-900 opacity-50 rounded-3xl border-4 border-[#f7e7c3] "></div>
          </div>
          <div className="right p-10 ">
            <p className="text-center text-justify mt-10  text-xl font-semibold">
              Introducing our refreshing lemon-flavored sparkling water, a
              delightful beverage that combines the invigorating taste of lemons
              with the effervescence of sparkling water. Crafted with natural
              lemon essence, this drink offers a perfect balance of tangy citrus
              flavor and crisp bubbles, making it an ideal choice for those
              seeking a revitalizing and hydrating experience. Whether you're
              looking to quench your thirst on a hot day or simply enjoy a
              flavorful alternative to plain water, our lemon sparkling water is
              the perfect companion for any occasion. Enjoy it chilled for a
              truly refreshing sensation!
            </p>
            <p>
              <h2 className="text-2xl font-bold mt-10">Ingredients:</h2>
              Carbonated Water, Natural Lemon Flavor, Citric Acid, Potassium
              Sorbate (to preserve freshness).
            </p>
            <p>
              <h2 className="text-2xl font-bold mt-10">Nutritional Facts:</h2>0
              calories, 0 grams of carbohydrates, 0 grams of sugars, 0 grams of
              fat, 0 grams of protein, 0 grams of salt.
            </p>
          </div>
        </div>
      </div>
      {/* Types session */}
      <div id="types" className=" types flex text-[#f7e7c3]  bg-[url('/bg2.png')] h-[100vh]  justify-around items-center">
        <div className=" relative ">
            <img src="./can2.png" alt=""  className="can2 absolute scale-150 top-[100px] z-10"/>
            <img src="./leaf2.png" alt="" className=" lf1 absolute left-[-30%] top-[30%] z-9 rotate-295  " />
          <div className="box w-[300px] mt-40 h-[400px] bg-gray-900 opacity-50 rounded-3xl border-4 border-[#f7e7c3]">
          </div>
        </div>
        <div className="">
          <div className="box w-[300px] mt-40 h-[400px] bg-gray-900 opacity-50 rounded-3xl border-4 border-[#f7e7c3]">

          </div>
        </div>
        <div className="relative">
            <img src="./can3.png" alt="" className=" can3 absolute scale-150 top-[100px] z-10"/>
            <img src="./kirni2.png" alt="" className="lf3 absolute top-[50%] left-[30%] z-11" />
          <div className=" box w-[300px] mt-40 h-[400px] bg-gray-900 opacity-50 rounded-3xl border-4 border-[#f7e7c3]">
          </div>
        </div>
      </div>
      {/* contact us session */}
      <div id="contact" className="contact text-[#f7e7c3] bg-[url('/bg2.png')] h-[100vh]">
        <h1 className="text-center pt-20 text-4xl font-bold">CONTACT US</h1>
        <div className=" h-[80vh] flex items-center justify-start pl-20 ">
          <div className="w-1/2 ">
            <form className="bg-gray-900 opacity-50 p-10 rounded-3xl border-4 border-[#f7e7c3] w-[400px]">
              <div className="mb-4">
                <label className="block text-xl font-bold mb-2" htmlFor="name">
                  Name:
                </label>
                <input
                  className="w-full p-2 rounded border "
                  type="text"
                  id="name"
                  name="name"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-xl font-bold mb-2" htmlFor="email">
                  Email:
                </label>
                <input
                  className="w-full p-2 rounded border "
                  type="email"
                  id="email"
                  name="email"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-xl font-bold mb-2"
                  htmlFor="message"
                >
                  Message:
                </label>
                <textarea
                  className="w-full p-2 rounded border "
                  id="message"
                  name="message"
                  rows="4"
                  required
                ></textarea>
              </div>
              <button
                className="bg-[#f7e7c3] text-gray-900 font-bold py-2 px-4 rounded hover:bg-yellow-300"
                type="submit"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
