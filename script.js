'use strict';

/* ============================================================================
   CONFIG
   Everything personal / editable lives here.
   ============================================================================ */

const CONFIG = {

  // --------------------------------------------------------------------
  // 1. PASSWORD
  // --------------------------------------------------------------------
  password: 'flyhighmyprincess',

  // --------------------------------------------------------------------
  // 2. NAMES
  // --------------------------------------------------------------------
  names: {
    her: 'Anjali',
    you: 'Prince'
  },

  // --------------------------------------------------------------------
  // 3. TIMELINE
  // --------------------------------------------------------------------
  timeline: [
    {
      date: '4 August 2019',
      text: 'The first conversation.'
    },
    {
      date: 'Since childhood',
      text: "We've known each other since childhood."
    },
    {
      date: '18 September 2020',
      text: 'The day our story officially began.'
    },
    {
      date: '24 September 2020',
      text: 'The proposal.'
    },
    {
      date: '26 December 2022',
      text: 'Our first outing.'
    },
    {
      date: '30 August 2026',
      text: 'Today — your birthday.'
    }
  ],

  // --------------------------------------------------------------------
  // 4. GALLERY
  // Replace these paths later with your actual photos.
  // --------------------------------------------------------------------
  gallery: [
  {
    src: 'assets/images/Image2.jpg.jpeg',
    alt: 'A photo of Anjali and Prince',
    caption: ''
  },
  {
    src: 'assets/images/Image3.jpg.jpeg',
    alt: 'A photo of Anjali and Prince',
    caption: '"You made the flowers look even prettier." 🌹❤️'
  },
  {
    src: 'assets/images/Image4.jpg.jpeg',
    alt: 'A photo of Anjali and Prince',
    caption: 'You dressed up, and I lost my view Because somehow everything looked beautiful on you.” ❤️'
  },
  {
    src: 'assets/images/Image5.jpg.jpeg',
    alt: 'A photo of Anjali and Prince',
    caption: '“Every Peter needs his MJ, and I guess I found mine.” ❤️'
  },
  {
    src: 'assets/images/Image6.jpg.jpeg',
    alt: 'A photo of Anjali and Prince',
    caption: ''
  },
  {
    src: 'assets/images/Image7.jpeg',
    alt: 'A photo of Anjali and Prince',
    caption: '“The sea was beautiful, but you still caught my eye.” 🌊❤️'
  }
],

  // --------------------------------------------------------------------
  // 5. FEATURED MEMORIES
  // Replace these paths/captions later.
  // --------------------------------------------------------------------
  memories: [
    {
      src: 'assets/images/memory1.jpg',
      alt: 'A special memory',
      caption: 'Write a short line about this memory here.'
    },
    {
      src: 'assets/images/memory2.jpg',
      alt: 'A special memory',
      caption: 'Write a short line about this memory here.'
    },
    {
      src: 'assets/images/memory3.jpg',
      alt: 'A special memory',
      caption: 'Write a short line about this memory here.'
    }
  ],

  // --------------------------------------------------------------------
  // 6. QUIZ
  // These can be replaced later with your own inside-joke questions.
  // --------------------------------------------------------------------
  quiz: [
    {
      question: 'The auto driver asks for the fare. What should you give him?',
      options: [
        {
          text: 'Money',
          reaction: 'Wrong Answer'
        },
        {
          text: 'Your phone',
          reaction: 'Kya matlab log paise dete hai 😂'
        }
      ]
    },
  
    {
      question: 'What are you supposed to do when you go to the office?',
      options: [
        {
          text: 'Work',
          reaction: 'Wrong Answer'
        },
        {
          text: 'Watch reels',
          reaction: 'Kya matlab log kaam karte hai jaake 😂'
        }
      ]
    },
  
    {
      question: 'How do you pronounce the premium café brand?',
      options: [
        {
          text: 'Starbucks',
          reaction: 'Wrong Answer'
        },
        {
          text: 'Starbaksh',
          reaction: 'Kya matlab log galat naam se bulate hai 😂'
        }
      ]
    },
  
  ],

  // --------------------------------------------------------------------
  // 7. VIDEOS
  // Replace these later with your actual videos.
  // --------------------------------------------------------------------
  videos: [
    'assets/videos/video 1.mp4',
    'assets/videos/Video 2.mp4'
  ],

  // --------------------------------------------------------------------
  // 8. MUSIC
  // --------------------------------------------------------------------
  music: {
    src: 'assets/music/I_Think_They_Call_This_Love_Cover.mp3'
  },

  // --------------------------------------------------------------------
// 9. FINAL MESSAGE
// --------------------------------------------------------------------
finale: {
  line1: "Thank you for all the memories we've already made. 🖤😚",

  line2: `Happy Birthday, Anjali 🖤😚

Today is a really special day, because it's your day. And honestly, you are one of the most important person in my life.

We're almost going to complete 6 years together, and even after all these years, every time I meet you or talk to you, I still get the same excitement.

You are genuinely so special to me, and the best thing that has happened to my life in these years is you. I've become a much better person because of you. I know I still make mistakes, actually quite a few 😭, but okay, itna toh chalta hai. 😂

And honestly, even your getting angry at me, blocking me, and then me trying to convince you... But I actually enjoy that whole process secretly. 😭😂

Bas ab block mat karna, kyu ki firr saas nahi aayegi naa mujhe. 😭

You've always given me so much support, and I genuinely love spending time with you. Whether we're doing something special or just talking about random nonsense, being around you always feels good.

I feel really lucky to have such a beautiful and amazing girlfriend. And the way you roast me all the time... baaki kiski girlfriend itni funny hoti hai? 😂

I'm really grateful for all these years, all the memories we've made, and everything that's still waiting for us.

I love you the most, my cutie princess. 🖤😚`,

  signoff: "Until the next birthday… 🖤😚"
}
};


