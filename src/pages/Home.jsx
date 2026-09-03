import { useState } from 'react'
import '../App.css'

const cards = [
  { icon: '🎓', title: 'الكورسات الدراسية', text: 'تصفح الكورسات والدروس التعليمية' },
  { icon: '📚', title: 'المكتبة الرقمية', text: 'كتب ومراجع ومصادر تعليمية' },
  { icon: '📝', title: 'المواد الدراسية', text: 'الوصول إلى جميع المواد' },
  { icon: '📅', title: 'جدول الامتحانات', text: 'تابع مواعيد الاختبارات' },
  { icon: '⚛️', title: 'العلوم والمختبرات', text: 'استكشف العلوم والتجارب' },
  { icon: '⚙️', title: 'لوحة تحكم المعلم', text: 'إدارة المحتوى والمتابعة' },
  { icon: '🎧', title: 'دعم فني مباشر', text: 'نحن هنا لمساعدتك' },
  {
    icon: '🤖',
    title: 'JAX - AI',
    text: 'مساعدك الذكي داخل المنصة',
    new: true,
  },
]

const englishCards = [
  {
    icon: '🎓',
    title: 'Educational Courses',
    text: 'Browse courses and educational lessons',
  },
  {
    icon: '📚',
    title: 'Digital Library',
    text: 'Books, references and educational resources',
  },
  {
    icon: '📝',
    title: 'Study Subjects',
    text: 'Access all study subjects',
  },
  {
    icon: '📅',
    title: 'Exam Schedule',
    text: 'Follow examination dates',
  },
  {
    icon: '⚛️',
    title: 'Science & Laboratories',
    text: 'Explore science and experiments',
  },
  {
    icon: '⚙️',
    title: 'Teacher Dashboard',
    text: 'Manage content and follow-up',
  },
  {
    icon: '🎧',
    title: 'Live Technical Support',
    text: 'We are here to help you',
  },
  {
    icon: '🤖',
    title: 'JAX - AI',
    text: 'Your intelligent assistant inside the platform',
    new: true,
  },
]

