import React from 'react'
import SectionArea from '../sectionElements/SectionArea'
import SectionWrapper from '../sectionElements/SectionWrapper'
import {
  Instagram,
  Facebook,
  Linkedin,
  MapPin,
  Phone,
  Mail,
} from 'lucide-react'
import content from '../../content/content'

function FooterNovoTemplate() {
  return (
    <SectionArea className="bg-primary">
      <SectionWrapper>
        <footer className="text-white">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
              <div className="space-y-6">
                <h3 className="text-2xl font-mainFont font-bold text-white">
                  AMARAL & PERES
                </h3>
                <p className="text-white/60 leading-relaxed font-secondFont font-light">
                  Advocacia e Consultoria Jurídica comprometida com a ética,
                  transparência e a defesa incansável dos direitos de nossos
                  clientes.
                </p>
                <div className="flex gap-4">
                  <a
                    href={content.texts.links.instagram}
                    target="_blank"
                    className="w-10 h-10 rounded-full bg-white/10 hover:bg-primary flex items-center justify-center transition-colors"
                  >
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a
                    href={content.texts.links.facebook}
                    target="_blank"
                    className="w-10 h-10 rounded-full bg-white/10 hover:bg-primary flex items-center justify-center transition-colors"
                  >
                    <Facebook className="w-5 h-5" />
                  </a>
                  <a
                    href={content.texts.links.linkedin}
                    target="_blank"
                    className="w-10 h-10 rounded-full bg-white/10 hover:bg-primary flex items-center justify-center transition-colors"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                </div>
              </div>

              <div>
                <h4 className="font-bold font-mainFont text-lg mb-6">
                  Links Rápidos
                </h4>
                <ul className="space-y-4 font-secondFont font-light">
                  {[
                    'Início',
                    'Sobre Nós',
                    'Áreas de Atuação',
                    'Blog',
                    'Contato',
                  ].map((item) => (
                    <li key={item}>
                      <a
                        href="#"
                        className="text-white/60 hover:text-white transition-colors"
                      >
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-bold font-mainFont text-lg mb-6">
                  Contato
                </h4>
                <ul className="space-y-4 text-white/60">
                  <li className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 shrink-0 text-white" />
                    <span className="font-secondFont font-light">
                      Rua 222, n. 258, sala 4, Meia Praia, Itapema, Brazil
                    </span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Phone className="w-5 h-5 shrink-0 text-white" />
                    <span className="font-secondFont font-light">
                      (47) 99999-9999
                    </span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Mail className="w-5 h-5 shrink-0 text-white" />
                    <span className="font-secondFont font-light text-paragraph2">
                      contato@amaraleperes.com.br
                    </span>
                  </li>
                </ul>
              </div>

              <div className="h-64 rounded-xl overflow-hidden bg-white/5">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3554.484252627916!2d-48.62123492455584!3d-27.13968667651261!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94d8b60000000001%3A0x1234567890abcdef!2sMeia%20Praia%2C%20Itapema%20-%20SC!5e0!3m2!1sen!2sbr!4v1700000000000!5m2!1sen!2sbr"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="grayscale hover:grayscale-0 transition-all duration-500"
                ></iframe>
              </div>
            </div>

            <div className="border-t border-white/10 pt-8 text-center text-sm text-white/40">
              <p>
                &copy; {new Date().getFullYear()} Amaral & Peres. Todos os
                direitos reservados.
              </p>
            </div>
          </div>
        </footer>
      </SectionWrapper>
    </SectionArea>
  )
}

export default FooterNovoTemplate
