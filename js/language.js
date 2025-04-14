// 多语言支持
const translations = {
  zh: {
    // 导航栏
    nav_about: '关于我',
    nav_education: '教育背景',
    nav_experience: '工作经历',
    nav_hobbies: '兴趣爱好',
    nav_projects: '项目',
    nav_contact: '联系我',
    nav_basic_info: '基本信息',
    nav_skills: '专业技能',
    
    // 语言选择器
    language_selector: '语言',
    
    // 头部
    welcome: '欢迎来到我的个人网站',
    subtitle: '前端开发工程师 / UI设计师',
    resume_title: '个人简历',
    
    // 关于我
    about_title: '关于我',
    about_p1: '你好！我是一名充满热情的开发者，专注于创建美观且用户友好的网站。我热爱学习新技术并将创意转化为现实。',
    about_p2: '我拥有5年的前端开发经验，熟悉现代Web开发技术栈。在工作中，我注重用户体验和代码质量，努力打造高效、美观的数字产品。',
    skills_title: '技能专长',
    
    // 基本信息
    basic_info_title: '基本信息',
    name: '姓名',
    birth_date: '出生日期',
    gender: '性别',
    male: '男',
    female: '女',
    phone: '手机号码',
    email: '邮箱',
    nationality: '籍贯',
    japan: '日本',
    education_level: '学历',
    
    // 教育背景
    education_title: '教育背景',
    edu1_degree: '计算机科学与技术学士',
    edu1_school: '北京大学',
    edu1_courses: '主修课程：数据结构、算法分析、计算机网络、Web开发技术',
    edu2_degree: '人机交互硕士',
    edu2_school: '清华大学',
    edu2_courses: '研究方向：用户体验设计、交互设计模式、Web可访问性',
    edu2_thesis: '毕业论文：《移动应用中的微交互设计研究》',
    major: '计算机科学与技术本科',
    main_courses: '主修课程：',
    
    // 工作经历
    experience_title: '工作经历',
    exp1_title: '高级前端开发工程师',
    exp1_company: '科技创新公司',
    exp1_duty1: '负责公司主要产品的前端架构设计和开发',
    exp1_duty2: '优化网站性能，提升用户体验和页面加载速度',
    exp1_duty3: '指导初级开发人员，组织技术分享会',
    exp1_duty4: '与设计团队协作，实现复杂交互效果和UI组件',
    exp2_title: '前端开发工程师',
    exp2_company: '互联网金融公司',
    exp2_duty1: '参与开发公司金融产品的Web应用',
    exp2_duty2: '使用React和Redux构建用户界面',
    exp2_duty3: '实现响应式设计，确保在各种设备上的良好体验',
    exp2_duty4: '与后端团队协作，优化API调用和数据处理',
    project_desc: '项目描述：',
    project_tech: '项目技术：',
    view_project: '查看项目',
    
    // 兴趣爱好
    hobbies_title: '兴趣爱好',
    hobby1_title: '阅读',
    hobby1_desc: '我喜欢阅读技术书籍和科幻小说，这帮助我拓展思维和获取新知识。',
    hobby2_title: '户外活动',
    hobby2_desc: '周末喜欢徒步旅行和登山，亲近自然让我保持身心健康。',
    hobby3_title: '摄影',
    hobby3_desc: '我热爱摄影，尤其是风景和街头摄影，捕捉生活中的美丽瞬间。',
    hobby4_title: '下棋',
    hobby4_desc: '国际象棋和围棋是我放松时的选择，它们帮助我提高逻辑思维能力。',
    
    // 项目
    projects_title: '项目展示',
    project1_title: '响应式电商平台',
    project1_desc: '使用React开发的现代电子商务网站，包含产品展示、购物车和支付系统。',
    project2_title: '企业管理系统',
    project2_desc: '基于Vue.js的企业内部管理系统，实现了数据可视化、任务跟踪和报表生成。',
    project3_title: '在线学习平台',
    project3_desc: '教育类Web应用，支持视频课程、在线测验和学习进度追踪。',
    learn_more: '了解更多',
    
    // 联系方式
    contact_title: '联系方式',
    contact_address: '地址: 北京市海淀区',
    note: '您也可以直接发送邮件或通过以下方式联系我',
    send_email: '发送邮件',
    form_note: '填写以下表单，我会尽快回复您',
    your_name: '您的姓名',
    your_email: '您的邮箱',
    your_message: '您的留言',
    send_message: '发送消息',
    form_help: '点击发送后将打开您的邮件客户端，请确认发送邮件',
    
    // 页脚
    copyright: '版权所有',
    made_with_love: '用❤️制作',
    
    // 表单消息
    sending: '发送中...',
    success_title: '成功',
    success_message: '您的消息已成功发送！我会尽快回复您。',
    error_title: '错误',
    error_message: '发送消息时出错，请稍后再试。',
    email_ready: '邮件客户端已打开，请发送邮件完成联系。',
    connection_error: '无法连接到服务器。请直接发送邮件与我联系。',
    confirm_email: '是否要使用邮件客户端发送消息？'
  },
  
  en: {
    // Navigation
    nav_about: 'About Me',
    nav_education: 'Education',
    nav_experience: 'Experience',
    nav_hobbies: 'Hobbies',
    nav_projects: 'Projects',
    nav_contact: 'Contact',
    nav_basic_info: 'Basic Info',
    nav_skills: 'Skills',
    
    // Language selector
    language_selector: 'Language',
    
    // Header
    welcome: 'Welcome to My Personal Website',
    subtitle: 'Frontend Developer / UI Designer',
    resume_title: 'Resume',
    
    // About
    about_title: 'About Me',
    about_p1: 'Hello! I am a passionate developer focused on creating beautiful and user-friendly websites. I love learning new technologies and turning ideas into reality.',
    about_p2: 'I have 5 years of frontend development experience and am familiar with modern web development technology stack. In my work, I focus on user experience and code quality, striving to create efficient and beautiful digital products.',
    skills_title: 'Skills',
    
    // Basic Info
    basic_info_title: 'Basic Information',
    name: 'Name',
    birth_date: 'Birth Date',
    gender: 'Gender',
    male: 'Male',
    female: 'Female',
    phone: 'Phone',
    email: 'Email',
    nationality: 'Nationality',
    japan: 'Japan',
    education_level: 'Education',
    
    // Education
    education_title: 'Education',
    edu1_degree: 'Bachelor of Computer Science and Technology',
    edu1_school: 'Peking University',
    edu1_courses: 'Major courses: Data Structures, Algorithm Analysis, Computer Networks, Web Development',
    edu2_degree: 'Master of Human-Computer Interaction',
    edu2_school: 'Tsinghua University',
    edu2_courses: 'Research focus: User Experience Design, Interaction Design Patterns, Web Accessibility',
    edu2_thesis: 'Thesis: "Research on Micro-interaction Design in Mobile Applications"',
    major: 'Bachelor of Computer Science and Technology',
    main_courses: 'Main Courses:',
    
    // Experience
    experience_title: 'Experience',
    exp1_title: 'Senior Frontend Developer',
    exp1_company: 'Tech Innovation Company',
    exp1_duty1: 'Responsible for frontend architecture design and development of main products',
    exp1_duty2: 'Optimize website performance, improve user experience and page loading speed',
    exp1_duty3: 'Guide junior developers and organize technical sharing sessions',
    exp1_duty4: 'Collaborate with design teams to implement complex interaction effects and UI components',
    exp2_title: 'Frontend Developer',
    exp2_company: 'Internet Finance Company',
    exp2_duty1: 'Participate in developing web applications for company financial products',
    exp2_duty2: 'Build user interfaces using React and Redux',
    exp2_duty3: 'Implement responsive design to ensure good experience across various devices',
    exp2_duty4: 'Collaborate with backend teams to optimize API calls and data processing',
    project_desc: 'Project Description:',
    project_tech: 'Technologies:',
    view_project: 'View Project',
    
    // Hobbies
    hobbies_title: 'Hobbies',
    hobby1_title: 'Reading',
    hobby1_desc: 'I enjoy reading technical books and science fiction, which helps me expand my thinking and acquire new knowledge.',
    hobby2_title: 'Outdoor Activities',
    hobby2_desc: 'I like hiking and mountain climbing on weekends. Being close to nature keeps me physically and mentally healthy.',
    hobby3_title: 'Photography',
    hobby3_desc: 'I love photography, especially landscape and street photography, capturing beautiful moments in life.',
    hobby4_title: 'Chess',
    hobby4_desc: 'Chess and Go are my choices for relaxation. They help me improve my logical thinking ability.',
    
    // Projects
    projects_title: 'Projects',
    project1_title: 'Responsive E-commerce Platform',
    project1_desc: 'A modern e-commerce website developed with React, featuring product display, shopping cart, and payment system.',
    project2_title: 'Enterprise Management System',
    project2_desc: 'Enterprise internal management system based on Vue.js, implementing data visualization, task tracking, and report generation.',
    project3_title: 'Online Learning Platform',
    project3_desc: 'Educational web application supporting video courses, online quizzes, and learning progress tracking.',
    learn_more: 'Learn More',
    
    // Contact
    contact_title: 'Contact',
    contact_address: 'Address: Haidian District, Beijing',
    note: 'You can also contact me directly via email or through the following methods',
    send_email: 'Send Email',
    form_note: 'Fill out the form below and I will get back to you as soon as possible',
    your_name: 'Your Name',
    your_email: 'Your Email',
    your_message: 'Your Message',
    send_message: 'Send Message',
    form_help: 'Clicking send will open your email client. Please confirm sending the email',
    
    // Footer
    copyright: 'Copyright',
    made_with_love: 'Made with ❤️',
    
    // Form messages
    sending: 'Sending...',
    success_title: 'Success',
    success_message: 'Your message has been sent successfully! I will reply to you as soon as possible.',
    error_title: 'Error',
    error_message: 'Error sending message. Please try again later.',
    email_ready: 'Email client has been opened. Please send the email to complete the contact.',
    connection_error: 'Unable to connect to the server. Please contact me directly via email.',
    confirm_email: 'Would you like to use the email client to send a message?'
  },
  
  ja: {
    // ナビゲーション
    nav_about: '私について',
    nav_education: '学歴',
    nav_experience: '職歴',
    nav_hobbies: '趣味',
    nav_projects: 'プロジェクト',
    nav_contact: 'お問い合わせ',
    nav_basic_info: '基本情報',
    nav_skills: 'スキル',
    
    // Language selector
    language_selector: '言語',
    
    // ヘッダー
    welcome: '私の個人サイトへようこそ',
    subtitle: 'フロントエンド開発者 / UIデザイナー',
    resume_title: '履歴書',
    
    // 私について
    about_title: '私について',
    about_p1: 'こんにちは！私は美しく使いやすいウェブサイトの作成に情熱を持つ開発者です。新しい技術を学び、アイデアを現実にすることが大好きです。',
    about_p2: '5年間のフロントエンド開発経験があり、最新のWeb開発技術スタックに精通しています。仕事では、ユーザー体験とコード品質に重点を置き、効率的で美しいデジタル製品の作成に努めています。',
    skills_title: 'スキル',
    
    // 基本情報
    basic_info_title: '基本情報',
    name: '氏名',
    birth_date: '生年月日',
    gender: '性別',
    male: '男性',
    female: '女性',
    phone: '電話番号',
    email: 'メール',
    nationality: '国籍',
    japan: '日本',
    education_level: '学歴',
    
    // 教育背景
    education_title: '学歴',
    edu1_degree: 'コンピュータ科学技術学士',
    edu1_school: '北京大学',
    edu1_courses: '主な科目：データ構造、アルゴリズム分析、コンピュータネットワーク、Web開発技術',
    edu2_degree: 'ヒューマンコンピュータインタラクション修士',
    edu2_school: '清華大学',
    edu2_courses: '研究分野：ユーザーエクスペリエンスデザイン、インタラクションデザインパターン、Webアクセシビリティ',
    edu2_thesis: '論文：「モバイルアプリケーションにおけるマイクロインタラクションデザイン研究」',
    major: 'コンピュータサイエンス学士',
    main_courses: '主な科目：',
    
    // 職歴
    experience_title: '職歴',
    exp1_title: 'シニアフロントエンド開発者',
    exp1_company: '技術革新企業',
    exp1_duty1: '主要製品のフロントエンドアーキテクチャ設計と開発を担当',
    exp1_duty2: 'ウェブサイトのパフォーマンスを最適化し、ユーザー体験とページ読み込み速度を向上',
    exp1_duty3: '若手開発者の指導と技術共有セッションの開催',
    exp1_duty4: 'デザインチームと協力して複雑なインタラクションエフェクトとUIコンポーネントを実装',
    exp2_title: 'フロントエンド開発者',
    exp2_company: 'インターネット金融企業',
    exp2_duty1: '会社の金融商品のWebアプリケーション開発に参加',
    exp2_duty2: 'ReactとReduxを使用してユーザーインターフェースを構築',
    exp2_duty3: 'レスポンシブデザインを実装し、様々なデバイスでの優れた体験を確保',
    exp2_duty4: 'バックエンドチームと協力してAPIコールとデータ処理を最適化',
    project_desc: 'プロジェクト概要：',
    project_tech: '使用技術：',
    view_project: 'プロジェクトを見る',
    
    // 趣味
    hobbies_title: '趣味',
    hobby1_title: '読書',
    hobby1_desc: '技術書やSF小説を読むのが好きで、思考を広げ、新しい知識を得るのに役立っています。',
    hobby2_title: '屋外活動',
    hobby2_desc: '週末はハイキングや登山が好きです。自然に近づくことで心身の健康を保っています。',
    hobby3_title: '写真撮影',
    hobby3_desc: '写真撮影、特に風景やストリート写真が大好きで、生活の中の美しい瞬間を捉えています。',
    hobby4_title: '囲碁・将棋',
    hobby4_desc: 'チェスと囲碁はリラックスするための選択肢です。論理的思考能力を向上させるのに役立ちます。',
    
    // プロジェクト
    projects_title: 'プロジェクト',
    project1_title: 'レスポンシブEコマースプラットフォーム',
    project1_desc: 'Reactで開発された現代的なEコマースウェブサイトで、商品表示、ショッピングカート、決済システムを備えています。',
    project2_title: '企業管理システム',
    project2_desc: 'Vue.jsに基づく企業内部管理システムで、データ可視化、タスク追跡、レポート生成を実装しています。',
    project3_title: 'オンライン学習プラットフォーム',
    project3_desc: 'ビデオコース、オンラインクイズ、学習進捗追跡をサポートする教育用Webアプリケーション。',
    learn_more: '詳細を見る',
    
    // お問い合わせ
    contact_title: 'お問い合わせ',
    contact_address: '住所：北京市海淀区',
    note: '以下の方法で直接メールでお問い合わせいただくこともできます',
    send_email: 'メールを送信',
    form_note: '以下のフォームに記入していただければ、できるだけ早くご返信いたします',
    your_name: 'お名前',
    your_email: 'メールアドレス',
    your_message: 'メッセージ',
    send_message: 'メッセージを送信',
    form_help: '送信をクリックするとメールクライアントが開きます。メールの送信を確認してください',
    
    // フッター
    copyright: '著作権',
    made_with_love: '❤️を込めて作成',
    
    // フォームメッセージ
    sending: '送信中...',
    success_title: '成功',
    success_message: 'メッセージは正常に送信されました！できるだけ早くご返信いたします。',
    error_title: 'エラー',
    error_message: 'メッセージの送信中にエラーが発生しました。後でもう一度お試しください。',
    email_ready: 'メールクライアントが開かれました。連絡を完了するにはメールを送信してください。',
    connection_error: 'サーバーに接続できません。直接メールでお問い合わせください。',
    confirm_email: 'メールクライアントを使用してメッセージを送信しますか？'
  }
};