/* ============================================================================
   INIT
   ============================================================================ */

document.addEventListener('DOMContentLoaded', () => {

  applyConfigText();

  initGate();

  initHeroParticles();

  initMusic();

  initScrollReveal();

  initGallery();

  initMemories();

  initQuiz();

  initCounter();

  initVideos();

  initCake();

  initFinale();

});


/* ============================================================================
   TEXT INJECTION
   ============================================================================ */

function applyConfigText() {

  setText('hero-name', CONFIG.names.her);

  setText('finale-name', CONFIG.names.her);

  setText('finale-line-1', CONFIG.finale.line1);

  setText('finale-line-2', CONFIG.finale.line2);


  const signoff = document.querySelector('.finale__signoff');

  if (signoff) {
    signoff.innerHTML =
      `${escapeHtml(CONFIG.finale.signoff)}
       <span class="heart">❤</span>`;
  }


  setText(
    'quiz-result-text',
    CONFIG.quizResultText
  );

}


function setText(id, value) {

  const el = document.getElementById(id);

  if (el) {
    el.textContent = value;
  }

}


function escapeHtml(str) {

  const div = document.createElement('div');

  div.textContent = str;

  return div.innerHTML;

}


/* ============================================================================
   1. PASSWORD GATE
   ============================================================================ */

function initGate() {

  const gate = document.getElementById('gate');

  const form = document.getElementById('gate-form');

  const input = document.getElementById('gate-input');

  const message = document.getElementById('gate-message');

  const site = document.getElementById('site');


  if (!gate || !form || !input || !message || !site) {
    return;
  }


  const playfulWrongMessages = [

    'Hmm, not quite. Try again ❤',

    'Nope! Think harder 😄',

    "That's not it... one more try",

    'Close, but no. Keep guessing 💭'

  ];


  form.addEventListener('submit', (event) => {

    event.preventDefault();


    const entered = input.value.trim();


    if (
      entered.length > 0 &&
      entered.toLowerCase() ===
      CONFIG.password.toLowerCase()
    ) {

      unlockSite(gate, site);

    } else {

      showWrongPassword(
        message,
        input,
        playfulWrongMessages
      );

    }

  });

}


