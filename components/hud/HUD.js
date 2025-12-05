export default function HUD() {
  return (
    <div className="hud">
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>LOGO</div>
        <nav>
          <ul style={{ display: 'flex', gap: '1rem', listStyle: 'none' }}>
            <li><a href="#services">Services</a></li>
            <li><a href="#work">Work</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>
      
      <footer style={{ textAlign: 'right' }}>
        <div>SYSTEM STATUS: ONLINE</div>
        <div>SCROLL PROGRESS: 0%</div>
      </footer>
    </div>
  );
}
