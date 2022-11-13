# Native-Player - [Demo](https://nimaprmdi.github.io/native-player/)

Native-Player is a simple spotify web player using spotufy API.

## Features

- Sass for stylesheets
- Connected to the spotify Web API
- Responsive design
- Cross-browser compatibility
- Developer friendly extendable code
- SEO optimized
- GNU GPL version 3.0 licensed
- …and much more

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
│   ├── assets/                 # → Theme Assets files
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

- Run `npm install` from the theme directory to install dependencies
- Change local variables in the `/src/services/SpotifyServices.tsx` using the provided values from the spotify dashboard [https://developer.spotify.com/dashboard/](https://developer.spotify.com/dashboard/)
- Run `npm start` and have fun

## License

Native-Player is licensed under [GNU GPL Version 3](https://www.gnu.org/licenses/gpl-3.0.en.html).

## Assets & Licensing

Icons by Iconify (React)
License: MIT, https://raw.githubusercontent.com/phosphor-icons/phosphor-home/master/LICENSE
Source: https://iconify.design/

classes and components by tailwindcss
License: MIT, https://raw.githubusercontent.com/phosphor-icons/phosphor-home/master/LICENSE
Source: https://github.com/tailwindlabs/tailwindcss

TypeScript by Microsoft
License: GNU GPLv2, https://opensource.org/licenses/GPL-2.0
Source: https://www.typescriptlang.org/

Toast Notification by react-toastify
License: MIT, https://raw.githubusercontent.com/phosphor-icons/phosphor-home/master/LICENSE
Source: https://fkhadra.github.io/react-toastify/introduction/

Swiper.js React by nolimits4web
License: GNU GPLv3, https://github.com/nolimits4web/swiper/blob/master/LICENSE
Source: https://github.com/nolimits4web/swiper

## Developer Notes

- I would like to thank everybody in the open-source community
- If There was any issues Please submit pull requests
