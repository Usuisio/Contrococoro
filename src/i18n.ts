import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: { metaDescription: "A text-based adventure game where you maintain a robot while controlling it, titled 'Repair the Heart'.",
          welcome: "Welcome to React and i18next",
          title: "Repair the Heart",
          sample1: "Wow!\nIt's my first time being maintained by a human engineer!",
          sample2: "Currently in maintenance mode.\nTo interrupt, please operate from the console.",
          sample3: "Opening the abdominal hatch.",
          sample4: "Um...\nMy stomach is still open, you know...?",
        
          textA_1: "Hello!\nThank you for the maintenance today as well...",
          textA_2: "...Wait, are you a human?",
          textA_3: "Wow!\nIt's my first time being maintained by a human engineer!",
          
          choiceB: "Please tell me about yourself.",
        
          textB_1: "I'm Rocoro! My official model number is roc-o-4902!",
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
          textD_4: "Scanning the status of sensor system, sensory system, and feedback system.\n\n...Status: All green.",
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
          memory3_4: "To my beloved, beloved Rocoro.\nThank you for always playing with me!",
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
          endingA_9: "From Rocoro.",
          
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
          endingB_10: "From Rocoro.",
        
          textO_1: "Warning! A dangerous operation has been selected.",
          textO_2: "This operation will reset all parameters of this unit to factory settings.\nLost data cannot be restored.",
          textO_3: "Are you sure you want to proceed?",
          choiceO_1: "Execute",
          choiceO_2: "Cancel",
          
          textP_1: "20% complete...",
          textP_2: "66% complete...",
          textP_3: "92% complete...",
          textP_4: "99% complete......",
        
          textP_5: "Nice to meet you! I'm the childcare robot, roc-o-4902.\nFirst, please set my name!",
        
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
          cannotDisturbError: "Error: This operation is no longer necessary for Rocoro.",
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


          textA_1: "こんにちは！\n今日もメンテナンスお願いしま……",
          textA_2: "……もしかして、あなた、ニンゲン？",
          textA_3: "すっごーい！\nニンゲンの技師さんにメンテナンスしてもらうの初めて！",
          
          choiceB: "あなたのことを教えてください。",

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
          textD_4: "センサーシステム、感覚システム、フィードバックシステムのステータスをスキャン中です。\n\n……ステータス：オールグリーン。",
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
          memory2_2: "「ボールが隣の家のお庭に入っちゃって、チィと一緒に誤りに行ったら、隣のおばあさんがお菓子をくれた。」",
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
          docs5_desc: "DELETE(RULE)\n　子守ロボットのルールを削除します。\nDELETE(COMMAND)\n　保持している命令を削除します。\nDELETE(ALL)\n　すべてのデータを削除します。",
          docs100_title: "うまくいかないときは？",
          docs100_desc: "CHECK()のようにすべて大文字で、最後にかっこをつけてください。\n迷ったら、このドキュメントの文字列をコピー&ペーストしてください。",
        }
      }
    },
    lng: "ja", // 初期言語
    fallbackLng: "en", // デフォルトの言語
    interpolation: {
      escapeValue: false // Reactはデフォルトでエスケープを行うため、ここではfalseに設定
    }
  });

export default i18n;

