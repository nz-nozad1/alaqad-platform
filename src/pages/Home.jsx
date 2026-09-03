import { useState } from 'react'
import '../App.css'

const cards = [
{ icon: '🎓', title: 'الكورسات الدراسية', text: 'تصفح الكورسات والدروس التعليمية' },
{ icon: '📚', title: 'المكتبة الرقمية', text: 'كتب ومراجع ومصادر تعليمية' },
{ icon: '📝', title: 'المواد الدراسية', text: 'الوصول إلى جميع المواد' },
{ icon: '📅', title: 'جدول الامتحانات', text: 'تابع مواعيد الاختبارات' },                                                     { icon: '⚛️', title: 'العلوم والمختبرات', text: 'استكشف العلوم والتجارب' },                                                    { icon: '⚙️', title: 'لوحة تحكم المعلم', text: 'إدارة المحتوى والمتابعة' },
{ icon: '🎧', title: 'دعم فني مباشر', text: 'نحن هنا لمساعدتك' },
{ icon: '🤖', title: 'JAX - AI', text: 'مساعدك الذكي داخل المنصة', new: true },
]
function Home() {
const [menuOpen, setMenuOpen] = useState(false)
const [darkMode, setDarkMode] = useState(false)                const [selectedCard, setSelectedCard] = useState(null)

return (
<div
className={home-page ${darkMode ? 'dark-mode' : ''}}         dir="rtl"
>
{/* العبارة الذهبية */}                                        <div className="quote-bar">
<span>
اللهم علّمنا ما ينفعنا، وانفعنا بما علمتنا، وزدنا بك علمًا
</span>
</div>

{/* القائمة الجانبية */}  
  <aside className={`side-menu ${menuOpen ? 'open' : ''}`}>  
    <div className="side-menu-header">                               <h2>منصة العقاد</h2>  

      <button  
        className="close-menu"  
        onClick={() => setMenuOpen(false)}  
      >                                                                ×  
      </button>  
    </div>  

    <div className="side-menu-items">                        
      <button>إنشاء حساب</button>                            
      <button>تسجيل دخول</button>                            
      <button>القائمة الرئيسية</button>  

      <div className="menu-divider"></div>  
                                                                     <button>حسابي</button>  

    </div>                                                   
  </aside>  
                                                                 {/* خلفية القائمة */}  
  {menuOpen && (  
    <div  
      className="menu-overlay"  
      onClick={() => setMenuOpen(false)}  
    ></div>                                                      )}  

  {/* الهيدر */}  
  <header className="navbar">  

    {/* زر الثلاث شرط */}  
    <button  
      className="menu-button"                                        onClick={() => setMenuOpen(true)}                              aria-label="فتح القائمة"  
    >  
      <span></span>  
      <span></span>  
      <span></span>  
    </button>                                                
    {/* الشعار */}                                                 <div className="brand">                                                                                                         <div className="book-logo">                                      <span className="book left-book"></span>  
        <span className="book right-book"></span>  

        <span className="jax-logo">  
          JAX  
        </span>  

        <span className="logo-shine"></span>                         </div>                                                                                                                        <div>                                                            <div className="brand-title">  
          منصة العقاد  
        </div>  

        <div className="brand-subtitle">  
          JAX EDUCATIONAL                                              </div>  
      </div>  
                                                                   </div>  

    {/* رصيد الطالب */}  
    <div className="student-balance">  

      <span className="balance-label">  
        رصيد الطالب  
      </span>                                                
      <strong>  
        0 نقطة  
      </strong>  

    </div>  

    {/* أزرار الهيدر */}                                           <div className="header-actions">                         
      <button className="contact-btn">  
        تواصل معنا  
      </button>  

      {/* Black Mode */}                                             <button  
        className="dark-mode-btn"  
        onClick={() => setDarkMode(!darkMode)}                         aria-label="تبديل الوضع الليلي"  
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
      <span className="welcome-label">                                 <span className="welcome-blue">  
          أهلاً بك  
        </span>                                              
        <span className="welcome-space">  
          {' '}  
        </span>  

        <span className="welcome-gold">  
          في                                                           </span>  
                                                                       <span className="welcome-space">  
          {' '}  
        </span>                                              
        <span className="welcome-red">  
          مركز التعليم  
        </span>  
      </span>                                                
      <p className="welcome-description">  
        كل ما تحتاجه لرحلتك التعليمية في مكان واحد  
      </p>  

    </section>  

    {/* الكروت */}  
    <section className="dashboard-grid">  

      {cards.map((card, index) => (  

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
            ←  
          </span>  

        </button>  

      ))}  

    </section>  

    {/* بيانات الإدارة والتطوير */}  
    <section className="admin-info">  

      <div className="admin-item admin-manager">  
        <span>  
          مدير المدرسة:  
        </span>  

        <strong>  
          صلاح جلال حبشي  
        </strong>  
      </div>  

      <div className="admin-item admin-developer">  
        <span>  
          مطور المنصة والبوت:  
        </span>  

        <strong>  
          نوذاد محمد محمود هلال  
        </strong>  
      </div>  

    </section>  

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
