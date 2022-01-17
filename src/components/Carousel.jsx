import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { MdArrowBackIosNew, MdArrowForwardIos } from 'react-icons/md';
import { One, Two, Three, Four, Five, Six, Seven, Eight, Nine } from '../Image';
function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(2);
  const [distance, setDistance] = useState(1875);
  const [timing, setTiming] = useState(0.5);
  const slideCarousel = useRef();
  const moveLeft = () => {
    if (currentIndex < 3) {
      setDistance(distance - 1086);
      setTimeout(function () {
        setTiming(0);
        setDistance(10562);
      }, 600);
      setCurrentIndex(11);
    } else {
      setTiming(0.5);
      setDistance(distance - 1086);
      setCurrentIndex(currentIndex - 1);
    }
  };
  const moveRight = async () => {
    if (currentIndex === 10) {
      setDistance(distance + 1086);
      setTimeout(function () {
        setTiming(0);
        setDistance(1875);
      }, 600);
      setCurrentIndex(1);
    } else {
      setTiming(0.5);
      setDistance(distance + 1086);
      setCurrentIndex(currentIndex + 1);
    }
  };
  useEffect(() => {
    console.log(currentIndex, distance);
  }, [distance]);
  return (
    <CarouselContainer>
      <CoverLeft></CoverLeft>
      <CoverRight></CoverRight>
      <Slider ref={slideCarousel} distance={distance} timing={timing}>
        <div style={{ backgroundImage: `url(${Eight})` }}>
          <div>
            <h2>UX 디자이너의 커리어 설계</h2>
            <h3>브랜드 가치를 더하는 디자인</h3>
            <BottomBox>
              <span>
                바로가기 <MdArrowForwardIos />
              </span>
            </BottomBox>
          </div>
        </div>
        <div style={{ backgroundImage: `url(${Nine})` }}>
          <div>
            <h2>개발자 성장 비결 공개!</h2>
            <h3>Velog, 글 쓰는 개발자들의 이야기</h3>
            <BottomBox>
              <span>
                바로가기 <MdArrowForwardIos />
              </span>
            </BottomBox>
          </div>
        </div>
        <div style={{ backgroundImage: `url(${One})` }}>
          <div>
            <h2>개발자 되고싶은 분들!?</h2>
            <h3>프론트엔드 무료교육 과정 참여하기</h3>
            <BottomBox>
              <span>
                바로가기 <MdArrowForwardIos />
              </span>
            </BottomBox>
          </div>
        </div>
        <div style={{ backgroundImage: `url(${Two})` }}>
          <div>
            <h2>해, 커리어 EP 02 공개</h2>
            <h3>마지막 관문 2라운드의 승자는?</h3>
            <BottomBox>
              <span>
                바로가기 <MdArrowForwardIos />
              </span>
            </BottomBox>
          </div>
        </div>
        <div style={{ backgroundImage: `url(${Three})` }}>
          <div>
            <h2>성장하는 개발자가 되려면?</h2>
            <h3>OOO 검색하지 말 것!</h3>
            <BottomBox>
              <span>
                바로가기 <MdArrowForwardIos />
              </span>
            </BottomBox>
          </div>
        </div>
        <div style={{ backgroundImage: `url(${Four})` }}>
          <div>
            <h2>성과를 내는 마케팅</h2>
            <h3>실제 사례를 공개합니다!</h3>
            <BottomBox>
              <span>
                바로가기 <MdArrowForwardIos />
              </span>
            </BottomBox>
          </div>
        </div>
        <div style={{ backgroundImage: `url(${Five})` }}>
          <div>
            <h2>포트폴리오를 부탁해!</h2>
            <h3>디자이너의 포폴 살펴보기</h3>
            <BottomBox>
              <span>
                바로가기 <MdArrowForwardIos />
              </span>
            </BottomBox>
          </div>
        </div>
        <div style={{ backgroundImage: `url(${Six})` }}>
          <div>
            <h2>2022년 달라지는 노동법령</h2>
            <h3>노무관리 쟁점 한 눈에 파악하기</h3>
            <BottomBox>
              <span>
                바로가기 <MdArrowForwardIos />
              </span>
            </BottomBox>
          </div>
        </div>
        <div style={{ backgroundImage: `url(${Seven})` }}>
          <div>
            <h2>마케팅 주니어를 찾습니다</h2>
            <h3>기업 과제 풀고 취업까지 한 번에!</h3>
            <BottomBox>
              <span>
                바로가기 <MdArrowForwardIos />
              </span>
            </BottomBox>
          </div>
        </div>
        <div style={{ backgroundImage: `url(${Eight})` }}>
          <div>
            <h2>UX 디자이너의 커리어 설계</h2>
            <h3>브랜드 가치를 더하는 디자인</h3>
            <BottomBox>
              <span>
                바로가기 <MdArrowForwardIos />
              </span>
            </BottomBox>
          </div>
        </div>
        <div style={{ backgroundImage: `url(${Nine})` }}>
          <div>
            <h2>개발자 성장 비결 공개!</h2>
            <h3>Velog, 글 쓰는 개발자들의 이야기</h3>
            <BottomBox>
              <span>
                바로가기 <MdArrowForwardIos />
              </span>
            </BottomBox>
          </div>
        </div>
        <div style={{ backgroundImage: `url(${One})` }}>
          <div>
            <h2>개발자 되고싶은 분들!?</h2>
            <h3>프론트엔드 무료교육 과정 참여하기</h3>
            <BottomBox>
              <span>
                바로가기 <MdArrowForwardIos />
              </span>
            </BottomBox>
          </div>
        </div>
        <div style={{ backgroundImage: `url(${Two})` }}>
          <div>
            <h2>해, 커리어 EP 02 공개</h2>
            <h3>마지막 관문 2라운드의 승자는?</h3>
            <BottomBox>
              <span>
                바로가기 <MdArrowForwardIos />
              </span>
            </BottomBox>
          </div>
        </div>
      </Slider>
      <button className="leftArrow" onClick={moveLeft}>
        <MdArrowBackIosNew />
      </button>
      <button className="rightArrow" onClick={moveRight}>
        <MdArrowForwardIos />
      </button>
    </CarouselContainer>
  );
}

