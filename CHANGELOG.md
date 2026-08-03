# 📝 Path of Exile Tools 項目更新日誌 / Changelog

本頁面用於滾動記錄項目後續各賽季的功能更迭、性能優化與底層重構。
This page tracks continuous feature upgrades, performance refactors, and semantic versioning logs across leagues.

---

## 🚀 [v1.1.2] - 2026-08-02
### ⚡ 響應式事件總線打通 / Reactive Event Bus Refactor
- **[ZH] 導航欄雙向聯動**：重構 `nav.js` 為事件驅動架構。在所有 HTML 頁面的切換函數中引入 `window.dispatchEvent`。當玩家點擊中/EN按鈕時，最頂部的公共導航欄標籤（如 💰 通貨速查 ➔ 💰 Currency Tab）會在 0.001 秒內無刷新實時同步切換，解決了原本點擊中文無法切回的歷史死角。
- **[ZH] 全局語言鏈對齊**：統一全站 4 個頁面的快取鍵名為 `poe_global_lang`。玩家在任意頁面切換語系，跨頁面跳轉時全站自動繼承，維持全球化統一體驗。
- **[EN] Asynchronous Architecture**: Upgraded `nav.js` to an event-driven design. Leveraged `window.dispatchEvent(new Event('poe_lang_changed'))` within localized switch blocks across all 4 HTML files, achieving zero-refresh reactive synchronization on the sticky navbar.
- **[EN] Cache Unification**: Unified cross-origin storage pointers under `poe_global_lang`. Preferences selected on any dashboard natively migrate during routing.

---

## 🔄 [v1.1.1] - 2026-08-02
### 🐛 數據索引與控制流修復 / Data Indexing & Control Flow Patches
- **[ZH] 計算器卡片復活**：修正了 `calculator.html` 內遍歷刷字時的數組解構錯誤，完美還原 37 種通貨卡片與說明掛件的正常重繪。
- **[ZH] 正則面板解鎖**：移除 `regex.html` 開盒節點上的 `onclick` 硬編碼，改用標準 CSS `for` 屬性關聯，徹底根治了由于事件冒泡（Event Bubbling）導致「詳細使用說明」展開/折疊按鈕卡死失效的致命 Bug。
- **[EN] Array Restructuring**: Fixed property destructuring errors on loop parameters inside `calculator.html`, restoring grid rendering capabilities.
- **[EN] Bubbling Evasion**: Eliminated nested `onclick` expressions on card DOM elements, shifting weight to strict semantic CSS `for` tag parameters. Eradicated asynchronous event locks on togglable markdown menus.

---

## 📊 [v1.1.0] - 2026-08-02
### 🛠️ 新增日誌清算與視覺微調 / High-Performance Log Parsing & Layout Engine
- **[ZH] 一鍵日誌清算**：在 `calculator.html` 中集成純前端高效率 `FileReader API` 監聽器。玩家將遊戲目錄下的 `Client.txt` 拖入，自動執行 **50MB 尾部流式切片掃描**（高性能防死機），0.2秒內自動清算聖所/法陣完成場次、通關均時與淨時薪效益。
- **[ZH] 折疊路徑內嵌**：將龐大的 Steam/獨立版/國服默認日誌路徑說明從拖拽框中剝離，改用極簡金色按鈕同航並存，點擊向下彈出，極大縮減網格上方的空間占用。
- **[ZH] 像素級左對齊**：微調計算器網格的 CSS 流，引入 `.card-text-box` 容器強制指定 `align-items: flex-start`，確保所有卡片的中英文名字在任何屏幕下都**絕對完美左對齊**。
- **[EN] Log Analyzer**: Embedded an asynchronous sandbox `FileReader` handler into the asset grid. Leveraged custom chunk file slicing (`file.slice`) to instantly analyze the last 50MB of raw data from `Client.txt` within 200ms. Maps elapsed interval timelines between Sanctum entry signals and Hideout callbacks to formulate live profit-per-hour metrics.
- **[EN] Inline Paths**: Relocated client file logs descriptions into a minimalist button array that expands drop-down directions inline on user request.
- **[EN] Align Overhaul**: Implemented strict flex rules via `.card-text-box`, forcing typography components to align flat to the left alignment borders seamlessly.

---

## 🎨 [v1.0.1] - 2026-08-01
### 🎨 視覺與樣式重塑 / UI & Styling Refactor
- **[ZH]** 重新調整了 `calculator.html` 的卡片排版流，確保通貨中文名與斜體英文在任何分辨率下都保持**絕對左對齊**。
- **[EN]** Enforced perfect left-alignment for all net worth token blocks via `.card-text-box` containment styling.

### 💡 新增功能與引導 / New Guidance
- **[ZH]** 在身價計算器中追加了多語言 poe.ninja 賽季動態市價手動微調指南掛件。
- **[EN]** Integrated a localized guide block instructing players on manual exchange rate extraction from poe.ninja.

### 🐛 缺陷修復 / Bug Fixes
- **[ZH]** 修正了連結石修改匯率時調用不存在函數 `calc()` 導致的腳本崩潰 Bug。
- **[EN]** Patched orphan caller traces on the fusing orb rate modifier, routing it safely back to `saveAndCalc()`.

---

## 🎉 [v1.0.0] - 2026-08-01
### 📦 項目初代穩定版正式發行 / Initial Stable Release Baseline
- **💰 index.html**: 43種倉庫頁全幣種中英及官方縮寫即時過濾速查。
- **🔍 regex.html**: 異界洗圖必備危險詞綴（元反、物反、降回复等）自動化正則生成器（移除了外部引號以適配遊戲內搜尋）。
- **🧮 calculator.html**: 37種全通貨大宗物資自動存檔身價動態計算器。
- **🛠️ nav.js**: 獨立純前端異步動態注入組件，實現全頁面一體化維護。