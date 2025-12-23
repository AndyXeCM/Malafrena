// Minecraft 风格剧情成就墙 v2（基于 achievements.js 与 data.js）

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

const chapterOrder = [
    'PART_ONE',
    'PART_TWO',
    'PART_THREE',
    'PART_FOUR',
    'PART_FIVE',
    'PART_SIX',
    'PART_SEVEN'
];

let currentBranch = 'all';
let currentCategory = 'all';

document.addEventListener('DOMContentLoaded', () => {
    if (typeof plotAchievements === 'undefined' || typeof chapterData === 'undefined') {
        showLoadError();
        return;
    }

    renderSummary();
    renderBranchList();
    renderCategoryFilter();
    renderBranches();
    setupInteractions();
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
                return chapter ? `<li>• ${chapter.title}：${chapter.description}</li>` : '';
            }).join('')}
        </ul>
    `;
}

function renderBranchList() {
    const list = document.getElementById('branchList');
    if (!list) return;

    const options = [
        { id: 'all', title: '全部分支', description: '查看所有剧情节点' },
        ...branchDefinitions
    ];

    list.innerHTML = options.map(option => `
        <li>
            <button class="branch-btn ${option.id === currentBranch ? 'active' : ''}" data-branch="${option.id}">
                ${option.title}
            </button>
        </li>
    `).join('');

    list.querySelectorAll('.branch-btn').forEach(button => {
        button.addEventListener('click', () => {
            currentBranch = button.dataset.branch;
            list.querySelectorAll('.branch-btn').forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            renderBranches();
        });
    });
}

function renderCategoryFilter() {
    const select = document.getElementById('categorySelect');
    if (!select) return;

    const categories = typeof categoryData === 'undefined' ? {} : categoryData;
    const options = [
        { id: 'all', name: '全部分类' },
        ...Object.values(categories)
    ];

    select.innerHTML = options.map(option => `
        <option value="${option.id}">${option.name}</option>
    `).join('');

    select.value = currentCategory;
    select.addEventListener('change', () => {
        currentCategory = select.value;
        renderBranches();
    });
}

function renderBranches() {
    const container = document.getElementById('branchesContainer');
    if (!container) return;

    container.innerHTML = '';
    const achievements = Object.values(plotAchievements);
    const branchesToRender = currentBranch === 'all'
        ? branchDefinitions
        : branchDefinitions.filter(branch => branch.id === currentBranch);

    branchesToRender.forEach(branch => {
        const branchAchievements = achievements.filter(achievement => {
            if (!branch.categories.includes(achievement.category)) return false;
            if (currentCategory === 'all') return true;
            return achievement.category === currentCategory;
        });

        if (!branchAchievements.length) return;

        const section = document.createElement('section');
        section.className = 'branch-section';
        section.innerHTML = `
            <div class="branch-header">
                <h2>${branch.title}</h2>
                <span>${branch.description} · ${branchAchievements.length} 项</span>
            </div>
            <div class="achievement-scroll">
                <div class="achievement-grid"></div>
            </div>
        `;

        const grid = section.querySelector('.achievement-grid');
        branchAchievements.forEach(achievement => {
            grid.appendChild(createAchievementCard(achievement));
        });

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
            ${tags.map(tag => `<span class="achievement-tag">${tag}</span>`).join('')}
        </div>
        <div class="achievement-detail">
            <h4>${chapterData?.[achievement.chapter]?.title || '剧情细节'}</h4>
            <p>${achievement.description_cn}</p>
            <p>${achievement.evidence_cn || '暂无原文证据。'}</p>
        </div>
    `;

    card.addEventListener('click', () => openModal(achievement.id));
    return card;
}

function setupInteractions() {
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
        <h4>${chapter?.title || '剧情节点'}</h4>
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
