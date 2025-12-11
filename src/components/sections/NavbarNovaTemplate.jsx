import React from 'react'
import { useState, useEffect } from 'react'
import { MessageCircle, Menu, X } from 'lucide-react'
import { Button } from '../interactives/ButtonNovoTemplate'
import { motion } from 'framer-motion'

function NavbarNovaTemplate() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent ${
        isScrolled
          ? 'bg-white/90 backdrop-blur-md shadow-sm py-3 border-border/40'
          : 'bg-white py-6'
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-6">
        <div className="flex flex-col z-50 relative w-[232px]">
          <h1 className="text-title3 font-mainFont font-bold tracking-tight text-primary">
            AMARAL & PERES
          </h1>
          <span className="text-[11px] tracking-[0.2em] uppercase text-mutedForeground font-secondFont font-light">
            Advocacia e Consultoria Jurídica
          </span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          {[
            'Início',
            'Serviços',
            'Sobre Nós',
            'Perguntas Frequentes',
            'Mapa',
          ].map((item) => (
            <a
              key={item}
              href="#"
              className="text-foreground/70 hover:text-primary transition-colors relative group py-2"
            >
              {item}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
          <Button className="bg-primary hover:bg-primary/90 text-white gap-2 rounded-full px-6 shadow-lg shadow-primary/20 transition-all hover:scale-105">
            <MessageCircle className="w-4 h-4" />
            Contato
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 z-50 relative text-foreground"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="fixed inset-0 bg-white pt-24 px-6 md:hidden z-40 w-full"
          >
            <div className="flex flex-col gap-6 bg-white px-4 text-lg font-secondFont font-medium">
              {[
                'Início',
                'Serviços',
                'Sobre Nós',
                'Perguntas Frequentes',
                'Mapa',
              ].map((item) => (
                <a key={item} href="#" className="border-b border-border pb-4">
                  {item}
                </a>
              ))}
              <Button className="w-full bg-primary text-white py-6 text-lg">
                Entrar em contato
              </Button>
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  )
}

export default NavbarNovaTemplate
