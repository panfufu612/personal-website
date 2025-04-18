// 暗色模式控制
document.addEventListener('DOMContentLoaded', function() {
    initializeDarkMode();
    
    // 监听系统主题变化
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
        if (!localStorage.getItem('theme-preference')) {
            updateThemeWithoutToggle(event.matches);
        }
    });
});

// 初始化暗色模式
function initializeDarkMode() {
    const existingPanel = document.querySelector('.theme-switch-wrapper');
    if (existingPanel) {
        existingPanel.remove();
    }
    
    // 创建控制面板
    createThemeControlPanel();
    
    // 检查本地存储或系统偏好
    const savedTheme = localStorage.getItem('theme-preference');
    const systemPrefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    // 根据保存的主题或系统偏好应用主题
    if (savedTheme === 'dark' || (savedTheme === null && systemPrefersDark)) {
        document.documentElement.setAttribute('data-theme', 'dark');
        
        // 更新开关状态
        const darkModeCheckbox = document.getElementById('dark-mode-toggle');
        if (darkModeCheckbox) {
            darkModeCheckbox.checked = true;
        }
        
        // 调整动态背景
        adjustDynamicBackground(true);
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        
        // 更新开关状态
        const darkModeCheckbox = document.getElementById('dark-mode-toggle');
        if (darkModeCheckbox) {
            darkModeCheckbox.checked = false;
        }
        
        // 调整动态背景
        adjustDynamicBackground(false);
    }
    
    // 更新状态文本
    updateThemeStatusText();
    
    // 检查动态背景状态并更新
    const dynamicBgEnabled = localStorage.getItem('dynamic-bg-enabled');
    if (dynamicBgEnabled !== null) {
        const dynamicBgCheckbox = document.getElementById('dynamic-bg-toggle');
        if (dynamicBgCheckbox) {
            dynamicBgCheckbox.checked = dynamicBgEnabled === 'true';
        }
    }
}

// 创建主题控制面板
function createThemeControlPanel() {
    const controlPanel = document.createElement('div');
    controlPanel.className = 'theme-control-panel';
    
    // 创建暗色模式开关
    const darkModeSwitch = createSwitchContainer(
        'dark-mode-toggle',
        'mode-switch',
        getText('dark_mode', 'light_mode'),
        toggleDarkMode
    );
    
    // 创建动态背景开关
    const dynamicBgSwitch = createSwitchContainer(
        'dynamic-bg-toggle',
        'bg-switch',
        getText('dynamic_bg', ''),
        function(e) {
            const isChecked = e.target.checked;
            localStorage.setItem('dynamic-bg-enabled', isChecked);
            
            // 显示或隐藏动态背景
            const gradientCanvas = document.getElementById('gradient-bg');
            const dynamicElements = document.querySelectorAll('.bubble, .star');
            
            if (gradientCanvas) {
                gradientCanvas.style.opacity = isChecked ? '1' : '0';
            }
            
            dynamicElements.forEach(el => {
                el.style.display = isChecked ? 'block' : 'none';
            });
            
            // 更新状态文本
            updateThemeStatusText();
        }
    );
    
    // 添加至控制面板
    controlPanel.appendChild(darkModeSwitch);
    controlPanel.appendChild(dynamicBgSwitch);
    
    // 添加至页面
    document.body.appendChild(controlPanel);
    
    // 初始化动态背景状态
    const dynamicBgEnabled = localStorage.getItem('dynamic-bg-enabled');
    const dynamicBgCheckbox = document.getElementById('dynamic-bg-toggle');
    if (dynamicBgCheckbox) {
        dynamicBgCheckbox.checked = dynamicBgEnabled === null ? true : dynamicBgEnabled === 'true';
    }
}

// 创建开关容器
function createSwitchContainer(id, switchClass, labelTexts, toggleFunction) {
    const container = document.createElement('div');
    container.className = 'switch-container';
    
    // 标签容器
    const labelContainer = document.createElement('div');
    labelContainer.className = 'switch-label-container';
    
    // 标题
    const title = document.createElement('div');
    title.className = 'switch-title';
    title.textContent = labelTexts.title;
    labelContainer.appendChild(title);
    
    // 状态文本
    const status = document.createElement('div');
    status.className = 'switch-status';
    status.setAttribute('data-status-for', id);
    status.textContent = labelTexts.status;
    labelContainer.appendChild(status);
    
    // 开关
    const switchWrapper = document.createElement('label');
    switchWrapper.className = 'theme-switch ' + switchClass;
    
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.id = id;
    checkbox.addEventListener('change', toggleFunction);
    
    const slider = document.createElement('span');
    slider.className = 'slider';
    
    switchWrapper.appendChild(checkbox);
    switchWrapper.appendChild(slider);
    
    // 组装
    container.appendChild(labelContainer);
    container.appendChild(switchWrapper);
    
    return container;
}

