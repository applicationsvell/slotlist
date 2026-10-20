// スマスロ リコリス・リコイル
// img: [ファイル名（img/lycoreco/ の中）, 一撃ページ内の場所, 写真の説明]
(function () {
  var G = 'https://1geki.jp/slot/l_lycoreco/';

  SHISA.add({
    id: 'lycoreco',
    short: 'リコリス・リコイル',
    full: 'スマスロ リコリス・リコイル',
    g: G,
    spec: [
      ['メーカー', '銀座'],
      ['導入日', '2026年9月7日'],
      ['設定', '1〜6'],
      ['ラッシュ初当り', '1/328.8〜1/256.7'],
      ['天井', '850G（短縮 250・400・600・750G）'],
      ['まとめた日', '2026年10月20日']
    ],
    sources: [['一撃（1geki）解析ページ', G]],
    tabs: [
      { id: 'setting', label: '設定示唆', icon: 'star', groups: [
        {
          id: 'end', short: '終了画面', title: 'ラッシュ終了画面',
          where: '私服は、終わったラッシュと違うキャラが出たら設定4以上濃厚',
          src: [['一撃', '6/#dynamic_header_1']],
          items: [
            { see: 'たきな リコリス制服', sub: 'たきなラッシュ後の基本', res: 'デフォルト', lv: 'base', img: ['ekishou120', '6/#dynamic_header_1', 'ラッシュ終了画面：たきなリコリス制服'] },
            { see: '千束 リコリス制服', sub: '千束ラッシュ後の基本', res: 'デフォルト', lv: 'base', img: ['ekishou121', '6/#dynamic_header_1', 'ラッシュ終了画面：千束リコリス制服'] },
            { see: 'たきな私服', sub: '千束ラッシュ後なら設定4以上濃厚', res: '高設定示唆（弱）', lv: 'blue', img: ['ekishou122', '6/#dynamic_header_1', 'ラッシュ終了画面：たきな私服'] },
            { see: '千束私服', sub: 'たきなラッシュ後なら設定4以上濃厚', res: '高設定示唆（弱）', lv: 'blue', img: ['ekishou123', '6/#dynamic_header_1', 'ラッシュ終了画面：千束私服'] },
            { see: '千束＆たきな ドレスコード', res: '高設定示唆（強）', lv: 'green', img: ['ekishou124', '6/#dynamic_header_1', 'ラッシュ終了画面：千束＆たきなドレスコード'] },
            { see: '押上の風景', res: '設定2以上濃厚', lv: 'blue', img: ['ekishou125', '6/#dynamic_header_1', 'ラッシュ終了画面：押上の風景'] },
            { see: 'ロボ太', res: '設定4以上濃厚', lv: 'red', img: ['ekishou126', '6/#dynamic_header_1', 'ラッシュ終了画面：ロボ太'] },
            { see: 'ハワイ', res: '設定6濃厚', lv: 'rain', img: ['ekishou127', '6/#dynamic_header_1', 'ラッシュ終了画面：ハワイ'] }
          ],
          note: ['上位ラッシュは、前半パート（50G）でポイントがMAXになったときの画面でも、この終了画面が出ます。']
        },
        {
          id: 'trophy', short: 'トロフィー', title: 'サミートロフィー',
          where: 'リコリスラッシュ・ラッシュWの終了時に出る',
          src: [['一撃', '9/#dynamic_header_1']],
          items: [
            { see: '銅', res: '設定2以上濃厚', lv: 'blue' },
            { see: '銀', res: '設定3以上濃厚', lv: 'gold' },
            { see: '金', res: '設定4以上濃厚', lv: 'red' },
            { see: 'キリン柄', res: '設定5以上濃厚', lv: 'purple' },
            { see: '虹', res: '設定6濃厚', lv: 'rain' }
          ],
          note: [
            '総ゲーム数で出やすさが変わります。0〜1000Gは銅が4〜7%と出やすく、3001〜4000Gと5001〜8000Gも出やすい区間です。',
            'ほかのサミー機より、銅が出たときの高設定期待度がかなり高いとされています。'
          ]
        },
        {
          id: 'episode', short: 'プロローグ', title: '初当り時のエピソード（プロローグ）',
          where: '画面にEP番号は出ないので、場面の中身で見分ける',
          src: [['一撃', '0/#dynamic_header_12']],
          items: [
            { see: 'EP1 Time will tell ①', sub: '真島が車内で通話', res: 'デフォルト', lv: 'base', img: ['ekishou138', '0/#dynamic_header_12', 'EP1 Time will tell ①'] },
            { see: 'EP2 The more the merrier', sub: 'ロボ太とウォールナットが電脳空間で会話', res: 'デフォルト', lv: 'base', img: ['ekishou139', '0/#dynamic_header_12', 'EP2 The more the merrier'] },
            { see: 'EP3 Repay evil with evil', sub: '真島がモニターをハッキングして演説', res: '高設定示唆（弱）', lv: 'blue', img: ['ekishou140', '0/#dynamic_header_12', 'EP3 Repay evil with evil'] },
            { see: 'EP4 Time will tell ②', sub: '真島がビルの屋上で通話', res: '高設定示唆（強）', lv: 'green', img: ['ekishou141', '0/#dynamic_header_12', 'EP4 Time will tell ②'] }
          ]
        },
        {
          id: 'epbonus', short: 'エピソードボーナス', title: 'エピソードボーナスの種類',
          where: 'ラッシュ中の赤7揃いから入るボーナス',
          src: [['一撃', '0/#dynamic_header_14']],
          items: [
            { see: 'EP1 Easy does it', sub: 'リコリスラッシュ', res: 'デフォルト', lv: 'base', img: ['ekishou142', '0/#dynamic_header_15', 'ボーナス：EP1 Easy does it'] },
            { see: 'EP2 Nothing seek, nothing find', sub: 'リコリスラッシュ', res: 'デフォルト', lv: 'base', img: ['ekishou143', '0/#dynamic_header_15', 'ボーナス：EP2 Nothing seek, nothing find'] },
            { see: 'EP3 Opposites attract', sub: 'リコリスラッシュ', res: '高設定示唆（弱）', lv: 'blue', img: ['ekishou144', '0/#dynamic_header_15', 'ボーナス：EP3 Opposites attract'] },
            { see: 'EP4 Recoil of Lycoris -side 千束＆真島-', sub: 'リコリスラッシュ', res: '高設定示唆（強）', lv: 'green', img: ['ekishou145', '0/#dynamic_header_15', 'ボーナス：EP4 side 千束＆真島'] },
            { see: 'EP1 More haste, less speed', sub: 'リコリスラッシュW', res: 'デフォルト', lv: 'base', img: ['ekishou116', '0/#dynamic_header_16', 'ボーナス：EP1 More haste, less speed'] },
            { see: 'EP2 So far, so good', sub: 'リコリスラッシュW', res: 'デフォルト', lv: 'base', img: ['ekishou117', '0/#dynamic_header_16', 'ボーナス：EP2 So far, so good'] },
            { see: 'EP3 Recoil of Lycoris -side リコリコ-', sub: 'リコリスラッシュW', res: '高設定示唆（弱）', lv: 'blue', img: ['ekishou118', '0/#dynamic_header_16', 'ボーナス：EP3 side リコリコ'] },
            { see: 'EP4 Recoil of Lycoris -side ハワイ-', sub: 'リコリスラッシュW', res: '高設定示唆（強）', lv: 'green', img: ['ekishou119', '0/#dynamic_header_16', 'ボーナス：EP4 side ハワイ'] }
          ],
          note: ['EP3の示唆が効くのは、同じラッシュの中で1回目に選ばれたときだけです。EP4はいつでも同じ割合で出ます。']
        },
        {
          id: 'lamp', short: '上部ランプ', title: '上部ランプの色',
          where: 'ボーナスの1000pt到達後とエンディング中、レア役で光るランプ',
          src: [['一撃', '0/#dynamic_header_18']],
          imgs: [['ekishou147', '0/#dynamic_header_18', '上部ランプの位置']],
          items: [
            { see: '青', res: 'デフォルト', lv: 'base' },
            { see: '黄', res: 'デフォルト', lv: 'base' },
            { see: '緑', res: '高設定示唆（弱）', lv: 'blue' },
            { see: '赤', res: '高設定示唆（強）', lv: 'green' }
          ]
        },
        {
          id: 'num', short: '設定差', title: '設定差のある数値',
          where: '表は横にスクロールできます',
          src: [['一撃', '0/#dynamic_header_1']],
          table: {
            head: ['項目', '設定1', '設定2', '設定3', '設定4', '設定5', '設定6'],
            rows: [
              ['リコリスラッシュ', '1/328.8', '1/323.4', '1/312.1', '1/288.3', '1/271.6', '1/256.7'],
              ['CZ', '1/198.7', '1/196.9', '1/191.3', '1/183.3', '1/175.9', '1/169.4'],
              ['幼少期CZ', '1/3965.0', '1/3706.6', '1/3107.3', '1/2925.9', '1/2425.8', '1/2084.8'],
              ['ラッシュ直撃', '1/22429.5', '1/19006.5', '1/15454.1', '1/10809.3', '1/7809.6', '1/6263.7'],
              ['共通ベル（通常時）', '1/95.8', '1/95.8', '1/95.8', '1/87.6', '1/83.2', '1/79.1'],
              ['弱リコリス目で変換高確', '38.3%', '38.3%', '39.1%', '41.0%', '43.0%', '44.9%'],
              ['150Gで変換高確', '50.0%', '50.0%', '50.0%', '54.7%', '58.6%', '62.5%'],
              ['400GでCZ', '10.9%', '11.7%', '14.5%', '16.8%', '19.5%', '25.4%'],
              ['ラッシュ50後の天井短縮', '11.7%', '12.1%', '13.3%', '16.8%', '20.3%', '23.4%']
            ]
          },
          note: [
            '設定4以上の目安はラッシュ初当りが1/300より軽いこと。CZは1/175前後が設定5以上の目安です。',
            '天井短縮のうち750Gへの短縮（7.4%）は全設定共通なので数えないこと。ラッシュ20後（駆け抜け）は設定に関係なく短縮します。'
          ]
        }
      ]},
      { id: 'normal', label: '通常時', icon: 'pic', groups: [
        {
          id: 'stage', short: 'ステージ', title: '通常時のステージ',
          where: '通常ステージ2種類と前兆ステージ3種類',
          src: [['一撃', '41/#dynamic_header_2']],
          items: [
            { see: '北押上', res: '通常', lv: 'info', img: ['ekishou05', '41/#dynamic_header_2', '北押上ステージ'] },
            { see: '喫茶リコリコ', res: '通常', lv: 'info', img: ['ekishou06', '41/#dynamic_header_2', '喫茶リコリコステージ'] },
            { see: 'BAR', res: 'ゲーム数前兆。規定ゲーム数を示唆', lv: 'info', img: ['ekishou07', '41/#dynamic_header_2', 'BARステージ'] },
            { see: 'リコリス', res: '前兆ステージ', lv: 'hot', img: ['ekishou08', '41/#dynamic_header_2', 'リコリスステージ'] },
            { see: '公園', res: '強前兆ステージ', lv: 'hot', img: ['ekishou09', '41/#dynamic_header_2', '公園ステージ'] }
          ],
          note: ['BARからリコリス・公園に移れば期待度アップ。BARを通らずに公園へ移れば大チャンスです。']
        },
        {
          id: 'map', short: '前兆マップ', title: '前兆マップ（サブ液晶のマス）',
          where: '前兆中にサブ液晶に出るマス。最初は9マス',
          src: [['一撃', '41/#dynamic_header_3']],
          imgs: [['ekishou10', '41/#dynamic_header_3', '前兆中のサブ液晶（前兆マップ）']],
          items: [
            { see: '最初のマスが10マス', res: '直撃濃厚', lv: 'hot' },
            { see: '白マス', res: '基本', lv: 'info' },
            { see: '青マス', res: '弱チャンス（1pt）', lv: 'info' },
            { see: '緑マス', res: '中チャンス（2pt）。3つ以上で幼少期CZの期待度大幅アップ', lv: 'hot' },
            { see: '赤マス', res: '強チャンス（3pt）', lv: 'hot' },
            { see: 'シルエットマス', res: '本前兆の期待度アップ', lv: 'hot' },
            { see: '「？」マス', res: '発展か告知の可能性あり', lv: 'info' },
            { see: '「！」マス', res: '発展か告知濃厚', lv: 'hot' },
            { see: '「！！！」マス', res: '本前兆の期待度が大きくアップ', lv: 'hot' },
            { see: '「V」マス', res: '直撃告知', lv: 'hot' }
          ],
          chart: {
            cap: '色マスの合計ポイント（青1・緑2・赤3）ごとの当選期待度（バーの長さ＝0〜100%）',
            rows: [
              { k: '2pt', v: 9.2, txt: '約9.2%' },
              { k: '3pt', v: 12.4, txt: '約12.4%' },
              { k: '4pt', v: 16.8, txt: '約16.8%' },
              { k: '5pt', v: 22.3, txt: '約22.3%' },
              { k: '6pt', v: 50.6, txt: '約50.6%' },
              { k: '7pt', v: 72.2, txt: '約72.2%' },
              { k: '8pt', v: 92.4, txt: '約92.4%' },
              { k: '9pt', v: 98.2, txt: '約98.2%' },
              { k: '10pt以上', flag: '当選濃厚', m: '10pt＋緑なし・11pt＋青なし・12〜13pt＋赤なしは直撃濃厚。11pt＋赤なしは幼少期CZ以上濃厚' }
            ]
          }
        },
        {
          id: 'renzoku', short: '連続演出', title: '前兆の連続演出',
          where: 'ゲーム数前兆の最後の連続演出。成功すればCZか直撃',
          src: [['一撃', '41/#dynamic_header_4']],
          items: [
            { see: 'VS フキ', sub: '幼少期CZ以上 7.4%', res: '期待度 低', lv: 'info', img: ['ekishou11', '41/#dynamic_header_4', '連続演出：VSフキ'] },
            { see: 'VS ジン', sub: '幼少期CZ以上 7.4%', res: 'フキより上', lv: 'info', img: ['ekishou12', '41/#dynamic_header_4', '連続演出：VSジン'] },
            { see: 'VS 真島', sub: '幼少期CZ以上 5.9%', res: 'ジンより上', lv: 'info', img: ['ekishou13', '41/#dynamic_header_4', '連続演出：VS真島'] },
            { see: 'VS リコリス', sub: '幼少期CZ以上 16.0%', res: '期待度 高。失敗しても何かあるかも', lv: 'hot', img: ['ekishou14', '41/#dynamic_header_4', '連続演出：VSリコリス'] }
          ],
          note: ['タイトルの色は青・赤・キリン柄の3種類です。']
        },
        {
          id: 'eye', short: 'アイキャッチ', title: 'CZ失敗時のアイキャッチ',
          where: '天井短縮とCZ復活を示す',
          src: [['一撃', '51/#dynamic_header_1']],
          view: 'grid',
          items: [
            { see: 'たきなA', res: '基本パターン', lv: 'info', img: ['ekishou132', '51/#dynamic_header_1', 'アイキャッチ：たきなA'] },
            { see: 'クルミA', res: '天井短縮の期待度 低', lv: 'info', img: ['ekishou133', '51/#dynamic_header_1', 'アイキャッチ：クルミA'] },
            { see: 'たきなB', res: '天井短縮の期待度 中', lv: 'hot', img: ['ekishou134', '51/#dynamic_header_1', 'アイキャッチ：たきなB'] },
            { see: 'クルミB', res: '天井短縮の期待度 高', lv: 'hot', img: ['ekishou135', '51/#dynamic_header_1', 'アイキャッチ：クルミB'] },
            { see: '千束A', res: 'CZ復活の期待度が大きくアップ', lv: 'hot', img: ['ekishou136', '51/#dynamic_header_1', 'アイキャッチ：千束A'] },
            { see: '千束B', res: 'CZ復活濃厚', lv: 'hot', img: ['ekishou137', '51/#dynamic_header_1', 'アイキャッチ：千束B'] }
          ]
        }
      ]},
      { id: 'zone', label: 'ゾーン', icon: 'gem', groups: [
        {
          id: 'zone', short: 'ゾーン', title: 'ラッシュ後のゾーン',
          where: '100・250・400・600・750GがCZのチャンス',
          src: [['一撃', '45/#dynamic_header_4']],
          table: {
            head: ['G数', 'CZ', '変換高確へ'],
            hi: -1,
            cap: '◎・○はCZの当たりやすさの目安。★は最深天井（850G）',
            rows: [
              ['0G〜', '○', '–'],
              ['50G〜', '–', '50.0%'],
              ['100G〜', '◎', '–'],
              ['150G〜', '–', '50.0〜62.5%'],
              ['250G〜', '◎', '–'],
              ['300G〜', '–', '移行濃厚'],
              ['400G〜', '10.9〜25.4%', '–'],
              ['450G〜', '–', '50.0%'],
              ['600G〜', '◎', '–'],
              ['650G〜', '–', '25.0%'],
              ['750G〜', '○', '–'],
              ['850G', '★', '–']
            ]
          },
          note: [
            '250G＋αまでにCZに当たる期待度は約90%です。',
            '天井は最深850G。短縮天井（250・400・600・750G）に当たったときは、ゲーム数前兆からラッシュ濃厚のCZになります。'
          ]
        },
        {
          id: 'stamp', short: 'スタンプ', title: 'スタンプカードと短縮告知',
          where: '前兆失敗時の一部でカードが出る。リプレイで1個、12個でCZ抽選',
          src: [['一撃', '45/#dynamic_header_7']],
          items: [
            { see: 'スタンプカードが出る', sub: '250Gのゾーン後がいちばん出やすい（20.4%）', res: 'リプレイでスタンプ。12個でCZ抽選', lv: 'info', img: ['ekishou19', '45/#dynamic_header_7', 'スタンプ'] },
            { see: '短縮告知：弱（青）', res: '短縮天井が選ばれている濃厚', lv: 'hot', img: ['ekishou81', '45/#dynamic_header_9', '短縮告知：弱告知（青）'] },
            { see: '短縮告知：中（緑）', res: '短縮天井が選ばれている濃厚', lv: 'hot', img: ['ekishou82', '45/#dynamic_header_9', '短縮告知：中告知（緑）'] },
            { see: '短縮告知：強（赤）', res: '短縮天井が選ばれている濃厚', lv: 'hot', img: ['ekishou83', '45/#dynamic_header_9', '短縮告知：強告知（赤）'] },
            { see: 'スタンプMAXの連続演出「たぬきを捕まえろ！」', res: '期待度 低', lv: 'info', img: ['ekishou21', '45/#dynamic_header_11', '連続演出：たぬきを捕まえろ！'] },
            { see: '「ゲームに勝利せよ！」', res: 'たぬきより上', lv: 'info', img: ['ekishou20', '45/#dynamic_header_11', '連続演出：ゲームに勝利せよ！'] },
            { see: '「パフェを届けろ！」', res: '期待度 高', lv: 'hot', img: ['ekishou22', '45/#dynamic_header_11', '連続演出：パフェを届けろ！'] }
          ],
          note: ['短縮発動時のサブ液晶には「250・400・600・750」のどれかが出ます（表示より浅い天井のこともあります）。']
        }
      ]},
      { id: 'rush', label: 'ラッシュ・他', icon: 'seven', groups: [
        {
          id: 'freeze', short: '中段チェリー', title: '中段チェリー・ロングフリーズ',
          where: '中段チェリーはBARを狙うと一直線にBARが止まる',
          src: [['一撃', '5/#dynamic_header_2']],
          items: [
            { see: '通常時の中段チェリー', res: 'ラッシュ直撃濃厚。一部でフリーズ', lv: 'hot', img: ['uchikata07', '5/#dynamic_header_2', '中段チェリー'] },
            { see: 'ロングフリーズ', sub: '中段チェリーの次ゲーム', res: 'レジェンダリーリコリス（最強特化ゾーン）濃厚。そのあと上位ラッシュ', lv: 'hot', img: ['ekishou02', '5/#dynamic_header_1', 'ロングフリーズ'] },
            { see: 'ラッシュ中の中段チェリー', res: 'ボーナスW以上＋1000PT到達。上位CZは成功濃厚', lv: 'hot' },
            { see: 'ビーチアタック中の中段チェリー', res: 'そのゲームで＋500枚以上濃厚', lv: 'hot' }
          ]
        }
      ]}
    ]
  });
})();
