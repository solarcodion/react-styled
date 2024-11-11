import styled from "styled-components";

import "@fontsource/manrope";

const StyledBtn = styled.button`
  padding: ${(props) => (props.small ? `2px 8px` : `4px 12px`)};
  border-radius: ${(props) => (props.small ? `6px` : `8px`)};
  background-color: #ffe6fa;
  color: #140446;
  font-family: "Manrope", sans-serif;
  font-size: ${(props) => (props.small ? `12px` : `14px`)};
  line-height: ${(props) => (props.small ? `140%` : `130%`)};
  font-weight: 600;
  border: none;
  cursor: pointer;
  transition: background-color 0.2s ease;
`;

const CustomButton = ({ small, children }) => {
  return <StyledBtn small={small}>{children}</StyledBtn>;
};

export default CustomButton;
