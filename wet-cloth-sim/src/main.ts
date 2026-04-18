import './style.css';

const app = document.querySelector<HTMLDivElement>('#app');

if (!app) {
  throw new Error('#app が見つかりませんでした。');
}

app.innerHTML = `
<div class="container">
  <h1>Wet Cloth Simulation</h1>
  <p>Vite + TypeScript の最小構成です。</p>
  <button id="checkButton">Click me</button>
  <p id="message">まだ押されていません。</p>
</div>
`;

const button = document.querySelector<HTMLButtonElement>('#checkButton');
const message = document.querySelector<HTMLParagraphElement>('#message');

if (!button || !message) {
  throw new Error('必要な要素が見つかりませんでした。');
}

button.addEventListener('click', () => {
  message.textContent = 'TypeScript は正常に動作しています。'
})