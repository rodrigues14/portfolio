import { motion } from "framer-motion";
import styled from "styled-components";

export const StyledProjetos = styled(motion.div)`
  max-width: 1400px;
  margin-inline: auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, auto));
  gap: 10px;
`;