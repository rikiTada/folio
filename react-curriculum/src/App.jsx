import React from 'react';
import Article from './components/Article';
import Image from './components/Image';
import './index.css';

const App = () => {
  const navEnter = performance.getEntriesByType('navigation');
  if (navEnter.length > 0 && navEnter[0].type === 'reload') {
    const randomImages = document.getElementsByClassName('randomImage');
    for (let i = 0; i < randomImages.length; i++) {
      randomImages[
        i
      ].src = `https://source.unsplash.com/random?white/800x600&${Date.now()}&sig=${i}`;
    }
  }

  return (
    <div>
      {/* 🌊 */}
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 200">
        <path
          fill="#00cba9"
          fill-opacity="1"
          d="M0,192L80,165.3C160,139,320,85,480,80C640,75,800,117,960,144C1120,171,1280,181,1360,186.7L1440,192L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
        ></path>
      </svg>

      {/* ttl */}
      <h1 className="animate-tracking-in-expand text-grey text-4xl flex justify-center font-bold mb-16">
        Javascript_Dictionary
      </h1>

      <blockquote class="text-xl mx-8 mb-20 font-semibold text-gray-900 dark:text-white">
        <svg
          aria-hidden="true"
          class="w-8 h-8 text-gray-400 dark:text-gray-600"
          viewBox="0 0 24 27"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
            fill="currentColor"
          />
        </svg>

        <p>
          "This website is a list of JavaScript methods. The author has included commonly used ones
          based on personal preference. Please note that more methods will be added in future
          updates."
        </p>
      </blockquote>

      {/* cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 m-8">
        {/* <Article title="" content="" /> */}
        {/* clomn1 */}
        <div className="grid gap-4">
          <Article title="console.log()" content="Output messages to the web console." />
          <Article title=".getElementById()" content="Get the ID of the document." />
          <Image />
          <Article
            title="pop()"
            content="Removes elements from the end of the array and returns the removed elements."
          />
        </div>

        {/* clomn2 */}
        <div className="grid gap-4">
          <Article
            title=".getElementsBy
                    ClassName()"
            content="Get the ClassName of the document."
          />
          <Image />
          <Article title="alert()" content="Output messages to the web alert." />
          <Image />
        </div>

        {/* clomn3 */}
        <div className="grid gap-4">
          <Article title="Number.isInteger()" content="Check if a number is an integer." />
          <Image />
          <Article title="appendChild()" content="Add a new child element)" />
          <Article title=".createElement()" content="Create a new element" />
          <Image />
        </div>

        {/* clomn4 */}
        <div className="grid gap-4">
          <Article title="class Name{}" content="A mechanism for generating `stuff`. Blueprint." />
          <Article
            title="const name = new Name();"
            content="Create an object from a blueprint. instance method."
          />
          <Image />
          <Article title="Math.ceil()" content="Rounded up to the nearest whole number."></Article>
          <Article
            title="Math.floor()"
            content="Rounded down to the nearest whole number."
          ></Article>
        </div>
      </div>

      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#00cba9"
          fill-opacity="1"
          d="M0,128L48,133.3C96,139,192,149,288,154.7C384,160,480,160,576,176C672,192,768,224,864,224C960,224,1056,192,1152,170.7C1248,149,1344,139,1392,133.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>

      {/* footer */}
      <footer className="bg-custom-green flex justify-center h-24">
        <div className="text-white">
          <p>Javascriptのメソッドをいくつか書いてみたよ</p>
          <p>&copy;2023 Riki</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
