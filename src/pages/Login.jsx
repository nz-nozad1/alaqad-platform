import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../App.css'

function Login() {
  const navigate = useNavigate()

  const [showPassword, setShowPassword] = useState(false)
  const [remember, setRemember] = useState(false)

  const [identity, setIdentity] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const handleLogin = (e) => {
    e.preventDefault()

    setError('')

    const cleanIdentity = identity.trim().toLowerCase()

    if (!cleanIdentity || !password) {
      setError('يرجى إدخال البريد الإلكتروني وكلمة المرور')
      return
    }

    let accounts = []

    try {
      accounts = JSON.parse(
        localStorage.getItem('alaqad_accounts') || '[]'
      )
    } catch {
      accounts = []
    }

    const account = accounts.find((user) => {
      const emailMatch =
        user.email?.toLowerCase() === cleanIdentity

      const phoneMatch =
        user.phone === identity.trim()

      return (
        (emailMatch || phoneMatch) &&
        user.password === password
      )
    })

    if (!account) {
      setError('الحساب أو كلمة المرور غير صحيحة')
      return
    }

    localStorage.setItem(
      'alaqad_current_user',
      JSON.stringify(account)
    )

    if (remember) {
      localStorage.setItem(
        'alaqad_remember_login',
        'true'
      )
    } else {
      localStorage.removeItem(
        'alaqad_remember_login'
      )
    }

    navigate('/home')
  }

  return (
    <div className="login-page" dir="rtl">

      <div className="silver-wave silver-wave-one"></div>
      <div className="silver-wave silver-wave-two"></div>
      <div className="gold-glow"></div>

      <header className="login-header">

        <div className="login-brand">

          <div className="graduation-logo">
            🎓
          </div>

          <div className="login-brand-text">
            <strong>منصة العقاد</strong>
            <span>JAX EDUCATIONAL</span>
          </div>

        </div>

        <button
          className="language-selector"
          type="button"
        >
          <span>🌐</span>
          <span>العربية</span>
          <b>⌄</b>
        </button>

      </header>

      <main className="login-main">

        <section className="login-welcome">

          <h1>
            مرحباً بك مجدداً
          </h1>

          <p>
            سعداء بعودتك! يرجى تسجيل الدخول لمتابعة رحلتك التعليمية
          </p>

        </section>

        <div className="security-symbol">

          <div className="security-shield">
            <span>🔒</span>
          </div>

        </div>

        <section className="login-card">

          <div className="login-user-icon">

            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
            >
              <circle
                cx="12"
                cy="8"
                r="3.5"
              />

              <path
                d="M5 20c.8-4 3.1-6 7-6s6.2 2 7 6"
                strokeLinecap="round"
              />

            </svg>

          </div>

          <h2>
            تسجيل الدخول
          </h2>

          <p className="login-card-subtitle">
            أدخل بيانات حسابك للمتابعة
          </p>

          <form onSubmit={handleLogin}>

            <label className="login-field">

              <span className="field-icon">
                ✉
              </span>

              <input
                type="text"
                value={identity}
                onChange={(e) => {
                  setIdentity(e.target.value)
                  setError('')
                }}
                placeholder="أدخل بريدك الإلكتروني أو رقم الهاتف"
                autoComplete="username"
                required
              />

            </label>

            <label className="login-field">

              <span className="field-icon">
                🔒
              </span>

              <input
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value)
                  setError('')
                }}
                placeholder="أدخل كلمة المرور"
                autoComplete="current-password"
                required
              />

              <button
                type="button"
                className="password-toggle"
                onClick={() =>
                  setShowPassword(!showPassword)
                }
                aria-label="إظهار كلمة المرور"
              >
                {showPassword ? '◉' : '◌'}
              </button>

            </label>

            {error && (
              <div
                style={{
                  color: '#d62828',
                  textAlign: 'center',
                  marginTop: '10px',
                  marginBottom: '10px',
                  fontWeight: '700'
                }}
              >
                {error}
              </div>
            )}

            <div className="login-options">

              <label className="remember-option">

                <input
                  type="checkbox"
                  checked={remember}
                  onChange={(e) =>
                    setRemember(e.target.checked)
                  }
                />

                <span>
                  تذكرني
                </span>

              </label>

              <button
                type="button"
                className="forgot-link"
                onClick={() =>
                  navigate('/forgot-password')
                }
              >
                نسيت كلمة المرور؟
              </button>

            </div>

            <button
              type="submit"
              className="login-submit"
            >

              <span>
                تسجيل الدخول
              </span>

              <b>
                ←
              </b>

            </button>

          </form>

          <div className="register-line">

            <span>
              ليس لديك حساب؟
            </span>

            <button
              type="button"
              onClick={() => navigate('/register')}
            >
              إنشاء حساب جديد
            </button>

          </div>

        </section>

        <section className="login-features">

          <div className="feature">

            <div className="feature-icon">
              🎓
            </div>

            <strong>
              تعلم بسهولة
            </strong>

            <span>
              منصة تعليمية متكاملة تدعم نجاحك
            </span>

          </div>

          <div className="feature">

            <div className="feature-icon">
              ◷
            </div>

            <strong>
              متاح 24/7
            </strong>

            <span>
              تعلم في أي وقت ومن أي مكان
            </span>

          </div>

          <div className="feature">

            <div className="feature-icon silver">
              ✓
            </div>

            <strong>
              بياناتك آمنة
            </strong>

            <span>
              نحمي خصوصيتك بأعلى المعايير
            </span>

          </div>

        </section>

      </main>

      <footer className="login-footer">

        <span>
          JAX EDUCATIONAL
        </span>

        <i></i>

        <span>
          Powered by JAX AI
        </span>

      </footer>

    </div>
  )
}

export default Login
