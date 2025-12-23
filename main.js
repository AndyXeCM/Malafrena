// Malafrena 人物关系图主要JavaScript文件

// 关系类型颜色映射
const relationshipColors = {
    'family': '#FF6B6B',      // 红色 - 家庭关系
    'friend': '#4ECDC4',      // 青色 - 朋友关系
    'romantic': '#FF69B4',    // 粉色 - 恋爱关系
    'political': '#45B7D1',   // 蓝色 - 政治关系
    'servant': '#96CEB4',     // 绿色 - 主仆关系
    'professional': '#FFEAA7', // 黄色 - 职业关系
    'antagonist': '#DDA0DD'   // 紫色 - 敌对关系
};

// 关系类型中文名称映射
const relationshipTypeNames = {
    'family': '家庭关系',
    'friend': '朋友关系',
    'romantic': '恋爱关系',
    'political': '政治关系',
    'servant': '主仆关系',
    'professional': '职业关系',
    'antagonist': '敌对关系'
};

// 全局变量
let svg, simulation, width, height;
let selectedNode = null;
let allNodes = [];
let allLinks = [];

// 使用data.js中定义的完整人物数据（91个人物）
    // 核心Sorde家族
    'itale': {
        'id': 'itale',
        'name': 'Itale Sorde',
        'name_cn': '伊塔勒·索尔德',
        'role': 'protagonist',
        'role_cn': '主人公',
        'description': '小说主人公，年轻的理想主义者',
        'description_cn': '小说主人公，年轻的理想主义者',
        'family': 'Sorde家族',
        'appears_in': ['PART_ONE', 'PART_TWO', 'PART_THREE', 'PART_FOUR', 'PART_FIVE', 'PART_SIX', 'PART_SEVEN'],
        'key_traits': ['理想主义', '热情', '勇敢', '固执', '冲动'],
        'relationships': [
            { with: 'guide', type: 'family', type_cn: '父子' },
            { with: 'eleonora', type: 'family', type_cn: '母子' },
            { with: 'laura', type: 'family', type_cn: '兄妹' },
            { with: 'piera', type: 'romantic', type_cn: '恋人' },
            { with: 'givan_frenin', type: 'friend', type_cn: '朋友' },
            { with: 'tomas_brelavay', type: 'friend', type_cn: '朋友' },
            { with: 'stefan_fabbre', type: 'political', type_cn: '政治同盟' },
            { with: 'emanuel', type: 'family', type_cn: '叔侄' }
        ]
    },
    'laura': {
        'id': 'laura',
        'name': 'Laura Sorde',
        'name_cn': '劳拉·索尔德',
        'role': 'main',
        'role_cn': '主要角色',
        'description': 'Itale的妹妹，聪明而独立',
        'description_cn': 'Itale的妹妹，聪明而独立',
        'family': 'Sorde家族',
        'appears_in': ['PART_ONE', 'PART_SEVEN'],
        'key_traits': ['聪明', '独立', '诚实', '敏感', '好学'],
        'relationships': [
            { with: 'guide', type: 'family', type_cn: '父女' },
            { with: 'eleonora', type: 'family', type_cn: '母女' },
            { with: 'itale', type: 'family', type_cn: '兄妹' }
        ]
    },
    'guide': {
        'id': 'guide',
        'name': 'Guide Sorde',
        'name_cn': '吉德·索尔德',
        'role': 'main',
        'role_cn': '主要角色',
        'description': 'Itale的父亲，庄园主',
        'description_cn': 'Itale的父亲，庄园主',
        'family': 'Sorde家族',
        'appears_in': ['PART_ONE', 'PART_SEVEN'],
        'key_traits': ['严厉', '保守', '固执', '责任感强'],
        'relationships': [
            { with: 'itale', type: 'family', type_cn: '父子' },
            { with: 'laura', type: 'family', type_cn: '父女' },
            { with: 'eleonora', type: 'family', type_cn: '夫妻' },
            { with: 'emanuel', type: 'family', type_cn: '兄弟' }
        ]
    },
    'eleonora': {
        'id': 'eleonora',
        'name': 'Eleonora Sorde',
        'name_cn': '埃莉奥诺拉·索尔德',
        'role': 'main',
        'role_cn': '主要角色',
        'description': 'Itale的母亲，温柔而坚强',
        'description_cn': 'Itale的母亲，温柔而坚强',
        'family': 'Sorde家族',
        'appears_in': ['PART_ONE', 'PART_SEVEN'],
        'key_traits': ['温柔', '坚强', '善解人意', '慈爱'],
        'relationships': [
            { with: 'itale', type: 'family', type_cn: '母子' },
            { with: 'laura', type: 'family', type_cn: '母女' },
            { with: 'guide', type: 'family', type_cn: '夫妻' },
            { with: 'piera', type: 'family', type_cn: '义母女' }
        ]
    },
    'emanuel': {
        'id': 'emanuel',
        'name': 'Emanuel Sorde',
        'name_cn': '艾曼纽尔·索尔德',
        'role': 'main',
        'role_cn': '主要角色',
        'description': 'Itale的叔叔，律师',
        'description_cn': 'Itale的叔叔，律师',
        'family': 'Sorde家族',
        'appears_in': ['PART_ONE', 'PART_TWO', 'PART_SEVEN'],
        'key_traits': ['开明', '理性', '智慧', '善良'],
        'relationships': [
            { with: 'guide', type: 'family', type_cn: '兄弟' },
            { with: 'itale', type: 'family', type_cn: '叔侄' },
            { with: 'perneta', type: 'family', type_cn: '夫妻' }
        ]
    },
    'perneta': {
        'id': 'perneta',
        'name': 'Perneta Sorde',
        'name_cn': '佩尔内塔·索尔德',
        'role': 'supporting',
        'role_cn': '配角',
        'description': 'Emanuel的妻子',
        'description_cn': 'Emanuel的妻子',
        'family': 'Sorde家族',
        'appears_in': ['PART_ONE', 'PART_SEVEN'],
        'key_traits': ['温和', '病弱', '善良'],
        'relationships': [
            { with: 'emanuel', type: 'family', type_cn: '夫妻' }
        ]
    },
    
    // Valtorskar家族
    'piera': {
        'id': 'piera',
        'name': 'Piera Valtorskar',
        'name_cn': '皮耶拉·瓦尔托斯卡',
        'role': 'main',
        'role_cn': '主要角色',
        'description': 'Itale的青梅竹马',
        'description_cn': 'Itale的青梅竹马',
        'family': 'Valtorskar家族',
        'appears_in': ['PART_ONE', 'PART_SEVEN'],
        'key_traits': ['美丽', '神秘', '忧郁', '独立'],
        'relationships': [
            { with: 'itale', type: 'romantic', type_cn: '恋人' },
            { with: 'eleonora', type: 'family', type_cn: '义母女' },
            { with: 'casu', type: 'family', type_cn: '祖孙' }
        ]
    },
    'casu': {
        'id': 'casu',
        'name': 'Casu Valtorskar',
        'name_cn': '卡苏·瓦尔托斯卡',
        'role': 'supporting',
        'role_cn': '配角',
        'description': 'Piera的祖父',
        'description_cn': 'Piera的祖父',
        'family': 'Valtorskar家族',
        'appears_in': ['PART_ONE'],
        'key_traits': ['老派', '严厉', '传统'],
        'relationships': [
            { with: 'piera', type: 'family', type_cn: '祖孙' }
        ]
    },
    'anton_valtorskar': {
        'id': 'anton_valtorskar',
        'name': 'Anton Valtorskar',
        'name_cn': '安东·瓦尔托斯卡',
        'role': 'supporting',
        'role_cn': '配角',
        'description': 'Piera的堂兄，军官',
        'description_cn': 'Piera的堂兄，军官',
        'family': 'Valtorskar家族',
        'appears_in': ['PART_FIVE', 'PART_SIX'],
        'key_traits': ['军官', '正直', '家族荣誉感'],
        'relationships': [
            { with: 'piera', type: 'family', type_cn: '堂兄妹' }
        ]
    },
    
    // 革命团体
    'givan_frenin': {
        'id': 'givan_frenin',
        'name': 'Givan Frenin',
        'name_cn': '吉万·弗雷宁',
        'role': 'main',
        'role_cn': '主要角色',
        'description': '政治激进分子',
        'description_cn': '政治激进分子',
        'family': 'Frenin家族',
        'appears_in': ['PART_TWO', 'PART_THREE', 'PART_FOUR', 'PART_FIVE', 'PART_SIX'],
        'key_traits': ['激进', '热情', '理想主义', '勇敢'],
        'relationships': [
            { with: 'itale', type: 'friend', type_cn: '朋友' },
            { with: 'tomas_brelavay', type: 'friend', type_cn: '朋友' },
            { with: 'stefan_fabbre', type: 'political', type_cn: '政治同盟' },
            { with: 'lukas_frenin', type: 'family', type_cn: '表兄弟' }
        ]
    },
    'tomas_brelavay': {
        'id': 'tomas_brelavay',
        'name': 'Tomas Brelavay',
        'name_cn': '托马斯·布雷拉维',
        'role': 'main',
        'role_cn': '主要角色',
        'description': '革命团体成员，后成为警察',
        'description_cn': '革命团体成员，后成为警察',
        'family': 'Brelavay家族',
        'appears_in': ['PART_TWO', 'PART_THREE', 'PART_FOUR', 'PART_FIVE', 'PART_SIX'],
        'key_traits': ['忠诚', '矛盾', '现实主义', '犹豫'],
        'relationships': [
            { with: 'itale', type: 'friend', type_cn: '朋友' },
            { with: 'givan_frenin', type: 'friend', type_cn: '朋友' },
            { with: 'stefan_fabbre', type: 'political', type_cn: '政治关系' }
        ]
    },
    'stefan_fabbre': {
        'id': 'stefan_fabbre',
        'name': 'Stefan Fabbre',
        'name_cn': '斯特凡·法布雷',
        'role': 'main',
        'role_cn': '主要角色',
        'description': '革命领袖',
        'description_cn': '革命领袖',
        'family': 'Fabbre家族',
        'appears_in': ['PART_THREE', 'PART_FOUR', 'PART_FIVE'],
        'key_traits': ['领袖魅力', '雄辩', '政治智慧', '野心'],
        'relationships': [
            { with: 'itale', type: 'political', type_cn: '政治同盟' },
            { with: 'givan_frenin', type: 'political', type_cn: '政治同盟' },
            { with: 'tomas_brelavay', type: 'political', type_cn: '政治关系' }
        ]
    },
    'lukas_frenin': {
        'id': 'lukas_frenin',
        'name': 'Lukas Frenin',
        'name_cn': '卢卡斯·弗雷宁',
        'role': 'supporting',
        'role_cn': '配角',
        'description': '印刷工，革命支持者',
        'description_cn': '印刷工，革命支持者',
        'family': 'Frenin家族',
        'appears_in': ['PART_TWO', 'PART_THREE'],
        'key_traits': ['勤奋', '支持革命', '低调'],
        'relationships': [
            { with: 'givan_frenin', type: 'family', type_cn: '表兄弟' }
        ]
    },
    'valentis': {
        'id': 'valentis',
        'name': 'Valentis',
        'name_cn': '瓦伦蒂斯',
        'role': 'supporting',
        'role_cn': '配角',
        'description': '革命军事领袖',
        'description_cn': '革命军事领袖',
        'family': '军事',
        'appears_in': ['PART_FOUR', 'PART_FIVE'],
        'key_traits': ['军事', '果断', '勇敢'],
        'relationships': [
            { with: 'stefan_fabbre', type: 'political', type_cn: '政治同盟' }
        ]
    },
    
    // 政府官员和军队
    'governor': {
        'id': 'governor',
        'name': 'Governor',
        'name_cn': '总督',
        'role': 'antagonist',
        'role_cn': '反派角色',
        'description': '奥匈帝国总督',
        'description_cn': '奥匈帝国总督',
        'family': '政府',
        'appears_in': ['PART_FOUR', 'PART_FIVE'],
        'key_traits': ['权威', '严厉', '保守', '镇压'],
        'relationships': [
            { with: 'stefan_fabbre', type: 'antagonist', type_cn: '敌对' }
        ]
    },
    'anton_valtorskar': {
        'id': 'anton_valtorskar',
        'name': 'Anton Valtorskar',
        'name_cn': '安东·瓦尔托斯卡',
        'role': 'supporting',
        'role_cn': '配角',
        'description': '军官',
        'description_cn': '军官',
        'family': 'Valtorskar家族',
        'appears_in': ['PART_FIVE', 'PART_SIX'],
        'key_traits': ['军官', '正直', '家族荣誉感'],
        'relationships': [
            { with: 'piera', type: 'family', type_cn: '堂兄妹' }
        ]
    }
};

