import React from 'react'
import { Button } from '../interactives/ButtonNovoTemplate'
import { motion } from 'framer-motion'
import { MapPin, MessageCircle, Phone, ArrowRight } from 'lucide-react'
import content from '../../content/content'
import SectionArea from '../sectionElements/SectionArea'
import SectionWrapper from '../sectionElements/SectionWrapper'

function HeroTemplateNovo() {
  return (
    <SectionArea>
      <section className="relative min-h-[90vh] pt-[20%] w-full desktop1:pt-0 flex items-center justify-center overflow-hidden font-mainFont">
        {/* Abstract Background Shapes */}
        <div className="absolute top-0 right-[-10px] h-full w-[60%] bg-secondary/50 -skew-x-12 translate-x-1/4 z-0" />
        <div className="absolute bottom-0 left-0 w-[40%] h-1/2 bg-gradient-to-tr from-secondary/20 to-transparent rounded-full blur-3xl -translate-x-1/4 translate-y-1/4 z-0" />
        <SectionWrapper>
          <div className="container relative z-10 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Content */}

            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="space-y-8 order-2 lg:order-1 flex flex-col items-start desktop1:items-start"
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-border shadow-sm text-primary text-xs font-secondFont font-bold tracking-wide uppercase">
                <MapPin className="w-3.5 h-3.5" />
                Escritório em Itapema - SC
              </div>

              <h2 className="text-start desktop1:text-start text-4xl md:text-5xl lg:text-7xl font-medium leading-[1.1] text-foreground tracking-tight">
                Atuação{' '}
                <span className="text-primary italic relative">
                  ética
                  <svg
                    className="absolute -bottom-1 left-0 w-full h-3 text-accent/30 desktop1:bottom-1"
                    viewBox="0 0 100 10"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="M0 5 Q 50 10 100 5"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                    />
                  </svg>
                </span>{' '}
                e acessível para assegurar os seus direitos.
              </h2>

              <p className="text-start desktop1:text-start text-lg md:text-xl text-mutedForeground leading-relaxed max-w-lg font-secondFont font-light">
                Conduzimos seu caso com segurança e transparência. Uma abordagem
                moderna para soluções jurídicas complexas, focada em resultados.
              </p>

              <div className="flex flex-col sm:flex-row lg:flex-col desktop2:flex-row gap-4 pt-4">
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-white rounded-full px-8 h-14 text-lg shadow-xl shadow-primary/20 transition-all hover:scale-105 group font-secondFont font-medium"
                >
                  <MessageCircle className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
                  Falar com especialista
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="rounded-full px-8 h-14 text-lg border-primary/20 text-foreground hover:bg-secondary/50 hover:border-primary/40 font-secondFont font-medium transition-all hover:scale-105"
                >
                  Conheça o escritório
                </Button>
              </div>

              <div className="flex justify-center desktop1:justify-start items-center gap-3 text-sm text-mutedForeground pt-6 border-t border-border/50 max-w-sm">
                <div className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                </div>
                <span className="font-secondFont font-light">
                  Atendimento online para todo o Brasil
                </span>
              </div>
            </motion.div>

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
              className="relative order-1 lg:order-2"
            >
              <div className="relative rounded-[2.5rem] overflow-hidden  aspect-[3/4] md:aspect-[4/5] lg:aspect-[3/4] border-[8px] border-white ring-1 ring-black/5 bg-gray-100">
                <img
                  src={content.texts.hero.heroDefaultImage}
                  alt="Advogados Amaral & Peres"
                  className="w-full h-full object-cover scale-105 hover:scale-100 transition-transform duration-700"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />

                {/* Floating Card */}
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  className="absolute bottom-8 left-6 right-6 md:left-8 md:right-8 bg-white/95 backdrop-blur-md p-2 phone3:p-6 rounded-2xl shadow-lg border border-white/50"
                >
                  <div className="flex items-center gap-4 phone3:gap-5">
                    <div className="flex-shrink-0 w-8 h-8 phone3:w-12 phone3:h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                      <Phone className="w-4 h-4 phone3:w-6 phone3:h-6" />
                    </div>
                    <div>
                      <p className="text-paragraph1 phone3:text-xs font-secondFont font-bold text-primary tracking-widest uppercase mb-1">
                        Precisa de ajuda?
                      </p>
                      <p className="text-paragraph2 phone3:text-lg font-mainFont font-bold text-foreground leading-none">
                        Consultoria Especializada
                      </p>
                    </div>
                    <div className="ml-auto">
                      <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center shadow-md">
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Decorative elements */}
              {/* <div className="absolute -top-12 -right-12 w-64 h-64 bg-accent/10 rounded-full blur-3xl -z-10" /> */}
              <div className="absolute -bottom-6 -right-6 text-primary/10 hidden md:block">
                <svg
                  width="120"
                  height="120"
                  viewBox="0 0 100 100"
                  fill="currentColor"
                >
                  <pattern
                    id="dots"
                    x="0"
                    y="0"
                    width="20"
                    height="20"
                    patternUnits="userSpaceOnUse"
                  >
                    <circle cx="2" cy="2" r="2" />
                  </pattern>
                  <rect width="100" height="100" fill="url(#dots)" />
                </svg>
              </div>
            </motion.div>
          </div>
        </SectionWrapper>
      </section>
    </SectionArea>
  )
}

export default HeroTemplateNovo
