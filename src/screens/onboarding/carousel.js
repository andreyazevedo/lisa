import React from 'react';
import {View, StyleSheet} from 'react-native';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import Card from './card';

const slides = [{title: 'Clássico'}, {title: 'Ansiedade'}];
const styles = StyleSheet.create({
  carouselContainer: {
    height: 194,
  },
  paginationContainer: {
    paddingVertical: 0,
    paddingHorizontal: 0,
  },
  pagination: {
    height: 8,
    width: 8,
    backgroundColor: '#b7b8b9',
  },
  paginationActive: {
    backgroundColor: '#30c5ca',
  },
});

export default class MyCarousel extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      active: 0,
    };

    this.renderItem = this.renderItem.bind(this);
  }

  renderItem = ({item, index}) => (
    <Card title={item.title} key={index} active={this.state.active === index} />
  );

  renderPagination() {
    const {active} = this.state;

    return (
      <Pagination
        dotsLength={slides.length}
        activeDotIndex={active}
        containerStyle={styles.paginationContainer}
        inactiveDotStyle={styles.pagination}
        dotStyle={[styles.pagination, styles.paginationActive]}
        inactiveDotOpacity={1}
        inactiveDotScale={1}
      />
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.carouselContainer}>
          <Carousel
            data={slides}
            renderItem={this.renderItem}
            onSnapToItem={index => this.setState({active: index})}
            sliderWidth={400}
            itemWidth={303}
          />
        </View>
        {this.renderPagination()}
      </View>
    );
  }
}