function unlockSite(gate, site) {
  gate.classList.add('is-unlocked');
  site.hidden = false;

  const audio = document.getElementById('bg-music');

  if (audio) {
    audio.src = CONFIG.music.src;
    audio.loop = true;
    audio.volume = 0.5;

    audio.play().catch(() => {
      console.log('Music could not autoplay.');
    });
  }

  window.setTimeout(() => {
    gate.setAttribute(
      'aria-hidden',
      'true'
    );
  }, 800);
}


function showWrongPassword(
  message,
  input,
  messages
) {

  const randomMessage =
    messages[
      Math.floor(
        Math.random() * messages.length
      )
    ];


  message.textContent =
    randomMessage;


  message.classList.remove(
    'is-shake'
  );


  void message.offsetWidth;


  message.classList.add(
    'is-shake'
  );


  input.value = '';

  input.focus();

}


/* ============================================================================
   2. HERO PARTICLES
   ============================================================================ */

function initHeroParticles() {

  const container =
    document.querySelector(
      '.hero__particles'
    );


  if (!container) {
    return;
  }


  const prefersReducedMotion =
    window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;


  const particleCount =
    prefersReducedMotion
      ? 0
      : 14;


  const fragment =
    document.createDocumentFragment();


  for (
    let i = 0;
    i < particleCount;
    i++
  ) {

    const particle =
      document.createElement('span');


    particle.className =
      'particle';


    const size =
      3 + Math.random() * 4;


    particle.style.width =
      `${size}px`;


    particle.style.height =
      `${size}px`;


    particle.style.left =
      `${Math.random() * 100}%`;


    particle.style.top =
      `${Math.random() * 100}%`;


    particle.style.animationDelay =
      `${Math.random() * 6}s`;


    particle.style.animationDuration =
      `${7 + Math.random() * 5}s`;


    fragment.appendChild(
      particle
    );

  }


  container.appendChild(
    fragment
  );

}


/* ============================================================================
   3. MUSIC + BEGIN BUTTON
   ============================================================================ */

function initMusic() {

  const beginButton =
    document.getElementById(
      'begin-button'
    );


  const musicToggle =
    document.getElementById(
      'music-toggle'
    );


  const audio =
    document.getElementById(
      'bg-music'
    );


  const storySection =
    document.getElementById(
      'story'
    );


  if (!beginButton) {
    return;
  }


  let musicUnavailable = false;


  if (audio) {

    audio.addEventListener(
      'error',
      () => {

        musicUnavailable = true;


        if (musicToggle) {
          musicToggle.hidden = true;
        }

      },
      {
        once: true
      }
    );

  }


  beginButton.addEventListener(
    'click',
    () => {

      if (
        musicToggle &&
        !musicUnavailable
      ) {

        musicToggle.hidden = false;

      }


      if (
        audio &&
        !musicUnavailable
      ) {

        const playPromise =
          audio.play();


        if (
          playPromise &&
          typeof playPromise.then ===
          'function'
        ) {

          playPromise
            .then(() => {

              setMusicToggleState(
                musicToggle,
                true
              );

            })
            .catch(() => {

              setMusicToggleState(
                musicToggle,
                false
              );

            });

        }

      }


      if (storySection) {

        storySection.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });

      }

    }
  );


  if (
    musicToggle &&
    audio
  ) {

    musicToggle.addEventListener(
      'click',
      () => {

        if (audio.paused) {

          audio.play()
            .then(() => {

              setMusicToggleState(
                musicToggle,
                true
              );

            })
            .catch(() => {

              setMusicToggleState(
                musicToggle,
                false
              );

            });

        } else {

          audio.pause();

          setMusicToggleState(
            musicToggle,
            false
          );

        }

      }
    );

  }

}


function setMusicToggleState(
  toggleButton,
  isPlaying
) {

  if (!toggleButton) {
    return;
  }


  toggleButton.classList.toggle(
    'is-playing',
    isPlaying
  );


  toggleButton.setAttribute(
    'aria-label',
    isPlaying
      ? 'Pause music'
      : 'Play music'
  );

}


