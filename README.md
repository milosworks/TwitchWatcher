# TwitchWatcher

This app is in beta, create a .env file and put your account **auth-token** cookie
separated by **,** and put the channels that u want to see separated by **,** too.

See **[.env.example](./.env.example)** to see more.

# WARNING

High RAM usage when watching so many channels and many accounts.

You need to put the path of your chrome **(NOT CHROMIUM)**, normally is "C:\Program Files\Google\Chrome\Application\chrome.exe".

If your wifi is slow i reccommend to increase the timeout in your **.env** file, "TIMEOUT=miliseconds" (Default is 60000, 1 sec is 1000 ms)

See **[.env.example](./.env.example)** to see more.

### Development

Put HEADLESS in true to see the browser.
