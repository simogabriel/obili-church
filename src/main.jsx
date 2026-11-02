import React, { useEffect, useRef, useState } from 'react';
import { createRoot } from 'react-dom/client';
import '../styles.css';
import './animation.css';
import './palette.css';

const photos = {
  gathering: '/photo_1_2026-11-01_23-10-38.jpg',
  fellowship: '/photo_5_2026-11-01_23-10-38.jpg',
  students: '/photo_6_2026-11-01_23-10-38.jpg',
  certificates: '/photo_3_2026-11-01_23-10-38.jpg',
  worship: '/photo_4_2026-11-01_23-10-38.jpg',
};

function Reveal({ children, className = '', delay = 0, ...props }) {
  return <div className={`reveal ${className}`} style={{ '--reveal-delay': `${delay}ms` }} {...props}>{children}</div>;
}

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const links = [['Home', 'home'], ['About', 'about'], ['Outreach', 'outreach'], ['Evangelism', 'evangelism'], ['Location', 'location']];
  return <header className="site-header">
    <a className="brand" href="#home" aria-label="Christ Embassy Obili home"><img src="/logo.svg" alt="Christ Embassy Obili" /></a>
    <button className={`menu-toggle ${menuOpen ? 'is-open' : ''}`} aria-expanded={menuOpen} aria-controls="site-nav" aria-label={menuOpen ? 'Close navigation' : 'Open navigation'} onClick={() => setMenuOpen(!menuOpen)}><span/><span/><span/></button>
    <nav id="site-nav" className={`site-nav ${menuOpen ? 'open' : ''}`} aria-label="Main navigation">
      {links.map(([label, id]) => <a key={id} href={`#${id}`} onClick={() => setMenuOpen(false)}>{label}</a>)}
      <div className="nav-actions"><a className="nav-visit" href="#location" onClick={() => setMenuOpen(false)}>Plan a visit <span>↗</span></a><span className="nav-bible" aria-hidden="true"><svg viewBox="0 0 40 32" role="presentation"><path className="nav-bible-pages" d="M20 10C15 6 9 6 4 8v17c6-2 11-1 16 3 5-4 10-5 16-3V8c-5-2-11-2-16 2Z"/><path className="nav-bible-spine" d="M20 10v18M7 12c4-1 8 0 11 2m-11 3c4-1 8 0 11 2m7-7c3-2 7-3 11-2m-11 7c3-2 7-3 11-2"/><path className="nav-bible-cross" d="M20 1v6m-3-3h6"/></svg></span></div>
    </nav>
  </header>;
}

function Eyebrow({ children, light = false }) { return <p className={`eyebrow ${light ? 'light' : ''}`}><span/>{children}</p>; }
function Button({ children, href, outline = false }) { return <a className={`button ${outline ? 'button-outline' : 'button-gold'}`} href={href}>{children}</a>; }

function Hero() {
  return <section className="hero" id="home">
    <div className="hero-image" role="img" aria-label="Young people gathered together at a church outreach"/><div className="hero-shade"/>
    <div className="hero-orbit hero-orbit-one" aria-hidden="true"/><div className="hero-orbit hero-orbit-two" aria-hidden="true"/><div className="hero-ghost" aria-hidden="true">OBILI</div>
    <div className="hero-content wrap"><div className="hero-enter"><div className="hero-overline"><span className="hero-overline-mark">✳</span><Eyebrow light>CHRIST EMBASSY · OBILI, YAOUNDÉ</Eyebrow><span className="hero-overline-rule"/></div><h1><span className="hero-title-line"><span>A place to belong.</span></span><span className="hero-title-line"><span><em>A life with purpose.</em></span></span></h1><p className="hero-copy">Come as you are. Find a family, grow in the Word, and discover the joy of sharing God’s love with your world.</p><div className="hero-actions"><Button href="#location">Join us in Obili <span>→</span></Button><a className="text-link" href="#about">Discover our church <span>↓</span></a></div></div></div>
    <div className="hero-side-note" aria-hidden="true">WORD <i/> SPIRIT <i/> LOVE</div><div className="hero-note"><span className="note-mark">✳</span><span><small>OUR HEART</small><br/>Taking God’s presence<br/>to our community</span></div><div className="hero-index"><span>01</span><i/><span>04</span><div className="hero-index-bars"><b/><b/><b/><b/></div></div>
  </section>;
}