/* ============================================================================
   4. SCROLL REVEAL
   ============================================================================ */

function initScrollReveal() {

  const revealElements =
    document.querySelectorAll(
      '[data-reveal]'
    );


  if (
    revealElements.length === 0
  ) {
    return;
  }


  const prefersReducedMotion =
    window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;


  if (
    prefersReducedMotion ||
    !('IntersectionObserver' in window)
  ) {

    revealElements.forEach(
      (el) =>
        el.classList.add(
          'is-visible'
        )
    );

    return;

  }


  const observer =
    new IntersectionObserver(
      (entries) => {

        entries.forEach(
          (entry) => {

            if (
              entry.isIntersecting
            ) {

              entry.target.classList.add(
                'is-visible'
              );


              observer.unobserve(
                entry.target
              );

            }

          }
        );

      },
      {
        threshold: 0.2,
        rootMargin:
          '0px 0px -60px 0px'
      }
    );


  revealElements.forEach(
    (el) =>
      observer.observe(el)
  );

}


function observeReveal(elements) {

  const prefersReducedMotion =
    window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;


  if (
    prefersReducedMotion ||
    !('IntersectionObserver' in window)
  ) {

    elements.forEach(
      (el) =>
        el.classList.add(
          'is-visible'
        )
    );

    return;

  }


  const observer =
    new IntersectionObserver(
      (entries) => {

        entries.forEach(
          (entry) => {

            if (
              entry.isIntersecting
            ) {

              entry.target.classList.add(
                'is-visible'
              );


              observer.unobserve(
                entry.target
              );

            }

          }
        );

      },
      {
        threshold: 0.2,
        rootMargin:
          '0px 0px -60px 0px'
      }
    );


  elements.forEach(
    (el) =>
      observer.observe(el)
  );

}


/* ============================================================================
   5. GALLERY + LIGHTBOX
   ============================================================================ */

   function initGallery() {
    const grid = document.getElementById('gallery-grid');
  
    if (!grid) {
      return;
    }
  
    grid.innerHTML = '';
  
    CONFIG.gallery.forEach((item, index) => {
      const card = document.createElement('article');
      card.className = 'gallery__card';
      card.setAttribute('tabindex', '0');
      card.setAttribute('role', 'button');
      card.setAttribute('aria-label', `Reveal photo ${index + 1}`);
  
      const img = document.createElement('img');
      img.className = 'gallery__img';
      img.src = item.src;
      img.alt = item.alt || `Memory ${index + 1}`;
      img.loading = 'lazy';
  
      const caption = document.createElement('p');
      caption.className = 'gallery__caption';
      caption.textContent = item.caption || '';
  
      const balloon = document.createElement('div');
      balloon.className = 'gallery__balloon';
      balloon.setAttribute('aria-hidden', 'true');
  
      card.appendChild(img);
      card.appendChild(caption);
      card.appendChild(balloon);
  
      let popped = false;
  
      function popBalloon() {
        if (popped) {
          return;
        }
  
        popped = true;
  
        // Create pop particles
        for (let i = 0; i < 10; i++) {
          const particle = document.createElement('span');
          particle.className = 'gallery__pop-particle';
  
          const angle = (Math.PI * 2 * i) / 10;
          const distance = 55 + Math.random() * 45;
  
          particle.style.setProperty(
            '--particle-x',
            `${Math.cos(angle) * distance}px`
          );
  
          particle.style.setProperty(
            '--particle-y',
            `${Math.sin(angle) * distance}px`
          );
  
          card.appendChild(particle);
  
          setTimeout(() => {
            particle.remove();
          }, 700);
        }
  
        card.classList.add('is-popped');
      }
  
      card.addEventListener('click', (event) => {
        // If the photo is already revealed, keep the existing lightbox behavior
        if (popped && event.target === img) {
          return;
        }
  
        popBalloon();
      });
  
      card.addEventListener('keydown', (event) => {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault();
          popBalloon();
        }
      });
  
      grid.appendChild(card);
    });
  }


