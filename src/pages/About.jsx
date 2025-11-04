import { motion } from "framer-motion";
import { CTA } from "../components"; // Assuming this path is correct from your project root
import { experiences, skills } from "../constants"; // Assuming this path is correct

// --- Animation Variants (Your code, looks great!) ---
const sectionFadeIn = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", duration: 1.5, delay: 0.1 },
  },
};

const skillItemVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

const skillsContainerVariant = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const experienceCardVariant = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { type: "spring", duration: 1.5 },
  },
};

// --- Main Component ---
const About = () => {
  return (
    <motion.section
      className='max-container'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* --- INTRO --- */}
      <motion.h1
        className='head-text'
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        Hello, I'm{" "}
        <span className='blue-gradient_text font-semibold drop-shadow'>
          Sheetanshu
        </span>{" "}
        👋
      </motion.h1>

      {/* --- BIO --- */}
      <motion.div
        className='mt-5 flex flex-col gap-3 text-slate-500'
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        {/* Polished the bio text and made it more readable */}
        <p className='text-lg max-w-3xl leading-relaxed'>
          I’m a passionate AI and full-stack developer who loves building
          intelligent systems and interactive digital experiences. My work
          revolves around crafting AI-driven solutions, IoT integrations, and
          modern web applications that bridge creativity with technology.
        </p>
      </motion.div>

      {/* --- MY SKILLS --- */}
      <motion.div
        className='py-12 flex flex-col'
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionFadeIn}
      >
        <h3 className='subhead-text'>My Skills</h3>

        <motion.div
          className='mt-16 flex flex-wrap justify-center gap-x-12 gap-y-10' // Added justify-center and y-gap
          variants={skillsContainerVariant}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.2 }}
        >
          {skills?.map((skill) => (
            // FIX: Wrapped icon and text in a new flex-col container
            <motion.div
              className='flex flex-col items-center gap-3' // Stacks icon and text
              key={skill.name}
              variants={skillItemVariant}
            >
              {/* This is the 3D icon container */}
              <div className='block-container w-20 h-20'>
                {/* FIX: Restored the proper 3D button structure */}
                <div className='btn-back rounded-xl' />
                <div className='btn-front rounded-xl flex justify-center items-center'>
                  <img
                    src={skill.imageUrl}
                    alt={skill.name}
                    className='w-1/2 h-1/2 object-contain'
                  />
                </div>
              </div>

              {/* FIX: Added the text label *outside* the icon container */}
              <p className='text-slate-600 text-sm font-medium'>
                {skill.name}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* --- WORK EXPERIENCE --- */}
      <motion.div
        className='py-16'
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true, amount: 0.1 }}
        variants={sectionFadeIn}
      >
        <h3 className='subhead-text'>Work Experience</h3>

        {/* Removed the redundant intro paragraph, the cards speak for themselves */}
        <div className='mt-12 flex flex-col gap-12'>
          {experiences?.map((experience) => (
            <motion.div
              key={experience.company_name}
              // Polished card styling
              className='bg-white/70 backdrop-blur-sm p-6 rounded-2xl shadow-lg'
              style={{
                borderBottom: "8px solid",
                borderBottomColor: experience.iconBg,
              }}
              variants={experienceCardVariant}
              initial='hidden'
              whileInView='visible'
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className='flex items-center gap-4'>
                <div
                  className='flex justify-center items-center w-12 h-12 rounded-lg'
                  style={{ background: experience.iconBg }}
                >
                  <img
                    src={experience.icon}
                    alt={experience.company_name}
                    className='w-[60%] h-[60%] object-contain'
                  />
                </div>
                <div>
                  <h3 className='text-black text-xl font-poppins font-semibold'>
                    {experience.title}
                  </h3>
                  <p
                    // Polished font color
                    className='text-slate-700 font-medium text-base'
                    style={{ margin: 0 }}
                  >
                    {experience.company_name}
                  </p>
                </div>
              </div>

              <p className='text-slate-500 text-sm mt-3 font-poppins'>
                {experience.date}
              </p>

              <ul className='my-5 list-disc ml-5 space-y-2'>
                {experience.points.map((point, index) => (
                  <li
                    key={`experience-point-${index}`}
                    // Polished font color and added leading for readability
                    className='text-slate-600 font-normal pl-1 text-sm leading-relaxed'
                  >
                    {point}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <hr className='border-slate-200' />

      {/* --- CALL TO ACTION --- */}
      <motion.div
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionFadeIn}
      >
        <CTA />
      </motion.div>
    </motion.section>
  );
};

export default About;

