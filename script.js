// ====== 36 CÂU HỎI SIÊU KHÓ: TÂM LÝ HỌC, KỸ NĂNG MỀM & TÌNH HUỐNG THỰC TẾ ======
const QUESTIONS = [
  // --- NHÓM 1: TÂM LÝ HỌC VÀ NHẬN THỨC BẢN THÂN ---
  { type: 'mc', q: 'Theo mô hình "Cửa sổ Johari", vùng "Mù" (Blind Spot) đại diện cho điều gì và làm sao để thu hẹp nó?', options: ['Điều người khác biết về ta nhưng ta không biết; thu hẹp bằng cách lắng nghe phản hồi', 'Điều cả ta và người khác đều không biết; thu hẹp bằng cách tự suy ngẫm', 'Bí mật của bản thân; thu hẹp bằng cách chia sẻ với người khác', 'Điều ta biết về bản thân; thu hẹp bằng cách che giấu cảm xúc'], correct: 0 },
  { type: 'mc', q: 'Hiện tượng "Trì hoãn" (Procrastination) thường xuất phát sâu xa từ cơ chế phòng vệ tâm lý nào?', options: ['Nỗi sợ thất bại và sự lo âu quá mức về kết quả', 'Sự thiếu hụt kiến thức chuyên môn', 'Do tính cách hướng nội bẩm sinh', 'Do thiếu dụng cụ học tập'], correct: 0 },
  { type: 'mc', q: 'Phương pháp "Tái cấu trúc nhận thức" (Cognitive Reframing) được áp dụng hiệu quả nhất khi nào?', options: ['Khi thay đổi góc nhìn tiêu cực thành góc nhìn khách quan, tích cực hơn', 'Khi kìm nén và phớt lờ cảm xúc tiêu cực', 'Khi đổ lỗi cho hoàn cảnh bên ngoài', 'Khi tránh né tình huống gây ra cảm xúc đó'], correct: 0 },
  { type: 'mc', q: 'Theo tâm lý học, "Lòng tự trọng lành mạnh" (Healthy Self-esteem) được biểu hiện như thế nào?', options: ['Chấp nhận khuyết điểm, không phụ thuộc vào lời khen, và nỗ lực phát triển', 'Luôn cho mình đúng và giỏi hơn người khác', 'Cần người khác xác nhận giá trị của mình mỗi ngày', 'Không bao giờ thừa nhận mình sai'], correct: 0 },
  { type: 'mc', q: 'Để duy trì động lực học tập bền vững, lý thuyết "Động lực nội tại" (Intrinsic Motivation) khuyên chúng ta nên làm gì?', options: ['Tập trung vào niềm vui và ý nghĩa của việc học thay vì chỉ phần thưởng bên ngoài', 'Chỉ học khi có phần thưởng vật chất', 'Học để đối phó với kỳ thi', 'So sánh điểm số với bạn bè'], correct: 0 },
  { type: 'mc', q: 'Hội chứng "Kẻ mạo danh" (Impostor Syndrome) là gì?', options: ['Cảm giác bản thân không xứng đáng với thành công dù đã nỗ lực thực sự', 'Việc thích giả làm người khác để trục lợi', 'Sự tự tin thái quá vào năng lực bản thân', 'Thói quen đổ lỗi cho người khác khi thất bại'], correct: 0 },

  // --- NHÓM 2: KỸ NĂNG MỀM VÀ GIAO TIẾP ---
  { type: 'mc', q: 'Trong giao tiếp, "Lắng nghe chủ động" (Active Listening) khác với nghe thông thường ở điểm cốt lõi nào?', options: ['Tập trung hiểu thông điệp, phản hồi bằng ngôn ngữ cơ thể và đặt câu hỏi làm rõ', 'Chỉ nghe những gì mình muốn nghe', 'Vừa nghe vừa chuẩn bị câu trả lời để phản bác', 'Im lặng tuyệt đối không phản hồi'], correct: 0 },
  { type: 'mc', q: 'Khi nhận được lời phê bình gay gắt từ giáo viên, phản ứng nào thể hiện "Tư duy phản biện" (Critical Thinking) tốt nhất?', options: ['Phân tích xem lời phê bình có đúng không, tìm điểm hợp lý để sửa đổi', 'Bực tức và cho rằng giáo viên thiên vị', 'Chấp nhận mọi lời phê bình mà không cần suy nghĩ', 'Kể xấu giáo viên với bạn bè'], correct: 0 },
  { type: 'mc', q: 'Kỹ thuật "Phân tích SWOT" giúp cá nhân làm rõ điều gì khi đối mặt với quyết định khó khăn?', options: ['Điểm mạnh, điểm yếu, cơ hội và thách thức của bản thân', 'Cách để đánh bại đối thủ cạnh tranh', 'Cách để trốn tránh trách nhiệm', 'Cách để có được lợi ích ngắn hạn'], correct: 0 },
  { type: 'mc', q: 'Đâu là biểu hiện của "Giao tiếp phi ngôn ngữ" (Non-verbal communication) mang tính xây dựng?', options: ['Giao tiếp bằng mắt, gật đầu và giữ tư thế cởi mở', 'Khoanh tay và nhìn đi chỗ khác', 'Thở dài khi người khác đang nói', 'Lướt điện thoại trong cuộc họp'], correct: 0 },
  { type: 'mc', q: 'Trong xung đột nhóm, chiến lược "Win-Win" (Hợp tác) đòi hỏi điều gì?', options: ['Cả hai bên cùng nhượng bộ và tìm giải pháp tối ưu cho cả hai', 'Một bên phải thắng và một bên phải thua', 'Cả hai bên đều từ bỏ mục tiêu ban đầu', 'Bên thứ ba đứng ra giải quyết thay'], correct: 0 },
  { type: 'mc', q: 'Kỹ thuật "Sandwich Feedback" (Phản hồi kẹp) thường được dùng để làm gì?', options: ['Bắt đầu bằng lời khen, đưa ra lời phê bình, kết thúc bằng lời động viên', 'Chỉ đưa ra lời chê bai để người khác sửa đổi', 'Liên tục khen ngợi để tránh làm mất lòng', 'Nói giảm nói tránh để che giấu sự thật'], correct: 0 },

  // --- NHÓM 3: QUẢN LÝ THỜI GIAN VÀ MỤC TIÊU ---
  { type: 'mc', q: 'Ma trận Eisenhower phân loại công việc theo 2 tiêu chí nào để quản lý thời gian?', options: ['Mức độ Khẩn cấp và Mức độ Quan trọng', 'Mức độ Khó và Mức độ Dễ', 'Thời gian ngắn và Thời gian dài', 'Công việc cá nhân và Công việc nhóm'], correct: 0 },
  { type: 'mc', q: 'Theo nguyên tắc SMART, tiêu chí "Relevant" (Thực tế/Liên quan) yêu cầu mục tiêu phải như thế nào?', options: ['Phù hợp với định hướng giá trị và mục tiêu dài hạn của bản thân', 'Có thể đo lường bằng con số cụ thể', 'Phải hoàn thành trong thời gian ngắn nhất', 'Do người khác đặt ra và áp đặt'], correct: 0 },
  { type: 'mc', q: 'Nguyên tắc "Pomodoro" trong quản lý thời gian hoạt động dựa trên cơ chế nào?', options: ['Làm việc tập trung cao độ trong 25 phút và nghỉ ngắn 5 phút', 'Làm việc liên tục 4 tiếng không nghỉ', 'Chỉ làm việc khi có hứng thú', 'Vừa làm việc vừa giải trí'], correct: 0 },
  { type: 'mc', q: 'Quy tắc "2 phút" (2-Minute Rule) trong quản lý công việc khuyên bạn làm gì?', options: ['Nếu một việc mất ít hơn 2 phút, hãy làm nó ngay lập tức', 'Chỉ dành 2 phút để lập kế hoạch mỗi ngày', 'Nghỉ giải lao 2 phút sau mỗi giờ làm việc', 'Dành 2 phút cuối ngày để đánh giá bản thân'], correct: 0 },
  { type: 'mc', q: 'Khái niệm "Deep Work" (Làm việc sâu) của Cal Newport nhấn mạnh điều gì?', options: ['Trạng thái tập trung không bị xao nhãng vào các nhiệm vụ đòi hỏi nhận thức cao', 'Làm nhiều việc cùng lúc để tăng năng suất', 'Làm việc xuyên đêm để hoàn thành deadline', 'Chỉ làm những việc dễ và nhanh'], correct: 0 },

  // --- NHÓM 4: TÌNH HUỐNG THỰC TẾ (TRẮC NGHIỆM) ---
  { type: 'mc', q: 'Bạn được giao thuyết trình nhóm nhưng một thành viên không chịu làm việc. Bạn nên xử lý thế nào?', options: ['Nói chuyện riêng để tìm hiểu nguyên nhân và phân chia lại công việc hợp lý', 'Làm hết phần việc của bạn đó để nhóm kịp tiến độ', 'Mách giáo viên ngay lập tức mà không trao đổi', 'Bỏ mặc và để trống phần của bạn đó trong bài'], correct: 0 },
  { type: 'mc', q: 'Bạn nhận được một khoản tiền nhỏ. Quyết định nào thể hiện kế hoạch tài chính cá nhân thông minh?', options: ['Trích một phần tiết kiệm, một phần mua sách học tập, một phần giải trí hợp lý', 'Mua ngay món đồ yêu thích mà không cần suy nghĩ', 'Cho bạn bè vay toàn bộ số tiền', 'Giữ trong két sắt và không dùng đến'], correct: 0 },
  { type: 'mc', q: 'Khi cảm thấy căng thẳng tột độ trước kỳ thi, cách ứng phó nào sau đây là "thích ứng" (Adaptive) nhất?', options: ['Thực hành hít thở sâu, chia nhỏ bài học và duy trì giấc ngủ đủ', 'Cày xuyên đêm và bỏ ăn để học', 'Uống nhiều cà phê và thuốc an thần', 'Bỏ thi vì quá sợ hãi'], correct: 0 },
  { type: 'mc', q: 'Trong một buổi tranh luận, đối phương đưa ra dẫn chứng bạn cho là sai. Bạn nên làm gì?', options: ['Đặt câu hỏi phản biện để làm rõ nguồn gốc và tính xác thực của dẫn chứng', 'Cười nhạo và bảo họ sai hoàn toàn', 'Im lặng và không tranh luận nữa', 'Đồng ý cho xong chuyện dù biết họ sai'], correct: 0 },
  { type: 'mc', q: 'Phát hiện bạn thân nói xấu mình sau lưng, hành động nào thể hiện sự trưởng thành cảm xúc?', options: ['Bình tĩnh gặp gỡ, thẳng thắn hỏi lý do và lắng nghe góc nhìn của họ', 'Lập tức cắt đứt quan hệ và kể xấu lại họ', 'Đăng trạng thái ẩn ý trên mạng xã hội', 'Nhờ người khác đánh họ'], correct: 0 },

  // --- NHÓM 5: KẾ HOẠCH TÀI CHÍNH (TỪ ẢNH) ---
  { type: 'mc', q: 'Kế hoạch tài chính cá nhân là gì?', options: ['Bản dự toán các khoản đầu tư rủi ro để làm giàu nhanh chóng', 'Bản kế hoạch chi tiêu về thu nhập, chi tiêu, tiết kiệm & đầu tư nhằm đạt mục tiêu tài chính', 'Bảng kê khai tài sản cố định để rập thuế cho nhà nước', 'Sổ theo dõi các khoản nợ phải trả cho ngân hàng hàng tháng'], correct: 1 },
  { type: 'mc', q: 'Có mấy loại kế hoạch tài chính cá nhân?', options: ['2', '3', '5', '8'], correct: 1 },
  { type: 'mc', q: 'Phương pháp nào sau đây là cách thực hiện kế hoạch tài chính cá nhân tối ưu nhất?', options: ['Bỏ tất cả tiền vào heo đất để giữ an toàn tuyệt đối tài sản', 'Không cần tiết kiệm, cứ mang đi mua những thứ mình thích để thỏa mãn bản thân', 'Phân bổ tiền hợp lý, chi tiêu tiết kiệm, gửi ngân hàng & đầu tư an toàn', 'Đưa hết tiền cho phụ huynh giữ, lớn rồi sẽ lấy lại'], correct: 2 },

  // --- NHÓM 6: ĐÚNG / SAI (PHÂN TÍCH SÂU) ---
  { type: 'tf', q: 'Việc kìm nén hoàn toàn cảm xúc tiêu cực luôn là cách quản lý cảm xúc tốt nhất.', options: ['Đúng', 'Sai'], correct: 1 },
  { type: 'tf', q: 'Một mục tiêu không có thời hạn cụ thể sẽ giúp giảm áp lực và tăng hiệu quả rèn luyện bản thân.', options: ['Đúng', 'Sai'], correct: 1 },
  { type: 'tf', q: 'Trong phản hồi xây dựng, việc đưa ra giải pháp cụ thể quan trọng hơn việc chỉ trích tính cách người khác.', options: ['Đúng', 'Sai'], correct: 0 },
  { type: 'tf', q: 'Sự tự tin thái quá (Overconfidence) không bao giờ gây hại vì nó giúp ta dũng cảm hơn trong học tập.', options: ['Đúng', 'Sai'], correct: 1 },
  { type: 'tf', q: 'Lắng nghe chủ động (Active Listening) chỉ bao gồm việc nghe bằng tai mà không cần quan sát ngôn ngữ cơ thể.', options: ['Đúng', 'Sai'], correct: 1 },
  { type: 'tf', q: 'Việc chấp nhận sự không hoàn hảo của bản thân là một bước quan trọng để rèn luyện sự tự tin.', options: ['Đúng', 'Sai'], correct: 0 },
  { type: 'tf', q: 'Quản lý thời gian hiệu quả đồng nghĩa với việc làm thật nhiều việc cùng một lúc (Đa nhiệm).', options: ['Đúng', 'Sai'], correct: 1 },
  { type: 'tf', q: 'Kỹ năng tự đánh giá bản thân chỉ cần thiết khi ta gặp thất bại, còn khi thành công thì không cần nhìn lại.', options: ['Đúng', 'Sai'], correct: 1 },
  { type: 'tf', q: 'Thất bại luôn là dấu hiệu cho thấy bản thân thiếu năng lực và không nên cố gắng nữa.', options: ['Đúng', 'Sai'], correct: 1 },
  { type: 'tf', q: 'Một người có "Tư duy phản biện" tốt sẽ luôn tin tưởng tuyệt đối vào thông tin từ người có chuyên môn mà không cần kiểm chứng.', options: ['Đúng', 'Sai'], correct: 1 }
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

  $('qType').textContent = q.type === 'mc' ? 'TRẮC NGHIỆM" : "ĐÚNG / SAI';
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
