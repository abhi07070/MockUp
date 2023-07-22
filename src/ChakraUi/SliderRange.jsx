import React from 'react';
import {
  Box,
  Slider,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack,
} from '@chakra-ui/react';

const SliderRange = ({ value, setValue }) => {
  return (
    <>
      <Slider value={value} min={0} max={100} step={1} onChange={setValue}>
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
