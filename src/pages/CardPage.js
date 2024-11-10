import styled from "styled-components";
import { UserCard } from "../components/StyledCard";

const Root = styled.div`
  padding: 70px 100px;
`;

const CardContainer = styled.div`
  width: 585px;
  margin: auto;
`;

const CardTitle = styled.div`
  font-size: 32px;
  font-weight: bold;
  margin: 20px 0px;
`;

const Cards = styled.div`
  width: 100%;
  height: 407px;
  display: flex;
  justify-content: center;
  border: 3px dashed;
  border-color: #9747ff;
  border-radius: 5px;
  padding: 35px 0 0 0;
  gap: 10px;
`;

const CardPage = () => {
  return (
    <Root>
      <CardContainer>
        <CardTitle>Card of person</CardTitle>
        <Cards>
          <UserCard small={false} />
          <UserCard small={true} />
        </Cards>
      </CardContainer>
    </Root>
  );
};

export default CardPage;
