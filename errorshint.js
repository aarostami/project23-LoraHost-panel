/* Error:
  x Expression expected
    ,-[E:\React\project22-nextjs-theme3\app\Components\Header.tsx:9:1]
  9 |
 10 | export default function Header() {
 11 |
 12 |   return <>
    :          ^
 13 |           <Container>
 14 |                   <section>
 14 |                           <Image src={} />
    `----

errori ke rooye <Container> ya <Image src={} /> ya <MenuItem> ya har componenti masalan az materaial ui ya nextjs ya ... bood,
vali agar oon component bardasheshood kar kard, bekhatere ineke src khaliye ya baraye <MenuItem> property open nazashtim. berim rooye khode error ellat ro neshoon mide,
na dalile error ro tooye browser ya terminal begardim.
---------------------------------------------------------
./app/Components/MidCom/Services.tsx:8:0
Module not found: Can't resolve '../images/001-unlock.png'
   6 | import Typography from '@mui/material/Typography';
   7 | import Image from 'next/image';
>  8 | import unlock from '../images/001-unlock.png'
hammoon addressdehiye eshtebah ast.
----------------------------------------------------------
Type '{ title: string; bread: string; }' has no properties in common with type 'IntrinsicAttributes'.ts(2559)
in error vaghti dorost mishe ke be component referencei ke barmigarde ba props begire, chon 'props' naneveshe baraye in
error mide: compo(props) {}
-----------------------------------------------------------
error hot reloading or fast refresh for browser
in ba update kardane nodejs, npm, nextjs dorost mishe.
-----------------------------------------------------------
vaghti yek component tsx jadid misazim, agar console.log begirim chizi neshoon nemide, bayad yek bar npm ro stop va start konim
ta dorost beshe.
-----------------------------------------------------------
error dar github actions mide na local:
Failed to compile.

./app/page.tsx
Module not found: Can't resolve './components/Header'

https://nextjs.org/docs/messages/module-not-found

./app/page.tsx
Module not found: Can't resolve './components/Middle'

https://nextjs.org/docs/messages/module-not-found

./app/page.tsx
Module not found: Can't resolve './components/Footer'

https://nextjs.org/docs/messages/module-not-found

./app/pages/options/page.tsx
Module not found: Can't resolve '../../components/MidCom/Services.jsx'

https://nextjs.org/docs/messages/module-not-found

./app/pages/options/page.tsx
Module not found: Can't resolve '../../components/MidCom/CommentsSlider.jsx'

https://nextjs.org/docs/messages/module-not-found


Build failed because of webpack errors 
// deghat baraye halle in address ha hatman hatman bayad folderi ke dar local hast ba github check beshe,
masalan baad az baresi dar local folder 'components' bood ama dar github 'Components' bood(be har dalili), bayad ye bar dar local
name ro change konim va push konim va baad dobare be name ghabli 'components' bargardoonim va push konim.
-------------------------------------------
error:
file:///C:/Users/Alireza/Documents/MEGAsync/Projects/front-end/4-Nextjs/archive/New%20folder/next.config.js:1
import type { NextConfig } from "next";
            ^

SyntaxError: Unexpected token '{'

shayad bekhatere version nodejs va nextjs hast.

// ba taghire version next ya nodejs ok mishe.
------------------------------------------------
 the --inspect option was detected, the Next.js router server should be inspected at 9230.
 ⚠ Mismatching @next/swc version, detected: 14.2.6 while Next.js is on 15.0.1. Please ensure these match
// ba taghire version next ya nodejs ok mishe.
*/

/* Error: Get Pages site failed. Please verify that the repository has Pages enabled and configured to build using GitHub Actions, or consider exploring the enablement parameter for this action. Error: Not Found - https://docs.github.com/rest/pages/pages#get-a-apiname-pages-site Error: HttpError: Not Found - https://docs.github.com/rest/pages/pages#get-a-apiname-pages-site
baraye fix in error bayad dar Settings>Pages>Build and deployment -> source -> Github Actions */

// my note in compilerOption in tsconfig.json:
// "baseUrl": ".",
// "moduleResolution": "bundler",		//in baese error ya warning baraye import az node_module mishe
// "paths": {
// 			"@/*": [
// 				"./*"
// 			],
			//   "@components/*": ["./components/*"],
			//   "@/components/*": ["components/*"],
			//   "@app/*": ["./app/*"],
			//   "@assets/*": ["./assets/*"],
			//   "@styles/*": ["./styles/*"],
			//   "@utils/*": ["./utils/*"]
		// },
		// "forceConsistentCasingInFileNames": true
		// "include": [
		// ".",
		// "next-env.d.ts",
		// "**/*.ts",
		// "**/*.tsx",
		// "*.ts",
		// "src",
		// ".next/types/**/*.ts",
		// "app/react-app-env.d.ts",
		// "app/server.js",
		// "app/components/common/Footer.js",
		// "app/components/common/Header.js",
		// "app/components/HomeMiddle.js",
		// "app/components/MidCom/CommentsSlider.js",
		// "app/components/MidCom/ServicesMe.js"