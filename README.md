# 个人网站

这是一个带有邮件表单提交功能的个人网站项目。

## 项目结构

```
personal-website/
│
├── css/               # CSS样式文件
├── js/                # JavaScript文件
├── images/            # 图片资源
├── index.html         # 主页HTML
├── server.js          # 后端服务器
├── package.json       # 项目依赖
└── .env               # 环境配置
```

## 联系方式选项

本项目提供两种联系表单提交方式：

1. **使用后端服务器处理表单提交**
   - 需要设置和运行Node.js后端服务器
   - 适合有自己服务器的开发者使用

2. **直接使用邮件客户端提交（当前默认方式）**
   - 点击提交表单后会打开用户默认的邮件客户端
   - 不需要运行后端服务器
   - 简单可靠，适合个人网站使用

## 后端设置（可选）

如果需要使用后端处理表单提交，请按照以下步骤设置：

### 1. 安装依赖

```bash
cd personal-website
npm install
```

### 2. 配置邮件服务

编辑`.env`文件，填入你的邮件服务信息：

```
EMAIL_TO=675294207@qq.com
EMAIL_FROM=你的发送邮箱@qq.com
EMAIL_SERVICE=qq  # 邮件服务商，如qq, gmail, outlook等
EMAIL_USER=你的发送邮箱@qq.com
EMAIL_PASS=你的邮箱授权码  # 不是登录密码，是邮箱服务的授权码
PORT=3000
```

如果使用QQ邮箱，您需要:
1. 登录QQ邮箱
2. 进入"设置" > "账户"
3. 找到"POP3/IMAP/SMTP/Exchange/CardDAV/CalDAV服务"并开启
4. 获取授权码并填入EMAIL_PASS

### 3. 启动后端服务

```bash
npm start
```

服务器将在 http://localhost:3000 运行。

### 4. 启用API提交

在`js/script.js`文件中，将`useAPISubmission`变量设置为`true`：

```javascript
const useAPISubmission = true; // 改为true启用API提交
```

## 前端设置

在浏览器中打开 `index.html` 文件即可查看网站。默认情况下，点击"发送消息"按钮会打开邮件客户端。

## 注意事项

- 为了安全起见，请不要将包含密码或授权码的`.env`文件提交到公共仓库
- 在生产环境中，建议使用HTTPS和更多的安全措施
- 配置好的邮件服务将把表单内容发送到您指定的EMAIL_TO邮箱 