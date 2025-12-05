'use client';

import { useAppContext } from '@/context/AppContext';

export default function HUD() {
  const { scrollProgress, activeSection, setScrollTo } = useAppContext();

  const handleNavClick = (e, section) => {
    e.preventDefault();
    setScrollTo(section);
  };

  const navItemStyle = (section) => ({
    cursor: 'pointer',
    color: activeSection === section ? '#00ffff' : 'white',
    textDecoration: activeSection === section ? 'underline' : 'none',
    transition: 'color 0.3s ease',
  });

  return (
    <div className="hud">
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>THE LIVING BLUEPRINT</div>
        <nav>
          <ul style={{ display: 'flex', gap: '1.5rem', listStyle: 'none' }}>
            <li>
              <a href="#services" onClick={(e) => handleNavClick(e, 'services')} style={navItemStyle('services')}>
                Services
              </a>
            </li>
            <li>
              <a href="#work" onClick={(e) => handleNavClick(e, 'work')} style={navItemStyle('work')}>
                Work
              </a>
            </li>
            <li>
              <a href="#contact" onClick={(e) => handleNavClick(e, 'contact')} style={navItemStyle('contact')}>
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </header>
      
      <footer style={{ textAlign: 'right' }}>
        <div>SYSTEM STATUS: ONLINE</div>
        <div>SCROLL PROGRESS: {Math.round(scrollProgress * 100)}%</div>
      </footer>
    </div>
  );
}
