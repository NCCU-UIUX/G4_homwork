# 使用者體驗設計 作業展示網站

這是NCCU-UIUX課程的前端項目，用於展示使用者體驗設計課程的各項作業成果。

### 訪問網站
您可以通過以下網址訪問部署後的網站：
[https://g4-homwork.vercel.app/](https://g4-homwork.vercel.app/)

## 網站內容

本網站展示了使用者體驗設計課程中的以下作業成果：

- HW1: [CI report](https://docs.google.com/document/d/1v7YsPch3bgEbBd5LktYDhUAtXqHN3iacRB8Fa2dXZ20/edit?usp=sharing)
- HW2: [Affinity Diagram](https://miro.com/app/board/uXjVIDk0EyY=/)
- HW3: [User Personas](https://g4-homwork.vercel.app/hw3.html)
- HW4: [原型測試與迭代](https://arou-tea-trail.vercel.app/)
- HW5: [最終設計展示](https://arou.vercel.app/)

## tech stack
- React.js
- Vite
- Tailwind CSS

## 開發環境設置

1. 克隆倉庫:

```bash
git clone https://github.com/NCCU-UIUX/G4_homwork.git
cd G4_homwork
```

2. 安裝依賴:

```bash
npm install
```

3. 運行開發服務器:

```bash
npm run dev
```

## 構建生產版本

```bash
npm run build
```

## 持續整合與部署 (CI/CD)

本項目使用Vercel進行持續整合與部署。當代碼推送到GitHub主分支時，Vercel會自動檢測變更並部署最新版本。

### 部署流程

1. 代碼提交並推送到GitHub
2. Vercel自動檢測到變更
3. Vercel執行構建流程
4. 新版本自動部署到生產環境


## 目錄結構

```
/
├── src/                       # 源代碼目錄
│   ├── components/            # React組件
│   │   ├── Header.jsx         # 頁頭組件
│   │   ├── Footer.jsx         # 頁腳組件
│   │   ├── HomeworkCard.jsx   # 作業卡片組件
│   │   └── HomeworkCollection.jsx # 作業集合組件
│   ├── App.jsx                # 主應用組件
│   ├── main.jsx               # 入口文件
│   └── index.css              # 全局樣式
├── public/                    # 靜態資源
├── index.html                 # HTML模板
├── vite.config.js             # Vite配置
└── tailwind.config.js         # Tailwind配置
```

## 貢獻

請提交Pull Request或Issues到我們的GitHub倉庫。

## 授權

本項目為NCCU-UIUX課程作業，僅用於教育目的。