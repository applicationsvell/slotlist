// アプリのアイコンをつくる：node src/icon.js（Playwright が必要）
// 空色の地に手帳。中に「示唆」と、設定6の虹色の帯
const path = require('path');
const fs = require('fs');
const { chromium } = require('playwright');

const OUT = path.join(__dirname, '..', 'icons');
const FONT = "'Noto Sans CJK JP', 'IPAGothic', 'IPAゴシック', sans-serif";

// scale：手帳の大きさ（maskable は安全な範囲に収めるため 0.8）、round：角の丸み
function svg(scale, round) {
  const rainbow = ['#FF6B7F', '#FFB347', '#FFE45C', '#6ED48A', '#5DB4FF', '#A47CFF'];
  const bar = rainbow.map((c, i) => `<rect x="${136 + i * 40}" y="352" width="40" height="34" fill="${c}"/>`).join('');
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="512" height="512">
  <defs>
    <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#86D0FF"/><stop offset="1" stop-color="#3797EC"/></linearGradient>
    <pattern id="dots" width="32" height="32" patternUnits="userSpaceOnUse"><circle cx="16" cy="16" r="3.2" fill="#FFFFFF" fill-opacity=".28"/></pattern>
    <clipPath id="bar"><rect x="136" y="352" width="240" height="34" rx="17"/></clipPath>
  </defs>
  <rect width="512" height="512" rx="${round}" fill="url(#sky)"/>
  <rect width="512" height="512" rx="${round}" fill="url(#dots)"/>
  <g transform="translate(256 256) scale(${scale}) translate(-256 -256)">
    <rect x="104" y="112" width="304" height="320" rx="40" fill="#1B2244"/>
    <rect x="96" y="96" width="304" height="320" rx="40" fill="#FFFFFF" stroke="#1B2244" stroke-width="14"/>
    <path d="M318 89 h44 v74 l-22 -16 l-22 16 z" fill="#FF4F93" stroke="#1B2244" stroke-width="10" stroke-linejoin="round"/>
    <text x="248" y="300" text-anchor="middle" font-family="${FONT}" font-size="132" font-weight="700"
      fill="#1B2244" stroke="#1B2244" stroke-width="9" stroke-linejoin="round" letter-spacing="-4">示唆</text>
    <g clip-path="url(#bar)">${bar}</g>
    <rect x="136" y="352" width="240" height="34" rx="17" fill="none" stroke="#1B2244" stroke-width="8"/>
  </g>
</svg>`;
}

(async () => {
  fs.mkdirSync(OUT, { recursive: true });
  const browser = await chromium.launch();
  const page = await browser.newPage();
  const jobs = [
    ['apple-touch-icon.png', 180, 0.92, 0],
    ['icon-192.png', 192, 0.92, 112],
    ['icon-512.png', 512, 0.92, 112],
    ['maskable-512.png', 512, 0.74, 0]
  ];
  for (const [name, size, scale, round] of jobs) {
    await page.setViewportSize({ width: size, height: size });
    await page.setContent(`<html><body style="margin:0;background:transparent">${svg(scale, round).replace('width="512" height="512"', `width="${size}" height="${size}"`)}</body></html>`);
    await page.screenshot({ path: path.join(OUT, name), omitBackground: true, clip: { x: 0, y: 0, width: size, height: size } });
    console.log('icons/' + name);
  }
  await browser.close();
})();
