/**
 * 移动端导航菜单控制
 */
document.addEventListener('DOMContentLoaded', function() {
    // 获取导航菜单元素
    const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
    const mainNav = document.getElementById('main-nav');
    
    // 创建导航背景遮罩层
    const navBackdrop = document.createElement('div');
    navBackdrop.className = 'nav-backdrop';
    document.body.appendChild(navBackdrop);
    
    // 点击菜单按钮打开导航
    mobileMenuToggle.addEventListener('click', function() {
        mainNav.classList.toggle('show');
        navBackdrop.classList.toggle('show');
        document.body.style.overflow = mainNav.classList.contains('show') ? 'hidden' : '';
    });
    
    // 点击导航菜单里的链接关闭导航
    const navLinks = mainNav.querySelectorAll('a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            mainNav.classList.remove('show');
            navBackdrop.classList.remove('show');
            document.body.style.overflow = '';
        });
    });
    
    // 点击导航菜单关闭按钮关闭导航
    mainNav.addEventListener('click', function(e) {
        // 检查是否点击到了关闭按钮的伪元素区域
        const rect = mainNav.getBoundingClientRect();
        const closeButtonArea = {
            left: rect.right - 60,
            top: 0,
            right: rect.right,
            bottom: 60
        };
        
        if (
            e.clientX >= closeButtonArea.left && 
            e.clientX <= closeButtonArea.right && 
            e.clientY >= closeButtonArea.top && 
            e.clientY <= closeButtonArea.bottom
        ) {
            mainNav.classList.remove('show');
            navBackdrop.classList.remove('show');
            document.body.style.overflow = '';
        }
    });
    
    // 点击背景遮罩关闭导航
    navBackdrop.addEventListener('click', function() {
        mainNav.classList.remove('show');
        navBackdrop.classList.remove('show');
        document.body.style.overflow = '';
    });
    
    // 监听窗口大小变化
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768) {
            mainNav.classList.remove('show');
            navBackdrop.classList.remove('show');
            document.body.style.overflow = '';
        }
        
        // 调整控制面板位置
        adjustControlPanel();
    });
    
    // 监听滚动事件，滚动时收起导航菜单
    let lastScrollTop = 0;
    window.addEventListener('scroll', function() {
        const st = window.pageYOffset || document.documentElement.scrollTop;
        if (st > lastScrollTop && st > 100) {
            // 向下滚动超过100px
            mainNav.classList.remove('show');
            navBackdrop.classList.remove('show');
            document.body.style.overflow = '';
        }
        lastScrollTop = st <= 0 ? 0 : st;
    }, false);
    
    // 确保控制面板在移动设备上正确显示
    function adjustControlPanel() {
        // 获取控制面板
        const themeControlPanel = document.querySelector('.theme-control-panel');
        
        if (!themeControlPanel) return;
        
        if (window.innerWidth <= 768) {
            // 移动设备设置
            themeControlPanel.style.left = '50%';
            themeControlPanel.style.transform = 'translateX(-50%)';
            themeControlPanel.style.bottom = '20px';
            themeControlPanel.style.width = '80%';
            
            // 设置控制面板为列布局
            themeControlPanel.style.flexDirection = 'column';
            
            // 调整开关容器样式
            const switchContainers = themeControlPanel.querySelectorAll('.switch-container');
            switchContainers.forEach(container => {
                container.style.marginRight = '0';
                container.style.marginBottom = '8px';
                container.style.width = '100%';
                container.style.justifyContent = 'space-between';
            });
            
            if (switchContainers.length > 0) {
                switchContainers[switchContainers.length - 1].style.marginBottom = '0';
            }
        } else {
            // 桌面设备设置
            themeControlPanel.style.left = '20px';
            themeControlPanel.style.transform = '';
            themeControlPanel.style.width = 'auto';
            themeControlPanel.style.flexDirection = 'row';
            
            // 重置开关容器样式
            const switchContainers = themeControlPanel.querySelectorAll('.switch-container');
            switchContainers.forEach(container => {
                container.style.marginRight = '15px';
                container.style.marginBottom = '0';
                container.style.width = '';
                container.style.justifyContent = '';
            });
            
            if (switchContainers.length > 0) {
                switchContainers[switchContainers.length - 1].style.marginRight = '0';
            }
        }
    }
    
    // 初始调整控制面板
    adjustControlPanel();
    
    // 检测滚动并避免与其他控件重叠
    window.addEventListener('scroll', function() {
        const footerHeight = document.querySelector('footer')?.offsetHeight || 0;
        const windowHeight = window.innerHeight;
        const scrollY = window.scrollY;
        const bodyHeight = document.body.offsetHeight;
        
        const themeControlPanel = document.querySelector('.theme-control-panel');
        if (!themeControlPanel) return;
        
        // 计算底部距离，避免与页脚重叠
        const distanceToBottom = bodyHeight - scrollY - windowHeight;
        
        if (distanceToBottom < footerHeight + 10) {
            const newBottom = (footerHeight - distanceToBottom + 20) + 'px';
            themeControlPanel.style.bottom = newBottom;
        } else {
            themeControlPanel.style.bottom = '20px';
        }
    });
}); 