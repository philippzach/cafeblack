import React, { Component } from 'react'

import styled from '@emotion/styled'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import { Media } from 'react-breakpoints'
import { Layout, Wrapper, Title } from '../components'
import website from '../../config/website'

import About from '../components/about/index'
import Events from '../components/events'
import Kontakt from '../components/kontakt'
import Top from '../components/top'
import Navigation from '../components/navigation'

import Plus from '../components/images/plus.svg'
import KartenMobile from '../components/karten-300-mobile'
import KartenDesktop from '../components/karten-600-desktop'
import NavigationMobile from '../components/navigationmobile'
import Headline from '../components/headline'

/* const Hero = styled.header`
  display: flex;
  align-items: center;
`;

const HeroInner = styled(Wrapper)`
  padding-top: 13rem;
  padding-bottom: 13rem;
  h1 {
    margin-bottom: 2rem;
  }
  @media (max-width: ${props => props.theme.breakpoints.l}) {
    padding-top: 10rem;
    padding-bottom: 10rem;
  }
  @media (max-width: ${props => props.theme.breakpoints.m}) {
    padding-top: 8rem;
    padding-bottom: 8rem;
  }
  @media (max-width: ${props => props.theme.breakpoints.s}) {
    padding-top: 6rem;
    padding-bottom: 6rem;
  }
`;

const HeroText = styled.div`
  font-size: 1.7rem;
  line-height: 1.4;
  margin-bottom: 2rem;
  @media (max-width: ${props => props.theme.breakpoints.m}) {
    font-size: 1.4rem;
  }
  @media (max-width: ${props => props.theme.breakpoints.s}) {
    font-size: 1.25rem;
  }
`;

const Social = styled.ul`
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
  margin-left: 0;
  font-family: 'Source Sans Pro', -apple-system, 'BlinkMacSystemFont',
    'Segoe UI', 'Roboto', 'Helvetica', 'Arial', sans-serif, 'Apple Color Emoji',
    'Segoe UI Emoji', 'Segoe UI Symbol';
  li {
    display: inline;
    &:not([data-name='social-entry-0']) {
      margin-left: 2.5rem;
      @media (max-width: ${props => props.theme.breakpoints.s}) {
        margin-left: 1.75rem;
      }
    }
    a {
      font-style: normal;
      color: ${props => props.theme.colors.greyDark};
      font-size: 1.333rem;
      font-weight: 600;
      &:hover,
      &:focus {
        color: ${props => props.theme.colors.primary};
        text-decoration: none;
      }
      @media (max-width: ${props => props.theme.breakpoints.s}) {
        font-size: 1.2rem;
      }
    }
  }
`; */

const HeaderContainer = styled.div`
  width: 100%;
  height: 750px;
`

const GridBox = styled.div`
  position: relative;
  min-height: 750px;
`
const InsideGrid = styled.div`
  position: absolute;
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: auto;
  @media screen and (max-width: 649px) {
    top: -70%;
    width: 95%;
    left: 5%;
    grid-template-columns: auto;
    grid-template-rows: auto 75px auto 75px auto;
  }
  @media screen and (min-width: 650px) {
    width: 60%;
    left: 40%;
    top: 60%;
    transform: translate(-50%, -220%);
  }
  @media screen and (min-width: 1350px) {
    left: 50%;
    top: 50%;
  }
`

const GridOne = styled.div`
  grid-column: 1 / 1;
  grid-row: 1/2;
  @media screen and (max-width: 650px) {
    display: none;
  }
`
const GridFour = styled.div`
  grid-column: 1 / 1;
  grid-row: 5/5;
  h2 {
    color: white;
    font-family: 'Didot';
    margin-bottom: 0;
    font-size: 1.25em;
    text-transform: uppercase;
    text-shadow: black 3px 3px 13px;
  }
  @media screen and (min-width: 650px) {
    display: none;
  }
`
const CustomLink = styled.a`
  font-style: normal;
  :hover {
    text-decoration: none;
  }
`