function applyImageFallback(
  imgEl,
  label
) {

  imgEl.addEventListener(
    'error',
    () => {

      imgEl.style.display =
        'none';


      const placeholder =
        document.createElement(
          'div'
        );


      placeholder.className =
        'img-placeholder';


      placeholder.setAttribute(
        'aria-hidden',
        'true'
      );


      placeholder.style.display =
        'flex';


      placeholder.style.alignItems =
        'center';


      placeholder.style.justifyContent =
        'center';


      placeholder.style.textAlign =
        'center';


      placeholder.style.width =
        '100%';


      placeholder.style.height =
        imgEl.classList.contains(
          'gallery__img'
        )
          ? ''
          : '260px';


      placeholder.style.aspectRatio =
        imgEl.classList.contains(
          'gallery__img'
        )
          ? '4 / 5'
          : 'auto';


      placeholder.style.borderRadius =
        'inherit';


      placeholder.style.background =
        'var(--color-rose-pale)';


      placeholder.style.color =
        'var(--color-rose-deep)';


      placeholder.style.fontFamily =
        'var(--font-display)';


      placeholder.style.fontStyle =
        'italic';


      placeholder.style.fontSize =
        '0.95rem';


      placeholder.style.padding =
        '1rem';


      placeholder.textContent =
        label
          ? `Photo coming soon — ${label}`
          : 'Photo coming soon';


      imgEl.insertAdjacentElement(
        'afterend',
        placeholder
      );

    },
    {
      once: true
    }
  );

}


let lightboxState = {
  index: 0
};


function initLightbox() {

  const lightbox =
    document.getElementById(
      'lightbox'
    );


  const closeBtn =
    document.getElementById(
      'lightbox-close'
    );


  const prevBtn =
    document.getElementById(
      'lightbox-prev'
    );


  const nextBtn =
    document.getElementById(
      'lightbox-next'
    );


  if (
    !lightbox ||
    !closeBtn ||
    !prevBtn ||
    !nextBtn
  ) {
    return;
  }


  closeBtn.addEventListener(
    'click',
    closeLightbox
  );


  prevBtn.addEventListener(
    'click',
    () =>
      stepLightbox(-1)
  );


  nextBtn.addEventListener(
    'click',
    () =>
      stepLightbox(1)
  );


  lightbox.addEventListener(
    'click',
    (event) => {

      if (
        event.target === lightbox
      ) {

        closeLightbox();

      }

    }
  );


  document.addEventListener(
    'keydown',
    (event) => {

      if (lightbox.hidden) {
        return;
      }


      if (event.key === 'Escape') {
        closeLightbox();
      }


      if (
        event.key === 'ArrowLeft'
      ) {
        stepLightbox(-1);
      }


      if (
        event.key === 'ArrowRight'
      ) {
        stepLightbox(1);
      }

    }
  );

}


function openLightbox(index) {

  const lightbox =
    document.getElementById(
      'lightbox'
    );


  if (!lightbox) {
    return;
  }


  lightboxState.index =
    index;


  renderLightboxImage();


  lightbox.hidden =
    false;


  document.body.style.overflow =
    'hidden';

}


function closeLightbox() {

  const lightbox =
    document.getElementById(
      'lightbox'
    );


  if (!lightbox) {
    return;
  }


  lightbox.hidden =
    true;


  document.body.style.overflow =
    '';

}


function stepLightbox(direction) {

  const total =
    CONFIG.gallery.length;


  if (total === 0) {
    return;
  }


  lightboxState.index =
    (
      lightboxState.index +
      direction +
      total
    ) % total;


  renderLightboxImage();

}


function renderLightboxImage() {

  const image =
    document.getElementById(
      'lightbox-image'
    );


  const caption =
    document.getElementById(
      'lightbox-caption'
    );


  if (!image || !caption) {
    return;
  }


  const item =
    CONFIG.gallery[
      lightboxState.index
    ];


  image.hidden =
    false;


  image.src =
    item.src;


  image.alt =
    item.alt ||
    'A photo of us';


  caption.textContent =
    item.caption || '';


  image.onerror = () => {

    image.hidden =
      true;


    caption.textContent =
      `${
        item.caption
          ? item.caption + ' — '
          : ''
      }photo coming soon`;

  };

}