// 切换暗色模式
function toggleDarkMode(e) {
    const isDark = e.target.checked;
    
    if (isDark) {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme-preference', 'dark');
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme-preference', 'light');
    }
    
    // 调整动态背景
    adjustDynamicBackground(isDark);
    
    // 更新状态文本
    updateThemeStatusText();
}

// 不切换开关的情况下更新主题
function updateThemeWithoutToggle(isDark) {
    if (isDark) {
        document.documentElement.setAttribute('data-theme', 'dark');
        
        // 更新开关状态，但不触发事件
        const darkModeCheckbox = document.getElementById('dark-mode-toggle');
        if (darkModeCheckbox) {
            darkModeCheckbox.checked = true;
        }
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        
        // 更新开关状态，但不触发事件
        const darkModeCheckbox = document.getElementById('dark-mode-toggle');
        if (darkModeCheckbox) {
            darkModeCheckbox.checked = false;
        }
    }
    
    // 调整动态背景
    adjustDynamicBackground(isDark);
    
    // 更新状态文本
    updateThemeStatusText();
}

// 更新主题状态文本
function updateThemeStatusText() {
    const currentLang = document.documentElement.lang || 'zh';
    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    
    // 更新暗色模式状态文本
    const darkModeStatus = document.querySelector('[data-status-for="dark-mode-toggle"]');
    if (darkModeStatus) {
        darkModeStatus.textContent = isDark ? 
            getText('dark_mode', '').status : 
            getText('light_mode', '').status;
    }
    
    // 更新动态背景状态文本
    const dynamicBgStatus = document.querySelector('[data-status-for="dynamic-bg-toggle"]');
    if (dynamicBgStatus) {
        const isEnabled = document.getElementById('dynamic-bg-toggle')?.checked;
        dynamicBgStatus.textContent = isEnabled ? 
            languageData[currentLang].dynamic_bg_on : 
            languageData[currentLang].dynamic_bg_off;
    }
}

// 调整动态背景颜色
function adjustDynamicBackground(isDark) {
    const gradientCanvas = document.getElementById('gradient-bg');
    const dynamicElements = document.querySelectorAll('.bubble, .star');
    const isEnabled = document.getElementById('dynamic-bg-toggle')?.checked;
    
    // 调整动态背景颜色
    if (gradientCanvas) {
        // 调整透明度
        if (isDark) {
            gradientCanvas.style.opacity = isEnabled ? '0.4' : '0'; // 暗色模式下降低透明度
        } else {
            gradientCanvas.style.opacity = isEnabled ? '1' : '0';
        }
    }
    
    // 调整动态元素
    dynamicElements.forEach(el => {
        if (el.classList.contains('bubble')) {
            // 暗色模式下降低气泡透明度
            el.style.opacity = isDark ? '0.6' : '0.8';
        } else if (el.classList.contains('star')) {
            // 暗色模式下增加星星亮度
            el.style.backgroundColor = isDark ? 'rgba(255, 255, 255, 0.9)' : 'rgba(255, 255, 255, 0.7)';
        }
        
        // 根据动态背景状态显示或隐藏
        el.style.display = isEnabled ? 'block' : 'none';
    });
}

// 获取多语言文本
function getText(darkKey, lightKey) {
    const currentLang = document.documentElement.lang || 'zh';
    
    // 获取当前语言的文本
    switch (currentLang) {
        case 'en':
            return {
                title: 'Theme',
                status: document.documentElement.getAttribute('data-theme') === 'dark' ? 
                    'Dark Mode' : 'Light Mode'
            };
        case 'ja':
            return {
                title: 'テーマ',
                status: document.documentElement.getAttribute('data-theme') === 'dark' ? 
                    'ダークモード' : 'ライトモード'
            };
        case 'zh':
        default:
            return {
                title: '主题模式',
                status: document.documentElement.getAttribute('data-theme') === 'dark' ? 
                    '暗色模式' : '亮色模式'
            };
    }
}

// 处理原始暗色模式切换器的事件（如果存在）
const originalToggle = document.getElementById('theme-toggle');
if (originalToggle) {
    originalToggle.addEventListener('change', function() {
        // 更新状态文本
        updateThemeStatusText();
    });
}

// 覆盖语言切换函数以更新主题状态文本
const originalSwitchLanguage = window.switchLanguage;
if (originalSwitchLanguage) {
    window.switchLanguage = function(lang) {
        originalSwitchLanguage(lang);
        updateThemeStatusText();
    };
} 