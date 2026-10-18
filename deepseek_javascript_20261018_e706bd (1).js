// ====== 20 CÂU HỎI: CHỦ ĐỀ 3 - RÈN LUYỆN BẢN THÂN (HĐTN 10 - KNTT) ======
const QUESTIONS = [
  // Trắc nghiệm 4 đáp án (10 câu)
  { type: 'mc', q: 'Khi nhận phản hồi về bài làm của mình, học sinh nên có thái độ như thế nào để rèn luyện bản thân hiệu quả?', options: ['Tiếp nhận cởi mở, xem đó là cơ hội học hỏi', 'Phớt lờ góp ý tiêu cực', 'Biện minh cho lỗi sai', 'So sánh để tìm ai tốt hơn'], correct: 0 },
  { type: 'mc', q: 'Kỹ năng tự đánh giá trong rèn luyện bản thân có nghĩa là gì?', options: ['Nhận thức điểm mạnh, điểm yếu một cách khách quan', 'Luôn cho rằng mình đúng', 'Chỉ tập trung vào lỗi sai', 'Chờ người khác đánh giá'], correct: 0 },
  { type: 'mc', q: 'Yếu tố nào là nền tảng quan trọng nhất để xây dựng sự tự tin và đối mặt thử thách?', options: ['Hiểu rõ điểm mạnh, điểm yếu và giá trị bản thân', 'Giao tiếp hiệu quả', 'Thái độ lạc quan', 'Quản lý thời gian'], correct: 0 },
  { type: 'mc', q: 'Học sinh thường xuyên trì hoãn việc học. Bước đầu tiên để khắc phục là gì?', options: ['Xác định nguyên nhân gốc rễ của hành vi trì hoãn', 'Tìm bạn cùng làm bài', 'Lập thời gian biểu cố định', 'Xin giáo viên giảm bài tập'], correct: 0 },
  { type: 'mc', q: 'Việc xây dựng thói quen tích cực có ý nghĩa gì trong rèn luyện bản thân?', options: ['Giúp đạt mục tiêu bền vững và cải thiện chất lượng cuộc sống', 'Chỉ có lợi ích ngắn hạn', 'Gây áp lực không cần thiết', 'Làm tăng sự lười biếng'], correct: 0 },
  { type: 'mc', q: 'Khi đối mặt với thất bại, cách ứng xử nào sau đây thể hiện sự trưởng thành?', options: ['Rút kinh nghiệm và tiếp tục cố gắng', 'Đổ lỗi cho hoàn cảnh', 'Từ bỏ mục tiêu', 'So bì với người khác'], correct: 0 },
  { type: 'mc', q: 'Để quản lý cảm xúc tiêu cực hiệu quả, học sinh nên làm gì?', options: ['Nhận diện cảm xúc và tìm cách giải tỏa lành mạnh', 'Kìm nén hoàn toàn cảm xúc', 'Bộc phát cảm xúc bừa bãi', 'Phớt lờ cảm xúc của bản thân'], correct: 0 },
  { type: 'mc', q: 'Mục tiêu SMART trong rèn luyện bản thân bao gồm những yếu tố nào?', options: ['Cụ thể, đo lường được, khả thi, thực tế, có thời hạn', 'Chung chung, mơ hồ', 'Chỉ cần khó và thử thách', 'Không cần thời hạn'], correct: 0 },
  { type: 'mc', q: 'Hành động nào thể hiện sự tôn trọng bản thân?', options: ['Chăm sóc sức khỏe thể chất và tinh thần', 'Bỏ bê bản thân vì người khác', 'Chấp nhận mọi yêu cầu vô lý', 'So sánh bản thân với người khác'], correct: 0 },
  { type: 'mc', q: 'Kỹ năng giao tiếp hiệu quả đóng vai trò gì trong rèn luyện bản thân?', options: ['Giúp xây dựng mối quan hệ tốt và giải quyết xung đột', 'Chỉ cần khi làm việc nhóm', 'Không quan trọng bằng kỹ năng cứng', 'Gây mất thời gian'], correct: 0 },

  // Đúng / Sai (10 câu)
  { type: 'tf', q: 'Học sinh nên phớt lờ hoàn toàn những lời góp ý tiêu cực từ người khác.', options: ['Đúng', 'Sai'], correct: 1 },
  { type: 'tf', q: 'Tự đánh giá bản thân cần dựa trên cả điểm mạnh và điểm yếu một cách khách quan.', options: ['Đúng', 'Sai'], correct: 0 },
  { type: 'tf', q: 'Trì hoãn là thói quen tốt giúp giảm căng thẳng trước khi làm việc.', options: ['Đúng', 'Sai'], correct: 1 },
  { type: 'tf', q: 'Việc chấp nhận sự không hoàn hảo của bản thân là một phần của rèn luyện lòng tự trọng.', options: ['Đúng', 'Sai'], correct: 0 },
  { type: 'tf', q: 'Xây dựng thói quen tích cực chỉ mang lại lợi ích trong ngắn hạn.', options: ['Đúng', 'Sai'], correct: 1 },
  { type: 'tf', q: 'Kỹ năng quản lý thời gian giúp giảm căng thẳng và tăng hiệu suất học tập.', options: ['Đúng', 'Sai'], correct: 0 },
  { type: 'tf', q: 'Thất bại là dấu hiệu cho thấy bản thân không có năng lực.', options: ['Đúng', 'Sai'], correct: 1 },
  { type: 'tf', q: 'Đặt mục tiêu quá cao so với khả năng là cách tốt để rèn luyện bản thân.', options: ['Đúng', 'Sai'], correct: 1 },
  { type: 'tf', q: 'Việc lắng nghe người khác giúp mở rộng hiểu biết và cải thiện bản thân.', options: ['Đúng', 'Sai'], correct: 0 },
  { type: 'tf', q: 'Rèn luyện bản thân là quá trình diễn ra suốt đời, không chỉ trong một giai đoạn.', options: ['Đúng', 'Sai'], correct: 0 },
];

