// 多语言支持
const translations = {
  zh: {
    // 导航栏
    nav_about: '关于我',
    nav_education: '教育背景',
    nav_experience: '项目经历',
    nav_hobbies: '兴趣爱好',
    nav_projects: '项目',
    nav_contact: '联系我',
    nav_basic_info: '基本信息',
    nav_skills: '专业技能',
    nav_extracurricular: '课外活动',
    
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
    skills_title: '专业技能',
    
    // 基本信息
    basic_info_title: '基本信息',
    name: '姓名',
    birth_date: '出生日期',
    gender: '性别',
    male: '男',
    female: '女',
    age: '年龄',
    phone: '手机号码',
    email: '邮箱',
    nationality: '国籍',
    japan: '日本',
    education_level: '学历',
    weixin: '微信',
    address: '地址',
    age_unit: '岁',
    present: '至今',
    education_status: '本科大四',
    activities: '活动内容',
    skill_hsk: '汉语水平考试 (hsk6级)',
    skill_fullstack: 'springboot+vue全栈开发',
    skill_dl: 'python+pytorch深度学习',
    skill_web: 'HTML+CSS+JavaScript',
    skill_db: 'MySQL',
    skill_java: 'Java',
    skill_llm: '深度学习大语言模型的理解与应用',
    skill_jlpt: '日语N1水平',
    skill_bookkeeping: '全商簿记鉴定2级(日本)',
    skill_it: '情报处理鉴定2级(日本)',
    address_jp: '日本 福冈县春日市昇町7丁目90番地',
    address_cn: '中国 辽宁省沈阳市大东区大北关街75号A3-2-6-1',
    
    // 教育背景
    education_title: '教育背景',
    edu1_school: '北京理工大学',
    edu1_major: '计算机科学与技术',
    main_courses: '主修课程：',
    edu1_courses: 'C++面向对象、数据结构与算法、C语言程序设计、操作系统、汇编语言与接口技术、计算机系统导论、计算机网络、计算机组成原理、高级语言程序设计、工程制图',
    edu2_school: '福冈县立博多青松高等学校',
    edu2_major: '情报科学科（商学科）',
    edu2_courses: '基础高中教育',
    
    // 项目经历
    experience_title: '项目经历',
    project1_title: '图书借阅管理系统',
    project1_desc: '开发一个完整的图书借阅管理系统，具备完善支持用户在线借阅、还书、查询书籍等功能。',
    project1_tech: '在团队合作开发中，我负责前端设计和后端API的实现，选择Spring Boot框架进行开发。前端使用Vuejs，数据库使用MySQL存储用户与书籍信息。项目包括用户登录、书籍查询、借阅历史查询，根据登陆的用户类型（管理员或普通用户）提供不同功能。',
    
    project2_title: 'AI图像识别系统',
    project2_desc: '手写数字识别系统，该系统可以通过图像识别技术识别用户手写数字。',
    project2_tech: '在该项目中，核心功能是使用 PyTorch 训练模型实现 CNN 模型实现图像的识别功能。系统使用 Flask、springboot、vue、MySQL 等技术构建，我主要负责前后端交互部分。',
    
    project3_title: '日语文本信息抽取与知识图谱构建系统',
    project3_desc: '基于大语言模型构建日语文本信息抽取系统，关系三元组，从而实现对日语文本内容的分析。',
    project3_tech: '该项目的核心在于，通过对大量日语语料的研究，提取文本中出现的实体概念和关系，并整合成关系三元组图谱。项目中，通过使用字符级和词级别的特征处理，解决了日语文本分析的挑战。',
    
    project4_title: '软件开发实习 - 北京理工大学计算机学院',
    project4_desc: '基于Qt的远程通信软件',
    project4_tech: '在开发局域网下的实时通信软件过程中，我负责了UI设计与实时文本信息传递功能的实现。确保用户可以方便地发送和接收消息。',
    
    view_project: '查看项目',
    project_desc: '项目描述：',
    project_tech: '项目技术：',
    
    // 专业技能
    skills_title: '专业技能',
    
    // 课外活动
    extracurricular_title: '课外活动',
    aikido_title: '合气道部',
    aikido_content: '・积极参与合气道训练，掌握基本技法\n・参与社团演武和交流活动，出席了进几年的合气道全国演武大会\n・在福冈天神道场进行合气道训练\n・培养了团队协作精神和自我修养能力',
    
    hiking_title: '登山社团',
    hiking_content: '・定期参与登山活动，提高体能和意志力\n・学习户外生存技能和安全知识\n・参与社团组织的各类户外探险活动',
    
    japanese_club_title: '日语文化社团',
    japanese_club_content: '・组织日语社团活动，促进中日文化交流\n・参与每年学校举办的日本文化节活动的策划和实施\n・协助举办日语演讲比赛和文化讲座',
    
    volunteer_title: '学校组织的志愿者活动',
    volunteer_content: '・留学生迎新志愿者活动\n・国际文化节志愿者活动\n・运动会志愿者活动\n・中日和平友好条约缔结大会与交流会\n・CATTI杯大赛志愿者',
    
    // 联系方式
    contact_title: '联系方式',
    contact_info: '联系信息',
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
    nav_experience: 'Projects',
    nav_hobbies: 'Hobbies',
    nav_projects: 'Projects',
    nav_contact: 'Contact',
    nav_basic_info: 'Basic Info',
    nav_skills: 'Skills',
    nav_extracurricular: 'Extracurricular',
    
    // Language selector
    language_selector: 'Language',
    
    // Header
    welcome: 'Welcome to My Personal Website',
    subtitle: 'Frontend Developer / UI Designer',
    resume_title: 'Resume',
    
    // Basic Info
    basic_info_title: 'Basic Information',
    name: 'Name',
    birth_date: 'Birth Date',
    gender: 'Gender',
    male: 'Male',
    female: 'Female',
    age: 'Age',
    phone: 'Phone',
    email: 'Email',
    nationality: 'Nationality',
    japan: 'Japan',
    education_level: 'Education',
    weixin: 'WeChat',
    address: 'Address',
    age_unit: 'years old',
    present: 'Present',
    education_status: 'Senior (4th year undergraduate)',
    activities: 'Activities',
    skill_hsk: 'Chinese Proficiency Test (HSK Level 6)',
    skill_fullstack: 'Full-stack Development with Spring Boot + Vue',
    skill_dl: 'Deep Learning with Python + PyTorch',
    skill_web: 'HTML+CSS+JavaScript',
    skill_db: 'MySQL',
    skill_java: 'Java',
    skill_llm: 'Understanding and Application of Deep Learning Large Language Models',
    skill_jlpt: 'Japanese Language Proficiency Test N1',
    skill_bookkeeping: 'Japan Commercial Bookkeeping Level 2',
    skill_it: 'Japan Information Technology Certification Level 2',
    address_jp: '7-90 Nobori-cho, Kasuga City, Fukuoka Prefecture, Japan',
    address_cn: 'A3-2-6-1, 75 Dabeiguan Street, Dadong District, Shenyang City, Liaoning Province, China',
    
    // Education
    education_title: 'Education',
    edu1_school: 'Beijing Institute of Technology',
    edu1_major: 'Computer Science and Technology',
    main_courses: 'Main Courses:',
    edu1_courses: 'Object-Oriented C++, Data Structures and Algorithms, C Programming, Operating Systems, Assembly Language and Interface Technology, Introduction to Computer Systems, Computer Networks, Computer Architecture, Advanced Programming Languages, Engineering Drawing',
    edu2_school: 'Fukuoka Prefectural Hakata Seisho High School',
    edu2_major: 'Information Science (Business)',
    edu2_courses: 'Basic High School Education',
    
    // Project Experience
    experience_title: 'Project Experience',
    project1_title: 'Library Management System',
    project1_desc: 'Development of a complete library management system with online borrowing, returning, and book search functions.',
    project1_tech: 'In team development, I was responsible for frontend design and backend API implementation using Spring Boot framework. Frontend was built with Vuejs, and MySQL database was used for user and book information management. Implemented user login, book search, and borrowing history features with different functionalities based on user type (admin or regular user).',
    
    project2_title: 'AI Image Recognition System',
    project2_desc: 'Handwritten digit recognition system - A system that uses image recognition technology to identify user-written numbers.',
    project2_tech: 'Implemented image recognition functionality using PyTorch to train CNN models. Built the system using Flask, Spring Boot, Vue, and MySQL technologies. Responsible for frontend and backend integration.',
    
    project3_title: 'Japanese Text Information Extraction and Knowledge Graph Construction System',
    project3_desc: 'Japanese text information extraction system and relationship triple construction based on large language models.',
    project3_tech: 'Analyzed large Japanese corpora to extract entity concepts and relationships to construct relationship triple graphs. Solved Japanese text analysis challenges through character-level and word-level feature processing. Conducted Japanese text analysis using deep learning models.',
    
    project4_title: 'Software Development Internship - School of Computer Science, BIT',
    project4_desc: 'Qt-based Remote Communication Software',
    project4_tech: 'In LAN real-time communication software development, responsible for UI design and real-time text message transmission implementation. Achieved fast and stable message transfer based on efficient communication protocols.',
    
    view_project: 'View Project',
    project_desc: 'Project Description:',
    project_tech: 'Technologies Used:',
    
    // Professional Skills
    skills_title: 'Professional Skills',
    
    // Extracurricular Activities
    extracurricular_title: 'Extracurricular Activities',
    aikido_title: 'Aikido Club',
    aikido_content: 'Activities:\n・Mastered basic Aikido techniques\n・Participated in demonstrations and exchange activities\n・Attended National Aikido Demonstration Conventions\n・Trained at Fukuoka Tenjin Dojo\n・Developed teamwork and self-cultivation abilities',
    
    hiking_title: 'Hiking Club',
    hiking_content: 'Activities:\n・Regular participation in hiking activities\n・Improved physical fitness and willpower\n・Learned outdoor survival skills and safety knowledge\n・Participated in club-organized outdoor adventures',
    
    japanese_club_title: 'Japanese Culture Club',
    japanese_club_content: 'Activities:\n・Organized Japanese club activities\n・Promoted China-Japan cultural exchange\n・Planned and implemented school Japanese cultural festivals\n・Assisted in organizing Japanese speech contests and cultural lectures',
    
    volunteer_title: 'School Volunteer Activities',
    volunteer_content: 'Activities:\n・International student welcome volunteer\n・International cultural festival volunteer\n・Sports day volunteer\n・China-Japan Peace and Friendship Treaty Convention and Exchange Meeting\n・CATTI Cup Competition volunteer',
    
    // Contact
    contact_title: 'Contact',
    contact_info: 'Contact Information',
    form_note: 'Fill out the form below and I will get back to you as soon as possible',
    your_name: 'Your Name',
    your_email: 'Your Email',
    your_message: 'Your Message',
    send_message: 'Send Message',
    form_help: 'Clicking send will open your email client',
    
    // Footer
    copyright: 'Copyright',
    made_with_love: 'Made with ❤️',
    
    // Form messages
    sending: 'Sending...',
    success_title: 'Success',
    success_message: 'Your message has been sent! I will reply as soon as possible.',
    error_title: 'Error',
    error_message: 'Error sending message. Please try again later.',
    email_ready: 'Email client has been opened.',
    connection_error: 'Unable to connect to server. Please contact me directly via email.',
    confirm_email: 'Would you like to send an email?'
  },
  
  ja: {
    // 导航栏
    nav_about: '自己紹介',
    nav_education: '学歴',
    nav_experience: 'プロジェクト経験',
    nav_hobbies: '趣味',
    nav_projects: 'プロジェクト',
    nav_contact: '連絡先',
    nav_basic_info: '基本情報',
    nav_skills: '専門スキル',
    nav_extracurricular: '課外活動',
    
    // Language selector
    language_selector: '言語',
    
    // 头部
    welcome: 'ようこそ',
    subtitle: 'フロントエンド開発者',
    resume_title: '履歴書',
    
    // 关于我
    about_title: '自己紹介',
    about_p1: 'はじめまして！私は美しく使いやすいウェブサイトの作成に情熱を持つ開発者です。新しい技術を学び、アイデアを実現することが大好きです。',
    about_p2: 'フロントエンド開発の経験があり、最新のWeb開発技術に精通しています。ユーザー体験とコード品質を重視し、効率的で美しいデジタルプロダクトの作成に努めています。',
    skills_title: '専門スキル',
    
    // 基本信息
    basic_info_title: '基本情報',
    name: '氏名',
    birth_date: '生年月日',
    gender: '性別',
    male: '男性',
    female: '女性',
    age: '年齢',
    phone: '携帯電話',
    email: 'メール',
    nationality: '国籍',
    japan: '日本',
    education_level: '学歴',
    weixin: 'WeChat',
    address: '住所',
    age_unit: '歳',
    present: '現在',
    education_status: '学部4年生',
    activities: '活動内容',
    skill_hsk: '中国語検定試験（HSK6級）',
    skill_fullstack: 'Spring Boot + Vueフルスタック開発',
    skill_dl: 'Python + PyTorch深層学習',
    skill_web: 'HTML+CSS+JavaScript',
    skill_db: 'MySQL',
    skill_java: 'Java',
    skill_llm: '深層学習大規模言語モデルの理解と応用',
    skill_jlpt: '日本語能力試験N1',
    skill_bookkeeping: '全商簿記検定2級',
    skill_it: '情報処理検定2級',
    address_jp: '〒816-0851 福岡県春日市昇町7丁目90番地',
    address_cn: '中国遼寧省瀋陽市大東区大北関街75号A3-2-6-1',
    
    // 教育背景
    education_title: '学歴',
    edu1_school: '北京理工大学',
    edu1_major: 'コンピュータサイエンス学科',
    main_courses: '主な履修科目：',
    edu1_courses: 'C++オブジェクト指向、データ構造とアルゴリズム、C言語プログラミング、オペレーティングシステム、アセンブリ言語とインターフェース技術、コンピュータシステム入門、コンピュータネットワーク、コンピュータアーキテクチャ、高級言語プログラミング、工業製図',
    edu2_school: '福岡県立博多青松高等学校',
    edu2_major: '情報科学科（商学科）',
    edu2_courses: '基礎高校教育',
    
    // 项目经历
    experience_title: 'プロジェクト経験',
    project1_title: '図書貸出管理システム',
    project1_desc: 'オンラインでの本の貸出、返却、検索などの機能を備えた完全な図書貸出管理システムの開発。',
    project1_tech: 'チーム開発において、フロントエンド設計とバックエンドAPIの実装を担当。Spring Bootフレームワークを使用し、フロントエンドはVuejs、データベースはMySQLを使用してユーザーと書籍情報を管理。ユーザーログイン、書籍検索、貸出履歴照会機能を実装し、ログインユーザーの種類（管理者または一般ユーザー）に応じて異なる機能を提供。',
    
    project2_title: 'AI画像認識システム',
    project2_desc: '手書き数字認識システム - ユーザーが書いた数字を画像認識技術で識別するシステム。',
    project2_tech: 'PyTorchを使用してCNNモデルを訓練し、画像認識機能を実装。Flask、Spring Boot、Vue、MySQLなどの技術を使用してシステムを構築。フロントエンドとバックエンドの連携を担当。',
    
    project3_title: '日本語テキスト情報抽出・知識グラフ構築システム',
    project3_desc: '大規模言語モデルを基にした日本語テキスト情報抽出システムと関係トリプルの構築。',
    project3_tech: '大量の日本語コーパスを分析し、テキスト中の実体概念と関係を抽出して関係トリプルグラフを構築。文字レベルと単語レベルの特徴処理により、日本語テキスト分析の課題を解決。深層学習モデルを使用して日本語テキスト分析を実施。',
    
    project4_title: 'ソフトウェア開発インターンシップ - 北京理工大学コンピュータ学院',
    project4_desc: 'Qtベースのリモート通信ソフトウェア',
    project4_tech: 'LANでのリアルタイム通信ソフトウェア開発において、UIデザインとリアルタイムテキストメッセージ送信機能の実装を担当。効率的な通信プロトコルを基に、メッセージの高速かつ安定した転送を実現。',
    
    view_project: 'プロジェクト詳細',
    project_desc: 'プロジェクト概要：',
    project_tech: '使用技術：',
    
    // 专业技能
    skills_title: '専門スキル',
    
    // 课外活动
    extracurricular_title: '課外活動',
    aikido_title: '合気道部',
    aikido_content: '活動内容：\n・合気道の基本技術の習得\n・演武会や交流活動への参加\n・全国合気道演武大会への出席\n・福岡天神道場での合気道練習\n・チームワークと自己修養能力の向上',
    
    hiking_title: '登山サークル',
    hiking_content: '活動内容：\n・定期的な登山活動への参加\n・体力と精神力の向上\n・アウトドアサバイバルスキルと安全知識の習得\n・サークル主催の野外活動への参加',
    
    japanese_club_title: '日本語文化サークル',
    japanese_club_content: '活動内容：\n・日本語サークル活動の運営\n・中日文化交流の促進\n・学校の日本文化祭の企画と実施\n・日本語スピーチコンテストと文化講座の開催支援',
    
    volunteer_title: '学校ボランティア活動',
    volunteer_content: '活動内容：\n・留学生歓迎ボランティア\n・国際文化祭ボランティア\n・運動会ボランティア\n・日中平和友好条約締結大会と交流会\n・CATTIカップ大会ボランティア',
    
    // 联系方式
    contact_title: '連絡先',
    contact_info: '連絡先情報',
    form_note: '以下のフォームにご記入ください。できるだけ早くご返信いたします。',
    your_name: 'お名前',
    your_email: 'メールアドレス',
    your_message: 'メッセージ',
    send_message: '送信',
    form_help: '送信をクリックするとメールクライアントが開きます',
    
    // 页脚
    copyright: '著作権',
    made_with_love: '❤️を込めて作成',
    
    // 表单消息
    sending: '送信中...',
    success_title: '送信完了',
    success_message: 'メッセージを送信しました。できるだけ早くご返信いたします。',
    error_title: 'エラー',
    error_message: '送信中にエラーが発生しました。後ほど再度お試しください。',
    email_ready: 'メールクライアントを開きました。',
    connection_error: 'サーバーに接続できません。直接メールでご連絡ください。',
    confirm_email: 'メールを送信しますか？'
  }
};

