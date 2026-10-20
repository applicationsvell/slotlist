// 青ブタ（L青春ブタ野郎はバニーガール先輩の夢を見ない）
// img: [ファイル名（img/aobuta/ の中）, 一撃ページ内の場所, 写真の説明]
(function () {
  var G = 'https://1geki.jp/slot/l_ao_buta/';
  var C = 'https://chonborista.com/slot/orinpia-slot/261018/';
  var N = 'https://nana-press.com/kaiseki/machine/1214/';

  SHISA.add({
    id: 'aobuta',
    short: '青ブタ',
    full: 'L青春ブタ野郎はバニーガール先輩の夢を見ない',
    g: G,
    // 前のURL（#set など）で開いても近い項目に飛べるように
    old: { set: 'coins', zone: 'crystal', cz: 'czheroine', st: 'judge' },
    spec: [
      ['メーカー', 'オリンピア（平和）'],
      ['導入日', '2026年9月7日'],
      ['設定', 'L・2・3・4・5・6（設定1なし）'],
      ['初当り', '1/350.8〜1/207.8'],
      ['まとめた日', '2026年10月20日']
    ],
    sources: [
      ['一撃（1geki）解析ページ', G],
      ['ちょんぼりすた 青ブタ解析まとめ', C],
      ['なな徹（nana-press）青ブタ解析まとめ', N],
      ['ぱちタウン 青ブタ設定差まとめ', 'https://p-town.dmm.com/specials/5420']
    ],
    tabs: [
      { id: 'setting', label: '設定示唆', icon: 'star', groups: [
        {
          id: 'end', short: '終了画面', title: 'ST終了画面',
          where: 'ST「青ブタジャッジ」が終わったときの画面。キャラと一緒に出るスタンプも見る',
          src: [['一撃', G + '0/#dynamic_header_4'], ['ちょんぼりすた', C + '#ST'], ['なな徹', N + '38882/']],
          items: [
            { see: '梓川咲太', res: 'デフォルト', lv: 'base', img: ['ekishou70', '0/#dynamic_header_4', 'ST終了画面：梓川咲太'] },
            { see: '豊浜のどか', res: '奇数設定を示唆', lv: 'oe', img: ['ekishou71', '0/#dynamic_header_4', 'ST終了画面：豊浜のどか'] },
            { see: '古賀朋絵', res: '偶数設定を示唆', lv: 'oe', img: ['ekishou72', '0/#dynamic_header_4', 'ST終了画面：古賀朋絵'] },
            { see: '双葉理央', res: '高設定示唆（弱）', lv: 'blue', img: ['ekishou73', '0/#dynamic_header_4', 'ST終了画面：双葉理央'] },
            { see: '桜島麻衣', res: '高設定示唆（強）', lv: 'green', img: ['ekishou74', '0/#dynamic_header_4', 'ST終了画面：桜島麻衣'] },
            { see: '梓川かえで', sub: '吉スタンプ', res: '設定3以上濃厚', lv: 'gold', img: ['ekishou75', '0/#dynamic_header_4', 'ST終了画面：梓川かえで'] },
            { see: '牧之原翔子', sub: '良スタンプ', res: '設定4以上濃厚', lv: 'red', img: ['ekishou76', '0/#dynamic_header_4', 'ST終了画面：牧之原翔子'] },
            { see: '桜島麻衣（バニー）', sub: '優スタンプ', res: '設定5以上濃厚', lv: 'purple', img: ['ekishou77', '0/#dynamic_header_4', 'ST終了画面：桜島麻衣（バニー）'] },
            { see: 'ヒロイン全員集合', sub: '極スタンプ', res: '設定6濃厚', lv: 'rain', img: ['ekishou78', '0/#dynamic_header_4', 'ST終了画面：ヒロイン全員集合'] }
          ],
          imgsAfter: [['ekishou64', '0/#dynamic_header_4', 'スタンプの出かた（例：優スタンプ）']],
          note: [
            'スタンプは平和・オリンピア機でおなじみの並び（吉 → 良 → 優 → 極）。',
            'のどか・朋絵・理央・麻衣の4種は、なな徹と一撃は示唆ありとしていますが、ちょんぼりすたでは調査中の扱いです。'
          ]
        },
        {
          id: 'coins', short: '枚数表示', title: '獲得枚数表示',
          where: 'AT中に出る獲得枚数の表示',
          src: [['一撃', G + '0/#dynamic_header_7'], ['なな徹', N + '38855/']],
          items: [
            { see: '456枚', res: '設定4以上', lv: 'red', img: ['ekishou80', '0/#dynamic_header_7', '456枚表示'] },
            { see: '555枚', res: '設定5以上', lv: 'purple', img: ['ekishou81', '0/#dynamic_header_7', '555枚表示'] },
            { see: '821枚', sub: 'バニーの語呂', res: '設定5以上', lv: 'purple', img: ['ekishou83', '0/#dynamic_header_7', '821枚表示'] },
            { see: '666枚', res: '設定6', lv: 'rain', img: ['ekishou82', '0/#dynamic_header_7', '666枚表示'] }
          ]
        },
        {
          id: 'haruluna', short: 'ハルルナ', title: 'ハルルナPUSH',
          where: 'ST「青ブタジャッジ」のヒロインチャレンジ中',
          src: [['一撃', G + '0/#dynamic_header_8'], ['なな徹', N + '38855/']],
          items: [
            { see: 'ハルルナPUSHが出現', res: '設定4以上濃厚', lv: 'red', img: ['ekishou84', '0/#dynamic_header_8', 'ハルルナPUSH'] }
          ]
        },
        {
          id: 'nagi', short: '隠れ凪', title: '隠れ凪（打-WIN LITE）',
          where: '打-WIN LITEでQRを読むと出るセリフ。1000Gごとに変わる',
          src: [['一撃', G + '0/#dynamic_header_9'], ['ちょんぼりすた', C + '#index-18']],
          items: [
            { see: '「また遊んでくださいね」', sub: '白文字', res: 'デフォルト', lv: 'base', tag: '推測' },
            { see: '「一味違いますね」', sub: 'ちょんぼりすたのみ掲載', res: '設定2以上（L否定）', lv: 'blue', tag: '推測' },
            { see: '「何やら不思議な気配です」', sub: '緑文字', res: '設定3以上', lv: 'gold', tag: '推測', img: ['ekishou85', '0/#dynamic_header_9', '隠れ凪：緑文字'] },
            { see: '「良い予感がします」', sub: '赤文字', res: '設定4以上', lv: 'red', tag: '推測' },
            { see: '「遊び尽くしちゃいましょう」', sub: '銀文字', res: '設定5以上', lv: 'purple', tag: '推測' },
            { see: '「お肉〜お肉〜」', sub: '金文字', res: '設定6', lv: 'rain', tag: '推測' }
          ],
          note: [
            '本機ではまだ確認されておらず、同じメーカーの他機種の法則を当てはめた予想です。',
            '本機は設定1がなく設定Lがあるので、中身が違う可能性があります。'
          ]
        },
        {
          id: 'num', short: '設定差', title: '設定差のある数値',
          where: '設定Lの数値は公表されていません。表は横にスクロールできます',
          src: [['一撃', G + '0/'], ['ちょんぼりすた', C + '#index-17']],
          table: {
            head: ['項目', '設定2', '設定3', '設定4', '設定5', '設定6'],
            rows: [
              ['初当り', '1/350.8', '1/336.5', '1/295.1', '1/274.6', '1/207.8'],
              ['機械割', '98.1%', '99.3%', '105.3%', '108.4%', '110.3%'],
              ['アオハルチャンス', '1/63.7', '1/62.4', '1/59.4', '1/58.6', '1/57.2'],
              ['300ptでCZ以上', '約30%', '約34%', '40%以上', '40%以上', '40%以上'],
              ['400ptで前兆移行', '1.0%', '1.0%', '1.2%', '1.3%', '2.8%'],
              ['500ptでCZ以上', '約25%', '約27%', '33%以上', '33%以上', '33%以上'],
              ['咲太クエスト（スイカ）', '1/15,274', '1/6,634', '1/6,726', '1/6,558', '1/6,204'],
              ['咲太ポイント解放', '1/12,388', '1/12,163', '1/12,210', '1/11,518', '1/8,349']
            ]
          },
          note: ['設定6は初当りが別格に軽いのが一番の特徴です。']
        }
      ]},
      { id: 'normal', label: '通常時', icon: 'pic', groups: [
        {
          id: 'stage', short: 'ステージ', title: '通常時のステージ',
          where: '通常時の液晶の背景',
          src: [['一撃', G + '41/#dynamic_header_2'], ['ちょんぼりすた', C + '#index-30'], ['なな徹', N + '38859/']],
          items: [
            { see: '梓川家', res: '通常', lv: 'info', img: ['ekishou05', '41/#dynamic_header_2', '梓川家ステージ'] },
            { see: '通学路', res: '通常', lv: 'info', img: ['ekishou06', '41/#dynamic_header_2', '通学路ステージ'] },
            { see: 'ファミレス', sub: 'CZ・ST終了後は40.2%で高確スタート', res: 'アオハルチャンス高確を示唆', lv: 'hot', img: ['ekishou07', '41/#dynamic_header_2', 'ファミレスステージ'] },
            { see: '七里ヶ浜', res: 'CZのチャンス。規定ポイントのゾーン期待度アップ', lv: 'hot', img: ['ekishou08', '41/#dynamic_header_2', '七里ヶ浜ステージ'] },
            { see: 'リラックス', sub: '10G＋α滞在。スイカの一部、300ptゾーンの前兆失敗後（25%）などで移行', res: '思春期ポイント獲得量アップ＋アオハル高確', lv: 'hot', img: ['ekishou10', '41/#dynamic_header_2', 'リラックスステージ'] },
            { see: '彷徨の刻', res: '規定ポイント到達で移る前兆ステージ。連続演出でCZの当否を告知', lv: 'hot', img: ['ekishou09', '41/#dynamic_header_2', '彷徨の刻ステージ'] }
          ],
          note: ['ST後に背景がファミレスなら通常背景に戻るまで様子見、デフォルト背景ならやめどきの目安になります。']
        },
        {
          id: 'hoko', short: '彷徨の刻', title: '彷徨の刻（前兆ステージ）',
          where: '規定ポイント到達後の前兆中',
          src: [['なな徹', N + '38871/'], ['ちょんぼりすた', C + '#index-31']],
          items: [
            { see: '液晶まわりのエフェクト', sub: '青・緑', res: '前兆開始の合図', lv: 'info' },
            { see: '連続演出「姉妹の入れ替わりを看破しろ」', res: '期待度 ☆×2.5', lv: 'info' },
            { see: '連続演出「双葉理央を捕まえろ」', res: '期待度 ☆×3', lv: 'info' },
            { see: '連続演出「桜島麻衣を探し出せ」', res: '期待度 ☆×3.5', lv: 'hot' }
          ],
          note: ['連続演出に成功するとCZ「エピソードチャンス」。上の3つ以外の連続演出もあります（なな徹）。']
        },
        {
          id: 'eye', short: 'アイキャッチ', title: 'ステージチェンジのアイキャッチ',
          where: '通常時のステージ移行で出る1枚絵（全8種）',
          src: [['一撃', G + '41/#dynamic_header_3']],
          view: 'grid',
          items: [
            { see: '梓川咲太', sub: 'よく出る', res: '基本パターンとみられる', lv: 'info', tag: '推測', img: ['ekishou86', '41/#dynamic_header_3', 'アイキャッチ：梓川咲太'] },
            { see: '古賀朋絵', res: '示唆内容は不明', lv: 'info', tag: '調査中', img: ['ekishou88', '41/#dynamic_header_3', 'アイキャッチ：古賀朋絵'] },
            { see: '豊浜のどか', res: '示唆内容は不明', lv: 'info', tag: '調査中', img: ['ekishou90', '41/#dynamic_header_3', 'アイキャッチ：豊浜のどか'] },
            { see: '双葉理央', res: '示唆内容は不明', lv: 'info', tag: '調査中', img: ['ekishou89', '41/#dynamic_header_3', 'アイキャッチ：双葉理央'] },
            { see: '桜島麻衣', res: '示唆内容は不明', lv: 'info', tag: '調査中', img: ['ekishou87', '41/#dynamic_header_3', 'アイキャッチ：桜島麻衣'] },
            { see: '梓川かえで', res: '示唆内容は不明', lv: 'info', tag: '調査中', img: ['ekishou91', '41/#dynamic_header_3', 'アイキャッチ：梓川かえで'] },
            { see: '牧之原翔子', res: '示唆内容は不明', lv: 'info', tag: '調査中', img: ['ekishou92', '41/#dynamic_header_3', 'アイキャッチ：牧之原翔子'] },
            { see: 'ヒロイン集合', sub: 'この後に「復活」したパターンを確認', res: '示唆内容は不明', lv: 'info', tag: '調査中', img: ['ekishou93', '41/#dynamic_header_3', 'アイキャッチ：ヒロイン集合'] }
          ],
          note: [
            '2026年10月20日の時点で、どのサイトも示唆の中身を出していません。',
            '一撃は、咲太以外のヒロインは不可思議モードや次回CZのキャラを示している可能性があると見ています。'
          ]
        }
      ]},
      { id: 'zone', label: 'ゾーン', icon: 'gem', groups: [
        {
          id: 'crystal', short: 'クリスタル', title: '不可思議モード（クリスタルのキャラ）',
          where: 'リール左のクリスタルに出るキャラ。前兆後・CZ後・AT後などに出る',
          src: [['一撃', G + '55/#dynamic_header_2'], ['ちょんぼりすた', C + '#index-27']],
          imgs: [['ekishou32', '55/#dynamic_header_2', 'クリスタルのキャラ一覧']],
          items: [
            { see: '古賀朋絵', res: '次回の規定ポイントが100ptに短縮', lv: 'hot' },
            { see: '豊浜のどか', res: 'アオハルチャンスの報酬が優遇', lv: 'info' },
            { see: '双葉理央', res: '常に高確以上（アオハルチャンス高確）', lv: 'info' },
            { see: '桜島麻衣', res: '今の規定ポイントが300ptか500pt', lv: 'hot', img: ['ekishou67', '55/#dynamic_header_1', 'クリスタル：桜島麻衣'] },
            { see: '梓川かえで', res: '次回CZにかえでが出る（CZ期待度 約86%）', lv: 'hot' },
            { see: '牧之原翔子', res: '次回CZに翔子が出る（成功で上位CZ）', lv: 'hot' },
            { see: 'クリスタル全体が紫に光る', sub: '台を捨てないこと', res: '次のST開始時に思春期症候群が発動', lv: 'hot', tag: '実戦上' }
          ],
          note: ['麻衣について、アルテマは「規定ポイントが500pt以内」と書いています。']
        },
        {
          id: 'point', short: '思春期pt', title: '思春期ポイントのゾーン',
          where: '液晶左下の思春期ポイント。100ptごとにCZ抽選',
          src: [['一撃', G + '43/#dynamic_header_2'], ['ちょんぼりすた', C + '#index-26']],
          imgs: [['ekishou11', '43/#dynamic_header_1', '思春期ポイントの位置（液晶左下）']],
          items: [
            { see: 'ポイント表示がピンクに変わる', res: '規定ポイント到達の合図', lv: 'hot', tag: '実戦上', img: ['ekishou12', '43/#dynamic_header_1', '思春期ポイントがピンクに変化'] }
          ],
          chart: {
            cap: 'バーの長さ＝CZ以上の当選期待度（0〜100%）。薄い部分は高設定（4〜6）の上乗せ分',
            rows: [
              { k: '100pt', v: 33, txt: '約33%', m: '全設定共通。いちばん狙いやすい' },
              { k: '200pt', v: 15, txt: '約15%' },
              { k: '300pt', v: 30, ext: 40, txt: '約30%〜40%以上', m: '設定差あり（設定2で約30%、設定3で約34%、4以上で40%以上）' },
              { k: '400pt', flag: '前兆ステージに移ればCZ以上濃厚', m: '前兆移行率は1.0%〜2.8%で設定差あり' },
              { k: '500pt', v: 25, ext: 33, txt: '約25%〜33%以上', m: '設定差あり（設定2で約25%、設定3で約27%、4以上で33%以上）' },
              { k: '600pt', flag: '前兆ステージに移ればCZ以上濃厚' },
              { k: '700pt', v: 25, txt: '約25%' },
              { k: '800pt', flag: '前兆ステージに移ればCZ以上濃厚' },
              { k: '900pt', v: 25, txt: '約25%' },
              { k: '1000pt', v: 100, txt: '天井でCZ以上確定' }
            ]
          },
          note: ['CZに失敗したときやST後も、余ったポイントは持ち越されます。']
        },
        {
          id: 'kaede', short: 'かえでスタンプ', title: 'かえでスタンプ',
          where: 'リプレイの約40%で1個。7個たまるとアオハルチャンス',
          src: [['なな徹', N + '38862/'], ['ちょんぼりすた', C + '#index-28']],
          items: [
            { see: '7個目「さすがです！」', sub: '青', res: 'アオハルチャンスの報酬を示唆', lv: 'info', tag: '調査中' },
            { see: '7個目「すごいです！」', sub: 'ピンク', res: 'アオハルチャンスの報酬を示唆', lv: 'info', tag: '調査中' },
            { see: '7個目「すばらしいです！」', sub: '赤', res: 'アオハルチャンスの報酬を示唆', lv: 'info', tag: '調査中' }
          ],
          note: ['色ごとの具体的な中身はまだ出ていません。']
        },
        {
          id: 'sakuta', short: '咲太pt', title: '咲太ポイント（穢れ）',
          where: '内部でたまるポイント。エフェクトで量を示唆',
          src: [['ちょんぼりすた', C + '#index-32'], ['一撃', G + '57/']],
          items: [
            { see: '獲得時のエフェクト', sub: '小・中・大', res: '今回の獲得量を示唆', lv: 'info' },
            { see: '蓄積のエフェクト', sub: '小・中・大', res: '内部にたまった合計量を示唆', lv: 'info' },
            { see: 'CZ開始時に虹イルミ', res: 'ポイントMAX。CZ成功濃厚＋ST開始時に思春期症候群', lv: 'hot' }
          ]
        }
      ]},
      { id: 'cz', label: 'CZ', icon: 'bolt', groups: [
        {
          id: 'czheroine', short: 'ヒロイン別', title: 'CZヒロイン別の期待度',
          where: 'CZ「エピソードチャンス」開始時に選ばれるヒロイン（期待度は設定2の数値）',
          src: [['一撃', G + '53/#dynamic_header_3'], ['ちょんぼりすた', C + '#CZ-2']],
          stats: [
            { k: '古賀朋絵', v: 56.7, m: '振り分け25.4%・スイカで成功濃厚', img: ['ekishou27', '53/#dynamic_header_5', 'エピソードチャンス：古賀朋絵'] },
            { k: '豊浜のどか', v: 61.5, m: '振り分け25.4%・ベルがチャンス役', img: ['ekishou26', '53/#dynamic_header_8', 'エピソードチャンス：豊浜のどか'] },
            { k: '双葉理央', v: 62.0, m: '振り分け21.9%・チェリーで成功濃厚', img: ['ekishou28', '53/#dynamic_header_11', 'エピソードチャンス：双葉理央'] },
            { k: '桜島麻衣', v: 63.7, m: '振り分け21.9%・リプレイが大チャンス、チャンス目で濃厚', img: ['ekishou22', '53/#dynamic_header_14', 'エピソードチャンス：桜島麻衣'] },
            { k: '梓川かえで', v: 86.3, m: '振り分け4.7%・全役で優遇、レア役で濃厚', img: ['ekishou29', '53/#dynamic_header_17', 'エピソードチャンス：梓川かえで'] },
            { k: '牧之原翔子', v: 67.1, ext: 86.4, extTxt: '確定版込みで86.4%', m: '振り分け0.8%・レア役で濃厚、成功で上位CZ', img: ['ekishou30', '53/#dynamic_header_20', 'エピソードチャンス：牧之原翔子'] }
          ],
          note: ['CZ全体の成功期待度は62.5%（設定2）。後半の最終ゲームは専用の成功抽選があり、小役での成功率は設定4以上で優遇されます。']
        },
        {
          id: 'czfx', short: 'CZ中の演出', title: 'CZ中の演出',
          where: 'エピソードチャンス中（前半10G＋後半6G＋α）',
          src: [['一撃', G + '53/'], ['ちょんぼりすた', C + '#CZ-2']],
          items: [
            { see: '前半で後半のG数が＋5Gに到達', res: '成功濃厚', lv: 'hot' },
            { see: '後半のカウントが緑', res: 'チャンス', lv: 'info' },
            { see: '後半のカウントが赤', res: '大チャンス', lv: 'hot' },
            { see: 'フリーズ発生', res: '成功（ボーナス濃厚）', lv: 'hot' },
            { see: 'CZ開始時に虹イルミ', res: '成功濃厚（咲太ポイントMAX）', lv: 'hot' },
            { see: '観測目', res: '成功濃厚＋STを1セット上乗せ', lv: 'hot' },
            { see: 'CZ6回スルー後の7回目', res: '成功濃厚（スルー天井）', lv: 'hot' }
          ]
        }
      ]},
      { id: 'st', label: 'ST', icon: 'seven', groups: [
        {
          id: 'judge', short: 'ジャッジ', title: 'ジャッジ演出',
          where: 'ST「青ブタジャッジ」。1G目で演出が決まり、2G目でジャッジ',
          src: [['一撃', G + '81/#dynamic_header_3'], ['ちょんぼりすた', C + '#STJUDGE']],
          items: [
            { see: 'ヒロインチャレンジ', sub: 'その他の小役から', res: '期待度 約10%', lv: 'info', img: ['ekishou41', '81/#dynamic_header_3', 'ヒロインチャレンジ'] },
            { see: 'PUSHチャレンジ', sub: 'ベルから', res: '期待度 約22%', lv: 'info', img: ['ekishou42', '81/#dynamic_header_3', 'PUSHチャレンジ'] },
            { see: '7チャレンジ', sub: 'リプレイ・レア役から', res: '期待度 約40%', lv: 'info', img: ['ekishou43', '81/#dynamic_header_3', '7チャレンジ'] },
            { see: '7チャレンジのカットイン青', res: '期待度 約33%', lv: 'info' },
            { see: '7チャレンジのカットイン赤', res: '期待度 約98〜99%', lv: 'hot' },
            { see: '7チャレンジのカットイン虹', res: 'ボーナス濃厚', lv: 'hot' },
            { see: '演出と成立役が合わない', sub: '上の組み合わせと矛盾', res: 'チャンス', lv: 'hot' },
            { see: '液晶下の「V」が2個以上', res: 'ヒロイン配置に翔子が出る（成功で上位CZ）', lv: 'info', img: ['ekishou69', '81/#dynamic_header_4', 'ST中のヒロイン決定ゾーン'] }
          ],
          note: ['期待度は設定2の数値。バニーモードは演出の種類が見えない一発告知型です。']
        },
        {
          id: 'lamp', short: '裏ボタン', title: '裏ボタン・ランプ',
          where: 'PUSHボタンを押すと筐体上部のランプで教えてくれる',
          src: [['ちょんぼりすた', C + '#index-36'], ['一撃', G + '81/#dynamic_header_13']],
          items: [
            { see: '青春ジャッジメント・夢現ジャッジメント・バニーモードのレバーフリーズ中にPUSH連打', sub: '規定回数は1〜10回（5回と10回が多い）', res: '上部ランプ点灯で成功（成功時の50%で点灯）', lv: 'hot', img: ['ekishou103', '81/#dynamic_header_13', 'ST中のバニーモード'] },
            { see: 'のどかのドリームバースト、点数昇格の煽り中にPUSH', res: '点灯で昇格が続く', lv: 'hot' },
            { see: '理央のドリームバースト、報酬の煽り中にPUSH', res: '点灯で右の報酬を獲得', lv: 'hot' },
            { see: '7揃い後1G目、第3停止後にPUSH：ランプ青', sub: '理央のバースト以外', res: 'セブンレベルがいちばん低い', lv: 'info' },
            { see: '同上：ランプ緑', res: '青より上', lv: 'info' },
            { see: '同上：ランプ赤', res: 'セブンレベル2以上', lv: 'hot' },
            { see: '同上：ランプ紫', res: 'セブンレベル3（最上位）', lv: 'hot' }
          ],
          note: ['セブンレベルが高いほどドリームバーストの上乗せ枚数に期待できます。']
        },
        {
          id: 'kansoku', short: '観測目・フリーズ', title: '観測目・ロングフリーズ',
          where: 'BAR揃いの「観測目」とフリーズ',
          src: [['一撃', G + '5/'], ['ちょんぼりすた', C + '#index-9']],
          imgs: [['uchikata09', '5/#dynamic_header_2', '観測目（1）'], ['uchikata10', '5/#dynamic_header_2', '観測目（2）'], ['uchikata11', '5/#dynamic_header_2', '観測目（3）']],
          items: [
            { see: '通常時の観測目', sub: '約1/50,840', res: 'CZ直撃（成功濃厚の翔子）、25%でロングフリーズ', lv: 'hot' },
            { see: 'ロングフリーズ', sub: '約1/203,360', res: 'エピソードボーナス300枚＋上位ST直行', lv: 'hot', img: ['ekishou02', '5/#dynamic_header_1', 'ロングフリーズ'] },
            { see: 'ST中の観測目', res: '超青春ドリームバースト（白7）濃厚', lv: 'hot' },
            { see: 'ドリームバースト中の観測目', res: '＋1000枚以上（翔子なら＋2000枚以上）', lv: 'hot' }
          ]
        }
      ]}
    ]
  });
})();
