import { useNavigate } from 'react-router-dom'
import '../App.css'

function Welcome() {
  const navigate = useNavigate()

  return (
    <div className="landing-page" dir="rtl">

      <div className="landing-orb landing-orb-blue"></div>
      <div className="landing-orb landing-orb-red"></div>
      <div className="landing-dots"></div>

      <div className="landing-top-tools">

        <button className="language-btn">
          🌐
          <span>العربية</span>
        </button>

        <button className="theme-btn" aria-label="الوضع الليلي">
          🌙
        </button>

      </div>

      <main className="landing-main">

        <div className="jax-book-logo">

          <div className="book-page book-page-red">
            <span>JAX</span>
          </div>

          <div className="book-page book-page-blue">
            <span>JAX</span>
          </div>

          <div className="book-center"></div>

        </div>

        <div className="landing-brand">

          <h1>
            منصة العقاد
          </h1>

          <p>
            <b>JAX</b> EDUCATIONAL
          </p>

        </div>

        <div className="landing-divider">
          <span></span>
          <b>◆</b>
          <span></span>
        </div>

        <div className="landing-welcome">

          <h2>
            مرحبًا بك في منصة التعلم الذكية
          </h2>

        </div>

        <section className="landing-actions">

          <button
            className="landing-action login-action"
            onClick={() => navigate('/login')}
          >

            <div className="action-icon">
              👤
            </div>

            <div className="action-text">

              <strong>
                تسجيل دخول
              </strong>

              <small>
                الدخول إلى حسابك
              </small>

            </div>

            <div className="action-arrow">
              ‹
            </div>

          </button>

          <button
            className="landing-action register-action"
            onClick={() => navigate('/register')}
          >

            <div className="action-icon">
              👤+
            </div>

            <div className="action-text">

              <strong>
                إنشاء حساب
              </strong>

              <small>
                إنشاء حساب جديد
              </small>

            </div>

            <div className="action-arrow">
              ‹
            </div>

          </button>

        </section>

      </main>

      <footer className="landing-footer">
        <span>JAX EDUCATIONAL</span>
        <i>•</i>
        <span>Powered by JAX AI</span>
      </footer>

    </div>
  )
}

export default Welcome
