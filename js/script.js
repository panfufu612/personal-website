// 初始化脚本
document.addEventListener('DOMContentLoaded', () => {
    console.log("欢迎访问我的个人简历！");
    
    // 处理联系表单提交
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', async function(e) {
            e.preventDefault();
            
            // 获取当前语言
            const currentLang = window.i18n.getCurrentLang();
            
            // 显示加载状态
            const submitButton = this.querySelector('button[type="submit"]');
            const originalButtonText = submitButton.textContent;
            submitButton.textContent = window.i18n.t('sending');
            submitButton.disabled = true;
            
            // 获取表单数据
            const name = this.querySelector('input[name="name"]').value;
            const email = this.querySelector('input[name="email"]').value;
            const message = this.querySelector('textarea[name="message"]').value;
            
            try {
                // 直接使用表单来模拟提交
                // 由于API可能不可用，我们这里提供一个替代方案
                const useAPISubmission = false; // 设置为true尝试API提交，false使用mailto链接
                
                if (useAPISubmission) {
                    // 尝试通过API发送数据
                    const response = await fetch('http://localhost:3000/send-message', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({ name, email, message }),
                    });
                    
                    const data = await response.json();
                    
                    if (data.success) {
                        // 成功提交
                        showMessage(window.i18n.t('success_title'), window.i18n.t('success_message'), 'success');
                        this.reset();
                    } else {
                        // 提交失败
                        showMessage(window.i18n.t('error_title'), data.message || window.i18n.t('error_message'), 'error');
                    }
                } else {
                    // 使用mailto链接作为备选方案
                    const mailtoLink = `mailto:6752942@qq.com?subject=${encodeURIComponent(name)}&body=${encodeURIComponent(`${name}\n${email}\n\n${message}`)}`;
                    
                    // 打开邮件客户端
                    window.location.href = mailtoLink;
                    
                    // 显示成功信息
                    showMessage(window.i18n.t('success_title'), window.i18n.t('email_ready'), 'success');
                    this.reset();
                }
            } catch (error) {
                console.error('发送请求时出错:', error);
                
                // 提供更友好的错误信息
                showMessage(window.i18n.t('error_title'), window.i18n.t('connection_error'), 'error');
                
                // 尝试提供邮件发送链接作为备选方案
                setTimeout(() => {
                    if (confirm(window.i18n.t('confirm_email'))) {
                        const mailtoLink = `mailto:6752942@qq.com?subject=${encodeURIComponent(name)}&body=${encodeURIComponent(`${name}\n${email}\n\n${message}`)}`;
                        window.location.href = mailtoLink;
                    }
                }, 1000);
            } finally {
                // 恢复按钮状态
                submitButton.textContent = originalButtonText;
                submitButton.disabled = false;
            }
        });
    }
    
    // 添加消息提示功能
    function showMessage(title, message, type) {
        // 创建消息元素
        const messageDiv = document.createElement('div');
        messageDiv.className = `message-popup ${type}`;
        messageDiv.innerHTML = `
            <div class="message-content">
                <h3>${title}</h3>
                <p>${message}</p>
                <button class="close-message">OK</button>
            </div>
        `;
        
        // 添加到页面
        document.body.appendChild(messageDiv);
        
        // 添加关闭按钮事件
        messageDiv.querySelector('.close-message').addEventListener('click', () => {
            messageDiv.remove();
        });
        
        // 5秒后自动关闭
        setTimeout(() => {
            if (document.body.contains(messageDiv)) {
                messageDiv.remove();
            }
        }, 5000);
    }
}); 