# WebEx Quick Settings Dashboard

WebEx dashboard built for updating meet settings quickly. 

Website features pin, auto lock, alternate host, call me number, and video address settings on an easy-to-use dashboard.

## Purpose

Dashboard will give users one place to update common WebEx settings vs navigating through several prompts via the web portal.

## Getting Started

1) Obtain your own Cisco WebEx API credentials.
* Visit https://developer.cisco.com/site/webex-developer/develop-test/try-webex-apis/ 
* Test your credentials by logging into the WebEx API demo site: https://apidemoeu.webex.com

2) Setup a test environment for the WebEx Dashboard.
* Configure a web server on your computer. Verify OpenSSL is enabled (Cisco requires all API calls to be made via SSL).
* Download the project files and copy to your localhost directory. Navigate to index.html.
* Replace your credentials you obtained in step 1 via the "username" and "password" variables in the header in all php files.
* To test, choose a setting on the dashboard to change. Go back to the apidemoeu site and refresh the page to see the setting updated.
* Note: CMR is disabled on the apidemoeu site (video system setting).
* Note: Type the email address on your profile to test the alternate host setting. 

## Limitations

* The dashboard uses an insecure method for storing credentials (username and password stored as plaintext in php variables).
* Special configuration required to implement user authentication such as SSO (see below for resources).
* Data input validation does not occur on the client side; only through WebEx. If a user makes an invalid input, the input is not replicated on the server.
* The Dashboard does not allow deletion of alternate host names nor adding more than 1 alternate host at a time.
* The Video System Address setting cannot be tested via the apidemoeu site.
* Each dashboard setting requires a separate ajax call increasing the amount of jQuery code.

## Additional Readings & Resources
* Demo API portal login: https://apidemoeu.webex.com
* XML API intro lab: https://learninglabs.cisco.com/lab/collab-webex/step/1
* XML API landing page: https://developer.cisco.com/site/webex-developer/develop-test/xml-api/overview/
* Reference guide: https://developer.cisco.com/docs/webex-xml-api-reference-guide/
* Release notes: https://developer.cisco.com/site/webex-developer/develop-test/xml-api/reference/
* Authentication (SSO): https://developer.cisco.com/docs/webex-xml-api-reference-guide/#!authenticateuser/authenticateuser
* Best practices: https://d1nmyq4gcgsfi5.cloudfront.net/fileMedia/4d40b3d5-1405-4e92-93ce-7af317c677f4/API%20Best%20Practices_v2.pdf
* Sample Code: https://developer.cisco.com/site/webex-developer/develop-test/xml-api/sample-code/

## Built With

* Bootstrap4
* PHP5
* jQuery / JavaScript
* AJAX
* WebEx XML API

## Contributing

When contributing to this repository, you may fork and submit a pull request. Add a description of what you are doing and I'll review it.

## Versioning

Version 1.0.0

## Authors

* **Matthew Waldron** - (http://waldronmatthew.com)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

## Acknowledgments

* Cisco php example code was used in the creation of this project: https://developer.cisco.com/site/webex-developer/develop-test/xml-api/sample-code/
* AJAX code used to prevent form submission page reload and inject the results in bootstrap: https://learn.getgrav.org/forms/forms/how-to-ajax-submission

