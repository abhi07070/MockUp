import React from 'react';
import {
  Box,
  Slider,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack,
} from '@chakra-ui/react';
const SliderRange = () => {
  return (
    <>
      <Slider defaultValue={60} min={0} max={300} step={30}>
        <SliderTrack bg="#ddd">
          <Box position="relative" right={10} />
          <SliderFilledTrack bg="#4935ff" />
        </SliderTrack>
        <SliderThumb boxSize={4} />
      </Slider>
    </>
  );
};

export default SliderRange;
