package base;

import io.appium.java_client.android.AndroidDriver;
import org.openqa.selenium.remote.DesiredCapabilities;
import utils.ConfigReader;

import java.net.URI;
import java.time.Duration;

public class DriverFactory {

    private static AndroidDriver driver;

    public static AndroidDriver getDriver() {
        if (driver == null) {
            try {
                DesiredCapabilities caps = new DesiredCapabilities();

                caps.setCapability("platformName", ConfigReader.get("platformName"));
                caps.setCapability("automationName", ConfigReader.get("automationName"));
                caps.setCapability("deviceName", ConfigReader.get("deviceName"));
                caps.setCapability("platformVersion", ConfigReader.get("platformVersion"));
                caps.setCapability("app", ConfigReader.get("appPath"));

                driver = new AndroidDriver(
                        URI.create(ConfigReader.get("appiumServer")).toURL(),
                        caps);

                driver.manage().timeouts().implicitlyWait(
                        Duration.ofSeconds(
                                Integer.parseInt(ConfigReader.get("implicitWait"))));

            } catch (Exception e) {
                throw new RuntimeException("Failed to start Appium driver", e);
            }
        }
        return driver;
    }
}
