import styled from "styled-components";
import avatar from "../../assets/images/avatar1.png";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import { MdOutlineMail } from "react-icons/md";
import { FiPhone } from "react-icons/fi";
import CustomButton from "../StyledButton";

import "@fontsource/manrope";

const Card = styled.div`
  width: ${(props) => (props.small ? `200px` : `280px`)};
  height: ${(props) => (props.small ? `261px` : `359px`)};
  border: 2px solid;
  border-color: #f2f2f2;
  border-radius: 20px;
`;

const CardHeader = styled.div`
  position: relative;
  margin: ${(props) => (props.small ? `16px 16px 0 16px` : `20px 20px 0 20px`)};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${(props) => (props.small ? `12px` : `16px`)};
`;

const Avatar = styled.img`
  width: ${(props) => (props.small ? `60px` : `100px`)};
  height: ${(props) => (props.small ? `60px` : `100px`)};
  border-radius: 9999px;
`;

const User = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${(props) => (props.small ? `4px` : `6px`)};
`;

const UserTitle = styled.p`
  text-align: center;
  margin: 0px;
  font-family: "Manrope", sans-serif;
  font-size: ${(props) => (props.small ? `14px` : `16px`)};
  color: #140446;
  font-weight: 600;
`;

const UserContent = styled.p`
  text-align: center;
  margin: 0px;
  font-family: "Manrope", sans-serif;
  font-size: ${(props) => (props.small ? `14px` : `16px`)};
  color: #5d636a;
`;

const Divider = styled.div`
  border-top: 0.5px solid;
  border-color: #5d636a;
  margin: ${(props) => (props.small ? `16px 20px` : `24px 20px`)};
`;

const StyledDropdown = styled(BiDotsHorizontalRounded)`
  position: absolute;
  top: 0;
  right: 0;
  color: #5d636a;
`;

const CardBody = styled.div`
  margin: ${(props) => (props.small ? `0 16px 16px 16px` : `0 20px 20px 20px`)};
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const Contact = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
`;

const ContactContent = styled.div`
  font-family: "Manrope", sans-serif;
  color: #5d636a;
  font-size: ${(props) => (props.small ? `12px` : `14px`)};
`;

export const UserCard = ({ data, small }) => {
  return (
    <Card small={small}>
      <CardHeader small={small}>
        <Avatar src={avatar} alt="avatar" small={small} />
        <User small={small}>
          <UserTitle small={small}>{data.username}</UserTitle>
          <UserContent small={small}>{data.role}</UserContent>
        </User>
        <CustomButton small={small}>Active</CustomButton>
        <StyledDropdown size={small ? 16 : 24} />
      </CardHeader>
      <Divider small={small} />
      <CardBody small={small}>
        <Contact small={small}>
          <FiPhone color="gray" />
          <ContactContent small={small}>{data.phone}</ContactContent>
        </Contact>
        <Contact>
          <MdOutlineMail color="gray" />
          <ContactContent small={small}>{data.email}</ContactContent>
        </Contact>
      </CardBody>
    </Card>
  );
};
