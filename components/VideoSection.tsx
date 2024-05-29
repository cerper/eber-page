"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";

const VideoSection = () => {
  return (
    <section className="flex flex-col items-center justify-center">
      <h4 className="h4  font-oswald text-3xl">Exitos</h4>
      <Carousel
        opts={{
          align: "start",
        }}
        className=" w-full max-w-[300px] lg:max-w-lg"
      >
        <CarouselContent className="mt-8">
          <CarouselItem className="md:basis-1/2 lg:basis-full">
            <iframe
              width="300"
              height="280"
              src="https://www.youtube.com/embed/1ZbQS6pOlSQ?si=b_xJWfNy-bvA9KLW"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              className="h-[280px] w-[300px] lg:w-[560px]"
            ></iframe>
          </CarouselItem>{" "}
          <CarouselItem className="md:basis-1/2 lg:basis-full">
            <iframe
              width="300"
              height="280"
              src="https://www.youtube.com/embed/1ZbQS6pOlSQ?si=b_xJWfNy-bvA9KLW"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              className="h-[280px] w-[300px] lg:w-[560px]"
            ></iframe>
          </CarouselItem>
          <CarouselItem>
            <iframe
              width="300"
              height="280"
              src="https://www.youtube.com/embed/1ZbQS6pOlSQ?si=b_xJWfNy-bvA9KLW"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              className="h-[280px] w-[300px] lg:w-[560px]"
            ></iframe>
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
};
export default VideoSection;
