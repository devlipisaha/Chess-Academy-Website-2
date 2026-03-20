/* shared components - included via JS */

/* NAV HTML TEMPLATE */
const NAV_HTML = `
<nav class="nav">
  <a href="index.html" class="nav-logo">
    <div class="nav-logo-icon">♞</div>
    <span class="nav-logo-text">Knight<span>Vision</span></span>
  </a>
  <ul class="nav-links">
    <li><a href="index.html" data-page="home">Home</a></li>
    <li><a href="about.html" data-page="about">About</a></li>
    <li><a href="courses.html" data-page="courses">Courses</a></li>
    <li><a href="online-classes.html" data-page="online">Online Classes</a></li>
    <li><a href="trainers.html" data-page="trainers">Trainers</a></li>
    <li><a href="achievements.html" data-page="achievements">Achievements</a></li>
    <li><a href="tournaments.html" data-page="tournaments">Tournaments</a></li>
    <li><a href="blog.html" data-page="blog">Blog</a></li>
    <li><a href="gallery.html" data-page="gallery">Gallery</a></li>
    <li><a href="testimonials.html" data-page="testimonials">Reviews</a></li>
    <li><a href="contact.html" data-page="contact">Contact</a></li>
  </ul>
  <div class="nav-actions">
    <a href="login.html" class="nav-login">Login</a>
    <a href="register.html" class="nav-enroll">Enroll Now</a>
  </div>
</nav>`;

const FOOTER_HTML = `
<footer>
  <div class="footer-top">
    <div class="footer-brand">
      <div class="footer-brand-name">♞ Knight<span>Vision</span></div>
      <p>World-class chess education for every level — from first moves to FIDE titles. Building champions, sharpening minds since 2012.</p>
      <div class="footer-socials">
        <a href="#" class="social-icon" title="Facebook">f</a>
        <a href="#" class="social-icon" title="Instagram">📷</a>
        <a href="#" class="social-icon" title="YouTube">▶</a>
        <a href="#" class="social-icon" title="Twitter/X">𝕏</a>
        <a href="#" class="social-icon" title="WhatsApp">💬</a>
        <a href="#" class="social-icon" title="Lichess">♟</a>
      </div>
    </div>
    <div class="footer-col">
      <h4>Programs</h4>
      <ul>
        <li><a href="courses.html">Chess Foundations</a></li>
        <li><a href="courses.html">Tactical Mastery</a></li>
        <li><a href="courses.html">Tournament Prep</a></li>
        <li><a href="courses.html">Junior Chess Club</a></li>
        <li><a href="online-classes.html">Online Live Classes</a></li>
        <li><a href="courses.html">GM Mentorship</a></li>
      </ul>
    </div>
    <div class="footer-col">
      <h4>Academy</h4>
      <ul>
        <li><a href="about.html">About Us</a></li>
        <li><a href="trainers.html">Our Coaches</a></li>
        <li><a href="achievements.html">Achievements</a></li>
        <li><a href="tournaments.html">Tournaments</a></li>
        <li><a href="gallery.html">Gallery</a></li>
        <li><a href="blog.html">Blog</a></li>
      </ul>
    </div>
    <div class="footer-col">
      <h4>Support</h4>
      <ul>
        <li><a href="contact.html">Contact Us</a></li>
        <li><a href="register.html">Register</a></li>
        <li><a href="#">FAQ</a></li>
        <li><a href="#">Privacy Policy</a></li>
        <li><a href="#">Terms of Service</a></li>
        <li><a href="login.html">Student Login</a></li>
      </ul>
    </div>
  </div>
  <div class="footer-bottom">
    <span>© 2026 KnightVision Chess Academy. All rights reserved.</span>
    <span style="color:rgba(255,255,255,.3)">Bogra, Rajshahi, Bangladesh &nbsp;|&nbsp; +880 1712-345678 &nbsp;|&nbsp; info@knightvision.academy</span>
  </div>
</footer>`;

/* Chess board builder */
function buildChessBoard(containerId, pieces3d = true) {
  const container = document.getElementById(containerId);
  if (!container) return;
  const pieceMap = {
    '00':'♜','01':'♞','02':'♝','03':'♛','04':'♚','05':'♝','06':'♞','07':'♜',
    '10':'♟','11':'♟','12':'♟','13':'♟','14':'♟','15':'♟','16':'♟','17':'♟',
    '60':'♙','61':'♙','62':'♙','63':'♙','64':'♙','65':'♙','66':'♙','67':'♙',
    '70':'♖','71':'♘','72':'♗','73':'♕','74':'♔','75':'♗','76':'♘','77':'♖'
  };
  container.className = pieces3d ? 'chess-3d-board' : 'chess-flat-board';
  for (let r = 0; r < 8; r++) {
    for (let c = 0; c < 8; c++) {
      const sq = document.createElement('div');
      sq.className = (r + c) % 2 === 0 ? 'sq-l' : 'sq-d';
      const p = pieceMap['' + r + c];
      if (p) sq.textContent = p;
      container.appendChild(sq);
    }
  }
}

/* Active nav highlight */
function highlightNav() {
  const page = document.body.dataset.page;
  document.querySelectorAll('.nav-links a').forEach(a => {
    if (a.dataset.page === page) a.classList.add('active');
  });
}

/* FAQ accordion */
function initFAQ() {
  document.querySelectorAll('.faq-item').forEach(item => {
    item.querySelector('.faq-q')?.addEventListener('click', () => {
      item.classList.toggle('open');
    });
  });
}

/* Inject nav + footer */
document.addEventListener('DOMContentLoaded', () => {
  const navEl = document.getElementById('nav-placeholder');
  if (navEl) navEl.outerHTML = NAV_HTML;
  const footerEl = document.getElementById('footer-placeholder');
  if (footerEl) footerEl.outerHTML = FOOTER_HTML;
  highlightNav();
  initFAQ();
  // Smooth scroll
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const t = document.querySelector(a.getAttribute('href'));
      if (t) { e.preventDefault(); t.scrollIntoView({behavior:'smooth', block:'start'}); }
    });
  });
});
