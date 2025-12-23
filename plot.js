// Malafrena 剧情成就墙 JavaScript

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', () => {
    renderSummary();
    renderBranches();
    setupInteractions();
});

const branchDefinitions = [
    {
        id: 'mainline',
        title: '主线剧情',
        description: '革命主线与关键转折',
        categories: ['politics', 'action', 'arrival', 'departure']
    },
    {
        id: 'romance',
        title: '爱情支线',
        description: 'Itale 与 Piera 的情感发展',
        categories: ['romance']
    },
    {
        id: 'family',
        title: '家庭支线',
        description: '家族责任与亲情冲突',
        categories: ['family']
    },
    {
        id: 'friendship',
        title: '友谊支线',
        description: '伙伴与同盟的羁绊',
        categories: ['friend', 'social']
    },
    {
        id: 'growth',
        title: '成长支线',
        description: '成长、教育与心灵变化',
        categories: ['childhood', 'education', 'character', 'mentor', 'mystery']
    }
];

function renderSummary() {
    const summaryLine = document.getElementById('summaryLine');
    const summaryDetail = document.getElementById('summaryDetail');

    if (!summaryLine || !summaryDetail) return;

    const chapterOrder = [
        'PART_ONE',
        'PART_TWO',
        'PART_THREE',
        'PART_FOUR',
        'PART_FIVE',
        'PART_SIX',
        'PART_SEVEN'
    ];

    const summaryText = chapterOrder
        .map(id => chapterData[id]?.title)
        .filter(Boolean)
        .join(' → ');

    summaryLine.textContent = summaryText || 'Malafrena 的人生旅程与革命历程。';

    summaryDetail.innerHTML = `
        <h3>章节走向</h3>
        <ul>
            ${chapterOrder.map(id => {
                const chapter = chapterData[id];
                return chapter
                    ? `<li>• ${chapter.title}：${chapter.description}</li>`
                    : '';
            }).join('')}
        </ul>
    `;
}

function renderBranches() {
    const container = document.getElementById('branchesContainer');
    if (!container) return;

    container.innerHTML = '';
    const achievements = Object.values(plotAchievements);

    branchDefinitions.forEach(branch => {
        const branchAchievements = achievements.filter(achievement =>
            branch.categories.includes(achievement.category)
        );

        if (!branchAchievements.length) return;

        const section = document.createElement('section');
        section.className = 'branch-section';

        section.innerHTML = `
            <div class="branch-header">
                <h2>${branch.title}</h2>
                <span>${branch.description} · ${branchAchievements.length} 项</span>
            </div>
            <div class="achievement-grid" id="branch-${branch.id}"></div>
        `;

        container.appendChild(section);

        const grid = section.querySelector('.achievement-grid');
        branchAchievements.forEach(achievement => {
            const card = createAchievementCard(achievement);
            grid.appendChild(card);
        });
    });
}

function createAchievementCard(achievement) {
    const card = document.createElement('div');
    card.className = 'achievement-card';
    card.dataset.achievementId = achievement.id;

    const category = categoryData[achievement.category];
    const chapter = chapterData[achievement.chapter];

    const tags = [
        chapter?.title,
        category?.name,
        ...(achievement.tags || [])
    ].filter(Boolean);

    card.innerHTML = `
        <div class="achievement-title">${achievement.title_cn}</div>
        <div class="achievement-subtitle">${achievement.title}</div>
        <div class="achievement-tags">
            ${tags.map(tag => `<span class="achievement-tag">${tag}</span>`).join('')}
        </div>
        <div class="achievement-detail">
            <h4>${chapter?.title || '剧情细节'}</h4>
            <p>${achievement.description_cn}</p>
            <p>${achievement.evidence_cn || '暂无原文证据。'}</p>
        </div>
    `;

    if (category?.color) {
        card.style.borderColor = `${category.color}55`;
    }

    return card;
}

function setupInteractions() {
    const summaryCard = document.getElementById('summaryCard');
    if (summaryCard) {
        summaryCard.addEventListener('click', () => {
            summaryCard.classList.toggle('is-open');
        });
    }

    document.addEventListener('click', event => {
        const card = event.target.closest('.achievement-card');
        if (!card) return;
        card.classList.toggle('is-open');
        const achievementId = card.dataset.achievementId;
        if (achievementId) {
            openModal(achievementId);
        }
    });

    const modal = document.getElementById('achievementModal');
    if (modal) {
        modal.addEventListener('click', event => {
            if (event.target === modal) {
                closeModal();
            }
        });
    }

    document.addEventListener('keydown', event => {
        if (event.key === 'Escape') {
            closeModal();
        }
    });
}

function openModal(achievementId) {
    const achievement = plotAchievements[achievementId];
    if (!achievement) return;

    const modal = document.getElementById('achievementModal');
    const title = document.getElementById('modalTitle');
    const content = document.getElementById('modalContent');
    if (!modal || !title || !content) return;

    const chapter = chapterData[achievement.chapter];
    const category = categoryData[achievement.category];

    const characterList = (achievement.characters || [])
        .map(charId => charactersData[charId])
        .filter(Boolean)
        .map(char => `${char.name_cn}（${char.name}）`);

    title.textContent = achievement.title_cn;

    content.innerHTML = `
        <div class="modal-body">
            <h4>${chapter?.title || '剧情节点'}</h4>
            <p>${achievement.description_cn}</p>
            <p>${achievement.evidence_cn || '暂无原文证据。'}</p>
            <p><strong>分类：</strong>${category?.name || achievement.category}</p>
            <p><strong>相关人物：</strong>${characterList.length ? characterList.join('、') : '暂无'}</p>
            <p><strong>原文：</strong>${achievement.evidence || '暂无原文'}</p>
        </div>
    `;

    modal.style.display = 'flex';
}

function closeModal() {
    const modal = document.getElementById('achievementModal');
    if (modal) {
        modal.style.display = 'none';
    }
}
