import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../App.css'

function Register() {
  const navigate = useNavigate()

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')

  const handleRegister = (e) => {
    e.preventDefault()

    setError('')
    setSuccess('')

    const cleanName = name.trim()
    const cleanEmail = email.trim().toLowerCase()
    const cleanPhone = phone.trim()

    if (
      !cleanName ||
      !cleanEmail ||
      !cleanPhone ||
      !password ||
      !confirmPassword
    ) {
      setError('يرجى إدخال جميع البيانات')
      return
    }

    if (password.length < 6) {
      setError('كلمة المرور يجب أن تكون 6 أحرف أو أكثر')
      return
    }

    if (password !== confirmPassword) {
      setError('كلمتا المرور غير متطابقتين')
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

    const emailExists = accounts.some(
      (user) =>
        user.email?.toLowerCase() === cleanEmail
    )

    if (emailExists) {
      setError('هذا البريد الإلكتروني مسجل بالفعل')
      return
    }

    const phoneExists = accounts.some(
      (user) =>
        user.phone === cleanPhone
    )

    if (phoneExists) {
      setError('رقم الهاتف مسجل بالفعل')
      return
    }

    const newAccount = {
      id: Date.now(),
      name: cleanName,
      email: cleanEmail,
      phone: cleanPhone,
      password
    }

    accounts.push(newAccount)

    localStorage.setItem(
      'alaqad_accounts',
      JSON.stringify(accounts)
    )

    localStorage.setItem(
      'alaqad_current_user',
      JSON.stringify(newAccount)
    )

    setSuccess('تم إنشاء الحساب بنجاح')

    setTimeout(() => {
      navigate('/home')
    }, 700)
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
            إنشاء حساب جديد
          </h1>

          <p>
            أنشئ حسابك للبدء في رحلتك التعليمية
          </p>

        </section>

        <div className="security-symbol">

          <div className="security-shield">
            <span>🎓</span>
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
            إنشاء حساب
          </h2>

          <p className="login-card-subtitle">
            أدخل بياناتك لإنشاء حساب جديد
          </p>

          <form onSubmit={handleRegister}>

            <label className="login-field">

              <span className="field-icon">
                👤
              </span>

              <input
                type="text"
                value={name}
                onChange={(e) => {
                  setName(e.target.value)
                  setError('')
                }}
                placeholder="الاسم بالكامل"
                autoComplete="name"
                required
              />

            </label>

            <label className="login-field">

              <span className="field-icon">
                ✉
              </span>

              <input
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value)
                  setError('')
                }}
                placeholder="البريد الإلكتروني"
                autoComplete="email"
                required
              />

            </label>

            <label className="login-field">

              <span className="field-icon">
                📱
              </span>

              <input
                type="tel"
                value={phone}
                onChange={(e) => {
                  setPhone(e.target.value)
                  setError('')
                }}
                placeholder="رقم الهاتف"
                autoComplete="tel"
                required
              />

            </label>

            <label className="login-field">

              <span className="field-icon">
                🔒
              </span>

              <input
                type={
                  showPassword
                    ? 'text'
                    : 'password'
                }
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value)
                  setError('')
                }}
                placeholder="كلمة المرور"
                autoComplete="new-password"
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

            <label className="login-field">

              <span className="field-icon">
                🔒
              </span>

              <input
                type={
                  showConfirmPassword
                    ? 'text'
                    : 'password'
                }
                value={confirmPassword}
                onChange={(e) => {
                  setConfirmPassword(e.target.value)
                  setError('')
                }}
                placeholder="تأكيد كلمة المرور"
                autoComplete="new-password"
                required
              />

              <button
                type="button"
                className="password-toggle"
                onClick={() =>
                  setShowConfirmPassword(
                    !showConfirmPassword
                  )
                }
                aria-label="إظهار تأكيد كلمة المرور"
              >
                {showConfirmPassword ? '◉' : '◌'}
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

            {success && (
              <div
                style={{
                  color: '#b8860b',
                  textAlign: 'center',
                  marginTop: '10px',
                  marginBottom: '10px',
                  fontWeight: '700'
                }}
              >
                {success}
              </div>
            )}

            <button
              type="submit"
              className="login-submit"
            >

              <span>
                إنشاء الحساب
              </span>

              <b>
                ←
              </b>

            </button>

          </form>

          <div className="register-line">

            <span>
              لديك حساب بالفعل؟
            </span>

            <button
              type="button"
              onClick={() => navigate('/login')}
            >
              تسجيل الدخول
            </button>

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

export default Register
