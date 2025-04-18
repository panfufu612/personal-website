// 主题控制脚本 - 集中管理动态背景和暗色模式开关

document.addEventListener('DOMContentLoaded', function() {
    // 获取主题开关元素
    const themeSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
    const dynamicBgSwitch = document.querySelector('.dynamic-bg-switch input[type="checkbox"]');
    const themeSwitchText = document.querySelector('.theme-status');
    const dynamicBgText = document.querySelector('.dynamic-bg-status');
    
    // 创建主题控制面板
    createThemeControlPanel();
    
    // 初始化主题状态
    initializeThemeStatus();
    
    // 事件监听器
    if (themeSwitch) {
        themeSwitch.addEventListener('change', switchTheme, false);
    }
    
    if (dynamicBgSwitch) {
        dynamicBgSwitch.addEventListener('change', toggleDynamicBackground, false);
    }
    
    // 检查本地存储中的主题设置
    if (localStorage.getItem('theme') === 'dark') {
        document.documentElement.setAttribute('data-theme', 'dark');
        if (themeSwitch) {
            themeSwitch.checked = true;
        }
    }
    
    // 检查本地存储中的动态背景设置
    const dynamicBgEnabled = localStorage.getItem('dynamicBgEnabled');
    if (dynamicBgEnabled === 'true') {
        if (dynamicBgSwitch) {
            dynamicBgSwitch.checked = true;
        }
        enableDynamicBackground();
    } else if (dynamicBgEnabled === 'false') {
        if (dynamicBgSwitch) {
            dynamicBgSwitch.checked = false;
        }
        disableDynamicBackground();
    }
    
    // 更新主题状态文本
    updateThemeStatus();
    updateDynamicBgStatus();
});

// 创建主题控制面板
function createThemeControlPanel() {
    // 检查是否已存在面板
    if (document.querySelector('.theme-control-panel')) return;
    
    // 创建面板元素
    const panel = document.createElement('div');
    panel.className = 'theme-control-panel';
    panel.innerHTML = `
        <div class="panel-header">
            <h3 data-i18n="theme_control">主题控制</h3>
            <button class="close-btn">&times;</button>
        </div>
        <div class="panel-body">
            <div class="switch-container">
                <span data-i18n="dark_mode">暗色模式</span>
                <label class="theme-switch">
                    <input type="checkbox">
                    <span class="slider round"></span>
                </label>
            </div>
            <div class="switch-container">
                <span data-i18n="dynamic_bg">动态背景</span>
                <label class="dynamic-bg-switch">
                    <input type="checkbox">
                    <span class="slider round"></span>
                </label>
            </div>
        </div>
    `;
    
    // 创建控制面板按钮
    const controlBtn = document.createElement('button');
    controlBtn.className = 'theme-control-btn';
    controlBtn.innerHTML = '<i class="fas fa-cog"></i>';
    
    // 添加到页面
    document.body.appendChild(panel);
    document.body.appendChild(controlBtn);
    
    // 添加事件监听
    controlBtn.addEventListener('click', function() {
        panel.classList.toggle('show');
    });
    
    // 关闭按钮
    const closeBtn = panel.querySelector('.close-btn');
    closeBtn.addEventListener('click', function() {
        panel.classList.remove('show');
    });
    
    // 重新获取新面板中的开关元素
    const themeSwitch = panel.querySelector('.theme-switch input[type="checkbox"]');
    const dynamicBgSwitch = panel.querySelector('.dynamic-bg-switch input[type="checkbox"]');
    
    // 设置开关初始状态
    if (localStorage.getItem('theme') === 'dark') {
        themeSwitch.checked = true;
    }
    
    if (localStorage.getItem('dynamicBgEnabled') === 'true') {
        dynamicBgSwitch.checked = true;
    }
    
    // 添加事件监听器
    themeSwitch.addEventListener('change', switchTheme, false);
    dynamicBgSwitch.addEventListener('change', toggleDynamicBackground, false);
}

// 初始化主题状态
function initializeThemeStatus() {
    // 检查系统偏好
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        if (!localStorage.getItem('theme')) {
            document.documentElement.setAttribute('data-theme', 'dark');
            const themeSwitches = document.querySelectorAll('.theme-switch input[type="checkbox"]');
            themeSwitches.forEach(sw => {
                sw.checked = true;
            });
            localStorage.setItem('theme', 'dark');
        }
    }
    
    // 检查动态背景默认设置
    if (localStorage.getItem('dynamicBgEnabled') === null) {
        localStorage.setItem('dynamicBgEnabled', 'true');
        const dynamicBgSwitches = document.querySelectorAll('.dynamic-bg-switch input[type="checkbox"]');
        dynamicBgSwitches.forEach(sw => {
            sw.checked = true;
        });
        enableDynamicBackground();
    }
}