const GridTwo = styled.div`
  grid-column: 2/2;
  grid-row: 1/1;
  text-align: right;

  @media screen and (max-width: 649px) {
    text-align: left;
    grid-column: 1/2;
    grid-row: 1/1;
  }
/*   @media (min-width: 1050px) {
    :after {
      content: url(${Plus});
      position: absolute;
      top: 0;
      right: -35px;
    }
  } */
  h2 {
    color: white;
    font-family: 'Didot';
    margin-bottom: 0;
    font-size: 1.25em;
    text-transform: uppercase;
    text-shadow: black 3px 3px 13px;
  }
`
const GridThree = styled.div`
  grid-column: 2/2;
  grid-row: 2/2;
  text-align: right;
  @media screen and (max-width: 649px) {
    text-align: left;
    grid-column: 1/2;
    grid-row: 3/3;
  }
  h2 {
    color: white;
    font-family: 'Didot';
    margin-bottom: 0;
    font-size: 1.25em;
    text-transform: uppercase;
    text-shadow: black 3px 3px 13px;
  }
`
const Deski = styled.header`
  @media screen and (max-width: 649px) {
    display: none;
  }
`
const Mobi = styled.header`
  @media screen and (min-width: 650px) {
    display: none;
  }
`
class Index extends Component {
  render() {
    const {
      data: {
        homepage,
        social,
        karten,
        texts,
        sliderabout,
        eventimg,
        kontakt,
        toppicture,
        headerimage,
        breakpoints,
        currentBreakpoint,
      },
    } = this.props

    return (
      <Layout>
        <HeaderContainer>
          <Mobi>
            <NavigationMobile />
          </Mobi>
          <Deski>
            <Navigation />
          </Deski>

          <Img
            style={{ minHeight: '750px', zIndex: '-1' }}
            fluid={headerimage.data.headerimg.localFile.childImageSharp.fluid}
          />
          <GridBox>
            <InsideGrid>
              <GridOne>
                <svg width="382px" height="423px" viewBox="0 0 382 423" version="1.1">
                  <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                    <g
                      id="Cafe-Black-Large-Desktop-"
                      transform="translate(-255.000000, -223.000000)"
                      fill="#FFFFFF"
                      fillRule="nonzero"
                    >
                      <path
                        d="M294.16,313.04 C300.52,313.04 308.32,309.2 313.72,309.2 C316.84,309.2 318.64,311.36 318.88,312.8 C319,312.92 320.56,312.92 320.56,312.8 L320.56,284.24 C320.56,284 318.88,284 318.88,284.24 C318.88,299.96 308.08,311.24 294.16,311.24 C289,311.24 283.36,310.16 279.52,306.68 C273.64,301.04 270.4,289.04 270.4,268.52 C270.4,248 273.64,235.88 279.52,230.24 C283.36,226.88 288.4,225.8 293.56,225.8 C304.84,225.8 316.72,238.16 316.72,250.04 C316.72,250.28 318.4,250.28 318.4,250.04 L318.4,224.24 C318.4,224 316.72,224 316.72,224.24 C316.48,225.56 314.32,227.12 310.96,227.12 C305.68,227.12 299.08,223.88 293.56,223.88 C272.08,223.88 256.48,244.64 256.48,268.52 C256.48,292.28 272.56,313.04 294.16,313.04 Z M346.84,311 C347.08,311 347.08,309.08 346.84,309.08 L336.88,309.08 C336.28,309.08 336.4,308.36 337.84,304.04 L345.16,282.92 L372.64,282.92 L381.52,308.72 C381.64,308.84 381.4,309.08 381.04,309.08 L370.72,309.08 C370.48,309.08 370.48,311 370.72,311 L406.48,311 C406.72,311 406.72,309.08 406.48,309.08 L396.52,309.08 C396.04,309.08 395.68,308.84 395.68,308.72 L365.32,224.24 C365.2,223.88 363.64,223.88 363.52,224.24 L336.04,304.04 C334.631304,308.618261 334.371002,309.062306 333.349265,309.079449 L324.4,309.08 C324.28,309.08 324.28,311 324.4,311 L346.84,311 Z M372.16,281 L345.76,281 L359.08,242.24 L372.16,281 Z M444.04,311 C444.28,311 444.28,309.08 444.04,309.08 L433.96,309.08 C433.36,309.08 433.12,308.96 433.12,308.6 L433.12,268.28 L437.2,268.28 C446.32,268.28 451.72,273.8 451.72,281.96 C451.72,282.32 453.52,282.32 453.52,281.96 L453.52,252.68 C453.52,252.44 451.72,252.44 451.72,252.68 C451.72,260.96 446.32,266.36 437.2,266.36 L433.12,266.36 L433.12,228.32 C433.12,227.96 433.36,227.84 433.96,227.84 L446.2,227.84 C460.48,227.84 466.48,237.44 466.48,248.6 C466.48,248.96 468.28,248.96 468.28,248.6 L468.28,226.28 C468.28,226.16 468.16,225.92 467.92,225.92 L409.36,225.92 C409.12,225.92 409.12,227.84 409.36,227.84 L419.44,227.84 C419.8,227.84 420.04,227.96 420.04,228.32 L420.04,308.6 C420.04,308.96 419.8,309.08 419.44,309.08 L409.36,309.08 C409.12,309.08 409.12,311 409.36,311 L444.04,311 Z M544.6,311 C544.84,311 544.96,310.88 544.96,310.64 L544.96,285.92 C544.96,285.68 543.28,285.68 543.28,285.92 C543.28,298.28 536.68,309.08 517.84,309.08 L504.76,309.08 C504.16,309.08 503.92,308.96 503.92,308.6 L503.92,268.28 L508.36,268.28 C517.48,268.28 522.64,273.8 522.64,281.96 C522.64,282.32 524.2,282.32 524.2,281.96 L524.2,252.68 C524.2,252.44 522.64,252.44 522.64,252.68 C522.64,260.96 517.48,266.36 508.36,266.36 L503.92,266.36 L503.92,228.32 C503.92,227.96 504.16,227.84 504.76,227.84 L517.48,227.84 C531.76,227.84 537.28,237.44 537.28,248.6 C537.28,248.96 539.08,248.96 539.08,248.6 L539.08,226.28 C539.08,226.16 538.96,225.92 538.72,225.92 L480.16,225.92 C479.92,225.92 479.92,227.84 480.16,227.84 L490.12,227.84 C490.6,227.84 490.84,227.96 490.84,228.32 L490.84,308.6 C490.84,308.96 490.6,309.08 490.12,309.08 L480.16,309.08 C479.92,309.08 479.92,311 480.16,311 L544.6,311 Z M292.96,411 C310.84,411 319.72,399.84 319.72,388.44 C319.72,374.16 306.88,365.64 292.48,365.64 C301.72,365.64 313.84,357.12 313.84,345.6 C313.84,332.28 301.36,325.92 287.56,325.92 L255.28,325.92 C254.92,325.92 254.92,327.84 255.28,327.84 L265.24,327.84 C265.72,327.84 265.96,327.96 265.96,328.32 L265.96,408.6 C265.96,408.96 265.72,409.08 265.24,409.08 L255.28,409.08 C254.92,409.08 254.92,411 255.28,411 L292.96,411 Z M289.48,364.68 L279.04,364.68 L279.04,328.32 C279.04,327.96 279.28,327.84 279.88,327.84 L285.64,327.84 C297.16,327.84 301.48,331.92 301.48,346.08 C301.48,360.84 298,364.68 289.48,364.68 Z M289.96,409.08 L279.88,409.08 C279.28,409.08 279.04,408.96 279.04,408.6 L279.04,366.48 L288.28,366.48 C299.8,366.48 306.88,369.96 306.88,389.16 C306.88,404.88 300.64,409.08 289.96,409.08 Z M346.36,411 C346.6,411 346.6,409.08 346.36,409.08 L336.4,409.08 C335.8,409.08 335.92,408.36 337.36,404.04 L344.68,382.92 L372.16,382.92 L381.04,408.72 C381.16,408.84 380.92,409.08 380.56,409.08 L370.24,409.08 C370,409.08 370,411 370.24,411 L406,411 C406.24,411 406.24,409.08 406,409.08 L396.04,409.08 C395.56,409.08 395.2,408.84 395.2,408.72 L364.84,324.24 C364.72,323.88 363.16,323.88 363.04,324.24 L335.56,404.04 C334.151304,408.618261 333.891002,409.062306 332.869265,409.079449 L323.92,409.08 C323.8,409.08 323.8,411 323.92,411 L346.36,411 Z M371.68,381 L345.28,381 L358.6,342.24 L371.68,381 Z M478.24,413.04 C483.16,413.04 486.4,411.24 488.8,408.84 C489.04,408.72 487.96,407.4 487.72,407.52 C486.16,409.32 484.36,410.16 481.48,410.16 C477.16,410.16 474.52,406.92 474.52,400.8 L474.52,390 C474.52,376.44 465.64,366.72 447.64,366.72 C460,366.72 471.04,357.96 471.04,346.8 C471.04,335.04 460.72,325.92 443.68,325.92 L408.76,325.92 C408.52,325.92 408.52,327.84 408.76,327.84 L418.84,327.84 C419.32,327.84 419.56,327.96 419.56,328.32 L419.56,408.6 C419.56,408.96 419.32,409.08 418.84,409.08 L408.76,409.08 C408.52,409.08 408.52,411 408.76,411 L445.72,411 L445.72,409.08 L433.48,409.08 C432.88,409.08 432.64,408.96 432.64,408.6 L432.64,367.68 L443.08,367.68 C453.4,367.68 460.96,371.4 460.96,381.96 L460.96,389.76 C460.96,406.92 468.76,413.04 478.24,413.04 Z M443.412536,365.759019 L432.64,365.76 L432.64,328.32 C432.64,327.96 432.88,327.84 433.48,327.84 L440.92,327.84 C451.48,327.84 457.84,332.28 457.84,347.28 C457.84,362.3676 454.31164,365.694 443.412536,365.759019 L443.412536,365.759019 Z M292.96,511 C310.84,511 319.72,499.84 319.72,488.44 C319.72,474.16 306.88,465.64 292.48,465.64 C301.72,465.64 313.84,457.12 313.84,445.6 C313.84,432.28 301.36,425.92 287.56,425.92 L255.28,425.92 C254.92,425.92 254.92,427.84 255.28,427.84 L265.24,427.84 C265.72,427.84 265.96,427.96 265.96,428.32 L265.96,508.6 C265.96,508.96 265.72,509.08 265.24,509.08 L255.28,509.08 C254.92,509.08 254.92,511 255.28,511 L292.96,511 Z M289.48,464.68 L279.04,464.68 L279.04,428.32 C279.04,427.96 279.28,427.84 279.88,427.84 L285.64,427.84 C297.16,427.84 301.48,431.92 301.48,446.08 C301.48,460.84 298,464.68 289.48,464.68 Z M289.96,509.08 L279.88,509.08 C279.28,509.08 279.04,508.96 279.04,508.6 L279.04,466.48 L288.28,466.48 C299.8,466.48 306.88,469.96 306.88,489.16 C306.88,504.88 300.64,509.08 289.96,509.08 Z M392.32,511 C392.56,511 392.68,510.88 392.68,510.64 L392.68,484.84 C392.68,484.6 391,484.6 391,484.84 C391,497.08 385.12,509.08 367.84,509.08 L355.48,509.08 C355,509.08 354.76,508.96 354.76,508.6 L354.76,428.32 C354.76,427.96 355,427.84 355.48,427.84 L365.56,427.84 C365.8,427.84 365.8,425.92 365.56,425.92 L330.88,425.92 C330.64,425.92 330.64,427.84 330.88,427.84 L340.96,427.84 C341.32,427.84 341.56,427.96 341.56,428.32 L341.56,508.6 C341.56,508.96 341.32,509.08 340.96,509.08 L330.88,509.08 C330.64,509.08 330.64,511 330.88,511 L392.32,511 Z M416.44,511 C416.68,511 416.68,509.08 416.44,509.08 L406.48,509.08 C405.88,509.08 406,508.36 407.44,504.04 L414.76,482.92 L442.24,482.92 L451.12,508.72 C451.24,508.84 451,509.08 450.64,509.08 L440.32,509.08 C440.08,509.08 440.08,511 440.32,511 L476.08,511 C476.32,511 476.32,509.08 476.08,509.08 L466.12,509.08 C465.64,509.08 465.28,508.84 465.28,508.72 L434.92,424.24 C434.8,423.88 433.24,423.88 433.12,424.24 L405.64,504.04 C404.231304,508.618261 403.971002,509.062306 402.949265,509.079449 L394,509.08 C393.88,509.08 393.88,511 394,511 L416.44,511 Z M441.76,481 L415.36,481 L428.68,442.24 L441.76,481 Z M517.84,513.04 C524.2,513.04 532,509.2 537.4,509.2 C540.52,509.2 542.32,511.36 542.56,512.8 C542.68,512.92 544.24,512.92 544.24,512.8 L544.24,484.24 C544.24,484 542.56,484 542.56,484.24 C542.56,499.96 531.76,511.24 517.84,511.24 C512.68,511.24 507.04,510.16 503.2,506.68 C497.32,501.04 494.08,489.04 494.08,468.52 C494.08,448 497.32,435.88 503.2,430.24 C507.04,426.88 512.08,425.8 517.24,425.8 C528.52,425.8 540.4,438.16 540.4,450.04 C540.4,450.28 542.08,450.28 542.08,450.04 L542.08,424.24 C542.08,424 540.4,424 540.4,424.24 C540.16,425.56 538,427.12 534.64,427.12 C529.36,427.12 522.76,423.88 517.24,423.88 C495.76,423.88 480.16,444.64 480.16,468.52 C480.16,492.28 496.24,513.04 517.84,513.04 Z M589.6,511 C589.96,511 589.96,509.08 589.6,509.08 L579.64,509.08 C579.04,509.08 578.8,508.96 578.8,508.6 L578.8,468.88 L607.48,508.72 C607.6,508.84 607.6,509.08 607.12,509.08 L596.56,509.08 C596.32,509.08 596.32,511 596.56,511 L636.04,511 C636.28,511 636.28,509.08 636.04,509.08 L624.64,509.08 C624.4,509.08 623.8,508.84 623.68,508.72 L587.8,460 L610,432.88 C613.84,428.32 614.2,427.84 615.04,427.84 L624.04,427.84 C624.28,427.84 624.28,425.92 624.04,425.92 L601.48,425.92 C601.24,425.92 601.24,427.84 601.48,427.84 L610.72,427.84 C611.44,427.84 611.68,428.2 607.84,432.88 L578.8,468.16 L578.8,428.32 C578.8,427.96 579.04,427.84 579.64,427.84 L589.6,427.84 C589.96,427.84 589.96,425.92 589.6,425.92 L555.04,425.92 C554.68,425.92 554.68,427.84 555.04,427.84 L565,427.84 C565.48,427.84 565.72,427.96 565.72,428.32 L565.72,508.6 C565.72,508.96 565.48,509.08 565,509.08 L555.04,509.08 C554.68,509.08 554.68,511 555.04,511 L589.6,511 Z M289.96,611 C290.2,611 290.2,609.08 289.96,609.08 L279.76,609.08 C279.28,609.08 279.04,608.96 279.04,608.6 L279.04,528.32 C279.04,527.96 279.28,527.84 279.76,527.84 L289.96,527.84 C290.2,527.84 290.2,525.92 289.96,525.92 L255.28,525.92 C255.04,525.92 255.04,527.84 255.28,527.84 L265.24,527.84 C265.72,527.84 265.96,527.96 265.96,528.32 L265.96,608.6 C265.96,608.96 265.72,609.08 265.24,609.08 L255.28,609.08 C255.04,609.08 255.04,611 255.28,611 L289.96,611 Z M321.76,645.32 C341.08,645.32 352.24,620.48 352.24,595.4 C352.24,569.48 341.08,558.8 326.44,558.8 C312.28,558.8 301.96,570.32 301.96,584.36 C301.96,598.28 312.28,609.92 326.44,609.92 C331.6,609.92 337.36,607.88 340.6,603.32 C339.64,625.16 334.84,643.52 321.76,643.52 C317.92,643.52 315.76,641.36 315.76,637.4 C315.76,635.6 316.72,634.88 316.72,632.96 C316.72,630.8 315.28,628.64 311.56,628.64 C308.08,628.64 306.64,631.4 306.64,634.04 C306.64,638.24 311.56,645.32 321.76,645.32 Z M326.44,608 C323.2,608 320.32,607.4 317.92,605.6 C313.84,602.48 312.88,595.64 312.88,584.36 C312.88,571.4 313.84,566.24 317.92,563.12 C320.32,561.2 323.2,560.6 326.44,560.6 C329.8,560.6 333.28,561.2 335.68,563.12 C339.64,566.24 341.68,571.16 341.68,584.12 C341.68,588.56 341.2,598.88 340.72,599.96 C339.52,603.44 334.12,608 326.44,608 Z M391,612.08 C404.44,612.08 415.36,600.8 415.36,587.48 C415.36,574.28 404.44,563 391,563 C385.36,563 379.6,566.24 376.84,571.4 C377.44,548.72 383.2,527.36 395.08,527.36 C398.2,527.36 400,529.04 400,532.88 C400,534.8 399.16,535.52 399.16,537.32 C399.16,539.48 400.72,541.64 404.32,541.64 C408.04,541.64 409.36,538.88 409.36,536.24 C409.36,532.16 404.56,525.56 395.08,525.56 C377.56,525.56 366.16,550.76 366.16,575.72 C366.16,600.68 376.72,612.08 391,612.08 Z M391,610.16 C388,610.16 384.88,609.68 382.6,607.88 C378.88,605 376.84,600.32 376.84,588.08 L376.84,576.8 C376.84,571.76 382.84,564.92 391,564.92 C394,564.92 397.24,565.4 399.52,567.2 C403.12,570.08 404.56,576.92 404.56,587.48 C404.56,599.72 403.12,605 399.52,607.88 C397.24,609.68 394,610.16 391,610.16 Z M453.76,612.08 C467.2,612.08 478.12,600.8 478.12,587.48 C478.12,574.28 467.2,563 453.76,563 C448.12,563 442.36,566.24 439.6,571.4 C440.2,548.72 445.96,527.36 457.84,527.36 C460.96,527.36 462.76,529.04 462.76,532.88 C462.76,534.8 461.92,535.52 461.92,537.32 C461.92,539.48 463.48,541.64 467.08,541.64 C470.8,541.64 472.12,538.88 472.12,536.24 C472.12,532.16 467.32,525.56 457.84,525.56 C440.32,525.56 428.92,550.76 428.92,575.72 C428.92,600.68 439.48,612.08 453.76,612.08 Z M453.76,610.16 C450.76,610.16 447.64,609.68 445.36,607.88 C441.64,605 439.6,600.32 439.6,588.08 L439.6,576.8 C439.6,571.76 445.6,564.92 453.76,564.92 C456.76,564.92 460,565.4 462.28,567.2 C465.88,570.08 467.32,576.92 467.32,587.48 C467.32,599.72 465.88,605 462.28,607.88 C460,609.68 456.76,610.16 453.76,610.16 Z"
                        id="CAFEBARBLACKI966"
                      />
                    </g>
                  </g>
                </svg>
              </GridOne>
              <GridTwo>
                <h2 className="plusafter">{kontakt.data.title.text}</h2>
                <h2>{kontakt.data.strasse.text}</h2>
                <h2>{kontakt.data.plz.text}</h2>
              </GridTwo>
              <GridThree>
                <h2>Öffnungszeiten</h2>
                <h2>
                  {kontakt.data.tage.text} | {kontakt.data.zeit.text}
                </h2>
              </GridThree>
              <GridFour>
                <CustomLink href={`mailto:${kontakt.data.email.text}`}>
                  <h2>{kontakt.data.email.text}</h2>
                </CustomLink>
                <CustomLink href={`tel:${kontakt.data.phone.text}`}>
                  <h2>{kontakt.data.phone.text}</h2>
                </CustomLink>
              </GridFour>
            </InsideGrid>
          </GridBox>
        </HeaderContainer>

        {/*     <HeroInner>
          <Social>
            {social.nodes.map((s, index) => (
              <li data-name={`social-entry-${index}`} key={s.primary.label.text}>
                <a href={s.primary.link.url}>{s.primary.label.text}</a>
              </li>
            ))}
          </Social>
        </HeroInner> */}

        <Top text={texts.data} image={toppicture.data} m />
        <Media>
          {({ breakpoints, currentBreakpoint }) =>
            breakpoints[currentBreakpoint] < breakpoints.tablet ? (
              <KartenMobile data={karten.data} kartenText={texts.data} />
            ) : (
              <KartenDesktop data={karten.data} kartenText={texts.data} />
            )
          }
        </Media>
        <div style={{ padding: '1.5em 0' }} />
        <Headline color="#E3CFC9" headline="Über Uns" idlink="about" />
        <About data={sliderabout.data.body} aboutText={texts.data} />

        <Headline color="#DED7C1" headline="Events" idlink="events" />
        <Events eventText={texts.data} image={eventimg.data} />
        <div style={{ padding: '1.5em 0' }} />
        <Headline color="#DBE1D4" headline="Kontakt" idlink="kontakt" />
        <Kontakt data={kontakt.data} />
      </Layout>
    )
  }
}

