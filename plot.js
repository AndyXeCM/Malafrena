// Malafrena 剧情成就系统 JavaScript

// 使用achievements.js中定义的完整成就数据（104个成就）
// 这里我们直接使用plotAchievements变量

// 全局变量
let unlockedAchievements = new Set();
let currentFilter = 'all';
let currentChapter = 'all';

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', function() {
    initializePage();
    renderAchievements();
    updateProgress();
    setupEventListeners();
});

// 初始化页面
function initializePage() {
    // 从本地存储加载已解锁的成就
    const saved = localStorage.getItem('malafrenaUnlockedAchievements');
    if (saved) {
        unlockedAchievements = new Set(JSON.parse(saved));
    } else {
        // 默认解锁第一个成就
        unlockedAchievements.add('childhood_01');
    }
}

// 设置事件监听器
function setupEventListeners() {
    // 筛选按钮
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            const filter = this.dataset.filter;
            setFilter(filter);
        });
    });

    // 章节筛选按钮
    const chapterButtons = document.querySelectorAll('.chapter-btn');
    chapterButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            const chapter = this.dataset.chapter;
            setChapter(chapter);
        });
    });

    // 重置按钮
    const resetBtn = document.getElementById('resetBtn');
    if (resetBtn) {
        resetBtn.addEventListener('click', resetProgress);
    }
}

// 设置筛选器
function setFilter(filter) {
    currentFilter = filter;
    
    // 更新按钮状态
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    document.querySelector(`[data-filter="${filter}"]`).classList.add('active');
    
    renderAchievements();
}

