# main
[旁白][雨声淅淅沥沥地下着，远处传来若隐若现的雷声。暮色中，明湖精神病院的轮廓显得格外阴森。][][][#CCCCCC]
[旁白][你是一名记者，为了调查二十年前那起连环失踪案，来到了这座早已废弃的建筑。据说，这里曾有十三名病人和三名护士离奇消失。][][][#CCCCCC]
[我][真是个糟糕的天气...这把锈迹斑斑的铁门居然没锁。不过也好，省得我再想办法潜入了。][][][#E6E6FA]
[旁白][你推开吱呀作响的大门，潮湿的空气中弥漫着一股霉味，还有一丝若有若无的消毒水气息。][][][#CCCCCC]
[我][手机的信号只有一格，但好在手电筒还能用。等等，这消毒水的味道...不应该啊。][][][#E6E6FA]
[旁白][你的手电筒在黑暗中划出一道光束，大厅里满是倒塌的家具和破碎的玻璃。墙上斑驳的标语依稀可见：'关爱病人，从心开始'。][][][#CCCCCC]
[我][按照资料记载，那些失踪者最后都是在三楼被目击到的。不过...这消毒水的味道未免也太新鲜了。][][][#E6E6FA]
[旁白][就在这时，你听到身后传来一声清脆的响动，像是玻璃瓶滚动的声音。][仔细查看#check_sound|继续前进#keep_walking|检查大厅布告栏#check_board][][#FF6B6B]

# check_board
[旁白][你走向大厅的布告栏，虽然大部分公告都已经腐烂，但有一张照片却异常清晰。][][][#CCCCCC]
[我][这是...1378号病人的照片？看起来是个年轻女孩，可照片上的日期...竟然是一周前？！][][][#E6E6FA]
[旁白][照片上的女孩面带微笑，手里拿着一本日记本。而在照片的角落，你注意到一个模糊的身影，穿着白大褂。][][][#FF6B6B]
[我][等等，这不可能。这家医院明明二十年前就关闭了...][][][#E6E6FA]
[旁白][突然，你听到三楼传来一阵轻柔的哼唱声。][前往三楼#third_floor|继续检查布告栏#check_more][][#FF4444]

# check_more
[旁白][你仔细查看布告栏的其他内容，发现了一份泛黄的报纸剪报。][][][#CCCCCC]
[报纸][本报讯：明湖精神病院护士长因非法进行人体实验被捕，然而在押送途中离奇失踪...][][][#FF8C00]
[我][人体实验？档案里完全没有提到这个...][][][#E6E6FA]
[旁白][就在你专注阅读时，身后传来脚步声。][迅速转身#turn_around|假装没听见继续看#keep_reading][][#FF4444]

# turn_around
[旁白][你猛地转身，手电筒的光束扫过空荡荡的大厅。][][][#CCCCCC]
[我][有人吗？][][][#E6E6FA]
[旁白][没有回应，但你注意到地上多了一个闪着微光的注射器。][][][#FF6B6B]
[我][这...这是新的注射器！][][][#E6E6FA]
[旁白][三楼传来一阵笑声。][前往三楼#third_floor][][#FF4444]

# keep_reading
[旁白][你继续阅读剪报，心跳却越来越快。][][][#CCCCCC]
[报纸][...据悉，该护士长声称已经找到了'永生'的方法，但需要大量'实验品'...][][][#FF8C00]
[旁白][突然，你感觉有什么冰凉的东西滴在了你的脖子上。][][][#FF4444]
[我][这是...][抬头看#look_up|立即后退#step_back][][#E6E6FA]

# look_up
[旁白][你缓缓抬头，看到天花板上趴着一个扭曲的身影。][][][#FF0000]
[护士长][打扰了，需要打一针吗？][][][#FF00FF]
[旁白][你来不及反应，一切陷入黑暗。][坏结局1#bad_end1][][#FF0000]

# step_back
[旁白][你本能地向后跳开，正好避开了从天花板垂下的一滴液体。][][][#CCCCCC]
[我][该死！][][][#E6E6FA]
[旁白][抬头望去，天花板上空无一物，但那滴液体在地上留下了一个腐蚀的痕迹。][][][#FF6B6B]
[旁白][三楼传来若隐若现的笑声。][前往三楼#third_floor][][#FF4444]

# check_sound
[旁白][你转身查看，只见一个玻璃瓶正在地上滚动，瓶中的液体泛着诡异的荧光。][][][#CCCCCC]
[我][...风吹的吗？不对，这里没有窗户。而且这瓶子...][捡起玻璃瓶#pick_bottle|观察但不触碰#observe_bottle][][#E6E6FA]

# pick_bottle
[旁白][你弯腰捡起玻璃瓶，发现瓶身异常冰冷。][][][#CCCCCC]
[我][病人编号：1378 - 镇静剂...咦，瓶子上还有个手写标签？][][][#E6E6FA]
[旁白][你仔细辨认那个小小的手写标签。][][][#FF6B6B]
[标签][永生配方 - 实验阶段 - 今日制备][][][#FF8C00]
[我][今日制备？！][][][#E6E6FA]
[旁白][突然，你的手指开始发麻，一股寒意顺着手臂蔓延。][扔掉瓶子#throw_bottle|继续观察#keep_observe][][#FF4444]

# throw_bottle
[旁白][你立即扔掉玻璃瓶，但手臂的麻痹感并未消退。][][][#FF4444]
[我][该死...这到底是什么东西？][][][#E6E6FA]
[旁白][你的视线开始模糊，但隐约看到一个穿白大褂的身影从走廊尽头飘过。][追上去#chase_nurse|原地等待#wait_here][][#FF0000]

# keep_observe
[旁白][你继续研究瓶子，却发现手臂已经完全失去知觉。][][][#FF4444]
[我][不...不对劲...][][][#E6E6FA]
[护士长][哎呀，你果然对我的药很感兴趣呢~][][][#FF00FF]
[旁白][你无力地倒下，看到一双白色护士鞋出现在视线中。][坏结局2#bad_end2][][#FF0000]

# observe_bottle
[旁白][你蹲下仔细观察玻璃瓶，注意到瓶中的液体似乎在微微流动，仿佛有生命一般。][][][#CCCCCC]
[我][这配方...等等，上面的日期是今天！][][][#E6E6FA]
[旁白][就在这时，你注意到瓶子倒映出一个身影。][迅速转身#quick_turn|装作没注意#pretend_normal][][#FF6B6B]

# quick_turn
[旁白][你猛地转身，却只看到一缕白影消失在楼梯口。][][][#CCCCCC]
[我][刚才那是...不，应该是我太紧张了。][][][#E6E6FA]
[旁白][三楼传来一阵笑声。][前往三楼#third_floor][][#FF4444]

# pretend_normal
[旁白][你假装继续观察瓶子，暗中注意身后的动静。][][][#CCCCCC]
[我][（小声）来啊...让我看看你到底是谁。][][][#E6E6FA]
[旁白][脚步声慢慢接近，然后停在你身后。就在那身影要触碰到你的瞬间...][迅速躲开#dodge|转身对峙#confront][][#FF4444]

# dodge
[旁白][你灵巧地向旁边翻滚，躲开了身后之人的触碰。][][][#CCCCCC]
[我][果然有人！][][][#E6E6FA]
[旁白][空荡的大厅里，只有那个玻璃瓶静静地发着光。][][][#FF6B6B]
[旁白][三楼传来一阵掌声。][前往三楼#third_floor][][#FF4444]

# confront
[旁白][你猛地转身，却被一阵刺眼的白光晃住了眼睛。][][][#FF4444]
[护士长][反应不错，不过还是太慢了哦~][][][#FF00FF]
[旁白][等你的视觉恢复时，大厅里空无一人，只有那个玻璃瓶不见了。][][][#FF6B6B]
[旁白][三楼传来一阵笑声。][前往三楼#third_floor][][#FF4444]

# keep_walking
[旁白][你决定无视这个声音，径直走向楼梯。][][][#CCCCCC]
[我][（小声）保持冷静，专业记者不应该被这种小事吓到。不过...还是记录一下。][拿出记事本#take_notes|直接上楼#go_upstairs][][#E6E6FA]

# take_notes
[旁白][你掏出记事本，借着手电筒的光快速记录。][][][#CCCCCC]
[记事本][疑点1：新鲜的消毒水味道
疑点2：滚动的玻璃瓶
疑点3：二十年前的案件档案不完整][][][#FF8C00]
[旁白][就在你写到一半时，一滴水落在了笔记本上，洇开一片暗红色。][][][#FF4444]
[我][这是...血？][抬头查看#look_up|合上记事本快步离开#leave_quick][][#E6E6FA]

# third_floor
[旁白][你小心翼翼地走上三楼，每一级台阶都发出令人不安的吱呀声。空气中弥漫着一股奇怪的药味。][][][#CCCCCC]
[我][这里好像比其他楼层要冷得多...等等，那是什么？][][][#E6E6FA]
[旁白][走廊的墙上布满了密密麻麻的抓痕，还有些模糊的数字：1378、1379、1380...][][][#FF6B6B]
[我][这些数字...是病人编号吗？][检查抓痕#check_marks|继续前进#continue_ahead][][#E6E6FA]

# check_marks
[旁白][你靠近墙壁，发现这些抓痕非常新鲜，有些痕迹里甚至还残留着暗红色的物质。][][][#FF4444]
[我][这些痕迹最多不超过24小时...到底发生了什么？][][][#E6E6FA]
[旁白][突然，你听到身后传来窸窸窣窣的声音，像是有什么东西在地上爬行。][迅速转身#turn_back|屏住呼吸不动#stay_still][][#FF0000]

# continue_ahead
[旁白][走廊尽头的一扇门虚掩着，门缝中透出微弱的绿色荧光。][][][#CCCCCC]
[我][奇怪，这里不是早就断电了吗？而且这个颜色...][][][#E6E6FA]
[旁白][你慢慢走近那扇门，突然听到里面传来一个女人的声音。][][][#FF6B6B]
[？？？][来，吃药的时间到了，1378号。今天的配方可是特别的哦~][][][#FF00FF]
[旁白][门缝中，你看到一个穿着白大褂的身影正在配制着什么药剂。][推开门#open_door|先观察#observe_first|离开这里#escape][][#FF4444]

# observe_first
[旁白][你透过门缝仔细观察，看到房间里摆满了各种实验器材，墙上贴满了人体解剖图。][][][#CCCCCC]
[我][这些器材...都是新的！][][][#E6E6FA]
[旁白][突然，你注意到墙上有一块电子显示屏，上面滚动显示着：'永生实验进度：98.7%'。][][][#FF6B6B]
[护士长][啊啦，偷看可不是好习惯哦~][][][#FF00FF]
[旁白][一只苍白的手从门缝中伸出。][迅速后退#step_back抓住那只手#grab_hand][][#FF0000]

# grab_hand
[旁白][你鼓起勇气抓住那只手，却发现它异常冰冷。][][][#FF4444]
[我][你到底是谁？这些实验是怎么回事？][][][#E6E6FA]
[护士长][想知道真相吗？那就进来看看吧~][][][#FF00FF]
[旁白][你感觉一股强大的力量将你拉进房间。][奋力挣扎#struggle|顺势进入#enter_room][][#FF0000]

# struggle
[旁白][你拼命挣扎，却发现那只手的力量强得不像人类。][][][#FF4444]
[我][放开我！][][][#E6E6FA]
[护士长][别担心，很快就不痛了~][][][#FF00FF]
[旁白][你的视线逐渐模糊，但在昏迷前看到了令人震惊的一幕...][坏结局3#bad_end3][][#FF0000]

# enter_room
[旁白][你决定面对真相，主动走进房间。][][][#CCCCCC]
[护士长][勇气可嘉。那么，让我告诉你这二十年来的真相吧。][][][#FF00FF]
[旁白][房间里的灯光突然变亮，你看到墙上贴满了照片，都是失踪者的照片，但他们看起来一点都没有变老。][][][#FF6B6B]
[我][这不可能...他们都还活着？][][][#E6E6FA]
[护士长][当然，我的'永生实验'很成功呢。只是，他们现在可能不太像人类了。][][][#FF00FF]
[旁白][角落里，一团团扭曲的影子开始蠕动。][继续询问#final_question2|寻找解救方法#find_solution][][#FF0000]

# find_solution
[旁白][你注意到护士长桌上的研究日记，上面详细记录了实验过程和...解药配方。][][][#CCCCCC]
[我][原来如此，你根本就不是在研究永生，而是在制造怪物！][][][#E6E6FA]
[护士长][聪明，不过已经太迟了哦~][][][#FF00FF]
[旁白][你迅速抓起桌上的解药配方，同时注意到墙角有个紧急警报按钮。][按下警报#press_alarm|研究配方#study_formula][][#FF4444]

# press_alarm
[旁白][你冲向警报按钮，在护士长反应过来之前按下了它。][][][#CCCCCC]
[警报][警告！解药释放程序启动！全楼喷淋系统激活！][][][#FF8C00]
[护士长][不！我的实验！][][][#FF00FF]
[旁白][天花板开始喷洒解药，所有扭曲的身影开始恢复人形。][][][#FF6B6B]
[我][结束了...一切都结束了。][][][#E6E6FA]
[旁白][警笛声由远及近，你成功揭露了这个疯狂的实验，解救了所有受害者。][好结局#good_end][][#00FF00]

# study_formula
[旁白][你试图破译解药配方，但这耽误了宝贵的时间。][][][#FF4444]
[护士长][让我们开始新的实验吧~][][][#FF00FF]
[旁白][无数双手从黑暗中伸出，将你拖入永恒的噩梦。][坏结局4#bad_end4][][#FF0000]

# good_end
[旁白][解药喷洒在整栋建筑内，原本扭曲的身影逐渐恢复人形。警笛声越来越近。][][][#CCCCCC]
[护士长][不...不！我的完美实验！我的永生！][][][#FF00FF]
[旁白][护士长的身体开始崩解，露出她真实的模样——一具早已腐烂的尸体。][][][#FF4444]
[护士长][为什么...我明明已经...找到了永生的方法...][][][#FF00FF]
[我][你根本就没有活着，这二十年来，你一直是个游荡的怨魂罢了。][][][#E6E6FA]
[旁白][护士长的身影逐渐消散，只留下一地的白大褂。][][][#CCCCCC]
[旁白][特警队破门而入，医护人员随后跟进。被解救的受害者们虽然虚弱，但都保持着清醒。][][][#CCCCCC]
[1378号][谢谢你...我们终于自由了。][][][#E6E6FA]
[我][一切都结束了。][][][#E6E6FA]
[旁白][几天后，你的报道轰动全国。][][][#CCCCCC]
[报纸][二十年前惊天悬案告破：疯狂护士长的"永生实验"真相大白，
受害者全部获救，医学界称这是一个奇迹。][][][#FF8C00]
[旁白][然而只有你知道，这不仅仅是一个普通的犯罪事件，
而是一个关于执念、疯狂与救赎的故事。][][][#CCCCCC]
[我][（写在记事本上）也许有些真相，永远不应该被公开。
但至少，那些失踪的人们，终于能够重获新生。][][][#E6E6FA]
[旁白][雨停了，晨光透过云层洒在明湖精神病院的废墟上。
这座承载了太多痛苦记忆的建筑，终将在阳光下化为尘土。][][][#CCCCCC]
[旁白][你合上记事本，深深地看了一眼这座建筑，转身离去。
医院的铁门在风中轻轻摇晃，发出最后的叹息。][结束*https://chat.aibob.click][][#00FF00]