export default Index

export const pageQuery = graphql`
  query IndexQuery {
    homepage: prismicHomepage {
      data {
        title {
          text
        }
        content {
          html
        }
        footer {
          text
        }
      }
    }
    karten: prismicKarteSample {
      data {
        ctadownload {
          text
        }
        karte1text {
          text
        }
        karte1pdf {
          url
        }
        karte2text {
          text
        }
        karte2pdf {
          url
        }
        karte3text {
          text
        }
        karte3pdf {
          url
        }
        karte4text {
          text
        }
        karte4pdf {
          url
        }
        karte5text {
          text
        }
        karte5pdf {
          url
        }
        karte6text {
          text
        }
        karte6pdf {
          url
        }
        karte7text {
          text
        }
        karte7pdf {
          url
        }
        karte8text {
          text
        }
        karte8pdf {
          url
        }
      }
    }
    texts: prismicTopText {
      data {
        about {
          text
        }
        events {
          text
        }
        karte {
          text
        }
        top {
          text
        }
      }
    }
    social: allPrismicHeroLinksBodyLinkItem {
      nodes {
        primary {
          label {
            text
          }
          link {
            url
          }
        }
      }
    }
    sliderabout: prismicSliderAbout {
      id
      data {
        body {
          slice_type
          id
          primary {
            image {
              localFile {
                childImageSharp {
                  fluid(maxWidth: 1200, quality: 100) {
                    ...GatsbyImageSharpFluid_withWebp
                  }
                }
              }
            }
          }
        }
      }
    }
    eventimg: prismicEventsPicture {
      data {
        ctaevents {
          text
        }
        ctalink {
          url
        }
        eventimage {
          localFile {
            childImageSharp {
              fluid(maxWidth: 1200, quality: 100) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
        eventimagemobile {
          localFile {
            childImageSharp {
              fluid(maxWidth: 1200, quality: 100) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
    }
    kontakt: prismicKontakt {
      id
      data {
        title {
          text
        }
        email {
          text
        }
        land {
          text
        }
        phone {
          text
        }
        plz {
          text
        }
        strasse {
          text
        }
        tage {
          text
        }
        zeit {
          text
        }
      }
    }
    toppicture: prismicTopPicture {
      data {
        image1 {
          localFile {
            childImageSharp {
              fluid(maxWidth: 1200, quality: 100) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
        image2 {
          localFile {
            childImageSharp {
              fluid(maxWidth: 1200, quality: 100) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
        image3 {
          localFile {
            childImageSharp {
              fluid(maxWidth: 1200, quality: 100) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
    }
    headerimage: prismicHeader {
      data {
        headerimg {
          alt
          copyright
          url
          localFile {
            childImageSharp {
              fluid(maxWidth: 1200, quality: 100) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
    }
  }
`