// 从data.js加载完整的人物数据（91个人物）
// charactersData 已经在data.js中定义

// 简化的人物关系数据
const relationshipsData = [
    // Itale的关系
    { source: 'itale', target: 'guide', type: 'family', evidence: 'Guide Sorde, the inheritor, was a tall man, spare, dark, with acute grey eyes...', evidence_cn: '吉德·索尔德，继承人，是个高个子男人，瘦削，肤色黝黑，有一双敏锐的灰色眼睛...' },
    { source: 'itale', target: 'eleonora', type: 'family', evidence: 'His wife Eleonora... In 1803 their son was born, their daughter three years later.', evidence_cn: '他的妻子埃莉奥诺拉... 1803年，他们的儿子出生，三年后有了女儿。' },
    { source: 'itale', target: 'laura', type: 'family', evidence: 'His little sister Laura had been put to bed.', evidence_cn: '他的小妹妹劳拉已经睡下。' },
    { source: 'itale', target: 'piera', type: 'romantic', evidence: 'Itale looked at Piera as she stood half turned from him and saw on the slender nape of her neck... three freckles: a pleasant sight.', evidence_cn: '伊塔勒看着半转身对着他的皮耶拉，在她纤细的后颈上... 三颗雀斑：一个愉快的景象。' },
    { source: 'itale', target: 'givan_frenin', type: 'friend', evidence: '"There are about five of us in Amiktiya who are serious about the ideas, right?" said Frenin.', evidence_cn: '"阿米克蒂亚里大约有五个人对这些理念是认真的，对吧？"弗雷宁说。' },
    { source: 'itale', target: 'tomas_brelavay', type: 'friend', evidence: '"Look here, Frenin!" Brelavay burst out—both had spent the last hour in the anxious search for Itale.', evidence_cn: '"听着，弗雷宁！"布雷拉维突然叫道——两人刚花了一小时焦急地找伊塔勒。' },
    { source: 'itale', target: 'stefan_fabbre', type: 'political', evidence: '"Yes; he\'s what we need; a Danton, a man who can speak for the people."', evidence_cn: '"是的；他正是我们需要的；像丹东那样的人，能为人民发声。"' },
    { source: 'itale', target: 'emanuel', type: 'family', evidence: 'His uncle Emanuel cast a huge shadow that moved behind him on the wall.', evidence_cn: '他的叔叔艾曼纽尔的身影投在他身后的墙上，巨大且移动。' },
    
    // Laura的关系
    { source: 'laura', target: 'guide', type: 'family', evidence: 'In 1803 their son was born, their daughter three years later.', evidence_cn: '1803年，他们的儿子出生，三年后有了女儿。' },
    { source: 'laura', target: 'eleonora', type: 'family', evidence: 'Eleonora taught both children until Itale was eleven and Laura eight.', evidence_cn: '埃莉奥诺拉一直教两个孩子，直到伊塔勒十一岁、劳拉八岁。' },
    { source: 'laura', target: 'itale', type: 'family', evidence: 'His little sister Laura had been put to bed.', evidence_cn: '他的小妹妹劳拉已经睡下。' },
    
    // Guide的关系
    { source: 'guide', target: 'itale', type: 'family', evidence: 'Guide Sorde, the inheritor, was a tall man, spare, dark, with acute grey eyes...', evidence_cn: '吉德·索尔德，继承人，是个高个子男人，瘦削，肤色黝黑，有一双敏锐的灰色眼睛...' },
    { source: 'guide', target: 'laura', type: 'family', evidence: 'In 1803 their son was born, their daughter three years later.', evidence_cn: '1803年，他们的儿子出生，三年后有了女儿。' },
    { source: 'guide', target: 'eleonora', type: 'family', evidence: 'His wife Eleonora... was the only thing he had found outside the mountains that he prized.', evidence_cn: '他的妻子埃莉奥诺拉... 是他在山外找到的唯一珍贵之物。' },
    { source: 'guide', target: 'emanuel', type: 'family', evidence: 'Guide\'s brother, though six years younger than he, was greyer.', evidence_cn: '吉德的兄弟比他小六岁，却更灰白。' },
    { source: 'guide', target: 'bron', type: 'servant', evidence: 'He would ask and tell Bron all the events of the week...', evidence_cn: '他会向布隆打听并告诉他一周发生的事情...' },
    
    // Piera的关系
    { source: 'piera', target: 'itale', type: 'romantic', evidence: 'Itale looked at Piera as she stood half turned from him and saw on the slender nape of her neck... three freckles: a pleasant sight.', evidence_cn: '伊塔勒看着半转身对着他的皮耶拉，在她纤细的后颈上... 三颗雀斑：一个愉快的景象。' },
    { source: 'piera', target: 'eleonora', type: 'family', evidence: 'Piera\'s mother had died... Eleonora had taken charge of the two-year-old Piera at once, firmly, as if by right.', evidence_cn: '皮耶拉的母亲去世了... 埃莉奥诺拉立即坚定地承担起对两岁的皮耶拉的照顾，仿佛理所当然。' },
    { source: 'piera', target: 'casu', type: 'family', evidence: 'Old Casu Valtorskar had been a widower for many years...', evidence_cn: '老卡苏·瓦尔托斯卡多年来一直是个鳏夫...' },
    
    // 革命团体的关系
    { source: 'givan_frenin', target: 'itale', type: 'friend', evidence: '"There are about five of us in Amiktiya who are serious about the ideas, right?" said Frenin.', evidence_cn: '"阿米克蒂亚里大约有五个人对这些理念是认真的，对吧？"弗雷宁说。' },
    { source: 'givan_frenin', target: 'tomas_brelavay', type: 'friend', evidence: '"Look here, Frenin!" Brelavay burst out—both had spent the last hour in the anxious search for Itale.', evidence_cn: '"听着，弗雷宁！"布雷拉维突然叫道——两人刚花了一小时焦急地找伊塔勒。' },
    { source: 'givan_frenin', target: 'stefan_fabbre', type: 'political', evidence: 'Frenin looked at him with his clear, fierce eyes. "Yes; he\'s what we need; a Danton, a man who can speak for the people."', evidence_cn: '弗雷宁用他清澈而炽热的眼睛看着他。"是的；他正是我们需要的；像丹东那样的人，能为人民发声。"' },
    
    { source: 'stefan_fabbre', target: 'itale', type: 'political', evidence: '"Yes; he\'s what we need; a Danton, a man who can speak for the people."', evidence_cn: '"是的；他正是我们需要的；像丹东那样的人，能为人民发声。"' },
    { source: 'stefan_fabbre', target: 'givan_frenin', type: 'political', evidence: 'Frenin looked at him with his clear, fierce eyes. "Yes; he\'s what we need; a Danton, a man who can speak for the people."', evidence_cn: '弗雷宁用他清澈而炽热的眼睛看着他。"是的；他正是我们需要的；像丹东那样的人，能为人民发声。"' },
    { source: 'stefan_fabbre', target: 'valentis', type: 'political', evidence: 'Valentis and Fabbre were the leaders of the rebellion.', evidence_cn: '瓦伦蒂斯和法布雷是叛乱的领导者。' },
    
    // 其他关系
    { source: 'bron', target: 'guide', type: 'servant', evidence: 'He would ask and tell Bron all the events of the week...', evidence_cn: '他会向布隆打听并告诉他一周发生的事情...' },
    { source: 'marta', target: 'eleonora', type: 'servant', evidence: 'Marta helped Eleonora with the household.', evidence_cn: '玛尔塔帮助埃莉奥诺拉料理家务。' }
];

