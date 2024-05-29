"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";

const VideoSection = () => {
  return (
    <section className="mt-4 flex flex-col items-center justify-center">
      <h4 className="h4  font-oswald text-4xl">Exitos</h4>
      <Carousel
        opts={{
          align: "start",
        }}
        className=" flex w-full max-w-[300px] flex-col  lg:max-w-lg"
      >
        <CarouselContent className=" mt-8">
          <CarouselItem className=" md:basis-full lg:basis-full">
            <h5 className=" text-center font-roboto text-2xl text-white">
              Eber Music production
              <iframe
                width="300"
                height="300"
                src="https://www.youtube.com/embed/1ZbQS6pOlSQ?si=b_xJWfNy-bvA9KLW"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                className="mt-2 h-[200px] w-[300px] lg:h-[300px]  lg:w-[500px]"
              ></iframe>
            </h5>
          </CarouselItem>{" "}
          <CarouselItem className="md:basis-full lg:basis-full">
            <h5 className=" text-center font-roboto text-2xl text-white">
              Eber music
              <iframe
                width="300"
                height="280"
                src="https://www.youtube.com/embed/1ZbQS6pOlSQ?si=b_xJWfNy-bvA9KLW"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                className="mt-2 h-[200px] w-[300px] lg:h-[300px] lg:w-[500px]"
              ></iframe>
            </h5>
          </CarouselItem>
          <CarouselItem className="md:basis-full lg:basis-full">
            <h5 className=" text-center font-roboto text-2xl text-white">
              Eber music
              <iframe
                width="300"
                height="280"
                src="https://www.youtube.com/embed/1ZbQS6pOlSQ?si=b_xJWfNy-bvA9KLW"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                className="mt-2 h-[200px] w-[300px] lg:h-[300px]  lg:w-[500px]"
              ></iframe>
            </h5>
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      <Button variant={"default"} className="mt-4 w-24 bg-white">
        <Link href="/" className="text-black">
          hola
        </Link>
      </Button>
    </section>
  );
};
export default VideoSection;