// 切换主题
function switchTheme(e) {
    const isChecked = e.target.checked;
    if (isChecked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
    }
    
    // 同步所有主题开关
    const themeSwitches = document.querySelectorAll('.theme-switch input[type="checkbox"]');
    themeSwitches.forEach(sw => {
        sw.checked = isChecked;
    });
    
    // 更新主题状态文本
    updateThemeStatus();
    
    // 调整动态背景颜色
    adjustDynamicBackgroundColors();
}

// 切换动态背景
function toggleDynamicBackground(e) {
    const isChecked = e.target.checked;
    
    // 同步所有动态背景开关
    const dynamicBgSwitches = document.querySelectorAll('.dynamic-bg-switch input[type="checkbox"]');
    dynamicBgSwitches.forEach(sw => {
        sw.checked = isChecked;
    });
    
    if (isChecked) {
        enableDynamicBackground();
        localStorage.setItem('dynamicBgEnabled', 'true');
    } else {
        disableDynamicBackground();
        localStorage.setItem('dynamicBgEnabled', 'false');
    }
    
    // 更新动态背景状态文本
    updateDynamicBgStatus();
}

// 启用动态背景
function enableDynamicBackground() {
    const gradientCanvas = document.getElementById('gradient-canvas');
    const dynamicBg = document.getElementById('dynamic-background');
    
    if (gradientCanvas) {
        gradientCanvas.style.display = 'block';
    }
    
    if (dynamicBg) {
        dynamicBg.style.display = 'block';
    }
}

// 禁用动态背景
function disableDynamicBackground() {
    const gradientCanvas = document.getElementById('gradient-canvas');
    const dynamicBg = document.getElementById('dynamic-background');
    
    if (gradientCanvas) {
        gradientCanvas.style.display = 'none';
    }
    
    if (dynamicBg) {
        dynamicBg.style.display = 'none';
    }
}

// 调整动态背景颜色
function adjustDynamicBackgroundColors() {
    const isDarkMode = document.documentElement.getAttribute('data-theme') === 'dark';
    const dynamicBg = document.getElementById('dynamic-background');
    
    if (dynamicBg) {
        if (isDarkMode) {
            dynamicBg.style.opacity = '0.3';
        } else {
            dynamicBg.style.opacity = '0.7';
        }
    }
}

// 更新主题状态文本
function updateThemeStatus() {
    const themeSwitchTexts = document.querySelectorAll('.theme-status');
    const isDarkMode = document.documentElement.getAttribute('data-theme') === 'dark';
    const currentLang = localStorage.getItem('language') || 'zh';
    
    let statusText = '';
    
    if (currentLang === 'zh') {
        statusText = isDarkMode ? '暗色模式' : '亮色模式';
    } else if (currentLang === 'en') {
        statusText = isDarkMode ? 'Dark Mode' : 'Light Mode';
    } else if (currentLang === 'ja') {
        statusText = isDarkMode ? 'ダークモード' : 'ライトモード';
    }
    
    themeSwitchTexts.forEach(text => {
        if (text) {
            text.textContent = statusText;
        }
    });
}

// 更新动态背景状态文本
function updateDynamicBgStatus() {
    const dynamicBgTexts = document.querySelectorAll('.dynamic-bg-status');
    const isDynamicBgEnabled = localStorage.getItem('dynamicBgEnabled') === 'true';
    const currentLang = localStorage.getItem('language') || 'zh';
    
    let statusText = '';
    
    if (currentLang === 'zh') {
        statusText = isDynamicBgEnabled ? '动态背景: 开启' : '动态背景: 关闭';
    } else if (currentLang === 'en') {
        statusText = isDynamicBgEnabled ? 'Dynamic BG: ON' : 'Dynamic BG: OFF';
    } else if (currentLang === 'ja') {
        statusText = isDynamicBgEnabled ? '動的背景: オン' : '動的背景: オフ';
    }
    
    dynamicBgTexts.forEach(text => {
        if (text) {
            text.textContent = statusText;
        }
    });
}

// 覆盖语言切换函数，确保在语言切换时更新主题状态文本
const originalSwitchLanguage = window.switchLanguage;
window.switchLanguage = function(lang) {
    if (originalSwitchLanguage) {
        originalSwitchLanguage(lang);
    }
    updateThemeStatus();
    updateDynamicBgStatus();
}; 