// 初始化函数
function initializeGraph() {
    console.log('初始化人物关系图...');
    
    // 获取容器尺寸
    const container = document.getElementById('graph-container');
    if (!container) {
        console.error('找不到graph-container元素');
        return;
    }
    
    width = container.clientWidth;
    height = container.clientHeight;
    
    // 创建SVG
    svg = d3.select('#graph-container')
        .append('svg')
        .attr('width', width)
        .attr('height', height)
        .attr('id', 'main-svg');
    
    // 添加缩放功能
    const zoom = d3.zoom()
        .scaleExtent([0.1, 4])
        .on('zoom', (event) => {
            g.attr('transform', event.transform);
        });
    
    svg.call(zoom);
    
    // 创建主要的g元素
    const g = svg.append('g')
        .attr('class', 'everything');
    
    // 准备数据
    const nodes = Object.values(charactersData);
    const links = [];
    
    // 构建连接关系
    nodes.forEach(node => {
        if (node.relationships) {
            node.relationships.forEach(rel => {
                const targetNode = charactersData[rel.with];
                if (targetNode) {
                    links.push({
                        source: node.id,
                        target: rel.with,
                        type: rel.type,
                        type_cn: rel.type_cn,
                        evidence: rel.evidence || '',
                        evidence_cn: rel.evidence_cn || ''
                    });
                }
            });
        }
    });
    
    allNodes = nodes;
    allLinks = links;
    
    console.log(`加载了 ${nodes.length} 个人物，${links.length} 个关系`);
    
    // 创建力导向模拟
    simulation = d3.forceSimulation(nodes)
        .force('link', d3.forceLink(links).id(d => d.id).distance(100))
        .force('charge', d3.forceManyBody().strength(-300))
        .force('center', d3.forceCenter(width / 2, height / 2))
        .force('collision', d3.forceCollide().radius(30));
    
    // 创建连线
    const link = g.append('g')
        .attr('class', 'links')
        .selectAll('line')
        .data(links)
        .enter().append('line')
        .attr('stroke', d => relationshipColors[d.type] || '#999')
        .attr('stroke-opacity', 0.6)
        .attr('stroke-width', 2)
        .attr('stroke-dasharray', d => d.type === 'antagonist' ? '5,5' : 'none');
    
    // 创建节点
    const node = g.append('g')
        .attr('class', 'nodes')
        .selectAll('g')
        .data(nodes)
        .enter().append('g')
        .style('cursor', 'pointer')
        .call(d3.drag()
            .on('start', dragstarted)
            .on('drag', dragged)
            .on('end', dragended));
    
    // 添加节点圆圈
    node.append('circle')
        .attr('r', d => d.role === 'protagonist' ? 15 : d.role === 'main' ? 12 : 8)
        .attr('fill', d => {
            if (d.role === 'protagonist') return '#FF6B6B';
            if (d.role === 'main') return '#4ECDC4';
            if (d.role === 'supporting') return '#45B7D1';
            if (d.role === 'antagonist') return '#DDA0DD';
            return '#96CEB4';
        })
        .attr('stroke', '#fff')
        .attr('stroke-width', 2);
    
    // 添加节点标签
    node.append('text')
        .attr('dx', 12)
        .attr('dy', '.35em')
        .text(d => d.name)
        .style('font-size', '12px')
        .style('font-weight', d => d.role === 'protagonist' ? 'bold' : 'normal')
        .style('fill', '#333')
        .style('pointer-events', 'none');
    
    // 添加点击事件
    node.on('click', (event, d) => {
        event.stopPropagation();
        selectNode(d);
    });
    
    // 添加模拟更新事件
    simulation.on('tick', () => {
        link
            .attr('x1', d => d.source.x)
            .attr('y1', d => d.source.y)
            .attr('x2', d => d.target.x)
            .attr('y2', d => d.target.y);
        
        node
            .attr('transform', d => `translate(${d.x},${d.y})`);
    });
    
    // 点击空白处取消选择
    svg.on('click', () => {
        deselectNode();
    });
    
    // 初始化人物列表
    initializeCharacterList();
    
    // 初始化图例
    initializeLegend();
    
    // 初始化控制按钮
    initializeControls();
    
    console.log('人物关系图初始化完成');
}

