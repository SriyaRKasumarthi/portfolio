import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import ProjectLayout from '../components/ProjectLayout';

const Photography = () => {
  const { scrollY } = useScroll();
  const imageY = useTransform(scrollY, [0, 1000], [0, -300]);
  const textY = useTransform(scrollY, [0, 800], [0, -150]);

  return (
    <ProjectLayout
      title="Photography"
      subtitle="Visual narratives through the lens"
      backgroundImage="/api/placeholder/1920/1080"
    >
      {/* Hero Story Section */}
      <motion.section 
        className="mb-32"
        style={{ y: textY }}
      >
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-5xl font-bold font-orbitron text-white mb-8 leading-tight">
              Urban Stories
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              A visual exploration of human connection in digital spaces. Each photograph tells a story of how technology shapes our daily interactions and relationships with the world around us.
            </p>
            <div className="flex items-center gap-8 text-sm text-gray-400">
              <span>2023-2024</span>
              <span>•</span>
              <span>45 Images</span>
              <span>•</span>
              <span>3 Cities</span>
            </div>
          </div>
          <motion.div
            className="relative"
            style={{ y: imageY }}
          >
            <div className="aspect-[4/3] bg-gradient-to-br from-beige-200 to-beige-400 rounded-2xl overflow-hidden">
              <div className="w-full h-full flex items-center justify-center">
                <span className="text-beige-700 font-bold text-2xl">Urban Story 1</span>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Large Image with Motion Text */}
      <motion.section 
        className="mb-32"
        style={{ y: imageY }}
      >
        <div className="relative h-[80vh] rounded-3xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-beige-300 to-beige-500">
            <div className="w-full h-full flex items-center justify-center">
              <span className="text-beige-800 font-bold text-3xl">Featured Image</span>
            </div>
          </div>
          <motion.div
            className="absolute bottom-8 left-8 max-w-md"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-3xl font-bold font-orbitron text-white mb-4">
              The Digital Divide
            </h3>
            <p className="text-gray-200 leading-relaxed">
              Capturing the contrast between our digital and physical worlds, this series explores how technology has become an integral part of our urban landscape.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Photo Grid */}
      <motion.section 
        className="mb-32"
        style={{ y: textY }}
      >
        <h3 className="text-4xl font-bold font-orbitron text-white mb-12 text-center">
          Recent Work
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {Array.from({ length: 12 }, (_, i) => (
            <motion.div
              key={i}
              className="aspect-square bg-gradient-to-br from-beige-200 to-beige-400 rounded-xl overflow-hidden cursor-pointer"
              whileHover={{ scale: 1.05, rotate: 2 }}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="w-full h-full flex items-center justify-center">
                <span className="text-beige-700 font-medium text-sm">Photo {i + 1}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Story Section with Large Image */}
      <motion.section 
        className="mb-32"
        style={{ y: imageY }}
      >
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="aspect-[3/4] bg-gradient-to-br from-beige-300 to-beige-500 rounded-2xl overflow-hidden">
              <div className="w-full h-full flex items-center justify-center">
                <span className="text-beige-800 font-bold text-2xl">Portrait Series</span>
              </div>
            </div>
          </motion.div>
          <div>
            <h3 className="text-4xl font-bold font-orbitron text-white mb-6">
              Human Connection
            </h3>
            <p className="text-lg text-gray-300 leading-relaxed mb-8">
              This intimate portrait series focuses on the human element in our increasingly digital world. Each photograph captures a moment of genuine connection, reminding us of the importance of human interaction in our daily lives.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-2 h-2 bg-beige-500 rounded-full"></div>
                <span className="text-gray-300">Shot on 35mm film</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-2 h-2 bg-beige-500 rounded-full"></div>
                <span className="text-gray-300">Natural lighting only</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-2 h-2 bg-beige-500 rounded-full"></div>
                <span className="text-gray-300">Minimal post-processing</span>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Equipment & Process */}
      <motion.section 
        className="mb-32"
        style={{ y: textY }}
      >
        <h3 className="text-3xl font-bold font-orbitron text-white mb-12 text-center">
          Process & Equipment
        </h3>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Camera Gear",
              items: ["Canon EOS R5", "Sony A7R IV", "Leica M10"],
              description: "Professional equipment for capturing high-quality images in various lighting conditions."
            },
            {
              title: "Lenses",
              items: ["24-70mm f/2.8", "85mm f/1.4", "35mm f/1.8"],
              description: "Versatile lens collection for different shooting scenarios and creative perspectives."
            },
            {
              title: "Post-Processing",
              items: ["Adobe Lightroom", "Capture One", "Photoshop"],
              description: "Professional editing workflow to enhance and refine the final images."
            }
          ].map((category, index) => (
            <motion.div
              key={index}
              className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <h4 className="text-xl font-semibold font-space-grotesk text-white mb-4">
                {category.title}
              </h4>
              <ul className="space-y-2 mb-4">
                {category.items.map((item, i) => (
                  <li key={i} className="text-gray-300 text-sm">• {item}</li>
                ))}
              </ul>
              <p className="text-gray-400 text-sm leading-relaxed">
                {category.description}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Contact Section */}
      <motion.section 
        className="text-center py-16"
        style={{ y: textY }}
      >
        <h3 className="text-3xl font-bold font-orbitron text-white mb-6">
          Let's Collaborate
        </h3>
        <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
          Interested in working together on a photography project? I'm always excited to explore new visual narratives and creative collaborations.
        </p>
        <motion.button
          className="px-8 py-4 bg-beige-500 text-white font-medium rounded-lg hover:bg-beige-600 transition-colors duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Start a Project
        </motion.button>
      </motion.section>
    </ProjectLayout>
  );
};

export default Photography;
