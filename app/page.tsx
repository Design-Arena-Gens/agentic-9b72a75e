'use client'

import { useEffect, useState } from 'react'
import styles from './page.module.css'

export default function Home() {
  const [scrollY, setScrollY] = useState(0)
  const [currentEvent, setCurrentEvent] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const events = [
    { title: 'Creative Bootcamp 2024', date: 'March 15-20', bg: '#7fdbcf' },
    { title: 'Video Production Workshop', date: 'April 5', bg: '#ffff00' },
    { title: 'Portfolio Review Day', date: 'April 18', bg: '#39b54a' },
    { title: 'Industry Connect Meetup', date: 'May 2', bg: '#bbace0' }
  ]

  const nextEvent = () => {
    setCurrentEvent((prev) => (prev + 1) % events.length)
  }

  const prevEvent = () => {
    setCurrentEvent((prev) => (prev - 1 + events.length) % events.length)
  }

  return (
    <>
      {/* Header */}
      <header className={styles.header}>
        <div className={`container ${styles.headerContent}`}>
          <div className={styles.logo}>
            <div className={styles.logoCircle}>MS</div>
            <span>Media School</span>
          </div>
          <nav className={styles.nav}>
            <a href="#about">About</a>
            <a href="#courses">Courses</a>
            <a href="#mentors">Mentors</a>
            <a href="#portfolio">Portfolio</a>
            <a href="#events">Events</a>
          </nav>
          <button className={`btn btn-primary ${styles.applyBtn}`}>Apply Now</button>
        </div>
      </header>

      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroBackground}></div>
        <div className={styles.heroSwoop}></div>
        <div className={`container ${styles.heroContent}`}>
          <h1 className={styles.heroTitle}>
            Creativity Meets Career:<br />Media Skills that Transform
          </h1>
          <div className={styles.heroButtons}>
            <a href="#courses" className={`btn btn-primary ${styles.tiltBtn1}`}>
              Explore Courses
            </a>
            <a href="#apply" className={`btn btn-secondary ${styles.tiltBtn2}`}>
              Apply Now
            </a>
          </div>
        </div>
      </section>

      {/* Wavy Divider */}
      <div className={styles.wavyDivider}></div>

      {/* About */}
      <section id="about" className={styles.about}>
        <div className="container">
          <h2 className={styles.sectionTitle}>Why Media School?</h2>
          <div className={styles.aboutGrid}>
            <div className={`${styles.aboutCard} ${styles.card1} card-lift`}>
              <div className={styles.cardIcon}>👨‍🏫</div>
              <h3>Industry Mentors</h3>
              <p>Learn from professionals actively working in media, film, and digital content creation.</p>
            </div>
            <div className={`${styles.aboutCard} ${styles.card2} card-lift`}>
              <div className={styles.cardIcon}>🎨</div>
              <h3>Portfolio Building</h3>
              <p>Create a standout portfolio with real-world projects that showcase your unique creative voice.</p>
            </div>
            <div className={`${styles.aboutCard} ${styles.card3} card-lift`}>
              <div className={styles.cardIcon}>🎬</div>
              <h3>Live Campaigns</h3>
              <p>Work on actual client projects and campaigns, gaining hands-on experience that matters.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Courses */}
      <section id="courses" className={styles.courses}>
        <div className="container">
          <h2 className={styles.sectionTitle}>Our Programs</h2>
          <div className={styles.coursesGrid}>
            <div className={`${styles.courseCard} ${styles.featured} card-lift`}>
              <div className={styles.courseIcon}>🎥</div>
              <h3>Film & Video Production</h3>
              <p>Master cinematography, directing, editing, and post-production with industry-standard tools.</p>
              <button className="btn btn-primary">Learn More</button>
            </div>
            <div className={`${styles.courseCard} ${styles.small1} card-lift`}>
              <div className={styles.courseIcon}>📸</div>
              <h3>Photography</h3>
              <p>From portraits to commercial shoots, develop your visual storytelling skills.</p>
              <button className="btn btn-secondary">Explore</button>
            </div>
            <div className={`${styles.courseCard} ${styles.small2} card-lift`}>
              <div className={styles.courseIcon}>✏️</div>
              <h3>Content Writing</h3>
              <p>Craft compelling narratives for brands, media, and digital platforms.</p>
              <button className="btn btn-secondary">Explore</button>
            </div>
            <div className={`${styles.courseCard} ${styles.small3} card-lift`}>
              <div className={styles.courseIcon}>🎨</div>
              <h3>Graphic Design</h3>
              <p>Create stunning visuals that communicate and captivate audiences.</p>
              <button className="btn btn-secondary">Explore</button>
            </div>
          </div>
        </div>
      </section>

      {/* Mentors */}
      <section id="mentors" className={styles.mentors}>
        <div className="container">
          <h2 className={styles.sectionTitle}>Meet Our Mentors</h2>
          <div className={styles.mentorsGrid}>
            <div className={`${styles.mentorCard} ${styles.mentor1}`}>
              <div className={styles.mentorPhoto}>
                <div className={styles.photoPlaceholder}>SR</div>
              </div>
              <h3>Sarah Rodriguez</h3>
              <p>Award-winning Filmmaker</p>
            </div>
            <div className={`${styles.mentorCard} ${styles.mentor2}`}>
              <div className={styles.mentorPhoto}>
                <div className={styles.photoPlaceholder}>JK</div>
              </div>
              <h3>James Kim</h3>
              <p>Creative Director</p>
            </div>
            <div className={`${styles.mentorCard} ${styles.mentor3}`}>
              <div className={styles.mentorPhoto}>
                <div className={styles.photoPlaceholder}>AP</div>
              </div>
              <h3>Aisha Patel</h3>
              <p>Content Strategist</p>
            </div>
            <div className={`${styles.mentorCard} ${styles.mentor4}`}>
              <div className={styles.mentorPhoto}>
                <div className={styles.photoPlaceholder}>MC</div>
              </div>
              <h3>Marcus Chen</h3>
              <p>Photography Guru</p>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section id="portfolio" className={styles.portfolio}>
        <div className="container">
          <h2 className={styles.sectionTitle}>Student Work</h2>
          <div className={styles.portfolioGrid}>
            <div className={`${styles.portfolioCard} ${styles.port1}`}>
              <div className={styles.portfolioImage}>🎬</div>
              <div className={styles.tape} style={{background: '#ffff00'}}></div>
              <p className={styles.portfolioTitle}>Urban Stories - Documentary</p>
            </div>
            <div className={`${styles.portfolioCard} ${styles.port2}`}>
              <div className={styles.portfolioImage}>📸</div>
              <div className={styles.tape} style={{background: '#7fdbcf'}}></div>
              <p className={styles.portfolioTitle}>Fashion Editorial Series</p>
            </div>
            <div className={`${styles.portfolioCard} ${styles.port3}`}>
              <div className={styles.portfolioImage}>🎨</div>
              <div className={styles.tape} style={{background: '#ff7f50'}}></div>
              <p className={styles.portfolioTitle}>Brand Identity Design</p>
            </div>
            <div className={`${styles.portfolioCard} ${styles.port4}`}>
              <div className={styles.portfolioImage}>🎥</div>
              <div className={styles.tape} style={{background: '#7fdbcf'}}></div>
              <p className={styles.portfolioTitle}>Music Video Production</p>
            </div>
            <div className={`${styles.portfolioCard} ${styles.port5}`}>
              <div className={styles.portfolioImage}>✏️</div>
              <div className={styles.tape} style={{background: '#ffff00'}}></div>
              <p className={styles.portfolioTitle}>Digital Magazine Feature</p>
            </div>
            <div className={`${styles.portfolioCard} ${styles.port6}`}>
              <div className={styles.portfolioImage}>📱</div>
              <div className={styles.tape} style={{background: '#ff7f50'}}></div>
              <p className={styles.portfolioTitle}>Social Media Campaign</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className={styles.testimonials}>
        <div className="container">
          <h2 className={styles.sectionTitle}>Success Stories</h2>
          <div className={styles.testimonialsGrid}>
            <div className={`${styles.testimonialCard} ${styles.test1}`}>
              <div className={styles.videoPlaceholder}>▶️</div>
              <p className={styles.quote}>"Media School transformed my passion into a career. The mentorship was invaluable."</p>
              <p className={styles.author}>- Emily Thompson</p>
            </div>
            <div className={`${styles.testimonialCard} ${styles.test2}`}>
              <p className={styles.quote}>"The hands-on projects prepared me for the real world. I landed my dream job before graduation!"</p>
              <p className={styles.author}>- David Martinez</p>
            </div>
            <div className={`${styles.testimonialCard} ${styles.test3}`}>
              <div className={styles.videoPlaceholder}>▶️</div>
              <p className={styles.quote}>"Best decision of my life. The creative community here is unmatched."</p>
              <p className={styles.author}>- Sophie Williams</p>
            </div>
          </div>
        </div>
      </section>

      {/* Events */}
      <section id="events" className={styles.events}>
        <div className="container">
          <h2 className={styles.sectionTitle}>Upcoming Events</h2>
          <div className={styles.eventsCarousel}>
            <button className={styles.carouselBtn} onClick={prevEvent}>‹</button>
            <div className={styles.eventCard} style={{background: events[currentEvent].bg}}>
              <h3>{events[currentEvent].title}</h3>
              <p className={styles.eventDate}>{events[currentEvent].date}</p>
              <button className="btn btn-primary">Register</button>
            </div>
            <button className={styles.carouselBtn} onClick={nextEvent}>›</button>
          </div>
          <div className={styles.eventIndicators}>
            {events.map((_, idx) => (
              <span
                key={idx}
                className={`${styles.indicator} ${idx === currentEvent ? styles.active : ''}`}
                onClick={() => setCurrentEvent(idx)}
              />
            ))}
          </div>
        </div>
        <div className={styles.wavyDividerBottom}></div>
      </section>

      {/* Apply */}
      <section id="apply" className={styles.apply}>
        <div className="container">
          <div className={styles.applyForm}>
            <h2>Start Your Creative Journey</h2>
            <form>
              <input type="text" placeholder="Full Name" required />
              <input type="email" placeholder="Email" required />
              <input type="tel" placeholder="Phone" required />
              <select required>
                <option value="">Select Program</option>
                <option value="film">Film & Video Production</option>
                <option value="photo">Photography</option>
                <option value="writing">Content Writing</option>
                <option value="design">Graphic Design</option>
              </select>
              <textarea placeholder="Tell us about your creative goals..." rows={4}></textarea>
              <button
                type="submit"
                className={`btn btn-primary ${scrollY > 3000 ? 'animate-pulse' : ''}`}
              >
                Submit Application
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        <div className={styles.footerAngle}></div>
        <div className="container">
          <div className={styles.footerContent}>
            <div className={styles.footerSection}>
              <h3>Media School</h3>
              <p>Part of Bridgeon Skillversity</p>
              <p>Transform your creative passion into a thriving career.</p>
            </div>
            <div className={styles.footerSection}>
              <h4>Quick Links</h4>
              <a href="#about">About Us</a>
              <a href="#courses">Programs</a>
              <a href="#mentors">Our Team</a>
              <a href="#apply">Apply Now</a>
            </div>
            <div className={styles.footerSection}>
              <h4>Contact</h4>
              <p>info@mediaschool.com</p>
              <p>+1 (555) 123-4567</p>
              <div className={styles.socialIcons}>
                <span style={{background: '#ff7f50'}}>f</span>
                <span style={{background: '#7fdbcf'}}>t</span>
                <span style={{background: '#bbace0'}}>i</span>
                <span style={{background: '#39b54a'}}>y</span>
              </div>
            </div>
          </div>
          <div className={styles.footerBottom}>
            <p>© 2024 Media School - Bridgeon Skillversity. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  )
}
