function calculateAge(birthDate) {
    const today = new Date();
    const birth = new Date(birthDate);
    
    let age = today.getFullYear() - birth.getFullYear();
    const monthDiff = today.getMonth() - birth.getMonth();
    
    // 如果还没到生日，年龄减1
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
        age--;
    }
    
    return age;
}

function updateAge() {
    const birthDate = '2001-06-12'; // 您的出生日期
    const ageElement = document.getElementById('dynamic-age');
    if (ageElement) {
        ageElement.textContent = calculateAge(birthDate);
    }
}

// 页面加载时更新年龄
document.addEventListener('DOMContentLoaded', updateAge);

// 每天更新一次年龄（如果页面持续打开）
setInterval(updateAge, 24 * 60 * 60 * 1000); 