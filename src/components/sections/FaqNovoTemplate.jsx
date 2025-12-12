import React from 'react'
import SectionArea from '../sectionElements/SectionArea'
import SectionWrapper from '../sectionElements/SectionWrapper'
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '../interactives/FaqNovo'

function FaqNovoTemplate() {
  const faqs = [
    {
      question: 'Como funciona a primeira consulta?',
      answer:
        'Nossa primeira consulta é realizada para entender profundamente o seu caso. Analisamos os documentos iniciais e traçamos as melhores estratégias jurídicas para a sua situação.',
    },
    {
      question: 'Vocês atendem online?',
      answer:
        'Sim! Realizamos atendimentos por videoconferência para todo o Brasil, garantindo a mesma qualidade e atenção do atendimento presencial.',
    },
    {
      question: 'Quais são as formas de pagamento?',
      answer:
        'Trabalhamos com diversas formas de pagamento e parcelamento, buscando sempre facilitar o acesso à justiça para nossos clientes.',
    },
    {
      question: 'Quanto tempo demora meu processo?',
      answer:
        'O tempo de um processo varia conforme a complexidade e o tribunal. No entanto, prezamos pela agilidade e mantemos nossos clientes sempre informados sobre cada movimentação.',
    },
  ]
  return (
    <SectionArea>
      <SectionWrapper>
        <section className=" bg-white w-full">
          <div className="container mx-auto max-w-3xl">
            <div className="text-center mb-16">
              <span className="text-primary font-bold font-secondFont tracking-wider uppercase text-xs mb-2 block">
                Dúvidas Comuns
              </span>
              <h2 className="text-3xl md:text-4xl font-mainFont font-medium text-foreground">
                Perguntas Frequentes
              </h2>
            </div>

            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, idx) => (
                <AccordionItem
                  key={idx}
                  value={`item-${idx}`}
                  className="border-b border-border"
                >
                  <AccordionTrigger className="text-lg font-medium font-mainFont text-left hover:text-primary py-6">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-mutedForeground font-secondFont font-light pb-6 leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>
      </SectionWrapper>
    </SectionArea>
  )
}

export default FaqNovoTemplate