function Welcome() {
  return <section className="welcome section-pad"><div className="wrap welcome-grid"><Reveal className="welcome-heading"><Eyebrow>YOU’RE WELCOME HERE</Eyebrow><h2><span className="welcome-title-line"><span>There’s room</span></span><span className="welcome-title-line"><span>for <em>you.</em></span></span></h2></Reveal><Reveal className="welcome-text" delay={120}><p className="welcome-paragraph">Church is more than a place you visit. It’s a community where faith grows, friendships take root, and every person is encouraged to live out God’s purpose.</p><a className="under-link welcome-link" href="#location">We’d love to meet you <span>↗</span></a></Reveal></div>
    <Reveal className="wrap welcome-stats" delay={150}><div className="welcome-stat"><strong>01</strong><span>One welcoming<br/>church family</span></div><div className="welcome-stat"><strong>02</strong><span>Growing through<br/>God’s Word</span></div><div className="welcome-stat"><strong>03</strong><span>Serving Obili<br/>with love</span></div></Reveal>
  </section>;
}

function About() {
  return <section className="about section-pad" id="about"><div className="wrap">
    <div className="about-intro-grid">
      <Reveal className="about-heading"><Eyebrow>WHO WE ARE</Eyebrow><h2>Taking the divine presence of God to the <em>world.</em></h2><p className="about-lead">Christ Embassy is a loving, Word-centred Christian family.</p><p className="about-local">Here in Obili, we welcome you to worship, learn from the Bible, build meaningful friendships, and make a difference in the community around us.</p></Reveal>
      <Reveal className="about-vision" delay={130}><span className="vision-label">OUR VISION</span><span className="vision-mark" aria-hidden="true">“</span><p>To take the divine presence of God to the nations and peoples of the world; and to demonstrate the character of the Spirit.</p><div className="vision-links"><a className="about-link" href="https://christembassy.org/i-am-new/" target="_blank" rel="noreferrer">Explore Christ Embassy <span>↗</span></a><a className="vision-source" href="https://christembassy.org/vision/" target="_blank" rel="noreferrer">Official vision <span>↗</span></a></div></Reveal>
    </div>
    <Reveal className="about-photo-wide" delay={160}><img src={photos.fellowship} alt="Young people gathered for a time of prayer and fellowship"/><div className="about-image-shade"/><span className="photo-label"><i/> Faith grows in community</span><span className="about-photo-index">CHRIST EMBASSY · OBILI</span></Reveal>
  </div></section>;
}

const gallery = [
  { image: photos.gathering, alt: 'A large group of young people gathered inside a community hall', label: '01 / COMMUNITY', title: 'Gathering together', className: 'gallery-tall' },
  { image: photos.students, alt: 'A church leader sharing a book with students outdoors', label: '02 / SHARING THE WORD', title: 'Encouragement for every generation' },
  { image: photos.certificates, alt: 'Students proudly holding certificates after a learning program', label: '03 / CELEBRATING GROWTH', title: 'Every step forward matters' },
  { image: photos.worship, alt: 'A congregation of young people in a worship gathering', label: '04 / FELLOWSHIP', title: 'One community, many stories', className: 'gallery-wide' },
];

