// SlotMachine.js
import { useState, useMemo } from 'react';
import { useSpring, animated } from 'react-spring';
import styled from 'styled-components';
import '/images/symbols.png';

const SlotMachineContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: #f0f0f0;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
`;

const ReelsContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;

const ReelWrapper = styled.div`
  overflow: hidden;
  width: 100px;
  height: 100px;
  margin: 0 10px;
  border: 3px solid #000;
  border-radius: 10px;
  background: #fff;
  position: relative;
`;

const Reel = styled(animated.div)`
  width: 100%;
  height: calc(8 * 100px);  
  background: url('../../public/images/symbols.png') repeat-y;
  background-size: 100% 800px;  
`;

const SpinButton = styled.button`
  padding: 10px 20px;
  font-size: 1em;
  cursor: pointer;
  background: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  transition: background 0.3s ease;

  &:hover {
    background: #0056b3;
  }
`;

const symbols = 8; // Number of symbols in the sprite

const getRandomSymbol = () => Math.floor(Math.random() * symbols);

const SlotMachine = () => {
  const [spinning, setSpinning] = useState(false);
  const [reels, setReels] = useState([0, 1, 2, 3, 4]);

  // Generate a new set of random symbols
  const newReels = useMemo(() => reels.map(() => getRandomSymbol()), [spinning]);

  const spins = useMemo(() => {
    return reels.map((reel, index) => {
      const endValue = -((1000 + Math.random() * 500) % (100 * symbols));
      return useSpring({
        from: { transform: `translateY(-${reel * 100}px)` },
        to: { transform: `translateY(${endValue}px)` },
        config: { tension: 200, friction: 20 },
        reset: true,
        onRest: () => {
          if (spinning) {
            setSpinning(false);
            setReels(newReels);
          }
        },
        delay: index * 100,
      });
    });
  }, [reels, spinning, newReels]);

  const handleSpin = () => {
    setSpinning(true);
  };

  return (
    <SlotMachineContainer>
      <ReelsContainer>
        {reels.map((_, index) => (
          <ReelWrapper key={index}>
            <Reel style={spins[index]} />
          </ReelWrapper>
        ))}
      </ReelsContainer>
      <SpinButton onClick={handleSpin}>Spin</SpinButton>
    </SlotMachineContainer>
  );
};

export default SlotMachine;