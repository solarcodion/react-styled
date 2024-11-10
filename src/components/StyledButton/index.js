import styled from "styled-components";

import "@fontsource/manrope";

const StyledBtn = styled.button`
  width: ${(props) => (props.small ? `67px` : `76px`)};
  height: ${(props) => (props.small ? `20px` : `23px`)};
  padding: 2px 8px;
  border-radius: 6px;
  background-color: #ffe6fa;
  color: #140446;
  font-family: "Manrope", sans-serif;
  font-size: ${(props) => (props.small ? `11px` : `14px`)};
  line-height: 130%;
  font-weight: 600;
  border: none;
  cursor: pointer;
  transition: background-color 0.2s ease;
`;

const CustomButton = ({ small, children }) => {
  return <StyledBtn small={small}>{children}</StyledBtn>;
};

export default CustomButton;
