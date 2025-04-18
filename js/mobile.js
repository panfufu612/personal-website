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
        
        // 更新当前位置显示
        updateCurrentSectionIndicator();
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
    
    // 添加功能标题栏折叠/展开功能
    function setupSectionCollapsingOnMobile() {
        // 检查是否是移动设备
        if (window.innerWidth <= 768) {
            const sections = document.querySelectorAll('section.section-card');
            
            // 为每个section添加可折叠类
            sections.forEach(section => {
                if (!section.classList.contains('collapsible-section')) {
                    section.classList.add('collapsible-section');
                    
                    // 获取标题和内容
                    const sectionTitle = section.querySelector('h2');
                    
                    if (sectionTitle) {
                        // 将标题下方所有内容包装在一个div中，方便控制显示/隐藏
                        const contentElements = Array.from(section.children).filter(el => {
                            return el !== sectionTitle && !el.classList.contains('section-content');
                        });
                        
                        if (contentElements.length > 0) {
                            const contentWrapper = document.createElement('div');
                            contentWrapper.className = 'section-content';
                            
                            contentElements.forEach(el => {
                                contentWrapper.appendChild(el);
                            });
                            
                            section.appendChild(contentWrapper);
                        }
                        
                        // 默认保持基本信息部分展开
                        if (section.id !== 'basic-info') {
                            section.classList.add('collapsed');
                        }
                        
                        // 添加点击事件处理
                        sectionTitle.addEventListener('click', function() {
                            section.classList.toggle('collapsed');
                        });
                    }
                }
            });
        } else {
            // 如果不是移动设备，移除折叠类和事件
            const collapsibleSections = document.querySelectorAll('.collapsible-section');
            collapsibleSections.forEach(section => {
                section.classList.remove('collapsible-section', 'collapsed');
                
                // 获取内容容器
                const contentWrapper = section.querySelector('.section-content');
                if (contentWrapper) {
                    // 将内容元素移回原位置
                    while (contentWrapper.firstChild) {
                        section.appendChild(contentWrapper.firstChild);
                    }
                    
                    // 移除内容容器
                    contentWrapper.remove();
                }
            });
        }
    }
    
    // 初始设置折叠功能
    setupSectionCollapsingOnMobile();
    
    // 窗口大小改变时重新设置折叠功能
    window.addEventListener('resize', function() {
        setupSectionCollapsingOnMobile();
    });
    
    // 更新当前位置显示
    function updateCurrentSectionIndicator() {
        if (window.innerWidth <= 768) {
            const sections = document.querySelectorAll('section.section-card');
            const currentSectionName = document.getElementById('current-section-name');
            const offset = 100; // 考虑标题栏的高度
            let currentSection = null;
            
            // 找出当前视口中最顶部的section
            sections.forEach(section => {
                const rect = section.getBoundingClientRect();
                if (rect.top <= offset && rect.bottom > offset) {
                    currentSection = section;
                }
            });
            
            // 如果找到了当前section，更新显示
            if (currentSection && currentSectionName) {
                const sectionTitle = currentSection.querySelector('h2');
                if (sectionTitle) {
                    // 获取i18n文本或直接使用标题文本
                    const titleText = sectionTitle.textContent.replace(/^\s*[\u2022\u2023\u25E6\u2043\u2219\u2022\u2023\u25E6\u2043\u2219]\s*|\s*$/g, '');
                    currentSectionName.textContent = titleText;
                }
            }
        }
    }
    
    // 初始更新当前位置
    updateCurrentSectionIndicator();
}); 