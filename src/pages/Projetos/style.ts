import { motion } from "framer-motion";
import styled from "styled-components";

export const StyledProjetos = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, auto));
  gap: 10px;
`;