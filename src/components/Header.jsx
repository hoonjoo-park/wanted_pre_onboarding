import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FiMenu } from 'react-icons/fi';
import { AiOutlineSearch } from 'react-icons/ai';
import { FaRegBell } from 'react-icons/fa';
import { HorizontalText, MyProfile } from '../Image';
function Header() {
  return (
    <Head>
      <Nav>
        <LeftSection>
          <FiMenu />
          <Link to="/">
            <Logo src={HorizontalText} alt="textLogo" />
          </Link>
        </LeftSection>
        <CenterSection>
          <li>채용</li>
          <li>이벤트</li>
          <li>직군별 연봉</li>
          <li>이력서</li>
          <li className="communityNav">커뮤니티</li>
          <li>프리랜서</li>
          <li className="aiPredictNav">AI 합격예측</li>
        </CenterSection>
        <RightSection>
          <ul>
            <li>
              <AiOutlineSearch />
            </li>
            <li className="alert">
              <FaRegBell />
            </li>
            <ProfileBox>
              <img src={MyProfile} alt="profile" />
            </ProfileBox>
          </ul>
          <hr />
          <button>기업 서비스</button>
        </RightSection>
      </Nav>
    </Head>
  );
}

export default Header;

const Head = styled.div`
  width: 100vw;
  height: 50px;
  box-shadow: 0 1px 0 0 rgb(0 0 0 / 10%);
`;
const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: auto;
  width: 66.25rem;
  height: 100%;
`;
const LeftSection = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  & > svg {
    font-size: 1.4rem;
    margin-right: 0.6rem;
  }
`;
const CenterSection = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 100%;
  width: 33.3rem;
  & > li {
    position: relative;
    font-size: 14px;
    font-weight: 600;
    padding: 15px;
  }
  & > li.communityNav::after {
    position: absolute;
    content: 'New';
    color: #3366ff;
    font-size: 1px;
    font-weight: 400;
    top: 20%;
    right: -8%;
  }
  & > li.aiPredictNav::after {
    position: absolute;
    content: 'Beta';
    color: #3366ff;
    font-size: 1px;
    font-weight: 400;
    top: 20%;
    right: -8%;
  }
`;
const Logo = styled.img`
  width: 4.6rem;
`;
const RightSection = styled.ul`
  display: flex;
  align-items: center;
  height: 100%;
  width: 251.56px;
  & > ul {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 50%;
    height: 100%;
    & > li {
      position: relative;
    }
    & svg {
      font-size: 1.2rem;
    }
    & li.alert::after {
      position: absolute;
      content: 'N';
      height: 10px;
      width: 10px;
      line-height: 10px;
      text-align: center;
      top: -35%;
      right: -40%;
      padding: 1.5px;
      border-radius: 5px;
      color: #ffffff;
      background-color: #3366ff;
      font-size: 0.5px;
      font-weight: 600;
    }
  }
  & > hr {
    width: 1px;
    height: 10px;
    border: none;
    background-color: #e1e2e3;
  }
  & > button {
    height: 30px;
    line-height: 30px;
    color: #666;
    border: 1px solid #e1e2e3;
    border-radius: 15px;
    font-size: 13px;
    font-weight: 400;
    padding: 0 10px;
  }
`;
const ProfileBox = styled.li`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #e1e2e3;
  border-radius: 50%;
  padding: 0.05em;
  &::after {
    position: absolute;
    content: 'N';
    height: 10px;
    width: 10px;
    line-height: 12px;
    text-align: center;
    top: -20%;
    right: -25%;
    padding: 1.5px;
    border-radius: 5px;
    color: #ffffff;
    background-color: #3366ff;
    font-size: 0.5px;
    font-weight: 600;
  }
  & > img {
    width: 1.7rem;
  }
`;
