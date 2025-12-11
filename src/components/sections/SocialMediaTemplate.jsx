import React from 'react'
import SectionArea from '../sectionElements/SectionArea'
import SectionWrapper from '../sectionElements/SectionWrapper'
import content from '../../content/content'
import { Instagram, ArrowRight, Facebook, Linkedin } from 'lucide-react'

function SocialMediaTemplate() {
  return (
    <SectionArea paddingtop={false}>
      <SectionWrapper>
        <section className=" bg-white">
          <div className="container mx-auto">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-primary font-bold font-secondFont tracking-wider uppercase text-xs mb-2 block">
                Social Media
              </span>
              <h2 className="text-3xl md:text-4xl font-mainFont font-medium text-foreground mb-4">
                Acompanhe nosso dia a dia
              </h2>
              <p className="text-mutedForeground font-secondFont font-light">
                Siga-nos nas redes sociais e fique por dentro de dicas
                jurídicas, novidades do escritório e muito mais.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="flex justify-center">
                <div className="relative max-w-md w-full">
                  <div className="absolute -inset-4 bg-gradient-to-tr from-purple-500 to-orange-400 rounded-[2.5rem] opacity-20 blur-2xl" />
                  <img
                    src={content.texts.about.aboutSocial.img.img}
                    alt="Instagram Amaral & Peres"
                    className="relative rounded-[2rem] shadow-2xl border-4 border-white"
                  />
                </div>
              </div>

              <div className="space-y-8">
                <div className="flex flex-col gap-6">
                  <a
                    href={content.texts.links.instagram}
                    target="_blank"
                    className="group flex items-center gap-6 p-6 rounded-2xl border border-border hover:border-primary/30 hover:shadow-lg transition-all bg-white"
                  >
                    <div className="w-14 h-14 rounded-full bg-gradient-to-tr from-purple-600 to-orange-500 text-white flex items-center justify-center shrink-0">
                      <Instagram className="w-7 h-7" />
                    </div>
                    <div>
                      <h4 className="font-bold font-mainFont text-lg">
                        Instagram
                      </h4>
                      <p className="text-mutedForeground font-secondFont font-light text-sm">
                        Dicas diárias e bastidores
                      </p>
                    </div>
                    <ArrowRight className="ml-auto w-5 h-5 text-mutedForeground group-hover:text-primary transition-colors" />
                  </a>

                  <a
                    href={content.texts.links.facebook}
                    target="_blank"
                    className="group flex items-center gap-6 p-6 rounded-2xl border border-border hover:border-primary/30 hover:shadow-lg transition-all bg-white"
                  >
                    <div className="w-14 h-14 rounded-full bg-blue-600 text-white flex items-center justify-center shrink-0">
                      <Facebook className="w-7 h-7" />
                    </div>
                    <div>
                      <h4 className="font-bold font-mainFont text-lg">
                        Facebook
                      </h4>
                      <p className="text-mutedForeground font-secondFont font-light text-sm">
                        Notícias e artigos completos
                      </p>
                    </div>
                    <ArrowRight className="ml-auto w-5 h-5 text-mutedForeground group-hover:text-primary transition-colors" />
                  </a>

                  <a
                    href={content.texts.links.linkedin}
                    target="_blank"
                    className="group flex items-center gap-6 p-6 rounded-2xl border border-border hover:border-primary/30 hover:shadow-lg transition-all bg-white"
                  >
                    <div className="w-14 h-14 rounded-full bg-blue-700 text-white flex items-center justify-center shrink-0">
                      <Linkedin className="w-7 h-7" />
                    </div>
                    <div>
                      <h4 className="font-bold font-mainFont text-lg">
                        LinkedIn
                      </h4>
                      <p className="text-mutedForeground font-secondFont font-light text-sm">
                        Conteúdo corporativo
                      </p>
                    </div>
                    <ArrowRight className="ml-auto w-5 h-5 text-mutedForeground group-hover:text-primary transition-colors" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </SectionWrapper>
    </SectionArea>
  )
}

export default SocialMediaTemplate
