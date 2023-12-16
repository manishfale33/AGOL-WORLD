import { Carousel, Typography, Button } from "@material-tailwind/react";
import Images from "../images/index";

const CarouselWithContent = () => {
  return (
    <Carousel className="rounded-xl">
      <div className="relative h-screen md:h-full w-full flex items-center">
        <img
          src={Images.obc}
          alt="image 1"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75 text-center">
          <div className="w-3/4 md:w-full">
            <Typography
              variant="lead"
              color="white"
              className="mb-4 md:mb-12 opacity-80"
            >
              BECOME AN OBC
            </Typography>
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-3xl md:text-4xl lg:text-5xl"
            >
              The Extremely Fast, most Reliable Solution.
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-4 md:mb-12 opacity-80"
            >
              When an urgency strikes, our on-board courier AGOL OBC service is
              unparalleled, it uses global airline networks and trained flyers
              to expedite your Time-Critical shipments. Whether it is a firewall
              component to keep a network provider running, the latest precision
              parts for new technology, or a time-sensitive delivery of
              satellite parts, we understand precisely what it takes to get
              your goods delivered safe and on-time.
            </Typography>
            <div className="flex flex-col md:flex-row justify-center gap-4">
              <Button
                size="lg"
                color="white"
                className="mb-4 md:mb-0 transform hover:scale-110 transition-transform duration-300"
              >
                BECOME AN OBC
              </Button>
              <Button
                size="lg"
                color="white"
                variant="text"
                className="transform hover:scale-110 transition-transform duration-300"
              >
                CONTACT US
              </Button>
            </div>
          </div>
        </div>
      </div>
      {/* Similar adjustments for the other slides */}
    </Carousel>
  );
};

export default CarouselWithContent;