/* ============================================================================
   6. FEATURED MEMORIES
   ============================================================================ */

function initMemories() {

  const track =
    document.getElementById(
      'memories-track'
    );


  if (
    !track ||
    CONFIG.memories.length === 0
  ) {
    return;
  }


  const blocks = [];


  CONFIG.memories.forEach(
    (item, index) => {

      const block =
        document.createElement(
          'div'
        );


      block.className =
        'memories__block';


      if (index % 2 === 1) {

        block.classList.add(
          'memories__block--reverse'
        );

      }


      block.setAttribute(
        'data-reveal',
        ''
      );


      const media =
        document.createElement(
          'div'
        );


      media.className =
        'memories__media';


      const img =
        document.createElement(
          'img'
        );


      img.src =
        item.src;


      img.alt =
        item.alt ||
        'A memory';


      img.loading =
        'lazy';


      applyImageFallback(
        img,
        item.caption
      );


      const caption =
        document.createElement(
          'p'
        );


      caption.className =
        'memories__caption';


      caption.textContent =
        item.caption || '';


      media.appendChild(img);

      block.appendChild(media);

      block.appendChild(caption);

      track.appendChild(block);

      blocks.push(block);

    }
  );


  observeReveal(blocks);

}


/* ============================================================================
   7. QUIZ
   ============================================================================ */

let quizState = {
  currentIndex: 0,
  answered: false
};


function initQuiz() {

  const panel =
    document.getElementById(
      'quiz-panel'
    );


  const nextButton =
    document.getElementById(
      'quiz-next'
    );


  const resultPanel =
    document.getElementById(
      'quiz-result'
    );


  if (
    !panel ||
    CONFIG.quiz.length === 0
  ) {
    return;
  }


  renderQuizQuestion();


  if (nextButton) {

    nextButton.addEventListener(
      'click',
      () => {

        quizState.currentIndex += 1;


        if (
          quizState.currentIndex >=
          CONFIG.quiz.length
        ) {

          panel.hidden =
            true;


          if (resultPanel) {
            resultPanel.hidden =
              false;
          }

        } else {

          renderQuizQuestion();

        }

      }
    );

  }

}


function renderQuizQuestion() {

  const progress =
    document.getElementById(
      'quiz-progress'
    );


  const questionEl =
    document.getElementById(
      'quiz-question'
    );


  const optionsEl =
    document.getElementById(
      'quiz-options'
    );


  const reactionEl =
    document.getElementById(
      'quiz-reaction'
    );


  const nextButton =
    document.getElementById(
      'quiz-next'
    );


  if (
    !progress ||
    !questionEl ||
    !optionsEl ||
    !reactionEl
  ) {
    return;
  }


  const question =
    CONFIG.quiz[
      quizState.currentIndex
    ];


  if (!question) {
    return;
  }


  quizState.answered =
    false;


  progress.textContent =
    `Question ${
      quizState.currentIndex + 1
    } of ${CONFIG.quiz.length}`;


  questionEl.textContent =
    question.question;


  reactionEl.textContent =
    '\u00A0';


  optionsEl.innerHTML =
    '';


  if (nextButton) {
    nextButton.hidden =
      true;
  }


  question.options.forEach(
    (option) => {

      const button =
        document.createElement(
          'button'
        );


      button.type =
        'button';


      button.className =
        'quiz__option';


      button.textContent =
        option.text;


      button.addEventListener(
        'click',
        () => {

          if (quizState.answered) {
            return;
          }


          quizState.answered =
            true;


          Array.from(
            optionsEl.children
          ).forEach(
            (child) => {
              child.disabled =
                true;
            }
          );


          button.classList.add(
            'is-selected'
          );


          reactionEl.textContent =
            option.reaction;


          if (nextButton) {
            nextButton.hidden =
              false;
          }

        }
      );


      optionsEl.appendChild(
        button
      );

    }
  );

}