// ====== CÂU KHEN (Cập nhật theo yêu cầu) ======
const PRAISE_PHRASES = [
  'Ơ kìa, cũng không tệ đâu nhỉ!',
  'Đúng rồi, nhưng đừng tự mãn nha!',
  'Cũng được đấy, được 1 câu rồi!',
  'Bạn vừa lên trình rồi đó hả?',
  'Đoán mò mà cũng đúng, giỏi ghê!',
  'Trộm vía, cái đầu cũng có sạn đấy!',
  'Cố lên, sắp bằng mình rồi!',
  'Ơ, bạn nói có lý đấy chứ!',
  'Đúng rồi đó, tự tin lên nào!',
  'Ồ, không ngờ luôn á nha!'
];

const COMBO_PHRASES = {
  2: ['Bạn thật bá đạo!', 'Bá đạo thật sự!', 'Bạn thật bá đạo đó nha!'],
  3: ['Bá khí trên từng hạt bí!', 'Bá khí trên từng hạt bí!', 'BÁ KHÍ TRÊN TỪNG HẠT BÍ!!!'],
  4: ['Combo 4! Siêu nhân xuất hiện!', 'Bốn câu rồi! Thiên tài!'],
  5: ['Combo 5! Bạn là huyền thoại!', 'Năm câu liên tiếp! Vô đối!'],
};

const ENCOURAGE_PHRASES = [
  'Sai rồi! Thử đáp án khác nhé.', 'Ôi chưa đúng! Chọn lại đi nào.',
  'Không sao đâu! Thử lại lần nữa nhé.', 'Hơi tiếc! Nhưng bạn chọn lại được mà.',
  'Chưa đúng rồi! Đừng bỏ cuộc nhé.', 'Sai mất rồi! Bình tĩnh chọn lại nào.',
];

// ====== TRẠNG THÁI ======
let currentQ = 0;
let score = 0;
let currentQuestions = [];
let answered = false;
let shuffledOptions = [];
let correctIndexShuffled = 0;
let comboStreak = 0;

let soundEnabled = true;
let voiceEnabled = true;
let currentVoice = null;

const $ = id => document.getElementById(id);

