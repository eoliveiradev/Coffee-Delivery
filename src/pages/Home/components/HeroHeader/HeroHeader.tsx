import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react";
import headerCoffeeImage from "../../../../assets/images/headerCoffeeImage.png"
import headerBackgroundImage from "../../../../assets/images/headerBackgroundImage.png"
import { Benefit, BenefitIconWrapper, HeroHeaderContainer, HeroContentWrapper } from "./styles"
export function HeroHeader() {
  return (
    <HeroHeaderContainer>
      <HeroContentWrapper>
        <div className="text-wrapper">
          <h1>
            Encontre o café perfeito para qualquer hora do dia
          </h1>
          <p>
            Com o Coffee Delivery você recebe seu café
            onde estiver, a qualquer hora
          </p>
        </div>
        <div className="benefits-wrapper">
          <Benefit>
            <BenefitIconWrapper iconColor="orange">
              <ShoppingCart size={16} weight="fill" color="white" />
            </BenefitIconWrapper>
            Compra simples e segura
          </Benefit>

          <Benefit>
            <BenefitIconWrapper iconColor="gray">
              <Package size={16} color="#fafafa" weight="fill" />
            </BenefitIconWrapper>
            Embalagem mantém o café intacto
          </Benefit>

          <Benefit>
            <BenefitIconWrapper iconColor="yellow">
              <Timer size={16} color="#fafafa" weight="fill" />
            </BenefitIconWrapper>
            Entrega rápida e rastreada
          </Benefit>

          <Benefit>
            <BenefitIconWrapper iconColor="purple">
              <Coffee size={16} color="#fafafa" weight="fill" />
            </BenefitIconWrapper>
            O café chega fresquinho até você
          </Benefit>
        </div>
      </HeroContentWrapper>
      <img className="hero-img" src={headerCoffeeImage} />
      <img
        className="background-img"
        src={headerBackgroundImage}
      />
    </HeroHeaderContainer>
  )
}