// 选择节点函数
function selectNode(node) {
    console.log('选择人物:', node.name);
    selectedNode = node;
    
    // 高亮相关连接
    svg.selectAll('.links line')
        .attr('stroke-opacity', d => 
            d.source.id === node.id || d.target.id === node.id ? 1 : 0.1
        )
        .attr('stroke-width', d => 
            d.source.id === node.id || d.target.id === node.id ? 3 : 2
        );
    
    // 高亮相关节点
    svg.selectAll('.nodes g')
        .style('opacity', d => {
            if (d.id === node.id) return 1;
            const isConnected = allLinks.some(link => 
                (link.source.id === node.id && link.target.id === d.id) ||
                (link.target.id === node.id && link.source.id === d.id)
            );
            return isConnected ? 1 : 0.1;
        });
    
    // 显示人物详情
    showCharacterDetails(node);
}

// 取消选择节点
function deselectNode() {
    console.log('取消选择');
    selectedNode = null;
    
    // 恢复所有连接的透明度
    svg.selectAll('.links line')
        .attr('stroke-opacity', 0.6)
        .attr('stroke-width', 2);
    
    // 恢复所有节点的透明度
    svg.selectAll('.nodes g')
        .style('opacity', 1);
    
    // 隐藏人物详情
    hideCharacterDetails();
}

