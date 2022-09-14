# Native-Player - [Demo](https://nimaprmdi.github.io/native-player/)

Native-Player is a a minimal & mobile-first theme. The best choice for people who want to publish their projects.

## Features

-   Sass for stylesheets
-   Connected to the spotify Web API
-   Responsive design
-   Cross-browser compatibility
-   Developer friendly extendable code
-   SEO optimized
-   GNU GPL version 3.0 licensed
-   …and much more

See a working example at [nimaprmdi.github.io/native-player/](https://nimaprmdi.github.io/native-player/).

## installation

1.  Clone the project into wanted destination location using `git clone https://github.com/nimaprmdi/native-player.git`
2.  Change the API variables in the `/src/services/SpotifyServices.tsx` using spotify development dashboard. [Spotify-For-Developers](https://developer.spotify.com/dashboard/)
3.  Also you can chanage the Homepage value from the `package.json` in the first line `homepage:` section
4.  Run command `npm run build`
5.  Tada you have the project working with the Spotify API

## Theme structure

```shell
/native-player/                  # → Root of your theme
│── .vscode/                     # → VSCode settings.json file
│── public/                      # → Theme public folder including structure files
│── src/                         # → Theme internal source files
│   ├── assets3/                 # → Theme Assets files
│   ├── components/              # → The constructed TSX components required for the interface
│   ├── models/                  # → The interfaces of the models and global laws
│   ├── navigation/              # → The navigation object which construct menu
│   ├── services/                # → API handling services
│   ├── utils/                   # → Helpers functions
│   └── views/                   # → The primary interface coponents
├── .gitignore/                  # → Ignoring unwanted files
├── tailwind.config.js/          # → Tailwindcss config file
├── tsconfig.json/               # → Configuration for the TypeScript
├── package.json                 # → Node.js dependencies and scripts
├── node_modules/                # → Node.js packages
```

## Theme development

-   Run `npm install` from the theme directory to install dependencies
-   Change local variables in the `/src/services/SpotifyServices.tsx` using the provided values from the spotify dashboard [https://developer.spotify.com/dashboard/](https://developer.spotify.com/dashboard/)
-   Run `npm start` and have fun

## License

Native-Player is licensed under [GNU GPL Version 3](https://www.gnu.org/licenses/gpl-3.0.en.html).

## Assets & Licensing

Icons by Iconify (React)
License: MIT, https://raw.githubusercontent.com/phosphor-icons/phosphor-home/master/LICENSE
Source: https://iconify.design/

Map Provided in contact Page by mapbox-gl & DefinitelyTyped
License: MIT, https://raw.githubusercontent.com/phosphor-icons/phosphor-home/master/LICENSE
Source: https://github.com/DefinitelyTyped/DefinitelyTyped

classes and components by tailwindcss
License: MIT, https://raw.githubusercontent.com/phosphor-icons/phosphor-home/master/LICENSE
Source: https://github.com/tailwindlabs/tailwindcss

Audio & Video Players by Plyr React
License: MIT, https://raw.githubusercontent.com/phosphor-icons/phosphor-home/master/LICENSE
Source: https://github.com/chintan9/plyr-react

TypeScript by Microsoft
License: GNU GPLv2, https://opensource.org/licenses/GPL-2.0
Source: https://www.typescriptlang.org/

Toast Notification by react-toastify
License: MIT, https://raw.githubusercontent.com/phosphor-icons/phosphor-home/master/LICENSE
Source: https://fkhadra.github.io/react-toastify/introduction/

Flickity by desandro
License: GNU GPLv3, https://flickity.metafizzy.co/license.html
Source: https://flickity.metafizzy.co/

react-flickity-component by yaodingyd
License: GNU GPLv3, https://flickity.metafizzy.co/license.html
Source: https://github.com/yaodingyd/react-flickity-component

Axios (http Axios) by axios
License: MIT, https://raw.githubusercontent.com/phosphor-icons/phosphor-home/master/LICENSE
Source: https://axios-http.com/

## Developer Notes

-   I would like to thank everybody in the open-source community
-   If There was any issues Please submit pull requests
