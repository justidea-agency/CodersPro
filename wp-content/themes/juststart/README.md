# Jak beda jakies problemy z templatka, proszę to zgłosić na adres adrian.jedrczak@justidea.agency

# Justidea - wordpress template

Wordpress Development (Workflow and Automation)

💻 **DEV ENVIRONMENT**

> - _Live reload browser with BrowserSync_
> - _Hotloading styles with CSS Injection_

🎨 **STYLES**

> - _Sass to CSS conversion_
> - _Merging media queries_
> - _Error handling_
> - _Auto-prefixing_
> - _Minification_

🌋 **JavaScript**

> - _ES 6_
> - _Module bundler_

👀 **WATCHING**

> - _For changes in files to recompile_
> - _File types: `.css`, `.html`, `.php`, `.js`_

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

What things you need to install the software and how to install them [Node.js](https://nodejs.org/en/)

### Installing

A step by step series of examples that tell you how to get a development env running

1. Download and install Local 💎
   [Local](https://localwp.com/)

2. Create new project in Local ⏳
   [YouTube Instruction](https://www.youtube.com/watch?v=HLKEd7jCB-E)

3. Clone repo in wp-content (/app/public/wp-content/themes/) 🧬

```
git clone git@github.com:justidea-agency/wordpress-template.git justidea_theme
```

4. Install all packages in (/app/public/wp-content/themes/justidea_theme/dev/) 📡

```
npm i
```

6. Delete git repo and later create your own

```
rm -rf .git
```

1. Open file /dev/setting.js and change: ✔️

```
exports.urlToPreview = 'YOUR_DOMAIN.COM';
```

8. Change theme in AdminPanel ☣️

```
Appearance -> Themes -> JustIdea Agency -> Activate
```

9. Change data to connect with database(if you want remote database) in file wp-config.php 🔌

10. Scripts 💻

```
npm start // starting development project
npm run build // building a production project
```

11. JavaScript and Scss files modify in src folder 💡

```
/app/public/wp-content/themes/justidea_theme/dev/src/
```

10. Have Fun 🎉

## Authors

💜 Justidea 💜
