// 統一管理導航條的 HTML 數據與多語言動態切換樣式
function updateGlobalNavbar() {
    // 1. 統一讀取全項目唯一的全局語言快取
    const globalLang = localStorage.getItem('poe_global_lang') || 'zh';

    // 2. 導航欄中英文靜態字典
    const navText = {
        zh: { index: "💰 通貨速查", tools: "🛠️ 工具清單", regex: "🔍 正則表達式", calc: "🧮 收益計算器" },
        en: { index: "💰 Currency Tab", tools: "🛠️ Tools List", regex: "🔍 Regex Filter", calc: "🧮 Asset Calculator" }
    };
    const t = navText[globalLang];

    // 3. 渲染或更新導航欄文字
    const navContainer = document.getElementById('global-nav');
    if (navContainer) {
        navContainer.innerHTML = `
            <div class="nav-bar">
                <a href="index.html" class="nav-link" id="nav-index">${t.index}</a>
                <a href="regex.html" class="nav-link" id="nav-regex">${t.regex}</a>
                <a href="calculator.html" class="nav-link" id="nav-calculator">${t.calc}</a>
				<a href="tools.html" class="nav-link" id="nav-tools">${t.tools}</a>
            </div>
        `;

        // 4. 自動高亮當前激活頁面
        const currentPage = window.location.pathname.split("/").pop() || "index.html";
        if (currentPage === "index.html" || currentPage === "") {
            document.getElementById('nav-index').classList.add('active');
        } else if (currentPage === "tools.html") {
            document.getElementById('nav-tools').classList.add('active');
        } else if (currentPage === "regex.html") {
            document.getElementById('nav-regex').classList.add('active');
        } else if (currentPage === "calculator.html") {
            document.getElementById('nav-calculator').classList.add('active');
        }
    }
}

// 初始化加載
document.addEventListener("DOMContentLoaded", function() {
    // 注入 PoE 暗黑風格樣式
    if (!document.getElementById('global-nav-style')) {
        const style = document.createElement('style');
        style.id = 'global-nav-style';
        style.innerHTML = `
            .nav-bar { display: flex; gap: 10px; margin-bottom: 20px; border-bottom: 1px solid #333; padding-bottom: 12px; }
            .nav-link { color: #aaa; text-decoration: none; padding: 6px 12px; background: #1a1a1a; border: 1px solid #2a2a2a; border-radius: 3px; transition: all 0.2s ease; }
            .nav-link:hover { color: #ffe066; background: #222; border-color: #ffe066; box-shadow: 0 0 5px rgba(255, 224, 102, 0.2); }
            .nav-link.active { color: #e5c158; background: #262111; border-color: #e5c158; font-weight: bold; }
        `;
        document.head.appendChild(style);
    }
    updateGlobalNavbar();
});

// 🟢 【核心優化點】：監聽跨頁面/行內的多語言點擊事件，收到信號瞬間同步變字
window.addEventListener('poe_lang_changed', updateGlobalNavbar);