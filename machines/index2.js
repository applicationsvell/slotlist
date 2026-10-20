// スマスロ とある魔術の禁書目録２
// img: [ファイル名（img/index2/ の中）, 一撃ページ内の場所, 写真の説明]
(function () {
  var G = 'https://1geki.jp/slot/l_toaru_index2/';

  SHISA.add({
    id: 'index2',
    short: '禁書目録2',
    full: 'スマスロ とある魔術の禁書目録２',
    g: G,
    spec: [
      ['メーカー', 'FUJI（藤商事）'],
      ['導入日', '2026年8月3日'],
      ['設定', '1〜6'],
      ['AT初当り', '1/398.8〜1/338.4'],
      ['まとめた日', '2026年10月20日']
    ],
    sources: [['一撃（1geki）解析ページ', G]],
    tabs: [
      { id: 'setting', label: '設定示唆', icon: 'star', groups: [
        {
          id: 'end', short: '終了画面', title: 'AT終了画面',
          where: 'ATが終わったときの画面。設定を示すものと、次のゲーム数を示すもの（「モード」タブ）がある',
          src: [['一撃', '7/#dynamic_header_2']],
          items: [
            { see: '当麻＋インデックス', res: '奇数設定を示唆', lv: 'oe', img: ['ekishou133', '7/#dynamic_header_2', 'AT終了画面：当麻＋インデックス'] },
            { see: '美琴＋黒子', res: '偶数設定を示唆', lv: 'oe', img: ['ekishou134', '7/#dynamic_header_2', 'AT終了画面：美琴＋黒子'] },
            { see: '一方通行＋打ち止め', res: '高設定示唆（弱）', lv: 'blue', img: ['ekishou135', '7/#dynamic_header_2', 'AT終了画面：一方通行＋打ち止め'] },
            { see: '一方通行＋番外個体', sub: 'ミサカワースト', res: '高設定示唆（中）', lv: 'green', img: ['ekishou136', '7/#dynamic_header_2', 'AT終了画面：一方通行＋番外個体'] },
            { see: 'アリサ＋シャットアウラ', res: '偶数設定濃厚', lv: 'oe', img: ['ekishou137', '7/#dynamic_header_2', 'AT終了画面：アリサ＋シャットアウラ'] },
            { see: 'ステージ衣装の美琴＋初春', res: '設定4以上濃厚', lv: 'red', img: ['ekishou138', '7/#dynamic_header_2', 'AT終了画面：ステージ衣装の美琴＋初春'] },
            { see: '当麻ハーレム', sub: 'ヒロイン集合', res: '設定6濃厚', lv: 'rain', img: ['ekishou128', '7/#dynamic_header_2', 'AT終了画面：当麻ハーレム（ヒロイン集合）'] }
          ],
          note: [
            '奇数・偶数の示唆は、出た側の設定がだいたい55%対45%で出やすい程度です。',
            '一方通行＋番外個体は設定1で1.3%、設定6で10.0%。高設定ほど目に見えて増えます。'
          ]
        },
        {
          id: 'coin', short: '藤丸コイン', title: '藤丸コイン',
          where: 'AT終了時に出るおなじみのコイン。色で設定を示す',
          src: [['一撃', '0/#dynamic_header_15']],
          items: [
            { see: '銅', res: '設定2以上濃厚', lv: 'blue' },
            { see: '銀', res: '設定3以上濃厚', lv: 'gold' },
            { see: '金', res: '設定4以上濃厚', lv: 'red' },
            { see: 'DANGER柄', res: '設定5以上濃厚', lv: 'purple', img: ['ekishou78', '0/#dynamic_header_15', '藤丸コイン：DANGER柄'] },
            { see: '虹', res: '設定6濃厚', lv: 'rain' }
          ],
          note: ['店が1000Gごとにコインの出やすさを設定できます（カスタム）。出やすくしていても、その設定で出せる中でいちばん良いコインまでしか出ません。']
        },
        {
          id: 'coins', short: '枚数表示', title: '獲得枚数表示',
          where: 'AT中の獲得枚数表示。特定の枚数で設定を示す',
          src: [['一撃', '0/#dynamic_header_9']],
          items: [
            { see: '174枚OVER', sub: '「1なし」の語呂', res: '設定2以上濃厚', lv: 'blue' },
            { see: '246枚OVER', res: '偶数設定濃厚', lv: 'oe' },
            { see: '456枚OVER・1456枚OVER', res: '設定4以上濃厚', lv: 'red' },
            { see: '220枚OVER', sub: 'ふじまる', res: '設定6濃厚', lv: 'rain', img: ['ekishou91', '0/#dynamic_header_9', '獲得枚数表示：220枚OVER'] },
            { see: '666枚・777枚・1666枚・1777枚OVER', res: '設定6濃厚', lv: 'rain' }
          ]
        },
        {
          id: 'ending', short: 'エンディング', title: 'エンディング中の打ち止めのセリフ',
          where: 'エンディング中にレア役を引くと出る打ち止め（ラストオーダー）のセリフ',
          src: [['一撃', '0/#dynamic_header_13']],
          items: [
            { see: '「頑張ったね！」', sub: '…ってミサカはミサカは褒めてみたり！', res: '奇数設定を示唆', lv: 'oe' },
            { see: '「調子良いね！」', sub: '…ってミサカはミサカは褒めてみたり！', res: '偶数設定を示唆', lv: 'oe', img: ['ekishou77', '0/#dynamic_header_13', 'エンディング中の打ち止め：調子いいね'] },
            { see: '「ワクワクしてきた！」', sub: '…ってミサカはミサカは興奮してみたり！', res: '高設定示唆（弱）', lv: 'blue' },
            { see: '「いけるかも！」', sub: '…ってミサカはミサカは興奮してみたり！', res: '高設定示唆（中）', lv: 'green' },
            { see: '「やったあ！」', sub: '…ってミサカはミサカは感動してみる！', res: '設定2以上濃厚', lv: 'blue' },
            { see: '「すごい！すごい！」', sub: '…ってミサカはミサカは感動してみる！', res: '設定3以上濃厚', lv: 'gold' },
            { see: '「とっても美味しい！」', sub: '…ってミサカはミサカは感動してみる！', res: '設定4以上濃厚', lv: 'red' },
            { see: '「すっごくうれしい！」', sub: '…ってミサカはミサカは感動してみる！', res: '設定5以上濃厚', lv: 'purple' },
            { see: '「おめでとう！」', sub: '…ってミサカはミサカは感動してみる！', res: '設定6濃厚', lv: 'rain' }
          ],
          note: ['強レア役のときのほうが偶奇の偏りが大きく、出た側の設定が70%対30%で出やすくなります。']
        },
        {
          id: 'num', short: '設定差', title: '設定差のある数値',
          where: '表は横にスクロールできます',
          src: [['一撃', '0/']],
          table: {
            head: ['項目', '設定1', '設定2', '設定3', '設定4', '設定5', '設定6'],
            rows: [
              ['AT初当り', '1/398.8', '1/394.5', '1/389.6', '1/369.5', '1/358.0', '1/338.4'],
              ['CZ合算', '1/235.6', '1/233.4', '1/230.8', '1/222.3', '1/215.8', '1/207.2'],
              ['超電磁砲CZ', '1/258.5', '1/256.0', '1/253.3', '1/244.1', '1/237.4', '1/227.9'],
              ['一方通行CZ', '1/2668.5', '1/2639.0', '1/2600.3', '1/2493.0', '1/2378.3', '1/2273.0'],
              ['AT直撃', '1/7926.8', '1/7074.9', '1/6354.9', '1/4453.0', '1/4012.8', '1/3736.2'],
              ['スイカで高確へ', '47.7%', '48.0%', '49.2%', '50.4%', '54.7%', '55.5%'],
              ['スイカで美琴高確へ', '14.3%', '14.5%', '14.8%', '15.2%', '16.4%', '16.7%'],
              ['100G＋αまでに当選', '約30.7%', '約31.1%', '約31.5%', '約33.0%', '約34.0%', '約36.4%']
            ]
          },
          note: ['設定4以上を見分ける目安は、AT初当りが1/370より軽い、CZ合算が1/210前後です。']
        }
      ]},
      { id: 'normal', label: '通常時', icon: 'pic', groups: [
        {
          id: 'stage', short: 'ステージ', title: '通常時のステージ',
          where: '通常時の液晶の背景',
          src: [['一撃', '41/#dynamic_header_2']],
          items: [
            { see: '学園都市・昼', res: '通常', lv: 'info', img: ['ekishou05', '41/#dynamic_header_2', '学園都市・昼'] },
            { see: 'イタリア', res: '通常', lv: 'info', img: ['ekishou07', '41/#dynamic_header_2', 'イタリア'] },
            { see: 'イギリス', res: '通常', lv: 'info', img: ['ekishou08', '41/#dynamic_header_2', 'イギリス'] },
            { see: 'ロシア', res: '加算ゾーン高確のチャンス', lv: 'hot', img: ['ekishou09', '41/#dynamic_header_2', 'ロシア'] },
            { see: '美琴ステージ', res: '幻想リプレイ高確', lv: 'hot', img: ['ekishou10', '41/#dynamic_header_2', '美琴ステージ'] },
            { see: '学園都市・夜', res: '期待度の高い前兆ステージ', lv: 'hot', img: ['ekishou06', '41/#dynamic_header_2', '学園都市・夜'] },
            { see: '魔道書図書館', res: '前兆ステージ', lv: 'info', img: ['ekishou11', '41/#dynamic_header_2', '魔道書図書館'] },
            { see: 'アリサLive', res: '本前兆濃厚', lv: 'hot', img: ['ekishou12', '41/#dynamic_header_2', 'アリサLive'] }
          ]
        },
        {
          id: 'library', short: '図書館の色', title: '魔道書図書館ステージの色',
          where: '前兆ステージ「魔道書図書館」の色で期待度が変わる',
          src: [['一撃', '41/#dynamic_header_3']],
          imgs: [['ekishou90', '41/#dynamic_header_3', '魔道書図書館ステージ']],
          items: [
            { see: '青', sub: '2ndフェーズ', res: '期待度 低', lv: 'info' },
            { see: '緑', sub: '3rdフェーズ', res: '青より上', lv: 'info' },
            { see: '白', sub: '1stフェーズ', res: '緑より上', lv: 'info' },
            { see: '赤', sub: '4thフェーズ', res: '期待度 高', lv: 'hot' },
            { see: '虹', sub: 'ファイナルフェーズ', res: '本前兆濃厚', lv: 'hot' }
          ],
          note: [
            '1stフェーズ（白）のまま発展すれば大チャンス。4thフェーズ（赤）まで上がっても大チャンスです。',
            '図書館に入ったゲームでアリサLiveに上がることもあります。'
          ]
        },
        {
          id: 'eye', short: 'アイキャッチ', title: 'アイキャッチ',
          where: 'ステージチェンジで出る1枚絵。モードとAT恩恵を示す',
          src: [['一撃', '53/#dynamic_header_1']],
          view: 'grid',
          items: [
            { see: '当麻', res: 'モード示唆（弱）', lv: 'info', img: ['ekishou144', '53/#dynamic_header_1', 'アイキャッチ：当麻'] },
            { see: 'インデックス', res: 'モード示唆（弱）＋AT恩恵 約20%', lv: 'info', img: ['ekishou146', '53/#dynamic_header_1', 'アイキャッチ：インデックス'] },
            { see: '五和', res: 'モード示唆（中）', lv: 'info', img: ['ekishou149', '53/#dynamic_header_1', 'アイキャッチ：五和'] },
            { see: 'レッサー', res: 'モード示唆（中）＋AT恩恵 約20%', lv: 'info', img: ['ekishou147', '53/#dynamic_header_1', 'アイキャッチ：レッサー'] },
            { see: '初春', res: '通常B以上濃厚', lv: 'hot', img: ['ekishou140', '53/#dynamic_header_1', 'アイキャッチ：初春'] },
            { see: '黒子', res: '通常B以上濃厚＋AT恩恵 約20%', lv: 'hot', img: ['ekishou139', '53/#dynamic_header_1', 'アイキャッチ：黒子'] },
            { see: '打ち止め', res: '天国準備以上濃厚', lv: 'hot', img: ['ekishou143', '53/#dynamic_header_1', 'アイキャッチ：打ち止め'] },
            { see: '神裂', res: '天国準備以上＋AT恩恵濃厚', lv: 'hot', img: ['ekishou142', '53/#dynamic_header_1', 'アイキャッチ：神裂'] },
            { see: '美琴', res: '天国濃厚', lv: 'hot', img: ['ekishou145', '53/#dynamic_header_1', 'アイキャッチ：美琴'] },
            { see: '一方通行', res: '天国＋AT恩恵濃厚', lv: 'hot', img: ['ekishou148', '53/#dynamic_header_1', 'アイキャッチ：一方通行'] },
            { see: '女性キャラコスプレ集合', res: '本前兆＋AT恩恵濃厚', lv: 'hot', img: ['ekishou141', '53/#dynamic_header_1', 'アイキャッチ：女性キャラコスプレ集合'] }
          ],
          note: ['AT恩恵アイコンは、持っていても半分は液晶に出ません。アイキャッチで示されたら覚えておきましょう。出なかった分はAT終了時に裏乗せとして告知されます。']
        },
        {
          id: 'komoe', short: '小萌先生', title: '小萌先生のお知らせ',
          where: '通常時に出る小萌先生のセリフ。モードとAT恩恵を示す',
          src: [['一撃', '53/#dynamic_header_2']],
          imgs: [['ekishou84', '53/#dynamic_header_2', '小萌先生お知らせ演出']],
          items: [
            { see: '「気合を入れて小テストを作ってきましたよ〜！」', res: 'モード示唆（弱）', lv: 'info' },
            { see: '「今日の授業も頑張っていきましょう！」', res: 'モード示唆（弱）', lv: 'info' },
            { see: '「皆さん調子はどうですか〜？」', res: 'モード示唆（弱）', lv: 'info' },
            { see: '「授業はまだまだ続くのですよ〜！」', res: 'モード示唆（中）', lv: 'info' },
            { see: '「先生の話はよ〜く聞いてくださいね！」', res: 'モード示唆（中）', lv: 'info' },
            { see: '「それじゃあ補習の授業を始めます〜！」', res: '通常B以上濃厚', lv: 'hot' },
            { see: '「みんなは落ちこぼれなんかじゃないのです！」', res: '天国準備以上濃厚', lv: 'hot' },
            { see: '「先生の体内時計は秒刻みなので問題ないのです！」', res: '天国濃厚', lv: 'hot' },
            { see: '「それ以上しゃべりやがったらコロンブスの卵なのですよ〜？」', res: 'AT恩恵示唆（弱）', lv: 'info' },
            { see: '「どうしてみんなそんなになるまで頑張っちゃうのですか…？」', res: 'AT恩恵示唆（中）', lv: 'info' },
            { see: '「成績が悪かったら罰ゲームにすけすけ見る見るですよ！」', res: 'AT恩恵所持濃厚', lv: 'hot' }
          ]
        },
        {
          id: 'lastorder', short: '打ち止め', title: '打ち止めのお知らせ',
          where: '通常時の50Gから100Gごとに出る打ち止め（ラストオーダー）のセリフ',
          src: [['一撃', '53/#dynamic_header_3']],
          imgs: [['ekishou93', '53/#dynamic_header_3', '打ち止め（ラストオーダー）お知らせ演出']],
          items: [
            { see: '「ファイトだよ！」', sub: '応援', res: 'モード示唆（弱）', lv: 'info' },
            { see: '「頑張って！」', sub: '応援', res: 'モード示唆（弱）', lv: 'info' },
            { see: '「負けないで！」', sub: '応援', res: 'モード示唆（中）', lv: 'info' },
            { see: '「心配しないで！」', sub: '応援', res: 'モード示唆（中）', lv: 'info' },
            { see: '「お早うございます！」', sub: '挨拶', res: 'モード示唆（中）', lv: 'info' },
            { see: '「いい天気だね！」', sub: '挨拶', res: '通常B以上濃厚', lv: 'hot' },
            { see: '「ごきげんよう！」', sub: '挨拶', res: '天国準備以上濃厚', lv: 'hot' },
            { see: '「今すぐ遊ぼう！」', sub: '挨拶', res: '天国濃厚', lv: 'hot' },
            { see: '「何だか変な感じかも！」', sub: '推測', res: '残り300G以内を示唆', lv: 'info' },
            { see: '「怪しいかも！」', sub: '推測', res: '残り300G以内濃厚', lv: 'hot' },
            { see: '「近いかも！」', sub: '推測', res: '200G以内濃厚', lv: 'hot' },
            { see: '「この先かも！」', sub: '推測', res: '残り100G以内濃厚', lv: 'hot' },
            { see: '「レベル3なんだよ！」', sub: '自己紹介', res: '3回以内に天国濃厚', lv: 'hot' },
            { see: '「20001体目なんだよ！」', sub: '自己紹介', res: '2回以内に天国濃厚', lv: 'hot' },
            { see: '「20001号だよ！」', sub: 'お願い', res: '次回天国濃厚', lv: 'hot' },
            { see: '「ずっと一緒にいたいよ」', sub: 'お願い', res: '100G以内、または3回以内に2回以上天国濃厚', lv: 'hot' }
          ]
        }
      ]},
      { id: 'mode', label: 'モード', icon: 'gem', groups: [
        {
          id: 'modes', short: 'モード', title: '通常時のモード',
          where: '5つのモードがあり、3つ先まで決まっている。リセット時以外は消えない',
          src: [['一撃', '44/#dynamic_header_2']],
          table: {
            head: ['モード', '天井', '特徴'],
            rows: [
              ['朝一A', '200G', 'リセット時の専用モード'],
              ['通常A', '800G', '100Gと、100の位が偶数のゾーンがチャンス'],
              ['通常B', '700G', '100の位が奇数のゾーンがチャンス'],
              ['天国準備', '800G', '100Gごとにチャンス。150G＋αもあり'],
              ['天国', '100G', '100G＋αまでにCZ以上濃厚。50G＋αもあり']
            ]
          },
          note: [
            '選ばれる割合：通常A 34.8%、通常B 20.2%、天国準備 21.9%、天国 23.1%。',
            '次のモード：通常Aから通常B以上へ30%、通常Bから天国準備以上へ50%、天国準備から天国へ50%、天国は25%で天国のまま。エンディング後は天国濃厚です。'
          ]
        },
        {
          id: 'zone', short: 'ゾーン', title: '規定ゲーム数（ゾーン）',
          where: 'モードごとの当たりやすいゲーム数',
          src: [['一撃', '44/#dynamic_header_7']],
          table: {
            head: ['G数', '朝一A', '通常A', '通常B', '天国準備', '天国'],
            hi: -1,
            cap: '★は各モードの天井。◎・〇・△は選ばれやすさの目安（◎がいちばん多い）',
            rows: [
              ['50G', '–', '–', '–', '–', '△'],
              ['100G', '〇', '〇', '〇', '△', '★'],
              ['150G', '–', '–', '–', '〇', '–'],
              ['200G', '★', '◎', '–', '◎', '–'],
              ['300G', '–', '–', '〇', '〇', '–'],
              ['400G', '–', '〇', '–', '◎', '–'],
              ['500G', '–', '–', '◎', '〇', '–'],
              ['600G', '–', '〇', '–', '〇', '–'],
              ['700G', '–', '–', '★', '〇', '–'],
              ['800G', '–', '★', '–', '★', '–']
            ]
          },
          note: ['150GでCZに当たったときは、次回が天国準備以上になる可能性が大きく上がります。']
        },
        {
          id: 'fore', short: '前兆パターン', title: '前兆パターンでわかるモード',
          where: '前兆ステージ「魔道書図書館」に移るかどうかに注目',
          src: [['一撃', '44/#dynamic_header_10']],
          items: [
            { see: '50Gから前兆が始まった', res: '天国濃厚', lv: 'hot' },
            { see: '100Gで魔道書図書館に移らなかった', res: '天国準備濃厚', lv: 'hot' },
            { see: '100Gごとの図書館移行が続けて起きなかった', res: '天国準備濃厚', lv: 'hot' },
            { see: '150Gから前兆が始まった', res: '天国準備濃厚', lv: 'hot' },
            { see: '200Gで魔道書図書館に移らなかった', res: '通常Bか天国準備濃厚', lv: 'hot' },
            { see: '500Gからの前兆で先バレ → ガセだった', sub: '先バレ期待度60%のカスタムがおすすめ', res: '天国準備のチャンス', lv: 'info' },
            { see: '700G・800Gからの前兆で先バレ', res: '本前兆＋天国準備濃厚', lv: 'hot' },
            { see: 'リール始動時に先バレ', res: '本前兆濃厚', lv: 'hot' }
          ]
        },
        {
          id: 'atend', short: '終了画面(G数)', title: 'AT終了画面（ゲーム数の示唆）',
          where: 'AT終了画面のうち、次に当たるまでのゲーム数を示すもの',
          src: [['一撃', '7/#dynamic_header_3']],
          items: [
            { see: 'アイテム集合', res: '500G以内濃厚', lv: 'hot', img: ['ekishou129', '7/#dynamic_header_3', 'AT終了画面：アイテム集合'] },
            { see: 'スクール集合', res: '300G以内濃厚', lv: 'hot', img: ['ekishou130', '7/#dynamic_header_3', 'AT終了画面：スクール集合'] },
            { see: 'グループ集合', res: '150G以内濃厚', lv: 'hot', img: ['ekishou131', '7/#dynamic_header_3', 'AT終了画面：グループ集合'] },
            { see: 'カエル顔の医者', res: 'AT復活濃厚', lv: 'hot', img: ['ekishou132', '7/#dynamic_header_3', 'AT終了画面：カエル顔の医者'] }
          ]
        },
        {
          id: 'czend', short: 'CZ終了の1枚絵', title: 'CZ終了の1枚絵',
          where: '加算行為・超電磁砲CZ・一方通行CZの終了時、PUSHを押すと出る絵。残りゲーム数を示す',
          src: [['一撃', '7/#dynamic_header_4']],
          view: 'grid',
          items: [
            { see: '初春', res: 'サポーター時の基本', lv: 'info', img: ['ekishou108', '7/#dynamic_header_4', '1枚絵：初春'] },
            { see: '黒子', res: 'サポーター時の基本', lv: 'info', img: ['ekishou109', '7/#dynamic_header_4', '1枚絵：黒子'] },
            { see: '妹達', res: 'サポーター時の基本', lv: 'info', img: ['ekishou110', '7/#dynamic_header_4', '1枚絵：妹達'] },
            { see: 'ヒロイン5人', res: 'ヒロインズ時の基本', lv: 'info', img: ['ekishou111', '7/#dynamic_header_4', '1枚絵：ヒロイン5人'] },
            { see: '当麻', res: '幻想殺し時の基本', lv: 'info', img: ['ekishou112', '7/#dynamic_header_4', '1枚絵：当麻'] },
            { see: '美琴＋インデックス', res: '残り300G以内を示唆（弱）', lv: 'info', img: ['ekishou114', '7/#dynamic_header_4', '1枚絵：美琴＋インデックス'] },
            { see: '当麻＋美琴＋インデックス', res: '残り300G以内を示唆（中）', lv: 'hot', img: ['ekishou113', '7/#dynamic_header_4', '1枚絵：当麻＋美琴＋インデックス'] },
            { see: '当麻＋浜面＋一方通行', res: '残り300G以内濃厚', lv: 'hot', img: ['ekishou115', '7/#dynamic_header_4', '1枚絵：当麻＋浜面＋一方通行'] },
            { see: '当麻＋フィアンマ', res: '残り100G以内濃厚', lv: 'hot', img: ['ekishou116', '7/#dynamic_header_4', '1枚絵：当麻＋フィアンマ'] },
            { see: 'ヒロイン集合', sub: 'ウェディング姿', res: '次ゲームで当選濃厚', lv: 'hot', img: ['ekishou117', '7/#dynamic_header_4', '1枚絵：ヒロイン集合（ウェディング姿）'] }
          ],
          note: ['PUSHを押さないと出ないので、CZが終わったら忘れずに押しましょう。']
        }
      ]},
      { id: 'fx', label: '演出', icon: 'bolt', groups: [
        {
          id: 'renzoku', short: '連続演出', title: '連続演出の期待度',
          where: 'ゲーム数の前兆中に出る連続演出',
          src: [['一撃', '44/#dynamic_header_15']],
          items: [
            { see: '当麻VSキャーリサ', res: '期待度 ★×2.5', lv: 'info' },
            { see: '当麻VSシャットアウラ', res: '期待度 ★×3', lv: 'info' },
            { see: '当麻VS美琴', res: '期待度 ★×3.5', lv: 'info' },
            { see: '当麻VS一方通行', res: '期待度 ★×4', lv: 'hot' },
            { see: '約束の地エンデュミオン', res: 'AT本前兆濃厚', lv: 'hot', img: ['ekishou94', '44/#dynamic_header_15', '連続演出：約束の地エンデュミオン'] },
            { see: '一方通行クラッシュ演出', res: 'AT濃厚', lv: 'hot' },
            { see: '赤系のチャンスアップ', res: '大チャンス', lv: 'hot' },
            { see: '1G目の金タイトル・3G目第1停止の金チャンスアップ', res: 'AT＋AT恩恵濃厚', lv: 'hot' },
            { see: 'ねじチャン：3G目の第3停止を長押しでカットイン', res: '本前兆濃厚', lv: 'hot', img: ['ekishou89', '44/#dynamic_header_15', '第3停止ねじり成功の金カットイン'] }
          ]
        },
        {
          id: 'next', short: 'G数表示', title: 'ゲーム数表示の色',
          where: '規定ゲーム数に着いたときの表示で、前兆の期待度がわかる',
          src: [['一撃', '44/#dynamic_header_13']],
          items: [
            { see: 'NEXTゲーム数表示：青', res: '基本', lv: 'info' },
            { see: 'NEXTゲーム数表示：緑', res: '本前兆 約50%', lv: 'info' },
            { see: 'NEXTゲーム数表示：赤', res: '本前兆 約95%', lv: 'hot', img: ['ekishou96', '44/#dynamic_header_14', 'NEXTゲーム数表示（赤）'] },
            { see: 'ゲーム数のエフェクト：なし', res: '基本', lv: 'info' },
            { see: 'ゲーム数のエフェクト：チャンス', res: '本前兆 約95%', lv: 'hot' },
            { see: 'ゲーム数のエフェクト：赤チャンス', sub: '800G到達時だけ', res: '本前兆濃厚', lv: 'hot', img: ['ekishou97', '44/#dynamic_header_13', 'ゲーム数のエフェクト（赤チャンス）'] }
          ]
        },
        {
          id: 'zencho', short: '前兆の法則', title: '前兆中の法則',
          where: '通常前兆A（通常演出）と通常前兆B（魔道書図書館）での見分け方',
          src: [['一撃', '44/#dynamic_header_12']],
          imgs: [['ekishou189', '44/#dynamic_header_12', '擬似連']],
          items: [
            { see: '通常前兆A中に同系統の演出か擬似連', sub: '同系統：いきなりキャラ・アレイスター・テッラルーレット', res: '本前兆濃厚', lv: 'hot' },
            { see: '上のあと、通常前兆B（図書館）へ移行', res: 'AT前兆濃厚', lv: 'hot' },
            { see: '同系統・擬似連が3連', res: '大チャンス', lv: 'hot' },
            { see: '同系統・擬似連が4連', res: 'AT前兆濃厚', lv: 'hot' },
            { see: '3連から発展した連続演出で逆転', res: 'AT前兆濃厚', lv: 'hot' }
          ]
        }
      ]},
      { id: 'at', label: 'AT・他', icon: 'seven', groups: [
        {
          id: 'ura', short: '裏ボタン', title: '裏ボタン',
          where: '次の場面でPUSHを押し、台が振動すれば成功',
          src: [['一撃', '8/#dynamic_header_1']],
          items: [
            { see: 'ゲーム数の連続演出が始まるゲーム', sub: '全リール停止後', res: '連続演出の成功濃厚', lv: 'hot' },
            { see: 'CZ中のレバーON時', sub: '第1停止まで', res: 'AT濃厚', lv: 'hot' },
            { see: 'AT中の「7を狙え」時', sub: '第1停止まで', res: '7揃い濃厚', lv: 'hot' },
            { see: 'ガブリエル・神の右席・フィアンマバトル中', sub: 'ジャッジの前のゲーム、全リール停止後', res: '勝利濃厚', lv: 'hot' },
            { see: 'とある運命の上乗遊技中のレバーON時', sub: '第1停止まで', res: '報酬の昇格濃厚', lv: 'hot' },
            { see: '自動書記（ヨハネのペン）中のレバーON時', sub: '第1停止まで', res: '上乗せ濃厚', lv: 'hot' }
          ]
        },
        {
          id: 'freeze', short: 'フリーズ', title: 'ロングフリーズ',
          where: '幻想変換状態中の強チェリー・チャンス目の一部で発生',
          src: [['一撃', '5/#dynamic_header_1']],
          items: [
            { see: 'ロングフリーズ', res: '幻想殺しラッシュ（AT）濃厚。初期ゲーム数500Gで始まる', lv: 'hot', img: ['ekishou02', '5/#dynamic_header_1', 'ロングフリーズ'] }
          ],
          note: ['中段チェリーはありません。幻想変換状態中の強チェリーが、その代わりの超チャンス役です。']
        }
      ]}
    ]
  });
})();
