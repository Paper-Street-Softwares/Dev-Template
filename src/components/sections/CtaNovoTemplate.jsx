import React from 'react'
import SectionArea from '../sectionElements/SectionArea'
import SectionWrapper from '../sectionElements/SectionWrapper'
import { Button } from '../interactives/ButtonNovoTemplate'
import { MessageCircle } from 'lucide-react'

function CtaNovoTemplate() {
  return (
    <div className="bg-primary">
      <SectionArea className="relative z-0">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/diamond-upholstery.png')] opacity-5 bg-repeat z-0"></div>

        <SectionWrapper className="relative z-10 ">
          <section className="relative overflow-hidden">
            <div className="container mx-auto relative z-10 text-center">
              <h2 className="text-4xl md:text-[48px] leading-[48px] font-mainFont font-light text-white mb-6">
                Não deixe para depois o que é seu por direito
              </h2>
              <p className="text-white/80 text-lg font-secondFont font-light md:text-xl max-w-2xl mx-auto mb-10">
                Agende uma consulta hoje mesmo e tenha uma equipe de
                especialistas lutando por você.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-white text-primary hover:bg-white/90 transition-all hover:scale-105 rounded-full px-8 h-14 text-lg"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Falar no WhatsApp
                </Button>
              </div>
            </div>
          </section>
        </SectionWrapper>
      </SectionArea>
    </div>
  )
}

export default CtaNovoTemplate