function Outreach() {
  const [active, setActive] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const touchStart = useRef(null);
  const current = gallery[active];
  const move = (step) => setActive((index) => (index + step + gallery.length) % gallery.length);
  useEffect(() => {
    if (!isPlaying) return undefined;
    const timer = window.setInterval(() => move(1), 6500);
    return () => window.clearInterval(timer);
  }, [isPlaying]);
  return <section className="outreach section-pad" id="outreach"><div className="wrap">
    <div className="outreach-topline"><span className="outreach-star">✳</span><span>FAITH IN MOTION</span><i/><span className="outreach-place">OBILI · YAOUNDÉ</span></div>
    <Reveal className="section-heading"><div><Eyebrow>LOVE IN ACTION</Eyebrow><h2>Outreach that<br/><em>brings us together.</em></h2></div><p>We take time to listen, encourage, teach and share the hope of the Gospel. These moments from our community tell the story better than words.</p></Reveal>
    <Reveal className="outreach-carousel" delay={100} role="region" aria-roledescription="carousel" aria-label="Christ Embassy Obili outreach photos" onTouchStart={(event) => { touchStart.current = event.touches[0].clientX; }} onTouchEnd={(event) => { if (touchStart.current === null) return; const distance = event.changedTouches[0].clientX - touchStart.current; if (Math.abs(distance) > 45) move(distance < 0 ? 1 : -1); touchStart.current = null; }}>
      <div className="carousel-stage" aria-live="polite">
        <div className="carousel-photo" key={current.image}><img src={current.image} alt={current.alt}/><div className="carousel-photo-shade"/><span className="carousel-photo-label"><i/> {current.label}</span><span className="carousel-photo-count">0{active + 1} <b>/</b> 0{gallery.length}</span></div>
        <div className="carousel-story" key={current.title}><span className="carousel-kicker">A MOMENT FROM OUR COMMUNITY</span><span className="carousel-spark" aria-hidden="true">✳</span><h3>{current.title}</h3><p>{current.alt.charAt(0).toUpperCase() + current.alt.slice(1)}. Sharing faith, friendship and encouragement across our community.</p><div className="carousel-controls"><button type="button" aria-label="Previous outreach photo" onClick={() => move(-1)}>←</button><button type="button" aria-label="Next outreach photo" onClick={() => move(1)}>→</button></div></div>
      </div>
      <div className="carousel-rail"><div className="carousel-thumbnails" aria-label="Choose outreach photo">{gallery.map((item, index) => <button type="button" key={item.label} className={`carousel-thumb ${active === index ? 'active' : ''}`} aria-label={`Show photo ${index + 1}: ${item.title}`} aria-current={active === index ? 'true' : undefined} onClick={() => setActive(index)}><img src={item.image} alt=""/><span>0{index + 1}</span></button>)}</div><div className="carousel-progress" aria-hidden="true"><span style={{ transform: `scaleX(${(active + 1) / gallery.length})` }}/></div><button type="button" className="carousel-play" aria-label={isPlaying ? 'Pause slideshow' : 'Play slideshow'} aria-pressed={!isPlaying} onClick={() => setIsPlaying(!isPlaying)}>{isPlaying ? 'Ⅱ' : '▶'}</button></div>
    </Reveal>
    <div className="gallery-footer"><p className="gallery-credit">PHOTOS · CHRIST EMBASSY OBILI COMMUNITY</p><p className="gallery-motto"><span>“</span>Love made visible, one life at a time.</p><a href="#location" className="gallery-visit">BE PART OF THE MISSION <span>↗</span></a></div>
  </div></section>;
}

const evangelismPoints = [
  ['01', 'Hope for every person', 'The Gospel brings a message of salvation and hope to people wherever they are.'],
  ['02', 'A calling we share', 'Christ Embassy teaches that sharing the Gospel is part of every believer’s purpose and witness.'],
  ['03', 'Love made visible', 'We share with kindness, serve our neighbours, and let our lives reflect the love of Christ.'],
];
function Evangelism() {
  return <section className="evangelism section-pad" id="evangelism"><div className="wrap evangelism-grid"><Reveal className="evangelism-intro"><Eyebrow light>THE GOOD NEWS, SHARED</Eyebrow><h2>One message can<br/>change a <em>life.</em></h2><p>Evangelism is sharing the good news of Jesus with love, courage and compassion. It is an invitation to discover God’s love and the new life found in Christ.</p><Button href="#location">Be part of the mission <span>→</span></Button></Reveal><Reveal className="evangelism-points" delay={120}>{evangelismPoints.map(([number, title, body]) => <article key={number}><span className="point-no">{number}</span><div><h3>{title}</h3><p>{body}</p></div></article>)}<a className="source-link" href="https://christembassy.org/your-true-purpose/" target="_blank" rel="noreferrer">Read more from Christ Embassy <span>↗</span></a></Reveal></div></section>;
}