/* ============================================================================
   8. RELATIONSHIP COUNTER
   ============================================================================ */

function initCounter() {

  const counterSection =
    document.getElementById(
      'counter'
    );


  if (!counterSection) {
    return;
  }


  const startAttr =
    counterSection.getAttribute(
      'data-start'
    );


  const startDate =
    startAttr
      ? new Date(startAttr)
      : null;


  if (
    !startDate ||
    Number.isNaN(
      startDate.getTime()
    )
  ) {
    return;
  }


  updateCounter(
    startDate
  );


  window.setInterval(
    () =>
      updateCounter(
        startDate
      ),
    1000
  );

}


function updateCounter(
  startDate
) {

  const now =
    new Date();


  const duration =
    getCalendarDuration(
      startDate,
      now
    );


  setText(
    'count-years',
    duration.years
  );


  setText(
    'count-months',
    duration.months
  );


  setText(
    'count-days',
    duration.days
  );


  setText(
    'count-hours',
    duration.hours
  );


  setText(
    'count-minutes',
    duration.minutes
  );


  setText(
    'count-seconds',
    duration.seconds
  );

}


function getCalendarDuration(
  start,
  now
) {

  let years =
    now.getFullYear() -
    start.getFullYear();


  let months =
    now.getMonth() -
    start.getMonth();


  let days =
    now.getDate() -
    start.getDate();


  let hours =
    now.getHours() -
    start.getHours();


  let minutes =
    now.getMinutes() -
    start.getMinutes();


  let seconds =
    now.getSeconds() -
    start.getSeconds();


  if (seconds < 0) {

    seconds += 60;

    minutes -= 1;

  }


  if (minutes < 0) {

    minutes += 60;

    hours -= 1;

  }


  if (hours < 0) {

    hours += 24;

    days -= 1;

  }


  if (days < 0) {

    const daysInPrevMonth =
      new Date(
        now.getFullYear(),
        now.getMonth(),
        0
      ).getDate();


    days +=
      daysInPrevMonth;


    months -= 1;

  }


  if (months < 0) {

    months += 12;

    years -= 1;

  }


  return {
    years,
    months,
    days,
    hours,
    minutes,
    seconds
  };

}


/* ============================================================================
   9. VIDEO MONTAGE
   ============================================================================ */

function initVideos() {

  const wrap = document.getElementById('video-wrap');

  if (!wrap) {
    return;
  }

  if (!CONFIG.videos || CONFIG.videos.length === 0) {
    wrap.appendChild(createVideoFallback());
    return;
  }

  const bgMusic = document.getElementById('bg-music');

  CONFIG.videos.forEach((src) => {

    const playerWrap = document.createElement('div');
    playerWrap.className = 'video-section__player';

    const video = document.createElement('video');

    video.controls = true;
    video.muted = true;
    video.playsInline = true;
    video.preload = 'metadata';

    const source = document.createElement('source');
    source.src = src;
    source.type = 'video/mp4';

    video.appendChild(source);

    // Background music control
    let musicWasPlaying = false;

    video.addEventListener('play', () => {
      if (bgMusic && !bgMusic.paused) {
        musicWasPlaying = true;
        bgMusic.pause();
      } else {
        musicWasPlaying = false;
      }
    });

    video.addEventListener('pause', () => {
      if (bgMusic && musicWasPlaying) {
        bgMusic.play().catch(() => {});
        musicWasPlaying = false;
      }
    });

    video.addEventListener('ended', () => {
      if (bgMusic && musicWasPlaying) {
        bgMusic.play().catch(() => {});
        musicWasPlaying = false;
      }
    });

    video.addEventListener('error', () => {
      playerWrap.replaceWith(createVideoFallback());
    }, {
      once: true
    });

    playerWrap.appendChild(video);
    wrap.appendChild(playerWrap);
  });
}


function createVideoFallback() {

  const fallback =
    document.createElement(
      'div'
    );


  fallback.className =
    'video-section__empty';


  fallback.textContent =
    'Videos coming soon.';


  return fallback;

}


