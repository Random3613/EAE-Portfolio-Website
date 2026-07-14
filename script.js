/* ═══════════════════════════════════════════════════════════════════════════
   PORTFOLIO SCRIPT
   Dynamically loads content from data.js — students should NOT edit this file.
═══════════════════════════════════════════════════════════════════════════ */

document.addEventListener('DOMContentLoaded', () => {
  renderNavLogo();
  renderHero();
  renderAbout();
  renderSkills();
  renderAchievements();
  renderProjects();
  renderCertifications();
  renderFooter();
  initEqualizer();
  initNavToggle();
  initModal();
  initSmoothScroll();
});

/* ═══════════════════════════════════════════════════════════════════════════
   RENDER FUNCTIONS
═══════════════════════════════════════════════════════════════════════════ */

function renderNavLogo() {
  const el = document.getElementById('navLogo');
  if (el && portfolioData.personal) {
    el.textContent = portfolioData.personal.name || 'Portfolio';
  }
}

function renderHero() {
  const nameEl = document.getElementById('heroName');
  const taglineEl = document.getElementById('heroTagline');
  if (nameEl && portfolioData.personal) {
    nameEl.textContent = portfolioData.personal.name || '[Student Name Here]';
  }
  if (taglineEl && portfolioData.personal) {
    taglineEl.textContent = portfolioData.personal.tagline || '';
  }
}

function renderAbout() {
  const imgEl = document.getElementById('profileImage');
  const textEl = document.getElementById('aboutText');
  if (imgEl && portfolioData.personal && portfolioData.personal.profileImage) {
    imgEl.src = portfolioData.personal.profileImage;
  }
  if (textEl && portfolioData.personal && portfolioData.personal.about) {
    const paragraphs = portfolioData.personal.about;
    textEl.innerHTML = paragraphs.map(p => `<p>${p}</p>`).join('');
  }
}

function renderSkills() {
  const grid = document.getElementById('skillsGrid');
  if (!grid || !portfolioData.skills) return;
  grid.innerHTML = portfolioData.skills.map(skill => `
    <div class="skill-card">
      <div class="icon">${skill.icon || '🎵'}</div>
      <h3>${skill.name || '[Skill Name]'}</h3>
      <p>${skill.description || ''}</p>
    </div>
  `).join('');
}

function renderAchievements() {
  const grid = document.getElementById('achievementsGrid');
  if (!grid || !portfolioData.achievements) return;
  grid.innerHTML = portfolioData.achievements.map((ach, idx) => `
    <div class="badge-card" data-type="achievement" data-index="${idx}">
      <div class="badge-icon">${ach.icon || '🏆'}</div>
      <h3>${ach.title || '[Achievement Title Here]'}</h3>
      <span class="badge-category">${ach.category || ''}</span>
    </div>
  `).join('');
}

function renderProjects() {
  const grid = document.getElementById('projectsGrid');
  if (!grid || !portfolioData.projects) return;
  grid.innerHTML = portfolioData.projects.map((proj, idx) => `
    <div class="album-card" data-type="project" data-index="${idx}">
      <img src="${proj.imagePath || 'images/projects/project-placeholder.png'}" alt="${proj.title || 'Project'}" />
      <div class="album-overlay">
        <h3>${proj.title || '[Project Title Here]'}</h3>
        <p>${proj.category || ''}</p>
      </div>
    </div>
  `).join('');
}


function renderCertifications() {
  const grid = document.getElementById('certsGrid');
  if (!grid || !portfolioData.certifications) return;
  grid.innerHTML = portfolioData.certifications.map(cert => {
    const linkHTML = cert.filePath
      ? `<a href="${cert.filePath}" target="_blank">View Certificate</a>`
      : `<span style="color:#666;">Certificate placeholder</span>`;
    return `
      <div class="cert-card">
        <h3>${cert.title || '[Certificate Title]'}</h3>
        <p>${cert.issuer || ''} ${cert.date ? '• ' + cert.date : ''}</p>
        ${linkHTML}
      </div>
    `;
  }).join('');
}


function renderFooter() {
  const el = document.getElementById('footerText');
  if (el && portfolioData.personal) {
    const name = portfolioData.personal.name || 'Student';
    el.textContent = `© ${new Date().getFullYear()} ${name}. All rights reserved.`;
  }
}

/* ═══════════════════════════════════════════════════════════════════════════
   EQUALIZER ANIMATION
═══════════════════════════════════════════════════════════════════════════ */

function initEqualizer() {
  const eq = document.getElementById('equalizer');
  if (!eq) return;
  const barCount = 40;
  for (let i = 0; i < barCount; i++) {
    const bar = document.createElement('div');
    bar.className = 'eq-bar';
    bar.style.height = `${Math.random() * 100 + 20}px`;
    bar.style.animationDelay = `${Math.random() * 0.5}s`;
    bar.style.animationDuration = `${0.4 + Math.random() * 0.5}s`;
    eq.appendChild(bar);
  }
}

/* ═══════════════════════════════════════════════════════════════════════════
   MOBILE NAV TOGGLE
═══════════════════════════════════════════════════════════════════════════ */

function initNavToggle() {
  const toggle = document.getElementById('navToggle');
  const links = document.getElementById('navLinks');
  if (!toggle || !links) return;
  toggle.addEventListener('click', () => {
    links.classList.toggle('active');
  });
  links.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      links.classList.remove('active');
    });
  });
}