export default Carousel;

const CarouselContainer = styled.div`
  position: relative;
  min-width: 100vw;
  width: 100%;
  height: 300px;
  overflow: hidden;
  & button {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #ffffff;
    height: 60px;
    width: 30px;
    border-radius: 15px;
    top: 50%;
    transform: translateY(-50%);
    opacity: 0.5;
    z-index: 1;
  }
  & .leftArrow {
    left: 14%;
  }
  & .rightArrow {
    right: 14%;
  }
`;
const Slider = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  height: 100%;
  transform: ${(props) => `translateX(-${props.distance}px)`};
  transition: ${(props) => `transform ${props.timing}s ease`};
  & > div {
    position: relative;
    min-width: 1060px;
    height: 100%;
    border-radius: 4px;
    padding: 0 12px;
    margin: 0 13px;
    & > div {
      position: absolute;
      display: flex;
      flex-direction: column;
      width: 330px;
      height: 146px;
      padding: 1.5em 1.5em 0 1.5em;
      background-color: #ffffff;
      border-radius: 4px;
      left: 2%;
      bottom: 8%;
      & > h2 {
        font-size: 20px;
        font-weight: 700;
        margin-bottom: 1rem;
      }
      & > h3 {
        font-size: 14px;
        margin-bottom: 1rem;
      }
    }
  }
`;
const CoverLeft = styled.div`
  position: absolute;
  background-color: #1c1c1c;
  left: 0;
  height: 100%;
  width: 283.5px;
  border-radius: 0 4px 4px 0;
  z-index: 1;
  opacity: 0.5;
`;
const CoverRight = styled.div`
  position: absolute;
  background-color: #1c1c1c;
  right: 0;
  height: 100%;
  width: 283.5px;
  border-radius: 4px 0 0 4px;
  z-index: 1;
  opacity: 0.5;
`;
const BottomBox = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  border-top: 1px solid #efefef;
  color: #3366ff;
  font-size: 14px;
  font-weight: 500;
  & svg {
    font-size: 12px;
  }
`;
