import { motion } from "framer-motion";
import styled from "styled-components";
import { flexWrapper } from "../../styles/globalStyles";
import { PlanetSpecsProps } from "../../hooks/usePlanet";

const PlanetsContainer = styled(motion.div)`
  ${flexWrapper('center')};
  position: relative;
  border-radius: 50%;
`;

type Sol = {
  sunImage: string | unknown;
  planetSpecs: PlanetSpecsProps
}

const SolCircle = styled(motion.div)<Sol>`
  width: ${({planetSpecs}) => planetSpecs?.width}rem;
  height: ${({planetSpecs}) => planetSpecs?.height}rem;
  border-radius: 50%;
  border: 5px solid #ec730f;
  ${({sunImage}) => {
    return `
    background: url(src/assets/${sunImage}.jpg);
    `
  }}
  
  box-shadow: rgba(248, 213, 14, 0.815) 0px 7px 29px 0px;
`;


export { SolCircle, PlanetsContainer };
