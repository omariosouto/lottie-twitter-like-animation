import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Lottie from 'react-lottie';
import styled from 'styled-components';
import './index.css';

import animationData from './animation.json';

const ButtonWrapper = styled.button`
  --size: 100px;
  width: var(--size);
  height: var(--size);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 33px;
  background-color: #fff;
  border: 0;
  padding: 0;
  cursor: pointer;
  outline: 0;
  border-radius: 100%;

  .animation {
    pointer-events: none;
  }
`;

export const LikeButton = () => {
  const [isLiked, setLikeState] = useState(false);
  const [animationState, setAnimationState] = useState({
    isStopped: true, isPaused: false,
    direction: -1,
  });

  const defaultOptions = {
    loop: false,
    autoplay: false, 
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };


  return (
    <>
      <ButtonWrapper onClick={() => {
        const reverseAnimation = -1;
        const normalAnimation = 1;

        setAnimationState({
          ...animationState,
          isStopped: false,
          direction: animationState.direction === normalAnimation 
            ? reverseAnimation
            : normalAnimation,
        })
        setLikeState(!isLiked);
      }}>
        <div className="animation">
          <Lottie
            options={defaultOptions}
            width={400}
            height={400}
            direction={animationState.direction}
            isStopped={animationState.isStopped}
            isPaused={animationState.isPaused}/>
        </div>
      </ButtonWrapper>
      <span>
        {isLiked ? 1 : 0}
      </span>
    </>
  );
}


ReactDOM.render(
  <div>
    <LikeButton />
  </div>,
  document.getElementById('root')
);

