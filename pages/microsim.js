import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import { FiArrowRight, FiGithub, FiYoutube, FiTwitter, FiCode, FiImage, FiLink, FiPlay, FiPause } from 'react-icons/fi';
import { FaWikipediaW } from 'react-icons/fa';

const LandingPage = () => {
  const router = useRouter();
  const [activeDemo, setActiveDemo] = useState('p5js');
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentFeature, setCurrentFeature] = useState(0);

  const features = [
    {
      title: "Wikipedia Integration",
      description: "Simply paste a Wikipedia link and get interactive visualizations instantly.",
      icon: <FaWikipediaW className="text-2xl" />
    },
    {
      title: "Multiple Formats",
      description: "Choose from p5.js, Three.js, D3.js, or Mermaid.js visualizations.",
      icon: <FiCode className="text-2xl" />
    },
    {
      title: "Image Analysis",
      description: "Upload diagrams or charts and get interactive simulations automatically.",
      icon: <FiImage className="text-2xl" />
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFeature((prev) => (prev + 1) % features.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const demos = {
    p5js: {
      title: "p5.js Visualizations",
      description: "Create beautiful 2D animations and interactive art with p5.js",
      code: `function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  fill(255, 0, 0);
  ellipse(mouseX, mouseY, 50, 50);
}`
    },
    threejs: {
      title: "Three.js 3D Models",
      description: "Render stunning 3D visualizations with Three.js",
      code: `const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);`
    },
    d3js: {
      title: "D3.js Data Visualizations",
      description: "Build professional data visualizations with D3.js",
      code: `const svg = d3.select("body").append("svg")
  .attr("width", 400)
  .attr("height", 200);

svg.selectAll("rect")
  .data([4, 8, 15, 16, 23, 42])
  .enter().append("rect")
  .attr("x", (d, i) => i * 40)
  .attr("y", (d) => 200 - d * 4)`
    },
    mermaidjs: {
      title: "Mermaid.js Diagrams",
      description: "Generate flowcharts, sequence diagrams and more",
      code: `graph TD
    A[Start] --> B{Decision}
    B -->|Yes| C[Action 1]
    B -->|No| D[Action 2]`
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <Head>
        <title>MicroSim Learning - Interactive Visualizations from Wikipedia</title>
        <meta name="description" content="Transform Wikipedia articles into interactive visualizations with one click" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Hero Section */}
      <header className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-20"></div>
        <div className="max-w-7xl mx-auto px-4 py-24 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-6xl font-extrabold tracking-tight text-gray-900"
            >
              Transform Knowledge into <span className="text-blue-600">Interactive</span> Experiences
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-6 max-w-2xl mx-auto text-xl text-gray-600"
            >
              MicroSim instantly converts Wikipedia articles, text descriptions, and images into interactive visualizations for enhanced learning.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-10 flex flex-col sm:flex-row justify-center gap-4"
            >
              <button
                onClick={() => router.push('/home')}
                className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg shadow-lg transition-all transform hover:scale-105"
              >
                Launch MicroSim Editor
              </button>
              <button
                onClick={() => {
                  const element = document.getElementById('features');
                  element.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-8 py-4 bg-white hover:bg-gray-50 text-gray-800 font-medium rounded-lg shadow-lg border border-gray-200 transition-all"
              >
                Learn More
              </button>
            </motion.div>
          </div>
        </div>
      </header>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              How MicroSim Works
            </h2>
            <p className="mt-4 max-w-2xl text-xl text-gray-600 mx-auto">
              Three simple ways to create interactive learning experiences
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`bg-gray-50 p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow ${currentFeature === index ? 'ring-2 ring-blue-500' : ''}`}
              >
                <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg text-blue-600 mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Demo Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Interactive Visualization Formats
            </h2>
            <p className="mt-4 max-w-2xl text-xl text-gray-600 mx-auto">
              Choose from multiple visualization technologies
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-xl overflow-hidden">
            <div className="flex flex-col md:flex-row">
              {/* Sidebar */}
              <div className="w-full md:w-1/4 bg-gray-900 p-4">
                <h3 className="text-white font-bold mb-4">Formats</h3>
                <ul className="space-y-2">
                  {Object.keys(demos).map((key) => (
                    <li key={key}>
                      <button
                        onClick={() => setActiveDemo(key)}
                        className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${activeDemo === key ? 'bg-blue-600 text-white' : 'text-gray-300 hover:bg-gray-800'}`}
                      >
                        {demos[key].title}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Content */}
              <div className="w-full md:w-3/4">
                <div className="p-6 border-b border-gray-200">
                  <h3 className="text-xl font-bold text-gray-900">{demos[activeDemo].title}</h3>
                  <p className="text-gray-600 mt-2">{demos[activeDemo].description}</p>
                </div>
                <div className="relative">
                  <div className="bg-gray-900 text-gray-300 p-6 overflow-auto">
                    <pre className="font-mono text-sm">{demos[activeDemo].code}</pre>
                  </div>
                  <div className="absolute top-4 right-4">
                    <button
                      onClick={() => setIsPlaying(!isPlaying)}
                      className="p-2 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg"
                    >
                      {isPlaying ? <FiPause /> : <FiPlay />}
                    </button>
                  </div>
                </div>
                <div className="bg-gray-100 p-6 flex justify-center items-center min-h-64">
                  {isPlaying ? (
                    <div className="w-full h-64 bg-black flex items-center justify-center text-white">
                      <p>Simulation would run here</p>
                    </div>
                  ) : (
                    <div className="text-center">
                      <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
                        <FiPlay className="text-gray-500 text-3xl" />
                      </div>
                      <p className="text-gray-600">Click play to see the simulation</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Remix Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              AI-Powered Remix Prompts
            </h2>
            <p className="mt-4 max-w-2xl text-xl text-gray-600 mx-auto">
              Enhance your visualizations with our smart remix options
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-gradient-to-br from-purple-50 to-blue-50 p-8 rounded-xl shadow-md border border-purple-100"
            >
              <div className="flex items-center justify-center w-12 h-12 bg-purple-100 rounded-lg text-purple-600 mb-6">
                <span className="text-xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Fix Display</h3>
              <p className="text-gray-600 mb-4">Automatically corrects visualization rendering issues and improves layout.</p>
              <button className="text-purple-600 hover:text-purple-800 font-medium flex items-center">
                Try Remix 1 <FiArrowRight className="ml-2" />
              </button>
            </motion.div>

            <motion.div
              whileHover={{ y: -5 }}
              className="bg-gradient-to-br from-blue-50 to-green-50 p-8 rounded-xl shadow-md border border-blue-100"
            >
              <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg text-blue-600 mb-6">
                <span className="text-xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Enhance Layout</h3>
              <p className="text-gray-600 mb-4">Optimizes the structure and organization of your visualization.</p>
              <button className="text-blue-600 hover:text-blue-800 font-medium flex items-center">
                Try Remix 2 <FiArrowRight className="ml-2" />
              </button>
            </motion.div>

            <motion.div
              whileHover={{ y: -5 }}
              className="bg-gradient-to-br from-green-50 to-yellow-50 p-8 rounded-xl shadow-md border border-green-100"
            >
              <div className="flex items-center justify-center w-12 h-12 bg-green-100 rounded-lg text-green-600 mb-6">
                <span className="text-xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Add Interactivity</h3>
              <p className="text-gray-600 mb-4">Introduces interactive elements to engage your audience.</p>
              <button className="text-green-600 hover:text-green-800 font-medium flex items-center">
                Try Remix 3 <FiArrowRight className="ml-2" />
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Learning Features */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Enhanced Learning Tools
            </h2>
            <p className="mt-4 max-w-2xl text-xl text-gray-600 mx-auto">
              More than just visualizations - complete learning solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="flex items-center mb-6">
                <div className="bg-blue-100 p-3 rounded-lg text-blue-600 mr-4">
                  <FiCode className="text-2xl" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Auto-Generated Summaries</h3>
              </div>
              <p className="text-gray-600 mb-6">
                Every visualization comes with a concise summary of the concept, helping you understand the key points quickly.
              </p>
              <div className="bg-gray-100 p-4 rounded-lg">
                <p className="text-gray-700 italic">"The visualization demonstrates Newton's First Law of Motion, showing that an object in motion stays in motion unless acted upon by an external force..."</p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="flex items-center mb-6">
                <div className="bg-purple-100 p-3 rounded-lg text-purple-600 mr-4">
                  <FiPlay className="text-2xl" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Interactive MCQs</h3>
              </div>
              <p className="text-gray-600 mb-6">
                Test your understanding with automatically generated multiple-choice questions based on the visualization.
              </p>
              <div className="space-y-3">
                <div className="bg-gray-100 p-3 rounded-lg">
                  <p className="font-medium">What does this visualization demonstrate?</p>
                  <div className="mt-2 space-y-2">
                    <div className="bg-blue-50 p-2 rounded">Newton's First Law</div>
                    <div className="p-2 rounded">The Theory of Relativity</div>
                    <div className="p-2 rounded">Quantum Mechanics</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-6">Ready to Transform Your Learning?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
            Start creating interactive visualizations from Wikipedia, text, or images in seconds.
          </p>
          <button
            onClick={() => router.push('/home')}
            className="px-8 py-4 bg-white text-blue-600 hover:bg-gray-100 font-bold rounded-lg shadow-xl transition-all transform hover:scale-105"
          >
            Launch MicroSim Editor Now
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-white text-lg font-semibold mb-4">MicroSim</h3>
              <p className="mb-4">Transforming knowledge into interactive learning experiences.</p>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-white">
                  <FiGithub className="text-xl" />
                </a>
                <a href="#" className="hover:text-white">
                  <FiTwitter className="text-xl" />
                </a>
                <a href="#" className="hover:text-white">
                  <FiYoutube className="text-xl" />
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-white text-lg font-semibold mb-4">Features</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white">Wikipedia Integration</a></li>
                <li><a href="#" className="hover:text-white">Image Analysis</a></li>
                <li><a href="#" className="hover:text-white">Text to Visualization</a></li>
                <li><a href="#" className="hover:text-white">Remix Prompts</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white text-lg font-semibold mb-4">Formats</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white">p5.js</a></li>
                <li><a href="#" className="hover:text-white">Three.js</a></li>
                <li><a href="#" className="hover:text-white">D3.js</a></li>
                <li><a href="#" className="hover:text-white">Mermaid.js</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white text-lg font-semibold mb-4">Resources</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white">Documentation</a></li>
                <li><a href="#" className="hover:text-white">Tutorials</a></li>
                <li><a href="#" className="hover:text-white">API Reference</a></li>
                <li><a href="#" className="hover:text-white">GitHub</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center">
            <p>&copy; {new Date().getFullYear()} MicroSim Learning. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;