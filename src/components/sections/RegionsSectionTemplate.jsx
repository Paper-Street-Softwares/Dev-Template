import React from 'react'
import SectionArea from '../sectionElements/SectionArea'
import { MapPin, Briefcase, Users } from 'lucide-react'
import SectionWrapper from '../sectionElements/SectionWrapper'

function RegionsSectionTemplate() {
  return (
    <SectionArea className="bg-primary">
      <SectionWrapper>
        <section className=" text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
          <div className="container mx-auto relative z-10 text-center">
            <h2 className="text-3xl md:text-4xl font-mainFont font-medium mb-8">
              Onde atuamos
            </h2>
            <p className="text-white/80 max-w-2xl mx-auto mb-12 text-lg font-secondFont font-light">
              Com sede em Itapema/SC, nossa atuação rompe barreiras geográficas
              através do atendimento digital, alcançando clientes em todo o
              território nacional.
            </p>

            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="p-8 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/10 hover:bg-white/20 transition-colors">
                <MapPin className="w-10 h-10 mx-auto mb-4 text-accent" />
                <h3 className="font-bold text-xl font-mainFont mb-2">
                  Itapema e Região
                </h3>
                <p className="text-sm font-secondFont font-light text-white/70">
                  Atendimento presencial em nossa sede
                </p>
              </div>
              <div className="p-8 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/10 hover:bg-white/20 transition-colors">
                <Briefcase className="w-10 h-10 mx-auto mb-4 text-accent" />
                <h3 className="font-bold text-xl font-mainFont mb-2">
                  Santa Catarina
                </h3>
                <p className="text-sm font-secondFont font-light text-white/70">
                  Atuação em todas as comarcas do estado
                </p>
              </div>
              <div className="p-8 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/10 hover:bg-white/20 transition-colors">
                <Users className="w-10 h-10 mx-auto mb-4 text-accent" />
                <h3 className="font-bold text-xl font-mainFont mb-2">Brasil</h3>
                <p className="text-sm font-secondFont font-light text-white/70">
                  Atendimento digital completo
                </p>
              </div>
            </div>
          </div>
        </section>
      </SectionWrapper>
    </SectionArea>
  )
}

export default RegionsSectionTemplate