/* ═══════════════════════════════════════════════════════════════════════════
   SMOOTH SCROLL
═══════════════════════════════════════════════════════════════════════════ */

function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
}

/* ═══════════════════════════════════════════════════════════════════════════
   MODAL SYSTEM
═══════════════════════════════════════════════════════════════════════════ */

function initModal() {
  const overlay = document.getElementById('modalOverlay');
  const modal = document.getElementById('modal');
  const closeBtn = document.getElementById('modalClose');
  const content = document.getElementById('modalContent');

  if (!overlay || !modal || !closeBtn || !content) return;

  // Close modal
  const closeModal = () => {
    const audio = document.getElementById('modalAudio');
    if (audio) {
      audio.pause();
      audio.currentTime = 0;
    }
    overlay.classList.remove('active');
  };
  closeBtn.addEventListener('click', closeModal);
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) closeModal();
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
  });

  // Open modal for achievements
  document.querySelectorAll('.badge-card').forEach(card => {
    card.addEventListener('click', () => {
      const idx = parseInt(card.dataset.index, 10);
      const ach = portfolioData.achievements[idx];
      if (!ach) return;

      const imgHTML = ach.imagePath
        ? `<img src="${ach.imagePath}" alt="${ach.title}" />`
        : `<div class="placeholder-image">Add your photo here</div>`;

      const certHTML = ach.certificatePath
        ? `<a class="cert-link" href="${ach.certificatePath}" target="_blank">View Certificate</a>`
        : `<p style="color:#666;">Certificate placeholder</p>`;

      content.innerHTML = `
        ${imgHTML}
        <h2>${ach.title || '[Achievement Title Here]'}</h2>
        <p class="meta">${ach.category || ''} ${ach.date ? '• ' + ach.date : ''} ${ach.organisation ? '• ' + ach.organisation : ''}</p>
        <p>${ach.description || '[Achievement Description Here]'}</p>
        ${certHTML}
      `;
      overlay.classList.add('active');
    });
  });

  function initAudioPlayer() {
    const audio = document.getElementById('modalAudio');
    const playBtn = document.getElementById('audioPlayBtn');
    const progressContainer = document.getElementById('audioProgressContainer');
    const progressBar = document.getElementById('audioProgressBar');
    const timeDisplay = document.getElementById('audioTime');
    if (!audio || !playBtn) return;

    function formatTime(seconds) {
      const m = Math.floor(seconds / 60);
      const s = Math.floor(seconds % 60);
      return `${m}:${s < 10 ? '0' : ''}${s}`;
    }

    playBtn.addEventListener('click', () => {
      if (audio.paused) {
        audio.play();
        playBtn.textContent = '⏸';
      } else {
        audio.pause();
        playBtn.textContent = '▶';
      }
    });

    audio.addEventListener('timeupdate', () => {
      if (audio.duration) {
        const pct = (audio.currentTime / audio.duration) * 100;
        progressBar.style.width = pct + '%';
        timeDisplay.textContent = `${formatTime(audio.currentTime)} / ${formatTime(audio.duration)}`;
      }
    });

    audio.addEventListener('ended', () => {
      playBtn.textContent = '▶';
      progressBar.style.width = '0%';
    });

    progressContainer.addEventListener('click', (e) => {
      const rect = progressContainer.getBoundingClientRect();
      const pct = (e.clientX - rect.left) / rect.width;
      audio.currentTime = pct * audio.duration;
    });

    audio.addEventListener('loadedmetadata', () => {
      timeDisplay.textContent = `0:00 / ${formatTime(audio.duration)}`;
    });
  }

  // Open modal for projects
  document.querySelectorAll('.album-card').forEach(card => {
    card.addEventListener('click', () => {
      const idx = parseInt(card.dataset.index, 10);
      const proj = portfolioData.projects[idx];
      if (!proj) return;

      const imgHTML = proj.imagePath
        ? `<img src="${proj.imagePath}" alt="${proj.title}" />`
        : `<div class="placeholder-image">Add your project image here</div>`;

      const audioHTML = proj.videoLink
        ? `<div class="audio-player">
            <button class="audio-play-btn" id="audioPlayBtn">▶</button>
            <div class="audio-progress-container" id="audioProgressContainer">
              <div class="audio-progress-bar" id="audioProgressBar"></div>
            </div>
            <span class="audio-time" id="audioTime">0:00 / 0:00</span>
          </div>
          <audio id="modalAudio" src="${proj.videoLink}" preload="metadata"></audio>`
        : '';

      function isFilledIn(val) {
        if (!val || !val.trim()) return false;
        return !/^\[.*\]$/.test(val.trim());
      }

      function section(heading, value) {
        return isFilledIn(value) ? `<h4>${heading}</h4><p>${value}</p>` : '';
      }

      content.innerHTML = `
        ${imgHTML}
        <h2>${isFilledIn(proj.title) ? proj.title : ''}</h2>
        ${isFilledIn(proj.category) ? `<p class="meta">${proj.category}</p>` : ''}
        ${audioHTML}
        ${section('Overview', proj.problem)}
        ${section('Description', proj.solution)}
        ${section('My Role', proj.myRole)}
        ${section('Technologies Used', proj.technologiesUsed)}
        ${section('Journey', proj.journey)}
        ${section('Outcome', proj.outcome)}
        ${section('Lessons Learned', proj.lessonsLearned)}
      `;

      if (proj.videoLink) {
        initAudioPlayer();
      }

      overlay.classList.add('active');
    });
  });
}