// 当前语言
let currentLang = 'zh';

// 添加语言切换动画效果
function switchLanguage(lang) {
    localStorage.setItem('preferred_language', lang);
    document.body.style.opacity = 0;
    
    setTimeout(() => {
        currentLang = lang;
        updatePageContent();
        showLanguageIndicator(lang);
        document.body.style.opacity = 1;
    }, 200);
}

// 检测浏览器语言
function detectBrowserLanguage() {
    const browserLang = navigator.language.split('-')[0];
    return ['zh', 'en', 'ja'].includes(browserLang) ? browserLang : 'en';
}

// 初始化语言设置
function initLanguage() {
    // 优先使用保存的语言设置
    currentLang = localStorage.getItem('preferred_language') 
                 || detectBrowserLanguage() 
                 || 'zh';
    
    // 设置语言选择器的值
    document.getElementById('language-select').value = currentLang;
    
    // 更新页面内容
    updatePageContent();
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

function showLanguageIndicator(lang) {
    const indicator = document.getElementById('languageIndicator');
    if (!indicator) return;
    
    const langNames = {
        'zh': '中文',
        'en': 'English',
        'ja': '日本語'
    };
    
    indicator.textContent = `Language: ${langNames[lang]}`;
    indicator.classList.add('show');
    
    setTimeout(() => {
        indicator.classList.remove('show');
    }, 2000);
}

function validateTranslations() {
    const languages = ['zh', 'en', 'ja'];
    const missingTranslations = {};
    
    // 获取所有翻译键
    const allKeys = new Set();
    languages.forEach(lang => {
        Object.keys(translations[lang]).forEach(key => allKeys.add(key));
    });
    
    // 检查每种语言是否都有所有的翻译
    languages.forEach(lang => {
        const missing = [];
        allKeys.forEach(key => {
            if (!translations[lang][key]) {
                missing.push(key);
            }
        });
        if (missing.length > 0) {
            missingTranslations[lang] = missing;
        }
    });
    
    return missingTranslations;
}

