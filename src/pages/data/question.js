var questionLst = [
    // {
    //     "Questions_id": "要求同user_id",
    //     "quetionTitle": "有字符限制，请在列完问题后告诉我们",
    //     "detailedInfo": "有字符限制，请在列完问题后告诉我们",
    //     "question_status": "0:completed; 1:ongoing; -1: closed",
    //     "comment": "example format: {1: [\"对！同意”， “我会选A！”]; 0: [\"我选B理由是xxxx“， ”坚决选B“]; -1: [\"我就是来打个酱油……“]}",
    //     "comment_refer": "example format: {1: [3, 4]; 0: [5,6]; -1: [2]} 对应 comment 表格里面的id和内容",
    //     "Anonymous？": "1: 匿名 0 ：不匿名",
    //     "numReply": "真实即可，volts数根据你们的mechanism来定，一定要给一个热度表",
    //     "ResultA": "人数",
    //     "ResultB": "人数",
    //     "ResultC": "人数",
    //     "totalResult": "总人数",
    //     "dateAsked": "评论时间：最少精确到小时 format：“2017-02-08T12:10:40.787”  时间和分钟可以写成00",
    //     "timeLimit": "format: 00:01:30  表示零天一个小时30min"
    // },
    { "Questions_id": "0"},
    {
        "Questions_id": "1",
        "quetionTitle": "疫情期间，留学生要不要回国？",
        "detailedInfo": "截止到北京时间5月30日18时30分，新冠肺炎美国确诊病例累计达到179万3530例，死亡10万4542例。随着美国疫情的不断加剧，以及中国坚持的\"5个1\"航班政策，留学生是否应该马上回国？",
        "question_status": "1",
        "comment": "{1: [\"对！同意”， “我会选回国！”]; 0: [\"我留守是因为安全“， ”坚决留守“]; -1: [\"我就是来打个酱油……“]}",
        "comment_refer": "{1: [3, 4]; 0: [5,6]; -1: [2]}",
        "Anonymous？": "0",
        "numReply": "100",
        "numLikes": "1988",
        "numVolts": "100000000",
        "ResultA": "700",
        "ResultB": "800",
        "ResultC": "500",
        "totalResult": "2000",
        "dateAsked": "2020-03-01T10:03:00.000",
        "timeLimit": "30:00:00",
        "asked_User_id": "1"
    },
    {
        "Questions_id": "2",
        "quetionTitle": "随着疫情和抗议游行的爆发，美国是否还值得去留学",
        "detailedInfo": "如今美国新冠肺炎感染已超180万，并且死亡人数超10万，是世界上新冠肺炎最严重的地方。与此同时，因明尼苏达警察压死黑人爆发的抗议种族歧视游行演变成全美的暴力游行，美国各大城市已经派出国民警卫队进行镇压。而且中美关系的不断下降，美国针对高精尖科技的禁令也已经下达。在这样的背景下，美国是否还值得去留学？",
        "question_status": "1",
        "comment": "{1: [\"当然值得！”， “虽然美国国内最近形势严峻，但终将会过去，美国大学的顶尖学术与教学水平并不会因此下降！”]; 0: [\"美国最近动荡不安，好的大学并不只有美国拥有”， “中美不断相互制裁，英国或是一个好的选择“]; -1: [\"还在纠结中，打个酱油……“]}",
        "Anonymous？": "0",
        "dateAsked": "2020-05-20T11:03:00.001",
        "timeLimit": "00.02.00",
        "asked_User_id": "3"
    },
    {
        "Questions_id": "3",
        "quetionTitle": "程序员面试需要刷leetcode吗",
        "detailedInfo": "已经收到阿里和字节跳动的面试邀请，但是之前并没有相关的工作经验，现在应该多刷leetcode还是准备面试技巧呢？",
        "question_status": "1",
        "comment": "{1: [\"当然要刷，程序员技术才是王道！”， “三年工作经验不如一个月Leetcode，能不刷吗”]; 0: [\"面试技巧也很重要，面试中的沟通决定成败”， “Leetcode和脑经急转弯一样，尽是奇巧淫技，把面试官聊开心就哦了“]; -1: [\"不知道，想看结果“]}",
        "dateAsked": "2020-05-22T18:03:20.002",
        "timeLimit": "00.02.00",
        "asked_User_id": "3"
    },
    {
        "Questions_id": "4",
        "quetionTitle": "英国研究生明年毕业，应该回国发展吗？",
        "detailedInfo": "英国剑桥金融专业研究生，马上12月毕业，之前在伦敦的EY实习过，但是现在不知道毕业后应该留在英国还是回到国内工作，长期发展还是回到中国，而且听说国外的工作经验因为国内外行业差别，现在并不会为回国工作加分很多",
        "question_status": "1",
        "comment": "{1: [\"按照题主的条件，回国发展潜力更大！”， “国内现在金融行业发展十分迅速，如果长期发展是国内的话，毕业之后立即回国是一个不错的选择”, \"之前有过一样的问题，最终我选择了回国，反正我不后悔\", \"回国发展的话，应届生是一个非常有力的身份\"]; 0: [\"不得不说，至少现在伦敦金融城现在还是和美国华尔街一样领先世界”， “如果想去外企购工作，国外的经验还是很加分的，尤其是3-5年的工作经验“]; -1: [\"和题主一样纠结，打个酱油看结果\", \"只想来看看大家怎么说\"]}",
        "Anonymous？": "0",
        "dateAsked": "2020-06-05T11:56:00.003",
        "timeLimit": "00.07.00",
        "asked_User_id": "6"
    },
    {
        "Questions_id": "5",
        "quetionTitle": "研究生毕业，应该读博士吗",
        "detailedInfo": "马上12月研究生毕业，现在面临12月份毕业工作和申请明年21年的博士。本人对于科研并没有很高的热情，但是因为博士可以带来更高的起点和更好的职业道路，再加上因为疫情影响，现在找工作也比较困难，所以申请博士的念头冒了出来。可是心啊刚到博士四五年之后才能毕业，所以还是很纠结",
        "question_status": "1",
        "comment": "{1: [\"只要能坚持博士毕业，风雨之后会见彩虹”， “因为疫情失业率一路狂飙，读博士未尝不是一个好选择\"]; 0: [\"读博等于赌博”，“博士还是比较注重科研成果，如果对科研没有兴趣可能很难坚持下去”，“工作经验也很重要，4、5年之后你的同龄人可能已经年薪百万了”，“博士并不会增加你的就业竞争力，因为以后要和其他博士竞争更有限的岗位”]}",
        "dateAsked": "2020-06-05T19:28:00.004",
        "timeLimit": "0:01:30",
        "asked_User_id": "5"
    },
    {
        "Questions_id": "6",
        "quetionTitle": "你会和现任谈起前任吗",
        "detailedInfo": "我女朋友天天和我讨论我的前任，你们觉得这样对吗",
        "question_status": "1",
        "comment": "{1:[“过去的就过去了”, \"能坦然面对有什么\"]; 0:[\"我女前女友经常说起，所以前女友了\", \"不谈起前任是对现任最基本的尊重\", \"换位思考，你能接受吗？总之我不能\",\"男朋友刚刚说起，现在在医院骨科呢\"]; -1[\"前任是什么？？\"]}",
        "Anonymous？": "1",
        "dateAsked": "2020-06-06T10:46:00.005",
        "timeLimit": "0:05:00",
        "asked_User_id": "4"
    },
    {
        "Questions_id": "7",
        "quetionTitle": "你能接受男朋友比你矮吗",
        "detailedInfo": "大家能接受吗",
        "question_status": "1",
        "comment": "{1:[“只要性格合得来，身高不是问题”，“如果是马云爸爸的话可以”，“哪有那么多要求，有男朋友就不错了”]0:[“不能，我只有158”，“我160，男朋友再比我矮是想生七个小矮人吗”，“不能，别人都是小鸟依人，我不想大鹏展翅”]}",
        "Anonymous？": "1",
        "dateAsked": "2020-06-06T18:18:00.006",
        "timeLimit": "0:01:00",
        "asked_User_id": "4"
    },
    {
        "Questions_id": "8",
        "quetionTitle": "公务员真的是铁饭碗吗",
        "detailedInfo": "现在毕业在找工作，但是家里特别想我去做公务员，但是我自己比较偏向去外企和私企。然而我了解了一圈，好像公务员也是很不错的选择",
        "question_status": "1",
        "comment": "{1:[\"根据数据表明，公务员被辞退的概率只有0.01%\"，\"都说35岁是职业的一条生死线，但是对公务员来说，35岁是职业生涯的起点\"，\"公务员的确是铁饭碗，如果去好的单位的话，福利好，待遇高，工作稳定\"];0:[\"年轻人还是要有激情，去外面闯荡一下还是不错的\",\"公务员天天坐办公室会腰间盘突出\",\"你的方向应该是星辰与大海\",\"父母的意见终究只是参考，做你想做的\"]}",
        "Anonymous？": "0",
        "dateAsked": "2020-06-07T17:43:00.007",
        "timeLimit": "0:07:00",
        "asked_User_id": "5"
    },
    {
        "Questions_id": "9",
        "quetionTitle": "想去投行应该学金融专业吗",
        "detailedInfo": "一直很向往投行的生活，经常在电视上看到，金融行业的精英分子让我很仰慕。我现在在罗切斯特大学，大一在读，专业还未定，学金融是去投行的一个好的选择吗",
        "question_status": "1",
        "comment": "{0:[\"学好数理化，走遍天下都不怕\",\"血的教训，投行不喜欢招金融专业的\",\"对于金融基础，自学cfa就足够了\",\"大数据时代，数学和cs是更好的选择\", \"最完美的搭配是本科理工专业，研究生金融专业，学弟加油吧！\"]}",
        "Anonymous？": "0",
        "dateAsked": "2020-06-07T08:16:00.008",
        "timeLimit": "0:02:00",
        "asked_User_id": "7"
    },
    {
        "Questions_id": "10",
        "quetionTitle": "疫情期间，能点外卖吗",
        "detailedInfo": "已经宅家2个月了，向往外面的花花世界，看到以前手机里的美食照片很馋，建议点外卖吗",
        "question_status": "1",
        "comment": "{1:[\"可以点呀，但建议点熟食\", \"病毒不耐高温，在烹制过程中可以消灭病毒，所以问题不大\", \"已经被隔离在家了，不能委屈自己，注意消毒\", \"我已经点了两个月了，你觉得呢\", \"可以点，但要注意让外卖小哥把外卖放在门口，等10分钟再去拿\"]; 0:[\"现在疫情严重，建议不要点\", \"外卖人员接触的人比较繁杂，不确定是否携带病毒，还是小心为妙\", \"点什么点，趁此机会减肥不香吗\", \"真爱生命，远离外卖\"]}",
        "Anonymous？": "1",
        "dateAsked": "2020-06-08T14:03:00.009",
        "timeLimit": "0:01:00",
        "asked_User_id": "3"
    },
    {
        "Questions_id": "11",
        "quetionTitle": "在纽约开车方便吗",
        "detailedInfo": "研究生决定去哥大了，但是本科时候在农村买了辆车，听说纽约用车很不方便，所以想问一下去纽约需要把车卖了吗",
        "question_status": "1",
        "comment": "{1:[\"条件允许的话还是留着吧，有车还是会方便\"]; 0[\"建议卖掉，纽约实在太堵车了\"，\"纽约开车，呵呵呵\"，\"我读了一个小时了，现在还在车里给你投票呢\", \"地铁公交不香吗\",“车库+保险=花着钱给车吃灰”]",
        "Anonymous？": "0",
        "dateAsked": "2020-06-08T18:23:00.010",
        "timeLimit": "0:07:00",
        "asked_User_id": "4"
    }
];
var userList =[
        {
            "userId": "1",
            "userName": "Ricky",
            "askekQuestionID": "[1]",
            "votedQuestionIDresult": "[1:1]",
            "Interest id": "[2]",
            "detailedInfo": "哥大研一学生",
            "Volt_val": "不知道。。。。",
            "answer_num": "2",
            "ask_num": "1"
        },
        {
            "userId": "2",
            "userName": "Oliver",
            "askekQuestionID": "[2,5,10]",
            "votedQuestionIDresult": "[2:1,5:2,10:-1]",
            "Interest id": "[1,2]",
            "detailedInfo": "NYU交换生"
        },
        {
            "userId": "3",
            "userName": "Max",
            "askekQuestionID": "[2,3,10]",
            "votedQuestionIDresult": "[6,8,10]",
            "Interest id": "[1,2,7]",
            "detailedInfo": "社会主义接班人",
            "ask_num": "3"
        },
        {
            "userId": "4",
            "userName": "wendyTesta",
            "askekQuestionID": "[6,7,11]",
            "votedQuestionIDresult": "[4,10,8]",
            "Interest id": "[4,7]",
            "detailedInfo": "金融民工",
            "ask_num": "3"
        },
        {
            "userId": "5",
            "userName": "jennyjj",
            "askekQuestionID": "[5,8]",
            "votedQuestionIDresult": "[5,8]",
            "Interest id": "[1,2,4]",
            "detailedInfo": "海贼王的男人",
            "ask_num": "2"
        },
        {
            "userId": "6",
            "userName": "ppchaos",
            "askekQuestionID": "[4]",
            "votedQuestionIDresult": "[4:1]",
            "Interest id": "[1,2]",
            "detailedInfo": "脚踏实地的理想主义者",
            "ask_num": "1"
        },
        {
            "userId": "7",
            "userName": "elsago",
            "askekQuestionID": "[9]",
            "votedQuestionIDresult": "[9:2]",
            "Interest id": "[2]",
            "detailedInfo": "别低头 王冠会掉",
            "ask_num": "1"
        },
        {
            "userId": "8",
            "userName": "mask",
            "askekQuestionID": "[9]",
            "votedQuestionIDresult": "[9:1]",
            "detailedInfo": "勤奋"
        },
        {
            "userId": "9",
            "userName": "spceee",
            "askekQuestionID": "[1,2]",
            "votedQuestionIDresult": "[1:1,2:2]",
            "detailedInfo": "实践出真知"
        },
        {
            "userId": "10",
            "userName": "jackhi",
            "askekQuestionID": "[2,9]",
            "votedQuestionIDresult": "[2:1,9:1]",
            "detailedInfo": "YOLO"
        },
        {
            "userId": "11",
            "userName": "echo",
            "askekQuestionID": "[3,6]",
            "votedQuestionIDresult": "[3:1,6:2]",
            "detailedInfo": "努力"
        },
        {
            "userId": "12",
            "userName": "coluni",
            "askekQuestionID": "[9]",
            "votedQuestionIDresult": "[9:2]",
            "detailedInfo": "有梦想谁都了不起"
        },
        {
            "userId": "13",
            "userName": "jackma",
            "askekQuestionID": "[1,3, 5, 9, 10]",
            "votedQuestionIDresult": "[1:2,3:2, 5:2, 9:2, 10:2]",
            "detailedInfo": "一只搬砖狗"
        },
        {
            "userId": "14",
            "userName": "appleee",
            "askekQuestionID": "[6]",
            "votedQuestionIDresult": "[6:1]",
            "detailedInfo": "虚实之间 孰对孰错"
        },
        {
            "userId": "15",
            "userName": "jenana",
            "askekQuestionID": "[3]",
            "votedQuestionIDresult": "[3:2]",
            "detailedInfo": "奥利给"
        },
        {
            "userId": "16",
            "userName": "levisww",
            "askekQuestionID": "[2,8]",
            "votedQuestionIDresult": "[2:1,8:1]",
            "detailedInfo": "走起"
        },
        {
            "userId": "17",
            "userName": "willswu",
            "askekQuestionID": "[6,7,10]",
            "votedQuestionIDresult": "[6:1,7:1,10:2]",
            "detailedInfo": "就是干"
        },
        {
            "userId": "18",
            "userName": "Yeha",
            "askekQuestionID": "[1,3,10]",
            "votedQuestionIDresult": "[1:2,3:1,10:1]",
            "detailedInfo": "No pain, no gain"
        },
        {
            "userId": "19",
            "userName": "bul",
            "askekQuestionID": "[2,4,10]",
            "votedQuestionIDresult": "[2:2,4:1,10:2]",
            "detailedInfo": "超越"
        },
        {
            "userId": "20",
            "userName": "mia",
            "askekQuestionID": "[2,4, 9, 10]",
            "votedQuestionIDresult": "[2:1,4:1, 9:2, 10:2]",
            "detailedInfo": "计算机博士，旅居美国"
        },
        {
            "userId": "21",
            "userName": "Coco",
            "askekQuestionID": "[2,8]",
            "votedQuestionIDresult": "[2:2,8:1]",
            "detailedInfo": "PE/VC圈资深人士"
        },
        {
            "userId": "22",
            "userName": "Yiesha",
            "askekQuestionID": "[1,2,3]",
            "votedQuestionIDresult": "[1:1,2:2,3:1]",
            "detailedInfo": "10年HR经验"
        },
        {
            "userId": "23",
            "userName": "BrandyP",
            "askekQuestionID": "[2,5,11]",
            "votedQuestionIDresult": "[2:1,5:2,11:2]",
            "detailedInfo": "一名水手"
        },
        {
            "userId": "24",
            "userName": "MonkeyL",
            "askekQuestionID": "[1,2,9,10,11]",
            "votedQuestionIDresult": "[1:1,2:1,9:2,10:1,11:1]",
            "detailedInfo": "餐饮界老手"
        },
        {
            "userId": "25",
            "userName": "Solo",
            "askekQuestionID": "[4]",
            "votedQuestionIDresult": "[4:1]",
            "detailedInfo": "哈佛大学大一新生"
        },
        {
            "userId": "26",
            "userName": "OnePiece",
            "askekQuestionID": "[1,2,3,4,5,6,8,10,11]",
            "votedQuestionIDresult": "[1:2,2:2,3:1,4:2,5:1,6:1,8:1,10:2,11:2]",
            "detailedInfo": "吃播博主"
        },
        {
            "userId": "27",
            "userName": "Bryan",
            "askekQuestionID": "[2,3,7]",
            "votedQuestionIDresult": "[2:1,3:1,7:2]",
            "detailedInfo": "前国家击剑队成员"
        },
        {
            "userId": "28",
            "userName": "nayer",
            "askekQuestionID": "[1,2,3,6]",
            "votedQuestionIDresult": "[1:1,2:2,3:1,6:2]",
            "detailedInfo": "基金经理"
        },
        {
            "userId": "29",
            "userName": "lol",
            "askekQuestionID": "[1,5,9]",
            "votedQuestionIDresult": "[1:2,5:2,9:2]",
            "detailedInfo": "券商研究所化工首席"
        },
        {
            "userId": "30",
            "userName": "Comeone",
            "askekQuestionID": "[8]",
            "votedQuestionIDresult": "[8:1]",
            "detailedInfo": "常春藤本科在读"
        },
        {
            "userId": "31",
            "userName": "rainbow",
            "askekQuestionID": "[4,6,8]",
            "votedQuestionIDresult": "[4:1,6:1,8:1]",
            "detailedInfo": "体操运动员"
        },
        {
            "userId": "32",
            "userName": "blast",
            "askekQuestionID": "[2,7,9]",
            "votedQuestionIDresult": "[2:1,7:1,9:2]",
            "detailedInfo": "加拿大美妆博主"
        },
        {
            "userId": "33",
            "userName": "wtefow",
            "askekQuestionID": "[3,8]",
            "votedQuestionIDresult": "[3:2,8:2]",
            "detailedInfo": "留学申请资深顾问"
        },
        {
            "userId": "34",
            "userName": "KDBK",
            "askekQuestionID": "[4,7,8]",
            "votedQuestionIDresult": "[4:1,7:1,8:2]",
            "detailedInfo": "炉石传说美服Top3"
        },
        {
            "userId": "35",
            "userName": "wrfoj ",
            "askekQuestionID": "[2,3,4,6,11]",
            "votedQuestionIDresult": "[2:1,3:2,4:2,6:1,11:1]",
            "detailedInfo": "体校大三在读"
        },
        {
            "userId": "36",
            "userName": "Lufei",
            "askekQuestionID": "[2,4,9,11]",
            "votedQuestionIDresult": "[2:1,4:1,9:2,11:1]",
            "detailedInfo": "一枚吃货"
        },
        {
            "userId": "37",
            "userName": "zuolo",
            "askekQuestionID": "[3,7]",
            "votedQuestionIDresult": "[3:2,7:1]",
            "detailedInfo": "NCAA联盟队员"
        },
        {
            "userId": "38",
            "userName": "backdown",
            "askekQuestionID": "[5,10]",
            "votedQuestionIDresult": "[5:1,10:2]",
            "detailedInfo": "一名技术宅"
        },
        {
            "userId": "39",
            "userName": "tql",
            "askekQuestionID": "[2,3,4,5,6,8,9,10,11]",
            "votedQuestionIDresult": "[2:1,3:2,4:2,5:1,6:1,8:2,9:1,10:1,11:2]",
            "detailedInfo": "爱犬人士"
        },
        {
            "userId": "40",
            "userName": "Dejavu",
            "askekQuestionID": "[4,7,9]",
            "votedQuestionIDresult": "[4:1,7:1,9:2]",
            "detailedInfo": "北美乐评人"
        },
        {
            "userId": "41",
            "userName": "Kit",
            "askekQuestionID": "[5,7]",
            "votedQuestionIDresult": "[5:2,7:1]",
            "detailedInfo": "最酷的00后rapper"
        },
        {
            "userId": "42",
            "userName": "bruce",
            "askekQuestionID": "[6,7,9]",
            "votedQuestionIDresult": "[6:1,7:1,9:2]",
            "detailedInfo": "连续创业者"
        },
        {
            "userId": "43",
            "userName": "Pepper",
            "askekQuestionID": "[5,6,8]",
            "votedQuestionIDresult": "[5:1,6:2,8:1]",
            "detailedInfo": "美国好声音编导"
        },
        {
            "userId": "44",
            "userName": "westpoint",
            "askekQuestionID": "[4,5,6,8]",
            "votedQuestionIDresult": "[4:1,5:1,6:2,8:2]",
            "detailedInfo": "西点军校在读"
        },
        {
            "userId": "45",
            "userName": "Oriental",
            "askekQuestionID": "[11]",
            "votedQuestionIDresult": "[11:1]",
            "detailedInfo": "新东方北美名师"
        },
        {
            "userId": "46",
            "userName": "Sheepy",
            "askekQuestionID": "[6,7,9,10,11]",
            "votedQuestionIDresult": "[6:1,7:1,9:1,10:1,11:2]",
            "detailedInfo": "催眠大师"
        },
        {
            "userId": "47",
            "userName": "worldorm",
            "askekQuestionID": "[1,2,3,6]",
            "votedQuestionIDresult": "[1:1,2:2,3:1,6:1]",
            "detailedInfo": "永远的职业是学生"
        },
        {
            "userId": "48",
            "userName": "Guannn",
            "askekQuestionID": "[1,3,6]",
            "votedQuestionIDresult": "[1:2,3:1,6:2]",
            "detailedInfo": "模型拼装专家"
        },
        {
            "userId": "49",
            "userName": "Fy",
            "askekQuestionID": "[5,6,8,11]",
            "votedQuestionIDresult": "[5:1,6:2,8:2,11:2]",
            "detailedInfo": "无产阶级斗士"
        },
        {
            "userId": "50",
            "userName": "TNT",
            "askekQuestionID": "[6,7,9]",
            "votedQuestionIDresult": "[6:1,7:2,9:2]",
            "detailedInfo": "莱斯大学 化学专业大二在读"
        },
        {
            "userId": "51",
            "userName": "alright",
            "askekQuestionID": "[2,5,9,11]",
            "votedQuestionIDresult": "[2:1,5:1,9:2,11:2]",
            "detailedInfo": "罗切斯特大学 经济专业大四"
        },
        {
            "userId": "52",
            "userName": "Tommy",
            "askekQuestionID": "[10]",
            "votedQuestionIDresult": "[10:2]",
            "detailedInfo": "MIT MFin 在读"
        },
        {
            "userId": "53",
            "userName": "Ogi",
            "askekQuestionID": "[7,8]",
            "votedQuestionIDresult": "[7:1,8:2]",
            "detailedInfo": "联合国常任理事委员"
        },
        {
            "userId": "54",
            "userName": "QWER",
            "askekQuestionID": "[2,4,9,10, 11]",
            "votedQuestionIDresult": "[2:1,4:1,9:2,10:2,11:1]",
            "detailedInfo": "LA鞋铺创始人"
        },
        {
            "userId": "55",
            "userName": "Smoother",
            "askekQuestionID": "[4,6,8]",
            "votedQuestionIDresult": "[4:2,6:2,8:1]",
            "detailedInfo": "韩圈10年粉"
        },
        {
            "userId": "56",
            "userName": "hamp",
            "askekQuestionID": "[3,5,8,11]",
            "votedQuestionIDresult": "[3:1,5:1,8:2,11:2]",
            "detailedInfo": "前CUBA运动员"
        },
        {
            "userId": "57",
            "userName": "Tedddy",
            "askekQuestionID": "[4,5,6,8]",
            "votedQuestionIDresult": "[4:1,5:2,6:2,8:2]",
            "detailedInfo": "洛杉矶湖人10年球迷"
        },
        {
            "userId": "58",
            "userName": "awsl",
            "askekQuestionID": "[5,9,10]",
            "votedQuestionIDresult": "[5:1,9:1,10:2]",
            "detailedInfo": "集邮爱好者"
        },
        {
            "userId": "59",
            "userName": "happy",
            "askekQuestionID": "[5,10]",
            "votedQuestionIDresult": "[5:1,10:2]",
            "detailedInfo": "电音小王子"
        },
        {
            "userId": "60",
            "userName": "Dearest",
            "askekQuestionID": "[2,6,9]",
            "votedQuestionIDresult": "[2:1,6:2,9:1]",
            "detailedInfo": "纽约米其林大厨"
        }];

const _userList = userList;
export { _userList as userList };
const _questionLst = questionLst;
export { _questionLst as questionLst };