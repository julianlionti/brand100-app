import React from 'react'
import CarouselItem from '../CarouselItem'
import useCarousel from './useCarousel'
import styled from '@emotion/native'
import { FlatList } from 'react-native'
import DotCounter from '../DotCounter'
import { View } from 'native-base'

const Root = styled(View)`
  height: 250px;
  position: relative;
`

const Carousel = () => {
  const { images, ref, onScrollList, page, changePage, color } = useCarousel()

  return (
    <Root bgColor={color}>
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
    </Root>
  )
}

export default Carousel
