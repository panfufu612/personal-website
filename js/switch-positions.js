// 控制主题开关和动态背景开关的位置
document.addEventListener('DOMContentLoaded', function() {
    // 初始调整开关位置
    adjustSwitchPositions();
    
    // 监听窗口大小变化
    window.addEventListener('resize', adjustSwitchPositions);
    
    // 监听滚动事件，确保开关不会与页脚重叠
    window.addEventListener('scroll', function() {
        const footerHeight = document.querySelector('footer')?.offsetHeight || 0;
        const windowHeight = window.innerHeight;
        const scrollY = window.scrollY;
        const bodyHeight = document.body.offsetHeight;
        
        // 计算距离底部的距离
        const distanceToBottom = bodyHeight - scrollY - windowHeight;
        
        // 调整开关位置以避免与页脚重叠
        const darkModeSwitch = document.querySelector('.mode-switch').closest('.switch-container');
        const dynamicBgSwitch = document.querySelector('.bg-switch').closest('.switch-container');
        
        if (distanceToBottom < footerHeight + 10) {
            const newBottom = (footerHeight - distanceToBottom + 20) + 'px';
            if (darkModeSwitch) darkModeSwitch.style.bottom = newBottom;
            if (dynamicBgSwitch) dynamicBgSwitch.style.bottom = newBottom;
        } else {
            if (darkModeSwitch) darkModeSwitch.style.bottom = '20px';
            if (dynamicBgSwitch) dynamicBgSwitch.style.bottom = '20px';
        }
    });
});

/**
 * 调整开关位置，确保不重叠
 */
function adjustSwitchPositions() {
    // 获取开关元素
    const darkModeSwitch = document.querySelector('.mode-switch').closest('.switch-container');
    const dynamicBgSwitch = document.querySelector('.bg-switch').closest('.switch-container');
    
    if (!darkModeSwitch || !dynamicBgSwitch) return;
    
    // 移除开关的原始位置样式
    darkModeSwitch.style.position = 'fixed';
    dynamicBgSwitch.style.position = 'fixed';
    
    // 在移动设备上的布局
    if (window.innerWidth <= 768) {
        // 暗色模式开关：左下角
        darkModeSwitch.style.left = '20px';
        darkModeSwitch.style.right = 'auto';
        darkModeSwitch.style.bottom = '20px';
        darkModeSwitch.style.zIndex = '1000';
        
        // 动态背景开关：右下角
        dynamicBgSwitch.style.right = '20px';
        dynamicBgSwitch.style.left = 'auto';
        dynamicBgSwitch.style.bottom = '20px';
        dynamicBgSwitch.style.zIndex = '1000';
        
        // 在极小的屏幕上，减小开关之间的间距
        if (window.innerWidth < 400) {
            darkModeSwitch.style.left = '10px';
            dynamicBgSwitch.style.right = '10px';
        }
    } else {
        // 桌面设备上的布局
        darkModeSwitch.style.left = '20px';
        darkModeSwitch.style.right = 'auto';
        darkModeSwitch.style.bottom = '20px';
        darkModeSwitch.style.zIndex = '1000';
        
        dynamicBgSwitch.style.right = '20px';
        dynamicBgSwitch.style.left = 'auto';
        dynamicBgSwitch.style.bottom = '20px';
        dynamicBgSwitch.style.zIndex = '1000';
    }
    
    // 确保开关在暗模式下可见
    darkModeSwitch.style.backgroundColor = 'var(--card-bg-color)';
    darkModeSwitch.style.padding = '8px 12px';
    darkModeSwitch.style.borderRadius = '8px';
    darkModeSwitch.style.boxShadow = '0 2px 5px rgba(0,0,0,0.2)';
    
    dynamicBgSwitch.style.backgroundColor = 'var(--card-bg-color)';
    dynamicBgSwitch.style.padding = '8px 12px';
    dynamicBgSwitch.style.borderRadius = '8px';
    dynamicBgSwitch.style.boxShadow = '0 2px 5px rgba(0,0,0,0.2)';
}