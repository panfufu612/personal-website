document.addEventListener('DOMContentLoaded', function() {
    // 创建动态背景容器
    const backgroundContainer = document.createElement('div');
    backgroundContainer.id = 'dynamic-background';
    backgroundContainer.style.position = 'fixed';
    backgroundContainer.style.top = '0';
    backgroundContainer.style.left = '0';
    backgroundContainer.style.width = '100%';
    backgroundContainer.style.height = '100%';
    backgroundContainer.style.zIndex = '-1';
    backgroundContainer.style.opacity = '0.7';
    backgroundContainer.style.pointerEvents = 'none';
    
    document.body.prepend(backgroundContainer);
    
    // 创建彩色渐变气泡效果
    function createBubble() {
        const colors = [
            'rgba(52, 152, 219, 0.7)',  // 蓝色
            'rgba(46, 204, 113, 0.7)',  // 绿色
            'rgba(155, 89, 182, 0.7)',  // 紫色
            'rgba(241, 196, 15, 0.7)',  // 黄色
            'rgba(231, 76, 60, 0.7)'    // 红色
        ];
        
        const bubble = document.createElement('div');
        const size = Math.floor(Math.random() * 100) + 20;
        const color = colors[Math.floor(Math.random() * colors.length)];
        
        bubble.style.position = 'absolute';
        bubble.style.backgroundColor = color;
        bubble.style.borderRadius = '50%';
        bubble.style.width = `${size}px`;
        bubble.style.height = `${size}px`;
        bubble.style.left = `${Math.random() * 100}%`;
        bubble.style.bottom = `-${size}px`;
        bubble.style.opacity = '0';
        bubble.style.filter = 'blur(3px)';
        bubble.style.transition = 'transform 0.2s ease-out';
        
        backgroundContainer.appendChild(bubble);
        
        let speed = (Math.random() * 20) + 10;
        let posX = parseFloat(bubble.style.left);
        let posY = 0;
        let opacity = 0;
        let scale = 0.5;
        
        const animateBubble = () => {
            posY += speed / 10;
            posX += (Math.random() - 0.5) * 2;
            opacity = posY < 20 ? posY / 20 : 1 - Math.max(0, (posY - 80) / 20);
            scale = posY < 20 ? 0.5 + (posY / 40) : 1 - Math.max(0, (posY - 80) / 80);
            
            bubble.style.transform = `translate(${Math.sin(posY / 30) * 20}px, -${posY}vh) scale(${scale})`;
            bubble.style.opacity = opacity.toString();
            bubble.style.left = `${posX}%`;
            
            if (posY < 100) {
                requestAnimationFrame(animateBubble);
            } else {
                bubble.remove();
            }
        };
        
        requestAnimationFrame(animateBubble);
    }
    
    // 创建闪光点效果
    function createGlowingDot() {
        const dot = document.createElement('div');
        const size = Math.floor(Math.random() * 5) + 2;
        
        dot.style.position = 'absolute';
        dot.style.backgroundColor = 'white';
        dot.style.borderRadius = '50%';
        dot.style.width = `${size}px`;
        dot.style.height = `${size}px`;
        dot.style.left = `${Math.random() * 100}%`;
        dot.style.top = `${Math.random() * 100}%`;
        dot.style.boxShadow = `0 0 ${size * 2}px white`;
        dot.style.opacity = '0';
        
        backgroundContainer.appendChild(dot);
        
        // 随机闪烁动画
        let opacity = 0;
        let direction = 1;
        let speed = Math.random() * 0.01 + 0.005;
        
        const animateDot = () => {
            opacity += speed * direction;
            
            if (opacity >= 1 || opacity <= 0) {
                direction *= -1;
            }
            
            dot.style.opacity = opacity.toString();
            
            requestAnimationFrame(animateDot);
        };
        
        requestAnimationFrame(animateDot);
        
        // 5-10秒后移除点
        setTimeout(() => {
            dot.remove();
        }, (Math.random() * 5000) + 5000);
    }
    
    // 定期创建气泡和闪光点
    setInterval(createBubble, 1000);
    setInterval(createGlowingDot, 300);
    
    // 初始创建一些气泡和闪光点
    for (let i = 0; i < 10; i++) {
        setTimeout(createBubble, i * 300);
    }
    
    for (let i = 0; i < 30; i++) {
        setTimeout(createGlowingDot, i * 100);
    }
    
    // 背景颜色渐变
    function createGradientBackground() {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        
        canvas.style.position = 'fixed';
        canvas.style.top = '0';
        canvas.style.left = '0';
        canvas.style.width = '100%';
        canvas.style.height = '100%';
        canvas.style.zIndex = '-2';
        canvas.style.opacity = '0.3';
        
        document.body.prepend(canvas);
        
        function resizeCanvas() {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        }
        
        window.addEventListener('resize', resizeCanvas);
        resizeCanvas();
        
        // 渐变颜色
        const gradients = [
            ['#2c3e50', '#3498db', '#2980b9'],
            ['#16a085', '#2ecc71', '#1abc9c'],
            ['#8e44ad', '#9b59b6', '#673ab7'],
            ['#2c3e50', '#34495e', '#2c3e50']
        ];
        
        let currentGradient = 0;
        let progress = 0;
        
        function animateGradient() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            
            // 创建渐变
            const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
            
            // 当前渐变
            const currentColors = gradients[currentGradient];
            const nextColors = gradients[(currentGradient + 1) % gradients.length];
            
            // 在渐变中混合颜色
            for (let i = 0; i < currentColors.length; i++) {
                const currentColor = currentColors[i];
                const nextColor = nextColors[i];
                
                const ratio = i / (currentColors.length - 1);
                gradient.addColorStop(ratio, mixColors(currentColor, nextColor, progress));
            }
            
            // 填充背景
            ctx.fillStyle = gradient;
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            
            // 更新进度
            progress += 0.001;
            if (progress >= 1) {
                progress = 0;
                currentGradient = (currentGradient + 1) % gradients.length;
            }
            
            requestAnimationFrame(animateGradient);
        }
        
        // 混合两种颜色
        function mixColors(color1, color2, ratio) {
            function hexToRgb(hex) {
                const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
                return result ? {
                    r: parseInt(result[1], 16),
                    g: parseInt(result[2], 16),
                    b: parseInt(result[3], 16)
                } : null;
            }
            
            const rgb1 = hexToRgb(color1);
            const rgb2 = hexToRgb(color2);
            
            const r = Math.round(rgb1.r * (1 - ratio) + rgb2.r * ratio);
            const g = Math.round(rgb1.g * (1 - ratio) + rgb2.g * ratio);
            const b = Math.round(rgb1.b * (1 - ratio) + rgb2.b * ratio);
            
            return `rgb(${r}, ${g}, ${b})`;
        }
        
        // 开始动画
        animateGradient();
    }
    
    // 启动渐变背景
    createGradientBackground();
}); 