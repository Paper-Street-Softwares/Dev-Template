import React from 'react'
import SectionArea from '../sectionElements/SectionArea'
import SectionWrapper from '../sectionElements/SectionWrapper'
import { CheckCircle2 } from 'lucide-react'
import { Button } from '../interactives/ButtonNovoTemplate'
import content from '../../content/content'

function AboutNovoTemplate() {
  return (
    <SectionArea className="bg-secondary/20">
      <SectionWrapper>
        <section className="w-full relative overflow-hidden">
          <div className="container mx-auto relative z-10">
            <div className="grid lg:grid-cols-2 gap-4 desltop1:gap-16 items-center">
              <div className="space-y-8">
                <div>
                  <span className="text-primary font-bold font-secondFont tracking-wider uppercase text-xs mb-2 block">
                    Quem Somos
                  </span>
                  <h2 className="text-3xl md:text-4xl font-mainFont font-medium text-foreground mb-6">
                    Tradição e modernidade em defesa dos seus{' '}
                    <span className="italic text-primary">interesses</span>
                  </h2>
                  <p className="text-mutedForeground font-light text-lg leading-relaxed">
                    Acreditamos que a advocacia deve ser exercida com
                    proximidade e transparência. Fundado com o propósito de
                    oferecer um atendimento humanizado, o escritório Amaral &
                    Peres se destaca pela dedicação integral a cada caso.
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-primary/10 rounded-lg text-primary mt-1">
                      <CheckCircle2 className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold font-mainFont text-foreground">
                        Atendimento Personalizado
                      </h4>
                      <p className="text-sm font-secondFont font-light text-mutedForeground">
                        Cada cliente é único, e nossas estratégias são
                        desenhadas sob medida.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-primary/10 rounded-lg text-primary mt-1">
                      <CheckCircle2 className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold font-mainFont text-foreground">
                        Transparência Total
                      </h4>
                      <p className="text-sm font-secondFont font-light text-mutedForeground">
                        Você acompanha cada passo do seu processo com clareza.
                      </p>
                    </div>
                  </div>
                </div>

                <Button className="bg-primary hover:bg-primary/90  shadow-lg shadow-primary/20 font-secondFont font-medium text-white rounded-full px-8 py-6 transition-all hover:scale-105">
                  Conheça nossa história
                </Button>
              </div>

              <div>
                <div className="relative w-[80%] my-10 m-auto ">
                  <div className="absolute inset-0 bg-primary/5 rounded-[3rem] rotate-3 scale-110" />
                  <img
                    src={content.texts.about.imagem.img}
                    alt="Sócios Amaral e Peres"
                    className="relative rounded-[3rem] w-full scale-105 hover:scale-100 transition-transform duration-700"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </SectionWrapper>
    </SectionArea>
  )
}

export default AboutNovoTemplate