function Location() {
  return <section className="visit section-pad" id="location"><div className="wrap"><Reveal className="section-heading visit-heading"><div><Eyebrow>FIND US IN OBILI</Eyebrow><h2>Your next step<br/><em>starts here.</em></h2></div><p>We’d be glad to welcome you. Find us around Carrefour Obili in Yaoundé, Cameroon, or call us and we’ll help you plan your visit.</p></Reveal><div className="visit-grid"><Reveal className="visit-card"><div className="pin-icon">⌖</div><Eyebrow>COME WORSHIP WITH US</Eyebrow><h3>Carrefour Obili</h3><p>Obili, Yaoundé<br/>Centre Region, Cameroon</p><a className="under-link" href="https://www.google.com/maps/search/?api=1&query=Carrefour+Obili%2C+Yaound%C3%A9%2C+Cameroon" target="_blank" rel="noreferrer">Open directions in Google Maps <span>↗</span></a><div className="contact-block"><Eyebrow>CALL THE CHURCH</Eyebrow><a href="tel:+237676967786">+237 676 967 786</a><a href="tel:+237688057442">+237 688 057 442</a></div></Reveal><div className="map-frame"><iframe title="Map showing Carrefour Obili, Yaoundé" src="https://maps.google.com/maps?q=Carrefour%20Obili%2C%20Yaound%C3%A9%2C%20Cameroon&t=&z=14&ie=UTF8&iwloc=&output=embed" loading="lazy" referrerPolicy="no-referrer-when-downgrade"/><span className="map-tag"><i/> CARREFOUR OBILI · YAOUNDÉ</span></div></div></div></section>;
}

function Footer() {
  return <><section className="closing"><div className="wrap closing-inner"><Eyebrow light>YOUR PLACE IS READY</Eyebrow><h2>We can’t wait<br/>to welcome <em>you.</em></h2><Button href="tel:+237676967786">Give us a call <span>↗</span></Button></div></section><footer className="site-footer"><div className="wrap footer-main">
    <div className="footer-brand-block"><a className="footer-brand" href="#home" aria-label="Christ Embassy Obili home"><img src="/logo.svg" alt="Christ Embassy Obili"/></a><p>Taking God’s presence<br/>to our community.</p></div>
    <div className="footer-column"><span className="footer-label">VISIT US</span><p>Carrefour Obili<br/>Yaoundé, Cameroon</p><a className="footer-map-link" href="https://www.google.com/maps/search/?api=1&query=Carrefour+Obili%2C+Yaound%C3%A9%2C+Cameroon" target="_blank" rel="noreferrer">Get directions <span>↗</span></a></div>
    <div className="footer-column footer-phone"><span className="footer-label">CONTACT</span><a href="tel:+237676967786">+237 676 967 786</a><a href="tel:+237688057442">+237 688 057 442</a></div>
    <div className="footer-column footer-links"><span className="footer-label">EXPLORE</span><a href="#about">About</a><a href="#outreach">Outreach</a><a href="#evangelism">Evangelism</a></div>
  </div><div className="wrap copyright"><span>© {new Date().getFullYear()} Christ Embassy Obili</span><a className="back-top" href="#home">BACK TO TOP <span>↑</span></a></div></footer></>;
}

function App() {
  useEffect(() => {
    const targets = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => {
      if (entry.isIntersecting) { entry.target.classList.add('is-visible'); observer.unobserve(entry.target); }
    }), { threshold: 0.12, rootMargin: '0px 0px -35px 0px' });
    targets.forEach((target) => observer.observe(target));
    return () => observer.disconnect();
  }, []);
  return <><Header/><main><Hero/><Welcome/><About/><Outreach/><Evangelism/><Location/></main><Footer/></>;
}

createRoot(document.getElementById('root')).render(<React.StrictMode><App/></React.StrictMode>);
