# Quiz Application

A clean and intuitive quiz application built with vanilla JavaScript, HTML, and CSS. Test your knowledge with multiple-choice questions and track your progress in real-time.

## Features

- 🎯 Welcome screen with start button
- 📊 Progress tracking during quiz
- ✅ Immediate answer feedback (correct/incorrect highlighting)
- 📈 Final score summary
- 🔄 Restart functionality
- 📱 Responsive design for all screen sizes
- 🎨 Minimalist user interface
- ⚡ Smooth transitions and animations

## Prerequisites

- [Visual Studio Code](https://code.visualstudio.com/)
- [Live Server extension](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) for VS Code
- Modern web browser (Chrome, Firefox, Edge, or Safari)

## Getting Started

### Installation

1. Clone the repository:

```bash
git clone https://github.com/DanielNwolu/QuizApp.git
```

2. Navigate to project directory:

```bash
cd quizApp
```

### Running the Application

1. Open the project in Visual Studio Code

2. Install the Live Server extension if not already installed:

   - Open VS Code Extensions (Ctrl+Shift+X)
   - Search for "Live Server"
   - Click Install

3. Start the application:

   - Open `index.html` in VS Code
   - Click the "Go Live" button in the status bar (bottom-right corner)

   ```plaintext
   Alternate method: Right-click index.html → Open with Live Server
   ```

4. The application will automatically open in your default browser at:
   ```http
   http://localhost:5500
   ```

## Usage

1. **Starting the Quiz**:
   - Click "Start Quiz" on the welcome screen
2. **Answering Questions**:

   - Select an option by clicking any answer button
   - Correct answers turn green, incorrect answers turn red
   - Click "Next Question" to continue

3. **Viewing Results**:

   - Final score displayed after last question
   - Click "Restart Quiz" to return to welcome screen

4. **Restarting**:
   - Use the restart button on results screen
   - Refresh the page (F5) at any time to start over

## Customization

To modify quiz questions or appearance:

1. Edit quiz questions in `db.js`:

```javascript
export const db = [
  {
    question: "Your question here",
    options: ["Option 1", "Option 2", "Correct Answer", "Option 4"],
    correctAnswer: "Correct Answer",
  },
  // Add more questions...
];
```

2. Modify styles in `styles.css`:

```css
:root {
  --primary-color: #2563eb; /* Change main theme color */
  --correct-color: #16a34a; /* Change correct answer color */
  --incorrect-color: #dc2626; /* Change incorrect answer color */
}
```

## Configuration Options

- Adjust maximum width in `.quiz-container` (styles.css)
- Modify animation durations in CSS transitions
- Change font sizes in the `:root` CSS variables
- Update question count in `db.js` array

## Troubleshooting

**Common Issues**:

1. **Questions not loading**:

   - Ensure `db.js` is in the same directory
   - Verify question format matches the example structure

2. **Styles not applying**:

   - Check CSS file paths in HTML head
   - Clear browser cache (Ctrl+F5)

3. **Live Server issues**:
   - Ensure no other servers are running on port 5500
   - Restart VS Code if extension doesn't activate

**CORS Errors**:

- Always run through Live Server (not file:// protocol)
- Configure local server if using different development setup

## License

This project is licensed under the ISC License - free to use and modify for personal and commercial purposes.

---

**Happy Quizzing!** 🚀
