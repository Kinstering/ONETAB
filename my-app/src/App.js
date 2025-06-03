import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY >= 100);
    };

    window.addEventListener('scroll', handleScroll);
    
    // Очистка
    return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const faqItems = [
    {
      question: '1. Який головний приз та як його отримати?',
      answer: 'Головний приз сезону ONETAB BATTLE — потужний ігровий ПК з відеокартою 5070 та топовими характеристиками.\n\nЩоб виграти його, потрібно зібрати квитки. Як отримати квиток:\n1. Купити онлайн на сайті (необмежена кількість)\n2. Взяти участь у батлі (1 участь - 1 квиток)\n3. Перемогти в батлі (1 перемога - 1 квиток)\n\nТобто ви можете НЕ БРАТИ участь у батлі, але змагатись за головний приз.\nНомер квитка буде відправлено учасникам розіграшу в телеграм.\n\nЧим активніші ви — тим більше квитків і шансів на перемогу!'
    },
    {
      question: '2. Як формується рейтинг сезону ONETAB BATTLE?',
      answer: 'Рейтинг гравців у кожній лізі залежить від результатів батлів:\n1. За перемогу гравець отримує +1 бал\n2. За поразку втрачає -1 бал\n3. При цьому загальна кількість балів не може бути нижчою за 0\n\nЧим більше перемог — тим вищий рейтинг. ТОП-10 гравців в кожній лізі, які мають найбільшу кількість балів, очолюють турнірну таблицю та будуть змагатись за першість сезону та призи від спонсорів сезону\n\nЦе мотивує змагатися активно та регулярно, адже кожен батл має значення.'
    },
    {
      question: '3. Де знайти розклад батлів?',
      answer: 'Після реєстрації кожен учасник додається до Telegram-каналу.\n\nУ каналі є три окремі гілки за локаціями. У кожній:\n1. Щотижневий розклад батлів\n2. За день до гри — опитування для підтвердження участі\n\nПерші 10 гравців, які підтвердили участь, грають матч 5х5 у визначений день та час.\nЯкщо бажаючих 20 — організовуються два матчі між різними командами.'
    },
    {
      question: '4. Коли буде розіграш головних призів?',
      answer: 'Розіграш призового пулу сезону ONETAB BATTLE відбудеться з 25 по 31 серпня.\n\nУ цей період пройдуть фінальні батли для PRO LEAGUE та LIGHT LEAGUE, які транслюватимуться на офіційній сторінці ONETAB у Twitch.\nПід час трансляції:\n- буде розіграно ігровий ПК\n- оголошено ТОП-3 найактивніших гравців сезону — тих, хто взяв участь у найбільшій кількості батлів\n- будуть розіграні додатквоі призи для глядачів.'
    }
  ];

  const [activeFAQ, setActiveFAQ] = React.useState(null);

  function toggleFAQ(idx) {
    setActiveFAQ(activeFAQ === idx ? null : idx);
  }

  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'rating', 'prizes', 'faq', 'contacts'];
      const scrollPos = window.scrollY + window.innerHeight / 2;

      for (let id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          const top = el.offsetTop;
          const bottom = top + el.offsetHeight;
          if (scrollPos >= top && scrollPos < bottom) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  return (
    <div className="App">
      <header className={`header ${scrolled ? 'scrolled' : ''}`}>
        <div className="container header-container">
          <div className="logo"></div>

          <nav className="menu">
            <a href="#home" className={activeSection === 'home' ? 'active' : ''}>Головна</a>
            <a href="#rating" className={activeSection === 'rating' ? 'active' : ''}>Рейтинг</a>
            <a href="#prizes" className={activeSection === 'prizes' ? 'active' : ''}>Призові місця</a>
            <a href="#faq" className={activeSection === 'faq' ? 'active' : ''}>FAQ</a>
            <a href="#contacts" className={activeSection === 'contacts' ? 'active' : ''}>Контакти</a>
          </nav>

          <a
            href="https://docs.google.com/document/d/147-LQRMKv2bSLODoIYEm0RciCtCc8_he7NLY-pv321c/edit?usp=sharing"
            className="header-button"
            target="_blank"
            rel="noopener noreferrer"
          >
            Регламент турніру
          </a>
        </div>
      </header>

      {/* Контент первой страницы */}
      <div className="first-page" id="home">
        <div className="container first-page-content">
          <div>
            <h1 className='main-text'>Onetab</h1>
            <h1 className='sub-text'>Battle</h1>
            <h2 className="prize-pool-text">ПРИЗОВИЙ ПУЛ — 99 999 грн</h2> {/* можно будет подставить число динамически */}
            <h3 className='description-text'>
              Сезон батлів з COUNTER STRIKE 2 — щоденні матчі між мікс-командами.<br />
              У фіналі топ-20 найкращих гравців сезону зійдуться в боротьбі<br />за призовий пул від спонсорів.<br /><br />
              Головний приз — потужний ігровий ПК з топовим залізом.
            </h3>
          </div>

          <div className="address-container">
            <div className="address-row">
              <h3 className='address-text'>вул Корольова, 24</h3>
              <h3 className='address-text'>вул Марсельська, 38</h3>
            </div>
            <div className="address-row">
              <h3 className='address-text'>вул І.Буніна, 42</h3>
            </div>
          </div>

          <button
            className="main-button"
            onClick={() => window.open('https://forms.gle/XFuNvptTreKPQHV29', '_blank')}
          >
            Реєстрація
          </button>
        </div>
      </div>

      {/* Контент второй страницы */}
      <div className="second-page" id="rating">
        <div className="container">
          <h2>Рейтинг</h2>
          <div className="image-row">
              <div className="image-block">
                <a href="https://example.com/league-1" target="_blank" rel="noopener noreferrer" className="image-block">
                  <div className="image image-left"></div>
                  <div className="image-footer">
                    <div className="footer-logo"></div>
                    <div className="footer-text">
                      <h3 className="second-main-text">Від 2000 ELO</h3>
                      <h3 className="second-league-text">PRO LEAGUE - CS 2 5X5 (MIX)</h3>
                      <h3 className="second-place-text">2 місяця • 01.06.2025 - 31.08.2025</h3>
                    </div>
                  </div>
                </a>
              </div>

            {/* Правая карточка */}
            <div className="image-block">
              <a href="https://example.com/league-2" target="_blank" rel="noopener noreferrer" className="image-block">
                <div className="image image-right"></div>
                <div className="image-footer">
                  <div className="footer-logo"></div>
                  <div className="footer-text">
                    <h3 className='second-main-text'>Від 2000 ELO</h3>
                    <h3 className='second-league-text'>PRO LEAGUE - CS 2 5X5 (MIX)</h3>
                    <h3 className='second-place-text'>2 місяця • 01.06.2025 - 31.08.2025</h3>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="third-page" id="prizes">
        <div className="container">
          <h2 className="third-title">Призові місця</h2>

          {/* ГОЛОВНИЙ ПРИЗ СЕЗОНУ */}
          <div className="third-grid-wrapper">
            <p className="third-description highlight">ГОЛОВНИЙ ПРИЗ СЕЗОНУ</p>
            <div className="prize-grid">
              {mainPrizes.map((prize, idx) => (
                <div className={`prize-card main-${idx + 1}`} key={`main-${idx}`}>
                  <div className="prize-image"></div>
                  <div className="prize-text">{prize.place} Місце</div>
                  <div className="prize-description-text">{prize.description}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Призи найактивнішим */}
          <div className="third-grid-wrapper">
            <p className="third-description">Призи найактивнішим</p>
            <div className="prize-grid">
              {activePrizes.map((prize, idx) => (
                <div className={`prize-card active-${idx + 1}`} key={`active-${idx}`}>
                  <div className="prize-image"></div>
                  <div className="prize-text">{prize.place} Місце</div>
                  <div className="prize-description-text">{prize.description}</div>
                </div>
              ))}
            </div>
          </div>

          {/* LIGHT LEAGUE */}
          <div className="third-grid-wrapper">
            <p className="third-description">LIGHT LEAGUE</p>
            <div className="prize-grid">
              {lightLeaguePrizes.map((prize, idx) => (
                <div className={`prize-card light-${idx + 1}`} key={`light-${idx}`}>
                  <div className="prize-image"></div>
                  <div className="prize-text">{prize.place} Місце</div>
                  <div className="prize-description-text">{prize.description}</div>
                </div>
              ))}
            </div>
          </div>

          {/* PRO LEAGUE */}
          <div className="third-grid-wrapper">
            <p className="third-description">PRO LEAGUE</p>
            <div className="prize-grid">
              {proLeaguePrizes.map((prize, idx) => (
                <div className={`prize-card pro-${idx + 1}`} key={`pro-${idx}`}>
                  <div className="prize-image"></div>
                  <div className="prize-text">{prize.place} Місце</div>
                  <div className="prize-description-text">{prize.description}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Партнери */}
        <div className="partners-section">
          <div className="partners-logos">
            <div className="partner-logo partner1"></div>
            <div className="partner-logo partner2"></div>
            <div className="partner-logo partner3"></div>
            <div className="partner-logo partner4"></div>
          </div>
        </div>

      </div>


      <div className="four-section" id="faq">
        <div className="container">
          <h1 className="foursection-title-text">FAQ</h1>

          <div className="faq-list">
          {faqItems.map(({ question, answer }, idx) => (
            <div
              className="faq-item"
              key={idx}
              onClick={() => toggleFAQ(idx)}
              style={{ userSelect: 'none' }}
            >
              <div className="faq-main-row">
                <p className="faq-text">{question}</p>
                <div className="faq-logo"></div>
              </div>

              <div className={`faq-answer ${activeFAQ === idx ? 'open' : ''}`}>
                {answer}
              </div>
            </div>
          ))}
          </div>
          <div className='four-section-under'>
            <h3 className='four-section-pre-main-text'>ХОЧЕШ ДІЗНАТИСЬ БІЛЬШЕ?</h3>
            <a href='https://docs.google.com/document/d/147-LQRMKv2bSLODoIYEm0RciCtCc8_he7NLY-pv321c/edit?usp=sharing'><button className="four-section-button">Дізнатись більше</button></a>
          </div>
        </div>
      </div>

      <div className="footer" id='contacts'>
        <div className="footer-inner">
          <div className="footer-side footer-left">
            <a href='https://www.instagram.com/onetab.ua?igsh=d3prc3d0YXQ4c2l4' class="footer-links"><p>Instagram</p></a>
          </div>

          <div className="footer-center">
            <h1 className='footer-main-text'>ONETAB</h1>
            <h2 className='footer-sub-text'>CYBER CLUB</h2>
            <div className="footer-addresses">
              <div className="address-left">
                <p>ВУЛ. КОРОЛЬОВА, 24<br />ВУЛ. БУНІНА, 42</p>
              </div>
              <div className="address-right">
                <p>ВУЛ. МАРСЕЛЬСЬКА, 38</p>
              </div>
            </div>
          </div>

          <div className="footer-side footer-right">
            <a href='https://t.me/OnetabUA' class="footer-links"><p>Telegram</p></a>
          </div>
        </div>
      </div>

    </div>
  );
}

const mainPrizes = [
  { place: 1, description: 'Мишка Logitech G Pro X Superlight'},
];

const activePrizes = [
  { place: 1, description: 'Мишка Logitech G Pro X Superlight'},
  { place: 2, description: 'Мишка Logitech G Pro X Superlight'},
  { place: 3, description: 'Мишка Logitech G Pro X Superlight'},
];

const lightLeaguePrizes = [
  { place: 1, description: 'Крісло для геймерів Proove Gaming Unit'},
  { place: 2, description: 'Навушники HyperX'},
  { place: 3, description: 'Клавіатура Coupe white, Миша Rate Pro, Коврик Radiance XL'},
  { place: 4, description: 'Мишка Logitech G Pro X Superlight'},
  { place: 5, description: 'Мишка Logitech G Pro X Superlight'},
];

const proLeaguePrizes = [
  { place: 1, description: 'Крісло для геймерів Proove Gaming NPC'},
  { place: 2, description: 'Геймерське крісло'},
  { place: 3, description: 'Пауербанк Anker'},
  { place: 4, description: 'Мишка Logitech G Pro X Superlight'},
  { place: 5, description: 'Мишка Logitech G Pro X Superlight'},
];

export default App;
