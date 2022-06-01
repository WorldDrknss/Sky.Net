<div id="top"></div>

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/github_username/repo_name">
    <img src="logo.png" alt="Logo" height="100">
  </a>

<h3 align="center">Skynet</h3>

  <p align="center">
    Proof of concept e-commerce store using Angular, .Net Core and Stripe for payment processing
    <br />
    <br />
    <a href="https://labs.xtechnology.org/cshowalter/SkyNet/issues">Report Bug</a>
    ·
    <a href="https://labs.xtechnology.org/cshowalter/SkyNet/issues">Request Feature</a>
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

[![Product Name Screen Shot][product-screenshot]](https://example.com)

Build a proof of concept e-commerce store using Angular, .Net Core and Stripe for payment processing

<p align="right">(<a href="#top">back to top</a>)</p>



### Built With

* [.NET](https://dotnet.microsoft.com/en-us/)
* [NodeJS](https://nodejs.org/)
* [Angular](https://angular.io/)
* [Stripe](https://stripe.com)

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

To get a local copy up and running follow these simple example steps.

### Prerequisites

This is an example of how to list things you need to use the software and how to install them.

* npm
  ```sh
  npm install npm@latest -g
  ```
* Angular
  ```sh
  npm install -g @angular/cli
  ```

### Installation

1. Clone the repo
   ```sh
   git clone https://labs.xtechnology.org/cshowalter/SkyNet.git
   ```
2. Install NPM packages
   ```sh
   cd client
   npm install
   ng serve
   ```
3. Restore .NET
   ```sh
   cd API
   dotnet restore -f
   dotnet run
   ```
4. Add the following in API / `appsettings.development.json`
   ```js
   "Token": {
       "Key": "",
       "Issuer": ""
   },
   "ApiUrl": ""
   ```
5. Add Stripe Information to API / `appsettings.json`
   ```js
   "StripeSettings": {
       "PublishableKey": "",
       "SecretKey": ""
    },
   ```
6. Update API / Controllers / `PaymentsController.cs` with your Strip Webhook Secret
    ```js
    private const string WhSecret = ""
    ```

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE` for more information.

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- CONTACT -->
## Contact

Twitter - [@x7echnology](https://twitter.com/x7echnology)

Linkedin - [Charles Showalter](https://linkedin.com/in/charles-showalter)

Instagram - [@x7echnology](https://twitter.com/x7echnology)

Facebook - [@x7echnology](https://facebook.com/x7echnology)

Project Link: [https://labs.xtechnology.org/cshowalter/SkyNet/](https://labs.xtechnology.org/cshowalter/SkyNet/)

<p align="right">(<a href="#top">back to top</a>)</p>


<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[twitter-shield]: https://img.shields.io/twitter/follow/x7echnology?style=for-the-badge
[twitter-url]: https://twitter.com/x7echnology
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/linkedin_username
[product-screenshot]: Screenshot.png