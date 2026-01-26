# AI Automation for Mobile

A comprehensive mobile test automation framework that combines React UI components with Java Appium-based test automation, designed to generate intelligent test cases using AI.

## Overview

This project bridges UI design (React/TypeScript) with automated testing (Java/Appium/Cucumber), creating an intelligent test automation pipeline that can parse Figma designs and generate BDD test scenarios using Claude AI.

## Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                    Figma Design Files                        │
└──────────────────────┬──────────────────────────────────────┘
                       │
                       ▼
┌─────────────────────────────────────────────────────────────┐
│              Figma Parser (Node.js)                          │
│         Extract UI elements & interactions                  │
└──────────────────────┬──────────────────────────────────────┘
                       │
                       ▼
┌─────────────────────────────────────────────────────────────┐
│            Claude AI API Integration                         │
│    Generate BDD test cases & assertions                     │
└──────────────────────┬──────────────────────────────────────┘
                       │
                       ▼
┌─────────────────────────────────────────────────────────────┐
│         Test Selection & Code Generation                     │
│    Generate Cucumber feature files & step definitions       │
└──────────────────────┬──────────────────────────────────────┘
                       │
                       ▼
┌─────────────────────────────────────────────────────────────┐
│      Java Appium Test Execution                              │
│   Run tests against Android/iOS apps                         │
└─────────────────────────────────────────────────────────────┘
```

## Tech Stack

### Frontend
- **React** 18.2.0 - UI library
- **TypeScript** 5.3.3 - Type safety
- **lucide-react** - Icon library
- **CSS** - Styling

### Backend/Test Automation
- **Java** 11+ (JDK-21 supported)
- **Appium Java Client** 8.6.0 - Mobile automation
- **Selenium WebDriver** 4.15.0 - Web browser automation
- **Cucumber** 7.14.0 - BDD framework
- **JUnit** 4.13.2 - Testing framework
- **Maven** 3.9.9 - Build tool

### Optional (Coming Soon)
- **Claude API** - AI test generation
- **Node.js** - Figma parser

## Project Structure

```
ai-automation/
├── components/
│   └── LoginScreen.tsx          # React login form component
├── automation/
│   ├── src/
│   │   ├── test/
│   │   │   ├── java/
│   │   │   │   ├── base/
│   │   │   │   │   └── DriverFactory.java      # Appium driver setup
│   │   │   │   ├── pages/
│   │   │   │   │   └── LoginPage.java          # Page Object Model
│   │   │   │   ├── steps/
│   │   │   │   │   └── LoginSteps.java         # Cucumber step definitions
│   │   │   │   └── runners/
│   │   │   │       └── TestRunner.java         # Test execution runner
│   │   │   └── resources/
│   │   │       ├── features/
│   │   │       │   └── login.feature           # Gherkin test scenarios
│   │   │       └── config.properties           # Appium configuration
│   │   └── utils/
│   │       └── ConfigReader.java               # Configuration loader
│   └── pom.xml                  # Maven build configuration
├── contracts/
│   └── login.ui.json            # UI contract/schema
├── features/                    # Feature implementations
├── testcases/
│   └── login.testcases.md       # Test case documentation
├── package.json                 # Node.js dependencies (React)
├── tsconfig.json                # TypeScript configuration
└── README.md                    # This file
```

## Setup Instructions

### Prerequisites
- **Java JDK 11+** (tested with JDK-21)
- **Maven 3.9.9+**
- **Node.js 16+** (for React components)
- **Android SDK** (for mobile testing)
- **Appium Server** running on `localhost:4723`

### Environment Variables

Set the following environment variables:

```powershell
# Windows PowerShell
$env:ANDROID_HOME = "C:\Android\sdk"
$env:ANDROID_SDK_ROOT = "C:\Android\sdk"
```

Or permanently (Windows):
```powershell
[Environment]::SetEnvironmentVariable("ANDROID_HOME", "C:\Android\sdk", "User")
[Environment]::SetEnvironmentVariable("ANDROID_SDK_ROOT", "C:\Android\sdk", "User")
```

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/iamniket/AIAutomationforMobile.git
   cd ai-automation
   ```

2. **Install React/TypeScript dependencies**
   ```bash
   npm install
   ```

3. **Download Maven dependencies**
   ```bash
   cd automation
   mvn dependency:resolve
   ```

4. **Verify Java compilation**
   ```bash
   mvn test-compile
   ```

## Running Tests

### Start Appium Server

```bash
appium --port 4723
```

### Run All Tests

```bash
cd automation
mvn test
```

### Run Specific Test Scenario

```bash
cd automation
mvn test -Dtest=LoginSteps
```

### Run with Cucumber Plugin

```bash
cd automation
mvn test -Dcucumber.options="src/test/resources/features/login.feature"
```

## Component Details

### React LoginScreen Component

Located in [components/LoginScreen.tsx](components/LoginScreen.tsx)

Features:
- Email and password input fields
- Password visibility toggle
- Remember me checkbox
- Form validation
- TypeScript type safety

Usage:
```typescript
import LoginScreen from './components/LoginScreen';

export default function App() {
  return <LoginScreen />;
}
```

