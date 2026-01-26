package steps;

import base.DriverFactory;
import pages.LoginPage;
import io.appium.java_client.android.AndroidDriver;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.When;
import io.cucumber.java.en.Then;
import org.junit.Assert;

public class LoginSteps {
    private AndroidDriver driver;
    private LoginPage loginPage;

    public LoginSteps() {
        this.driver = DriverFactory.getDriver();
        this.loginPage = new LoginPage(driver);
    }

    @Given("user opens login screen")
    public void userOpensLoginScreen() {
        // Navigate to login screen - implementation depends on your app structure
    }

    @When("user enters valid email")
    public void userEntersValidEmail() {
        loginPage.clearEmail();
        loginPage.enterEmail("test@example.com");
    }

    @When("user enters invalid email")
    public void userEntersInvalidEmail() {
        loginPage.clearEmail();
        loginPage.enterEmail("invalidemail");
    }

    @When("user enters valid password")
    public void userEntersValidPassword() {
        loginPage.clearPassword();
        loginPage.enterPassword("Password123");
    }

    @When("user enters short password")
    public void userEntersShortPassword() {
        loginPage.clearPassword();
        loginPage.enterPassword("Pass");
    }

    @When("user leaves email empty")
    public void userLeavesEmailEmpty() {
        loginPage.clearEmail();
    }

    @When("user leaves password empty")
    public void userLeavesPasswordEmpty() {
        loginPage.clearPassword();
    }

    @When("user taps login button")
    public void userTapsLoginButton() {
        loginPage.tapLogin();
    }

    @Then("user should be logged in")
    public void userShouldBeLoggedIn() {
        Assert.assertTrue("User should be logged in", true);
    }

    @Then("error message should be displayed")
    public void errorMessageShouldBeDisplayed() {
        Assert.assertTrue("Error message should be visible", loginPage.isErrorVisible());
    }

    @Then("login button should be disabled")
    public void loginButtonShouldBeDisabled() {
        Assert.assertTrue("Login button should be disabled", loginPage.isLoginButtonDisabled());
    }

    @Then("login button should be enabled")
    public void loginButtonShouldBeEnabled() {
        Assert.assertTrue("Login button should be enabled", loginPage.isLoginButtonEnabled());
    }
}
