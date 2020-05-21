import { registerApplication, start } from "single-spa";

System.import('single-spa').then(function (singleSpa) {
  singleSpa.registerApplication(
    'contact',
    () => System.import('contact'),
        location => location.pathname.startsWith('/contact')
    );
    singleSpa.start();
});