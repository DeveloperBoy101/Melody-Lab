import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";
export const musicSchoolContent = [
  {
    title: "About Our Music School",
    description:
      "Our music school is dedicated to nurturing the talents of aspiring musicians. Whether you're a beginner or looking to master your skills, we provide structured programs tailored to all levels.",
  },
  {
    title: "Our Mission",
    description:
      "We aim to inspire creativity and discipline through the art of music. Our mission is to create a learning environment where students can grow artistically and express themselves with confidence.",
  },
  {
    title: "Why Choose Us",
    description:
      "We offer expert instructors, state-of-the-art facilities, and a welcoming community. Our courses are designed to be flexible and fun, helping students stay motivated and passionate about learning.",
  },
  {
    title: "Performance Opportunities",
    description:
      "Students get chances to perform in concerts and recitals to build confidence and showcase their progress in a supportive environment.",
  },
  {
    title: "Flexible Scheduling",
    description:
      "We offer flexible class timings including weekends and evenings to fit your busy lifestyle and help you learn at your own pace.",
  },
  {
    title: "Certified Instructors",
    description:
      "All our instructors are highly qualified, experienced, and passionate about teaching. They bring real-world experience to every class.",
  },
  {
    title: "Modern Facilities",
    description:
      "Our classrooms are equipped with the latest instruments and soundproofing to ensure a professional and distraction-free environment.",
  },
  {
    title: "Customized Learning Paths",
    description:
      "We tailor lesson plans to suit individual learning goals, whether you want to pursue music professionally or just for fun.",
  },
  {
    title: "Online & Offline Classes",
    description:
      "We offer both in-person and online lessons, so you can learn from anywhere at your convenience without compromising on quality.",
  },
];

const WhyChoseus = () => {
  return (
    <div>
      <StickyScroll content={musicSchoolContent} />
    </div>
  );
};

export default WhyChoseus;