// ============================================
// 🔊 ÂM THANH
// ============================================
let audioCtx = null;

function initAudio() {
  if (!audioCtx) {
    try { audioCtx = new (window.AudioContext || window.webkitAudioContext)(); } 
    catch (e) { console.warn('Không hỗ trợ Web Audio'); }
  }
  if (audioCtx && audioCtx.state === 'suspended') audioCtx.resume();
  return audioCtx;
}

function playTone(freq, duration, type = 'sine', volume = 0.18, delay = 0) {
  const ctx = initAudio();
  if (!ctx || !soundEnabled) return;
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();
  osc.type = type;
  osc.frequency.setValueAtTime(freq, ctx.currentTime + delay);
  gain.gain.setValueAtTime(0, ctx.currentTime + delay);
  gain.gain.linearRampToValueAtTime(volume, ctx.currentTime + delay + 0.01);
  gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + delay + duration);
  osc.connect(gain);
  gain.connect(ctx.destination);
  osc.start(ctx.currentTime + delay);
  osc.stop(ctx.currentTime + delay + duration);
}

function soundTaDa() { playTone(523.25, 0.12, 'square', 0.14, 0); playTone(659.25, 0.12, 'square', 0.14, 0.08); playTone(783.99, 0.35, 'square', 0.16, 0.16); playTone(1046.50, 0.35, 'sine', 0.18, 0.16); }
function soundSparkle() { [1046.50, 1318.51, 1567.98, 2093.00].forEach((f, i) => playTone(f, 0.4, 'sine', 0.12, i * 0.06)); }
function soundRising() { [523.25, 659.25, 783.99, 1046.50].forEach((f, i) => { playTone(f, 0.15, 'sine', 0.18, i * 0.08); playTone(f * 2, 0.1, 'triangle', 0.05, i * 0.08); }); }
function soundPopPop() { playTone(880, 0.08, 'sine', 0.2, 0); playTone(1108.73, 0.08, 'sine', 0.2, 0.1); playTone(1318.51, 0.2, 'sine', 0.22, 0.2); }
function soundBell() { playTone(1568, 0.5, 'sine', 0.15, 0); playTone(2349, 0.4, 'sine', 0.08, 0.02); playTone(1046.50, 0.6, 'sine', 0.1, 0.05); }
function soundFirework() { playTone(200, 0.1, 'sawtooth', 0.1, 0); playTone(400, 0.1, 'sawtooth', 0.1, 0.05); playTone(800, 0.1, 'sawtooth', 0.1, 0.1); playTone(1046.50, 0.3, 'sine', 0.18, 0.15); playTone(1318.51, 0.3, 'sine', 0.15, 0.17); playTone(1567.98, 0.4, 'sine', 0.12, 0.19); }

function playRandomCorrectSound() { [soundTaDa, soundSparkle, soundRising, soundPopPop, soundBell][Math.floor(Math.random() * 5)](); }
function playComboSound(streak) {
  if (streak >= 5) { soundFirework(); setTimeout(() => soundSparkle(), 300); setTimeout(() => soundTaDa(), 600); } 
  else if (streak >= 3) { soundFirework(); setTimeout(() => soundTaDa(), 400); } 
  else { soundRising(); setTimeout(() => soundBell(), 300); }
}
function playWrongSound() { [392.00, 311.13, 233.08].forEach((freq, i) => playTone(freq, 0.22, 'triangle', 0.20, i * 0.12)); playTone(155.56, 0.35, 'sawtooth', 0.08, 0.36); }
function playClickSound() { playTone(880, 0.06, 'sine', 0.12); }
function playCompleteSound() {
  const melody = [{ f: 523.25, d: 0.15 }, { f: 659.25, d: 0.15 }, { f: 783.99, d: 0.15 }, { f: 1046.50, d: 0.30 }, { f: 783.99, d: 0.12 }, { f: 1046.50, d: 0.40 }];
  let time = 0;
  melody.forEach(note => { playTone(note.f, note.d, 'sine', 0.22, time); playTone(note.f * 1.5, note.d, 'sine', 0.08, time); time += note.d * 0.85; });
}
function playEndFanfare() { [523.25, 587.33, 659.25, 783.99, 880.00, 1046.50].forEach((f, i) => playTone(f, 0.12, 'sine', 0.18, i * 0.08)); }

