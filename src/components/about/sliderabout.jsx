import React from 'react'
import AliceCarousel from 'react-alice-carousel'
import Image from './Image'
import 'react-alice-carousel/lib/alice-carousel.css'

class SimpleSlider extends React.Component {
  state = {
    galleryItems: this.props.data.map(i => <Image key={i.id} input={i} />),
    currentIndex: 0,
  }

  responsive = {
    0: { items: 1 },
    850: { items: 2 },
    1024: { items: 5 },
  }

  onSlideChange(e) {
    console.debug('Item`s position during a change: ', e.item)
    console.debug('Slide`s position during a change: ', e.slide)
  }

  onSlideChanged = e => this.setState({ currentIndex: e.item })

  slideNext = () => this.setState({ currentIndex: this.state.currentIndex + 1 })

  slidePrev = () => this.setState({ currentIndex: this.state.currentIndex - 1 })

  render() {
    return (
      <section>
        <AliceCarousel
          items={this.state.galleryItems}
          responsive={this.responsive}
          dotsDisabled
          autoPlayInterval={2000}
          autoPlayDirection="rtl"
          autoPlay
          fadeOutAnimation
          mouseTrackingEnabled
          playButtonEnabled={false}
          buttonsDisabled
          onSlideChange={this.onSlideChange}
          onSlideChanged={this.onSlideChanged}
        />
        {/*  <svg
          onClick={() => this.slidePrev()}
          width='29px'
          height='52px'
          viewBox='0 0 29 52'
          version='1.1'
        >
          <g
            id='Page-1'
            stroke='none'
            stroke-width='1'
            fill='none'
            fill-rule='evenodd'
            opacity='0.8'
          >
            <g
              id='Cafe-Black-Large-Desktop-'
              transform='translate(-250.000000, -5610.000000)'
              fill='#FFFFFF'
            >
              <g id='CARROUSEL' transform='translate(0.000000, 5489.000000)'>
                <path
                  d='M277.956509,149.574248 L256.081646,171.932748 C254.690137,173.355751 252.434043,173.355751 251.04321,171.932748 C249.652263,170.511011 249.652263,168.20509 251.04321,166.783468 L270.39908,146.999609 L251.043773,127.216474 C249.652826,125.794162 249.652826,123.488471 251.043773,122.066734 C252.434719,120.644422 254.6907,120.644422 256.082209,122.066734 L277.957184,144.425544 C278.652658,145.136758 279,146.067896 279,146.999494 C279,147.931552 278.651982,148.86338 277.956509,149.574248 Z'
                  id='Fill-1'
                  transform='translate(264.500000, 147.000000) scale(-1, 1) translate(-264.500000, -147.000000) '
                />
              </g>
            </g>
          </g>
        </svg>
        <svg
          onClick={() => this.slideNext()}
          width='29px'
          height='52px'
          viewBox='0 0 29 52'
          version='1.1'
        >
          <g
            id='Page-1'
            stroke='none'
            stroke-width='1'
            fill='none'
            fill-rule='evenodd'
            opacity='0.8'
          >
            <g
              id='Cafe-Black-Large-Desktop-'
              transform='translate(-1361.000000, -5610.000000)'
              fill='#FFFFFF'
            >
              <g id='CARROUSEL' transform='translate(0.000000, 5489.000000)'>
                <path
                  d='M1388.95651,149.574248 L1367.08165,171.932748 C1365.69014,173.355751 1363.43404,173.355751 1362.04321,171.932748 C1360.65226,170.511011 1360.65226,168.20509 1362.04321,166.783468 L1381.39908,146.999609 L1362.04377,127.216474 C1360.65283,125.794162 1360.65283,123.488471 1362.04377,122.066734 C1363.43472,120.644422 1365.6907,120.644422 1367.08221,122.066734 L1388.95718,144.425544 C1389.65266,145.136758 1390,146.067896 1390,146.999494 C1390,147.931552 1389.65198,148.86338 1388.95651,149.574248 Z'
                  id='Fill-1'
                />
              </g>
            </g>
          </g>
        </svg> */}
        <div style={{ padding: '2em' }} />
      </section>
    )
  }
}

export default SimpleSlider

/* 
class SimpleSlider extends React.Component {
  render() {
    const slice = this.props.data.map(s => <Image key={s.id} input={s} />)
    return <div>{slice}</div>
  }
}

*/
