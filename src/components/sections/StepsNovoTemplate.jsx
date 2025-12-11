import React from 'react'
import SectionArea from '../sectionElements/SectionArea'
import content from '../../content/content'
import SectionWrapper from '../sectionElements/SectionWrapper'

function StepsNovoTemplate() {
  return (
    <SectionArea>
      <SectionWrapper>
        <section className="bg-secondary/20">
          <div className="container mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="order-2 lg:order-1 relative">
                <div className="absolute inset-0 bg-primary rounded-[2rem] rotate-3 opacity-10" />
                <img
                  src={content.texts.steps.img}
                  alt="Passo a passo"
                  className="relative rounded-[2rem] shadow-xl w-full"
                />
              </div>

              <div className="order-1 lg:order-2 space-y-12">
                <div>
                  <span className="text-primary font-bold font-secondFont tracking-wider uppercase text-xs mb-2 block">
                    Como Trabalhamos
                  </span>
                  <h2 className="text-3xl md:text-4xl font-mainFont font-medium text-foreground mb-6">
                    Seus direitos garantidos em{' '}
                    <span className="italic text-primary">3 passos</span>
                  </h2>
                </div>

                <div className="space-y-8">
                  {[
                    {
                      step: '01',
                      title: 'Agende sua Consulta',
                      desc: 'Entre em contato conosco e agende um horário presencial ou online.',
                    },
                    {
                      step: '02',
                      title: 'Análise do Caso',
                      desc: 'Nossa equipe fará uma análise detalhada da sua situação e documentos.',
                    },
                    {
                      step: '03',
                      title: 'Estratégia e Ação',
                      desc: 'Apresentamos a melhor solução jurídica e iniciamos a defesa dos seus direitos.',
                    },
                  ].map((item, idx) => (
                    <div key={idx} className="flex gap-6 relative">
                      {idx !== 2 && (
                        <div className="absolute left-[1.65rem] top-12 bottom-0 w-0.5 bg-primary/20" />
                      )}
                      <div className="w-14 h-14 rounded-full bg-white border-2 border-primary text-primary flex items-center justify-center text-xl font-bold font-mainFont shrink-0 shadow-sm z-10">
                        {item.step}
                      </div>
                      <div className="pt-2">
                        <h3 className="text-xl font-bold font-mainFont mb-2">
                          {item.title}
                        </h3>
                        <p className="text-mutedForeground font-secondFont font-light">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </SectionWrapper>
    </SectionArea>
  )
}

export default StepsNovoTemplate