function Home() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [darkMode, setDarkMode] = useState(false)
  const [selectedCard, setSelectedCard] = useState(null)

  // الإضافات المطلوبة
  const [showDeveloperSignature, setShowDeveloperSignature] = useState(false)
  const [showLegalNote, setShowLegalNote] = useState(false)
  const [english, setEnglish] = useState(false)

  const currentCards = english ? englishCards : cards

  return (
    <div
      className={`home-page ${darkMode ? 'dark-mode' : ''}`}
      dir={english ? 'ltr' : 'rtl'}
    >

      {/* العبارة الذهبية */}
      <div className="quote-bar">
        <span>
          {english
            ? 'O Allah, teach us what benefits us, benefit us with what You have taught us, and increase us in knowledge.'
            : 'اللهم علّمنا ما ينفعنا، وانفعنا بما علمتنا، وزدنا بك علمًا'}
        </span>
      </div>

      {/* القائمة الجانبية */}
      <aside className={`side-menu ${menuOpen ? 'open' : ''}`}>
        <div className="side-menu-header">
          <h2>
            {english ? 'Al-Akkad Platform' : 'منصة العقاد'}
          </h2>

          <button
            className="close-menu"
            onClick={() => setMenuOpen(false)}
          >
            ×
          </button>
        </div>

        <div className="side-menu-items">

          <button>
            {english ? 'Create Account' : 'إنشاء حساب'}
          </button>

          <button>
            {english ? 'Login' : 'تسجيل دخول'}
          </button>

          <button>
            {english ? 'Main Menu' : 'القائمة الرئيسية'}
          </button>

          <div className="menu-divider"></div>

          <button>
            {english ? 'My Account' : 'حسابي'}
          </button>

        </div>
      </aside>

      {/* خلفية القائمة */}
      {menuOpen && (
        <div
          className="menu-overlay"
          onClick={() => setMenuOpen(false)}
        ></div>
      )}

      {/* الهيدر */}
      <header className="navbar">

        {/* زر الثلاث شرط */}
        <button
          className="menu-button"
          onClick={() => setMenuOpen(true)}
          aria-label={english ? 'Open menu' : 'فتح القائمة'}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* الشعار */}
        <div className="brand">

          <div className="book-logo">
            <img
              src="/nz7.png"
              alt="NZ7"
              className="nz7-logo"
            />
          </div>

          <div>
            <div className="brand-title">
              {english ? 'Al-Akkad Platform' : 'منصة العقاد'}
            </div>

            <div className="brand-subtitle">
              JAX EDUCATIONAL
            </div>
          </div>

        </div>

        {/* رصيد الطالب */}
        <div className="student-balance">

          <span className="balance-label">
            {english ? 'Student Balance' : 'رصيد الطالب'}
          </span>

          <strong>
            {english ? '0 Points' : '0 نقطة'}
          </strong>

        </div>

        {/* أزرار الهيدر */}
        <div className="header-actions">

          <button className="contact-btn">
            {english ? 'Contact Us' : 'تواصل معنا'}
          </button>

          {/* زر اللغة */}
          <button
            className="language-btn"
            onClick={() => setEnglish(!english)}
            aria-label="Change Language"
          >
            {english ? 'العربية' : 'English'}
          </button>

          {/* Dark Mode */}
          <button
            className="dark-mode-btn"
            onClick={() => setDarkMode(!darkMode)}
            aria-label={
              english
                ? 'Toggle dark mode'
                : 'تبديل الوضع الليلي'
            }
          >
            {darkMode ? '☀️' : '🌙'}
          </button>

          <button className="profile-btn">
            👤
          </button>

        </div>

      </header>

      {/* الترحيب */}
      <main>

        <section className="welcome">

          <span className="welcome-label">

            <span className="welcome-blue">
              {english ? 'Welcome' : 'أهلاً بك'}
            </span>

            <span className="welcome-space">
              {' '}
            </span>

            {/* تم تغيير كلمة "في" إلى الأزرق */}
            <span className="welcome-blue">
              {english ? 'to' : 'في'}
            </span>

            <span className="welcome-space">
              {' '}
            </span>

            <span className="welcome-red">
              {english ? 'Education Center' : 'مركز التعليم'}
            </span>

          </span>

          <p className="welcome-description">
            {english
              ? 'Everything you need for your educational journey in one place'
              : 'كل ما تحتاجه لرحلتك التعليمية في مكان واحد'}
          </p>

        </section>

        {/* الكروت */}
        <section className="dashboard-grid">

          {currentCards.map((card, index) => (

            <button
              key={card.title}
              onClick={() => setSelectedCard(index)}
              className={`
                dashboard-card
                ${card.new ? 'jax-card' : ''}
                ${selectedCard === index ? 'active-card' : ''}
              `}
            >

              {card.new && (
                <span className="new-badge">
                  NEW
                </span>
              )}

              <div className="card-icon">
                {card.icon}
              </div>

              <div className="card-content">

                <h2>
                  {card.title}
                </h2>

                <p>
                  {card.text}
                </p>

              </div>

              <span className="card-arrow">
                {english ? '→' : '←'}
              </span>

            </button>

          ))}

        </section>

        {/* بيانات الإدارة والتطوير */}
        <section className="admin-info">

          <div className="admin-item admin-manager">

            <span>
              {english ? 'School Manager:' : 'مدير المدرسة:'}
            </span>

            <strong>
              صلاح جلال حبشي
            </strong>

          </div>

          <div className="admin-item admin-developer">

            <span>
              {english
                ? 'Platform & Bot Developer:'
                : 'مطور المنصة والبوت:'}
            </span>

            {/* اسم المطور أصبح زر */}
            <button
              className="developer-name"
              onClick={() =>
                setShowDeveloperSignature(!showDeveloperSignature)
              }
            >
              نوذاد محمد محمود هلال
            </button>

          </div>

        </section>

        {/* =====================================================
            بصمة الفخر
        ===================================================== */}

        {showDeveloperSignature && (

          <section className="developer-note">

            <div className="developer-note-logo-wrapper">
              <img
                src="/nz7.png"
                alt="NZ7"
                className="developer-note-logo"
              />
            </div>

            <h3>
              🇪🇬 {english ? 'Pride Signature' : 'بصمة فخر'}
            </h3>

            <div className="developer-quote">

              {english
                ? '«Not merely lines of code… but work I built with an idea, developed with knowledge, and completed with effort.»'
                : '«ليست مجرد أسطر في كود… بل عملٌ بنيته بفكرة، وطورته بعلم، وأكملته بجهد.»'}

            </div>

            <div className="developer-note-text">

              {english ? (
                <>
                  <p>
                    I, <strong>Nouzad Mohamed Mahmoud Helal</strong>,
                    take pride in having built and developed this platform
                    and its associated bot programmatically, starting from
                    the idea and implementation until reaching the form
                    in which the project appears today.
                  </p>

                  <p>
                    My goal in this work was not to own what I built.
                    The ownership of the project belongs entirely to the
                    <strong>
                      {' '}Ministry of Education and Technical Education
                    </strong>.
                    My goal was to use my programming knowledge and
                    experience to build a project that serves education
                    and leaves a real impact.
                  </p>

                  <p>
                    I place my name here not as the owner, but as the
                    programmer who wrote, built, and developed this work,
                    leaving within it a part of his knowledge, time,
                    and effort.
                  </p>

                  <p>
                    The platform is owned by the Ministry at
                    <strong> 100%</strong>,
                    while the programming and development in this project
                    are my signature.
                  </p>

                  <p>
                    This project carries the essence of my knowledge,
                    thoughts, and effort. Contributing to the development
                    of an educational platform that helps build a more
                    knowledgeable and capable generation is an honor I
                    take pride in and a responsibility whose value I
                    believe in.
                  </p>

                  <p>
                    I am proud that this work is part of my journey as a
                    programmer, and that it represents one of the results
                    of what I have learned and dedicated to serving a
                    project connected to education and the future of
                    the children of my country.
                  </p>

                  <p>
                    This is my signature… and this is my pride.
                    <br />
                    If I am to leave an impact, let it be an impact that
                    benefits my country and contributes to its progress.
                  </p>
                </>
              ) : (
                <>
                  <p>
                    أعتزّ أنا <strong>نوذاد محمد محمود هلال</strong> بأنني
                    تولّيت بناء وتطوير هذه المنصة والبوت المرتبط بها
                    برمجيًا، بدايةً من الفكرة والتنفيذ، وصولًا إلى الصورة
                    التي يظهر بها المشروع اليوم.
                  </p>

                  <p>
                    لم يكن هدفي من هذا العمل أن أمتلك ما بنيته، فملكية
                    المشروع تعود كاملةً إلى
                    <strong>
                      {' '}وزارة التربية والتعليم والتعليم الفني
                    </strong>،
                    وإنما كان هدفي أن أُسخّر ما أمتلكه من معرفة وخبرة
                    برمجية في بناء مشروع يخدم التعليم ويترك أثرًا حقيقيًا.
                  </p>

                  <p>
                    أضع اسمي هنا لا باعتباره اسم المالك، وإنما باعتباره
                    اسم المبرمج الذي كتب وبنى وطوّر هذا العمل، وترك فيه
                    جزءًا من علمه ووقته وجهده.
                  </p>

                  <p>
                    فالمنصة ملكٌ للوزارة بنسبة
                    <strong> 100%</strong>،
                    والبرمجة والتطوير في هذا المشروع هي بصمتي.
                  </p>

                  <p>
                    يحمل هذا المشروع خلاصة علمي، وفكري، وجهدي؛ فأن أُسهم
                    في تطوير منصة تخدم التعليم وتُسهم في بناء جيلٍ أكثر
                    علمًا وقدرة، هو شرف أعتز به ومسؤولية أؤمن بقيمتها.
                  </p>

                  <p>
                    وأعتز بأن يكون هذا العمل جزءًا من مسيرتي كمبرمج،
                    وأن تكون إحدى ثمار ما تعلمته وسخّرته في خدمة مشروع
                    يرتبط بالتعليم وبمستقبل أبناء وطني.
                  </p>

                  <p>
                    هذه بصمتي… وهذا فخري.
                    <br />
                    وإن كان لي أن أترك أثرًا، فليكن أثرًا ينفع بلدي
                    ويُضاف إلى مسيرة بنائه.
                  </p>
                </>
              )}

              <p className="developer-hashtags">
                #مصر_الحاضر_و_الحضاره_🇪🇬
                <br />
                #مصر_المستقبل_🇪🇬
              </p>

              <p className="developer-signature">
                {english
                  ? 'Programmer & Developer: Nouzad Mohamed Mahmoud Helal 🫆'
                  : 'المبرمج والمطور : نوذاد محمد محمود هلال 🫆'}
              </p>

            </div>

          </section>

        )}

        {/* =====================================================
            الحقوق القانونية
        ===================================================== */}

        <section className="project-legal-section">

          <button
            className="legal-footer-button"
            onClick={() => setShowLegalNote(!showLegalNote)}
          >
            {english
              ? 'All Rights Reserved © 2026–2027 Al-Akkad Platform'
              : 'جميع الحقوق محفوظة © 2026–2027 منصة العقاد'}
          </button>

        </section>

        {showLegalNote && (

          <section className="legal-note">

            <div className="legal-note-text">

              <h3>
                ⚖️{' '}
                {english
                  ? 'Legal Notice & Intellectual Property Rights'
                  : 'تنويه قانوني وبيان حقوق الملكية'}
              </h3>

              {english ? (
                <>
                  <p>
                    This educational platform and its associated bot are
                    the exclusive and complete property, 100%, of the
                    Ministry of Education and Technical Education.
                  </p>

                  <p>
                    All intellectual, administrative, and operational
                    property rights related to the platform, its components,
                    and systems belong to the Ministry of Education and
                    Technical Education. The programming or technical
                    contribution of any individual does not create any
                    ownership right over the platform, its brand, content,
                    or systems.
                  </p>

                  <p>
                    Any copying, reproduction, modification, redistribution,
                    or use of the platform, bot, or any of its components
                    outside the authorized framework constitutes a violation
                    of the rights and regulations governing the use of the
                    project and is subject to legal accountability under
                    applicable laws and regulations.
                  </p>

                  <p className="legal-contribution-title">
                    💻 Programming Contribution
                  </p>

                  <p>
                    <strong>
                      Nouzad Mohamed Mahmoud Helal
                    </strong>
                    {' — Programmer and Software Developer of the project.'}
                  </p>

                  <p>
                    His contribution to this project is limited to
                    programming, development, and technical implementation,
                    without creating any claim of ownership over the
                    platform, bot, or their rights.
                  </p>
                </>
              ) : (
                <>
                  <p>
                    تُعد هذه المنصة التعليمية والبوت التابع لها ملكية
                    حصرية وكاملة بنسبة <strong>100%</strong> لوزارة التربية
                    والتعليم والتعليم الفني.
                  </p>

                  <p>
                    وتعود جميع حقوق الملكية الفكرية والإدارية والتشغيلية
                    المتعلقة بالمنصة ومكوناتها وأنظمتها إلى وزارة التربية
                    والتعليم والتعليم الفني، ولا يترتب على المساهمة
                    البرمجية أو التقنية لأي فرد أي حق في ملكية المنصة
                    أو علامتها أو محتواها أو أنظمتها.
                  </p>

                  <p>
                    ويُعد أي نسخ أو إعادة إنتاج أو تعديل أو إعادة توزيع
                    أو استخدام للمنصة أو البوت أو أي من مكوناته خارج
                    الإطار المصرح به، مخالفةً للحقوق والضوابط المنظمة
                    لاستخدام المشروع، ويخضع للمساءلة وفقًا للقوانين
                    واللوائح المعمول بها.
                  </p>

                  <p className="legal-contribution-title">
                    💻 المساهمة البرمجية
                  </p>

                  <p>
                    <strong>
                      نوذاد محمد محمود هلال
                    </strong>
                    {' — المبرمج والمطور البرمجي للمشروع.'}
                  </p>

                  <p>
                    تقتصر مساهمته في هذا المشروع على البرمجة والتطوير
                    والتنفيذ التقني، دون أن يترتب على ذلك أي ادعاء بملكية
                    المنصة أو البوت أو حقوقهما.
                  </p>
                </>
              )}

            </div>

          </section>

        )}

      </main>

      {/* الفوتر */}
      <footer className="footer">

        <span className="footer-brand">
          JAX EDUCATIONAL
        </span>

        <span>
          Powered by JAX AI
        </span>

      </footer>

    </div>
  )
}

export default Home
