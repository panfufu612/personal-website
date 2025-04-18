document.addEventListener('DOMContentLoaded', function() {
    // 创建一个粒子背景
    const header = document.querySelector('header');
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    
    canvas.id = 'particles-canvas';
    canvas.style.position = 'absolute';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.width = '100%';
    canvas.style.height = '100%';
    canvas.style.zIndex = '0';
    canvas.style.pointerEvents = 'none';
    
    header.style.position = 'relative';
    header.insertBefore(canvas, header.firstChild);
    
    // 创建粒子
    const particles = [];
    const particleCount = 50;
    const colors = ['#ffffff', '#f0f0f0', '#e0e0e0'];
    
    // 调整画布大小
    function resizeCanvas() {
        canvas.width = header.offsetWidth;
        canvas.height = header.offsetHeight;
    }
    
    // 创建粒子对象
    function Particle() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = Math.random() * 0.5 - 0.25;
        this.vy = Math.random() * 0.5 - 0.25;
        this.radius = Math.random() * 2 + 1;
        this.color = colors[Math.floor(Math.random() * colors.length)];
        this.opacity = Math.random() * 0.5 + 0.1;
    }
    
    // 更新粒子位置
    Particle.prototype.update = function() {
        this.x += this.vx;
        this.y += this.vy;
        
        // 边界检查
        if (this.x < 0 || this.x > canvas.width) {
            this.vx = -this.vx;
        }
        
        if (this.y < 0 || this.y > canvas.height) {
            this.vy = -this.vy;
        }
    };
    
    // 绘制粒子
    Particle.prototype.draw = function() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.globalAlpha = this.opacity;
        ctx.fill();
    };
    
    // 连接粒子
    function connectParticles() {
        const maxDistance = 150;
        
        for (let i = 0; i < particles.length; i++) {
            for (let j = i + 1; j < particles.length; j++) {
                const dx = particles[i].x - particles[j].x;
                const dy = particles[i].y - particles[j].y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                
                if (distance < maxDistance) {
                    ctx.beginPath();
                    ctx.strokeStyle = '#ffffff';
                    ctx.globalAlpha = 0.2 * (1 - distance / maxDistance);
                    ctx.lineWidth = 0.5;
                    ctx.moveTo(particles[i].x, particles[i].y);
                    ctx.lineTo(particles[j].x, particles[j].y);
                    ctx.stroke();
                }
            }
        }
    }
    
    // 初始化粒子
    function init() {
        resizeCanvas();
        
        for (let i = 0; i < particleCount; i++) {
            particles.push(new Particle());
        }
        
        animate();
    }
    
    // 动画循环
    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        // 更新并绘制每个粒子
        for (let i = 0; i < particles.length; i++) {
            particles[i].update();
            particles[i].draw();
        }
        
        // 连接粒子
        connectParticles();
        
        requestAnimationFrame(animate);
    }
    
    // 监听窗口大小变化
    window.addEventListener('resize', function() {
        resizeCanvas();
    });
    
    // 启动粒子动画
    init();
}); 