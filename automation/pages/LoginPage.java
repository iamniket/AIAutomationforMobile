package pages;

import io.appium.java_client.AppiumBy;
import io.appium.java_client.android.AndroidDriver;
import org.openqa.selenium.By;

public class LoginPage {

    private final AndroidDriver driver;

    public LoginPage(AndroidDriver driver) {
        this.driver = driver;
    }

    // Locators (automationId = accessibilityId)
    private final By emailInput = AppiumBy.accessibilityId("input_email");
    private final By passwordInput = AppiumBy.accessibilityId("input_password");
    private final By loginButton = AppiumBy.accessibilityId("btn_login");
    private final By errorMessage = AppiumBy.accessibilityId("txt_login_error");

    // Actions
    public void enterEmail(String email) {
        driver.findElement(emailInput).clear();
        driver.findElement(emailInput).sendKeys(email);
    }

    public void enterPassword(String password) {
        driver.findElement(passwordInput).clear();
        driver.findElement(passwordInput).sendKeys(password);
    }

    public void tapLogin() {
        driver.findElement(loginButton).click();
    }

    // Assertions / State checks
    public boolean isErrorVisible() {
        return !driver.findElements(errorMessage).isEmpty();
    }

    public boolean isErrorNotVisible() {
        return driver.findElements(errorMessage).isEmpty();
    }
}
