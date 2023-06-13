
<h1>twinklecubeUI is a React ui component library</h1>

<h2>Install:</h2>

`npx @twinklecube/create-ui-library ui-library`
required node version 16.7.0 or higher<br />
<br />
Here the 'ui-library' is the package/directory name... so, it's your choice<br /> 
This command will create a folder called 'ui-library' and install the project there<br />
`npx @twinklecube/create-ui-library .`
<br />
This command will install the package in the current directory

<ul>
    <li>React 18</li>
    <li>typescript</li>
    <li>css, css modules</li>
    <li>scss/sass, modules</li>
    <li>less, less modules</li>
    <li>styled-components</li>
    <li>@emotion</li>
</ul>

<h2>Run in development server:</h2>

`npm start`
<br />
This command will start the development server on port 3030

<h2>Build:</h2>

`npm run build`
<br />
This command will create the 'dist' folder and put the bundled files there

<h2>
    Documentation
</h2>
css and modules, sass/scss and modules, less and 
modules as well as styled-components are enabled in default

<h3>How to create a new component</h3>

<ul>
    <li>
        Create a new folder inside src > components 
        with your component name. (eg. 'button')
    </li>
    <li>
        Inside the newly created folder, create your 
        corrensponding react file. 
        <br />(eg. Button.tsx)
        <br />your component code goes there.
    </li>
</ul>

<h3>How to include your component in the twincklecube dashbord</h3>

<ul>
    <li>
        Inside the component folder created previously, create the corresponding 
        .twinklecube.tsx file (eg. Button.twinklecube.tsx)
    </li>
    <li>
        Inside this file import the component file
        <br />
        `import Button from './Button'`
        <br />
    </li>
    <li>
        Try our component with whatever the props, types, etc... you have defined.
        <br /> you can see an example component 'Chip'.
    </li>
    <li>
        Inside the 'twinklecube' folder, in the SideNav component, create a new 
        route for the newly created component
        <br /> you may follow the patters
    </li>
    <li>
        Inside the 'twinklecube' folder, in the 'Container' component
        import the new '.twinklecube.tsx' component.
        <br />eg. 'import ButtonTwinklecube from "../../../src/components/button/Button.twinklecube"';
        <br /> and expose the component to the route created previously
        <br /> you may follow the pattern
    </li>
    <li>
        Now you are good to go!!!
        <br /> Your component is on the twinklecube dashboard 
    </li>
</ul>

<h3>styled-components</h3>

version 5.3.6
<br />
styled-components are installed and ready to use
<br /> just import as usual and that's it
<br /> `import styled from "styled-components"`


<h3>@emotion</h3>

install emotion. <br />
`npm i @emotion/styled`
<br />
then, just import as usual. you are good to go.<br />
`import styled from @emotion/styled`

<h3>Limitations with styled-components and @emotion</h3>

if you use styled-components or @emotion in this ui-library, please be mindful, that, 
<ol>
    <li>you upload the library to a remote repository (eg. github, bitbucket, etc...) first</li>
    <li>
        and then install the ui-library in to any of your intended apps from the remote repository<br />
        eg. `npm install git+https://github.com/your-user-name/your-repo-name.git`
    </li>
</ol>

if you install the ui-library in another app locally <br />
eg:<br />
`npm i ../ui-library` or <br />
`npm link ui-library` <br />

you will get `invalid hook call` runtime error when you run your app on devServer or when you 
run your app through the `dist` folder<br />
This seems like a wierd bug... and anyone out there is most welcome to have a look :) <br />
`npm clone https://github.com/twinklecube/create-ui-library.git`

<h3>Assets - images/fonts</h3>

assets are copied in to the `dist` folder and NOT base64 encoded <br />

Following formats are supported<br />
Image formats: `jpg, jpeg, svg, png, gif, webp`<br />
Font formats: `woff2, woff, eot, ttf, otf`<br />

<h4>Add any other image or font format</h4>

Step 1: open `webpack.config.js` which is located in the root folder<br />
Step 2: find `test: /\.(jpg|jpeg|png|gif|svg|webp|woff|woff2|eot|ttf|otf)$/i`<br />
Step 4: include the new file/format extension in this list seperated by a pipe character<br />
Step 5: open `rollup.config.js` which is located in the root folder<br />
Step 6: find `include : [
'**/*.svg', '**/*.png', '**/*.jp(e)?g', '**/*.gif', '**/*.webp', '**/*.woff2', '**/*.woff',
'**/*.ttf', '**/*.otf', '**/*.eot'
]`<br />
Step 7: include the new file/format extension in this array seperated by a comma. eg `'**/*.your-file-extension'`<br />
Step 5: open `module.d.ts` which is located in the src folder<br />
Step 6: add `declare module *.your-file-extension;` at the end of the file.<br />

<h4>How to use assets in your app</h4>

when this project is built, assets(images/fonts) are copied in to the dist folder. <br />
in your app, you have to copy these assets in to the build folder (eg. `dist` folder)
of the app in order to be referenced and served correctly<br />
for example you can do the following in your webpack config file

`const CopyPlugin = require('copy-webpack-plugin');`

`module.exports = {`

    plugins: [
        new CopyPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname, 'node_modules', '<your-ui-library>', 'dist', 'esm', 'images'),
                    to: path.join(__dirname, 'dist', 'images'),
                    noErrorOnMissing: true
                },
                {
                    from: path.resolve(__dirname, 'node_modules', <your-ui-library>', 'dist', 'esm', 'fonts'),
                    to: path.join(__dirname, 'dist', 'fonts'),
                    noErrorOnMissing: true
                }
            ]
        })
    ]
`}`


<h3>
    More documentation and features will follow
</h3>

<h3>
    Please note, that twinklecube is very new... there may be many hiccups.
</h3>

please be good enough to inform us about any bugs <br />
<a href="https://github.com/twinklecube/create-ui-library/issues">
https://github.com/twinklecube/create-ui-library/issues
</a>




