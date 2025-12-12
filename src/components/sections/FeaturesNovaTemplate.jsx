import React from 'react'
import content from '../../content/content'
import { Scale } from 'lucide-react'
import SectionArea from '../sectionElements/SectionArea'
import SectionWrapper from '../sectionElements/SectionWrapper'

const features = [
  {
    title: 'Direito Civil',
    description:
      'Resolução de conflitos e assessoria em questões contratuais e patrimoniais.',
  },
  {
    title: 'Direito de Família',
    description:
      'Suporte sensível e profissional em divórcios, guarda e pensões.',
  },
  {
    title: 'Consultoria Empresarial',
    description:
      'Assessoria jurídica preventiva e contenciosa para o seu negócio.',
  },
  {
    title: 'Direito do Consumidor',
    description: 'Defesa dos seus direitos nas relações de consumo.',
  },
]

function FeaturesNovaTemplate() {
  return (
    <SectionArea>
      <SectionWrapper className="minw-full">
        <section className="p bg-white relative font-mainFont ">
          <div className="container mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="relative order-2 lg:order-1">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white aspect-[4/3]">
                  <img
                    src={content.texts.features.imgFeatures}
                    alt="Atendimento Jurídico"
                    className="w-full h-full object-cover scale-105 hover:scale-100 transition-transform duration-700"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 bg-primary text-white p-8 rounded-tr-3xl rounded-bl-3xl shadow-xl max-w-xs">
                  <p className="font-mainFont text-2xl font-bold mb-2">10+</p>
                  <p className="text-sm font-secondFont font-light opacity-90">
                    Anos de experiência combinada em advocacia de alta
                    performance.
                  </p>
                </div>
              </div>

              <div className="order-1 lg:order-2 space-y-8">
                <div>
                  <span className="text-primary font-bold font-secondFont tracking-wider uppercase text-xs mb-2 block">
                    Áreas de Atuação
                  </span>
                  <h2 className="text-3xl md:text-4xl font-mainFont font-medium text-foreground mb-4">
                    Soluções jurídicas{' '}
                    <span className="italic text-primary">completas</span> para
                    você e sua empresa
                  </h2>
                  <p className="text-mutedForeground font-secondFont font-light">
                    Nossa equipe multidisciplinar oferece suporte em diversas
                    áreas do direito, sempre com foco na resolução eficiente e
                    segura.
                  </p>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  {features.map((feature, idx) => (
                    <div
                      key={idx}
                      className="group p-6 rounded-xl bg-secondary/20 hover:bg-primary hover:text-white transition-all duration-300"
                    >
                      <div className="w-10 h-10 rounded-full bg-white text-primary mb-4 flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                        <Scale className="w-5 h-5" />
                      </div>
                      <h3 className="font-mainFont font-bold text-lg mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-sm text-mutedForeground font-secondFont font-light group-hover:text-white/90 transition-colors">
                        {feature.description}
                      </p>
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

export default FeaturesNovaTemplate
