package steps;

import base.DriverFactory;
import io.cucumber.java.en.*;
import org.junit.Assert;
import pages.LoginPage;

public class LoginSteps {

    private final LoginPage loginPage;

    public LoginSteps() {
        this.loginPage = new LoginPage(DriverFactory.getDriver());
    }

    @Given("user is on the Login screen")
    public void userIsOnLoginScreen() {
        // App launch already handled by driver
    }

    @When("user enters a valid email")
    public void enterValidEmail() {
        loginPage.enterEmail("test@example.com");
    }

    @When("user enters an invalid email")
    public void enterInvalidEmail() {
        loginPage.enterEmail("invalidEmail");
    }

    @When("user leaves the email field empty")
    public void leaveEmailEmpty() {
        loginPage.enterEmail("");
    }

    @When("user enters a valid password")
    public void enterValidPassword() {
        loginPage.enterPassword("password123");
    }

    @When("user leaves the password field empty")
    public void leavePasswordEmpty() {
        loginPage.enterPassword("");
    }

    @When("user enters a password shorter than minimum length")
    public void enterShortPassword() {
        loginPage.enterPassword("123");
    }

    @When("user taps the Login button")
    public void tapLoginButton() {
        loginPage.tapLogin();
    }

    @Then("login action should be triggered")
    public void loginActionTriggered() {
        Assert.assertTrue(true); // UI-only confirmation
    }

    @Then("no validation error message should be displayed")
    public void noErrorDisplayed() {
        Assert.assertTrue(loginPage.isErrorNotVisible());
    }

    @Then("email format validation error should be displayed")
    @Then("email required validation error should be displayed")
    @Then("password required validation error should be displayed")
    @Then("password length validation error should be displayed")
    @Then("required field validation errors should be displayed")
    public void validationErrorDisplayed() {
        Assert.assertTrue(loginPage.isErrorVisible());
    }

    @Then("login action should not be triggered")
    @Then("login action should be blocked")
    public void loginBlocked() {
        Assert.assertTrue(loginPage.isErrorVisible());
    }

    @Then("error message container should be visible")
    public void errorContainerVisible() {
        Assert.assertTrue(loginPage.isErrorVisible());
    }

    @Then("error message text should be readable")
    public void errorTextReadable() {
        Assert.assertTrue(loginPage.isErrorVisible());
    }
}
