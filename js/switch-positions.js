/**
 * 开关位置管理脚本 - 调整主题开关和暗色模式开关的位置
 */
document.addEventListener('DOMContentLoaded', function() {
    // 获取两个开关元素
    const themeSwitch = document.querySelector('.theme-switch-wrapper');
    const darkModeSwitch = document.querySelector('.dark-mode-switch-wrapper');
    
    // 确保两个开关元素存在
    if (!themeSwitch || !darkModeSwitch) return;
    
    // 调整开关位置函数
    function adjustSwitchPositions() {
        if (window.innerWidth <= 768) {
            // 移动端：动态背景开关在右下角，暗色模式开关在左下角
            themeSwitch.style.position = 'fixed';
            themeSwitch.style.bottom = '20px';
            themeSwitch.style.right = '20px';
            themeSwitch.style.left = 'auto';
            themeSwitch.style.zIndex = '90';
            
            darkModeSwitch.style.position = 'fixed';
            darkModeSwitch.style.bottom = '20px';
            darkModeSwitch.style.left = '20px';
            darkModeSwitch.style.right = 'auto';
            darkModeSwitch.style.zIndex = '90';
        } else {
            // 桌面端：位置还原为原始设置
            themeSwitch.style.position = '';
            themeSwitch.style.bottom = '';
            themeSwitch.style.right = '';
            themeSwitch.style.left = '';
            themeSwitch.style.zIndex = '';
            
            darkModeSwitch.style.position = '';
            darkModeSwitch.style.bottom = '';
            darkModeSwitch.style.left = '';
            darkModeSwitch.style.right = '';
            darkModeSwitch.style.zIndex = '';
        }
    }
    
    // 检测滚动以避免与页脚重叠
    function adjustPositionsForFooter() {
        if (window.innerWidth <= 768) {
            const footer = document.querySelector('footer');
            if (!footer) return;
            
            const footerRect = footer.getBoundingClientRect();
            const windowHeight = window.innerHeight;
            
            // 如果页脚出现在视口中，调整开关位置
            if (footerRect.top < windowHeight) {
                const distanceFromBottom = windowHeight - footerRect.top;
                const newBottomValue = (distanceFromBottom + 10) + 'px';
                
                themeSwitch.style.bottom = newBottomValue;
                darkModeSwitch.style.bottom = newBottomValue;
            } else {
                // 恢复默认位置
                themeSwitch.style.bottom = '20px';
                darkModeSwitch.style.bottom = '20px';
            }
        }
    }
    
    // 初始调整开关位置
    adjustSwitchPositions();
    
    // 窗口大小改变时重新调整
    window.addEventListener('resize', function() {
        adjustSwitchPositions();
        // 如果大小变化，也需要检查页脚位置
        adjustPositionsForFooter();
    });
    
    // 滚动时调整位置以避免与页脚重叠
    window.addEventListener('scroll', function() {
        adjustPositionsForFooter();
    });
});