// ============================================
// 🗣️ GIỌNG ĐỌC
// ============================================
let voicesLoaded = false;
let vietnameseVoice = null;

function loadVoices() {
  if (!('speechSynthesis' in window)) return;
  const voices = window.speechSynthesis.getVoices();
  vietnameseVoice = voices.find(v => v.lang === 'vi-VN' || v.lang.startsWith('vi')) || voices.find(v => v.name.includes('Female') || v.name.includes('Google')) || voices[0];
  voicesLoaded = true;
}

if ('speechSynthesis' in window) {
  window.speechSynthesis.onvoiceschanged = loadVoices;
  loadVoices();
  setTimeout(loadVoices, 200);
}

function speak(text, onEnd) {
  if (!voiceEnabled || !('speechSynthesis' in window)) { if (onEnd) onEnd(); return; }
  window.speechSynthesis.cancel();
  const utter = new SpeechSynthesisUtterance(text);
  if (!voicesLoaded) loadVoices();
  if (vietnameseVoice) utter.voice = vietnameseVoice;
  utter.lang = 'vi-VN'; utter.rate = 0.95; utter.pitch = 1.6; utter.volume = 1.0;
  currentVoice = utter;
  utter.onstart = () => { $('speakingIndicator').classList.remove('hidden'); const sb = $('speakBtn'); if (sb) sb.classList.add('speaking'); };
  utter.onend = utter.onerror = () => { $('speakingIndicator').classList.add('hidden'); const sb = $('speakBtn'); if (sb) sb.classList.remove('speaking'); currentVoice = null; if (onEnd) onEnd(); };
  window.speechSynthesis.speak(utter);
}

function stopSpeaking() {
  if ('speechSynthesis' in window) {
    window.speechSynthesis.cancel();
    $('speakingIndicator').classList.add('hidden');
    const sb = $('speakBtn');
    if (sb) sb.classList.remove('speaking');
    currentVoice = null;
  }
}

function readCurrentQuestion() {
  const q = currentQuestions[currentQ];
  if (!q) return;
  let text = q.q;
  if (q.type === 'mc') { shuffledOptions.forEach((opt, idx) => { text += `. Đáp án ${String.fromCharCode(65 + idx)}: ${opt}`; }); } 
  else { text += '. Bạn chọn Đúng hay Sai?'; }
  speak(text);
}

// ====== TOGGLE ======
function toggleSound() {
  soundEnabled = !soundEnabled;
  const btn = $('soundBtn');
  if (btn) { btn.textContent = soundEnabled ? '🔊' : '🔇'; btn.classList.toggle('muted', !soundEnabled); }
  if (soundEnabled) playClickSound();
  try { localStorage.setItem('usagiSound', soundEnabled ? '1' : '0'); } catch (e) {}
}

function toggleVoice() {
  voiceEnabled = !voiceEnabled;
  const btn = $('voiceBtn');
  if (btn) { btn.textContent = voiceEnabled ? '🗣️' : '🚫'; btn.classList.toggle('muted', !voiceEnabled); }
  if (!voiceEnabled) stopSpeaking(); else readCurrentQuestion();
  try { localStorage.setItem('usagiVoice', voiceEnabled ? '1' : '0'); } catch (e) {}
}

// ====== TIỆN ÍCH ======
function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; }
  return a;
}
function randomFrom(arr) { return arr[Math.floor(Math.random() * arr.length)]; }

function createPetals() {
  const container = $('petals');
  if (!container) return;
  container.innerHTML = '';
  const emojis = ['🌸', '💮', '🌼', '🌻'];
  for (let i = 0; i < 20; i++) {
    const p = document.createElement('div');
    p.className = 'petal';
    p.textContent = emojis[Math.floor(Math.random() * emojis.length)];
    p.style.left = Math.random() * 100 + '%';
    p.style.fontSize = (12 + Math.random() * 14) + 'px';
    p.style.animationDuration = (8 + Math.random() * 10) + 's';
    p.style.animationDelay = (Math.random() * 12) + 's';
    p.style.opacity = 0.6 + Math.random() * 0.4;
    container.appendChild(p);
  }
}

