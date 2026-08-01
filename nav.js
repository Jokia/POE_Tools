// 統一管理導航條的 HTML 資料與樣式
document.addEventListener("DOMContentLoaded", function() {
    // 1. 動態注入 PoE 暗黑風格的導航欄樣式
    const style = document.createElement('style');
    style.innerHTML = `
        .nav-bar { display: flex; gap: 10px; margin-bottom: 20px; border-bottom: 1px solid #333; padding-bottom: 12px; }
        .nav-link { 
            color: #aaa; 
            text-decoration: none; 
            padding: 6px 12px; 
            background: #1a1a1a; 
            border: 1px solid #2a2a2a; 
            border-radius: 3px; 
            transition: all 0.2s ease; 
        }
        .nav-link:hover { color: #ffe066; background: #222; border-color: #ffe066; box-shadow: 0 0 5px rgba(255, 224, 102, 0.2); }
        .nav-link.active { color: #e5c158; background: #262111; border-color: #e5c158; font-weight: bold; }
    `;
    document.head.appendChild(style);

    // 2. 定義統一的導航欄 HTML 結構
    const navContainer = document.getElementById('global-nav');
    if (navContainer) {
        navContainer.innerHTML = `
            <div class="nav-bar">
                <a href="index.html" class="nav-link" id="nav-index">💰 通貨速查</a>
                <a href="regex.html" class="nav-link" id="nav-regex">🔍 正規表示式</a>
                <a href="calculator.html" class="nav-link" id="nav-calculator">🧮 收益計算器</a>
				<a href="tools.html" class="nav-link" id="nav-tools">🛠️ 工具清單</a>
            </div>
        `;

        // 3. 自動高亮演算法：識別當前檔名併為對應按鈕加上 active 類
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
});
