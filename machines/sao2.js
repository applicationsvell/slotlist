// スロット ソードアート・オンラインⅡ
// img: [ファイル名（img/sao2/ の中）, 一撃ページ内の場所, 写真の説明]
(function () {
  var G = 'https://1geki.jp/slot/l_sao2/';

  SHISA.add({
    id: 'sao2',
    short: 'SAOⅡ',
    full: 'スロット ソードアート・オンラインⅡ',
    // 看板の色（上が a、下が b。ink: 'dark' は文字を紺にする）。GGOの藍
    color: { a: '#A9B4FF', b: '#4757D6' },
    g: G,
    spec: [
      ['メーカー', 'パオン・ディーピー'],
      ['導入日', '2026年6月8日'],
      ['設定', '1〜6（偶数設定が優遇）'],
      ['AT初当り', '1/386.2〜1/269.6'],
      ['まとめた日', '2026年10月20日']
    ],
    // 設定判別ツール（数値は一撃の設定差ページから）
    judge: {
      settings: [1, 2, 3, 4, 5, 6],
      // 有利区間（上限は始まったときの差枚から＋2400枚）
      yuri: {
        notes: ['切れるのは、エンディング時の一部・AT終了時の一部・上位CZ「デス・ガンバトル」突入時の一部。ゲーム数で切れることはありません。'],
        src: [['一撃', '3/#dynamic_header_5']]
      },
      // 通常時のゲーム数に対して何回あったか（値は分母）
      rates: [
        { id: 'hit', label: 'AT初当り', p: [386.2, 364.3, 368.1, 326.8, 340.6, 269.6] },
        { id: 'cz', label: 'スコードロンバトル（CZ）', p: [238.4, 232.3, 232.7, 218.9, 225.2, 191.7] },
        { id: 'theend', label: 'THE ENDモード（確定CZ）で開始', p: [20177.5, 17579.1, 17586.3, 13784.5, 11459.0, 7077.2] },
        // 強チャンス目Bは通常時もAT中も同じ確率なので、両方のゲーム数で割る
        { id: 'chb', label: '強チャンス目B（通常時＋AT中）', p: [1057.0, 993.0, 936.2, 885.6, 840.2, 799.2], per: 'all' },
        { id: 'sinon', label: '詩乃モードのAT直撃', p: [18091.8, 14160.5, 14390.8, 8498.0, 4723.3, 3415.7] }
      ],
      // 引いた回数と、そこから当たった回数（値は%）
      pairs: [
        { id: 'suika', label: 'スイカ → シューティングチャージ', a: 'スイカ', b: 'SC突入', where: '低確のときに引いたスイカだけ', p: [40.2, 44.5, 41.0, 48.4, 42.2, 55.1] },
        { id: 'chlo', label: '強チェリー → CZ（低確）', a: '強チェリー', b: 'CZ当選', where: '低確のときに引いた強チェリーだけ', p: [20.0, 21.0, 20.0, 25.0, 20.0, 33.0] },
        { id: 'chhi', label: '強チェリー → CZ（高確）', a: '強チェリー', b: 'CZ当選', where: '高確のときに引いた強チェリーだけ', p: [50.0, 51.0, 52.0, 55.0, 58.0, 60.0] },
        { id: 'chance', label: '強チャンス目 → THE ENDモード', a: '強チャンス目', b: 'THE END', where: '強チャンス目A・Bどちらも数える', p: [0.4, 0.8, 0.8, 1.6, 2.3, 5.1] },
        { id: 'item', label: 'CZ失敗 → アイテム獲得', a: 'CZ失敗', b: 'アイテム', p: [20.3, 21.1, 21.9, 22.7, 25.0, 30.1] },
        { id: 'stage', label: 'AT初当り → バギーステージ', a: 'AT初当り', b: 'バギー', where: '50G以内の引き戻しも含む。高確から始まったときは数えない', p: [40, 60, 40, 60, 40, 60] }
      ],
      memo: ['history', 'item', 'voice'],
      atTitle: 'AT中も数えるもの',
      atNote: '強チャンス目Bは通常時もAT中も同じ確率です。AT中に引いた分も数えて、AT中のゲーム数も入れると早く判別できます。'
    },
    sources: [['一撃（1geki）解析ページ', G]],
    tabs: [
      { id: 'setting', label: '設定示唆', icon: 'star', groups: [
        {
          id: 'end', short: '終了画面', title: 'AT終了画面',
          where: 'ATが終わったときのシノンの画面',
          src: [['一撃', '10/#dynamic_header_2']],
          items: [
            { see: 'キリト＆シノン', res: 'デフォルト', lv: 'base', img: ['ekishou82', '10/#dynamic_header_2', 'AT終了画面：キリト＆シノン'] },
            { see: '制服', res: '奇数設定を示唆', lv: 'oe', img: ['ekishou83', '10/#dynamic_header_2', 'AT終了画面：制服'] },
            { see: 'ソファー', res: '偶数設定を示唆', lv: 'oe', img: ['ekishou84', '10/#dynamic_header_2', 'AT終了画面：ソファー'] },
            { see: '木漏れ日', res: '高設定示唆', lv: 'blue', img: ['ekishou85', '10/#dynamic_header_2', 'AT終了画面：木漏れ日'] },
            { see: '夏祭り', res: '高設定示唆（強）', lv: 'green', img: ['ekishou87', '10/#dynamic_header_2', 'AT終了画面：夏祭り'] },
            { see: '幼少期', sub: '設定6より設定5で出やすい', res: '設定5以上のチャンス', w: [1, 1, 1, 1, 2, 1.4], lv: 'green', img: ['ekishou88', '10/#dynamic_header_2', 'AT終了画面：幼少期'] },
            { see: 'ワイシャツ', res: '設定2以上濃厚', lv: 'blue', img: ['ekishou89', '10/#dynamic_header_2', 'AT終了画面：ワイシャツ'] },
            { see: 'お風呂', res: '設定3以上濃厚', lv: 'gold', img: ['ekishou90', '10/#dynamic_header_2', 'AT終了画面：お風呂'] },
            { see: '水着', sub: '全員集合', res: '設定4以上濃厚', lv: 'red', img: ['ekishou91', '10/#dynamic_header_2', 'AT終了画面：水着（全員集合）'] },
            { see: 'パジャマ', sub: '全員集合', res: '設定6濃厚', lv: 'rain', img: ['ekishou92', '10/#dynamic_header_2', 'AT終了画面：パジャマ（全員集合）'] }
          ],
          note: ['キャラの誕生日や記念日の6日ほど前から、デフォルトの代わりにお祝いの画面が出ることがあります。']
        },
        {
          id: 'trophy', short: 'トロフィー', title: 'コパンダトロフィー',
          where: 'AT終了画面でリール左に出るトロフィー。中身は他機種からの予想',
          src: [['一撃', '10/#dynamic_header_3']],
          items: [
            { see: '銅', res: '設定2以上', lv: 'blue', tag: '推測' },
            { see: '銀', res: '設定3以上', lv: 'gold', tag: '推測' },
            { see: '金', res: '設定4以上', lv: 'red', tag: '推測', img: ['ekishou68', '10/#dynamic_header_3', 'コパンダトロフィー（金）'] },
            { see: '稲妻柄', res: '設定5以上', lv: 'purple', tag: '推測' },
            { see: '虹', res: '設定6', lv: 'rain', tag: '推測' }
          ]
        },
        {
          id: 'ending', short: 'エンディング', title: 'エンディング中のミニキャラ',
          where: 'エンディング中にレア役を引くと、右リールの上に出るキャラ',
          src: [['一撃', '0/#dynamic_header_12']],
          items: [
            { see: 'シノン', res: '偶数設定を示唆', lv: 'oe', img: ['ekishou132a', '0/#dynamic_header_12', 'エンディング中：シノン'] },
            { see: 'キリト', res: '奇数設定を示唆', lv: 'oe', img: ['ekishou133', '0/#dynamic_header_12', 'エンディング中：キリト'] },
            { see: 'シリカ', res: '偶数設定を示唆（強）', lv: 'oe', img: ['ekishou134', '0/#dynamic_header_12', 'エンディング中：シリカ'] },
            { see: 'リズベット', res: '奇数設定を示唆（強）', lv: 'oe', img: ['ekishou135', '0/#dynamic_header_12', 'エンディング中：リズベット'] },
            { see: '銃士X', res: '高設定示唆', lv: 'blue', img: ['ekishou136', '0/#dynamic_header_12', 'エンディング中：銃士X'] },
            { see: 'アスナ', res: '高設定示唆（強）', lv: 'green', img: ['ekishou137', '0/#dynamic_header_12', 'エンディング中：アスナ'] },
            { see: '詩乃', res: '設定4以上濃厚', lv: 'red', img: ['ekishou138', '0/#dynamic_header_12', 'エンディング中：詩乃'] },
            { see: 'シノン＆キリト', res: '設定6濃厚', lv: 'rain', img: ['ekishou139', '0/#dynamic_header_12', 'エンディング中：シノン＆キリト'] }
          ]
        },
        {
          id: 'rosario', short: 'マザーズ・ロザリオ', title: 'マザーズ・ロザリオ中のミニキャラ',
          where: 'エピソード「マザーズ・ロザリオ」中にレア役を引くと、右リールの上に出るキャラ',
          src: [['一撃', '0/#dynamic_header_12']],
          items: [
            { see: 'ユウキ', res: '偶数設定を示唆', lv: 'oe', img: ['ekishou140', '0/#dynamic_header_12', 'マザーズ・ロザリオ中：ユウキ'] },
            { see: 'キリト', res: '奇数設定を示唆', lv: 'oe', img: ['ekishou141', '0/#dynamic_header_12', 'マザーズ・ロザリオ中：キリト'] },
            { see: 'シリカ', res: '偶数設定を示唆（強）', lv: 'oe', img: ['ekishou142', '0/#dynamic_header_12', 'マザーズ・ロザリオ中：シリカ'] },
            { see: 'リズベット', res: '奇数設定を示唆（強）', lv: 'oe', img: ['ekishou143', '0/#dynamic_header_12', 'マザーズ・ロザリオ中：リズベット'] },
            { see: 'リーファ', res: '高設定示唆', lv: 'blue', img: ['ekishou144', '0/#dynamic_header_12', 'マザーズ・ロザリオ中：リーファ'] },
            { see: 'アスナ', res: '高設定示唆（強）', lv: 'green', img: ['ekishou145', '0/#dynamic_header_12', 'マザーズ・ロザリオ中：アスナ'] },
            { see: 'ユイ', res: '設定4以上濃厚', lv: 'red', img: ['ekishou146', '0/#dynamic_header_12', 'マザーズ・ロザリオ中：ユイ'] },
            { see: 'アスナ＆ユウキ', res: '設定6濃厚', lv: 'rain', img: ['ekishou147', '0/#dynamic_header_12', 'マザーズ・ロザリオ中：アスナ＆ユウキ'] }
          ]
        },
        {
          id: 'num', short: '設定差', title: '設定差のある数値',
          where: '偶数設定が優遇（AT初当りは1＜3＜2＜5＜4＜6の順）。表は横にスクロールできます',
          src: [['一撃', '0/#dynamic_header_1']],
          table: {
            head: ['項目', '設定1', '設定2', '設定3', '設定4', '設定5', '設定6'],
            rows: [
              ['AT初当り', '1/386.2', '1/364.3', '1/368.1', '1/326.8', '1/340.6', '1/269.6'],
              ['スコードロンバトル（CZ）', '1/238.4', '1/232.3', '1/232.7', '1/218.9', '1/225.2', '1/191.7'],
              ['強チャンス目B', '1/1057.0', '1/993.0', '1/936.2', '1/885.6', '1/840.2', '1/799.2'],
              ['THE ENDモード（確定CZ）', '1/20177.5', '1/17579.1', '1/17586.3', '1/13784.5', '1/11459.0', '1/7077.2'],
              ['強チャンス目で確定CZ', '0.4%', '0.8%', '0.8%', '1.6%', '2.3%', '5.1%'],
              ['スイカでSC（低確）', '40.2%', '44.5%', '41.0%', '48.4%', '42.2%', '55.1%'],
              ['強チェリーでCZ（低確）', '20.0%', '21.0%', '20.0%', '25.0%', '20.0%', '33.0%'],
              ['CZ失敗でアイテム', '20.3%', '21.1%', '21.9%', '22.7%', '25.0%', '30.1%'],
              ['詩乃モードのAT直撃', '1/18091.8', '1/14160.5', '1/14390.8', '1/8498.0', '1/4723.3', '1/3415.7'],
              ['キリトモードへ移行', '10.2%', '10.5%', '10.9%', '11.7%', '12.5%', '25.0%']
            ]
          },
          note: [
            'AT初当り時のステージは、奇数設定なら荒野60%・バギー40%、偶数設定ならその逆です。',
            'CZ失敗時の「曠野の決闘」は設定1で1/128、設定6で1/64。設定5はスナイパーチャンス1・2戦目の相手がデス・ガンになりやすい特徴があります。'
          ]
        }
      ]},
      { id: 'normal', label: '通常時', icon: 'pic', groups: [
        {
          id: 'stage', short: 'ステージ', title: '通常時のステージ',
          where: '酒場と公園は高確と前兆を示す',
          src: [['一撃', '41/#dynamic_header_1']],
          items: [
            { see: '市街地', res: '通常', lv: 'info', img: ['ekishou01', '41/#dynamic_header_1', '市街地ステージ'] },
            { see: 'マーケット', res: '通常', lv: 'info', img: ['ekishou02', '41/#dynamic_header_1', 'マーケット'] },
            { see: '現実世界', res: '通常', lv: 'info', img: ['ekishou03', '41/#dynamic_header_1', '現実世界ステージ'] },
            { see: '酒場', res: '高確か前兆', lv: 'hot', img: ['ekishou04', '41/#dynamic_header_1', '酒場ステージ'] },
            { see: '公園', res: '高確を示唆', lv: 'hot', img: ['ekishou05', '41/#dynamic_header_1', '公園ステージ'] },
            { see: '総督府', res: '前兆', lv: 'info', img: ['ekishou51', '41/#dynamic_header_1', '総督府ステージ'] },
            { see: 'SBCグロッケン', res: 'CZ以上の本前兆に期待', lv: 'hot', img: ['ekishou06', '41/#dynamic_header_1', 'SBCグロッケンステージ'] },
            { see: 'Sterben', res: 'AT濃厚。やめないこと', lv: 'hot', img: ['ekishou07', '41/#dynamic_header_1', 'Sterbenステージ'] }
          ]
        },
        {
          id: 'eye', short: 'アイキャッチ', title: 'アイキャッチ（ステージチェンジ）',
          where: '次のCZ（スコードロンバトル）までの液晶ゲーム数を示す',
          src: [['一撃', '45/#dynamic_header_7']],
          items: [
            { see: 'シノン（青）', res: '示唆の中身はまだ不明', lv: 'info', tag: '調査中', img: ['ekishou156', '45/#dynamic_header_7', 'アイキャッチ：シノン（青）'] },
            { see: 'シノン（緑）', res: '示唆の中身はまだ不明', lv: 'info', tag: '調査中' },
            { see: 'シノン＆キリト（緑）', sub: '300G以内のCZを何度も確認', res: 'CZが近いかも', lv: 'info', tag: '実戦上', img: ['ekishou157', '45/#dynamic_header_7', 'アイキャッチ：シノン＆キリト（緑）'] },
            { see: 'シノン＆キリト（赤）', res: '100G以内のCZ濃厚', lv: 'hot', img: ['ekishou112', '45/#dynamic_header_7', 'アイキャッチ：シノン＆キリト（赤）'] }
          ],
          note: ['実ゲーム数ではなく、液晶に出ているゲーム数で数えます。']
        },
        {
          id: 'fx', short: '演出', title: '通常時の演出',
          where: '前兆のチャンス',
          src: [['一撃', '45/#dynamic_header_11']],
          items: [
            { see: '詩乃アミュスフィア演出', sub: '第3停止後、リールの前にアミュスフィアを着けた詩乃', res: '本前兆の期待度 約84%', lv: 'hot', img: ['ekishou165', '45/#dynamic_header_11', '詩乃アミュスフィア演出'] },
            { see: 'ゲーム数の表示が赤くなる', res: 'ゾーンのチャンス', lv: 'hot', img: ['ekishou52', '45/#dynamic_header_1', 'ゲーム数表示が赤く変化'] },
            { see: 'バレットカウンター7個', sub: '斜めベル（共通ベル）で1個', res: 'CZ抽選（期待度 約20%）', lv: 'info' }
          ]
        }
      ]},
      { id: 'mode', label: 'モード', icon: 'gem', groups: [
        {
          id: 'zone', short: 'ゾーン', title: 'モードごとのゾーン',
          where: '液晶ゲーム数で数える。モードは天国に上がるまで落ちない',
          src: [['一撃', '45/#dynamic_header_3']],
          table: {
            head: ['G数', '通常A', '通常B', '通常C', '通常D', '天国'],
            hi: -1,
            cap: '★は各モードの天井。◎・〇・△は当たりやすさの目安（◎がいちばん多い）',
            rows: [
              ['50G', '△', '△', '△', '△', '〇'],
              ['100G', '〇', '〇', '◎', '◎', '★'],
              ['250G', '〇', '△', '〇', '〇', '–'],
              ['350G', '△', '◎', '◎', '★', '–'],
              ['500G', '〇', '△', '〇', '–', '–'],
              ['650G', '△', '〇', '★', '–', '–'],
              ['800G', '★', '★', '–', '–', '–']
            ]
          },
          note: [
            'AT終了時は、モードに関係なく350Gにする抽選があります。350Gはひとつの狙い目です。',
            'CZ失敗時に天国へ上がる抽選、AT駆け抜け（スナイパーチャンス未勝利）時にモード昇格の抽選があります。'
          ]
        },
        {
          id: 'history', short: '遊技履歴のキャラ', title: '遊技履歴画面のキャラ',
          where: 'PUSHで出る遊技履歴画面の右上のキャラ。モードやGGOモードを示す',
          src: [['一撃', '8/#dynamic_header_7']],
          view: 'grid',
          items: [
            { see: 'シノン', res: '通常C以上 約50%', lv: 'info', img: ['data_23', '8/#dynamic_header_7', '遊技履歴：シノン'] },
            { see: 'キリト', res: '通常C以上 約50%', lv: 'info', img: ['data_24', '8/#dynamic_header_7', '遊技履歴：キリト'] },
            { see: '菊岡', res: '高モードを示唆', lv: 'info', img: ['data_25', '8/#dynamic_header_7', '遊技履歴：菊岡'] },
            { see: 'ALO（4人）', res: '高モードを示唆（強）', lv: 'hot', img: ['data_26', '8/#dynamic_header_7', '遊技履歴：ALO（4人）'] },
            { see: '安岐ナツキ', res: '通常B以上濃厚', lv: 'hot', img: ['data_27', '8/#dynamic_header_7', '遊技履歴：安岐ナツキ'] },
            { see: 'ゼクシード', res: '示唆の中身はまだ不明', lv: 'info', tag: '調査中', img: ['data_28', '8/#dynamic_header_7', '遊技履歴：ゼクシード'] },
            { see: 'ダイン', res: '示唆の中身はまだ不明', lv: 'info', tag: '調査中', img: ['data_29', '8/#dynamic_header_7', '遊技履歴：ダイン'] },
            { see: 'ペイルライダー', res: '示唆の中身はまだ不明', lv: 'info', tag: '調査中', img: ['data_30', '8/#dynamic_header_7', '遊技履歴：ペイルライダー'] },
            { see: '闇風', res: 'キリトモードを示唆', lv: 'info', img: ['data_31', '8/#dynamic_header_7', '遊技履歴：闇風'] },
            { see: '銃士X', res: 'キリトモード濃厚', lv: 'hot', img: ['data_32', '8/#dynamic_header_7', '遊技履歴：銃士X'] },
            { see: '司会者', res: 'モードアップ濃厚', lv: 'hot', img: ['data_33', '8/#dynamic_header_7', '遊技履歴：司会者'] },
            { see: 'シノンとシュピーゲル', res: 'デス・ガンモードを示唆', lv: 'info', img: ['data_34', '8/#dynamic_header_7', '遊技履歴：シノンとシュピーゲル'] },
            { see: 'デス・ガン', res: 'デス・ガンモード濃厚', lv: 'hot', img: ['data_35', '8/#dynamic_header_7', '遊技履歴：デス・ガン'] }
          ]
        },
        {
          id: 'item', short: 'アイテム', title: 'GGOモードのアイテム',
          where: '液晶左に出るアイテムでGGOモードを示す。色が赤なら濃厚',
          src: [['一撃', '8/#dynamic_header_4']],
          view: 'grid',
          items: [
            { see: '光剣', res: 'キリトモードを示唆', lv: 'info', img: ['ekishou17', '8/#dynamic_header_4', 'アイテム：光剣'] },
            { see: 'アミュスフィア', res: '詩乃モードを示唆', lv: 'info', img: ['ekishou18', '8/#dynamic_header_4', 'アイテム：アミュスフィア'] },
            { see: 'へカートⅡ', res: 'シノンモードを示唆', lv: 'info', img: ['ekishou19', '8/#dynamic_header_4', 'アイテム：へカートⅡ'] },
            { see: '黒星', res: '死銃モードを示唆', lv: 'info', img: ['ekishou20', '8/#dynamic_header_4', 'アイテム：黒星'] },
            { see: 'バギー', res: 'どのモードも示唆', lv: 'info', img: ['ekishou21', '8/#dynamic_header_4', 'アイテム：バギー'] }
          ],
          note: [
            'アイテムの色：青は滞在のチャンス、緑は約50%、赤は滞在濃厚。',
            'GGOモードの恩恵：キリトは液晶ゲーム数の天井が最大500Gに、詩乃はCZ当選がAT直撃に、シノンは常にSC高確、死銃はスナイパーチャンス1戦目がデス・ガンになります。'
          ]
        },
        {
          id: 'voice', short: '終了時ボイス', title: 'AT終了時のボイスとランプ',
          where: 'AT終了画面でPUSHを押すと出るボイス。台の左のランプの色でも見分けられる',
          src: [['一撃', '10/#dynamic_header_4']],
          imgs: [['ekishou98', '10/#dynamic_header_4', 'AT終了時のランプ（紫）']],
          items: [
            { see: '白「信じてるから……」', res: 'モードアップを示唆', lv: 'info' },
            { see: '青「一緒に頑張ろ……ね」', res: 'モードアップを示唆', lv: 'info' },
            { see: '黄「私とあたるまで勝ち上がって来なさいよ」', res: 'モードアップを示唆', lv: 'info' },
            { see: '緑「キリト……あなたの強さの理由を見させてもらうわ」', res: 'モードアップを示唆', lv: 'info' },
            { see: '赤「へカートⅡ……お願い。弱い私に、力を貸して。」', res: 'モードアップを示唆', lv: 'info' },
            { see: '紫「LUKガン上げなのあなた!? だからかぁ……」', res: 'モードアップを示唆', lv: 'info' }
          ],
          note: ['設定ではなくモードの示唆です。色ごとの強さはまだ出ていません。']
        }
      ]},
      { id: 'at', label: 'AT・他', icon: 'seven', groups: [
        {
          id: 'freeze', short: 'フリーズ', title: 'ウルティマ・チェリー・ロングフリーズ',
          where: 'ウルティマ・チェリー（中段チェリー）はBARを狙うと止まる',
          src: [['一撃', '5/#dynamic_header_1']],
          items: [
            { see: 'ウルティマ・チェリー', sub: '1/16384', res: 'AT直撃。通常時は一部でロングフリーズ', lv: 'hot', img: ['uchikata11', '5/#dynamic_header_1', 'ウルティマ・チェリー'] },
            { see: 'ロングフリーズ', res: '詩乃エピソード＋AT＋デス・ガンバトルの勝利ストック', lv: 'hot', tag: '実戦上', img: ['ekishou16', '5/#dynamic_header_2', 'ロングフリーズ'] }
          ]
        },
        {
          id: 'icon', short: 'アイコン・スコープ', title: 'EXアイコンとスコープカスタム',
          where: 'アイコンはCZ失敗時の一部でもらえ、AT当選時に発動',
          src: [['一撃', '8/#dynamic_header_6']],
          items: [
            { see: 'EXアイコン（赤）', res: '＋50枚以上の差枚数上乗せ', lv: 'hot', img: ['ekishou117', '8/#dynamic_header_6', 'アイテム獲得時の画面'] },
            { see: 'SCストック', res: 'スナイパーチャンス突入濃厚', lv: 'hot' },
            { see: 'EXアイコン（虹）', res: '上位AT突入濃厚', lv: 'hot' },
            { see: 'スコープ：GGOランプモードでランプ点灯', sub: 'AT中にPUSH→へカートⅡの引き金で切り替え', res: 'スナイパーチャンス獲得濃厚', lv: 'hot' },
            { see: 'スコープ：SHOOTINGモードでロゴが出る', res: 'スナイパーチャンス獲得濃厚', lv: 'hot' }
          ]
        }
      ]}
    ]
  });
})();
