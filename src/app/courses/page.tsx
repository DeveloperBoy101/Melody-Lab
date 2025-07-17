"use client";
import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import coursesData from "@/data/music_courses.json";
import Link from "next/link";

const ContactPage = () => {
  return (
    <div className="text-white min-h-screen bg-gradient-to-t from-black to-gray-950  pt-40">
      <h2 className=" lg:text-5xl text-3xl font-bold text-center tracking-wide leading-14 bg-clip-text text-transparent bg-gradient-to-t from-white to-gray-700">
        Available Courses ({coursesData.courses.length})
      </h2>
      <div className="mx-auto mt-4 h-[1px] w-[350px] bg-gradient-to-r from-neutral-300 to-gray- rounded-full"></div>

      <div className="flex flex-wrap justify-center gap-6 px-4">
        {coursesData.courses.map((course) => (
          <CardContainer key={course.id} className="inter-var">
            <CardBody className="bg-black relative group/card border border-white rounded-xl p-0 w-[16rem] sm:w-[18rem] overflow-hidden">
              <CardItem translateZ="80" className="w-full">
                <img
                  src={course.image}
                  alt={course.title}
                  className="h-40 w-full object-cover rounded-t-xl"
                />
              </CardItem>

              <div className="p-4 space-y-3">
                <CardItem
                  translateZ="50"
                  className="text-lg font-bold text-white"
                >
                  {course.title}
                </CardItem>

                <CardItem
                  as="p"
                  translateZ="60"
                  className="text-xs text-gray-300"
                >
                  {course.description.slice(0, 60)}...
                </CardItem>

                <p className="text-xs text-gray-400">
                  Instructor: {course.instructor}
                </p>
                <p className="text-xs text-gray-400">Price: ${course.price}</p>

                <div className="flex items-center pt-2 ">
                  <Link href={"/courses/buycourses"}>
                    <CardItem
                      translateZ={20}
                      as="button"
                      className="px-3 py-1 rounded-lg bg-white text-black text-xs font-bold  cursor-pointer"
                    >
                      Buy
                    </CardItem>
                  </Link>
                </div>
              </div>
            </CardBody>
          </CardContainer>
        ))}
      </div>
    </div>
  );
};

export default ContactPage;