### Java Test Automation

#### DriverFactory
Initializes and manages Appium AndroidDriver for mobile automation.

#### LoginPage (Page Object Model)
Encapsulates login page UI elements and user interactions:
- `enterEmail(email: String)`
- `enterPassword(password: String)`
- `togglePasswordVisibility()`
- `tapLogin()`
- `isLoginButtonDisplayed(): Boolean`

#### LoginSteps (Cucumber Steps)
BDD step definitions for login workflows:
- `User enters email address`
- `User enters password`
- `User taps login button`
- `Login should be successful`

#### Test Scenarios

5 test cases are defined in [automation/src/test/resources/features/login.feature](automation/src/test/resources/features/login.feature):

1. **Valid Login** - Successful login with valid credentials
2. **Invalid Email** - Error handling for invalid email format
3. **Empty Email** - Validation for empty email field
4. **Short Password** - Validation for password length
5. **Empty Password** - Validation for empty password field

## Configuration

### Appium Configuration

Edit [automation/src/test/resources/config.properties](automation/src/test/resources/config.properties):

```properties
platformName=Android
automationName=UiAutomator2
deviceName=Android Emulator
platformVersion=14
appPath=/path/to/app.apk
appiumServer=http://localhost:4723
implicitWait=10
```

## Building

### Compile Java Code
```bash
cd automation
mvn clean compile
```

### Package for Distribution
```bash
cd automation
mvn clean package
```

### Generate Test Reports
```bash
cd automation
mvn clean test
# Reports available in: target/surefire-reports/
```

## Dependency Versions

- **Appium Java Client**: 8.6.0 ✓ (compatible with Selenium 4.15.0)
- **Selenium WebDriver**: 4.15.0 ✓ (compatible with Appium 8.6.0)
- **Cucumber**: 7.14.0
- **JUnit**: 4.13.2
- **React**: 18.2.0
- **TypeScript**: 5.3.3

⚠️ **Version Compatibility Note**: Do not upgrade Appium to 9.0.0 or Selenium to 4.16.1 as they have compatibility issues. Stick with 8.6.0 and 4.15.0.

## Troubleshooting

### Maven Compilation Errors

**Error**: `cannot access org.openqa.selenium.ContextAware`

**Solution**: Verify pom.xml has correct versions:
- Appium: 8.6.0 (not 9.0.0)
- Selenium: 4.15.0 (not 4.16.1)

Run: `mvn dependency:tree` to check dependency tree.

### ANDROID_HOME Not Set

**Error**: `Neither ANDROID_HOME nor ANDROID_SDK_ROOT environment variable was exported`

**Solution**: 
```powershell
$env:ANDROID_HOME = "C:\Android\sdk"
[Environment]::SetEnvironmentVariable("ANDROID_HOME", "C:\Android\sdk", "User")
```

### Appium Connection Failed

**Error**: `Connection refused at localhost:4723`

**Solution**: Start Appium server:
```bash
appium --port 4723
```

### Empty ConfigReader or config.properties Files

**Error**: Tests fail with empty configuration

**Solution**: Files should be automatically populated. If not:
1. Delete [automation/src/test/java/utils/ConfigReader.java](automation/src/test/java/utils/ConfigReader.java)
2. Delete [automation/src/test/resources/config.properties](automation/src/test/resources/config.properties)
3. Recreate with proper content (see project repository)

## Future Enhancements

### Phase 1: Figma Integration
- [ ] Parse Figma design files
- [ ] Extract UI elements and interactions
- [ ] Generate UI contracts

### Phase 2: AI Test Generation
- [ ] Integrate Claude API
- [ ] Generate BDD test cases from designs
- [ ] Smart assertion generation

### Phase 3: Test Management UI
- [ ] Web UI for test selection
- [ ] Test case editor
- [ ] Execution dashboard

### Phase 4: Advanced Features
- [ ] Multi-device testing
- [ ] Visual regression testing
- [ ] CI/CD pipeline integration (GitHub Actions/Azure DevOps)

## Contributing

1. Fork the repository
2. Create feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open Pull Request

## Code Quality

### Java Code Style
- Follow Google Java Style Guide
- Use meaningful variable names
- Add JavaDoc comments for public methods

### TypeScript Code Style
- Use strict type checking
- Avoid `any` type
- Use functional components with hooks

## Performance Considerations

- **Appium Wait Time**: Set implicitWait to 10 seconds in config.properties
- **Test Parallelization**: Can be configured in TestRunner.java
- **Dependency Cache**: Maven caches dependencies in `~/.m2/repository`

## Security

- **Never commit** credentials or API keys
- Use environment variables for sensitive data
- Appium server should run on localhost only in development

## License

[Add your license here]

## Contact

**Author**: Niket Patil  
**Email**: niketpatil20@example.com  
**GitHub**: [@iamniket](https://github.com/iamniket)

## Repository

GitHub: [AIAutomationforMobile](https://github.com/iamniket/AIAutomationforMobile)

---

**Last Updated**: January 26, 2026  
**Status**: Active Development ✨
