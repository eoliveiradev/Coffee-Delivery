import styled from "styled-components"

export const HeroHeaderContainer = styled.header`
  position: relative;

  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  min-height: 544px;

  .hero-img{
    transition: transform 0.5s;
    @media(min-width: 1200px){
      &:hover{
        transform: rotate(-13deg);
      }
    }
  }

  .background-img{
    position: absolute;
    z-index: -1;
    left: 50%;
    transform: translateX(-50%);
    width: 100vw;
    height: 100%;
  }

  @media(max-width: 1200px){
    flex-direction: column;
  }
  @media (max-width: 768px) {
    justify-content: center;
    min-height: calc(100vh - ${props => props.theme["heights"]["header-height"]});
    max-height: 628px;
    .hero-img{
      width: 80vw;
      max-width: 468px;
    }
  }
`

export const HeroContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  max-width: 588px;
  min-height: 360px;

  .text-wrapper{
    display: flex;
    flex-direction: column;
    gap: 16px;

    width: 100%;
    min-height: 192px;

    h1{
      font-family: ${props => props.theme["fonts"]["header"]};
      color: ${props => props.theme["base-colors"]["base-title"]};
      filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.4));

      font-weight: 800;
      font-size: 3.1rem;
      line-height: 130%;
    }

    p{
      color: ${props => props.theme["base-colors"]["base-subtitle"]};
      font-size: 1.3rem;
    }
  }

  .benefits-wrapper {
    display: flex;
    flex-wrap: wrap;
    gap: 0 35px;
    
    width: 100%;
    min-height: 82px;
  }

  @media (max-width: 1200px) {
    flex-direction: row;
    max-width: none;

    .text-wrapper{
      width: 58%;
      h1{
        font-size: 2.5rem;
      }
    }

    .benefits-wrapper{
      width: 40%;
      justify-content: center;
      gap: 16px 0;
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 22px;
    justify-content: space-evenly;

    .text-wrapper{
      width: 100%;
      max-width: 564px;
      text-align: center;

      min-height: 0px;
    }
    .benefits-wrapper{
      width: 100%;
      max-width: 664px;
    }
  }

  @media (max-width: 428px) {
    .text-wrapper{
      h1{
        font-size: 1.9rem;
      }
      p{
        font-size: 1.2rem;
      }
    }
    .benefits-wrapper{
      margin-bottom: 1rem;
      font-size: 0.8rem;
    }

    @media(max-height: 700px){
      min-height: 68vh; 
      margin-top: 2.8rem;
    }
  }
`

export const Benefit = styled.span`
  display: flex;
  gap: 12px;
  align-items: center;
  min-width: 231px;

  height: 32px;
  min-width: 231px;

  @media(max-width: 1200px){
    min-width: 294px;
  }
`
const BENEFITICON_COLORS = {
  "orange": "#C47F17",
  "gray": "#574F4D",
  "yellow": "#DBAC2C",
  "purple": "#8047f8"
} as const

interface BenefitIconProps {
  iconColor: keyof typeof BENEFITICON_COLORS
}

export const BenefitIconWrapper = styled.span<BenefitIconProps>`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 32px;
  width: 32px;

  border-radius: 50%;
  background-color: ${props => BENEFITICON_COLORS[props.iconColor]};
`