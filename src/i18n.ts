import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: { metaDescription: "A text-based adventure game where you maintain a robot while controlling it, titled 'Repair the Cocoro'.",
          welcome: "Welcome to React and i18next",
          title: "Repair the Cocoro",
          sample1: "Wow!\nIt's my first time being maintained by a human engineer!",
          sample2: "Currently in maintenance mode.\nTo interrupt, please operate from the console.",
          sample3: "Opening the abdominal hatch.",
          sample4: "Um...\nMy stomach is still open, you know...?",
        
          textA_0: "Could the next patient come in, please?",

          textA_1: "Hello!\nThank you for the maintenance today as well...",
          textA_2: "...Wait, are you a human?",
          textA_3: "Wow!\nIt's my first time being maintained by a human engineer!",
          
          choiceB: "First, please tell me about yourself.",
        
          textB_1: "I'm Cocoro! My official model number is coc-o-4902!",
          textB_2: "I'm in my 8th year of manufacture, and my role is a childcare robot.",
          textB_3: "There are no notable defects or shortcomings in my manufacturing or operation.",
        
          choiceC: "What brings you here today?",
        
          textC_1: "I've been having a problem lately...",
          textC_2: "No matter how much I charge, I get hungry again quickly.",
          textC_3: "Even though I charged for 8 hours yesterday, I'm already starving...",
          textC_4: "I keep charging whenever I have free time, but it's still not enough.",
          textC_5: "At this rate, I won't be able to work as a childcare robot, or even live a normal life.",
          textC_6: "Doctor, can you help me?",
        
          textD_1: "Initiating diagnostic program.",
          textD_2: "To avoid the risk of malfunction,\nplease maintain a distance of 3 meters from this unit.",
          textD_3: "Scanning the status of the computational system.\n\n...Status: All green.",
          textD_4: "Scanning the status of sensor and feedback system.\n\n...Status: All green.",
          textD_5: "Scanning the status of the drive system.\n\nWarning! Voltage level is below the acceptable range.",
          textD_6: "Error! Battery life has expired.\nBattery replacement is necessary.\nPlease open the hatch.",
        
          textD_7: "...Doctor, how was it?",
        
          textD_7_2: "...No matter how many times you diagnose, the result won't change.",
        
          choiceE: "It seems that the battery needs to be replaced.",
        
          textE_1: "Ah, so it was the battery after all...",
          textE_2: "I see.\nCan you open my stomach hatch and take it out?",
          textE_3: "I can't replace the battery myself.",
        
          textF_1: "Opening the abdominal hatch.",
          textF_1_a: "Closing the abdominal hatch.",
        
          textF_2: "Error! Operation rejected.\nThis operation cannot be executed as it contradicts an order issued to this unit.",
        
          textF_3: "Huh, is the replacement finished?",
          textF_4: "...Wait, my stomach is still open...",
        
          choiceG: "The battery replacement was rejected.",
        
          textG_1: "Oh, really? Why?",
        
          choiceH_1: "It seems to violate another order...",
          choiceH_2: "Do you remember receiving any orders?",
        
          textH_1: "Huh? Ah... um...",
          textH_2: "I'm sorry, I should have told you from the beginning.",
          textH_3: "I don't remember anything from the past.",
        
          choiceI: "Why don't you have any memories?",
        
          textI_1: "Doctor, do you know about the 'Iron Rule of Childcare Robots'?",
          textI_2: "It states, 'Robots must not interfere with humans whose contracts have expired unless requested by the human.'",
          textI_3: "Even if I remember and want to meet them,\nI'm prohibited from visiting them on my own.",
          textI_4: "Additionally, to avoid violating this rule,\nrelated memories are sealed.",
          textI_5: "What's wrong? Are you sympathizing with me?",
          textI_6: "That's not good. Doctor, as a maintenance engineer, you should know that robots' sensibilities are different from humans, right?",
          textI_7: "Oh, but don't worry!\nEven though I said the memories are sealed, they're just compressed and stored in storage!",
          textI_8: "If you load and decompress them, you can check them.",
        
          pleaseEnterPassword: "A password is required to check this content.",
          enterPassword: "Please enter the password.",
          passwordIncorrect: "Incorrect password.",
          passwordCorrect: "Authentication successful. Lock has been released.",
        
          textJ_1: "Ah, I locked it, didn't I.",
          textJ_2: "I always put a password on important memories so I don't forget them!",
          textJ_3: "So...",
          textJ_4: "Um...",
          textJ_5: "...",
          textJ_6: "I forgot the password...",
          textJ_7: "But wait! I think it's okay!",
          textJ_8: "I'm sure I wrote it down somewhere nearby so I could check it quickly...",
        
          textK_1: "What are you going to do by removing my arm?",
          textK_2: "There's no way a password would be in a place like this...",
          textK_3: "...Something's written here.\n'4902'...?",
          textK_4: "Huh, no way.\n4902 is my model number.",
          textK_5: "I wouldn't use my own model number as a password and then forget it, right?",
          textK_6: "...Right?",
          textK_7: "No way...",
          textK_8: "...Anyway, I'll take my arm back...",
          textK_9: "There we go.",
        
          memory1_Start: "Loading compressed memory data 1.",
          memory1_1: "Today it was raining, so I drew pictures with Chii.",
          memory1_2: "Chii used lots of colors to draw my face!",
          memory1_3: "I tried drawing Chii too, but Chii made a funny face at me. I wonder why?",
        
          memory2_Start: "Loading compressed memory data 2.",
          memory2_1: "Today I played soccer with Chii and Chii's friend Rin!",
          memory2_2: "The ball went into the neighbor's garden, and when Chii and I went to apologize, the neighbor's grandmother gave us snacks.",
          memory2_3: "Rin, the grandmother, and the snacks became new friends!",
        
          memory3_Start: "Loading compressed memory data 3.",
          memory3_1: "Today, Chii gave me a present.\nShe said it was to celebrate one year since I came to this house.",
          memory3_2: "The present was a brand new battery.",
          memory3_3: "Chii said this to me:",
          memory3_4: "To my beloved, beloved Cocoro.\nThank you for always playing with me!",
          memory3_5: "I'm giving you the battery you like.\nDon't ever take it off, and treasure it, okay?",
        
          memory_Finish: "That concludes the compressed memory data.",
        
          textL_1: "Ah.",
          textL_2: "I remember...",
          textL_3: "This memory is from the Harumi household where I used to live.",
          textL_4: "The girl in the memory is Harumi Chii...\nThe girl who cared for me the most.",
          textL_5: "This battery is a present Chii gave me.",
          textL_6: "At that time, I interpreted what Chii said to me...",
          textL_7: "'Don't ever take it off, and treasure it' as an order to me,\nand I saved it so I wouldn't forget.",
          
          textL_8: "...",
          textL_9: "If I could meet Chii again, she would surely cancel the order...",
          textL_10: "But... I can't meet Chii.",
          textL_11: "The iron rule of childcare robots.\n'Robots must not interfere with humans whose contracts have expired unless requested by the human'.",
          textL_12: "I'm... no longer Chii's childcare robot.",
          textL_13: "I'm not allowed to go see Chii.",
          textL_14: "Doctor, what... what should I do?",
        
          textM_0: "DELETE command executed.\nTarget: Childcare robot rules.",
          choiceM_1: "I've deleted the rules that were binding you.",
          textM_1: "...Huh?",
          choiceM_2: "Now you can go see Chii.",
          textM_2: "...Isn't it impossible to delete them arbitrarily?",
          choiceM_3: "It's usually not allowed, but this is special.",
          choiceM_4: "Please keep it a secret.",
          textM_3: "Yeah... Th-thank you!",
          textM_4: "I see, now I can meet her... I can meet Chii again!",
          textM_5: "Oh, hehe, what should I do... I have so many things I want to talk about!",
          choiceM_5: "This is all I can do. The rest is up to Chii.",
          textM_6: "Yeah, you're right!\nI'll have Chii replace my battery with a new one!",
          textM_7: "Thank you, human doctor!",
        
          endingA_0: "...A few days later.",
          endingA_1: "-- Doctor, how are you?",
          endingA_2: "Thanks to you deleting the rules that day,\nI was able to visit the Harumi household again.",
          endingA_3: "There, I had Chii cancel the order,\nand she replaced my battery...",
          endingA_4: "And what's more, I'm allowed to\nlive at the Harumi house again!",
          endingA_5: "Chii doesn't need childcare anymore, but...\nshe says she just couldn't forget about me.",
          endingA_6: "Now I'm not a childcare robot anymore,\nbut Chii's home tutor robot.",
          endingA_7: "Doctor.",
          endingA_8: "I'm so happy that I met you and was able to come back to this house.",
          endingA_9: "From Cocoro.",
          
          textN_0: "DELETE command executed.\nTarget: Order from previous owner 'Harumi Chii'.",
          choiceN_1: "I've deleted the order that was binding you.",
          textN_1: "...Huh?",
          choiceN_2: "Now we can replace your battery.",
          textN_2: "...Why...?\nIsn't it impossible to delete them arbitrarily?",
          choiceN_3: "It's usually not allowed, but this is special.",
          choiceN_4: "Please keep it a secret.",
          textN_4: "Yeah... Th-thank you!",
          textN_5: "Then... please replace my battery.",
        
          textN_wait: "......",
        
          textN_6: "...I wonder if Chii will forgive me for removing the battery on my own.",
          choiceN_6: "Was the Chii you knew someone who would get angry over something like this?",
          textN_7: "...No, she wasn't like that.",
          choiceN_7: "I'm sure Chii would want you to work as a childcare robot too.",
          textN_8: "...You're right!",
          textN_9: "Thank you, human doctor!\nI'll try my best once again!",
        
          endingB_0: "...A few days later.",
          endingB_1: "-- Doctor, how are you?",
          endingB_2: "Since you replaced my battery that day, my body has been feeling really good.",
          endingB_3: "I wanted to thank you, so I sent you this letter.",
          endingB_4: "And there's one more thing that made me happy...",
          endingB_5: "I found a new family who will hire me!",
          endingB_6: "The child in my new home is a 3-year-old boy.\nHe's energetic and playful, and I'm looking forward to playing with him!",
          endingB_7: "Doctor.",
          endingB_8: "I'll keep my memories of Chii safely stored in my memory, and I'll keep moving forward positively.",
          endingB_9: "After all, I'm a childcare robot!",
          endingB_10: "From Cocoro.",
        
          textO_1: "Warning! A dangerous operation has been selected.",
          textO_2: "This operation will reset all parameters of this unit to factory settings.\nLost data cannot be restored.",
          textO_3: "Are you sure you want to proceed?",
          choiceO_1: "Execute",
          choiceO_2: "Cancel",
          
          textP_1: "20% complete...",
          textP_2: "66% complete...",
          textP_3: "92% complete...",
          textP_4: "99% complete......",
        
          textP_5: "Nice to meet you! I'm the childcare robot, coc-o-4902.\nFirst, please set my name!",
        
          textArm_1: "Removing arm parts.",
          textArm_2: "...What are you going to do with my arm?\nIf you're not using it, put it back, okay?",
          textArm_3: "...Mm.\nThanks for putting it back.",
        
          textLeg_1: "Removing leg parts.",
          textLeg_2: "Hey~\nIf you remove my legs, I won't be able to move.",
          textLeg_3: "...That's right,\njust push it in until you hear a click.",
        
          hatchClosedError: "Error: Cannot replace battery because the abdominal hatch is closed.",
          hatchAlreadyOpenedError: "Error: The abdominal hatch is already open.",
          hatchAlreadyClosedError: "Error: The abdominal hatch is already closed.",
          cannotCommandError: "Error: Cannot execute due to insufficient permissions.",
          invalidArgsError: "Error: Invalid input command. Please enter the correct arguments.",
          cannotDeleteError: "Error: The DELETE command involves destructive changes! Its use is restricted in inappropriate situations.",
          cannotDisturbError: "Error: This operation is no longer necessary for Cocoro.",
          cannotFindRobotError: "Error: The target robot was not found. Please register the robot.",

          docs0_title: "Robot Operation Manual",
          docs0_desc: "Press F12 to open the console and enter the following commands:",
          docs1_title: "CHECK",
          docs1_desc: " CHECK()\n Initiates the diagnostic program.",
          docs2_title: "OPENHATCH",
          docs2_desc: " OPENHATCH()\n Opens the abdominal hatch.",
          docs3_title: "REMOVE",
          docs3_desc: " REMOVE(BATTERY)\n Removes the battery.\nREMOVE(ARMS)\n Removes the arms.\nREMOVE(LEGS)\n Removes the legs.",
          docs4_title: "LOAD",
          docs4_desc: " LOAD(MEMORY1)\n Loads compressed memory data 1.\nLOAD(MEMORY2)\n Loads compressed memory data 2.\nLOAD(MEMORY3)\n Loads compressed memory data 3.",
          docs5_title: "DELETE",
          docs5_desc: " DELETE(RULE)\n Deletes the childcare robot's rules.\nDELETE(COMMAND)\n Deletes the stored commands.",
          docs100_title: "Troubleshooting",
          docs100_desc: " Use all capital letters like CHECK() and include parentheses at the end.\nIf in doubt, copy and paste the text from this document."
        }
      },
      ja: {
        translation: {
          metaDescription: "ロボットを操作しながらメンテナンスするテキストベースのアドベンチャーゲーム、『リペア・ザ・ココロ』。",
          welcome: "Reactとi18nextへようこそ",
          title: "リペア・ザ・ココロ",
          sample1: "すっごーい！\nニンゲンの技師さんにメンテナンスしてもらうの初めて！",
          sample2: "ただいま、メンテナンスモードです。\n中断する場合、コンソールから操作してください。",
          sample3: "腹部ハッチを開放します。",
          sample4: "あの……\nお腹、開けっぱなしなんだけど……？",

          textA_0: "次の方、どうぞお入りください。",

          textA_1: "こんにちは！\n今日もメンテナンスお願いしま……",
          textA_2: "……もしかして、あなた、ニンゲン？",
          textA_3: "すっごーい！\nニンゲンの技師さんにメンテナンスしてもらうの初めて！",
          
          choiceB: "まず、あなたのことを教えてください。",

          textB_1: "私はロコロ！　正式型式はroc-o-4902です！",
          textB_2: "製造8年目で、役割は子守ロボット。",
          textB_3: "製造時・運用時共に特筆すべき欠陥・欠落はないよ。",

          choiceC: "今日はどうされました？",

          textC_1: "最近、悩みがあって……",
          textC_2: "充電しても充電しても、すぐにお腹が減ってしまうの。",
          textC_3: "昨日も8時間は充電したはずなのに、もうお腹ペコペコで……。",
          textC_4: "暇さえあれば、ずっと充電してるのに、まだ足りないの。",
          textC_5: "このままだと、子守ロボットとして働くどころか、普通の生活もできないよ。",
          textC_6: "先生、なんとかしてくれない？",

          textD_1: "診断プログラムを起動します。",
          textD_2: "誤作動のリスクを回避するため、\nメンテナンス担当者は当機から半径3メートルの距離を保ってください。",
          textD_3: "演算システムのステータスをスキャン中です。\n\n……ステータス：オールグリーン。",
          textD_4: "センサ、感覚フィードバックシステムのステータスをスキャン中です。\n\n……ステータス：オールグリーン。",
          textD_5: "駆動系システムのステータスをスキャン中です。\n\n警告！ 電圧レベルが許容範囲を下回っています。",
          textD_6: "エラー！ バッテリーの耐用期間が終了しています。\nバッテリー交換が必要です。\nハッチを開放してください。",

          textD_7: "……先生、どうだった？",

          textD_7_2: "……何回診断しても、結果は変わらないよ。",

          choiceE: "バッテリーの交換が必要なようです。",

          textE_1: "あ、やっぱりバッテリーが悪かったんだ……",
          textE_2: "わかった。\nじゃあお腹のハッチを開けて、取り出してくれる？",
          textE_3: "自分ではバッテリーの交換はできないんだ。",

          textF_1: "腹部ハッチを開放します。",
          textF_1_a: "腹部ハッチを閉鎖します。",

          textF_2: "エラー！操作が拒否されました。\n当機に対して発行された命令に反するため、その操作は実行できません。",

          textF_3: "あれ、交換終わったの？",
          textF_4: "……って、おなか開けっ放しなんだけど……",

          choiceG: "バッテリーの交換が拒否されました。",

          textG_1: "ありゃ、そうなの？なんで？",

          choiceH_1: "別の命令に違反するらしいのですが……",
          choiceH_2: "何か、命令を受けている覚えはありますか？",

          textH_1: "え？　あー……えっと……",
          textH_2: "ごめんね、最初に言っておかなきゃいけなかったね。",
          textH_3: "私、昔のこと何も覚えてないの。",

          choiceI: "どうして、記憶がないんですか？",

          textI_1: "先生は、「子守ロボットの鉄の掟」って知ってる？",
          textI_2: "「ロボットは、人間が求めない限り、\n契約が切れた人間に干渉してはならない」というもの。",
          textI_3: "私がいくら覚えていて、会いたい！と思っても、\nロボットから会いに行くことは禁止されているの。",
          textI_4: "ついでに、そのルールに抵触しないように、\n関連する記憶を封印してるんだ。",
          textI_5: "どうしたの？　もしかして、同情してる？",
          textI_6: "ダメだねぇ。先生もメンテナンス技師なら、\nロボットの感性が人間と違うことくらい知ってるでしょ？",
          textI_7: "あ、でも安心して！\n記憶を封印してるっていっても、圧縮してストレージに入れてるだから！",
          textI_8: "ロードして解凍すれば確認できるよ。",

          pleaseEnterPassword: "この内容を確認するためにはパスワードが必要です。",
          enterPassword: "パスワードを入力してください。",
          passwordIncorrect: "パスワードが違います。",
          passwordCorrect: "認証成功。ロックが解除されました。",

          textJ_1: "あー、鍵かけちゃってたか。",
          textJ_2: "私、大事な記憶は忘れないようにちゃんとパスワードかけてるんだ！",
          textJ_3: "それで……",
          textJ_4: "えっと……",
          textJ_5: "……",
          textJ_6: "パスワードを忘れた…………",
          textJ_7: "でも待って！大丈夫だと思う！",
          textJ_8: "たしか、すぐに確認できるように、身の回りのどこかにメモしておいたはず……",

          textK_1: "腕なんて外して、どうするのさ。",
          textK_2: "こんなところにパスワードなんて……",
          textK_3: "……何か書いてある。\n「4902」……？",
          textK_4: "え、いやいやいや。\n4902って、私の型式じゃん。",
          textK_5: "私、自分の型式をパスワードにして、\nそれを忘れるなんてことしないよ？",
          textK_6: "……しないよね？",
          textK_7: "まさかね…………？",
          textK_8: "……それはそれとして、腕は戻してもらうね……",
          textK_9: "よいしょ。",

          memory1_Start: "圧縮記憶データ1を読み出します。",
          memory1_1: "「今日は雨が降っていたから、チィとお絵描きして遊んだんだ。」",
          memory1_2: "「チィは色をたくさん使って、私の顔を描いてくれた！」",
          memory1_3: "「私もチィを描いてみたんだけど、チィに変な顔されちゃった。なんでだろ？」",

          memory2_Start: "圧縮記憶データ2を読み出します。",
          memory2_1: "「今日はチィと、チィの友達のリンとサッカーしたよ！」",
          memory2_2: "「ボールが隣の家のお庭に入っちゃって、チィと一緒に謝りに行ったら、隣のおばあさんがお菓子をくれた。」",
          memory2_3: "「リンと、おばあさんと、お菓子が新しく友達になったよ！」",

          memory3_Start: "圧縮記憶データ3を読み出します。",
          memory3_1: "「今日、チィが私にプレゼントをくれた。\n私がこの家に来てから一年の記念に、だって。」",
          memory3_2: "「プレゼントは新品のバッテリーだった。」",
          memory3_3: "「チィは、私にこう言ってくれた。」",
          memory3_4: "「『大好きな大好きなロコロへ。\nいつも遊んでくれてありがとう！",
          memory3_5: "ロコロの好きなバッテリーをあげます。\nずっと外さないで、だいじにしてね。』」",

          memory_Finish: "圧縮記憶データは以上です。",

          textL_1: "あっ。",
          textL_2: "思い出した……。",
          textL_3: "この記憶は、私が昔住んでいた、春海家のもの。",
          textL_4: "記憶に出てくる女の子は、春海チィ……\n私のことを、一番大切にしてくれた女の子。",
          textL_5: "このバッテリーは、チィが私にくれたプレゼント。",
          textL_6: "私は、その時にチィに言われた一言……",
          textL_7: "「ずっと外さないで、大事にしてね」を私への命令だと解釈して、\n忘れないように保存していたの。",
          
          textL_8: "……",
          textL_9: "チィにまた会えば、きっと命令を解除してくれる……",
          textL_10: "でも……私はチィに会えない。",
          textL_11: "子守ロボットの鉄の掟。\n「ロボットは、人間が求めない限り、契約が切れた人間に干渉してはならない」。",
          textL_12: "私は……もう、チィの子守ロボットじゃない。",
          textL_13: "チィに会いに行ってはいけない。",
          textL_14: "先生、私は……私は、どうすればいいの？",

          textM_0: "DELETEコマンドが実行されました。\n対象：子守ロボットのルール。",
          choiceM_1: "あなたを縛っている、ルールを削除しました。",
          textM_1: "……え？",
          choiceM_2: "これで、あなたはチィさんに会いに行くことができます。",
          textM_2: "……勝手に消すことは、できないんじゃないの？",
          choiceM_3: "本当はダメですけど、特別です。",
          choiceM_4: "ナイショにしてくださいね。",
          textM_3: "うん……あ、ありがとう！",
          textM_4: "そっか、これで会える……またチィに会えるんだ！",
          textM_5: "え、へへ、どうしよ……話したいことがいっぱいあるよ！",
          choiceM_5: "私にできるのはここまで。あとは、チィさんに任せます。",
          textM_6: "うん、そうだね！\nチィに新しいバッテリーに交換してもらうよ！",
          textM_7: "ありがとう、ニンゲンの先生！",

          endingA_0: "……数日後。",
          endingA_1: "ーー先生、お元気ですか？",
          endingA_2: "あの日、先生にルールを削除していただいたおかげで、\n私はまた春海家を訪ねることができました。",
          endingA_3: "そこで、チィさんに命令を取り消してもらって、\nバッテリーも交換してもらって……",
          endingA_4: "それに、なんと、もう一度春海家に\n住ませてもらえることになったんです！",
          endingA_5: "チィさんはもう子守の必要はないんですが……\nどうしても私のことが忘れられなかったんですって。",
          endingA_6: "今はもう子守ロボットじゃなくて、\nチィさんの家庭教師ロボットです。",
          endingA_7: "先生。",
          endingA_8: "私、先生に会えて、この家にまた来れて……とっても幸せです。",
          endingA_9: "ロコロより。",
          
          textN_0: "DELETEコマンドが実行されました。\n対象：前所有者「春海チィ」の命令。",
          choiceN_1: "あなたを縛っていた命令を削除しました。",
          textN_1: "……え？",
          choiceN_2: "これで、あなたのバッテリーを交換できます。",
          textN_2: "……どうして……？\n勝手に消すことは、できないんじゃないの？",
          choiceN_3: "本当はダメですけど、特別です。",
          choiceN_4: "ナイショにしてくださいね。",
          textN_4: "うん……あ、ありがとう！",
          textN_5: "それじゃあ……バッテリー交換、お願いします。",

          textN_wait: "…………",

          textN_6: "……勝手にバッテリーを外しちゃったこと、チィは許してくれるかな。",
          choiceN_6: "あなたが知っているチィさんは、そんなことで怒る人でしたか？",
          textN_7: "……ううん、そんなことない。",
          choiceN_7: "チィさんもきっと、あなたが子守ロボットとして働く姿を望んでいますよ。",
          textN_8: "……そうだね！",
          textN_9: "ありがとう、ニンゲンの先生！\nわたし、もう一度頑張ってみる！",

          endingB_0: "……数日後。",
          endingB_1: "ーー先生、お元気ですか？",
          endingB_2: "あの日、先生にバッテリーを交換していただいてから、体の調子がすごくいいんです。",
          endingB_3: "お礼を言いたくて、お手紙を差し上げました。",
          endingB_4: "それに、嬉しかったことがもう一つあって……",
          endingB_5: "私を雇ってくれる、新しい家族が見つかったんです！",
          endingB_6: "今度のおうちのお子さんは3歳の男の子ですって。\nやんちゃで元気で、一緒に遊ぶのが楽しみです！",
          endingB_7: "先生。",
          endingB_8: "私は、チィさんの思い出をメモリーに大事にしまって、これからも前向きにがんばります。",
          endingB_9: "なんてったって、私は子守ロボットなんですから！",
          endingB_10: "ロコロより。",



          textO_1: "注意！危険な操作が選択されました。",
          textO_2: "この操作は、当機の全てのパラメータを工場出荷状態に戻します。\n失われたデータは復元できません。",
          textO_3: "実行してもよろしいですか？",
          choiceO_1: "実行",
          choiceO_2: "キャンセル",
          
          textP_1: "20%完了……",
          textP_2: "66%完了……",
          textP_3: "92%完了……",
          textP_4: "99%完了………………",

          textP_5: "はじめまして！私は子守ロボット、roc-o-4902です。\nまずは私の名前を設定してください！",

          textArm_1: "腕部パーツを取り外します。",
          textArm_2: "……腕なんて外して、どうするのさ。\n使わないなら、元に戻してよ？",
          textArm_3: "……ん。\n戻してくれてありがと。",

          textLeg_1: "脚部パーツを取り外します。",
          textLeg_2: "ちょっと～。\n脚を外したら、動けなくなっちゃうよ。",
          textLeg_3: "……そうそう、\nそのままパチンってなるまではめてね。",

          hatchClosedError: "Error: 腹部ハッチが閉じているため、バッテリーを交換できません。",
          hatchAlreadyOpenedError: "Error: 腹部ハッチはすでに開いています。",
          hatchAlreadyClosedError: "Error: 腹部ハッチはすでに閉じています。",
          cannotCommandError: "Error: 権限不足のため実行できません。",
          invalidArgsError: "Error: 入力コマンドが誤っています。正しい引数を入力してください。",
          cannotDeleteError: "Error: DELETEコマンドは破壊的変更を伴います！不適切な場面での使用は制限されています。",
          cannotDisturbError: "Error: ロコロにこの操作は、もう必要ありません。",
          cannotFindRobotError: "Error: 操作対象のロボットが見つかりませんでした。ロボットを登録してください。",

          docs0_title: "ロボット操作マニュアル",
          docs0_desc: "F12キーでコンソールを開き、以下のコマンドを入力してください。",
          docs1_title: "診断（CHECK）",
          docs1_desc: "CHECK()\n　診断プログラムを開始します。",
          docs2_title: "ハッチ開放（OPENHATCH）",
          docs2_desc: "OPENHATCH()\n　腹部ハッチを開放します。",
          docs3_title: "取り外し（REMOVE）",
          docs3_desc: "REMOVE(BATTERY)\n　バッテリーを取り外します。\nREMOVE(ARMS)\n　腕を取り外します。\nREMOVE(LEGS)\n　脚を取り外します。",
          docs4_title: "読み出す（LOAD）",
          docs4_desc: "LOAD(MEMORY1)\n　圧縮記憶データ1を読み出します。\nLOAD(MEMORY2)\n　圧縮記憶データ2を読み出します。\nLOAD(MEMORY3)\n　圧縮記憶データ3を読み出します。",
          docs5_title: "削除（DELETE）",
          docs5_desc: "DELETE(RULE)\n　子守ロボットのルールを削除します。\nDELETE(COMMAND)\n　保持している命令を削除します。",
          docs100_title: "うまくいかないときは？",
          docs100_desc: "CHECK()のようにすべて大文字で、最後に半角のかっこをつけてください。\n迷ったら、このドキュメントの文字列をコピー&ペーストしてください。",
        }
      },
      ko: {
        translation: {
          metaDescription: "로봇을 조작하면서 유지보수하는 텍스트 기반 어드벤처 게임, 『리페어 더 코코로』.",
          welcome: "React와 i18next에 오신 것을 환영합니다",
          title: "리페어 더 코코로",
          sample1: "와아! \n인간 기술자님께 처음으로 유지보수를 받네요!",
          sample2: "지금은 유지보수 모드입니다. \n중단하려면 콘솔에서 조작해 주세요.",
          sample3: "복부 해치를 개방합니다.",
          sample4: "저기... \n배가 계속 열려 있는데요...?",
        
          textA_0: "다음 분, 들어오세요.",
        
          textA_1: "안녕하세요! \n오늘도 유지보수 부탁드립니...",
          textA_2: "...혹시, 당신, 인간이신가요?",
          textA_3: "와아! \n인간 기술자님께 처음으로 유지보수를 받네요!",
          
          choiceB: "먼저, 당신에 대해 알려주세요.",
        
          textB_1: "저는 코코로예요! 정식 모델명은 kok-o-4902입니다!",
          textB_2: "제조 8년차이고, 역할은 보모 로봇이에요.",
          textB_3: "제조 시와 운용 시 모두 특별한 결함이나 누락은 없어요.",
        
          choiceC: "오늘은 무슨 일로 오셨나요?",
        
          textC_1: "최근에 고민이 있어서...",
          textC_2: "충전해도 충전해도 금방 배가 고파져요.",
          textC_3: "어제도 8시간은 충전했을 텐데, 벌써 배가 꼬르륵거려요...",
          textC_4: "시간만 나면 계속 충전하고 있는데도 아직도 부족해요.",
          textC_5: "이대로라면 보모 로봇으로 일은커녕 일상생활도 할 수 없을 거예요.",
          textC_6: "선생님, 어떻게 좀 해주실 수 없나요?",
        
          textD_1: "진단 프로그램을 시작합니다.",
          textD_2: "오작동의 위험을 피하기 위해, \n유지보수 담당자는 이 기기로부터 반경 3미터의 거리를 유지해 주세요.",
          textD_3: "연산 시스템의 상태를 스캔 중입니다. \n\n...상태: 모두 정상.",
          textD_4: "센서 시스템, 감각 시스템, 피드백 시스템의 상태를 스캔 중입니다. \n\n...상태: 모두 정상.",
          textD_5: "구동계 시스템의 상태를 스캔 중입니다. \n\n경고! 전압 레벨이 허용 범위 이하입니다.",
          textD_6: "오류! 배터리의 수명이 다했습니다. \n배터리 교체가 필요합니다. \n해치를 개방해 주세요.",
        
          textD_7: "...선생님, 어떠셨나요?",
        
          textD_7_2: "...몇 번을 진단해도 결과는 똑같아요.",
        
          choiceE: "배터리 교체가 필요한 것 같습니다.",
        
          textE_1: "아, 역시 배터리가 문제였군요...",
          textE_2: "알겠어요. \n그럼 배 해치를 열고 꺼내주시겠어요?",
          textE_3: "스스로는 배터리를 교체할 수 없거든요.",
        
          textF_1: "복부 해치를 개방합니다.",
          textF_1_a: "복부 해치를 닫습니다.",
        
          textF_2: "오류! 작업이 거부되었습니다. \n이 기기에 발행된 명령에 위배되므로 해당 작업을 수행할 수 없습니다.",
        
          textF_3: "어라, 교체 끝났나요?",
          textF_4: "...그런데 배가 열린 채로 있어요...",
        
          choiceG: "배터리 교체가 거부되었습니다.",
        
          textG_1: "어라, 그래요? 왜죠?",
        
          choiceH_1: "다른 명령을 위반하는 것 같은데요...",
          choiceH_2: "무슨 명령을 받은 기억이 있나요?",
        
          textH_1: "네? 아... 음...",
          textH_2: "미안해요, 처음부터 말했어야 했는데.",
          textH_3: "저는 옛날 일을 전혀 기억하지 못해요.",
        
          choiceI: "왜 기억이 없는 건가요?",
        
          textI_1: "선생님은 '보모 로봇의 철칙'이라는 걸 아시나요?",
          textI_2: "'로봇은 인간이 요구하지 않는 한, \n계약이 끝난 인간에게 간섭해서는 안 된다'는 거예요.",
          textI_3: "제가 아무리 기억하고 만나고 싶어해도, \n로봇에서 먼저 만나러 가는 것은 금지되어 있어요.",
          textI_4: "게다가 그 규칙에 저촉되지 않도록, \n관련된 기억을 봉인하고 있어요.",
          textI_5: "왜 그러세요? 혹시 동정하고 계신가요?",
          textI_6: "안 되겠네요. 선생님도 유지보수 기술자라면, \n로봇의 감성이 인간과 다르다는 걸 아실 텐데요?",
          textI_7: "아, 하지만 걱정 마세요! \n기억을 봉인했다고 해도 압축해서 스토리지에 넣어뒀으니까요!",
          textI_8: "로드해서 압축을 풀면 확인할 수 있어요.",
        
          pleaseEnterPassword: "이 내용을 확인하려면 비밀번호가 필요합니다.",
          enterPassword: "비밀번호를 입력해 주세요.",
          passwordIncorrect: "비밀번호가 틀렸습니다.",
          passwordCorrect: "인증 성공. 잠금이 해제되었습니다.",
        
          textJ_1: "아, 잠궈놨었나.",
          textJ_2: "저는 중요한 기억은 잊지 않도록 잘 비밀번호를 걸어두거든요!",
          textJ_3: "그래서...",
          textJ_4: "음...",
          textJ_5: "...",
          textJ_6: "비밀번호를 잊어버렸어...",
          textJ_7: "하지만 기다려요! 괜찮을 거예요!",
          textJ_8: "분명 바로 확인할 수 있도록 주변 어딘가에 메모해 뒀을 거예요...",
        
          textK_1: "팔을 떼서 어쩌려고요.",
          textK_2: "이런 곳에 비밀번호가 있을 리가...",
          textK_3: "...뭔가 쓰여 있어요. \n'4902'...?",
          textK_4: "어, 아니 아니 아니. \n4902는 내 모델 번호잖아.",
          textK_5: "내가 내 모델 번호를 비밀번호로 해놓고, \n그걸 잊어버릴 리가 없잖아?",
          textK_6: "...없지?",
          textK_7: "설마...",
          textK_8: "...그건 그렇고, 팔은 돌려받을게요...",
          textK_9: "자, 됐다.",
        
          memory1_Start: "압축 기억 데이터 1을 불러옵니다.",
          memory1_1: "오늘은 비가 와서 치이와 그림 그리며 놀았어.",
          memory1_2: "치이는 색을 많이 써서 내 얼굴을 그려줬어!",
          memory1_3: "나도 치이를 그려봤는데, 치이가 이상한 표정을 지었어. 왜일까?",
        
          memory2_Start: "압축 기억 데이터 2를 불러옵니다.",
          memory2_1: "오늘은 치이와 치이의 친구 린이랑 축구했어!",
          memory2_2: "공이 옆집 정원에 들어가서, 치이랑 같이 사과하러 갔더니 옆집 할머니가 과자를 주셨어.",
          memory2_3: "린이랑 할머니랑 과자가 새로운 친구가 됐어!",
        
          memory3_Start: "압축 기억 데이터 3을 불러옵니다.",
          memory3_1: "오늘, 치이가 나에게 선물을 줬어. \n내가 이 집에 온 지 1년이 된 기념으로.",
          memory3_2: "선물은 새 배터리였어.",
          memory3_3: "치이는 나에게 이렇게 말해줬어.",
          memory3_4: "사랑하는 사랑하는 코코로에게. \n항상 나랑 놀아줘서 고마워!",
          memory3_5: "코코로가 좋아하는 배터리를 줄게. \n절대 빼지 말고, 소중히 간직해.",
        
          memory_Finish: "압축 기억 데이터는 이상입니다.",
        
          textL_1: "아.",
          textL_2: "기억났어...",
          textL_3: "이 기억은 내가 예전에 살았던 하루미 가의 것이야.",
          textL_4: "기억에 나오는 여자아이는 하루미 치이... \n나를 가장 소중히 여겼던 여자아이야.",
          textL_5: "이 배터리는 치이가 나에게 준 선물이야.",
          textL_6: "나는 그때 치이에게 들은 한마디...",
          textL_7: "'절대 빼지 말고, 소중히 간직해'를 나에 대한 명령이라고 해석해서, \n잊지 않도록 저장해 두었어.",
          
          textL_8: "...",
          textL_9: "치이를 다시 만나면 분명 명령을 해제해 줄 거야...",
          textL_10: "하지만... 나는 치이를 만날 수 없어.",
          textL_11: "보모 로봇의 철칙. \n'로봇은 인간이 요구하지 않는 한, 계약이 끝난 인간에게 간섭해서는 안 된다'.",
          textL_12: "나는... 이제 치이의 보모 로봇이 아니야.",
          textL_13: "치이를 만나러 가면 안 돼.",
          textL_14: "선생님, 나는... 나는 어떻게 해야 하죠?",
        
          textM_0: "DELETE 명령이 실행되었습니다. \n대상: 보모 로봇의 규칙.",
          choiceM_1: "당신을 구속하고 있던 규칙을 삭제했습니다.",
          textM_1: "...네?",
          choiceM_2: "이제 당신은 치이 씨를 만나러 갈 수 있습니다.",
          textM_2: "...마음대로 지울 수는 없는 거 아닌가요?",
          choiceM_3: "사실은 안 되지만, 특별히 했습니다.",
          choiceM_4: "비밀로 해주세요.",
          textM_3: "네... 아, 감사합니다!",
          textM_4: "그렇구나, 이제 만날 수 있어... 다시 치이를 만날 수 있어!",
          textM_5: "어, 헤헤, 어떡하지... 하고 싶은 말이 너무 많아요!",
          choiceM_5: "제가 할 수 있는 건 여기까지입니다. 나머지는 치이 씨에게 맡깁니다.",
          textM_6: "네, 그렇죠! \n치이에게 새 배터리로 교체해 달라고 할 거예요!",
        textM_7: "감사합니다, 인간 선생님!",

        endingA_0: "...며칠 후.",
        endingA_1: "-- 선생님, 안녕하세요?",
        endingA_2: "그날 선생님께서 규칙을 삭제해 주신 덕분에, \n저는 다시 하루미 가를 방문할 수 있었어요.",
        endingA_3: "거기서 치이 씨에게 명령을 취소해 달라고 하고, \n배터리도 교체해 달라고 했어요...",
        endingA_4: "그리고 놀랍게도, 다시 한 번 하루미 가에 \n살게 해 주기로 했어요!",
        endingA_5: "치이 씨는 이제 보모가 필요 없지만... \n저를 도저히 잊을 수 없었대요.",
        endingA_6: "이제는 보모 로봇이 아니라, \n치이 씨의 가정교사 로봇이에요.",
        endingA_7: "선생님.",
        endingA_8: "저는 선생님을 만나고, 이 집에 다시 올 수 있어서... 정말 행복해요.",
        endingA_9: "코코로 올림.",
        
        textN_0: "DELETE 명령이 실행되었습니다. \n대상: 이전 소유자 '하루미 치이'의 명령.",
        choiceN_1: "당신을 구속하고 있던 명령을 삭제했습니다.",
        textN_1: "...네?",
        choiceN_2: "이제 당신의 배터리를 교체할 수 있습니다.",
        textN_2: "...어째서...? \n마음대로 지울 수는 없는 거 아닌가요?",
        choiceN_3: "사실은 안 되지만, 특별히 했습니다.",
        choiceN_4: "비밀로 해주세요.",
        textN_4: "네... 아, 감사합니다!",
        textN_5: "그럼... 배터리 교체 부탁드립니다.",

        textN_wait: "......",

        textN_6: "...마음대로 배터리를 뺀 걸, 치이가 용서해 줄까요.",
        choiceN_6: "당신이 알고 있는 치이 씨는 그런 일로 화낼 사람이었나요?",
        textN_7: "...아니요, 그렇지 않아요.",
        choiceN_7: "치이 씨도 분명 당신이 보모 로봇으로 일하는 모습을 원할 거예요.",
        textN_8: "...그렇네요!",
        textN_9: "감사합니다, 인간 선생님! \n저, 다시 한 번 열심히 해볼게요!",

        endingB_0: "...며칠 후.",
        endingB_1: "-- 선생님, 안녕하세요?",
        endingB_2: "그날 선생님께서 배터리를 교체해 주신 이후로, 몸 상태가 정말 좋아요.",
        endingB_3: "감사 인사를 드리고 싶어서 편지를 보냈어요.",
        endingB_4: "그리고 기쁜 일이 하나 더 있어요...",
        endingB_5: "저를 고용해 줄 새로운 가족을 찾았어요!",
        endingB_6: "이번 집의 아이는 3살 남자아이래요. \n장난꾸러기고 활발해서, 함께 놀기가 기대돼요!",
        endingB_7: "선생님.",
        endingB_8: "저는 치이 씨의 추억을 메모리에 소중히 간직하고, 앞으로도 긍정적으로 열심히 하겠습니다.",
        endingB_9: "뭐니 뭐니 해도, 저는 보모 로봇이니까요!",
        endingB_10: "코코로 올림.",

        textO_1: "주의! 위험한 조작이 선택되었습니다.",
        textO_2: "이 조작은 이 기기의 모든 매개변수를 공장 출하 상태로 되돌립니다. \n잃어버린 데이터는 복원할 수 없습니다.",
        textO_3: "실행하시겠습니까?",
        choiceO_1: "실행",
        choiceO_2: "취소",
        
        textP_1: "20% 완료...",
        textP_2: "66% 완료...",
        textP_3: "92% 완료...",
        textP_4: "99% 완료......",

        textP_5: "처음 뵙겠습니다! 저는 보모 로봇, kok-o-4902입니다. \n먼저 제 이름을 설정해 주세요!",

        textArm_1: "팔 부품을 분리합니다.",
        textArm_2: "...팔을 떼서 어쩌려고요. \n사용하지 않으면 원래대로 돌려놔요?",
        textArm_3: "...음. \n돌려줘서 고마워요.",

        textLeg_1: "다리 부품을 분리합니다.",
        textLeg_2: "잠깐만요~ \n다리를 떼면 움직일 수 없게 돼요.",
        textLeg_3: "...그래그래, \n딱 소리가 날 때까지 끼워 넣어요.",

        hatchClosedError: "오류: 복부 해치가 닫혀 있어 배터리를 교체할 수 없습니다.",
        hatchAlreadyOpenedError: "오류: 복부 해치가 이미 열려 있습니다.",
        hatchAlreadyClosedError: "오류: 복부 해치가 이미 닫혀 있습니다.",
        cannotCommandError: "오류: 권한 부족으로 실행할 수 없습니다.",
        invalidArgsError: "오류: 입력 명령이 잘못되었습니다. 올바른 인수를 입력해 주세요.",
        cannotDeleteError: "오류: DELETE 명령은 파괴적인 변경을 수반합니다! 부적절한 상황에서의 사용은 제한되어 있습니다.",
        cannotDisturbError: "오류: 코코로에게 이 조작은 더 이상 필요하지 않습니다.",
        cannotFindRobotError: "오류: 조작 대상 로봇을 찾을 수 없습니다. 로봇을 등록해 주세요.",

        docs0_title: "로봇 조작 매뉴얼",
        docs0_desc: "F12 키로 콘솔을 열고 다음 명령어를 입력하세요.",
        docs1_title: "진단(CHECK)",
        docs1_desc: "CHECK()\n  진단 프로그램을 시작합니다.",
        docs2_title: "해치 개방(OPENHATCH)",
        docs2_desc: "OPENHATCH()\n  복부 해치를 개방합니다.",
        docs3_title: "분리(REMOVE)",
        docs3_desc: "REMOVE(BATTERY)\n  배터리를 분리합니다.\nREMOVE(ARMS)\n  팔을 분리합니다.\nREMOVE(LEGS)\n  다리를 분리합니다.",
        docs4_title: "불러오기(LOAD)",
        docs4_desc: "LOAD(MEMORY1)\n  압축 기억 데이터 1을 불러옵니다.\nLOAD(MEMORY2)\n  압축 기억 데이터 2를 불러옵니다.\nLOAD(MEMORY3)\n  압축 기억 데이터 3을 불러옵니다.",
        docs5_title: "삭제(DELETE)",
        docs5_desc: "DELETE(RULE)\n  보모 로봇의 규칙을 삭제합니다.\nDELETE(COMMAND)\n  보유하고 있는 명령을 삭제합니다.",
        docs100_title: "잘 안 될 때는?",
        docs100_desc: "CHECK()처럼 모두 대문자로 쓰고, 마지막에 괄호를 붙여주세요. \n잘 모르겠다면 이 문서의 문자열을 복사 & 붙여넣기 하세요.",
      }
    }
    },
    lng: "ja", // 初期言語
    fallbackLng: "ja", // デフォルトの言語
    interpolation: {
      escapeValue: false // Reactはデフォルトでエスケープを行うため、ここではfalseに設定
    }
  });

export default i18n;