// 显示人物详情
function showCharacterDetails(node) {
    const detailsDiv = document.getElementById('character-details');
    const overlay = document.getElementById('details-overlay');
    
    if (!detailsDiv || !overlay) return;
    
    // 构建详情HTML
    let html = `
        <div class="character-info-card">
            <div class="character-header">
                <h2>${node.name}</h2>
                <span class="character-role">${node.role_cn}</span>
            </div>
            <div class="character-meta">
                <p><strong>中文名：</strong>${node.name_cn}</p>
                <p><strong>家族：</strong>${node.family}</p>
                <p><strong>出现章节：</strong>${node.appears_in.join(', ')}</p>
            </div>
            <div class="character-description">
                <p>${node.description_cn}</p>
            </div>
            <div class="character-traits">
                <h3>性格特点</h3>
                <div class="traits-list">
                    ${node.key_traits.map(trait => `<span class="trait-tag">${trait}</span>`).join('')}
                </div>
            </div>
    `;
    
    // 添加关系信息
    if (node.relationships && node.relationships.length > 0) {
        html += `
            <div class="character-relationships">
                <h3>人物关系</h3>
                <div class="relationships-list">
        `;
        
        node.relationships.forEach(rel => {
            const targetChar = charactersData[rel.with];
            if (targetChar) {
                html += `
                    <div class="relationship-item" onclick="selectCharacterById('${rel.with}')">
                        <div class="relationship-type" style="background-color: ${relationshipColors[rel.type]}">
                            ${rel.type_cn}
                        </div>
                        <div class="relationship-person">${targetChar.name}</div>
                        <button class="view-evidence-btn" onclick="event.stopPropagation(); showEvidenceModal('${rel.with}', '${node.id}')">
                            查看原文
                        </button>
                    </div>
                `;
            }
        });
        
        html += `
                </div>
            </div>
        `;
    }
    
    html += `
            <button class="close-details-btn" onclick="deselectNode()">关闭</button>
        </div>
    `;
    
    detailsDiv.innerHTML = html;
    
    // 显示详情面板
    overlay.style.display = 'block';
    detailsDiv.style.display = 'block';
}

