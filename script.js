function startVisualization() {
    const str1 = document.getElementById("string1").value;
    const str2 = document.getElementById("string2").value;
    if (!str1 || !str2) {
      alert("Please enter both strings!");
      return;
    }
  
    visualizeLCS(str1, str2);
  }
  
  async function visualizeLCS(X, Y) {
    const m = X.length;
    const n = Y.length;
    const dp = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));
    const container = document.getElementById("table-container");
    container.innerHTML = "";
    const table = document.createElement("table");
  
    // Create table
    for (let i = 0; i <= m; i++) {
      const row = document.createElement("tr");
      for (let j = 0; j <= n; j++) {
        const cell = document.createElement("td");
        cell.id = `cell-${i}-${j}`;
        cell.textContent = dp[i][j];
        row.appendChild(cell);
      }
      table.appendChild(row);
    }
  
    container.appendChild(table);
  
    // Fill the table with animation
    for (let i = 1; i <= m; i++) {
      for (let j = 1; j <= n; j++) {
        await new Promise(resolve => setTimeout(resolve, 60)); // animation delay
        if (X[i - 1] === Y[j - 1]) {
          dp[i][j] = dp[i - 1][j - 1] + 1;
        } else {
          dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
        }
  
        const cell = document.getElementById(`cell-${i}-${j}`);
        cell.textContent = dp[i][j];
        cell.classList.add("filled");
      }
    }
  
    // Highlight the LCS
    let i = m, j = n;
    let lcs = "";
    while (i > 0 && j > 0) {
      if (X[i - 1] === Y[j - 1]) {
        const cell = document.getElementById(`cell-${i}-${j}`);
        cell.classList.add("highlight");
        lcs = X[i - 1] + lcs;
        i--; j--;
      } else if (dp[i - 1][j] > dp[i][j - 1]) {
        i--;
      } else {
        j--;
      }
      await new Promise(resolve => setTimeout(resolve, 80)); // delay while tracing
    }
  
    document.getElementById("lcs-result").textContent = `LCS: ${lcs}`;
  }
  