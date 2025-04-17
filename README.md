
### File Descriptions

- **[index.html](index.html)**: Contains the structure of the web page, including input fields, buttons, and containers for the visualization.
- **[styles.css](styles.css)**: Defines the styling for the page, including animations for the table and LCS highlighting.
- **[script.js](script.js)**: Implements the LCS computation logic and handles the visualization.

## How to Use

1. Open `index.html` in a web browser.
2. Enter two strings in the input fields.
3. Click the "Visualize" button.
4. Watch the table being filled step-by-step and the LCS being highlighted.

## How It Works

1. **Input Strings**: The user provides two strings.
2. **Dynamic Programming Table**: A table is created to compute the LCS using the following recurrence:
   - If `X[i-1] === Y[j-1]`, then `dp[i][j] = dp[i-1][j-1] + 1`.
   - Otherwise, `dp[i][j] = max(dp[i-1][j], dp[i][j-1])`.
3. **Animation**: The table is filled cell by cell with a delay to visualize the process.
4. **LCS Highlighting**: The LCS is traced back and highlighted in the table.

## Technologies Used

- **HTML**: For structuring the web page.
- **CSS**: For styling and animations.
- **JavaScript**: For implementing the LCS algorithm and handling the visualization.

## Example

### Input
- String 1: `ABCBDAB`
- String 2: `BDCAB`

### Output
- LCS: `BCAB`

The table will be filled dynamically, and the LCS will be highlighted.