/* ============================================================================
   10. BIRTHDAY CAKE
   ============================================================================ */

function initCake() {

  const flame =
    document.getElementById(
      'candle-flame'
    );


  const hint =
    document.getElementById(
      'cake-hint'
    );


  const message =
    document.getElementById(
      'cake-message'
    );


  const confettiHost =
    document.getElementById(
      'cake-confetti'
    );


  if (!flame) {
    return;
  }


  let wishMade =
    false;


  const blowOutCandle =
    () => {

      if (wishMade) {
        return;
      }


      wishMade =
        true;


      flame.classList.add(
        'is-blown'
      );


      if (hint) {

        hint.textContent =
          'Wish made ❤';

      }


      if (message) {

        message.textContent =
          'Wish made? ❤';

      }


      spawnConfetti(
        confettiHost,
        18
      );

    };


  flame.addEventListener(
    'click',
    blowOutCandle
  );


  flame.addEventListener(
    'keydown',
    (event) => {

      if (
        event.key === 'Enter' ||
        event.key === ' '
      ) {

        event.preventDefault();

        blowOutCandle();

      }

    }
  );

}


function spawnConfetti(
  host,
  count
) {

  if (!host) {
    return;
  }


  const colors = [

    'var(--color-rose)',

    'var(--color-rose-deep)',

    'var(--color-rose-gold)',

    'var(--color-lavender)'

  ];


  for (
    let i = 0;
    i < count;
    i++
  ) {

    const piece =
      document.createElement(
        'span'
      );


    piece.className =
      'confetti-piece is-active';


    piece.style.background =
      colors[
        Math.floor(
          Math.random() *
          colors.length
        )
      ];


    piece.style.left =
      `${40 + Math.random() * 20}%`;


    const x =
      (Math.random() - 0.5) *
      160;


    const y =
      -(60 + Math.random() * 100);


    const rotate =
      Math.random() * 360;


    piece.style.setProperty(
      '--confetti-end',
      `translate(${x}px, ${y}px) rotate(${rotate}deg)`
    );


    host.appendChild(
      piece
    );


    window.setTimeout(
      () => piece.remove(),
      1300
    );

  }

}


/* ============================================================================
   11. FINALE
   ============================================================================ */

function initFinale() {

  const button =
    document.getElementById(
      'finale-button'
    );


  const reveal =
    document.getElementById(
      'finale-reveal'
    );


  const confettiHost =
    document.getElementById(
      'finale-confetti'
    );


  const fireworksHost =
    document.getElementById(
      'finale-fireworks'
    );


  if (
    !button ||
    !reveal
  ) {
    return;
  }


  let celebrated =
    false;


  button.addEventListener(
    'click',
    () => {

      if (celebrated) {
        return;
      }


      celebrated =
        true;


      reveal.hidden =
        false;


      button.disabled =
        true;


      spawnConfetti(
        confettiHost,
        26
      );


      spawnFireworks(
        fireworksHost,
        5
      );

    }
  );

}


function spawnFireworks(
  host,
  burstCount
) {

  if (!host) {
    return;
  }


  for (
    let b = 0;
    b < burstCount;
    b++
  ) {

    window.setTimeout(
      () => {

        const originX =
          15 +
          Math.random() * 70;


        const originY =
          20 +
          Math.random() * 50;


        const sparks =
          10;


        for (
          let s = 0;
          s < sparks;
          s++
        ) {

          const spark =
            document.createElement(
              'span'
            );


          spark.className =
            'firework is-active';


          spark.style.left =
            `${originX}%`;


          spark.style.top =
            `${originY}%`;


          const angle =
            (
              Math.PI * 2 * s
            ) / sparks;


          const distance =
            40 +
            Math.random() * 30;


          spark.style.setProperty(
            '--x',
            `${Math.cos(angle) * distance}px`
          );


          spark.style.setProperty(
            '--y',
            `${Math.sin(angle) * distance}px`
          );


          host.appendChild(
            spark
          );


          window.setTimeout(
            () => spark.remove(),
            1300
          );

        }

      },
      b * 260
    );

  }

}