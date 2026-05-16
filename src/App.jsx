import React from "react";

const DiscordIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" style={{ marginRight: '8px' }}>
    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z" />
  </svg>
);

export default function App() {
  const styles = {
    body: { backgroundColor: '#0a0a0c', color: '#c8c3bc', minHeight: '100vh', padding: '40px 20px', fontFamily: 'Georgia, serif' },
    container: { maxWidth: '900px', margin: '0 auto' },
    header: { textAlign: 'center', borderBottom: '1px solid #1e1e22', paddingBottom: '30px', marginBottom: '30px' },
    logoMain: { width: '120px', marginBottom: '15px' },
    title: { color: '#e8e3da', fontSize: '32px', letterSpacing: '4px', textTransform: 'uppercase', marginBottom: '10px' },
    tag: { color: '#b8860b', fontSize: '12px', letterSpacing: '2px', border: '1px solid #2e2a1e', padding: '4px 12px', display: 'inline-block' },
    sectionTitle: { fontSize: '11px', color: '#4a4840', letterSpacing: '3px', textTransform: 'uppercase', margin: '40px 0 20px', display: 'flex', alignItems: 'center' },
    line: { flex: 1, height: '1px', backgroundColor: '#1e1e22', marginLeft: '15px' },
    grid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(380px, 1fr))', gap: '20px' },
    card: { backgroundColor: '#0f0f13', border: '1px solid #1c1c20', padding: '24px', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' },
    deptLogo: { width: '80px', height: '80px', objectFit: 'contain', marginBottom: '15px' },
    cardTitle: { color: '#ddd8d0', fontSize: '20px', marginBottom: '8px', textTransform: 'uppercase' },
    cardDesc: { fontSize: '14px', color: '#55524e', lineHeight: '1.5', marginBottom: '20px' },
    label: { fontSize: '10px', color: '#b8860b', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '5px', fontWeight: 'bold' },
    devName: { fontSize: '26px', fontWeight: 'bold', color: '#e8e3da', marginTop: '2px' }, 
    btn: { display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '100%', padding: '12px', textDecoration: 'none', fontSize: '11px', fontWeight: 'bold', letterSpacing: '2px', transition: '0.2s', marginTop: 'auto' },
    footer: { marginTop: '80px', paddingTop: '20px', borderTop: '1px solid #111114', fontSize: '10px', color: '#333', textAlign: 'center', display: 'flex', justifyContent: 'space-between' }
  };

  return (
    <div style={styles.body}>
      <div style={styles.container}>
        
        <header style={styles.header}>
          <img src="/LACitySeal_Large.png" alt="City Seal" style={styles.logoMain} />
          <h1 style={styles.title}>Los Angeles City Roleplay</h1>
          <span style={styles.tag}>Official Government Portal</span>
        </header>

        <div style={styles.sectionTitle}>Government Leadership <div style={styles.line}></div></div>
        
        <div style={styles.grid}>
          {/* MAYOR CARD */}
          <div style={{...styles.card, borderTop: '4px solid #b91c1c'}}>
            <h3 style={styles.cardTitle}>Office of the Mayor</h3>
            <p style={styles.cardDesc}>Executive leadership overseeing all city departments and legislation.</p>
            <div style={{marginBottom: '20px'}}>
              <div style={styles.label}>Current Mayor</div>
              <div style={{fontSize: '24px', color: '#dc2626', fontWeight: 'bold'}}>ASTRAL</div>
            </div>
            <a href="https://discord.gg/WhKZUjCSwk" target="_blank" style={{...styles.btn, backgroundColor: '#b91c1c', color: '#fff'}}>
              <DiscordIcon /> CONTACT MAYOR
            </a>
          </div>

          {/* LEAD DEV / COMMISSIONER CARD */}
          <div style={{...styles.card, borderTop: '4px solid #b8860b'}}>
            <h3 style={styles.cardTitle}>Board of Commissioner(s)</h3>
            <p style={styles.cardDesc}>Legislative oversight and technical administration for the City of Los Angeles.</p>
            <div style={{marginBottom: '20px'}}>
              <div style={styles.label}>Board of Commissioner (LASD) & Lead Website Developer</div>
              <div style={styles.devName}>itzz_JB</div>
            </div>
            <p style={{fontSize: '11px', color: '#444', fontStyle: 'italic'}}>Lead Developer of the LACity Website & Community Assets.</p>
          </div>
        </div>

        <div style={styles.sectionTitle}>Public Safety Departments <div style={styles.line}></div></div>

        <div style={styles.grid}>
          {/* LASD remains WEBP */}
          <div style={{...styles.card, borderTop: '4px solid #2563eb'}}>
            <img src="/LASD.webp" alt="LASD Logo" style={styles.deptLogo} />
            <h3 style={styles.cardTitle}>L.A. County Sheriff</h3>
            <p style={styles.cardDesc}>Dedicated to maintaining peace and providing law enforcement across the county.</p>
            <a href="https://discord.gg/RFRWYhh9Vr" target="_blank" style={{...styles.btn, backgroundColor: '#2563eb', color: '#fff'}}>
              <DiscordIcon /> JOIN SHERIFF DEPT
            </a>
          </div>

          {/* LAPD SWITCHED TO PNG */}
          <div style={{...styles.card, borderTop: '4px solid #2563eb'}}>
            <img src="/LAPD.png" alt="LAPD Logo" style={styles.deptLogo} />
            <h3 style={styles.cardTitle}>L.A. Police Department</h3>
            <p style={styles.cardDesc}>To protect and to serve. The primary law enforcement agency for the city of Los Angeles.</p>
            <a href="https://discord.gg/49GyTx24X" target="_blank" style={{...styles.btn, backgroundColor: '#2563eb', color: '#fff'}}>
              <DiscordIcon /> JOIN LAPD
            </a>
          </div>
        </div>

        <footer style={styles.footer}>
          <span>FOUNDER: ARES</span>
          <span>COMMUNITY: <a href="https://discord.gg/lacomm" style={{color: '#d4a017', textDecoration: 'none'}}>LACOMM</a></span>
        </footer>

      </div>
    </div>
  );
}