// 隐藏人物详情
function hideCharacterDetails() {
    const detailsDiv = document.getElementById('character-details');
    const overlay = document.getElementById('details-overlay');
    
    if (detailsDiv) detailsDiv.style.display = 'none';
    if (overlay) overlay.style.display = 'none';
}

// 通过ID选择人物
function selectCharacterById(id) {
    const node = charactersData[id];
    if (node) {
        selectNode(node);
        
        // 将视图居中到该节点
        if (svg && node.x && node.y) {
            const transform = d3.zoomIdentity
                .translate(width / 2 - node.x * 1.5, height / 2 - node.y * 1.5)
                .scale(1.5);
            
            svg.transition()
                .duration(750)
                .call(d3.zoom().transform, transform);
        }
    }
}

// 显示证据弹窗
function showEvidenceModal(sourceId, targetId) {
    const modal = document.getElementById('evidence-modal');
    const content = document.getElementById('evidence-content');
    
    if (!modal || !content) return;
    
    // 查找对应的关系证据
    const sourceChar = charactersData[sourceId];
    const targetChar = charactersData[targetId];
    
    if (!sourceChar || !targetChar) return;
    
    let evidenceText = '';
    if (sourceChar.relationships) {
        const rel = sourceChar.relationships.find(r => r.with === targetId);
        if (rel && (rel.evidence || rel.evidence_cn)) {
            evidenceText = `
                <div class="evidence-text">
                    <h3>英文原文</h3>
                    <p>${rel.evidence || '原文证据未找到'}</p>
                    <h3>中文翻译</h3>
                    <p>${rel.evidence_cn || '中文翻译未找到'}</p>
                </div>
            `;
        }
    }
    
    if (!evidenceText) {
        evidenceText = `
            <div class="evidence-text">
                <p>未找到原文证据</p>
            </div>
        `;
    }
    
    content.innerHTML = `
        <button class="close-modal-btn" onclick="closeEvidenceModal()">&times;</button>
        <h2>${sourceChar.name} 与 ${targetChar.name} 的关系</h2>
        ${evidenceText}
    `;
    
    modal.style.display = 'block';
    
    // 点击模态框外部关闭
    modal.onclick = function(event) {
        if (event.target === modal) {
            closeEvidenceModal();
        }
    };
}

