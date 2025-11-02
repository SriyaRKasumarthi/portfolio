import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import ProjectLayout from '../components/ProjectLayout';

const Publications = () => {
  const { scrollY } = useScroll();
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  
  // Parallax - create transform but disable on mobile
  const textYTransform = useTransform(scrollY, [0, 1000], [0, -200]);
  const imageOpacity = useTransform(scrollY, [0, 500], [1, 0.3]);
  
  // Disable parallax on mobile
  const textY = isMobile ? 0 : textYTransform;

  return (
    <ProjectLayout
      title="Publications"
      subtitle="Thought leadership and design insights"
      backgroundImage="/api/placeholder/1920/1080"
    >
      {/* Typography-focused content */}
      <div className="max-w-4xl mx-auto">
        {/* Introduction */}
        <motion.section 
          className="mb-24"
          style={{ 
            ...(isMobile ? {} : { y: textY })
          }}
        >
          <h2 className="text-4xl font-bold font-orbitron text-white mb-8">
            Design Thinking in Practice
          </h2>
          <p className="text-lg text-gray-300 leading-relaxed mb-8">
            A collection of articles, case studies, and insights that explore the intersection of design, technology, and human behavior. These publications reflect my journey in understanding how thoughtful design can create meaningful impact.
          </p>
        </motion.section>

        {/* Featured Article */}
        <motion.section 
          className="mb-24"
          style={{ 
            ...(isMobile ? {} : { y: textY })
          }}
        >
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <h3 className="text-2xl font-semibold font-space-grotesk text-white mb-4">
              Featured: "The Future of User Experience Design"
            </h3>
            <p className="text-gray-300 mb-6">
              An in-depth exploration of emerging trends in UX design, from voice interfaces to augmented reality, and how designers can prepare for the next wave of digital experiences.
            </p>
            <div className="flex items-center gap-4 text-sm text-gray-400">
              <span>Published: March 2024</span>
              <span>•</span>
              <span>8 min read</span>
              <span>•</span>
              <span>2.3k views</span>
            </div>
          </div>
        </motion.section>

        {/* Article Grid */}
        <motion.section 
          className="grid md:grid-cols-2 gap-8 mb-24"
          style={{ 
            ...(isMobile ? {} : { y: textY })
          }}
        >
          {[
            {
              title: "Design Systems at Scale",
              excerpt: "Building maintainable design systems for enterprise applications.",
              date: "February 2024",
              readTime: "6 min"
            },
            {
              title: "Accessibility First Design",
              excerpt: "Creating inclusive digital experiences that work for everyone.",
              date: "January 2024",
              readTime: "5 min"
            },
            {
              title: "The Psychology of Color",
              excerpt: "Understanding how color choices impact user behavior and emotions.",
              date: "December 2023",
              readTime: "7 min"
            },
            {
              title: "Mobile-First Methodology",
              excerpt: "Why starting with mobile leads to better overall experiences.",
              date: "November 2023",
              readTime: "4 min"
            }
          ].map((article, index) => (
            <motion.article
              key={index}
              className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300"
              whileHover={{ y: -5 }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <h4 className="text-xl font-semibold font-space-grotesk text-white mb-3">
                {article.title}
              </h4>
              <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                {article.excerpt}
              </p>
              <div className="flex items-center justify-between text-xs text-gray-400">
                <span>{article.date}</span>
                <span>{article.readTime}</span>
              </div>
            </motion.article>
          ))}
        </motion.section>

        {/* Research Section */}
        <motion.section 
          className="mb-24"
          style={{ 
            ...(isMobile ? {} : { y: textY })
          }}
        >
          <h3 className="text-3xl font-bold font-orbitron text-white mb-8">
            Research & Studies
          </h3>
          <div className="space-y-6">
            {[
              {
                title: "User Behavior in E-commerce: A Comprehensive Study",
                description: "An 18-month research project analyzing user behavior patterns across different e-commerce platforms, with insights into conversion optimization and user journey mapping.",
                collaborators: "Stanford Design Research Lab",
                status: "Published"
              },
              {
                title: "The Impact of Micro-interactions on User Engagement",
                description: "A quantitative study examining how subtle animations and micro-interactions affect user engagement and task completion rates.",
                collaborators: "MIT Media Lab",
                status: "In Review"
              }
            ].map((study, index) => (
              <motion.div
                key={index}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <div className="flex items-start justify-between mb-4">
                  <h4 className="text-xl font-semibold font-space-grotesk text-white">
                    {study.title}
                  </h4>
                  <span className="px-3 py-1 bg-beige-500/20 text-beige-300 text-xs rounded-full">
                    {study.status}
                  </span>
                </div>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {study.description}
                </p>
                <p className="text-sm text-gray-400">
                  Collaborators: {study.collaborators}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Call to Action */}
        <motion.section 
          className="text-center py-16"
          style={{ 
            ...(isMobile ? {} : { y: textY })
          }}
        >
          <h3 className="text-2xl font-bold font-orbitron text-white mb-4">
            Stay Updated
          </h3>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Subscribe to receive updates on new publications, research findings, and design insights.
          </p>
          <motion.button
            className="px-8 py-4 bg-beige-500 text-white font-medium rounded-lg hover:bg-beige-600 transition-colors duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Subscribe to Newsletter
          </motion.button>
        </motion.section>
      </div>
    </ProjectLayout>
  );
};

export default Publications;
