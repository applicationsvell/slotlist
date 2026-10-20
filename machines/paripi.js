// スマスロ パリピ孔明
// img: [ファイル名（img/paripi/ の中）, 一撃ページ内の場所, 写真の説明]
(function () {
  var G = 'https://1geki.jp/slot/l_paripikoumei/';

  SHISA.add({
    id: 'paripi',
    short: 'パリピ孔明',
    full: 'スマスロ パリピ孔明',
    // 看板の色（上が a、下が b。ink: 'dark' は文字を紺にする）。パーティーのライム
    color: { a: '#D2F27A', b: '#6DB716', ink: 'dark' },
    g: G,
    spec: [
      ['メーカー', '山佐'],
      ['導入日', '2026年10月5日'],
      ['設定', '1〜6'],
      ['ボーナス初当り', '1/309.9〜1/228.8'],
      ['まとめた日', '2026年10月20日']
    ],
    // 設定判別ツール（数値は一撃の設定差・判別ツールのページから）
    judge: {
      settings: [1, 2, 3, 4, 5, 6],
      // 通常時のゲーム数に対して何回あったか（値は分母）
      rates: [
        { id: 'hit', label: 'ボーナス初当り', p: [309.9, 299.6, 280.0, 262.0, 243.9, 228.8] },
        { id: 'cz', label: 'CZ（三歌の礼・英子の試練・石兵八陣の合計）', p: [213.6, 207.3, 199.2, 188.8, 179.4, 171.7] }
      ],
      // 引いた回数と、そこから当たった回数（値は%）
      pairs: [
        { id: 'chance', label: 'チャンス目 → CZ', a: 'チャンス目', b: 'CZ当選', where: '通常状態（通常ステージ）で引いたものだけ', p: [25.0, 26.2, 29.3, 32.1, 35.5, 38.3] },
        { id: 'suika', label: 'スイカ → CZ', a: 'スイカ', b: 'CZ当選', where: '通常状態（通常ステージ）で引いたものだけ', p: [2.0, 2.4, 2.8, 3.9, 5.1, 6.3] },
        { id: 'wcherry', label: '弱チェリー → 石兵八陣', a: '弱チェリー', b: '石兵八陣', where: '通常状態（通常ステージ）で引いたものだけ', p: [0.4, 0.8, 0.8, 1.2, 1.2, 1.6] },
        { id: 'g150', label: 'ボーナス当選 → 150G以内', a: 'ボーナス当選', b: '150G以内', where: 'ボーナスに当たった回数と、そのうち150G以内で当たった回数', p: [41.4, 42.5, 45.6, 48.1, 51.2, 53.9] }
      ],
      memo: ['change', 'sub'],
      cautions: ['高確・超高確中のCZ当選率は全設定共通なので、レア役は通常状態のものだけ数えます。']
    },
    sources: [['一撃（1geki）解析ページ', G]],
    tabs: [
      { id: 'setting', label: '設定示唆', icon: 'star', groups: [
        {
          id: 'end', short: '終了画面', title: 'ST終了画面',
          where: 'ST「パーティータイム」が終わったときの画面',
          src: [['一撃', '0/#dynamic_header_6']],
          items: [
            { see: 'デフォルト①', res: 'デフォルト', lv: 'base', img: ['ekishou94', '0/#dynamic_header_6', 'ST終了画面：デフォルト①'] },
            { see: 'デフォルト②', res: 'デフォルト', lv: 'base', img: ['ekishou95', '0/#dynamic_header_6', 'ST終了画面：デフォルト②'] },
            { see: 'デフォルト③', res: 'デフォルト', lv: 'base', img: ['ekishou96', '0/#dynamic_header_6', 'ST終了画面：デフォルト③'] },
            { see: 'KABE太人', res: '偶数設定を示唆（弱）', lv: 'oe', img: ['ekishou97', '0/#dynamic_header_6', 'ST終了画面：KABE太人'] },
            { see: '孔明', res: '偶数設定を示唆（強）', lv: 'oe', img: ['ekishou98', '0/#dynamic_header_6', 'ST終了画面：孔明'] },
            { see: '英子（夕方）', res: '高設定示唆（弱）', lv: 'blue', img: ['ekishou84', '0/#dynamic_header_6', 'ST終了画面：英子（夕方）'] },
            { see: '英子（夜）', res: '高設定示唆（強）', lv: 'green', img: ['ekishou85', '0/#dynamic_header_6', 'ST終了画面：英子（夜）'] },
            { see: '英子＆赤兎馬カンフー', res: '設定2以上濃厚', lv: 'blue', img: ['ekishou86', '0/#dynamic_header_6', 'ST終了画面：英子＆赤兎馬カンフー'] },
            { see: '太人＆孔明', res: '設定3以上濃厚', lv: 'gold', img: ['ekishou87', '0/#dynamic_header_6', 'ST終了画面：太人＆孔明'] },
            { see: '英子＆七海', res: '設定4以上濃厚', lv: 'red', img: ['ekishou88', '0/#dynamic_header_6', 'ST終了画面：英子＆七海'] },
            { see: '孔明（赤背景）', res: '設定5以上濃厚', lv: 'purple', img: ['ekishou89', '0/#dynamic_header_6', 'ST終了画面：孔明（赤背景）'] },
            { see: 'ケロット着ぐるみ', sub: '孔明＆英子', res: '設定6濃厚', lv: 'rain', img: ['ekishou101', '0/#dynamic_header_6', 'ST終了画面：ケロット着ぐるみ（孔明＆英子）'] }
          ]
        },
        {
          id: 'ending', short: 'エンディング', title: 'エンディング中のレア役',
          where: 'エンディング中にレア役を引くと、液晶右上に1枚絵かミニキャラが出る',
          src: [['一撃', '0/#dynamic_header_8']],
          items: [
            { see: '1枚絵「孔明＆英子」', res: '偶数設定を示唆（弱）', lv: 'oe', img: ['ekishou103', '0/#dynamic_header_8', 'エンディング：1枚絵「孔明＆英子」'] },
            { see: '1枚絵「孔明」', res: '偶数設定を示唆（強）', lv: 'oe', img: ['ekishou104', '0/#dynamic_header_8', 'エンディング：1枚絵「孔明」'] },
            { see: '1枚絵「英子（夕方）」', res: '高設定示唆（弱）', lv: 'blue', img: ['ekishou120', '0/#dynamic_header_8', 'エンディング：1枚絵「英子（夕方）」'] },
            { see: '1枚絵「英子（夜）」', res: '高設定示唆（強）', lv: 'green', img: ['ekishou105', '0/#dynamic_header_8', 'エンディング：1枚絵「英子（夜）」'] },
            { see: 'ミニキャラ2人', res: '設定2以上濃厚', lv: 'blue', img: ['ekishou106', '0/#dynamic_header_8', 'エンディング：ミニキャラ2人'] },
            { see: 'ミニキャラ3人', res: '設定3以上濃厚', lv: 'gold', img: ['ekishou107', '0/#dynamic_header_8', 'エンディング：ミニキャラ3人'] },
            { see: 'ミニキャラ4人', res: '設定4以上濃厚', lv: 'red', img: ['ekishou108', '0/#dynamic_header_8', 'エンディング：ミニキャラ4人'] },
            { see: 'ミニキャラ5人', res: '設定5以上濃厚', lv: 'purple', img: ['ekishou109', '0/#dynamic_header_8', 'エンディング：ミニキャラ5人'] },
            { see: 'ミニキャラ1人（金孔明）', res: '設定6濃厚', lv: 'rain', img: ['ekishou110', '0/#dynamic_header_8', 'エンディング：ミニキャラ1人（金孔明）'] }
          ]
        },
        {
          id: 'coins', short: '枚数表示', title: '獲得枚数表示',
          where: 'ふだんと違うタイミングで出たら注目',
          src: [['一撃', '0/#dynamic_header_7']],
          items: [
            { see: '222OVER', res: '設定2以上濃厚', lv: 'blue' },
            { see: '456OVER', res: '設定4以上濃厚', lv: 'red', img: ['ekishou102', '0/#dynamic_header_7', '獲得枚数表示：456OVER'] },
            { see: '555OVER・803OVER', sub: '803はヤマサの語呂', res: '設定5以上濃厚', lv: 'purple' },
            { see: '666OVER', res: '設定6濃厚', lv: 'rain' }
          ]
        },
        {
          id: 'trophy', short: 'トロフィー', title: 'ケロットトロフィー',
          where: 'まだ確認されていないが、他機種と同じく出ると予想されている',
          src: [['一撃', '0/#dynamic_header_9']],
          items: [
            { see: '銅', res: '設定2以上', lv: 'blue', tag: '推測' },
            { see: '銀', res: '設定3以上', lv: 'gold', tag: '推測' },
            { see: '金', res: '設定4以上', lv: 'red', tag: '推測' },
            { see: 'ケロット柄', res: '設定5以上', lv: 'purple', tag: '推測' },
            { see: '虹', res: '設定6', lv: 'rain', tag: '推測' }
          ]
        },
        {
          id: 'num', short: '設定差', title: '設定差のある数値',
          where: '表は横にスクロールできます',
          src: [['一撃', '0/#dynamic_header_1']],
          table: {
            head: ['項目', '設定1', '設定2', '設定3', '設定4', '設定5', '設定6'],
            rows: [
              ['ボーナス初当り', '1/309.9', '1/299.6', '1/280.0', '1/262.0', '1/243.9', '1/228.8'],
              ['CZ合算', '1/213.6', '1/207.3', '1/199.2', '1/188.8', '1/179.4', '1/171.7'],
              ['三歌の礼', '1/369.9', '1/359.9', '1/345.6', '1/332.1', '1/323.0', '1/314.8'],
              ['英子の試練', '1/701.9', '1/676.9', '1/648.8', '1/607.1', '1/560.9', '1/528.4'],
              ['石兵八陣', '1/1809.0', '1/1761.7', '1/1710.5', '1/1564.5', '1/1440.7', '1/1324.4'],
              ['150G以内のボーナス', '41.4%', '42.5%', '45.6%', '48.1%', '51.2%', '53.9%'],
              ['通常状態のチャンス目でCZ', '25.0%', '26.2%', '29.3%', '32.1%', '35.5%', '38.3%'],
              ['通常状態のスイカでCZ', '2.0%', '2.4%', '2.8%', '3.9%', '5.1%', '6.3%'],
              ['通常状態の弱チェリーでCZ', '0.4%', '0.8%', '0.8%', '1.2%', '1.2%', '1.6%']
            ]
          },
          note: ['設定4以上の目安は、ボーナス初当り1/250前後、CZ合算1/180前後です。高確・超高確中のCZ当選率は全設定共通なので、設定を見るなら通常状態（通常ステージ）で数えます。']
        }
      ]},
      { id: 'normal', label: '通常時', icon: 'pic', groups: [
        {
          id: 'stage', short: 'ステージ', title: '通常時のステージ',
          where: '見た目のステージと内部状態は完全にリンクしている',
          src: [['一撃', '41/#dynamic_header_2']],
          items: [
            { see: 'BBラウンジ', res: '通常', lv: 'info', img: ['ekishou27', '41/#dynamic_header_2', 'ステージ：BBラウンジ'] },
            { see: '公園', res: '通常', lv: 'info', img: ['ekishou28', '41/#dynamic_header_2', 'ステージ：公園'] },
            { see: '竹下通り', res: '通常', lv: 'info', img: ['ekishou29', '41/#dynamic_header_2', 'ステージ：竹下通り'] },
            { see: '英子の部屋', res: '高確', lv: 'hot', img: ['ekishou30', '41/#dynamic_header_2', 'ステージ：英子の部屋'] },
            { see: 'スカイスクエア', res: '超高確', lv: 'hot', img: ['ekishou31', '41/#dynamic_header_2', 'ステージ：スカイスクエア'] },
            { see: '孔明前世', res: 'ボーナスの前兆', lv: 'hot', img: ['ekishou32', '41/#dynamic_header_2', 'ステージ：孔明前世'] }
          ]
        },
        {
          id: 'change', short: 'ステージチェンジ', title: 'ステージチェンジ（約32Gごと）',
          where: 'ゾーンはなく、約32Gごとのステージチェンジで内部状態が動く',
          src: [['一撃', '43/#dynamic_header_2']],
          items: [
            { see: 'アイキャッチ中にリプレイ・ベル', res: '高確以上濃厚', lv: 'hot', img: ['ekishou03', '43/#dynamic_header_1', 'ステージチェンジ演出'] },
            { see: 'アイキャッチ中にレア役', res: 'CZ・ボーナス直撃に期待（超高確も確認）', lv: 'hot' },
            { see: '小役を引いたのに通常ステージへ', res: 'CZ濃厚', lv: 'hot' },
            { see: 'ステージチェンジの回数が5の倍数', sub: 'リール右上に回数が出る', res: 'CZのチャンス', lv: 'hot', img: ['ekishou33', '43/#dynamic_header_3', 'ステージチェンジ回数とゲーム数カウンター'] },
            { see: '109G後の次のステージチェンジ', res: '士気高揚ゾーンへ 70%', lv: 'hot' },
            { see: 'ゲーム数の下2桁「09」通過でサブ液晶に孔明', sub: 'タッチするとセリフ', res: '士気高揚ゾーンの期待度を示唆', lv: 'info', img: ['ekishou35', '43/#dynamic_header_3', 'サブ液晶：青セリフ'] },
            { see: 'ゲーム数カウンター 青・緑・赤', res: '士気高揚ゾーンの期待度 青＜緑＜赤。赤なら移行濃厚', lv: 'hot', img: ['ekishou34', '43/#dynamic_header_8', 'ゲーム数カウンター（緑と赤）'] }
          ],
          note: ['5の倍数以外でカウンター内の孔明が振り返ったら、次のステージチェンジまで様子を見るのがおすすめです。']
        },
        {
          id: 'shiki', short: '士気高揚ゾーン', title: '士気高揚ゾーン',
          where: '4G間、小役を引くとボーナス直撃のチャンス',
          src: [['一撃', '43/#dynamic_header_5']],
          items: [
            { see: 'リプレイ・ベル', res: 'ボーナス直撃のチャンス', lv: 'hot', img: ['ekishou36', '43/#dynamic_header_5', '士気高揚ゾーン'] },
            { see: 'レア役', res: 'ボーナス直撃の期待度がさらにアップ', lv: 'hot' },
            { see: '前兆「孔明前世」へ移行', sub: '小役揃いの期待度 約75%', res: 'ボーナス期待度 約30%。連続演出に成功で当たり', lv: 'hot' }
          ]
        },
        {
          id: 'sub', short: 'サブ液晶', title: 'サブ液晶のキャラ',
          where: '通常時にサブ液晶をタッチすると、キャラが5種類のアクションをする',
          src: [['一撃', '45/#dynamic_header_6']],
          items: [
            { see: 'キャラのアクション', res: 'CZやボーナスの期待度を示唆', lv: 'info', img: ['ekishou111', '45/#dynamic_header_6', 'サブ液晶のキャラ'] },
            { see: '「チキチキバンバン」を踊る', res: 'CZ以上濃厚', lv: 'hot' }
          ]
        }
      ]},
      { id: 'cz', label: 'CZ', icon: 'bolt', groups: [
        {
          id: 'czrate', short: 'レア役とCZ', title: 'レア役でのCZ当選期待度',
          where: '内部状態（ステージ）でCZの当たりやすさが大きく変わる',
          src: [['一撃', '45/#dynamic_header_2']],
          items: [
            { see: '強チェリー', res: 'アゲアゲタイム濃厚（チェリー約1/1.8に）', lv: 'hot', img: ['ekishou06', '45/#dynamic_header_1', 'アゲアゲタイムの突入画面'] },
            { see: '弱チェリーでCZ当選', res: '石兵八陣（CZ③）濃厚', lv: 'hot' }
          ],
          table: {
            head: ['成立役', '通常（設定1）', '通常（設定6）', '高確', '超高確'],
            hi: -1,
            cap: '高確・超高確は全設定共通。高確の弱チェリーは通常（設定2以上）より低い',
            rows: [
              ['弱チェリー', '0.4%', '1.6%', '0.4%', '12.5%'],
              ['スイカ', '2.0%', '6.3%', '20.3%', '50.1%'],
              ['チャンス目', '25.0%', '38.3%', '50.0%', '75.1%']
            ]
          },
          note: ['ゲーム数での当たりは天井以外にありません。ボーナスの約66%はCZ経由です。']
        }
      ]},
      { id: 'st', label: 'ST・他', icon: 'seven', groups: [
        {
          id: 'freeze', short: 'フリーズ', title: '中段チェリー・ロングフリーズ',
          where: '中段チェリーはチェリーバンバン（強チェリー後の8G）中だけ出る',
          src: [['一撃', '5/#dynamic_header_1']],
          items: [
            { see: '通常時の中段チェリー', res: 'ボーナス濃厚＋Vストック。一部でロングフリーズ', lv: 'hot', img: ['uchikata11', '5/#dynamic_header_2', '中段チェリー'] },
            { see: 'ボーナス中の中段チェリー', res: '大量の枚数上乗せに期待', lv: 'hot' },
            { see: 'ロングフリーズ', sub: '期待獲得 約3300枚', res: '白7BB＋プレミアムST「究極孔明」濃厚', lv: 'hot', img: ['ekishou24', '5/#dynamic_header_1', 'ロングフリーズ'] }
          ]
        }
      ]}
    ]
  });
})();