// 当前语言
let currentLang = 'zh';

// 切换语言函数
function switchLanguage(lang) {
  if (!translations[lang]) return;
  
  currentLang = lang;
  
  // 保存语言选择到本地存储
  localStorage.setItem('preferred-language', lang);
  
  // 更新HTML元素的文本
  updatePageContent();
  
  // 更新HTML的lang属性
  document.documentElement.lang = lang === 'ja' ? 'ja' : (lang === 'en' ? 'en' : 'zh-CN');
}

// 根据当前语言更新页面内容
function updatePageContent() {
  const elements = document.querySelectorAll('[data-i18n]');
  
  elements.forEach(element => {
    const key = element.getAttribute('data-i18n');
    if (translations[currentLang][key]) {
      // 对于输入字段，更新placeholder，否则更新内部HTML
      if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
        element.placeholder = translations[currentLang][key];
      } else {
        element.innerHTML = translations[currentLang][key];
      }
    }
  });
}

// 初始化语言
function initLanguage() {
  // 从本地存储加载语言偏好
  const savedLang = localStorage.getItem('preferred-language');
  if (savedLang && translations[savedLang]) {
    currentLang = savedLang;
  }
  
  // 应用当前语言
  document.documentElement.lang = currentLang === 'ja' ? 'ja' : (currentLang === 'en' ? 'en' : 'zh-CN');
  updatePageContent();
  
  // 更新语言选择器显示
  document.querySelector('#language-select').value = currentLang;
}

document.addEventListener('DOMContentLoaded', () => {
  // 初始化语言
  initLanguage();
  
  // 语言选择器的变化事件
  const languageSelect = document.querySelector('#language-select');
  if (languageSelect) {
    languageSelect.addEventListener('change', function() {
      switchLanguage(this.value);
    });
  }
});

// 导出函数以供其他脚本使用
window.i18n = {
  t: function(key) {
    return translations[currentLang][key] || key;
  },
  getCurrentLang: function() {
    return currentLang;
  },
  switchLanguage: switchLanguage
}; 