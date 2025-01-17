import BottomNavbar from "../../components/BottomNavbar/BottomNavbar";
import OrbitPlanet from "../../components/OrbitPlanet/OrbitPlanet";
import usePlanet from "../../hooks/usePlanet";
import {  PlanetsContainer, SolCircle } from "./Planets.styled";

const Planets = () => {
  const { planetSpecs } = usePlanet("sun");

  const planets = [
    "neptune",
    "uranus",
    "saturn",
    "jupiter",
    "mars",
    "earth",
    "venus",
    "mercury",
  ];
  const planetsMapping = planets?.map((name, index) => (
    <OrbitPlanet planet={name} key={index} />
  ));
  return (
    <>
      
      <PlanetsContainer
        initial={{ opacity: 0, scale: 0.2 }}
        animate={{ opacity: 1, scale: 0.6, scaleY: 0.4 }}
        exit={{ opacity: 0, scale: 0.2 }}
        transition={{
          duration: 1,
          ease: [0, 0.71, 0.2, 1.01],
          scale: {
            type: "spring",
            damping: 10,
            stiffness: 100,
            restDelta: 0.001,
          },
        }}
      >
        <SolCircle planetSpecs={planetSpecs} sunImage={planetSpecs?.name} animate={{ scaleX: 0.4 }} />
        {planetsMapping}
      </PlanetsContainer>
      
      <BottomNavbar />
    </>
  );
};

export default Planets;
