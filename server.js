require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// 中间件
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, './')));

// 配置邮件发送器
const transporter = nodemailer.createTransport({
    service: process.env.EMAIL_SERVICE,
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});

// 处理联系表单提交
app.post('/send-message', async (req, res) => {
    const { name, email, message } = req.body;
    
    if (!name || !email || !message) {
        return res.status(400).json({ success: false, message: '请填写所有必填字段' });
    }
    
    try {
        // 邮件内容
        const mailOptions = {
            from: process.env.EMAIL_FROM,
            to: process.env.EMAIL_TO,
            subject: `个人网站联系表单: 来自 ${name}`,
            text: `姓名: ${name}\n邮箱: ${email}\n消息: ${message}`,
            html: `
                <h3>个人网站新联系表单提交</h3>
                <p><strong>姓名:</strong> ${name}</p>
                <p><strong>邮箱:</strong> ${email}</p>
                <p><strong>消息:</strong></p>
                <p>${message}</p>
            `
        };
        
        // 发送邮件
        await transporter.sendMail(mailOptions);
        
        res.status(200).json({ success: true, message: '消息已成功发送' });
    } catch (error) {
        console.error('发送邮件时出错:', error);
        res.status(500).json({ success: false, message: '发送消息时出错，请稍后再试' });
    }
});

// 启动服务器
app.listen(PORT, () => {
    console.log(`服务器运行在端口 ${PORT}`);
}); 