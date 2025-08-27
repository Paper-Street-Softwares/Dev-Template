import SectionArea from "../../sectionElements/SectionArea";
import SectionHeader from "../../sectionElements/SectionHeader";
import SectionWrapper from "../../sectionElements/SectionWrapper";
import { Carousel } from "primereact/carousel";

// Importar imagens
import img1 from "../../../assets/imgs/testimonials/testimonials1.png";
import img2 from "../../../assets/imgs/testimonials/testimonials2.png";
import img3 from "../../../assets/imgs/testimonials/testimonials3.png";

export default function Testimonial() {
  // Array de imagens
  const images = [img1, img2, img3];

  // Função para renderizar cada item do carousel
  const itemTemplate = (image) => (
    <div className="p-2 w-full flex justify-center">
      <img src={image} alt="Depoimento" className="rounded-2xl w-full h-auto" />
    </div>
  );

  // Configuração de responsive
  const responsiveOptions = [
    { breakpoint: "2500px", numVisible: 3, numScroll: 3 },
    { breakpoint: "1199px", numVisible: 3, numScroll: 3 },
    { breakpoint: "767px", numVisible: 2, numScroll: 2 },
    { breakpoint: "575px", numVisible: 1, numScroll: 1 },
  ];

  return (
    <SectionArea className="bg-neutral-100" paddingtop={true}>
      <SectionWrapper className="flex flex-col gap-[40px] desktop2:gap-0 desktop1:justify-between">
        <div className="w-full">
          <SectionHeader
            className="justify-center text-center desktop1:flex"
            miniTitle="ADVOGADOS QUE JÁ NÃO PERDEM MAIS CLIENTES"
            sectionHeaderTitle="Veja como outros escritórios conquistaram clientes e autoridade com um site profissional."
            sectionHeaderSubtitle="Sites modernos, rápidos e otimizados que captam clientes 24/7."
            titleColorSet="text-black"
            subtitleColorSet="text-black"
          />

          <div className="flex flex-col desktop1:flex-row items-center w-full justify-center gap-[32px] desktop1:mt-0">
            <Carousel
              value={images}
              itemTemplate={itemTemplate}
              responsiveOptions={responsiveOptions}
              circular
              autoplayInterval={3000}
              showNavigators
              showIndicators={false}
              className="w-full custom-carousel"
              prevIcon={
                <span style={{ color: "#FACC15", fontSize: "200%" }}>❮</span>
              }
              nextIcon={
                <span style={{ color: "#FACC15", fontSize: "200%" }}>❯</span>
              }
            />
          </div>
        </div>
      </SectionWrapper>
    </SectionArea>
  );
}