function updateComboUI() {
  const box = $('comboBox');
  if (!box) return;
  if (comboStreak >= 2) {
    box.classList.remove('hidden');
    $('comboCount').textContent = comboStreak;
    box.style.animation = 'none'; void box.offsetWidth;
    box.style.animation = 'comboGlow 1.2s ease-in-out infinite, comboSlide 0.4s ease';
  } else { box.classList.add('hidden'); }
}

// ====== GAME ======
function startGame() {
  currentQuestions = shuffle(QUESTIONS);
  currentQ = 0;
  score = 0;
  comboStreak = 0;
  $('score').textContent = '0';
  updateComboUI();
  $('endScreen').classList.add('hidden');
  $('quizArea').classList.remove('hidden');
  document.querySelector('.npc-area').classList.remove('hidden');
  loadQuestion();
}

function loadQuestion() {
  answered = false;
  stopSpeaking();
  const q = currentQuestions[currentQ];

  const indexed = q.options.map((text, i) => ({ text, isCorrect: i === q.correct }));
  const shuffled = shuffle(indexed);
  shuffledOptions = shuffled.map(o => o.text);
  correctIndexShuffled = shuffled.findIndex(o => o.isCorrect);

  $('qType').textContent = q.type === 'mc' ? 'TRẮC NGHIỆM' : 'ĐÚNG / SAI';
  $('qText').textContent = q.q;
  $('feedback').textContent = '';
  $('feedback').className = 'feedback';
  $('nextBtn').disabled = true;
  $('nextBtn').textContent = currentQ === currentQuestions.length - 1 ? 'Xem kết quả 🎉' : 'Câu tiếp theo →';

  const pct = (currentQ / currentQuestions.length) * 100;
  $('progressFill').style.width = pct + '%';
  $('progressText').textContent = (currentQ + 1) + ' / ' + currentQuestions.length;

  const lines = [
    'Ura! Bạn trả lời được không nào? 🤔', 'Câu này dễ lắm đó nha! 💕', 'Suy nghĩ kỹ trước khi chọn nhé~ 🌸', 'Cố lên bạn yêu! 🎀', 'Mình tin bạn làm được! ✨',
  ];
  $('speech').textContent = lines[currentQ % lines.length];

  const answersDiv = $('answers');
  answersDiv.innerHTML = '';
  answersDiv.className = 'answers' + (q.type === 'tf' ? ' true-false-grid' : '');

  shuffledOptions.forEach((opt, idx) => {
    const btn = document.createElement('button');
    btn.className = 'answer-btn';
    const letter = q.type === 'tf' ? (opt === 'Đúng' ? '✓' : '✗') : String.fromCharCode(65 + idx);
    btn.innerHTML = `<span class="letter">${letter}</span><span>${opt}</span>`;
    btn.onclick = () => handleAnswer(idx, btn);
    answersDiv.appendChild(btn);
  });

  setTimeout(() => readCurrentQuestion(), 400);
}

function handleAnswer(idx, btn) {
  if (answered) return;
  const feedback = $('feedback');
  initAudio();

  if (idx === correctIndexShuffled) {
    answered = true;
    score += 10;
    comboStreak++;

    let bonus = 0;
    if (comboStreak >= 5) bonus = 10;
    else if (comboStreak >= 3) bonus = 5;
    else if (comboStreak >= 2) bonus = 2;
    score += bonus;

    $('score').textContent = score;
    btn.classList.add('correct');

    let praiseText, voiceText;
    if (comboStreak >= 2) {
      const comboKey = Math.min(comboStreak, 5);
      const comboPraise = COMBO_PHRASES[comboKey] || COMBO_PHRASES[5];
      praiseText = randomFrom(comboPraise);
      voiceText = praiseText;
      feedback.textContent = `🔥 ${praiseText} +${10 + bonus} điểm`;
      setTimeout(() => playComboSound(comboStreak), 150);
    } else {
      praiseText = randomFrom(PRAISE_PHRASES);
      voiceText = praiseText;
      feedback.textContent = `🎉 ${praiseText} +10 điểm`;
      playRandomCorrectSound();
    }
    feedback.className = 'feedback good';
    stopSpeaking();
    $('speech').textContent = praiseText;
    updateComboUI();
    if (voiceEnabled) setTimeout(() => speak(voiceText), 500);
    $('nextBtn').disabled = false;
  } else {
    comboStreak = 0;
    updateComboUI();
    btn.classList.add('wrong-removed');
    btn.disabled = true;

    const encourage = randomFrom(ENCOURAGE_PHRASES);
    feedback.textContent = `❌ ${encourage}`;
    feedback.className = 'feedback bad';
    stopSpeaking();
    $('speech').textContent = encourage;
    playWrongSound();
    if (voiceEnabled) setTimeout(() => speak(encourage), 500);
  }
}

