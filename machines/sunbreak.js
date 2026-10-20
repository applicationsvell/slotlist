// スマスロ モンスターハンターライズ：サンブレイク
// img: [ファイル名（img/sunbreak/ の中）, 一撃ページ内の場所, 写真の説明]
(function () {
  var G = 'https://1geki.jp/slot/l_mh_sun/';

  SHISA.add({
    id: 'sunbreak',
    short: 'サンブレイク',
    full: 'スマスロ モンスターハンターライズ：サンブレイク',
    g: G,
    spec: [
      ['メーカー', 'アデリオン'],
      ['導入日', '2026年10月5日'],
      ['設定', '1〜6'],
      ['AT初当り', '1/349.9〜1/242.3'],
      ['まとめた日', '2026年10月20日']
    ],
    // 設定判別ツール（数値は一撃の設定差ページから）
    judge: {
      settings: [1, 2, 3, 4, 5, 6],
      // 通常時のゲーム数に対して何回あったか（値は分母）
      rates: [
        { id: 'hit', label: 'AT初当り', p: [349.9, 337.0, 319.8, 283.6, 264.0, 242.3] }
      ],
      memo: ['eye', 'serifu'],
      cautions: ['数値がわかっている設定差はAT初当りだけです。終了画面・トロフィー・エンディングの示唆を重ねて判断します。']
    },
    sources: [['一撃（1geki）解析ページ', G]],
    tabs: [
      { id: 'setting', label: '設定示唆', icon: 'star', groups: [
        {
          id: 'end', short: '終了画面', title: 'AT終了画面',
          where: 'ATが終わったときのキャラ。エンタライオンなら設定6',
          src: [['一撃', '6/#dynamic_header_1']],
          view: 'grid',
          items: [
            { see: 'ジェイ', res: '奇数設定を示唆', lv: 'oe', img: ['ekishou108', '6/#dynamic_header_1', 'AT終了画面：ジェイ'] },
            { see: 'アルロー', res: '奇数設定を示唆', lv: 'oe', img: ['ekishou109', '6/#dynamic_header_1', 'AT終了画面：アルロー'] },
            { see: 'ガレアス', res: '奇数設定を示唆', lv: 'oe', img: ['ekishou110', '6/#dynamic_header_1', 'AT終了画面：ガレアス'] },
            { see: 'ロンディーネ', res: '偶数設定を示唆', lv: 'oe', img: ['ekishou111', '6/#dynamic_header_1', 'AT終了画面：ロンディーネ'] },
            { see: 'ルーチカ', res: '偶数設定を示唆', lv: 'oe', img: ['ekishou112', '6/#dynamic_header_1', 'AT終了画面：ルーチカ'] },
            { see: 'フィオレーネ＋オトモアイルー', res: '高設定示唆（弱）', lv: 'blue', img: ['ekishou113', '6/#dynamic_header_1', 'AT終了画面：フィオレーネ＋オトモアイルー'] },
            { see: 'チッチェ＋オトモ2匹', sub: 'アイルー・ガルク', res: '高設定示唆（強）', lv: 'green', img: ['ekishou114', '6/#dynamic_header_1', 'AT終了画面：チッチェ＋オトモアイルー＋オトモガルク'] },
            { see: 'フィオレーネ＆ロンディーネ', res: '設定2を否定', lv: 'info', img: ['ekishou115', '6/#dynamic_header_1', 'AT終了画面：フィオレーネ＆ロンディーネ'] },
            { see: 'ジェイ＋アルロー＋ガレアス', res: '設定3を否定', lv: 'info', img: ['ekishou116', '6/#dynamic_header_1', 'AT終了画面：ジェイ＋アルロー＋ガレアス'] },
            { see: 'ヒノエ＆ミノト', res: '設定2以上濃厚', lv: 'blue', img: ['ekishou103', '6/#dynamic_header_1', 'AT終了画面：ヒノエ＆ミノト'] },
            { see: '全員集合', res: '設定5以上濃厚', lv: 'purple', img: ['ekishou104', '6/#dynamic_header_1', 'AT終了画面：全員集合'] },
            { see: 'エンタライオン', res: '設定6濃厚', lv: 'rain', img: ['ekishou105', '6/#dynamic_header_1', 'AT終了画面：エンタライオン'] }
          ]
        },
        {
          id: 'trophy', short: 'トロフィー', title: 'エンタトロフィー',
          where: 'AT終了画面で出ることがあるトロフィー',
          src: [['一撃', '6/#dynamic_header_2']],
          items: [
            { see: '銅', res: '設定2以上濃厚', lv: 'blue' },
            { see: '銀', res: '設定3以上濃厚', lv: 'gold' },
            { see: '金', res: '設定4以上濃厚', lv: 'red' },
            { see: '紅葉柄', res: '設定5以上濃厚', lv: 'purple', img: ['ekishou106', '6/#dynamic_header_2', 'エンタトロフィー（紅葉柄）'] },
            { see: '虹', res: '設定6濃厚', lv: 'rain' }
          ]
        },
        {
          id: 'coins', short: '枚数表示', title: '獲得枚数表示',
          where: 'AT中の獲得枚数表示',
          src: [['一撃', '0/#dynamic_header_6']],
          items: [
            { see: '222枚over', res: '設定2以上濃厚', lv: 'blue' },
            { see: '246枚over', res: '設定2・4・6濃厚', lv: 'oe' },
            { see: '456枚over', res: '設定4以上濃厚', lv: 'red' },
            { see: '555枚over', res: '設定5以上濃厚', lv: 'purple' },
            { see: '666枚over', res: '設定6濃厚', lv: 'rain', img: ['ekishou107', '0/#dynamic_header_6', '獲得枚数表示：666枚over'] }
          ]
        },
        {
          id: 'ending', short: 'エンディング', title: 'エンディング中のスタンプ',
          where: 'エンディング中にレア役を引くと出るスタンプの色',
          src: [['一撃', '0/#dynamic_header_7']],
          items: [
            { see: '青', res: '奇数設定を示唆', lv: 'oe', img: ['ekishou64', '0/#dynamic_header_7', 'エンディング中のスタンプ（青）'] },
            { see: '黄', res: '偶数設定を示唆', lv: 'oe' },
            { see: '緑', res: '高設定示唆（弱）', lv: 'blue' },
            { see: '赤', res: '高設定示唆（強）', lv: 'green' },
            { see: '銅', res: '設定2以上濃厚', lv: 'blue' },
            { see: '銀', res: '設定3以上濃厚', lv: 'gold' },
            { see: '金', res: '設定4以上濃厚', lv: 'red' },
            { see: '紅葉柄', res: '設定5以上濃厚', lv: 'purple' },
            { see: '虹', res: '設定6濃厚', lv: 'rain' }
          ]
        },
        {
          id: 'num', short: '設定差', title: '設定差のある数値',
          where: '表は横にスクロールできます',
          src: [['一撃', '0/#dynamic_header_1']],
          table: {
            head: ['項目', '設定1', '設定2', '設定3', '設定4', '設定5', '設定6'],
            rows: [
              ['AT初当り', '1/349.9', '1/337.0', '1/319.8', '1/283.6', '1/264.0', '1/242.3']
            ]
          },
          note: [
            '設定4以上の目安は1/290より軽いこと。',
            '高設定ほど良いBZシナリオが選ばれやすいとされています（「通常時」タブのアイキャッチで見分けられます）。',
            'レア役でCZに当たったときの「猛焔一閃」直撃は、設定1で弱レア役0.4%・強レア役1.6%。高設定ほど多いと見られています。'
          ]
        }
      ]},
      { id: 'normal', label: '通常時', icon: 'pic', groups: [
        {
          id: 'stage', short: 'ステージ', title: '通常時のステージ',
          where: '内部状態（通常・高確・超高確）を示す',
          src: [['一撃', '41/#dynamic_header_2']],
          items: [
            { see: 'エルガド', res: '通常', lv: 'info', img: ['ekishou03', '41/#dynamic_header_2', 'ステージ：エルガド'] },
            { see: '密林', res: '通常', lv: 'info', img: ['ekishou04', '41/#dynamic_header_2', 'ステージ：密林'] },
            { see: '砂原', res: '高確を示唆', lv: 'hot', img: ['ekishou05', '41/#dynamic_header_2', 'ステージ：砂原'] },
            { see: '溶岩洞', res: '移ったときは超高確濃厚＋10G以上保証', lv: 'hot', img: ['ekishou06', '41/#dynamic_header_2', 'ステージ：溶岩洞'] }
          ],
          note: ['溶岩洞は、超高確から落ちたあとも残ることがあります。']
        },
        {
          id: 'eye', short: 'アイキャッチ', title: 'アイキャッチ（ステージチェンジ）',
          where: 'いまのBZシナリオを示す。シナリオで次のブレイクゾーンのレベルが変わる',
          src: [['一撃', '57/#dynamic_header_1']],
          view: 'grid',
          items: [
            { see: 'キャラなし', res: '基本パターン', lv: 'info', img: ['ekishou125', '57/#dynamic_header_1', 'アイキャッチ：キャラなし'] },
            { see: 'ジェイ（白）', res: 'シナリオB以上濃厚', lv: 'info', img: ['ekishou117', '57/#dynamic_header_1', 'アイキャッチ：ジェイ（白）'] },
            { see: 'ルーチカ（青）', res: 'シナリオC以上濃厚', lv: 'hot', img: ['ekishou118', '57/#dynamic_header_1', 'アイキャッチ：ルーチカ（青）'] },
            { see: 'フィオレーネ（黄）', res: 'シナリオD以上濃厚', lv: 'hot', img: ['ekishou119', '57/#dynamic_header_1', 'アイキャッチ：フィオレーネ（黄）'] },
            { see: 'バハリ（緑）', res: 'シナリオE以上濃厚', lv: 'hot', img: ['ekishou120', '57/#dynamic_header_1', 'アイキャッチ：バハリ（緑）'] },
            { see: 'ガレアス（赤）', res: 'シナリオF以上濃厚', lv: 'hot', img: ['ekishou121', '57/#dynamic_header_1', 'アイキャッチ：ガレアス（赤）'] },
            { see: 'チッチェ（紫）', res: 'シナリオG以上濃厚', lv: 'hot', img: ['ekishou122', '57/#dynamic_header_1', 'アイキャッチ：チッチェ（紫）'] }
          ]
        },
        {
          id: 'serifu', short: 'チッチェのセリフ', title: 'チッチェのセリフ',
          where: '「お待ちしておりました」に続くセリフで、次のブレイクゾーンのレベルがわかる',
          src: [['一撃', '57/#dynamic_header_2']],
          imgs: [['ekishou123', '57/#dynamic_header_2', 'チッチェのセリフ演出']],
          items: [
            { see: '「どちらのクエストへ向かわれますか？」', res: '次回レベル「HI」以上を示唆（弱）', lv: 'info' },
            { see: '「おすすめしたいクエストがいくつかありますよ」', res: '次回レベル「HI」以上を示唆（強）', lv: 'hot' },
            { see: '「重要なクエストがありますよ」', res: '次回レベル「HI」以上濃厚', lv: 'hot' },
            { see: '「先ほど珍しい依頼が入ってきましたよ」', res: '次回レベル「SP」濃厚（次のブレイクゾーンでAT濃厚）', lv: 'hot' }
          ]
        },
        {
          id: 'scenario', short: 'BZシナリオ', title: 'BZシナリオとレベル',
          where: 'ブレイクゾーンに当たった回数ごとのレベル。設定変更時とAT終了時に決まる',
          src: [['一撃', '0/#dynamic_header_4']],
          table: {
            head: ['シナリオ', '1回目', '2回目', '3回目', '4回目', '5回目', '6回目', '7回目'],
            hi: -1,
            cap: 'レベルが高いほど良いBZテーブルが選ばれやすい。SPはBZテーブル7（AT濃厚）',
            rows: [
              ['A', 'MID', 'LOW', 'LOW', 'HI', 'LOW', 'LOW', 'SP'],
              ['B', 'MID', 'LOW', 'HI', 'LOW', 'LOW', 'HI', 'SP'],
              ['C', 'MID', 'HI', 'LOW', 'HI', 'LOW', 'HI', 'SP'],
              ['D', 'MID', 'LOW', 'LOW', 'HI', 'HI', 'HI', 'SP'],
              ['E', 'MID', 'LOW', 'HI', 'HI', 'HI', 'HI', 'SP'],
              ['F', 'MID', 'HI', 'HI', 'HI', 'HI', 'HI', 'SP'],
              ['G', 'HI', 'HI', 'HI', 'HI', 'HI', 'HI', 'SP'],
              ['H', 'LOW', 'LOW', 'SP', '–', '–', '–', '–'],
              ['I', 'MID', 'MID', 'SP', '–', '–', '–', '–']
            ]
          },
          note: ['設定1の選択率：A 32.0%、B 27.3%、C 14.1%、D 12.5%、E 6.3%、F・G 各3.1%、H・I 各0.8%。']
        }
      ]},
      { id: 'cz', label: 'CZ', icon: 'bolt', groups: [
        {
          id: 'lamp', short: 'ハンターランプ', title: 'ハンターランプのステップアップ',
          where: 'レア役やオトモ潜水艇のCZ前兆中に出る。ランプの色でCZ期待度がわかる',
          src: [['一撃', '57/#dynamic_header_4']],
          imgs: [['ekishou100', '57/#dynamic_header_4', 'ハンターランプステップアップ（赤）']],
          chart: {
            cap: 'バーの長さ＝CZ期待度（0〜100%）',
            rows: [
              { k: '青', v: 16.3, txt: '16.3%' },
              { k: '黄', v: 25.9, txt: '25.9%' },
              { k: '緑', v: 52.6, txt: '52.6%' },
              { k: '赤', v: 98.2, txt: '98.2%' },
              { k: '虹', flag: 'AT濃厚', m: '猛焔一閃かBZテーブル7が出る' }
            ]
          }
        },
        {
          id: 'mission', short: 'ミッション', title: 'ミッション演出',
          where: 'CZの当落を知らせる演出。チャンスアップ（赤タイトル・カットイン・赤背景）で期待度が大きく上がる',
          src: [['一撃', '57/#dynamic_header_5']],
          imgs: [['ekishou96', '57/#dynamic_header_5', 'チャンスアップ：赤タイトル'], ['ekishou95', '57/#dynamic_header_5', 'チャンスアップ：カットイン'], ['ekishou97', '57/#dynamic_header_5', 'チャンスアップ：赤背景']],
          items: [
            { see: '変化ミッション', res: 'CZ期待度 24.1%（チャンスアップで80%超）', lv: 'info' },
            { see: '捕獲ミッション', res: 'CZ期待度 30.1%（チャンスアップで80%超）', lv: 'info' },
            { see: '斬撃ミッション', res: 'CZ期待度 81.4%（チャンスアップでCZ濃厚）', lv: 'hot' },
            { see: '決断ミッション', res: 'CZ濃厚。BZテーブル3以上かアイルー福引', lv: 'hot', img: ['ekishou124', '57/#dynamic_header_5', 'ミッション演出：決断ミッション'] }
          ]
        },
        {
          id: 'replay', short: 'リプレイ回数', title: 'リプレイの回数（オトモ潜水艇）',
          where: 'リプレイ20回で1周期。周期ごとにオトモ潜水艇でCZの当落を知らせる',
          src: [['一撃', '45/#dynamic_header_1']],
          items: [
            { see: '画面右下のオトモ潜水艇', res: 'いまのリプレイ回数がわかる', lv: 'info', img: ['ekishou10', '45/#dynamic_header_1', 'オトモ潜水艇（リプレイ回数）'] },
            { see: '5周期目に到達', res: 'CZ濃厚', lv: 'hot' },
            { see: 'CZの種類', res: 'ブレイクゾーン 80%（成功 37.1%）、アイルー福引 20%（成功 60%）', lv: 'info' },
            { see: 'リプレイの回数', res: 'AT終了後も引き継がれる', lv: 'hot', tag: '実戦上' }
          ],
          note: ['数値は設定1のもの。当たる周期は1〜5周期で均等（各20%）です。']
        }
      ]},
      { id: 'at', label: 'AT・他', icon: 'seven', groups: [
        {
          id: 'ura', short: '裏ボタン', title: '裏ボタン',
          where: 'PUSHを押してスピーカーランプなどが光れば成功',
          src: [['一撃', '8/#dynamic_header_1']],
          items: [
            { see: 'ブレイクゾーンの継続ジャッジ', sub: 'レバーON〜第1停止前にPUSH', res: 'ランプ白で継続濃厚、赤で継続＋レア役濃厚', lv: 'hot', img: ['ekishou11', '8/#dynamic_header_1', 'ブレイクゾーン'] },
            { see: '猛焔一閃・アイルー福引中', sub: 'レバーON〜第1停止前にPUSH', res: 'ランプ白で小役以上、赤でレア役以上濃厚', lv: 'hot' },
            { see: '前兆クエストのファイナルアタック', sub: '第1停止前にPUSH', res: '特殊演出で本前兆濃厚（本前兆の約50%で発生）', lv: 'hot' },
            { see: '盟勇クエストのSTパート', sub: 'レバーON〜第1停止前にPUSH', res: 'ランプ白で発展濃厚、赤で発展＋討伐濃厚', lv: 'hot' },
            { see: '盟勇クエストの討伐パート', sub: '共通ベル・レア役の第3停止後に↑か↓', res: 'ウーファーが鳴れば討伐濃厚', lv: 'hot' },
            { see: '剥ぎ取りラッシュ：第3停止後にPUSH', res: 'ランプの色で継続率。青＜黄＜緑＜赤＜紫', lv: 'hot', img: ['ekishou50', '8/#dynamic_header_8', '剥ぎ取りラッシュ'] },
            { see: '剥ぎ取りラッシュ：レバーON〜第1停止前にPUSH', res: 'Eフラッシュ白で継続濃厚、赤で継続＋100G以上上乗せ濃厚', lv: 'hot' }
          ]
        },
        {
          id: 'freeze', short: 'フリーズ', title: 'ロングフリーズ',
          where: '通常時のBAR揃いフラグ（リプレイ）の一部で発生（実戦上）',
          src: [['一撃', '5/#dynamic_header_1']],
          items: [
            { see: 'ロングフリーズ', res: '上位AT「サンブレイクラッシュG」＋初期300G', lv: 'hot', img: ['ekishou65', '5/#dynamic_header_1', 'ロングフリーズ'] }
          ],
          note: ['中段チェリーは確認されておらず、ないとみられています。']
        }
      ]}
    ]
  });
})();
