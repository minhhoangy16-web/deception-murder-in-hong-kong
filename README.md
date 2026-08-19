# 🇭🇰 Deception: Murder in Hong Kong (AI Forensic Scientist Edition)

Web game online nhiều người chơi thời gian thực (Real-time Multiplayer) dựa trên board game suy luận nổi tiếng **"Deception: Murder in Hong Kong"**. Điểm đặc biệt: vai trò **Forensic Scientist (Nhà giám định pháp y)** được vận hành hoàn toàn tự động bởi **Trí tuệ nhân tạo (AI - Google Gemini / OpenAI)** với logic suy luận hiện trường vụ án sắc bén.

---

## 🌟 Điểm Nổi Bật (Key Features)

- 🤖 **AI Forensic Scientist Master**: Tự động phân tích cặp thẻ Hung Khí (Means) và Bằng Chứng (Clue) của Hung thủ, lựa chọn và ghim các dấu vết 3D trên Bảng Thẻ Hiện Trường (Scene Tiles) cực kỳ thông minh và logic.
- ⚡ **Realtime Multiplayer (Socket.io)**: Hỗ trợ từ 4 đến 12 người chơi tham gia cùng lúc trên cùng 1 phòng thông qua mã phòng (Room Code), liên kết chia sẻ trực tiếp, hoặc quét mã QR bằng điện thoại.
- 🎭 **Đầy Đủ Vai Trò Bí Mật**:
  - **Hung Thủ (Murderer)**: Bí mật chọn Hung Khí & Bằng Chứng trong màn đêm, tìm cách đánh lạc hướng điều tra và ám sát Nhân Chứng nếu bị lộ.
  - **Đồng Phạm (Accomplice)**: Biết danh tính Hung thủ và thẻ bài đã chọn, hỗ trợ tung hỏa mù.
  - **Nhân Chứng (Witness)**: Nhìn thấy 2 kẻ thuộc phe gây án (được đánh dấu `⚠️ NGHI CAN` nhưng không biết ai là Hung thủ thật sự và ai là Đồng phạm).
  - **Điều Tra Viên (Investigator)**: Phân tích các gợi ý từ Pháp y AI và sử dụng Huy Hiệu để phá án.
- 🔍 **Giai Đoạn Xem Thẻ Bài (Briefing Phase)**: Tùy chỉnh 30s / 60s / 120s cho mọi người quan sát toàn bộ thẻ bài trên bàn trước khi phân vai bí mật.
- 🃏 **Bộ Thẻ Bài Sát Gốc 100%**: Thiết kế theo chuẩn bản Tabletop Simulator mod với hơn 70+ thẻ bài Hung khí & Bằng chứng minh họa chi tiết, hỗ trợ giao diện thuần Tiếng Việt & Song ngữ.
- 🖥️ **Bàn Chơi 4 Người / Hàng Ngang**: Giao diện rộng rãi, hiện đại trên Desktop và tối ưu cảm ứng mượt mà trên Mobile (PWA Ready).
- 🤖 **Tích Hợp Bot Thông Minh**: Có thể thêm Bot vào phòng để thử nghiệm nhanh khi chưa đủ người chơi.

---

## 🛠️ Công Nghệ Sử Dụng (Tech Stack)

- **Frontend**: Next.js 14 (App Router), React 18, TypeScript, TailwindCSS, Lucide Icons, Canvas Confetti.
- **Client State**: Zustand.
- **Realtime Server**: Node.js, Custom HTTP Server + Socket.io.
- **AI Forensic Engine**: Google GenAI SDK (`@google/genai` - Gemini 2.5/Flash), OpenAI API (`gpt-4o-mini`), cùng Local Heuristic Semantic Matcher.

---

## 🚀 Hướng Dẫn Cài Đặt & Chạy Cục Bộ (Local Setup)

### 1. Yêu cầu môi trường
- [Node.js](https://nodejs.org/) (phiên bản 18 trở lên)
- Git

### 2. Cài đặt các gói phụ thuộc
```bash
# Clone dự án
git clone https://github.com/your-username/deception-murder-in-hong-kong.git
cd deception-murder-in-hong-kong

# Cài đặt dependencies
npm install
```

### 3. Cấu hình biến môi trường (Tùy chọn)
Tạo file `.env.local` nếu bạn muốn dùng Gemini API hoặc OpenAI API trực tiếp từ máy chủ:
```env
GEMINI_API_KEY=your_gemini_api_key_here
OPENAI_API_KEY=your_openai_api_key_here
PORT=3000
```
*(Nếu không điền API key, hệ thống sẽ tự động sử dụng **Local Heuristic Engine** có sẵn không tốn phí).*

### 4. Khởi chạy Server Development
```bash
npm run dev
```
Truy cập:
- Trên máy tính: `http://localhost:3000`
- Trên điện thoại cùng Wi-Fi: `http://<IP_WIFI_CỦA_BẠN>:3000`

---

## 🌐 Hướng Dẫn Deploy Lên Internet Miễn Phí (Render.com)

Vì game sử dụng **Socket.io** thời gian thực, nền tảng lưu trữ tốt nhất là **Render.com**:

1. Đẩy mã nguồn lên một GitHub Repository của bạn.
2. Đăng nhập vào [Render.com](https://render.com) bằng tài khoản GitHub.
3. Chọn **New +** -> **Web Service** -> Chọn Repository này.
4. Cấu hình:
   - **Environment**: `Node`
   - **Build Command**: `npm install && npm run build`
   - **Start Command**: `npm run start`
   - **Instance Type**: `Free`
5. Bấm **Create Web Service**. Render sẽ cung cấp link công khai dạng `https://ten-du-an.onrender.com` để mọi người cùng vào chơi 24/7!

---

## 📜 Giấy Phép & Bản Quyền (License)

Dự án được phát triển cho mục đích học tập, nghiên cứu và giải trí cộng đồng dựa trên luật chơi của board game *"Deception: Murder in Hong Kong"* do Tobey Ho thiết kế.
