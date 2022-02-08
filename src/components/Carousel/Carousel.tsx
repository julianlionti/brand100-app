import React from 'react'
import CarouselItem from '../CarouselItem'
import useCarousel from './useCarousel'
import styled from '@emotion/native'
import { FlatList } from 'react-native'
import DotCounter from '../DotCounter'
import { Box, View } from 'native-base'
import normalize from 'react-native-normalize'

const Carousel = () => {
  const { images, ref, onScrollList, page, changePage, color } = useCarousel()

  return (
    <Box position={'relative'} height={normalize(250, 'height')} bgColor={color}>
      <FlatList
        ref={(e) => (ref.current = e)}
        pagingEnabled
        horizontal
        onMomentumScrollEnd={onScrollList}
        keyExtractor={(item) => item}
        data={images}
        renderItem={({ item }) => <CarouselItem image={item} />}
      />
      <DotCounter actualPage={page} onPress={changePage} list={images} />
    </Box>
  )
}

export default Carousel