// 设置章节筛选
function setChapter(chapter) {
    currentChapter = chapter;
    
    // 更新按钮状态
    document.querySelectorAll('.chapter-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    document.querySelector(`[data-chapter="${chapter}"]`).classList.add('active');
    
    renderAchievements();
}

// 渲染成就
function renderAchievements() {
    const container = document.getElementById('achievementsContainer');
    if (!container) return;
    
    container.innerHTML = '';
    
    // 获取筛选后的成就
    const filteredAchievements = getFilteredAchievements();
    
    // 按章节分组
    const chapters = {};
    filteredAchievements.forEach(achievement => {
        const chapter = achievement.chapter;
        if (!chapters[chapter]) {
            chapters[chapter] = [];
        }
        chapters[chapter].push(achievement);
    });
    
    // 渲染每个章节
    Object.keys(chapters).sort().forEach(chapterId => {
        const chapter = chapterData[chapterId];
        const achievements = chapters[chapterId];
        
        // 创建章节标题
        const chapterSection = document.createElement('div');
        chapterSection.className = 'chapter-section';
        chapterSection.innerHTML = `
            <div class="chapter-header" style="border-left: 4px solid ${chapter.color}">
                <h2 class="chapter-title">${chapter.title}</h2>
                <p class="chapter-subtitle">${chapter.title_en}</p>
                <p class="chapter-description">${chapter.description}</p>
                <div class="chapter-progress">
                    <span class="progress-text">${achievements.filter(a => unlockedAchievements.has(a.id)).length}/${achievements.length} 已解锁</span>
                </div>
            </div>
            <div class="achievements-grid" id="chapter-${chapterId}"></div>
        `;
        
        container.appendChild(chapterSection);
        
        // 渲染该章节的成就
        const grid = document.getElementById(`chapter-${chapterId}`);
        achievements.forEach(achievement => {
            const card = createAchievementCard(achievement);
            grid.appendChild(card);
        });
    });
}

// 获取筛选后的成就
function getFilteredAchievements() {
    let achievements = Object.values(plotAchievements);
    
    // 按分类筛选
    if (currentFilter !== 'all') {
        achievements = achievements.filter(a => a.category === currentFilter);
    }
    
    // 按章节筛选
    if (currentChapter !== 'all') {
        achievements = achievements.filter(a => a.chapter === currentChapter);
    }
    
    return achievements;
}

// 创建成就卡片
function createAchievementCard(achievement) {
    const card = document.createElement('div');
    const isUnlocked = unlockedAchievements.has(achievement.id);
    const categoryColor = categoryData[achievement.category]?.color || '#4ECDC4';
    
    card.className = `achievement-card ${isUnlocked ? 'unlocked' : 'locked'}`;
    card.style.borderLeftColor = categoryColor;
    
    card.innerHTML = `
        <div class="achievement-header">
            <div class="achievement-icon">
                <i class="fas ${isUnlocked ? 'fa-trophy' : 'fa-lock'}"></i>
            </div>
            <div class="achievement-title-section">
                <h3 class="achievement-title">${achievement.title_cn}</h3>
                <p class="achievement-title-en">${achievement.title}</p>
            </div>
            <div class="achievement-status">
                ${isUnlocked ? '<span class="unlocked-badge">已解锁</span>' : ''}
            </div>
        </div>
        
        <div class="achievement-content">
            <p class="achievement-description">${achievement.description_cn}</p>
            <div class="achievement-meta">
                <span class="chapter-tag" style="background-color: ${chapterData[achievement.chapter]?.color || '#666'}">${chapterData[achievement.chapter]?.title || achievement.chapter}</span>
                <span class="category-tag" style="background-color: ${categoryColor}">${categoryData[achievement.category]?.name || achievement.category}</span>
            </div>
        </div>
        
        <div class="achievement-characters">
            ${achievement.characters ? achievement.characters.map(charId => {
                const char = charactersData[charId];
                return char ? `<span class="character-tag">${char.name_cn}</span>` : '';
            }).join('') : ''}
        </div>
        
        <div class="achievement-tags">
            ${achievement.tags ? achievement.tags.map(tag => `<span class="tag">${tag}</span>`).join('') : ''}
        </div>
        
        <div class="achievement-actions">
            <button class="view-btn" onclick="viewAchievement('${achievement.id}')">
                <i class="fas fa-eye"></i> 查看详情
            </button>
            ${!isUnlocked ? `<button class="unlock-btn" onclick="unlockAchievement('${achievement.id}')">
                <i class="fas fa-key"></i> 解锁
            </button>` : ''}
        </div>
    `;
    
    return card;
}

// 查看成就详情
function viewAchievement(achievementId) {
    const achievement = plotAchievements[achievementId];
    if (!achievement) return;
    
    const modal = document.getElementById('achievementModal');
    const title = document.getElementById('modalTitle');
    const content = document.getElementById('modalContent');
    
    title.textContent = achievement.title_cn;
    
    const categoryColor = categoryData[achievement.category]?.color || '#4ECDC4';
    
    content.innerHTML = `
        <div class="modal-achievement-header">
            <h2>${achievement.title_cn}</h2>
            <p class="english-title">${achievement.title}</p>
            <div class="modal-meta">
                <span class="chapter-tag" style="background-color: ${chapterData[achievement.chapter]?.color || '#666'}">${chapterData[achievement.chapter]?.title || achievement.chapter}</span>
                <span class="category-tag" style="background-color: ${categoryColor}">${categoryData[achievement.category]?.name || achievement.category}</span>
            </div>
        </div>
        
        <div class="modal-achievement-content">
            <div class="description-section">
                <h3>剧情描述</h3>
                <p>${achievement.description_cn}</p>
            </div>
            
            ${achievement.characters && achievement.characters.length > 0 ? `
                <div class="characters-section">
                    <h3>相关人物</h3>
                    <div class="character-list">
                        ${achievement.characters.map(charId => {
                            const char = charactersData[charId];
                            return char ? `<div class="character-item">
                                <strong>${char.name_cn}</strong> (${char.name})
                                <span class="role">${char.role_cn}</span>
                            </div>` : '';
                        }).join('')}
                    </div>
                </div>
            ` : ''}
            
            ${achievement.tags && achievement.tags.length > 0 ? `
                <div class="tags-section">
                    <h3>标签</h3>
                    <div class="tag-list">
                        ${achievement.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                    </div>
                </div>
            ` : ''}
            
            <div class="evidence-section">
                <h3>原文证据</h3>
                <div class="evidence-content">
                    <div class="evidence-cn">
                        <h4>中文翻译</h4>
                        <p>${achievement.evidence_cn || '暂无翻译'}</p>
                    </div>
                    <div class="evidence-en">
                        <h4>英文原文</h4>
                        <p>${achievement.evidence || '暂无原文'}</p>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="modal-actions">
            <button class="btn-close" onclick="closeModal()">关闭</button>
            ${!unlockedAchievements.has(achievementId) ? `<button class="btn-unlock" onclick="unlockAchievement('${achievementId}')">解锁成就</button>` : ''}
        </div>
    `;
    
    modal.style.display = 'flex';
}

// 关闭模态框
function closeModal() {
    document.getElementById('achievementModal').style.display = 'none';
}

// 解锁成就
function unlockAchievement(achievementId) {
    unlockedAchievements.add(achievementId);
    
    // 保存到本地存储
    localStorage.setItem('malafrenaUnlockedAchievements', JSON.stringify([...unlockedAchievements]));
    
    // 重新渲染
    renderAchievements();
    updateProgress();
    
    // 显示解锁动画
    showUnlockAnimation(achievementId);
    
    // 关闭模态框
    closeModal();
}

// 显示解锁动画
function showUnlockAnimation(achievementId) {
    const achievement = plotAchievements[achievementId];
    if (!achievement) return;
    
    // 创建通知元素
    const notification = document.createElement('div');
    notification.className = 'unlock-notification';
    notification.innerHTML = `
        <div class="unlock-content">
            <i class="fas fa-trophy"></i>
            <div>
                <h3>成就解锁！</h3>
                <p>${achievement.title_cn}</p>
            </div>
        </div>
    `;
    
    document.body.appendChild(notification);
    
    // 3秒后移除通知
    setTimeout(() => {
        document.body.removeChild(notification);
    }, 3000);
}

// 更新进度
function updateProgress() {
    const totalAchievements = Object.keys(plotAchievements).length;
    const unlockedCount = unlockedAchievements.size;
    const percentage = (unlockedCount / totalAchievements) * 100;
    
    // 更新进度条
    const progressBar = document.querySelector('.progress-bar');
    if (progressBar) {
        progressBar.style.width = `${percentage}%`;
    }
    
    // 更新统计文本
    const progressText = document.querySelector('.progress-text');
    if (progressText) {
        progressText.textContent = `${unlockedCount}/${totalAchievements} 成就已解锁`;
    }
    
    // 更新百分比
    const percentageText = document.querySelector('.percentage');
    if (percentageText) {
        percentageText.textContent = `${Math.round(percentage)}%`;
    }
}

// 重置进度
function resetProgress() {
    if (confirm('确定要重置所有进度吗？此操作不可撤销。')) {
        unlockedAchievements.clear();
        unlockedAchievements.add('childhood_01'); // 默认解锁第一个
        localStorage.setItem('malafrenaUnlockedAchievements', JSON.stringify([...unlockedAchievements]));
        renderAchievements();
        updateProgress();
    }
}

// 点击模态框外部关闭
window.onclick = function(event) {
    const modal = document.getElementById('achievementModal');
    if (event.target === modal) {
        closeModal();
    }
}

// ESC键关闭模态框
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeModal();
    }
});
