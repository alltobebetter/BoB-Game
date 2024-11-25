# main
[旁白][雨声淅淅沥沥地下着，远处传来若隐若现的雷声。][][][#CCCCCC]
[旁白][你是一名记者，为了调查二十年前那起连环失踪案，来到了早已废弃的明湖精神病院。][][][#CCCCCC]
[我][真是个糟糕的天气...这把锈迹斑斑的铁门居然没锁。][][][#E6E6FA]
[旁白][你推开吱呀作响的大门，潮湿的空气中弥漫着一股霉味。][][][#CCCCCC]
[我][手机的信号只有一格，但好在手电筒还能用。][][][#E6E6FA]
[旁白][你的手电筒在黑暗中划出一道光束，大厅里满是倒塌的家具和破碎的玻璃。][][][#CCCCCC]
[我][按照资料记载，那些失踪者最后都是在三楼被目击到的。][][][#E6E6FA]
[旁白][就在这时，你听到身后传来一声清脆的响动。][查看声源#check_sound|继续前进#keep_walking][][#FF6B6B]

# check_sound
[旁白][你转身查看，只见一个玻璃瓶正在地上滚动。][][][#CCCCCC]
[我][...风吹的吗？不对，这里没有窗户。][][][#E6E6FA]
[旁白][玻璃瓶停止滚动，你注意到瓶子上还贴着标签，上面写着"病人编号：1378 - 镇静剂"][][][#FF6B6B]
[我][这瓶子看起来很新，不像是放了二十年的样子...][][][#E6E6FA]
[旁白][突然，你听到三楼传来一阵笑声。][前往三楼#third_floor][][#FF4444]

# keep_walking
[旁白][你决定无视这个声音，径直走向楼梯。][][][#CCCCCC]
[我][（小声）保持冷静，专业记者不应该被这种小事吓到。][][][#E6E6FA]
[旁白][就在你走到楼梯口时，一阵阴冷的风从楼上吹来。][][][#FF6B6B]
[我][等等...这栋楼的窗户不是都被钉死了吗？][][][#E6E6FA]
[旁白][三楼传来一阵若隐若现的笑声。][前往三楼#third_floor][][#FF4444]

# third_floor
[旁白][你小心翼翼地走上三楼，地板发出吱呀吱呀的声响。][][][#CCCCCC]
[我][这里好像比其他楼层要冷得多...][][][#E6E6FA]
[旁白][走廊尽头的一扇门虚掩着，门缝中透出微弱的光。][][][#CCCCCC]
[我][奇怪，这里不是早就断电了吗？][][][#E6E6FA]
[旁白][你慢慢走近那扇门，突然听到里面传来一个女人的声音。][][][#FF6B6B]
[？？？][来，吃药的时间到了，1378号。][][][#FF00FF]
[旁白][你的手放在门把手上，犹豫着是否要推开。][推开门#open_door|离开这里#escape][][#FF4444]

# open_door
[旁白][你深吸一口气，推开了门。][][][#CCCCCC]
[旁白][房间里空无一人，只有一张生锈的病床，床头柜上放着一个日记本。][][][#CCCCCC]
[我][这是...1378号病人的日记？][][][#E6E6FA]
[旁白][你翻开日记本的第一页，上面写着：][][][#CCCCCC]
[日记][如果你看到这个，说明你也被她选中了。][][][#FF8C00]
[旁白][突然，门砰地一声关上了。][][][#FF4444]
[？？？][啊，我们的新病人来了呢。][][][#FF00FF]
[旁白][你转过身，看到一个穿着白大褂的女人站在门口，她的脸上带着诡异的微笑。][继续调查#investigate|试图逃跑#run][][#FF0000]

# escape
[旁白][不祥的预感让你决定立即离开这里。][][][#CCCCCC]
[我][这里太不对劲了，我得赶紧走。][][][#E6E6FA]
[旁白][你转身要走，却发现来时的楼梯不见了，取而代之的是一堵墙。][][][#FF4444]
[我][这不可能！楼梯明明就在这里！][][][#E6E6FA]
[旁白][身后传来脚步声，以及一个女人愉快的声音。][][][#FF6B6B]
[？？？][想去哪里啊，我们的新病人？][][][#FF00FF]
[旁白][你慢慢转过身...][继续调查#investigate|试图逃跑#run][][#FF0000]

# investigate
[旁白][你强迫自己冷静下来，决定弄清真相。][][][#CCCCCC]
[我][你...你就是二十年前的那个护士长？][][][#E6E6FA]
[护士长][哎呀，看来你做了功课呢。那你知道那些失踪的人去哪了吗？][][][#FF00FF]
[旁白][她的笑容越来越扭曲，身后的影子开始不自然地扭动。][][][#FF4444]
[护士长][他们都是我的好病人，永远都不会离开这里。][][][#FF00FF]
[旁白][你注意到她的影子里似乎有无数张痛苦的面孔。][继续询问#final_question|拔腿就跑#run][][#FF0000]

# run
[旁白][你转身就跑，拼命地在走廊上奔跑。][][][#CCCCCC]
[我][救命！有人吗！][][][#E6E6FA]
[旁白][你的喊声在空荡的走廊里回荡，身后传来护士长愉快的笑声。][][][#FF4444]
[护士长][跑什么呀，我们来玩个游戏吧~][][][#FF00FF]
[旁白][你跑到走廊尽头，却发现这里变成了死路。][][][#FF6B6B]
[护士长][游戏结束了呢。][][][#FF00FF]
[旁白][你转过身，看到无数双手从墙壁里伸出来...][结束*https://chat.aibob.click][][#FF0000]

# final_question
[我][那些人...他们还活着吗？][][][#E6E6FA]
[护士长][当然活着，他们会永远活着，就像你一样。][][][#FF00FF]
[旁白][她的影子突然膨胀，充满了整个房间。][][][#FF4444]
[护士长][来，该吃药了，我的新病人。][][][#FF00FF]
[旁白][无数只手从影子中伸出，朝你抓来...][结束*https://chat.aibob.click][][#FF0000]
