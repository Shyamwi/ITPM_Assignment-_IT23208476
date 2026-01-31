# Swift Translator Test Suite

This project contains automated test cases for the **Swift Translator** application, built using Playwright, a modern end-to-end testing framework for web applications.

## Project Overview

Swift Translator is an application that translates Singlish (phonetic English representation of Sinhala) text into Sinhala script. This test suite validates the translation functionality through comprehensive positive and negative test cases.

**Project ID:** IT23208476  
**Test Framework:** Playwright  
**Language:** JavaScript (Node.js)

---

## Features

- **Automated UI Testing**: End-to-end tests for the Swift Translator web application
- **Comprehensive Test Coverage**: 
  - Positive test cases (valid translations)
  - Negative test cases (edge cases and invalid inputs)
  - UI validation tests
- **HTML and JSON Reports**: Automated test result reporting
- **Single Worker Execution**: Sequential test execution for reliability
- **Error Context Tracking**: Detailed error logs and screenshots for failed tests

---

## Project Structure

```
.
├── package.json                    # Project dependencies and metadata
├── playwright.config.js            # Playwright configuration
├── swift-translator-test.spec.js   # Main test suite
├── tests/
│   ├── example.spec.js            # Example test file
│   └── pos.test.js                # Additional positive tests
├── playwright-report/             # Generated HTML test reports
├── test-results/                  # Test results and artifacts
│   ├── test-results.json          # JSON test report
│   ├── html-report/               # HTML test report
│   └── artifacts/                 # Screenshots and error context
└── README.md                      # This file
```

---

## Installation

### Prerequisites

- **Node.js**: v14 or higher
- **npm**: v6 or higher

### Setup

1. Clone or download the project
2. Navigate to the project directory:
   ```bash
   cd IT23208476
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

---

## Configuration

The main test configuration is defined in `playwright.config.js`:

- **Test URL**: https://www.swifttranslator.com/
- **Timeout**: 60 seconds per test
- **Expect Timeout**: 10 seconds
- **Workers**: 1 (sequential execution)
- **Retries**: 0
- **Reporters**: HTML and JSON

---

## Running Tests

### Run All Tests
```bash
npx playwright test
```

### Run Specific Test File
```bash
npx playwright test swift-translator-test.spec.js
```

### Run Tests in Debug Mode
```bash
npx playwright test --debug
```

### Run with UI Mode
```bash
npx playwright test --ui
```

### Run in Headed Mode (Show Browser)
```bash
npx playwright test --headed
```

---

## Test Cases

### Positive Test Cases (Translations)
The suite includes 24+ positive test cases covering:
- Simple sentences
- Complex sentences with punctuation
- Questions and requests
- Different Sinhala linguistic patterns

**Example:**
- Input: `mama gedhara yanavaa.`
- Expected Output: `මම ගෙදර යනවා.` (I go home.)

### Negative Test Cases
Includes edge cases and error handling scenarios to ensure robust application behavior.

### UI Tests
Validates the user interface elements and interactions.

---

## Test Results

After running tests, results are available in multiple formats:

### HTML Report
```bash
npx playwright show-report
```
This opens an interactive HTML report at `test-results/html-report/index.html`

### JSON Report
Test results in JSON format are saved to `test-results/test-results.json`

### Error Context
For failed tests, detailed error information and screenshots are stored in:
```
test-results/artifacts/
```

---

## Dependencies

```json
{
  "@playwright/test": "^1.58.1",
  "@types/node": "^25.1.0"
}
```

---

## Test Configuration Details

### Timeouts
- **Page Load**: 2 seconds
- **After Clear**: 1 second
- **Translation**: 3 seconds
- **Between Tests**: 2 seconds

### Selectors
- **Input Field**: `Input Your Singlish Text Here.`
- **Output Container**: `div.w-full.h-80.p-3.rounded-lg.ring-1.ring-slate-300.whitespace-pre-wrap`

---

## Development

### Adding New Tests

1. Open or create a `.spec.js` file
2. Add test cases using Playwright's `test()` function:
   ```javascript
   const { test, expect } = require('@playwright/test');

   test('my test case', async ({ page }) => {
     await page.goto('https://www.swifttranslator.com/');
     // Your test code here
   });
   ```

3. Run tests to verify

### Best Practices

- Use consistent naming conventions for test IDs
- Add meaningful test descriptions
- Include both positive and negative cases
- Keep test data organized and documented
- Use appropriate timeouts for different operations

---

## Troubleshooting

### Tests Failing
1. Check internet connection to reach https://www.swifttranslator.com/
2. Verify element selectors are correct
3. Increase timeouts if the application is slow
4. Check test results and error context in `test-results/artifacts/`

### Browser Issues
1. Ensure Playwright browsers are installed: `npx playwright install`
2. Check system requirements for the OS

### Port or Lock Issues
- Ensure no other instances of the test suite are running
- Check that the application URL is accessible

---

## License

ISC

---

## Notes

- Tests run sequentially (1 worker) for consistent, reliable results
- The test suite is designed for the Swift Translator web application only
- For CI/CD integration, ensure the test environment has internet access to reach the application URL

---

## Support

For issues or questions:
1. Review the test results and error logs in `test-results/artifacts/`
2. Check the HTML report for detailed failure information
3. Verify all prerequisites are installed correctly
4. Ensure the target application is accessible

---

**Last Updated**: January 31, 2026
