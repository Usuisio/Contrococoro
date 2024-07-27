import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          welcome: "Welcome to React and i18next",
          title: "Repair the cocoro",
          sample1: "Amazing! It's the first time a human technician is doing maintenance for me!",
          sample2: "Currently in maintenance mode. If you want to interrupt, please use the console.",
          sample3: "Opening the abdominal hatch.",
          sample4: "Um... My stomach is still open...",



          consoleDeleteError: "Error: The DELETE command involves destructive changes! Inappropriate use is restricted.",
        
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

          textB_1: "私はロコロ！　正式型式はloc-o-4902です！",
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
          textD_2: "誤作動のリスクを回避するため、メンテナンス担当者は当機から半径3メートルの距離を保ってください。",
          textD_3: "演算システムのステータスをスキャン中です。\n\n……ステータス：オールグリーン。",
          textD_4: "センサーシステム、感覚システム、フィードバックシステムのステータスをスキャン中です。\n\n……ステータス：オールグリーン。",
          textD_5: "駆動系システムのステータスをスキャン中です。\n\n警告！ 電圧レベルが許容範囲を下回っています。",
          textD_6: "エラー！ バッテリーの耐用期間が終了しています。\nバッテリー交換が必要です。\nハッチを開放してください。",

          textD_7: "……先生、どうだった？",

          textD_7_2: "……何回診断しても、結果は変わらないよ。",

          choiceE: "バッテリーの交換が必要なようです。",

          textE_1: "あ、やっぱりバッテリーが悪かったんだ……",
          textE_2: "わかった、じゃあお腹のハッチを開けて、取り出してくれる？",
          textE_3: "自分だとバッテリーは交換できないんだ。",

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

          textI_1: "先生は、子守ロボットのルール第8条って知ってる？",
          textI_2: "「ロボットは、人間が求めない限り、契約が切れた人間に干渉してはならない」というもの。",
          textI_3: "私がいくら覚えていて、会いたい！と思ったとしても、ロボットから会いに行くことは禁止されているの。",
          textI_4: "ついでに、そのルールに引っかからないように、関連する記憶を封印してるんだ。",
          textI_5: "どうしたの？　もしかして、同情してる？",
          textI_6: "ダメだねぇ。先生もメンテナンス技師なら、ロボットの感性が人間と違うことくらい知ってるでしょ？",
          textI_7: "あ、でも安心して！\n記憶を封印してるっていっても、圧縮してストレージに入れてるだから！",
          textI_8: "ロードして解凍すれば確認できるよ。",

          textI_9: "この内容を確認するためにはパスワードが必要です。",
          textI_10: "パスワードを入力してください。",
          textI_11: "パスワードが違います。",

          textJ_1: "あー、鍵かけちゃってたか。",
          textJ_2: "私、大事な記憶は忘れないようにちゃんとパスワードかけてるんだ！",
          textJ_3: "それで……",
          textJ_4: "えっと……",
          textJ_5: "……",
          textJ_6: "パスワードを忘れた…………",
          textJ_7: "でも待って！大丈夫だと思う！",
          textJ_8: "たしか、私がすぐに思い出せるものにしたはず……",

          textK_1: "腕なんて外して、どうするのさ。",
          textK_2: "こんなところにパスワードは書いてないよ……",
          textK_3: "……書いてある。",
          textK_4: "「4902」……？",
          textK_5: "え、いやいやいや。\n4902って、私の型式じゃん。",
          textK_7: "私、自分の型式をパスワードにして、\nそれを忘れるなんてことしないよ！",
          textK_8: "……ないよね？",
          textK_9: "まさかね…………？",

          memoryA_1: "今日は雨が降っていたから、チィとお絵描きして遊んだんだ。",
          memoryA_2: "チィは色をたくさん使って、私の顔を描いてくれた！",
          memoryA_3: "私もチィを描いてみたんだけど、チィに変な顔されちゃった。なんでだろ？",

          memoryB_1: "今日はチィと、チィの友達のリンとサッカーしたよ！",
          memoryB_2: "ボールが隣の家のお庭に入っちゃって、チィと一緒に誤りに行ったら、隣のおばあさんがお菓子をくれた。",
          memoryB_3: "リンと、おばあさんと、お菓子が新しく友達になったよ！",

          memoryC_1: "今日、チィが私にプレゼントをくれた。\n私がこの家に来てから一年の記念に、だって。",
          memoryC_2: "プレゼントは新品のバッテリーだった。",
          memoryC_3: "チィは、私にこう言ってくれた。",
          memoryC_4: "「大好きな大好きなロコロへ。\nいつも遊んでくれてありがとう！",
          memoryC_5: "ロコロの好きなバッテリーをあげます。\nずっと外さないで、だいじにしてね。」",

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
          textL_11: "子守ロボットのルール第8条。\n「ロボットは、人間が求めない限り、契約が切れた人間に干渉してはならない」。",
          textL_12: "私は……もう、チィの子守ロボットじゃない。",
          textL_13: "チィに会いに行ってはいけない。",
          textL_14: "先生、私は……私は、どうすればいいの？",

          choiceM_1: "子守ロボットのルール、第8条を削除しました。",
          textM_1: "……え？",
          choiceM_2: "これで、あなたはチィさんに会いに行くことができます。",
          textM_2: "勝手に消すことは、できないんじゃないの？",
          choiceM_3: "本当はダメですけど、特別です。",
          choiceM_4: "ナイショにしてくださいね。",
          textM_3: "うん……あ、ありがとう！",
          textM_4: "そっか、これで会える……またチィに会えるんだ！",
          textM_5: "え、へへ、どうしよ……話したいことがいっぱいあるよ！",
          choiceM_5: "私にできるのはここまで。あとは、チィさんに任せます。",
          textM_6: "うん、そうだね！\nチィに新しいバッテリーに交換してもらうよ！",
          textM_7: "ありがとう、ニンゲンの先生！",

          endingA_1: "ーー先生、お元気ですか？",
          endingA_2: "あの日、先生にルールを削除していただいたおかげで、\n私はまた春海家を訪ねることができました。",
          endingA_3: "そこで、チィさんに命令を取り消してもらって、\nバッテリーも交換してもらって……",
          endingA_4: "それに、なんと、もう一度春海家に\n住ませてもらえることになったんです！",
          endingA_5: "チィさんはもう子守の必要はないんですが……\nどうしても私のことが忘れられなかったんですって。",
          endingA_6: "今はもう子守ロボットじゃなくて、\nチィさんの家庭教師ロボットです。",
          endingA_7: "先生。",
          endingA_8: "私、先生に会えて、この家にまた来れて……とっても幸せです。",
          endingA_9: "ロコロより。",

          choiceN_1: "バッテリーを外すな、という命令を削除しました。",
          textN_1: "……え？",
          choiceN_2: "これで、あなたのバッテリーを交換できます。",
          textN_2: "……どうして……？",
          textN_3: "勝手に消すことは、できないんじゃないの？",
          choiceN_3: "本当はダメですけど、特別です。",
          choiceN_4: "ナイショにしてくださいね。",
          textN_4: "うん……あ、ありがとう！",
          textN_5: "それじゃあ……バッテリー交換、お願いします。",

          textN_6: "……勝手にバッテリーを外しちゃったこと、チィは許してくれるかな。",
          choiceN_6: "あなたが知っているチィさんは、そんなことで怒る人でしたか？",
          textN_7: "……ううん、そんなことない。",
          choiceN_7: "チィさんもきっと、あなたが子守ロボットとして働く姿を望んでいますよ。",
          textN_8: "……そうだね！",
          textN_9: "ありがとう、ニンゲンの先生！\nわたし、もう一度頑張ってみる！",

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

          textP_5: "はじめまして！私は子守ロボット、loc-o-4902です。\nまずは私の名前を設定してください！",

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
          consoleDeleteError: "Error: DELETEコマンドは破壊的変更を伴います！不適切な場面での使用は制限されています。",
        
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
          docs100_desc: "CHECK()のようにすべて大文字で、最後にかっこをつけてください。\n迷ったら、このドキュメントの文字列をコピー&ペーストしてください。",
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

