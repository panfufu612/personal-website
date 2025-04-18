document.addEventListener('DOMContentLoaded', function() {
    // 添加淡入效果类到所有需要动画的部分
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.classList.add('fade-in-section');
    });
    
    // 实现滚动时的淡入效果
    const fadeInObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
            }
        });
    }, { threshold: 0.1 });
    
    const fadeInElements = document.querySelectorAll('.fade-in-section');
    fadeInElements.forEach(element => {
        fadeInObserver.observe(element);
    });
    
    // 给标题添加打字机效果
    const resumeTitle = document.querySelector('.header-content h1');
    if (resumeTitle) {
        resumeTitle.classList.add('typewriter');
    }
    
    // 技能进度条动画
    function createSkillBars() {
        const skillList = document.querySelector('.skill-list');
        if (!skillList) return;
        
        const skillItems = skillList.querySelectorAll('li');
        
        // 将技能列表项转换为带进度条的项目
        skillItems.forEach(item => {
            const skillText = item.textContent;
            const skillLevel = getSkillLevel(skillText);
            
            // 创建新的技能项布局
            item.innerHTML = `
                <div class="skill-name">${skillText}</div>
                <div class="skill-bar">
                    <div class="skill-progress" style="width: 0%"></div>
                </div>
            `;
            
            // 将进度条宽度动画设置延迟，以便在滚动到可见位置时触发
            setTimeout(() => {
                item.querySelector('.skill-progress').style.width = `${skillLevel}%`;
            }, 300);
        });
    }
    
    // 设置技能水平（可以根据实际情况调整）
    function getSkillLevel(skillText) {
        // 这里只是一个示例逻辑，可以根据技能名称分配不同的熟练度
        if (skillText.includes('N1') || skillText.includes('hsk6级')) {
            return 95;
        } else if (skillText.includes('vue') || skillText.includes('Java') || skillText.includes('HTML')) {
            return 90;
        } else if (skillText.includes('pytorch') || skillText.includes('深度学习')) {
            return 85;
        } else if (skillText.includes('MySQL')) {
            return 80;
        } else if (skillText.includes('全商簿记鉴定') || skillText.includes('情报处理鉴定')) {
            return 75;
        } else {
            return 70; // 默认值
        }
    }
    
    // 增强时间线动画效果
    function enhanceTimeline() {
        const timelineItems = document.querySelectorAll('.timeline-item');
        
        timelineItems.forEach((item, index) => {
            // 为每个时间线项添加淡入淡出效果
            item.classList.add('fade-in-section');
            fadeInObserver.observe(item);
            
            // 为每个时间线项添加延迟，使其逐个显示
            item.style.transitionDelay = `${index * 0.2}s`;
            
            // 添加悬停效果
            item.addEventListener('mouseenter', () => {
                item.style.transform = 'translateX(10px)';
                item.querySelector('.timeline-content').style.boxShadow = '0 10px 25px rgba(0,0,0,0.15)';
            });
            
            item.addEventListener('mouseleave', () => {
                item.style.transform = 'translateX(0)';
                item.querySelector('.timeline-content').style.boxShadow = 'none';
            });
        });
        
        // 为时间线添加动画指示器
        const timeline = document.querySelector('.timeline');
        if (timeline) {
            const indicator = document.createElement('div');
            indicator.className = 'timeline-indicator';
            indicator.style.position = 'absolute';
            indicator.style.left = '-8px';
            indicator.style.top = '0';
            indicator.style.width = '20px';
            indicator.style.height = '20px';
            indicator.style.borderRadius = '50%';
            indicator.style.backgroundColor = 'var(--secondary-color)';
            indicator.style.transition = 'top 0.5s ease-out';
            indicator.style.zIndex = '2';
            indicator.style.boxShadow = '0 0 10px var(--secondary-color)';
            
            timeline.style.position = 'relative';
            timeline.appendChild(indicator);
            
            // 滚动时移动指示器
            window.addEventListener('scroll', () => {
                const timelineRect = timeline.getBoundingClientRect();
                const timelineTop = timelineRect.top;
                const timelineHeight = timelineRect.height;
                const windowHeight = window.innerHeight;
                
                const scrollPercentage = Math.max(0, Math.min(1, (windowHeight - timelineTop) / (windowHeight + timelineHeight)));
                const indicatorPosition = scrollPercentage * timelineHeight;
                
                indicator.style.top = `${indicatorPosition}px`;
            });
        }
    }
    
    // 给项目卡片添加交互动画
    function addProjectInteraction() {
        const projectLinks = document.querySelectorAll('.project-link a');
        projectLinks.forEach(link => {
            link.addEventListener('mouseenter', function() {
                this.style.transform = 'scale(1.1)';
                this.style.transition = 'transform 0.3s ease';
            });
            
            link.addEventListener('mouseleave', function() {
                this.style.transform = 'scale(1)';
            });
        });
    }
    
    // 添加动态的语言切换效果
    function enhanceLanguageSwitcher() {
        const languageSelect = document.getElementById('language-select');
        if (!languageSelect) return;
        
        // 创建一个语言指示器
        const langIndicator = document.createElement('div');
        langIndicator.id = 'languageIndicator';
        langIndicator.className = 'language-indicator';
        document.body.appendChild(langIndicator);
        
        // 为语言选择器添加动画效果
        languageSelect.addEventListener('change', function() {
            this.style.transform = 'rotateY(360deg)';
            this.style.transition = 'transform 0.5s ease';
            
            setTimeout(() => {
                this.style.transform = 'rotateY(0)';
            }, 500);
        });
    }
    
    // 创建动态背景渐变效果
    function createGradientBackground() {
        const colors = [
            [46, 204, 113], // 绿色
            [52, 152, 219], // 蓝色
            [155, 89, 182], // 紫色
            [241, 196, 15], // 黄色
            [231, 76, 60]   // 红色
        ];
        
        let currentIndex = 0;
        let nextIndex = 1;
        let step = 0.002;
        let progress = 0;
        
        function updateGradient() {
            progress += step;
            
            if (progress >= 1) {
                progress = 0;
                currentIndex = nextIndex;
                nextIndex = (nextIndex + 1) % colors.length;
            }
            
            const currentColor = colors[currentIndex];
            const nextColor = colors[nextIndex];
            
            const r = Math.round(currentColor[0] * (1 - progress) + nextColor[0] * progress);
            const g = Math.round(currentColor[1] * (1 - progress) + nextColor[1] * progress);
            const b = Math.round(currentColor[2] * (1 - progress) + nextColor[2] * progress);
            
            const gradientColor = `rgb(${r}, ${g}, ${b})`;
            document.documentElement.style.setProperty('--secondary-color', gradientColor);
            
            requestAnimationFrame(updateGradient);
        }
        
        // 只在首页启用动态背景
        if (window.location.pathname === '/' || window.location.pathname.endsWith('index.html')) {
            requestAnimationFrame(updateGradient);
        }
    }
    
    // 动态添加返回顶部按钮
    function addBackToTopButton() {
        const backToTopBtn = document.createElement('button');
        backToTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
        backToTopBtn.className = 'back-to-top';
        backToTopBtn.style.position = 'fixed';
        backToTopBtn.style.bottom = '20px';
        backToTopBtn.style.right = '20px';
        backToTopBtn.style.width = '50px';
        backToTopBtn.style.height = '50px';
        backToTopBtn.style.borderRadius = '50%';
        backToTopBtn.style.backgroundColor = 'var(--secondary-color)';
        backToTopBtn.style.color = 'white';
        backToTopBtn.style.border = 'none';
        backToTopBtn.style.cursor = 'pointer';
        backToTopBtn.style.display = 'none';
        backToTopBtn.style.zIndex = '1000';
        backToTopBtn.style.boxShadow = '0 3px 10px rgba(0,0,0,0.2)';
        backToTopBtn.style.transition = 'all 0.3s ease';
        
        document.body.appendChild(backToTopBtn);
        
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 300) {
                backToTopBtn.style.display = 'block';
                backToTopBtn.style.opacity = '1';
            } else {
                backToTopBtn.style.opacity = '0';
                setTimeout(() => {
                    if (window.pageYOffset <= 300) {
                        backToTopBtn.style.display = 'none';
                    }
                }, 300);
            }
        });
        
        backToTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
        
        backToTopBtn.addEventListener('mouseenter', () => {
            backToTopBtn.style.transform = 'translateY(-5px)';
            backToTopBtn.style.boxShadow = '0 10px 20px rgba(0,0,0,0.3)';
        });
        
        backToTopBtn.addEventListener('mouseleave', () => {
            backToTopBtn.style.transform = 'translateY(0)';
            backToTopBtn.style.boxShadow = '0 3px 10px rgba(0,0,0,0.2)';
        });
    }
    
    // 初始化所有动画效果
    setTimeout(createSkillBars, 500);
    setTimeout(enhanceTimeline, 500);
    addProjectInteraction();
    enhanceLanguageSwitcher();
    // createGradientBackground(); // 动态背景可选，如果觉得太花哨可以注释掉
    addBackToTopButton();
    
    // 滚动到锚点的平滑效果
    document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 100,
                    behavior: 'smooth'
                });
            }
        });
    });
}); 