// ====== 20 CÂU HỎI NÂNG CAO: CHỦ ĐỀ 3 - RÈN LUYỆN BẢN THÂN (HĐTN 10 - KNTT) ======
const QUESTIONS = [
  // Trắc nghiệm 4 đáp án (10 câu - Phân tích & Vận dụng)
  { 
    type: 'mc', 
    q: 'Phản hồi mang tính xây dựng khác với lời chỉ trích ở điểm cốt lõi nào?', 
    options: [
      'Tập trung vào hành vi cụ thể và đưa ra giải pháp cải thiện', 
      'Luôn khen ngợi để tránh làm tổn thương người khác', 
      'Chỉ ra lỗi sai mà không cần giải thích lý do', 
      'Đưa ra nhận xét chung chung về tính cách con người'
    ], 
    correct: 0 
  },
  { 
    type: 'mc', 
    q: 'Theo nguyên tắc SMART, một mục tiêu được đánh giá là "Khả thi" (Achievable) khi nào?', 
    options: [
      'Khi mục tiêu đó phù hợp với nguồn lực và năng lực hiện có của bản thân', 
      'Khi mục tiêu đó do người khác áp đặt và yêu cầu phải hoàn thành', 
      'Khi mục tiêu đó mang tính thử thách cực cao, bất chấp khó khăn', 
      'Khi mục tiêu đó không giới hạn thời gian thực hiện'
    ], 
    correct: 0 
  },
  { 
    type: 'mc', 
    q: 'Hiện tượng "trì hoãn" (procrastination) thường xuất phát sâu xa từ nguyên nhân tâm lý nào?', 
    options: [
      'Nỗi sợ thất bại hoặc sự lo lắng quá mức về kết quả', 
      'Sự thiếu hiểu biết về kiến thức chuyên môn', 
      'Thói quen thích làm việc vào ban đêm', 
      'Do thiếu dụng cụ học tập hỗ trợ'
    ], 
    correct: 0 
  },
  { 
    type: 'mc', 
    q: 'Trong mô hình "Cửa sổ Johari", vùng "Mù" (Blind Spot) đại diện cho điều gì?', 
    options: [
      'Những đặc điểm về bản thân mà người khác thấy nhưng chính ta không nhận ra', 
      'Những điều cả bản thân và người khác đều không biết', 
      'Những điều ta biết rõ về bản thân và công khai với mọi người', 
      'Những bí mật cá nhân ta giấu kín trong lòng'
    ], 
    correct: 0 
  },
  { 
    type: 'mc', 
    q: 'Để chuyển hóa cảm xúc tiêu cực một cách hiệu quả, phương pháp "tái cấu trúc nhận thức" (Cognitive Reframing) yêu cầu học sinh làm gì?', 
    options: [
      'Thay đổi cách nhìn nhận vấn đề theo hướng tích cực và khách quan hơn', 
      'Dồn nén cảm xúc đó vào sâu bên trong', 
      'Tìm cách đổ lỗi cho hoàn cảnh bên ngoài', 
      'Tránh né hoàn toàn các tình huống gây ra cảm xúc đó'
    ], 
    correct: 0 
  },
  { 
    type: 'mc', 
    q: 'Hành vi nào sau đây thể hiện sự "lệch chuẩn" trong kỹ năng tự đánh giá bản thân?', 
    options: [
      'Phóng đại điểm mạnh và phủ nhận hoàn toàn điểm yếu của bản thân', 
      'Xin ý kiến nhận xét từ thầy cô để đối chiếu', 
      'Ghi chép lại các lỗi sai để rút kinh nghiệm', 
      'Đặt mục tiêu nhỏ và tăng dần độ khó'
    ], 
    correct: 0 
  },
  { 
    type: 'mc', 
    q: 'Theo nghiên cứu tâm lý, để nuôi dưỡng một thói quen mới bền vững, một người cần duy trì sự kiên trì trong khoảng thời gian trung bình là bao lâu?', 
    options: [
      'Khoảng 66 ngày (từ 2 đến 8 tháng tùy độ phức tạp)', 
      'Chỉ cần 3 ngày liên tục', 
      'Đúng 21 ngày theo mọi trường hợp', 
      'Trong vòng 1 tuần là đủ'
    ], 
    correct: 0 
  },
  { 
    type: 'mc', 
    q: 'Khi đối mặt với một xung đột quan điểm trong nhóm học tập, chiến lược nào sau đây thể hiện sự trưởng thành về mặt cảm xúc?', 
    options: [
      'Lắng nghe, tìm điểm chung và thương lượng để cùng có lợi', 
      'Bảo vệ quan điểm của mình bằng mọi giá', 
      'Im lặng và làm theo ý người khác để tránh cãi vã', 
      'Rời khỏi nhóm và làm việc một mình'
    ], 
    correct: 0 
  },
  { 
    type: 'mc', 
    q: 'Khái niệm "Lòng tự trọng lành mạnh" (Healthy Self-esteem) được thể hiện rõ nhất qua hành vi nào?', 
    options: [
      'Chấp nhận bản thân có khuyết điểm nhưng vẫn nỗ lực phát triển', 
      'Luôn cho rằng mình giỏi hơn người khác', 
      'Phụ thuộc hoàn toàn vào lời khen của người xung quanh', 
      'Tự cô lập bản thân để không bị ảnh hưởng'
    ], 
    correct: 0 
  },
  { 
    type: 'mc', 
    q: 'Yếu tố then chốt giúp học sinh lớp 10 quản lý thời gian hiệu quả giữa học tập và ngoại khóa là gì?', 
    options: [
      'Xác định rõ ưu tiên và phân bổ thời gian theo ma trận khẩn cấp/quan trọng', 
      'Dành toàn bộ thời gian cho việc học, cắt bỏ ngoại khóa', 
      'Làm việc ngẫu hứng tùy theo cảm xúc từng ngày', 
      'Chỉ tập trung làm các việc dễ trước'
    ], 
    correct: 0 
  },

  // Đúng / Sai (10 câu - Phân tích & Đánh giá)
  { 
    type: 'tf', 
    q: 'Việc kìm nén hoàn toàn cảm xúc tiêu cực luôn là cách quản lý cảm xúc tốt nhất.', 
    options: ['Đúng', 'Sai'], 
    correct: 1 
  },
  { 
    type: 'tf', 
    q: 'Khi tự đánh giá, việc so sánh bản thân với người khác giỏi hơn chỉ mang lại động lực, không bao giờ gây ra tác dụng phụ tiêu cực.', 
    options: ['Đúng', 'Sai'], 
    correct: 1 
  },
  { 
    type: 'tf', 
    q: 'Để nhận được phản hồi có chất lượng, bản thân cần đặt câu hỏi cụ thể thay vì chờ người khác đánh giá chung chung.', 
    options: ['Đúng', 'Sai'], 
    correct: 0 
  },
  { 
    type: 'tf', 
    q: 'Việc thất bại là một trải nghiệm cần thiết để học sinh THPT đánh thức tư duy phản biện và bài học kinh nghiệm.', 
    options: ['Đúng', 'Sai'], 
    correct: 0 
  },
  { 
    type: 'tf', 
    q: 'Một mục tiêu không có thời hạn cụ thể sẽ giúp giảm áp lực và tăng hiệu quả rèn luyện bản thân.', 
    options: ['Đúng', 'Sai'], 
    correct: 1 
  },
  { 
    type: 'tf', 
    q: 'Chỉ những người có điểm số thấp mới cần đến kỹ năng tự đánh giá bản thân, người có điểm cao không cần.', 
    options: ['Đúng', 'Sai'], 
    correct: 1 
  },
  { 
    type: 'tf', 
    q: 'Xây dựng thói quen tích cực nên bắt đầu bằng những hành động nhỏ, dễ thực hiện và tăng dần theo thời gian.', 
    options: ['Đúng', 'Sai'], 
    correct: 0 
  },
  { 
    type: 'tf', 
    q: 'Kỹ năng giao tiếp hiệu quả chỉ bao gồm việc nói lưu loát, không cần chú trọng đến việc lắng nghe.', 
    options: ['Đúng', 'Sai'], 
    correct: 1 
  },
  { 
    type: 'tf', 
    q: 'Chấp nhận sự không hoàn hảo của bản thân là biểu hiện của sự yếu đuối và thiếu nỗ lực phấn đấu.', 
    options: ['Đúng', 'Sai'], 
    correct: 1 
  },
  { 
    type: 'tf', 
    q: 'Trong quá trình rèn luyện bản thân, việc lùi lại một bước để nhìn nhận lại mục tiêu được xem là một chiến lược thông minh.', 
    options: ['Đúng', 'Sai'], 
    correct: 0 
  },
];

