import React, { useState } from 'react';
import {
    Mountain,
    HeartHandshake,
    Activity,
    Users,
    Smartphone,
    BarChart3,
    ShieldCheck,
    ArrowRight,
    Menu,
    X
} from 'lucide-react';

function App() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    return (
        <div className="min-h-screen bg-slate-50 font-sans ios-scroll" dir="rtl">
            {/* Header */}
            <header className="fixed top-0 w-full bg-white/90 backdrop-blur-md shadow-sm z-50 border-b border-primary/10 safe-top">
                <div className="container mx-auto px-4 safe-x py-3 sm:py-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="relative w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center overflow-hidden">
                            <div className="absolute inset-0 bg-primary opacity-20 rounded-full"></div>
                            <Mountain className="w-6 h-6 text-primary relative z-10" />
                        </div>
                        <div>
                            <h1 className="text-xl font-bold text-gray-900">سندك</h1>
                            <p className="text-xs text-primary font-medium">معك في كل خطوة</p>
                        </div>
                    </div>

                    <nav className="hidden md:flex gap-8 text-sm font-medium text-gray-600">
                        <a href="#vision" className="hover:text-primary transition-colors">الرؤية</a>
                        <a href="#journey" className="hover:text-primary transition-colors">رحلة المستفيد</a>
                        <a href="#values" className="hover:text-primary transition-colors">القيم</a>
                        <a href="#tech" className="hover:text-primary transition-colors">التقنية</a>
                        <a href="#impact" className="hover:text-primary transition-colors">الأثر</a>
                    </nav>

                    <button className="md:hidden p-3 -mr-2" onClick={toggleMenu} aria-label="القائمة">
                        {isMenuOpen ? <X /> : <Menu />}
                    </button>
                </div>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className="md:hidden bg-white border-t border-gray-100 p-4 shadow-lg">
                        <nav className="flex flex-col gap-4 text-sm font-medium text-gray-600">
                            <a href="#vision" onClick={toggleMenu}>الرؤية</a>
                            <a href="#journey" onClick={toggleMenu}>رحلة المستفيد</a>
                            <a href="#values" onClick={toggleMenu}>القيم</a>
                            <a href="#impact" onClick={toggleMenu}>الأثر</a>
                        </nav>
                    </div>
                )}
            </header>

            {/* Hero Section */}
            <section className="pt-28 sm:pt-32 pb-16 sm:pb-20 px-4 safe-x bg-gradient-to-b from-primary/5 to-transparent">
                <div className="container mx-auto text-center max-w-4xl">
                    <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm mb-6 border border-gray-100">
                        <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                        <span className="text-sm text-gray-600 font-medium">نموذج رشيق ومبتكر</span>
                    </div>
                    <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
                        من الرعاية التقليدية إلى <span className="text-primary">الشراكة المجتمعية</span>
                    </h1>
                    <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-8 sm:mb-10 leading-relaxed max-w-2xl mx-auto">
                        نبتكر نموذج عمل يعتمد على "رأس المال الاجتماعي" لتمكين مرضى السكري في النماص، مستلهمين من شموخ جبال السروات عزيمة للتغيير.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                        <button className="bg-primary active:bg-primary/80 text-white px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl font-bold shadow-lg shadow-primary/20 transition-all active:scale-95 flex items-center justify-center gap-2 w-full sm:w-auto">
                            ابدأ رحلتك معنا <ArrowRight className="w-5 h-5" />
                        </button>
                        <button className="bg-white active:bg-gray-50 text-gray-900 px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl font-bold shadow-md border border-gray-100 transition-all active:scale-95 w-full sm:w-auto">
                            تعرف على النموذج
                        </button>
                    </div>
                </div>
            </section>

            {/* Context Section (Geography) */}
            <section id="vision" className="py-16 sm:py-20 bg-white">
                <div className="container mx-auto px-4 safe-x">
                    <div className="max-w-3xl mx-auto text-center mb-16">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">لماذا النماص؟ ولماذا الآن؟</h2>
                        <p className="text-gray-600">التحدي المكاني يفرض حلاً مبتكراً. العزلة الجغرافية ليست عائقاً بل حافز لبناء نظام بيئي مكتفٍ ذاتياً.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 hover:border-primary/20 transition-all">
                            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                                <Mountain className="text-primary w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold mb-3">2,500 متر</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                الارتفاع الشاهق وصعوبة التضاريس تجعل الوصول للمراكز التخصصية تحدياً يومياً لـ 38,409 نسمة.
                            </p>
                        </div>
                        <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 hover:border-primary/20 transition-all">
                            <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-6">
                                <Activity className="text-red-600 w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold mb-3">24% نسبة الانتشار</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                السكري حالة مجتمعية في كل بيت، تتطلب حلاً ينبع من كل بيت، وليس مجرد عيادة طبية.
                            </p>
                        </div>
                        <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 hover:border-primary/20 transition-all">
                            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                                <Users className="text-green-600 w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold mb-3">رأس المال الاجتماعي</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                نستثمر في قوة الروابط القبلية والعائلية لتحويل المجتمع إلى شبكة دعم صحي متكاملة.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section id="values" className="py-16 sm:py-20 bg-slate-900 text-white">
                <div className="container mx-auto px-4 safe-x">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16 gap-6">
                        <div>
                            <h2 className="text-3xl font-bold text-white mb-2">قيمنا الراسخة</h2>
                            <p className="text-slate-400">منظومة قيم تدمج بين الجانب الإنساني والتميز التشغيلي</p>
                        </div>
                        <div className="bg-white/10 px-6 py-3 rounded-full text-sm font-medium backdrop-blur-sm">
                            إنسان &gt; إجراء
                        </div>
                    </div>

                    <div className="grid md:grid-cols-5 gap-4">
                        {[
                            { title: "الرشاقة", desc: "قرارات سريعة وتكيف مستمر مع الميدان." },
                            { title: "رأس المال الاجتماعي", desc: "الإنسان هو الأصل الأغلى." },
                            { title: "المحلية العميقة", desc: "حلول مفصلة لثقافة النماص." },
                            { title: "الأثر لا الحجم", desc: "النجاح هو تغيير حياة المستفيد." },
                            { title: "الشفافية الجذرية", desc: "الثقة تبنى بالوضوح المطلق." }
                        ].map((val, idx) => (
                            <div key={idx} className="bg-white/5 p-6 rounded-xl hover:bg-white/10 transition-colors border border-white/5">
                                <h4 className="font-bold text-lg mb-2 text-primary-300">{val.title}</h4>
                                <p className="text-slate-400 text-sm">{val.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Journey Unit Section */}
            <section id="journey" className="py-16 sm:py-20 bg-primary/5">
                <div className="container mx-auto px-4 safe-x">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">وحدة "رحلتك"</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto"> القلب النابض للجمعية. لسنا مجرد مقدم خدمة، نحن رفيق في رحلة حياة. </p>
                    </div>

                    <div className="grid md:grid-cols-4 gap-6 relative">
                        {/* Connecting Line (Desktop) */}
                        <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-primary/20 -z-10"></div>

                        {[
                            { step: "01", title: "الاستيعاب", text: "مواجهة صدمة التشخيص ببرنامج المرافق الخبير.", icon: HeartHandshake },
                            { step: "02", title: "التثقيف", text: "محتوى تعليمي باللهجة المحلية (Micro-learning).", icon: Smartphone },
                            { step: "03", title: "الإدارة الذاتية", text: "تطبيقات ذكية للمتابعة وتقليل الإرهاق.", icon: Activity },
                            { step: "04", title: "السفارة", text: "تحويل المريض الناجح إلى قائد ملهم.", icon: Users },
                        ].map((item, idx) => (
                            <div key={idx} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 relative group hover:-translate-y-2 transition-transform duration-300">
                                <div className="w-12 h-12 bg-primary text-white rounded-xl flex items-center justify-center mb-4 text-xl font-bold shadow-lg shadow-primary/20">
                                    {item.step}
                                </div>
                                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">{item.title}</h3>
                                <p className="text-gray-600 text-sm">{item.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Technology Section */}
            <section id="tech" className="py-16 sm:py-20 bg-white">
                <div className="container mx-auto px-4 safe-x">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl font-bold text-gray-900 mb-6">البنية التقنية-الإنسانية</h2>
                            <p className="text-gray-600 mb-8 leading-relaxed">
                                التقنية ليست بديلاً للإنسان، بل مكبر لقدراته. نستخدم أدوات منخفضة التكلفة وعالية الأثر لتجاوز التحديات الجغرافية.
                            </p>

                            <div className="space-y-6">
                                <div className="flex gap-4">
                                    <div className="bg-indigo-100 p-3 rounded-lg h-fit text-indigo-600"><Smartphone size={24} /></div>
                                    <div>
                                        <h4 className="font-bold text-gray-900">التوطين الصوتي (AI TTS)</h4>
                                        <p className="text-sm text-gray-600">رسائل توعوية دافئة باللهجة المحلية لكسر حاجز الغربة التقنية مع كبار السن.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="bg-pink-100 p-3 rounded-lg h-fit text-pink-600"><Users size={24} /></div>
                                    <div>
                                        <h4 className="font-bold text-gray-900">منصات Low-Code</h4>
                                        <p className="text-sm text-gray-600">تمكين شباب النماص من بناء أدوات رقمية بتكلفة منخفضة وسرعة استجابة عالية.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="bg-slate-50 rounded-3xl p-8 border border-slate-200">
                            <div className="bg-white rounded-2xl p-6 shadow-sm mb-4">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center text-primary font-bold">س</div>
                                    <div>
                                        <p className="text-sm font-bold">المساعد الذكي (سندك)</p>
                                        <p className="text-xs text-gray-500">متصل الآن</p>
                                    </div>
                                </div>
                                <div className="space-y-3">
                                    <div className="bg-gray-100 rounded-lg rounded-tl-none p-3 text-sm text-gray-700 max-w-[85%]">
                                        حياك الله يا عم عبدالله، كيف السكر اليوم مع فطور العريكه؟ 😄
                                    </div>
                                    <div className="bg-primary/10 rounded-lg rounded-tr-none p-3 text-sm text-primary-900 max-w-[85%] mr-auto">
                                        الحمد لله، بس أحس بدوخة بسيطة..
                                    </div>
                                    <div className="bg-gray-100 rounded-lg rounded-tl-none p-3 text-sm text-gray-700 max-w-[85%]">
                                        سلامتك! قست السكر؟ إذا فوق 200 اشرب مويا كثير وخذ راحتك، وإذا استمر علمنا فوراً.
                                    </div>
                                </div>
                            </div>
                            <p className="text-center text-xs text-gray-500">نموذج محاكاة لنظام المحادثة الذكي</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* KPIs Section */}
            <section id="impact" className="py-16 sm:py-20 bg-slate-900 text-white">
                <div className="container mx-auto px-4 safe-x">
                    <h2 className="text-3xl font-bold mb-12 text-center">مصفوفة الأثر (The Impact Matrix)</h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="bg-white/5 border border-white/10 p-6 rounded-2xl text-center">
                            <div className="text-4xl font-bold text-primary-400 mb-2">HbA1c</div>
                            <p className="text-lg font-medium text-white mb-2">الأثر الصحي</p>
                            <p className="text-sm text-slate-400">انخفاض 1% للمنتظمين</p>
                        </div>
                        <div className="bg-white/5 border border-white/10 p-6 rounded-2xl text-center">
                            <div className="text-4xl font-bold text-primary-400 mb-2">NPS 50+</div>
                            <p className="text-lg font-medium text-white mb-2">ولاء المستفيد</p>
                            <p className="text-sm text-slate-400">ينصحوننا للآخرين</p>
                        </div>
                        <div className="bg-white/5 border border-white/10 p-6 rounded-2xl text-center">
                            <div className="text-4xl font-bold text-primary-400 mb-2">20%</div>
                            <p className="text-lg font-medium text-white mb-2">استدامة</p>
                            <p className="text-sm text-slate-400">تحول من مريض إلى متطوع</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-white border-t border-gray-100 py-12 safe-bottom">
                <div className="container mx-auto px-4 safe-x text-center">
                    <div className="flex justify-center items-center gap-2 mb-6">
                        <Mountain className="text-primary w-6 h-6" />
                        <h2 className="text-2xl font-bold text-gray-900">جمعية سندك</h2>
                    </div>
                    <p className="text-gray-600 mb-6">مال المتبرع أمانة، ووقت المتطوع استثمار، وصحة المستفيد هي العائد.</p>
                    <div className="text-sm text-gray-400">
                        © 2024 جميع الحقوق محفوظة - تم التصميم بقلوب أبناء النماص.
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default App;