// 关闭证据弹窗
function closeEvidenceModal() {
    const modal = document.getElementById('evidence-modal');
    if (modal) {
        modal.style.display = 'none';
    }
}

// 初始化人物列表
function initializeCharacterList() {
    const listDiv = document.getElementById('character-list');
    if (!listDiv) return;
    
    const nodes = Object.values(charactersData);
    
    // 按角色重要性分组
    const groups = {
        'protagonist': [],
        'main': [],
        'supporting': [],
        'minor': [],
        'antagonist': []
    };
    
    nodes.forEach(node => {
        if (groups[node.role]) {
            groups[node.role].push(node);
        } else {
            groups['minor'].push(node);
        }
    });
    
    let html = '';
    
    // 添加各组人物
    const roleNames = {
        'protagonist': '主人公',
        'main': '主要角色',
        'supporting': '配角',
        'minor': '次要角色',
        'antagonist': '反派角色'
    };
    
    Object.keys(groups).forEach(role => {
        if (groups[role].length > 0) {
            html += `
                <div class="character-group">
                    <h3 class="group-title">${roleNames[role]}</h3>
                    <div class="group-characters">
            `;
            
            groups[role].forEach(node => {
                html += `
                    <div class="character-item" onclick="selectCharacterById('${node.id}')">
                        <span class="character-dot" style="background-color: ${
                            node.role === 'protagonist' ? '#FF6B6B' :
                            node.role === 'main' ? '#4ECDC4' :
                            node.role === 'supporting' ? '#45B7D1' :
                            node.role === 'antagonist' ? '#DDA0DD' : '#96CEB4'
                        }"></span>
                        <span class="character-name">${node.name}</span>
                        <span class="character-name-cn">${node.name_cn}</span>
                    </div>
                `;
            });
            
            html += `
                    </div>
                </div>
            `;
        }
    });
    
    listDiv.innerHTML = html;
}