// ====== CÂU KHEN ======
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
  4: ['Combo 4! Đỉnh cao muôn thuở!', 'Bốn câu liên tiếp! Siêu sao là đây!', 'Combo 4! Bất khả chiến bại!'],
  5: ['Combo 5! Bạn là huyền thoại!', 'Năm câu liên tiếp! Vô đối!', 'Combo 5! Không gì cản nổi!'],
  6: ['Combo 6! Não bạn là siêu máy tính hả?', 'Sáu câu rồi! Xin vía!', 'Combo 6! Bạn chơi game như thánh!'],
  7: ['Combo 7! Hạt bí nổ tung rồi!', 'Bảy câu! Bá khí ngút trời!', 'Combo 7! Thần thánh phương nào đây?'],
  8: ['Combo 8! Admin đang xem bạn kìa!', 'Tám câu rồi! Bịp thật sự!', 'Combo 8! Vô địch thiên hạ!'],
  9: ['Combo 9! Bạn là nỗi ác mộng của câu hỏi!', 'Chín câu! Không còn gì để nói!', 'Combo 9! Siêu bá khí!'],
  10: ['Combo 10! Bạn hack game à?', 'Mười câu! Huyền thoại sống!', 'COMBO 10! QUÁ BÁ KHÍ!'],
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
      const comboKey = comboStreak >= 10 ? 10 : comboStreak;
      const comboPraise = COMBO_PHRASES[comboKey] || COMBO_PHRASES[10];
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
