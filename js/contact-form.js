document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    const formStatus = document.getElementById('formStatus');
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // 获取表单数据
        const name = document.getElementById('contactName').value;
        const email = document.getElementById('contactEmail').value;
        const message = document.getElementById('contactMessage').value;
        
        // 显示发送中状态
        formStatus.textContent = i18n.t('sending');
        formStatus.className = 'form-status sending';

        // 构建邮件参数
        const templateParams = {
            from_name: name,
            from_email: email,
            to_name: "MOROOKA ATSUHIRO",
            message: message,
            reply_to: email
        };
        
        // 使用 EmailJS 发送邮件
        emailjs.send(
            "service_y805arh", // 您的 EmailJS Service ID
            "template_e5jj1kq", // 您的 EmailJS Template ID
            templateParams
        ).then(
            function(response) {
                console.log("SUCCESS", response);
                formStatus.textContent = i18n.t('success_message');
                formStatus.className = 'form-status success';
                contactForm.reset();
            },
            function(error) {
                console.log("FAILED", error);
                formStatus.textContent = i18n.t('error_message');
                formStatus.className = 'form-status error';
            }
        );
        
        // 3秒后清除状态消息
        setTimeout(() => {
            formStatus.textContent = '';
            formStatus.className = 'form-status';
        }, 3000);
    });
}); 