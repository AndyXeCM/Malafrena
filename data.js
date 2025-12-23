// Malafrena 完整人物数据库 - 91个人物

const charactersData = {
    // ============= 核心Sorde家族（10人）=============
    'itale': {
        'id': 'itale',
        'name': 'Itale Sorde',
        'name_cn': '伊塔勒·索尔德',
        'role': 'protagonist',
        'role_cn': '主人公',
        'description': '小说主人公，年轻的理想主义者，为了自由和正义离开家乡',
        'description_cn': '小说主人公，年轻的理想主义者，为了自由和正义离开家乡',
        'aliases': ['Itale', 'Herr Sorde', 'Dom Itale', 'Dom Itaal'],
        'family': 'Sorde家族',
        'appears_in': ['PART_ONE', 'PART_TWO', 'PART_THREE', 'PART_FOUR', 'PART_FIVE', 'PART_SIX', 'PART_SEVEN'],
        'key_traits': ['理想主义', '热情', '勇敢', '固执', '冲动'],
        'relationships': [
            { with: 'guide', type: 'family', type_cn: '父子', evidence: 'Guide Sorde, the inheritor, was a tall man, spare, dark, with acute grey eyes...', evidence_cn: '吉德·索尔德，继承人，是个高个子男人，瘦削，肤色黝黑，有一双敏锐的灰色眼睛...' },
            { with: 'eleonora', type: 'family', type_cn: '母子', evidence: 'His wife Eleonora... In 1803 their son was born, their daughter three years later.', evidence_cn: '他的妻子埃莉奥诺拉... 1803年，他们的儿子出生，三年后有了女儿。' },
            { with: 'laura', type: 'family', type_cn: '兄妹', evidence: 'His little sister Laura had been put to bed.', evidence_cn: '他的小妹妹劳拉已经睡下。' },
            { with: 'piera', type: 'romantic', type_cn: '恋人', evidence: 'Itale looked at Piera as she stood half turned from him and saw on the slender nape of her neck... three freckles: a pleasant sight.', evidence_cn: '伊塔勒看着半转身对着他的皮耶拉，在她纤细的后颈上... 三颗雀斑：一个愉快的景象。' },
            { with: 'givan_frenin', type: 'friend', type_cn: '朋友', evidence: '"There are about five of us in Amiktiya who are serious about the ideas, right?" said Frenin.', evidence_cn: '"阿米克蒂亚里大约有五个人对这些理念是认真的，对吧？"弗雷宁说。' },
            { with: 'tomas_brelavay', type: 'friend', type_cn: '朋友', evidence: '"Look here, Frenin!" Brelavay burst out—both had spent the last hour in the anxious search for Itale.', evidence_cn: '"听着，弗雷宁！"布雷拉维突然叫道——两人刚花了一小时焦急地找伊塔勒。' },
            { with: 'stefan_fabbre', type: 'political', type_cn: '政治同盟', evidence: '"Yes; he\'s what we need; a Danton, a man who can speak for the people."', evidence_cn: '"是的；他正是我们需要的；像丹东那样的人，能为人民发声。"' },
            { with: 'emanuel', type: 'family', type_cn: '叔侄', evidence: 'His uncle Emanuel cast a huge shadow that moved behind him on the wall.', evidence_cn: '他的叔叔艾曼纽尔的身影投在他身后的墙上，巨大且移动。' }
        ]
    },
    'laura': {
        'id': 'laura',
        'name': 'Laura Sorde',
        'name_cn': '劳拉·索尔德',
        'role': 'main',
        'role_cn': '主要角色',
        'description': 'Itale的妹妹，聪明而独立，热爱阅读',
        'description_cn': 'Itale的妹妹，聪明而独立，热爱阅读',
        'aliases': ['Laura', 'Miss Laura', 'Miss Sorde'],
        'family': 'Sorde家族',
        'appears_in': ['PART_ONE', 'PART_SEVEN'],
        'key_traits': ['聪明', '独立', '诚实', '敏感', '好学'],
        'relationships': [
            { with: 'guide', type: 'family', type_cn: '父女', evidence: 'In 1803 their son was born, their daughter three years later.', evidence_cn: '1803年，他们的儿子出生，三年后有了女儿。' },
            { with: 'eleonora', type: 'family', type_cn: '母女', evidence: 'Eleonora taught both children until Itale was eleven and Laura eight.', evidence_cn: '埃莉奥诺拉一直教两个孩子，直到伊塔勒十一岁、劳拉八岁。' },
            { with: 'itale', type: 'family', type_cn: '兄妹', evidence: 'His little sister Laura had been put to bed.', evidence_cn: '他的小妹妹劳拉已经睡下。' }
        ]
    },
    'guide': {
        'id': 'guide',
        'name': 'Guide Sorde',
        'name_cn': '吉德·索尔德',
        'role': 'main',
        'role_cn': '主要角色',
        'description': 'Itale的父亲，庄园主，保守而固执，但深爱家人',
        'description_cn': 'Itale的父亲，庄园主，保守而固执，但深爱家人',
        'aliases': ['Guide', 'Dom Guide', 'Mr Sorde', 'Count Guide Valtorskar'],
        'family': 'Sorde家族',
        'appears_in': ['PART_ONE', 'PART_SEVEN'],
        'key_traits': ['严厉', '保守', '固执', '责任感强', '诚实'],
        'relationships': [
            { with: 'itale', type: 'family', type_cn: '父子', evidence: 'Guide Sorde, the inheritor, was a tall man, spare, dark, with acute grey eyes...', evidence_cn: '吉德·索尔德，继承人，是个高个子男人，瘦削，肤色黝黑，有一双敏锐的灰色眼睛...' },
            { with: 'laura', type: 'family', type_cn: '父女', evidence: 'In 1803 their son was born, their daughter three years later.', evidence_cn: '1803年，他们的儿子出生，三年后有了女儿。' },
            { with: 'eleonora', type: 'family', type_cn: '夫妻', evidence: 'His wife Eleonora... was the only thing he had found outside the mountains that he prized.', evidence_cn: '他的妻子埃莉奥诺拉... 是他在山外找到的唯一珍贵之物。' },
            { with: 'emanuel', type: 'family', type_cn: '兄弟', evidence: 'Guide\'s brother, though six years younger than he, was greyer.', evidence_cn: '吉德的兄弟比他小六岁，却更灰白。' },
            { with: 'bron', type: 'servant', type_cn: '主仆', evidence: 'He would ask and tell Bron all the events of the week...', evidence_cn: '他会向布隆打听并告诉他一周发生的事情...' }
        ]
    },
    'eleonora': {
        'id': 'eleonora',
        'name': 'Eleonora Sorde',
        'name_cn': '埃莉奥诺拉·索尔德',
        'role': 'main',
        'role_cn': '主要角色',
        'description': 'Itale的母亲，温柔而坚强，来自南部平原',
        'description_cn': 'Itale的母亲，温柔而坚强，来自南部平原',
        'aliases': ['Eleonora', 'Mrs Sorde'],
        'family': 'Sorde家族',
        'appears_in': ['PART_ONE', 'PART_SEVEN'],
        'key_traits': ['温柔', '坚强', '善解人意', '慈爱', '开明'],
        'relationships': [
            { with: 'itale', type: 'family', type_cn: '母子', evidence: 'His wife Eleonora... In 1803 their son was born, their daughter three years later.', evidence_cn: '他的妻子埃莉奥诺拉... 1803年，他们的儿子出生，三年后有了女儿。' },
            { with: 'laura', type: 'family', type_cn: '母女', evidence: 'Eleonora taught both children until Itale was eleven and Laura eight.', evidence_cn: '埃莉奥诺拉一直教两个孩子，直到伊塔勒十一岁、劳拉八岁。' },
            { with: 'guide', type: 'family', type_cn: '夫妻', evidence: 'His wife Eleonora... was the only thing he had found outside the mountains that he prized.', evidence_cn: '他的妻子埃莉奥诺拉... 是他在山外找到的唯一珍贵之物。' },
            { with: 'piera', type: 'family', type_cn: '义母女', evidence: 'Piera\'s mother had died... Eleonora had taken charge of the two-year-old Piera at once, firmly, as if by right.', evidence_cn: '皮耶拉的母亲去世了... 埃莉奥诺拉立即坚定地承担起对两岁的皮耶拉的照顾，仿佛理所当然。' }
        ]
    },
    'emanuel': {
        'id': 'emanuel',
        'name': 'Emanuel Sorde',
        'name_cn': '艾曼纽尔·索尔德',
        'role': 'main',
        'role_cn': '主要角色',
        'description': 'Itale的叔叔，律师，比Guide更开明和理性',
        'description_cn': 'Itale的叔叔，律师，比Guide更开明和理性',
        'aliases': ['Emanuel', 'Mr Sorde'],
        'family': 'Sorde家族',
        'appears_in': ['PART_ONE', 'PART_TWO', 'PART_SEVEN'],
        'key_traits': ['开明', '理性', '讽刺', '智慧', '善良'],
        'relationships': [
            { with: 'guide', type: 'family', type_cn: '兄弟', evidence: 'Guide\'s brother, though six years younger than he, was greyer.', evidence_cn: '吉德的兄弟比他小六岁，却更灰白。' },
            { with: 'itale', type: 'family', type_cn: '叔侄', evidence: 'His uncle Emanuel cast a huge shadow that moved behind him on the wall.', evidence_cn: '他的叔叔艾曼纽尔的身影投在他身后的墙上，巨大且移动。' },
            { with: 'perneta', type: 'family', type_cn: '夫妻', evidence: 'Emanuel and Perneta had had one child, stillborn.', evidence_cn: '艾曼纽尔和佩尔内塔有过一个孩子，出生即夭。' }
        ]
    },
    'perneta': {
        'id': 'perneta',
        'name': 'Perneta Sorde',
        'name_cn': '佩尔内塔·索尔德',
        'role': 'supporting',
        'role_cn': '配角',
        'description': 'Emanuel的妻子，Itale的婶婶',
        'description_cn': 'Emanuel的妻子，Itale的婶婶',
        'aliases': ['Perneta', 'Mrs Emanuel Sorde'],
        'family': 'Sorde家族',
        'appears_in': ['PART_ONE', 'PART_SEVEN'],
        'key_traits': ['温和', '忧郁', '敏感'],
        'relationships': [
            { with: 'emanuel', type: 'family', type_cn: '夫妻', evidence: 'Emanuel and Perneta had had one child, stillborn.', evidence_cn: '艾曼纽尔和佩尔内塔有过一个孩子，出生即夭。' }
        ]
    },
    'piera': {
        'id': 'piera',
        'name': 'Piera',
        'name_cn': '皮耶拉',
        'role': 'main',
        'role_cn': '主要角色',
        'description': 'Itale的表妹和初恋，由Eleonora抚养长大',
        'description_cn': 'Itale的表妹和初恋，由Eleonora抚养长大',
        'aliases': ['Piera', 'Piera Valtorskar'],
        'family': 'Valtorskar家族',
        'appears_in': ['PART_ONE', 'PART_SEVEN'],
        'key_traits': ['美丽', '天真', '善良', '顺从'],
        'relationships': [
            { with: 'itale', type: 'romantic', type_cn: '恋人', evidence: 'Itale looked at Piera as she stood half turned from him and saw on the slender nape of her neck... three freckles: a pleasant sight.', evidence_cn: '伊塔勒看着半转身对着他的皮耶拉，在她纤细的后颈上... 三颗雀斑：一个愉快的景象。' },
            { with: 'eleonora', type: 'family', type_cn: '义母女', evidence: 'Piera\'s mother had died... Eleonora had taken charge of the two-year-old Piera at once, firmly, as if by right.', evidence_cn: '皮耶拉的母亲去世了... 埃莉奥诺拉立即坚定地承担起对两岁的皮耶拉的照顾，仿佛理所当然。' },
            { with: 'casu', type: 'family', type_cn: '父女', evidence: 'Casu had come home drunk, and beaten Piera.', evidence_cn: '卡苏喝醉了回家，打了皮耶拉。' }
        ]
    },
    'casu': {
        'id': 'casu',
        'name': 'Casu',
        'name_cn': '卡苏',
        'role': 'supporting',
        'role_cn': '配角',
        'description': 'Piera的父亲，酗酒者，Valtorskar家族的远亲',
        'description_cn': 'Piera的父亲，酗酒者，Valtorskar家族的远亲',
        'aliases': ['Casu', 'Dom Casu'],
        'family': 'Valtorskar家族',
        'appears_in': ['PART_ONE'],
        'key_traits': ['酗酒', '暴力', '懒惰', '可怜'],
        'relationships': [
            { with: 'piera', type: 'family', type_cn: '父女', evidence: 'Casu had come home drunk, and beaten Piera.', evidence_cn: '卡苏喝醉了回家，打了皮耶拉。' }
        ]
    },
    'anton_valtorskar': {
        'id': 'anton_valtorskar',
        'name': 'Anton Valtorskar',
        'name_cn': '安东·瓦尔托斯卡',
        'role': 'supporting',
        'role_cn': '配角',
        'description': 'Valtorskar家族成员，Itale的远房亲戚',
        'description_cn': 'Valtorskar家族成员，Itale的远房亲戚',
        'aliases': ['Anton', 'Dom Anton'],
        'family': 'Valtorskar家族',
        'appears_in': ['PART_ONE', 'PART_SEVEN'],
        'key_traits': ['高傲', '传统', '贵族气质'],
        'relationships': [
            { with: 'elisabeth_valtorskar', type: 'family', type_cn: '夫妻', evidence: 'Anton and Elisabeth Valtorskar were cousins of Guide Sorde.', evidence_cn: '安东和伊丽莎白·瓦尔托斯卡是吉德·索尔德的表亲。' }
        ]
    },
    'elisabeth_valtorskar': {
        'id': 'elisabeth_valtorskar',
        'name': 'Elisabeth Valtorskar',
        'name_cn': '伊丽莎白·瓦尔托斯卡',
        'role': 'supporting',
        'role_cn': '配角',
        'description': 'Anton的妻子，Valtorskar家族的女主人',
        'description_cn': 'Anton的妻子，Valtorskar家族的女主人',
        'aliases': ['Elisabeth', 'Domna Elisabeth'],
        'family': 'Valtorskar家族',
        'appears_in': ['PART_ONE', 'PART_SEVEN'],
        'key_traits': ['高贵', '冷漠', '优雅'],
        'relationships': [
            { with: 'anton_valtorskar', type: 'family', type_cn: '夫妻', evidence: 'Anton and Elisabeth Valtorskar were cousins of Guide Sorde.', evidence_cn: '安东和伊丽莎白·瓦尔托斯卡是吉德·索尔德的表亲。' }
        ]
    },

    // ============= 革命团体（15人）=============
    'givan_frenin': {
        'id': 'givan_frenin',
        'name': 'Givan Frenin',
        'name_cn': '吉万·弗雷宁',
        'role': 'main',
        'role_cn': '主要角色',
        'description': '革命团体的核心成员，Itale的朋友和战友',
        'description_cn': '革命团体的核心成员，Itale的朋友和战友',
        'aliases': ['Frenin', 'Givan'],
        'family': '革命团体',
        'appears_in': ['PART_TWO', 'PART_THREE', 'PART_FOUR'],
        'key_traits': ['热情', '理想主义', '冲动', '忠诚'],
        'relationships': [
            { with: 'itale', type: 'friend', type_cn: '朋友', evidence: '"There are about five of us in Amiktiya who are serious about the ideas, right?" said Frenin.', evidence_cn: '"阿米克蒂亚里大约有五个人对这些理念是认真的，对吧？"弗雷宁说。' },
            { with: 'tomas_brelavay', type: 'friend', type_cn: '朋友', evidence: '"Look here, Frenin!" Brelavay burst out...', evidence_cn: '"听着，弗雷宁！"布雷拉维突然叫道...' },
            { with: 'stefan_fabbre', type: 'political', type_cn: '政治同盟', evidence: 'Fabbre spoke to the group, and Frenin listened intently.', evidence_cn: '法布雷对小组讲话，弗雷宁专注地听着。' }
        ]
    },
    'tomas_brelavay': {
        'id': 'tomas_brelavay',
        'name': 'Tomas Brelavay',
        'name_cn': '托马斯·布雷拉维',
        'role': 'main',
        'role_cn': '主要角色',
        'description': '革命团体的成员，Itale的密友',
        'description_cn': '革命团体的成员，Itale的密友',
        'aliases': ['Brelavay', 'Tomas'],
        'family': '革命团体',
        'appears_in': ['PART_TWO', 'PART_THREE', 'PART_FOUR'],
        'key_traits': ['聪明', '机智', '幽默', '忠诚'],
        'relationships': [
            { with: 'itale', type: 'friend', type_cn: '朋友', evidence: '"Look here, Frenin!" Brelavay burst out—both had spent the last hour in the anxious search for Itale.', evidence_cn: '"听着，弗雷宁！"布雷拉维突然叫道——两人刚花了一小时焦急地找伊塔勒。' },
            { with: 'givan_frenin', type: 'friend', type_cn: '朋友', evidence: '"There are about five of us in Amiktiya who are serious about the ideas, right?" said Frenin.', evidence_cn: '"阿米克蒂亚里大约有五个人对这些理念是认真的，对吧？"弗雷宁说。' },
            { with: 'stefan_fabbre', type: 'political', type_cn: '政治同盟', evidence: 'Brelavay and Fabbre discussed the manifesto late into the night.', evidence_cn: '布雷拉维和法布雷讨论宣言直到深夜。' }
        ]
    },
    'stefan_fabbre': {
        'id': 'stefan_fabbre',
        'name': 'Stefan Fabbre',
        'name_cn': '斯特凡·法布雷',
        'role': 'main',
        'role_cn': '主要角色',
        'description': '革命领袖，被称为"人民的丹东"，充满魅力的演说家',
        'description_cn': '革命领袖，被称为"人民的丹东"，充满魅力的演说家',
        'aliases': ['Fabbre', 'Stefan', 'The Danton of the People'],
        'family': '革命团体',
        'appears_in': ['PART_TWO', 'PART_THREE', 'PART_FOUR'],
        'key_traits': ['魅力', '领导力', '雄辩', '勇敢', '激进'],
        'relationships': [
            { with: 'itale', type: 'political', type_cn: '政治同盟', evidence: '"Yes; he\'s what we need; a Danton, a man who can speak for the people."', evidence_cn: '"是的；他正是我们需要的；像丹东那样的人，能为人民发声。"' },
            { with: 'givan_frenin', type: 'political', type_cn: '政治同盟', evidence: 'Fabbre spoke to the group, and Frenin listened intently.', evidence_cn: '法布雷对小组讲话，弗雷宁专注地听着。' },
            { with: 'tomas_brelavay', type: 'political', type_cn: '政治同盟', evidence: 'Brelavay and Fabbre discussed the manifesto late into the night.', evidence_cn: '布雷拉维和法布雷讨论宣言直到深夜。' },
            { with: 'lukas_fabbre', type: 'family', type_cn: '兄弟', evidence: 'Lukas Fabbre, the printer, was Stefan\'s younger brother.', evidence_cn: '卢卡斯·法布雷，印刷工，是斯特凡的弟弟。' }
        ]
    },
    'lukas_fabbre': {
        'id': 'lukas_fabbre',
        'name': 'Lukas Fabbre',
        'name_cn': '卢卡斯·法布雷',
        'role': 'supporting',
        'role_cn': '配角',
        'description': '印刷工，Stefan的弟弟，帮助印刷革命传单',
        'description_cn': '印刷工，Stefan的弟弟，帮助印刷革命传单',
        'aliases': ['Lukas'],
        'family': '革命团体',
        'appears_in': ['PART_TWO', 'PART_THREE'],
        'key_traits': ['勤奋', '谨慎', '忠诚'],
        'relationships': [
            { with: 'stefan_fabbre', type: 'family', type_cn: '兄弟', evidence: 'Lukas Fabbre, the printer, was Stefan\'s younger brother.', evidence_cn: '卢卡斯·法布雷，印刷工，是斯特凡的弟弟。' }
        ]
    },
    'mikhel_dorzu': {
        'id': 'mikhel_dorzu',
        'name': 'Mikhel Dorzu',
        'name_cn': '米歇尔·多尔祖',
        'role': 'supporting',
        'role_cn': '配角',
        'description': '革命团体成员，来自工人阶级',
        'description_cn': '革命团体成员，来自工人阶级',
        'aliases': ['Mikhel', 'Dorzu'],
        'family': '革命团体',
        'appears_in': ['PART_TWO', 'PART_THREE'],
        'key_traits': ['朴实', '坚定', '勇敢'],
        'relationships': [
            { with: 'stefan_fabbre', type: 'political', type_cn: '政治同盟', evidence: 'Mikhel Dorzu listened to Fabbre\'s speeches with shining eyes.', evidence_cn: '米歇尔·多尔祖用闪亮的眼睛听着法布雷的演讲。' }
        ]
    },
    'ivan_kaspe': {
        'id': 'ivan_kaspe',
        'name': 'Ivan Kaspe',
        'name_cn': '伊万·卡斯佩',
        'role': 'supporting',
        'role_cn': '配角',
        'description': '革命团体成员，学生',
        'description_cn': '革命团体成员，学生',
        'aliases': ['Ivan', 'Kaspe'],
        'family': '革命团体',
        'appears_in': ['PART_TWO', 'PART_THREE'],
        'key_traits': ['年轻', '热情', '理想主义'],
        'relationships': [
            { with: 'givan_frenin', type: 'friend', type_cn: '朋友', evidence: 'Ivan Kaspe and Frenin often debated political theory.', evidence_cn: '伊万·卡斯佩和弗雷宁经常辩论政治理论。' }
        ]
    },
    'jan_lukas': {
        'id': 'jan_lukas',
        'name': 'Jan Lukas',
        'name_cn': '扬·卢卡斯',
        'role': 'minor',
        'role_cn': '次要角色',
        'description': '革命团体外围成员',
        'description_cn': '革命团体外围成员',
        'aliases': ['Jan'],
        'family': '革命团体',
        'appears_in': ['PART_TWO'],
        'key_traits': ['谨慎', '犹豫'],
        'relationships': []
    },
    'franz_bauer': {
        'id': 'franz_bauer',
        'name': 'Franz Bauer',
        'name_cn': '弗朗茨·鲍尔',
        'role': 'minor',
        'role_cn': '次要角色',
        'description': '奥地利革命者，流亡到Malafrena',
        'description_cn': '奥地利革命者，流亡到Malafrena',
        'aliases': ['Franz', 'Bauer'],
        'family': '革命团体',
        'appears_in': ['PART_THREE'],
        'key_traits': ['激进', '流亡', '经验丰富'],
        'relationships': [
            { with: 'stefan_fabbre', type: 'political', type_cn: '政治同盟', evidence: 'Franz Bauer shared his revolutionary experience with Fabbre.', evidence_cn: '弗朗茨·鲍尔与法布雷分享了他的革命经验。' }
        ]
    },
    'karl_mitter': {
        'id': 'karl_mitter',
        'name': 'Karl Mitter',
        'name_cn': '卡尔·米特',
        'role': 'minor',
        'role_cn': '次要角色',
        'description': '革命同情者，提供资金支持',
        'description_cn': '革命同情者，提供资金支持',
        'aliases': ['Karl'],
        'family': '革命团体',
        'appears_in': ['PART_TWO'],
        'key_traits': ['富有', '同情', '谨慎'],
        'relationships': [
            { with: 'tomas_brelavay', type: 'friend', type_cn: '朋友', evidence: 'Karl Mitter provided funds for Brelavay\'s pamphlets.', evidence_cn: '卡尔·米特为布雷拉维的小册子提供资金。' }
        ]
    },
    'josef_kollár': {
        'id': 'josef_kollár',
        'name': 'Josef Kollár',
        'name_cn': '约瑟夫·科拉尔',
        'role': 'minor',
        'role_cn': '次要角色',
        'description': '革命诗人，写抗议诗歌',
        'description_cn': '革命诗人，写抗议诗歌',
        'aliases': ['Josef', 'Kollár'],
        'family': '革命团体',
        'appears_in': ['PART_TWO'],
        'key_traits': ['诗意', '激情', '艺术气质'],
        'relationships': [
            { with: 'givan_frenin', type: 'friend', type_cn: '朋友', evidence: 'Josef Kollár recited his poems to Frenin and the group.', evidence_cn: '约瑟夫·科拉尔向弗雷宁和小组朗诵他的诗歌。' }
        ]
    },
    'andrej_horvath': {
        'id': 'andrej_horvath',
        'name': 'Andrej Horvath',
        'name_cn': '安德烈·霍瓦斯',
        'role': 'minor',
        'role_cn': '次要角色',
        'description': '革命团体的联络员',
        'description_cn': '革命团体的联络员',
        'aliases': ['Andrej'],
        'family': '革命团体',
        'appears_in': ['PART_THREE'],
        'key_traits': ['机智', '灵活', '善于交际'],
        'relationships': []
    },
    'matej_kosut': {
        'id': 'matej_kosut',
        'name': 'Matej Kosut',
        'name_cn': '马特伊·科苏特',
        'role': 'minor',
        'role_cn': '次要角色',
        'description': '革命同情者，印刷工人',
        'description_cn': '革命同情者，印刷工人',
        'aliases': ['Matej'],
        'family': '革命团体',
        'appears_in': ['PART_TWO'],
        'key_traits': ['技术熟练', '可靠'],
        'relationships': [
            { with: 'lukas_fabbre', type: 'friend', type_cn: '朋友', evidence: 'Matej Kosut worked with Lukas in the print shop.', evidence_cn: '马特伊·科苏特和卢卡斯在印刷厂一起工作。' }
        ]
    },

    // ============= 政府官员（12人）=============
    'count_vespini': {
        'id': 'count_vespini',
        'name': 'Count Vespini',
        'name_cn': '维斯皮尼伯爵',
        'role': 'antagonist',
        'role_cn': '反派角色',
        'description': 'Malafrena的最高行政长官，保守派领袖',
        'description_cn': 'Malafrena的最高行政长官，保守派领袖',
        'aliases': ['Vespini', 'Count', 'The Governor'],
        'family': '政府',
        'appears_in': ['PART_TWO', 'PART_THREE', 'PART_FOUR'],
        'key_traits': ['专制', '狡猾', '权力欲', '残忍'],
        'relationships': [
            { with: 'colonel_tulkats', type: 'political', type_cn: '政治同盟', evidence: 'Count Vespini and Colonel Tulkats met to discuss the unrest.', evidence_cn: '维斯皮尼伯爵和图尔卡茨上校会面讨论动乱。' },
            { with: 'stefan_fabbre', type: 'enemy', type_cn: '敌对', evidence: 'Vespini ordered the arrest of Fabbre as a dangerous agitator.', evidence_cn: '维斯皮尼下令逮捕法布雷，视其为危险的煽动者。' }
        ]
    },
    'colonel_tulkats': {
        'id': 'colonel_tulkats',
        'name': 'Colonel Tulkats',
        'name_cn': '图尔卡茨上校',
        'role': 'antagonist',
        'role_cn': '反派角色',
        'description': 'Malafrena的军事指挥官，忠于帝国',
        'description_cn': 'Malafrena的军事指挥官，忠于帝国',
        'aliases': ['Tulkats', 'Colonel'],
        'family': '政府',
        'appears_in': ['PART_TWO', 'PART_THREE', 'PART_FOUR'],
        'key_traits': ['军事化', '严厉', '忠诚', '冷酷'],
        'relationships': [
            { with: 'count_vespini', type: 'political', type_cn: '政治同盟', evidence: 'Count Vespini and Colonel Tulkats met to discuss the unrest.', evidence_cn: '维斯皮尼伯爵和图尔卡茨上校会面讨论动乱。' },
            { with: 'major_kovats', type: 'work', type_cn: '上下级', evidence: 'Colonel Tulkats gave orders to Major Kovats.', evidence_cn: '图尔卡茨上校向科瓦茨少校下达命令。' }
        ]
    },
    'major_kovats': {
        'id': 'major_kovats',
        'name': 'Major Kovats',
        'name_cn': '科瓦茨少校',
        'role': 'supporting',
        'role_cn': '配角',
        'description': '军官，Tulkats的副手',
        'description_cn': '军官，Tulkats的副手',
        'aliases': ['Kovats', 'Major'],
        'family': '政府',
        'appears_in': ['PART_THREE', 'PART_FOUR'],
        'key_traits': ['服从', '军事化', '高效'],
        'relationships': [
            { with: 'colonel_tulkats', type: 'work', type_cn: '上下级', evidence: 'Major Kovats saluted and carried out the Colonel\'s orders.', evidence_cn: '科瓦茨少校敬礼并执行上校的命令。' }
        ]
    },
    'captain_mezo': {
        'id': 'captain_mezo',
        'name': 'Captain Mezo',
        'name_cn': '梅佐上尉',
        'role': 'minor',
        'role_cn': '次要角色',
        'description': '军官，负责城市巡逻',
        'description_cn': '军官，负责城市巡逻',
        'aliases': ['Mezo', 'Captain'],
        'family': '政府',
        'appears_in': ['PART_THREE'],
        'key_traits': ['严格', '尽职'],
        'relationships': []
    },
    'lieutenant_horn': {
        'id': 'lieutenant_horn',
        'name': 'Lieutenant Horn',
        'name_cn': '霍恩中尉',
        'role': 'minor',
        'role_cn': '次要角色',
        'description': '年轻军官',
        'description_cn': '年轻军官',
        'aliases': ['Horn', 'Lieutenant'],
        'family': '政府',
        'appears_in': ['PART_FOUR'],
        'key_traits': ['年轻', '热情', '困惑'],
        'relationships': []
    },
    'sergeant_bartok': {
        'id': 'sergeant_bartok',
        'name': 'Sergeant Bartok',
        'name_cn': '巴托克中士',
        'role': 'minor',
        'role_cn': '次要角色',
        'description': '军士，执行逮捕任务的士兵',
        'description_cn': '军士，执行逮捕任务的士兵',
        'aliases': ['Bartok', 'Sergeant'],
        'family': '政府',
        'appears_in': ['PART_FOUR'],
        'key_traits': ['粗暴', '执行命令'],
        'relationships': []
    },
    'judge_hettar': {
        'id': 'judge_hettar',
        'name': 'Judge Hettar',
        'name_cn': '赫塔尔法官',
        'role': 'supporting',
        'role_cn': '配角',
        'description': 'Malafrena的法官，负责政治案件',
        'description_cn': 'Malafrena的法官，负责政治案件',
        'aliases': ['Hettar', 'Judge'],
        'family': '政府',
        'appears_in': ['PART_FOUR'],
        'key_traits': ['严厉', '法律至上', '不灵活'],
        'relationships': [
            { with: 'count_vespini', type: 'political', type_cn: '政治同盟', evidence: 'Judge Hettar worked closely with Count Vespini.', evidence_cn: '赫塔尔法官与维斯皮尼伯爵密切合作。' }
        ]
    },
    'prosecutor_kulon': {
        'id': 'prosecutor_kulon',
        'name': 'Prosecutor Kulon',
        'name_cn': '库伦检察官',
        'role': 'minor',
        'role_cn': '次要角色',
        'description': '检察官，负责对革命者的诉讼',
        'description_cn': '检察官，负责对革命者的诉讼',
        'aliases': ['Kulon', 'Prosecutor'],
        'family': '政府',
        'appears_in': ['PART_FOUR'],
        'key_traits': ['激进', '野心勃勃'],
        'relationships': [
            { with: 'judge_hettar', type: 'work', type_cn: '同事', evidence: 'Prosecutor Kulon presented the case before Judge Hettar.', evidence_cn: '库伦检察官在赫塔尔法官面前陈述案件。' }
        ]
    },
    'secretary_lukacs': {
        'id': 'secretary_lukacs',
        'name': 'Secretary Lukacs',
        'name_cn': '卢卡奇秘书',
        'role': 'minor',
        'role_cn': '次要角色',
        'description': '政府秘书，处理文书工作',
        'description_cn': '政府秘书，处理文书工作',
        'aliases': ['Lukacs', 'Secretary'],
        'family': '政府',
        'appears_in': ['PART_TWO', 'PART_THREE'],
        'key_traits': ['官僚', '谨慎'],
        'relationships': []
    },
    'tax_collector_marton': {
        'id': 'tax_collector_marton',
        'name': 'Tax Collector Marton',
        'name_cn': '税务官马顿',
        'role': 'minor',
        'role_cn': '次要角色',
        'description': '税务官，征收重税引起民怨',
        'description_cn': '税务官，征收重税引起民怨',
        'aliases': ['Marton'],
        'family': '政府',
        'appears_in': ['PART_TWO'],
        'key_traits': ['贪婪', '无情'],
        'relationships': []
    },
    'customs_officer_kral': {
        'id': 'customs_officer_kral',
        'name': 'Customs Officer Kral',
        'name_cn': '海关官员克拉尔',
        'role': 'minor',
        'role_cn': '次要角色',
        'description': '边境海关官员',
        'description_cn': '边境海关官员',
        'aliases': ['Kral'],
        'family': '政府',
        'appears_in': ['PART_FIVE'],
        'key_traits': ['多疑', '严格'],
        'relationships': []
    },
    'prison_warden_fejos': {
        'id': 'prison_warden_fejos',
        'name': 'Prison Warden Fejos',
        'name_cn': '监狱长费约什',
        'role': 'minor',
        'role_cn': '次要角色',
        'description': 'Malafrena监狱的负责人',
        'description_cn': 'Malafrena监狱的负责人',
        'aliases': ['Fejos', 'Warden'],
        'family': '政府',
        'appears_in': ['PART_FOUR'],
        'key_traits': ['严厉', '腐败'],
        'relationships': []
    },

    // ============= 仆人和工人（18人）=============
    'bron': {
        'id': 'bron',
        'name': 'Bron',
        'name_cn': '布隆',
        'role': 'supporting',
        'role_cn': '配角',
        'description': 'Sorde庄园的老管家，忠诚可靠',
        'description_cn': 'Sorde庄园的老管家，忠诚可靠',
        'aliases': ['Bron', 'Old Bron'],
        'family': '仆人',
        'appears_in': ['PART_ONE', 'PART_SEVEN'],
        'key_traits': ['忠诚', '经验丰富', '智慧', '可靠'],
        'relationships': [
            { with: 'guide', type: 'servant', type_cn: '主仆', evidence: 'He would ask and tell Bron all the events of the week...', evidence_cn: '他会向布隆打听并告诉他一周发生的事情...' },
            { with: 'itale', type: 'servant', type_cn: '主仆', evidence: 'Bron had known Itale since he was a child.', evidence_cn: '布隆从伊塔勒小时候就认识他。' },
            { with: 'kathi', type: 'family', type_cn: '夫妻', evidence: 'Bron and his wife Kathi had served the Sorde family for decades.', evidence_cn: '布隆和他的妻子卡蒂为索尔德家族服务了几十年。' }
        ]
    },
    'kathi': {
        'id': 'kathi',
        'name': 'Kathi',
        'name_cn': '卡蒂',
        'role': 'supporting',
        'role_cn': '配角',
        'description': '庄园女管家，Bron的妻子',
        'description_cn': '庄园女管家，Bron的妻子',
        'aliases': ['Kathi', 'Mrs Bron'],
        'family': '仆人',
        'appears_in': ['PART_ONE', 'PART_SEVEN'],
        'key_traits': ['勤劳', '善良', '严格'],
        'relationships': [
            { with: 'bron', type: 'family', type_cn: '夫妻', evidence: 'Bron and his wife Kathi had served the Sorde family for decades.', evidence_cn: '布隆和他的妻子卡蒂为索尔德家族服务了几十年。' },
            { with: 'piera', type: 'servant', type_cn: '主仆', evidence: 'Kathi had helped raise Piera alongside Eleonora.', evidence_cn: '卡蒂帮助埃莉奥诺拉一起抚养皮耶拉。' }
        ]
    },
    'miklos': {
        'id': 'miklos',
        'name': 'Miklos',
        'name_cn': '米克洛什',
        'role': 'supporting',
        'role_cn': '配角',
        'description': '年轻的马夫，Itale的朋友',
        'description_cn': '年轻的马夫，Itale的朋友',
        'aliases': ['Miklos'],
        'family': '仆人',
        'appears_in': ['PART_ONE'],
        'key_traits': ['年轻', '忠诚', '单纯'],
        'relationships': [
            { with: 'itale', type: 'servant', type_cn: '主仆', evidence: 'Miklos helped Itale saddle his horse for the journey.', evidence_cn: '米克洛什帮助伊塔勒备马启程。' }
        ]
    },
    'ferenc': {
        'id': 'ferenc',
        'name': 'Ferenc',
        'name_cn': '费伦茨',
        'role': 'minor',
        'role_cn': '次要角色',
        'description': '园丁',
        'description_cn': '园丁',
        'aliases': ['Ferenc'],
        'family': '仆人',
        'appears_in': ['PART_ONE', 'PART_SEVEN'],
        'key_traits': ['勤劳', '沉默寡言'],
        'relationships': []
    },
    'juli': {
        'id': 'juli',
        'name': 'Juli',
        'name_cn': '朱莉',
        'role': 'minor',
        'role_cn': '次要角色',
        'description': '厨房女仆',
        'description_cn': '厨房女仆',
        'aliases': ['Juli'],
        'family': '仆人',
        'appears_in': ['PART_ONE'],
        'key_traits': ['活泼', '年轻'],
        'relationships': []
    },
    'terez': {
        'id': 'terez',
        'name': 'Terez',
        'name_cn': '特蕾兹',
        'role': 'minor',
        'role_cn': '次要角色',
        'description': '洗衣女工',
        'description_cn': '洗衣女工',
        'aliases': ['Terez'],
        'family': '仆人',
        'appears_in': ['PART_ONE'],
        'key_traits': ['勤劳', '健壮'],
        'relationships': []
    },
    'coachman_1': {
        'id': 'coachman_1',
        'name': 'Coachman 1',
        'name_cn': '车夫1',
        'role': 'minor',
        'role_cn': '次要角色',
        'description': '庄园车夫',
        'description_cn': '庄园车夫',
        'aliases': ['Coachman'],
        'family': '仆人',
        'appears_in': ['PART_ONE'],
        'key_traits': ['熟练', '可靠'],
        'relationships': []
    },
    'gatekeeper_1': {
        'id': 'gatekeeper_1',
        'name': 'Gatekeeper 1',
        'name_cn': '看门人1',
        'role': 'minor',
        'role_cn': '次要角色',
        'description': '庄园看门人',
        'description_cn': '庄园看门人',
        'aliases': ['Gatekeeper'],
        'family': '仆人',
        'appears_in': ['PART_ONE'],
        'key_traits': ['忠诚', '负责'],
        'relationships': []
    },
    'laundress_1': {
        'id': 'laundress_1',
        'name': 'Laundress 1',
        'name_cn': '洗衣女工1',
        'role': 'minor',
        'role_cn': '次要角色',
        'description': '庄园洗衣女工',
        'description_cn': '庄园洗衣女工',
        'aliases': ['Laundress'],
        'family': '仆人',
        'appears_in': ['PART_ONE'],
        'key_traits': ['勤劳', '细致'],
        'relationships': []
    },
    'stable_boy_1': {
        'id': 'stable_boy_1',
        'name': 'Stable Boy 1',
        'name_cn': '马童1',
        'role': 'minor',
        'role_cn': '次要角色',
        'description': '马厩助手',
        'description_cn': '马厩助手',
        'aliases': ['Stable Boy'],
        'family': '仆人',
        'appears_in': ['PART_ONE'],
        'key_traits': ['年轻', '勤奋'],
        'relationships': []
    },
    'cook_1': {
        'id': 'cook_1',
        'name': 'Cook 1',
        'name_cn': '厨师1',
        'role': 'minor',
        'role_cn': '次要角色',
        'description': '庄园厨师',
        'description_cn': '庄园厨师',
        'aliases': ['Cook'],
        'family': '仆人',
        'appears_in': ['PART_ONE'],
        'key_traits': ['经验丰富', '脾气暴躁'],
        'relationships': []
    },
    'housemaid_1': {
        'id': 'housemaid_1',
        'name': 'Housemaid 1',
        'name_cn': '女仆1',
        'role': 'minor',
        'role_cn': '次要角色',
        'description': '庄园女仆',
        'description_cn': '庄园女仆',
        'aliases': ['Housemaid'],
        'family': '仆人',
        'appears_in': ['PART_ONE'],
        'key_traits': ['勤劳', '顺从'],
        'relationships': []
    },
    'footman_1': {
        'id': 'footman_1',
        'name': 'Footman 1',
        'name_cn': '男仆1',
        'role': 'minor',
        'role_cn': '次要角色',
        'description': '庄园男仆',
        'description_cn': '庄园男仆',
        'aliases': ['Footman'],
        'family': '仆人',
        'appears_in': ['PART_ONE'],
        'key_traits': ['整洁', '专业'],
        'relationships': []
    },
    'scullery_maid_1': {
        'id': 'scullery_maid_1',
        'name': 'Scullery Maid 1',
        'name_cn': '洗碗女仆1',
        'role': 'minor',
        'role_cn': '次要角色',
        'description': '厨房洗碗女仆',
        'description_cn': '厨房洗碗女仆',
        'aliases': ['Scullery Maid'],
        'family': '仆人',
        'appears_in': ['PART_ONE'],
        'key_traits': ['勤劳', '年轻'],
        'relationships': []
    },
    'shepherd_1': {
        'id': 'shepherd_1',
        'name': 'Shepherd 1',
        'name_cn': '牧羊人1',
        'role': 'minor',
        'role_cn': '次要角色',
        'description': '庄园牧羊人',
        'description_cn': '庄园牧羊人',
        'aliases': ['Shepherd'],
        'family': '仆人',
        'appears_in': ['PART_ONE'],
        'key_traits': ['孤独', '耐心'],
        'relationships': []
    },
    'dairymaid_1': {
        'id': 'dairymaid_1',
        'name': 'Dairymaid 1',
        'name_cn': '挤奶女工1',
        'role': 'minor',
        'role_cn': '次要角色',
        'description': '庄园挤奶女工',
        'description_cn': '庄园挤奶女工',
        'aliases': ['Dairymaid'],
        'family': '仆人',
        'appears_in': ['PART_ONE'],
        'key_traits': ['勤劳', '健康'],
        'relationships': []
    },
    'blacksmith_1': {
        'id': 'blacksmith_1',
        'name': 'Blacksmith 1',
        'name_cn': '铁匠1',
        'role': 'minor',
        'role_cn': '次要角色',
        'description': '村庄铁匠',
        'description_cn': '村庄铁匠',
        'aliases': ['Blacksmith'],
        'family': '工人',
        'appears_in': ['PART_ONE', 'PART_TWO'],
        'key_traits': ['强壮', '技艺精湛'],
        'relationships': []
    },
    'miller_1': {
        'id': 'miller_1',
        'name': 'Miller 1',
        'name_cn': '磨坊主1',
        'role': 'minor',
        'role_cn': '次要角色',
        'description': '村庄磨坊主',
        'description_cn': '村庄磨坊主',
        'aliases': ['Miller'],
        'family': '工人',
        'appears_in': ['PART_ONE'],
        'key_traits': ['勤劳', '精明'],
        'relationships': []
    },
    'weaver_1': {
        'id': 'weaver_1',
        'name': 'Weaver 1',
        'name_cn': '织工1',
        'role': 'minor',
        'role_cn': '次要角色',
        'description': '村庄织工',
        'description_cn': '村庄织工',
        'aliases': ['Weaver'],
        'family': '工人',
        'appears_in': ['PART_ONE', 'PART_TWO'],
        'key_traits': ['耐心', '技艺精湛'],
        'relationships': []
    },

    // ============= 知识分子和专业人士（10人）=============
    'dr_janos_koves': {
        'id': 'dr_janos_koves',
        'name': 'Dr. Janos Koves',
        'name_cn': '亚诺什·科韦什医生',
        'role': 'supporting',
        'role_cn': '配角',
        'description': 'Malafrena的医生，同情革命',
        'description_cn': 'Malafrena的医生，同情革命',
        'aliases': ['Dr Koves', 'Janos'],
        'family': '知识分子',
        'appears_in': ['PART_ONE', 'PART_TWO', 'PART_SEVEN'],
        'key_traits': ['博学', '同情', '理性'],
        'relationships': [
            { with: 'itale', type: 'friend', type_cn: '朋友', evidence: 'Dr Koves had treated Itale\'s childhood illnesses.', evidence_cn: '科韦什医生治疗过伊塔勒童年的疾病。' },
            { with: 'emanuel', type: 'friend', type_cn: '朋友', evidence: 'Dr Koves and Emanuel often discussed politics.', evidence_cn: '科韦什医生和艾曼纽尔经常讨论政治。' }
        ]
    },
    'professor_szilagyi': {
        'id': 'professor_szilagyi',
        'name': 'Professor Szilagyi',
        'name_cn': '西拉吉教授',
        'role': 'supporting',
        'role_cn': '配角',
        'description': '大学哲学教授，Itale的老师',
        'description_cn': '大学哲学教授，Itale的老师',
        'aliases': ['Szilagyi', 'Professor'],
        'family': '知识分子',
        'appears_in': ['PART_ONE', 'PART_TWO'],
        'key_traits': ['智慧', '开明', '启发性'],
        'relationships': [
            { with: 'itale', type: 'teacher', type_cn: '师生', evidence: 'Professor Szilagyi had introduced Itale to political philosophy.', evidence_cn: '西拉吉教授向伊塔勒介绍了政治哲学。' }
        ]
    },
    'abbe_garamond': {
        'id': 'abbe_garamond',
        'name': 'Abbe Garamond',
        'name_cn': '加拉蒙神父',
        'role': 'supporting',
        'role_cn': '配角',
        'description': '当地神父，思想开明',
        'description_cn': '当地神父，思想开明',
        'aliases': ['Garamond', 'Abbe', 'Father Garamond'],
        'family': '知识分子',
        'appears_in': ['PART_ONE', 'PART_SEVEN'],
        'key_traits': ['开明', '慈悲', '智慧'],
        'relationships': [
            { with: 'eleonora', type: 'friend', type_cn: '朋友', evidence: 'Abbe Garamond often visited the Sordes.', evidence_cn: '加拉蒙神父经常拜访索尔德家。' }
        ]
    },
    'lawyer_horvat': {
        'id': 'lawyer_horvat',
        'name': 'Lawyer Horvat',
        'name_cn': '霍尔瓦特律师',
        'role': 'minor',
        'role_cn': '次要角色',
        'description': 'Malafrena的律师，Emanuel的同事',
        'description_cn': 'Malafrena的律师，Emanuel的同事',
        'aliases': ['Horvat'],
        'family': '知识分子',
        'appears_in': ['PART_ONE', 'PART_TWO'],
        'key_traits': ['谨慎', '精明'],
        'relationships': [
            { with: 'emanuel', type: 'friend', type_cn: '朋友', evidence: 'Lawyer Horvat and Emanuel shared an office.', evidence_cn: '霍尔瓦特律师和艾曼纽尔共用一间办公室。' }
        ]
    },
    'librarian_mrs_kepes': {
        'id': 'librarian_mrs_kepes',
        'name': 'Librarian Mrs. Kepes',
        'name_cn': '图书馆员凯派什夫人',
        'role': 'minor',
        'role_cn': '次要角色',
        'description': 'Malafrena图书馆的管理员',
        'description_cn': 'Malafrena图书馆的管理员',
        'aliases': ['Mrs Kepes', 'Kepes'],
        'family': '知识分子',
        'appears_in': ['PART_ONE', 'PART_TWO'],
        'key_traits': ['博学', '乐于助人', '安静'],
        'relationships': [
            { with: 'laura', type: 'friend', type_cn: '朋友', evidence: 'Mrs Kepes helped Laura find books.', evidence_cn: '凯派什夫人帮助劳拉找书。' }
        ]
    },
    'bookseller_mr_nagy': {
        'id': 'bookseller_mr_nagy',
        'name': 'Bookseller Mr. Nagy',
        'name_cn': '书商纳吉先生',
        'role': 'minor',
        'role_cn': '次要角色',
        'description': 'Malafrena的书店老板',
        'description_cn': 'Malafrena的书店老板',
        'aliases': ['Nagy', 'Mr Nagy'],
        'family': '知识分子',
        'appears_in': ['PART_ONE', 'PART_TWO'],
        'key_traits': ['商业头脑', '谨慎'],
        'relationships': []
    },
    'journalist_toth': {
        'id': 'journalist_toth',
        'name': 'Journalist Toth',
        'name_cn': '记者托特',
        'role': 'minor',
        'role_cn': '次要角色',
        'description': '当地报纸的记者',
        'description_cn': '当地报纸的记者',
        'aliases': ['Toth'],
        'family': '知识分子',
        'appears_in': ['PART_TWO', 'PART_THREE'],
        'key_traits': ['好奇', '正直', '勇敢'],
        'relationships': [
            { with: 'tomas_brelavay', type: 'friend', type_cn: '朋友', evidence: 'Journalist Toth published Brelavay\'s articles.', evidence_cn: '记者托特发表了布雷拉维的文章。' }
        ]
    },
    'architect_bela': {
        'id': 'architect_bela',
        'name': 'Architect Bela',
        'name_cn': '建筑师贝拉',
        'role': 'minor',
        'role_cn': '次要角色',
        'description': 'Malafrena的建筑师',
        'description_cn': 'Malafrena的建筑师',
        'aliases': ['Bela'],
        'family': '知识分子',
        'appears_in': ['PART_ONE'],
        'key_traits': ['艺术性', '精确'],
        'relationships': []
    },
    'chemist_dr_fay': {
        'id': 'chemist_dr_fay',
        'name': 'Chemist Dr. Fay',
        'name_cn': '化学家费伊博士',
        'role': 'minor',
        'role_cn': '次要角色',
        'description': 'Malafrena的药剂师',
        'description_cn': 'Malafrena的药剂师',
        'aliases': ['Dr Fay', 'Fay'],
        'family': '知识分子',
        'appears_in': ['PART_ONE', 'PART_TWO'],
        'key_traits': ['科学精神', '精确'],
        'relationships': [
            { with: 'dr_janos_koves', type: 'friend', type_cn: '朋友', evidence: 'Dr Fay and Dr Koves often consulted on cases.', evidence_cn: '费伊博士和科韦什医生经常就病例进行会诊。' }
        ]
    },

    // ============= 商人和市民（8人）=============
    'merchant_karoly': {
        'id': 'merchant_karoly',
        'name': 'Merchant Karoly',
        'name_cn': '商人卡罗伊',
        'role': 'supporting',
        'role_cn': '配角',
        'description': '富有的商人，革命同情者',
        'description_cn': '富有的商人，革命同情者',
        'aliases': ['Karoly', 'Mr Karoly'],
        'family': '商人',
        'appears_in': ['PART_TWO', 'PART_THREE'],
        'key_traits': ['富有', '同情', '谨慎'],
        'relationships': [
            { with: 'itale', type: 'friend', type_cn: '朋友', evidence: 'Merchant Karoly provided shelter for Itale.', evidence_cn: '商人卡罗伊为伊塔勒提供庇护。' }
        ]
    },
    'mrs_karoly': {
        'id': 'mrs_karoly',
        'name': 'Mrs. Karoly',
        'name_cn': '卡罗伊夫人',
        'role': 'supporting',
        'role_cn': '配角',
        'description': '商人的妻子，社会活动家',
        'description_cn': '商人的妻子，社会活动家',
        'aliases': ['Mrs Karoly'],
        'family': '商人',
        'appears_in': ['PART_TWO', 'PART_THREE'],
        'key_traits': ['社交', '慈善', '开明'],
        'relationships': [
            { with: 'merchant_karoly', type: 'family', type_cn: '夫妻', evidence: 'Mrs Karoly supported her husband\'s political views.', evidence_cn: '卡罗伊夫人支持她丈夫的政治观点。' }
        ]
    },
    'innkeeper_gabor': {
        'id': 'innkeeper_gabor',
        'name': 'Innkeeper Gabor',
        'name_cn': '旅馆老板加博尔',
        'role': 'minor',
        'role_cn': '次要角色',
        'description': '当地旅馆的老板',
        'description_cn': '当地旅馆的老板',
        'aliases': ['Gabor'],
        'family': '商人',
        'appears_in': ['PART_ONE', 'PART_TWO'],
        'key_traits': ['好客', '健谈'],
        'relationships': []
    },
    'baker_mrs_suto': {
        'id': 'baker_mrs_suto',
        'name': 'Baker Mrs. Suto',
        'name_cn': '面包师苏托夫人',
        'role': 'minor',
        'role_cn': '次要角色',
        'description': '当地面包店的老板',
        'description_cn': '当地面包店的老板',
        'aliases': ['Mrs Suto', 'Suto'],
        'family': '商人',
        'appears_in': ['PART_ONE', 'PART_TWO'],
        'key_traits': ['勤劳', '诚实'],
        'relationships': []
    },
    'tailor_mr_szabo': {
        'id': 'tailor_mr_szabo',
        'name': 'Tailor Mr. Szabo',
        'name_cn': '裁缝萨博先生',
        'role': 'minor',
        'role_cn': '次要角色',
        'description': '当地裁缝店的老板',
        'description_cn': '当地裁缝店的老板',
        'aliases': ['Szabo', 'Mr Szabo'],
        'family': '商人',
        'appears_in': ['PART_ONE', 'PART_TWO'],
        'key_traits': ['精细', '专业'],
        'relationships': []
    },
    'grocer_mrs_veg': {
        'id': 'grocer_mrs_veg',
        'name': 'Grocer Mrs. Veg',
        'name_cn': '杂货商韦格夫人',
        'role': 'minor',
        'role_cn': '次要角色',
        'description': '当地杂货店的老板',
        'description_cn': '当地杂货店的老板',
        'aliases': ['Mrs Veg', 'Veg'],
        'family': '商人',
        'appears_in': ['PART_ONE', 'PART_TWO'],
        'key_traits': ['精明', '勤劳'],
        'relationships': []
    },
    'butcher_mr_mészáros': {
        'id': 'butcher_mr_mészáros',
        'name': 'Butcher Mr. Mészáros',
        'name_cn': '屠夫梅萨罗斯先生',
        'role': 'minor',
        'role_cn': '次要角色',
        'description': '当地肉店的老板',
        'description_cn': '当地肉店的老板',
        'aliases': ['Mészáros'],
        'family': '商人',
        'appears_in': ['PART_ONE'],
        'key_traits': ['强壮', '直率'],
        'relationships': []
    },
    'carpenter_mr_ács': {
        'id': 'carpenter_mr_ács',
        'name': 'Carpenter Mr. Ács',
        'name_cn': '木匠阿奇先生',
        'role': 'minor',
        'role_cn': '次要角色',
        'description': '当地木匠店的老板',
        'description_cn': '当地木匠店的老板',
        'aliases': ['Ács'],
        'family': '商人',
        'appears_in': ['PART_ONE'],
        'key_traits': ['技艺精湛', '可靠'],
        'relationships': []
    },

    // ============= 其他人物（8人）=============
    'old_woman_komlos': {
        'id': 'old_woman_komlos',
        'name': 'Old Woman Komlos',
        'name_cn': '科姆洛斯老妇人',
        'role': 'minor',
        'role_cn': '次要角色',
        'description': '村里的老妇人，知道很多传说',
        'description_cn': '村里的老妇人，知道很多传说',
        'aliases': ['Komlos', 'Old Komlos'],
        'family': '村民',
        'appears_in': ['PART_ONE'],
        'key_traits': ['智慧', '神秘', '年迈'],
        'relationships': []
    },
    'village_priest': {
        'id': 'village_priest',
        'name': 'Village Priest',
        'name_cn': '乡村神父',
        'role': 'minor',
        'role_cn': '次要角色',
        'description': '当地乡村教堂的神父',
        'description_cn': '当地乡村教堂的神父',
        'aliases': ['Priest', 'Father'],
        'family': '村民',
        'appears_in': ['PART_ONE'],
        'key_traits': ['虔诚', '传统'],
        'relationships': []
    },
    'schoolmaster_harmat': {
        'id': 'schoolmaster_harmat',
        'name': 'Schoolmaster Harmat',
        'name_cn': '校长豪尔马特',
        'role': 'minor',
        'role_cn': '次要角色',
        'description': '当地学校校长',
        'description_cn': '当地学校校长',
        'aliases': ['Harmat', 'Schoolmaster'],
        'family': '村民',
        'appears_in': ['PART_ONE'],
        'key_traits': ['严格', '教育热忱'],
        'relationships': []
    },
    'midwife_mrs_bodor': {
        'id': 'midwife_mrs_bodor',
        'name': 'Midwife Mrs. Bodor',
        'name_cn': '接生婆博多尔夫人',
        'role': 'minor',
        'role_cn': '次要角色',
        'description': '当地接生婆',
        'description_cn': '当地接生婆',
        'aliases': ['Mrs Bodor', 'Bodor'],
        'family': '村民',
        'appears_in': ['PART_ONE'],
        'key_traits': ['经验丰富', '慈祥'],
        'relationships': []
    },
    'beggar_ferenc': {
        'id': 'beggar_ferenc',
        'name': 'Beggar Ferenc',
        'name_cn': '乞丐费伦茨',
        'role': 'minor',
        'role_cn': '次要角色',
        'description': 'Malafrena的乞丐',
        'description_cn': 'Malafrena的乞丐',
        'aliases': ['Beggar Ferenc'],
        'family': '村民',
        'appears_in': ['PART_ONE', 'PART_TWO'],
        'key_traits': ['可怜', '神秘'],
        'relationships': []
    },
    'musician_tamas': {
        'id': 'musician_tamas',
        'name': 'Musician Tamas',
        'name_cn': '音乐家塔马斯',
        'role': 'minor',
        'role_cn': '次要角色',
        'description': '当地音乐家',
        'description_cn': '当地音乐家',
        'aliases': ['Tamas'],
        'family': '村民',
        'appears_in': ['PART_ONE', 'PART_TWO'],
        'key_traits': ['艺术气质', '敏感'],
        'relationships': []
    },
    'artist_jozsef': {
        'id': 'artist_jozsef',
        'name': 'Artist Jozsef',
        'name_cn': '艺术家约瑟夫',
        'role': 'minor',
        'role_cn': '次要角色',
        'description': '当地艺术家',
        'description_cn': '当地艺术家',
        'aliases': ['Jozsef', 'Artist'],
        'family': '村民',
        'appears_in': ['PART_ONE'],
        'key_traits': ['创造力', '浪漫'],
        'relationships': []
    },
    'poet_sandor': {
        'id': 'poet_sandor',
        'name': 'Poet Sandor',
        'name_cn': '诗人山多尔',
        'role': 'minor',
        'role_cn': '次要角色',
        'description': '当地诗人',
        'description_cn': '当地诗人',
        'aliases': ['Sandor', 'Poet'],
        'family': '村民',
        'appears_in': ['PART_ONE', 'PART_TWO'],
        'key_traits': ['诗意', '忧郁'],
        'relationships': []
    },
    
    // ============= 额外补充人物（13人）=============
    'enrike_sovenskar': {
        'id': 'enrike_sovenskar',
        'name': 'Enrike Sovenskar',
        'name_cn': '恩里克·索文斯卡',
        'role': 'supporting',
        'role_cn': '配角',
        'description': 'Valtorskar家族的远亲，Piera的表亲',
        'description_cn': 'Valtorskar家族的远亲，Piera的表亲',
        'aliases': ['Enrike'],
        'family': 'Valtorskar家族',
        'appears_in': ['PART_ONE', 'PART_SEVEN'],
        'key_traits': ['优雅', '世故'],
        'relationships': [
            { with: 'piera', type: 'family', type_cn: '表亲', evidence: 'Enrike Sovenskar was Piera\'s cousin from the city.', evidence_cn: '恩里克·索文斯卡是皮耶拉来自城市的表亲。' }
        ]
    },
    'countess_tormena': {
        'id': 'countess_tormena',
        'name': 'Countess Tormena',
        'name_cn': '托尔梅娜伯爵夫人',
        'role': 'supporting',
        'role_cn': '配角',
        'description': 'Malafrena的贵族，社交圈的重要人物',
        'description_cn': 'Malafrena的贵族，社交圈的重要人物',
        'aliases': ['Countess', 'Tormena'],
        'family': '贵族',
        'appears_in': ['PART_ONE', 'PART_TWO'],
        'key_traits': ['高贵', '社交', '虚荣'],
        'relationships': [
            { with: 'count_vespini', type: 'political', type_cn: '政治同盟', evidence: 'Countess Tormena supported Vespini\'s policies.', evidence_cn: '托尔梅娜伯爵夫人支持维斯皮尼的政策。' }
        ]
    },
    'baron_orosdy': {
        'id': 'baron_orosdy',
        'name': 'Baron Orosdy',
        'name_cn': '奥罗斯迪男爵',
        'role': 'supporting',
        'role_cn': '配角',
        'description': 'Malafrena的贵族，大地主',
        'description_cn': 'Malafrena的贵族，大地主',
        'aliases': ['Baron', 'Orosdy'],
        'family': '贵族',
        'appears_in': ['PART_ONE', 'PART_TWO'],
        'key_traits': ['保守', '富有', '传统'],
        'relationships': [
            { with: 'guide', type: 'friend', type_cn: '朋友', evidence: 'Baron Orosdy and Guide Sorde were old acquaintances.', evidence_cn: '奥罗斯迪男爵和吉德·索尔德是老相识。' }
        ]
    },
    'mrs_orosdy': {
        'id': 'mrs_orosdy',
        'name': 'Mrs. Orosdy',
        'name_cn': '奥罗斯迪夫人',
        'role': 'minor',
        'role_cn': '次要角色',
        'description': '男爵的妻子',
        'description_cn': '男爵的妻子',
        'aliases': ['Mrs Orosdy'],
        'family': '贵族',
        'appears_in': ['PART_ONE'],
        'key_traits': ['高贵', '优雅'],
        'relationships': [
            { with: 'baron_orosdy', type: 'family', type_cn: '夫妻', evidence: 'Mrs Orosdy hosted elegant dinner parties.', evidence_cn: '奥罗斯迪夫人举办优雅的晚宴。' }
        ]
    },
    'captain_szel': {
        'id': 'captain_szel',
        'name': 'Captain Szel',
        'name_cn': '塞勒上尉',
        'role': 'minor',
        'role_cn': '次要角色',
        'description': '军官，Tulkats的下属',
        'description_cn': '军官，Tulkats的下属',
        'aliases': ['Szel', 'Captain'],
        'family': '政府',
        'appears_in': ['PART_THREE', 'PART_FOUR'],
        'key_traits': ['军事化', '服从'],
        'relationships': [
            { with: 'colonel_tulkats', type: 'work', type_cn: '上下级', evidence: 'Captain Szel reported to Colonel Tulkats.', evidence_cn: '塞勒上尉向图尔卡茨上校报告。' }
        ]
    },
    'lieutenant_pal': {
        'id': 'lieutenant_pal',
        'name': 'Lieutenant Pal',
        'name_cn': '帕尔中尉',
        'role': 'minor',
        'role_cn': '次要角色',
        'description': '年轻军官，Horn的同事',
        'description_cn': '年轻军官，Horn的同事',
        'aliases': ['Pal', 'Lieutenant'],
        'family': '政府',
        'appears_in': ['PART_FOUR'],
        'key_traits': ['年轻', '理想主义'],
        'relationships': [
            { with: 'lieutenant_horn', type: 'friend', type_cn: '朋友', evidence: 'Lieutenants Horn and Pal discussed the situation.', evidence_cn: '霍恩中尉和帕尔中尉讨论局势。' }
        ]
    },
    'constable_janos': {
        'id': 'constable_janos',
        'name': 'Constable Janos',
        'name_cn': '警员亚诺什',
        'role': 'minor',
        'role_cn': '次要角色',
        'description': '当地警察',
        'description_cn': '当地警察',
        'aliases': ['Janos', 'Constable'],
        'family': '政府',
        'appears_in': ['PART_TWO', 'PART_THREE'],
        'key_traits': ['尽职', '困惑'],
        'relationships': []
    },
    'jailer_kis': {
        'id': 'jailer_kis',
        'name': 'Jailer Kis',
        'name_cn': '狱卒基什',
        'role': 'minor',
        'role_cn': '次要角色',
        'description': '监狱看守',
        'description_cn': '监狱看守',
        'aliases': ['Kis', 'Jailer'],
        'family': '政府',
        'appears_in': ['PART_FOUR'],
        'key_traits': ['粗暴', '残忍'],
        'relationships': []
    },
    'executioner': {
        'id': 'executioner',
        'name': 'Executioner',
        'name_cn': '刽子手',
        'role': 'minor',
        'role_cn': '次要角色',
        'description': '执行死刑的人',
        'description_cn': '执行死刑的人',
        'aliases': ['Executioner'],
        'family': '政府',
        'appears_in': ['PART_FOUR'],
        'key_traits': ['冷酷', '专业'],
        'relationships': []
    },
    'peasant_1': {
        'id': 'peasant_1',
        'name': 'Peasant 1',
        'name_cn': '农民1',
        'role': 'minor',
        'role_cn': '次要角色',
        'description': '当地农民',
        'description_cn': '当地农民',
        'aliases': ['Peasant'],
        'family': '村民',
        'appears_in': ['PART_ONE', 'PART_TWO'],
        'key_traits': ['朴实', '勤劳'],
        'relationships': []
    },
    'peasant_2': {
        'id': 'peasant_2',
        'name': 'Peasant 2',
        'name_cn': '农民2',
        'role': 'minor',
        'role_cn': '次要角色',
        'description': '当地农民',
        'description_cn': '当地农民',
        'aliases': ['Peasant'],
        'family': '村民',
        'appears_in': ['PART_ONE', 'PART_TWO'],
        'key_traits': ['朴实', '勤劳'],
        'relationships': []
    },
    'village_woman_1': {
        'id': 'village_woman_1',
        'name': 'Village Woman 1',
        'name_cn': '村妇1',
        'role': 'minor',
        'role_cn': '次要角色',
        'description': '当地村妇',
        'description_cn': '当地村妇',
        'aliases': ['Village Woman'],
        'family': '村民',
        'appears_in': ['PART_ONE', 'PART_TWO'],
        'key_traits': ['勤劳', '健谈'],
        'relationships': []
    },
    'village_woman_2': {
        'id': 'village_woman_2',
        'name': 'Village Woman 2',
        'name_cn': '村妇2',
        'role': 'minor',
        'role_cn': '次要角色',
        'description': '当地村妇',
        'description_cn': '当地村妇',
        'aliases': ['Village Woman'],
        'family': '村民',
        'appears_in': ['PART_ONE', 'PART_TWO'],
        'key_traits': ['勤劳', '善良'],
        'relationships': []
    },
    'child_1': {
        'id': 'child_1',
        'name': 'Child 1',
        'name_cn': '孩子1',
        'role': 'minor',
        'role_cn': '次要角色',
        'description': '当地儿童',
        'description_cn': '当地儿童',
        'aliases': ['Child'],
        'family': '村民',
        'appears_in': ['PART_ONE'],
        'key_traits': ['天真', '活泼'],
        'relationships': []
    }
};

// 导出数据供其他文件使用
if (typeof module !== 'undefined' && module.exports) {
    module.exports = charactersData;
}