// 初始化图例
function initializeLegend() {
    const legendDiv = document.getElementById('legend');
    if (!legendDiv) return;
    
    let html = '<h3>关系类型</h3>';
    
    Object.keys(relationshipColors).forEach(type => {
        html += `
            <div class="legend-item">
                <span class="legend-color" style="background-color: ${relationshipColors[type]}"></span>
                <span class="legend-text">${relationshipTypeNames[type]}</span>
            </div>
        `;
    });
    
    legendDiv.innerHTML = html;
}

// 初始化控制按钮
function initializeControls() {
    console.log('初始化控制按钮');
    
    // 放大按钮
    const zoomInBtn = document.getElementById('zoom-in');
    if (zoomInBtn) {
        zoomInBtn.onclick = () => {
            console.log('放大');
            if (svg) {
                svg.transition().duration(300).call(
                    d3.zoom().scaleBy, 1.3
                );
            }
        };
    }
    
    // 缩小按钮
    const zoomOutBtn = document.getElementById('zoom-out');
    if (zoomOutBtn) {
        zoomOutBtn.onclick = () => {
            console.log('缩小');
            if (svg) {
                svg.transition().duration(300).call(
                    d3.zoom().scaleBy, 1 / 1.3
                );
            }
        };
    }
    
    // 重置视图按钮
    const resetBtn = document.getElementById('reset-view');
    if (resetBtn) {
        resetBtn.onclick = () => {
            console.log('重置视图');
            if (svg) {
                svg.transition().duration(750).call(
                    d3.zoom().transform,
                    d3.zoomIdentity
                );
            }
            deselectNode();
        };
    }
    
    // 全屏按钮
    const fullscreenBtn = document.getElementById('fullscreen');
    if (fullscreenBtn) {
        fullscreenBtn.onclick = () => {
            console.log('全屏');
            const container = document.getElementById('graph-container');
            if (container) {
                if (container.requestFullscreen) {
                    container.requestFullscreen();
                } else if (container.mozRequestFullScreen) {
                    container.mozRequestFullScreen();
                } else if (container.webkitRequestFullscreen) {
                    container.webkitRequestFullscreen();
                } else if (container.msRequestFullscreen) {
                    container.msRequestFullscreen();
                }
            }
        };
    }
    
    // 搜索功能
    const searchInput = document.getElementById('character-search');
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            const searchTerm = e.target.value.toLowerCase();
            filterCharacters(searchTerm);
        });
    }
}

// 搜索过滤人物
function filterCharacters(searchTerm) {
    if (!svg) return;
    
    const characterItems = document.querySelectorAll('.character-item');
    
    characterItems.forEach(item => {
        const name = item.querySelector('.character-name').textContent.toLowerCase();
        const nameCn = item.querySelector('.character-name-cn').textContent.toLowerCase();
        
        if (name.includes(searchTerm) || nameCn.includes(searchTerm)) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
    
    // 同时过滤图中的节点
    svg.selectAll('.nodes g')
        .style('opacity', d => {
            const name = d.name.toLowerCase();
            const nameCn = d.name_cn.toLowerCase();
            
            if (name.includes(searchTerm) || nameCn.includes(searchTerm) || searchTerm === '') {
                return 1;
            } else {
                return 0.1;
            }
        });
    
    svg.selectAll('.links line')
        .attr('stroke-opacity', d => {
            const sourceName = d.source.name.toLowerCase();
            const sourceNameCn = d.source.name_cn.toLowerCase();
            const targetName = d.target.name.toLowerCase();
            const targetNameCn = d.target.name_cn.toLowerCase();
            
            if ((sourceName.includes(searchTerm) || sourceNameCn.includes(searchTerm) || searchTerm === '') &&
                (targetName.includes(searchTerm) || targetNameCn.includes(searchTerm) || searchTerm === '')) {
                return 0.6;
            } else {
                return 0.1;
            }
        });
}

// 拖拽函数
function dragstarted(event, d) {
    if (!event.active) simulation.alphaTarget(0.3).restart();
    d.fx = d.x;
    d.fy = d.y;
}

function dragged(event, d) {
    d.fx = event.x;
    d.fy = event.y;
}

function dragended(event, d) {
    if (!event.active) simulation.alphaTarget(0);
    d.fx = null;
    d.fy = null;
}

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM加载完成，开始初始化');
    initializeGraph();
});

// 窗口大小改变时重新调整
window.addEventListener('resize', () => {
    if (!svg) return;
    
    const container = document.getElementById('graph-container');
    if (!container) return;
    
    width = container.clientWidth;
    height = container.clientHeight;
    
    svg.attr('width', width).attr('height', height);
    
    if (simulation) {
        simulation.force('center', d3.forceCenter(width / 2, height / 2));
        simulation.alpha(0.3).restart();
    }
});

// ESC键关闭弹窗
document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
        closeEvidenceModal();
        hideCharacterDetails();
    }
});
