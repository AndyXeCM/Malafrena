// Malafrena 剧情总览页面脚本（基于 achievements.js 与 data.js）

const chapterOrder = [
    'PART_ONE',
    'PART_TWO',
    'PART_THREE',
    'PART_FOUR',
    'PART_FIVE',
    'PART_SIX',
    'PART_SEVEN'
];

let currentFilter = 'all';

document.addEventListener('DOMContentLoaded', () => {
    if (typeof plotAchievements === 'undefined' || typeof chapterData === 'undefined') {
        showLoadError();
        return;
    }

    renderSummary();
    renderFilters();
    renderChapters();
    setupModalHandlers();
});

function showLoadError() {
    const summaryLine = document.getElementById('summaryLine');
    const summaryDetail = document.getElementById('summaryDetail');
    if (summaryLine) {
        summaryLine.textContent = '剧情数据未加载，请检查 data.js 与 achievements.js。';
    }
    if (summaryDetail) {
        summaryDetail.textContent = '建议使用本地静态服务器打开页面，避免 file:// 访问限制。';
    }
}

function renderSummary() {
    const summaryLine = document.getElementById('summaryLine');
    const summaryDetail = document.getElementById('summaryDetail');
    if (!summaryLine || !summaryDetail) return;

    const titleLine = chapterOrder
        .map(id => chapterData[id]?.title)
        .filter(Boolean)
        .join(' → ');

    summaryLine.textContent = titleLine || 'Malafrena 的人生旅程与革命历程。';

    summaryDetail.innerHTML = `
        <ul>
            ${chapterOrder.map(id => {
                const chapter = chapterData[id];
                if (!chapter) return '';
                return `<li>• ${chapter.title}：${chapter.description}</li>`;
            }).join('')}
        </ul>
    `;
}

function renderFilters() {
    const filters = document.getElementById('filters');
    if (!filters) return;

    const categories = typeof categoryData === 'undefined' ? {} : categoryData;
    const items = [
        { id: 'all', name: '全部' },
        ...Object.values(categories)
    ];

    filters.innerHTML = items.map(item => `
        <button class="filter-btn ${item.id === currentFilter ? 'active' : ''}" data-filter="${item.id}">
            ${item.name}
        </button>
    `).join('');

    filters.querySelectorAll('.filter-btn').forEach(button => {
        button.addEventListener('click', () => {
            currentFilter = button.dataset.filter;
            filters.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            renderChapters();
        });
    });
}

function renderChapters() {
    const container = document.getElementById('chaptersContainer');
    if (!container) return;

    container.innerHTML = '';
    const achievements = Object.values(plotAchievements);

    chapterOrder.forEach(chapterId => {
        const chapter = chapterData[chapterId];
        if (!chapter) return;

        const chapterAchievements = achievements.filter(achievement => {
            if (achievement.chapter !== chapterId) return false;
            if (currentFilter === 'all') return true;
            return achievement.category === currentFilter;
        });

        const section = document.createElement('section');
        section.className = 'chapter-section';
        section.innerHTML = `
            <div class="chapter-header">
                <h2 class="chapter-title">${chapter.title}</h2>
                <p class="chapter-subtitle">${chapter.description}</p>
            </div>
            <div class="achievement-grid"></div>
        `;

        const grid = section.querySelector('.achievement-grid');
        if (!chapterAchievements.length) {
            grid.innerHTML = '<p style="color:#b6c0b0;">该章节暂无匹配的剧情节点。</p>';
        } else {
            chapterAchievements.forEach(achievement => {
                grid.appendChild(createAchievementCard(achievement));
            });
        }

        container.appendChild(section);
    });
}

function createAchievementCard(achievement) {
    const card = document.createElement('div');
    card.className = 'achievement-card';
    card.dataset.achievementId = achievement.id;

    const tags = [
        chapterData?.[achievement.chapter]?.title,
        categoryData?.[achievement.category]?.name,
        ...(achievement.tags || [])
    ].filter(Boolean);

    card.innerHTML = `
        <div class="achievement-title">${achievement.title_cn}</div>
        <div class="achievement-subtitle">${achievement.title}</div>
        <div class="achievement-tags">
            ${tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
        </div>
    `;

    card.addEventListener('click', () => openModal(achievement.id));
    return card;
}

function setupModalHandlers() {
    const modal = document.getElementById('achievementModal');
    if (!modal) return;

    modal.addEventListener('click', event => {
        if (event.target === modal) {
            closeModal();
        }
    });

    document.addEventListener('keydown', event => {
        if (event.key === 'Escape') {
            closeModal();
        }
    });
}

function openModal(achievementId) {
    const achievement = plotAchievements?.[achievementId];
    if (!achievement) return;

    const modal = document.getElementById('achievementModal');
    const title = document.getElementById('modalTitle');
    const content = document.getElementById('modalContent');
    if (!modal || !title || !content) return;

    const chapter = chapterData?.[achievement.chapter];
    const category = categoryData?.[achievement.category];
    const characterList = (achievement.characters || [])
        .map(id => charactersData?.[id])
        .filter(Boolean)
        .map(char => `${char.name_cn}（${char.name}）`);

    title.textContent = achievement.title_cn;
    content.innerHTML = `
        <h4>${chapter?.title || '剧情章节'}</h4>
        <p>${achievement.description_cn}</p>
        <p>${achievement.evidence_cn || '暂无原文证据。'}</p>
        <p><strong>分类：</strong>${category?.name || achievement.category}</p>
        <p><strong>相关人物：</strong>${characterList.length ? characterList.join('、') : '暂无'}</p>
        <p><strong>原文：</strong>${achievement.evidence || '暂无原文'}</p>
    `;

    modal.style.display = 'flex';
}

function closeModal() {
    const modal = document.getElementById('achievementModal');
    if (modal) {
        modal.style.display = 'none';
    }
}
