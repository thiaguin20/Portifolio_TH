import { useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { ParticleField } from './components/ParticleField'
import { HolographicMap } from './components/HolographicMap'
import { SkillsSection } from './components/sections/SkillsSection'
import { ProjectsSection } from './components/sections/ProjectsSection'
import { CertificatesSection } from './components/sections/CertificatesSection'
import { ContactSection } from './components/sections/ContactSection'

export type SectionId = 'projects' | 'skills' | 'certificates' | 'contact'

export default function App() {
  const [activeSection, setActiveSection] = useState<SectionId | null>(null)

  return (
    <div className="relative w-screen h-screen overflow-hidden" style={{ background: '#020b18', fontFamily: 'Inter, sans-serif' }}>
      <ParticleField />
      <AnimatePresence mode="wait">
        {activeSection === null ? (
          <motion.div
            key="map"
            className="absolute inset-0"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.08 }}
            transition={{ duration: 0.55, ease: [0.4, 0, 0.2, 1] }}
          >
            <HolographicMap onNavigate={setActiveSection} />
          </motion.div>
        ) : (
          <motion.div
            key={activeSection}
            className="absolute inset-0"
            initial={{ opacity: 0, scale: 1.12 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.92 }}
            transition={{ duration: 0.55, ease: [0.4, 0, 0.2, 1] }}
          >
            {activeSection === 'skills' && <SkillsSection onBack={() => setActiveSection(null)} />}
            {activeSection === 'projects' && <ProjectsSection onBack={() => setActiveSection(null)} />}
            {activeSection === 'certificates' && <CertificatesSection onBack={() => setActiveSection(null)} />}
            {activeSection === 'contact' && <ContactSection onBack={() => setActiveSection(null)} />}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