$('nextBtn').onclick = () => {
  playClickSound();
  stopSpeaking();
  currentQ++;
  if (currentQ >= currentQuestions.length) showEnd();
  else loadQuestion();
};

function showEnd() {
  stopSpeaking();
  $('quizArea').classList.add('hidden');
  document.querySelector('.npc-area').classList.add('hidden');
  $('endScreen').classList.remove('hidden');

  // Tính điểm tối đa thực tế (bao gồm điểm thưởng combo)
  let maxScore = 0;
  let tempStreak = 0;
  for (let i = 0; i < currentQuestions.length; i++) {
    tempStreak++;
    maxScore += 10;
    if (tempStreak >= 5) maxScore += 10;
    else if (tempStreak >= 3) maxScore += 5;
    else if (tempStreak >= 2) maxScore += 2;
  }

  let rank = '🌸 Cố gắng lên nhé!';
  let voiceText = 'Hoàn thành rồi! Cố gắng lên nhé!';
  if (score >= maxScore * 0.8) { 
    rank = '👑 Xuất sắc! Bạn thật bá khí!'; 
    voiceText = 'Xuất sắc! Bạn thật bá khí!'; 
  } 
  else if (score >= maxScore * 0.5) { 
    rank = '💖 Khá tốt! Tiếp tục cố gắng!'; 
    voiceText = 'Khá tốt! Tiếp tục cố gắng nhé!'; 
  }

  $('finalScore').innerHTML = `Bạn đạt <strong>${score}</strong> / ${maxScore} điểm<br><span style="font-size:17px;color:#ff8f00;margin-top:12px;display:block">${rank}</span>`;

  setTimeout(() => { if (score >= maxScore * 0.5) playCompleteSound(); else playEndFanfare(); }, 300);
  if (voiceEnabled) setTimeout(() => speak(`${voiceText} Bạn được ${score} trên ${maxScore} điểm.`), 1500);
}

function restartGame() {
  playClickSound();
  stopSpeaking();
  $('endScreen').classList.add('hidden');
  $('quizArea').classList.remove('hidden');
  document.querySelector('.npc-area').classList.remove('hidden');
  startGame();
}

$('speakBtn').onclick = () => {
  if (currentVoice) stopSpeaking();
  else readCurrentQuestion();
};

document.addEventListener('DOMContentLoaded', () => {
  try {
    if (localStorage.getItem('usagiSound') === '0') { soundEnabled = false; const btn = $('soundBtn'); if (btn) { btn.textContent = '🔇'; btn.classList.add('muted'); } }
    if (localStorage.getItem('usagiVoice') === '0') { voiceEnabled = false; const btn = $('voiceBtn'); if (btn) { btn.textContent = '🚫'; btn.classList.add('muted'); } }
  } catch (e) {}

  $('soundBtn').addEventListener('click', toggleSound);
  $('voiceBtn').addEventListener('click', toggleVoice);

  createPetals();
  startGame();

  document.body.addEventListener('click', initAudio, { once: true });
  document.body.addEventListener('touchstart', initAudio, { once: true });

  document.addEventListener('visibilitychange', () => {
    if (!document.hidden && 'speechSynthesis' in window) loadVoices();
  });
});