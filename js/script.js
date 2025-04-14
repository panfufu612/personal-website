// 初始化脚本
document.addEventListener('DOMContentLoaded', () => {
    console.log("欢迎访问我的个人简历！");
    
    // 初始化语言设置
    initLanguage();
    
    // 语言选择器的变化事件
    const languageSelect = document.querySelector('#language-select');
    if (languageSelect) {
        languageSelect.addEventListener('change', function() {
            switchLanguage(this.value);
        });
    }
    
    // 处理联系表单提交
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', handleFormSubmit);
    }
});

// 初始化语言设置
function initLanguage() {
    // 优先使用保存的语言设置
    const savedLang = localStorage.getItem('preferred_language');
    const browserLang = detectBrowserLanguage();
    currentLang = savedLang || browserLang || 'zh';
    
    // 设置语言选择器的值
    const languageSelect = document.getElementById('language-select');
    if (languageSelect) {
        languageSelect.value = currentLang;
    }
    
    // 更新页面内容
    updatePageContent();
}

// 检测浏览器语言
function detectBrowserLanguage() {
    const browserLang = navigator.language.toLowerCase();
    if (browserLang.startsWith('zh')) return 'zh';
    if (browserLang.startsWith('ja')) return 'ja';
    return 'en';
}

// 切换语言
function switchLanguage(lang) {
    if (currentLang === lang) return;
    
    // 保存语言偏好
    localStorage.setItem('preferred_language', lang);
    
    // 添加过渡效果
    document.body.style.opacity = '0';
    
    setTimeout(() => {
        currentLang = lang;
        updatePageContent();
        document.body.style.opacity = '1';
    }, 200);
}

// 更新页面内容
function updatePageContent() {
    // 更新所有带有 data-i18n 属性的元素
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        const translation = translations[currentLang][key];
        
        if (translation) {
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                // 对于输入框，更新 placeholder
                element.placeholder = translation;
            } else {
                // 对于其他元素，更新内容
                element.textContent = translation;
            }
        }
    });
    
    // 更新动态内容
    updateDynamicContent();
}

// 更新动态内容
function updateDynamicContent() {
    // 更新标题
    document.title = translations[currentLang].resume_title;
    
    // 更新年龄显示
    const ageElement = document.getElementById('dynamic-age');
    if (ageElement) {
        const age = calculateAge('2001-06-12');
        ageElement.textContent = age;
    }
}

// 处理表单提交
async function handleFormSubmit(e) {
    e.preventDefault();
    
    const submitButton = this.querySelector('button[type="submit"]');
    const originalButtonText = submitButton.textContent;
    submitButton.textContent = translations[currentLang].sending;
    submitButton.disabled = true;
    
    try {
        const name = this.querySelector('input[name="name"]').value;
        const email = this.querySelector('input[name="email"]').value;
        const message = this.querySelector('textarea[name="message"]').value;
        
        const mailtoLink = `mailto:675294207@qq.com?subject=${encodeURIComponent(name)}&body=${encodeURIComponent(`${name}\n${email}\n\n${message}`)}`;
        window.location.href = mailtoLink;
        
        showMessage(
            translations[currentLang].success_title,
            translations[currentLang].email_ready,
            'success'
        );
        this.reset();
    } catch (error) {
        console.error('Error:', error);
        showMessage(
            translations[currentLang].error_title,
            translations[currentLang].connection_error,
            'error'
        );
    } finally {
        submitButton.textContent = originalButtonText;
        submitButton.disabled = false;
    }
}

// 显示消息提示
function showMessage(title, message, type) {
    const messageDiv = document.createElement('div');
    messageDiv.className = `message-popup ${type}`;
    messageDiv.innerHTML = `
        <div class="message-content">
            <h3>${title}</h3>
            <p>${message}</p>
            <button class="close-message">OK</button>
        </div>
    `;
    
    document.body.appendChild(messageDiv);
    
    const closeButton = messageDiv.querySelector('.close-message');
    closeButton.addEventListener('click', () => messageDiv.remove());
    
    setTimeout(() => {
        if (document.body.contains(messageDiv)) {
            messageDiv.remove();
        }
    }, 5000);
}

// 计算年龄
function calculateAge(birthDate) {
    const birth = new Date(birthDate);
    const today = new Date();
    let age = today.getFullYear() - birth.getFullYear();
    const monthDiff = today.getMonth() - birth.getMonth();
    
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
        age--;
    }
    
    return age;
} 