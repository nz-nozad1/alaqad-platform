import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../App.css'

import logoImage from '../assets/nz7.png'
import ministryImage from '../assets/Ministry.png'
import welcomeImage from '../assets/wel.png'
import digitalEgyptImage from '../assets/xov.png'

function Welcome() {
  const navigate = useNavigate()

  const [menuOpen, setMenuOpen] = useState(false)
  const [darkMode, setDarkMode] = useState(false)
  const [language, setLanguage] = useState('ar')

  const [showPassword, setShowPassword] = useState(false)
  const [showDeveloperNote, setShowDeveloperNote] = useState(false)
  const [showLegalNote, setShowLegalNote] = useState(false)

  const [identity, setIdentity] = useState('')
  const [password, setPassword] = useState('')

  const [identityError, setIdentityError] = useState('')
  const [passwordError, setPasswordError] = useState('')

  const isEnglish = language === 'en'

  // =====================================================
  // تغيير اللغة
  // =====================================================

  const toggleLanguage = () => {
    setLanguage(isEnglish ? 'ar' : 'en')
  }

  // =====================================================
  // التحقق من البريد أو رقم الهاتف
  // =====================================================

  const validateIdentity = (value) => {
    if (!value) {
      return ''
    }

    // لو المستخدم بيكتب أرقام
    if (/^\d+$/.test(value)) {
      if (!/^(010|011|012|015)\d{8}$/.test(value)) {
        return isEnglish
          ? 'Invalid phone number'
          : 'الرقم غير صحيح'
      }

      return ''
    }

    // لو المستخدم بيكتب بريد
    if (!value.toLowerCase().endsWith('@gmail.com')) {
      return isEnglish
        ? 'This email is invalid'
        : 'هذا البريد غير صحيح'
    }

    return ''
  }

  // =====================================================
  // تسجيل الدخول
  // =====================================================

  const handleLogin = () => {
    setIdentityError('')
    setPasswordError('')

    const trimmedIdentity = identity.trim()
    const trimmedPassword = password

    // لا توجد بيانات
    if (!trimmedIdentity) {
      setIdentityError(
        isEnglish
          ? 'This email or phone number is invalid'
          : 'البريد الإلكتروني أو الرقم غير صحيح'
      )

      return
    }

    // تحقق البريد / الرقم
    const identityValidation = validateIdentity(trimmedIdentity)

    if (identityValidation) {
      setIdentityError(identityValidation)
      return
    }

    // ===================================================
    // قراءة الحسابات المسجلة
    // ===================================================

    let accounts = []

    try {
      const savedAccounts = localStorage.getItem('alaqad_accounts')

      if (savedAccounts) {
        accounts = JSON.parse(savedAccounts)
      }
    } catch {
      accounts = []
    }

    // ===================================================
    // البحث عن الحساب
    // ===================================================

    const account = accounts.find((user) => {
      const savedIdentity =
        user.email ||
        user.phone ||
        user.identity

      return (
        savedIdentity?.toLowerCase() ===
        trimmedIdentity.toLowerCase()
      )
    })

    // ===================================================
    // الحساب غير موجود أو كلمة المرور خاطئة
    // ===================================================

    if (!account || account.password !== trimmedPassword) {
      setPasswordError(
        isEnglish
          ? 'The account or password is incorrect'
          : 'الحساب أو كلمة المرور غير صحيح'
      )

      return
    }

    // ===================================================
    // تسجيل الدخول بنجاح
    // ===================================================

    localStorage.setItem(
      'alaqad_logged_in',
      'true'
    )

    localStorage.setItem(
      'alaqad_current_user',
      JSON.stringify(account)
    )

    navigate('/home')
  }

  // =====================================================
  // JSX
  // =====================================================

  return (
    <div
      className={`welcome-page ${
        darkMode ? 'dark-mode' : ''
      }`}
      dir={isEnglish ? 'ltr' : 'rtl'}
    >

      {/* =====================================================
         HEADER
      ===================================================== */}

      <header className="welcome-header">

        {/* ================= MENU ================= */}

        <div className="welcome-menu-wrapper">

          <button
            type="button"
            className={`welcome-menu-button ${
              menuOpen ? 'active' : ''
            }`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={
              isEnglish
                ? 'Menu'
                : 'القائمة'
            }
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          {menuOpen && (
            <div className="welcome-menu-panel">

              {/* تسجيل الدخول */}

              <button
                type="button"
                className="welcome-menu-item selected"
                onClick={() => {
                  setMenuOpen(false)
                }}
              >
                <span>
                  {isEnglish
                    ? 'Login'
                    : 'تسجيل الدخول'}
                </span>

                <span className="menu-item-arrow">
                  →
                </span>
              </button>

              {/* إنشاء حساب */}

              <button
                type="button"
                className="welcome-menu-item selected"
                onClick={() => {
                  setMenuOpen(false)
                  navigate('/register')
                }}
              >
                <span>
                  {isEnglish
                    ? 'Create Account'
                    : 'إنشاء حساب'}
                </span>

                <span className="menu-item-arrow">
                  →
                </span>
              </button>

              {/* القائمة الرئيسية */}

              <button
                type="button"
                className="welcome-menu-item main-item"
                onClick={() => {
                  setMenuOpen(false)
                  navigate('/home')
                }}
              >
                <span>
                  {isEnglish
                    ? 'Main Menu'
                    : 'القائمة الرئيسية'}
                </span>
              </button>

            </div>
          )}

        </div>

        {/* ================= BRAND ================= */}

        <div className="welcome-brand">

          <img
            src={logoImage}
            alt="JAX Educational"
            className="welcome-brand-image"
          />

          <div className="welcome-brand-text">

            <strong>
              {isEnglish
                ? 'Al-Akkad Platform'
                : 'منصة العقاد'}
            </strong>

            <span>
              JAX EDUCATIONAL
            </span>

          </div>

        </div>

        {/* ================= ACTIONS ================= */}

        <div className="welcome-actions">

          {/* اللغة */}

          <button
            type="button"
            className="welcome-language-button"
            onClick={toggleLanguage}
            aria-label={
              isEnglish
                ? 'Switch to Arabic'
                : 'تغيير اللغة'
            }
          >
            {isEnglish
              ? 'العربية'
              : 'English'}
          </button>

          {/* الوضع الليلي */}

          <button
            type="button"
            className="welcome-action-button dark-mode-button"
            onClick={() => setDarkMode(!darkMode)}
            aria-label={
              isEnglish
                ? 'Dark mode'
                : 'الوضع الليلي'
            }
            aria-pressed={darkMode}
          >
            {darkMode
              ? '☀️'
              : '🌙'}
          </button>

        </div>

      </header>

      {/* =====================================================
         MAIN
      ===================================================== */}

      <main className="welcome-content">

        {/* =====================================================
           WELCOME BADGE
        ===================================================== */}

        <section className="welcome-intro">

          <div className="intro-badge">

            <span>
              {isEnglish
                ? 'Welcome to'
                : 'أهلاً بك في'}
            </span>

            <strong>
              {isEnglish
                ? 'Education Center'
                : 'مركز التعليم'}
            </strong>

          </div>

        </section>

        {/* =====================================================
           MINISTRY + JAX
        ===================================================== */}

        <section className="welcome-logos-section">

          {/* وزارة التربية والتعليم */}

          <div className="welcome-logo-box ministry">

            <img
              src={ministryImage}
              alt={
                isEnglish
                  ? 'Egyptian Ministry of Education'
                  : 'وزارة التربية والتعليم المصرية'
              }
              className="ministry-logo"
            />

          </div>

          <div
            className="logos-divider"
            aria-hidden="true"
          ></div>

          {/* JAX */}

          <div className="welcome-logo-box jax">

            <img
              src={logoImage}
              alt="JAX Educational"
              className="jax-second-logo"
            />

          </div>

        </section>

        {/* =====================================================
           LOGIN CARD
        ===================================================== */}

        <section className="welcome-login-card">

          {/* صورة الترحيب */}

          <div className="welcome-login-image-wrapper">

            <img
              src={welcomeImage}
              alt={
                isEnglish
                  ? 'Welcome'
                  : 'ترحيب'
              }
              className="welcome-login-image"
            />

          </div>

          {/* العنوان */}

          <h2 className="welcome-login-title">

            {isEnglish
              ? 'Login'
              : 'تسجيل الدخول'}

          </h2>

          {/* =================================================
             IDENTITY
          ================================================= */}

          <div className="welcome-login-field">

            <label htmlFor="login-identity">

              {isEnglish
                ? 'Email / Phone Number'
                : 'البريد الإلكتروني / رقم الهاتف'}

            </label>

            <input
              id="login-identity"
              type="text"
              value={identity}
              onChange={(e) => {

                const value = e.target.value

                setIdentity(value)

                if (identityError) {
                  setIdentityError('')
                }

                if (passwordError) {
                  setPasswordError('')
                }

              }}
              placeholder={
                isEnglish
                  ? 'Enter your email or phone number'
                  : 'أدخل البريد الإلكتروني أو رقم الهاتف'
              }
              autoComplete="username"
              className={
                identityError
                  ? 'login-input-error'
                  : ''
              }
            />

            {identityError && (
              <span className="login-validation-error">
                {identityError}
              </span>
            )}

          </div>

          {/* =================================================
             PASSWORD
          ================================================= */}

          <div className="welcome-login-field">

            <label htmlFor="login-password">

              {isEnglish
                ? 'Password'
                : 'كلمة المرور'}

            </label>

            <div
              className={`welcome-password-wrapper ${
                passwordError
                  ? 'password-error-wrapper'
                  : ''
              }`}
            >

              <input
                id="login-password"
                type={
                  showPassword
                    ? 'text'
                    : 'password'
                }
                value={password}
                onChange={(e) => {

                  setPassword(e.target.value)

                  if (passwordError) {
                    setPasswordError('')
                  }

                }}
                placeholder={
                  isEnglish
                    ? 'Enter your password'
                    : 'أدخل كلمة المرور'
                }
                autoComplete="current-password"
              />

              <button
                type="button"
                className="welcome-password-toggle"
                onClick={() =>
                  setShowPassword(!showPassword)
                }
                aria-label={
                  showPassword
                    ? 'Hide password'
                    : 'Show password'
                }
              >
                {showPassword
                  ? '◉'
                  : '◌'}
              </button>

            </div>

            {passwordError && (
              <span className="login-validation-error password-error-text">
                {passwordError}
              </span>
            )}

          </div>

          {/* =================================================
             FORGOT PASSWORD
          ================================================= */}

          <button
            type="button"
            className="welcome-forgot-button"
            onClick={() =>
              navigate('/forgot-password')
            }
          >
            {isEnglish
              ? 'Forgot password?'
              : 'نسيت كلمة السر؟'}
          </button>

          {/* =================================================
             LOGIN
          ================================================= */}

          <button
            type="button"
            className="welcome-login-submit"
            onClick={handleLogin}
          >
            {isEnglish
              ? 'Login'
              : 'تسجيل الدخول'}
          </button>

          {/* =================================================
             REGISTER
          ================================================= */}

          <button
            type="button"
            className="welcome-register-submit"
            onClick={() =>
              navigate('/register')
            }
          >
            {isEnglish
              ? 'Create Account'
              : 'إنشاء حساب'}
          </button>

        </section>

        {/* =====================================================
           DIGITAL EGYPT
        ===================================================== */}

        <section className="welcome-digital-egypt">

          <img
            src={digitalEgyptImage}
            alt={
              isEnglish
                ? 'Digital Egypt'
                : 'مصر الرقمية'
            }
            className="digital-egypt-image"
          />

          {/* =================================================
             DEVELOPER NAMES
          ================================================= */}

          <div className="welcome-project-credits">

            <button
              type="button"
              className="developer-name"
              onClick={() =>
                setShowDeveloperNote(
                  !showDeveloperNote
                )
              }
              aria-expanded={
                showDeveloperNote
              }
            >
              {isEnglish
                ? 'Platform & Bot Developer: Nozad Mohamed Mahmoud Helal'
                : 'مبرمج ومطور المنصة والبوت : نوذاد محمد محمود هلال'}
            </button>

            <div className="school-manager-name">

              {isEnglish
                ? 'School Director: Salah Galal Habashi'
                : 'مدير مدرسة العقاد : صلاح جلال حبشي'}

            </div>

          </div>

          {/* =================================================
             DEVELOPER NOTE
          ================================================= */}

          {showDeveloperNote && (

            <section className="developer-note">

              <img
                src={logoImage}
                alt="نوذاد محمد محمود هلال"
                className="developer-note-logo"
              />

              <h3>
                بصمة فخر 🫆
              </h3>

              <div className="developer-note-text">

                <p className="developer-quote">
                  «ليست مجرد أسطر في اكواد… بل عملٌ بنيته بفكرة، وطورته بعلم، وأكملته بجهد 👨🏻‍💻.»
                </p>

                <p>
                  <strong>
                    أعتزّ أنا نوذاد محمد محمود هلال :
                  </strong>
                </p>

                <p>
                  بأنني تولّيت بناء وتطوير هذه المنصة والبوت المرتبط بها برمجيًا، بدايةً من الفكرة والتنفيذ، وصولًا إلى الصورة التي يظهر بها المشروع اليوم.
                </p>

                <p>
                  لم يكن هدفي من هذا العمل أن أمتلك ما بنيته، فملكية المشروع تعود كاملةً إلى وزارة التربية والتعليم والتعليم الفني، وإنما كان هدفي أن أُسخّر ما أمتلكه من معرفة وخبرة برمجية في بناء مشروع يخدم التعليم ويترك أثرًا حقيقيًا.
                </p>

                <p>
                  أضع اسمي هنا لا باعتباره اسم المالك، وإنما باعتباره اسم المبرمج الذي كتب وبنى وطوّر هذا العمل، وترك فيه جزءًا من علمه ووقته وجهده.
                </p>

                <p>
                  فالمنصة ملكٌ للوزارة بنسبة 100%،
                  والبرمجة والتطوير في هذا المشروع هي بصمتي انا.
                </p>

                <p>
                  يحمل هذا المشروع خلاصة علمي، وفكري، وجهدي؛ فأن أُسهم في تطوير منصة تخدم التعليم وتُسهم في بناء جيلٍ أكثر علمًا وتقدماً، هو شرف أعتز به ومسؤولية أؤمن بقيمتها.
                </p>

                <p>
                  وأعتز بأن يكون هذا العمل جزءًا من مسيرتي كمبرمج، وأن تكون إحدى ثمار ما تعلمته وسخّرته في خدمة مشروع يرتبط بالتعليم وبمستقبل أبناء وطني.
                </p>

                <p>
                  هذه بصمتي… وهذا فخري.
                  <br />
                  وإن كان لي أن أترك أثرًا، فليكن أثرًا ينفع بلدي ويُضاف إلى مسيرة بنائه.
                </p>

                <p>
                  هذه بصمتي البرمجية… وهذا فخري بها
                </p>

                <p className="developer-hashtags">
                  #مصر_الحضاره_و_الحاضر_مصر_المستقبل_🇪🇬
                  <br />
                  #مصر_الرقميه_🇪🇬
                  <br />
                  #رؤية_2030_🇪🇬
                </p>

                <p className="developer-signature">
                  المبرمج والمطور : نوذاد محمد محمود هلال 🫆
                </p>

              </div>

            </section>

          )}

          {/* =================================================
             LEGAL NOTE
          ================================================= */}

          {showLegalNote && (

            <section className="legal-note">

              {/* الشعارات */}

              <div className="legal-note-logos">

                <div className="legal-logo-box">

                  <img
                    src={ministryImage}
                    alt="وزارة التربية والتعليم والتعليم الفني"
                    className="legal-ministry-logo"
                  />

                </div>

                <div
                  className="legal-logos-divider"
                  aria-hidden="true"
                ></div>

                <div className="legal-logo-box">

                  <img
                    src={digitalEgyptImage}
                    alt="مصر الرقمية"
                    className="legal-digital-logo"
                  />

                </div>

              </div>

              {/* النص القانوني */}

              <div className="legal-note-text">

                <h3>
                  ⚖️ تنويه قانوني وبيان حقوق الملكية
                </h3>

                <p>
                  تُعد هذه المنصة التعليمية والبوت التابع لها ملكية حصرية وكاملة بنسبة 100% لوزارة التربية والتعليم والتعليم الفني.
                </p>

                <p>
                  وتعود جميع حقوق الملكية الفكرية والإدارية والتشغيلية المتعلقة بالمنصة ومكوناتها وأنظمتها إلى وزارة التربية والتعليم والتعليم الفني، ولا يترتب على المساهمة البرمجية أو التقنية لأي فرد أي حق في ملكية المنصة أو علامتها أو محتواها أو أنظمتها.
                </p>

                <p>
                  ويُعد أي نسخ أو إعادة إنتاج أو تعديل أو إعادة توزيع أو استخدام للمنصة أو البوت أو أي من مكوناته خارج الإطار المصرح به، مخالفةً للحقوق والضوابط المنظمة لاستخدام المشروع، ويخضع للمساءلة وفقًا للقوانين واللوائح المعمول بها.
                </p>

                <p className="legal-contribution-title">
                  💻 المساهمة البرمجية
                </p>

                <p>
                  (انا) نوذاد محمد محمود هلال — المبرمج والمطور البرمجي للمشروع.
                </p>

                <p>
                  تقتصر مساهمتي في هذا المشروع على البرمجة والتطوير والتنفيذ التقني، دون أن يترتب على ذلك أي ادعاء بملكية المنصة أو البوت أو حقوقهما.
                </p>

              </div>

            </section>

          )}

        </section>

      </main>

      {/* =====================================================
         FOOTER
      ===================================================== */}

      <footer className="welcome-footer">

        <button
          type="button"
          className="legal-footer-button"
          onClick={() =>
            setShowLegalNote(!showLegalNote)
          }
          aria-expanded={showLegalNote}
        >
          جميع الحقوق محفوظة © 2026–2027 منصة العقاد
        </button>

      </footer>

    </div>
  )
}

export default Welcome
