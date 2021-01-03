# Multi Purpose Sign Language Detector
We have used eight alignments of the hand to map to any functionality. Currently we have the option of mapping to specific labels or map to some link. This is essentially enforcing a new way of user navigation using handsigns. We have only used eight alignments and not covered the whole alphabet so as to get more accurate results with the training data available to us. With eight signs there is very less probability of vectors of two hand signs to be similar. 

There can be many usecases and automation chances for such a application for example 
1. Mapping the signs to some home functionality like turning the light one, turning fan off etc. 
2. Making a map to most used applications or links and navigate to them using the hand alignments.
3. Playing simple multiplayer games. 
4. Making a page navigation usign the hand alignments. 
5. Creating weird music 
and many more.

## Working

The application implements two of the following above possiblities:
1. Map the hand alignments to labels and make a sentence
2. Map the hand alignments to links and open the link on the browser on detection.

![](./public/example.png)

The signs used are given as follows:

1. ![Sign One](./public/One.png)
2. ![Sign Two](./public/Two.png)
3. ![Sign Three](./public/Three.png)
4. ![Sign Four](./public/Four.png)
5. ![Sign Five](./public/Five.png)
6. ![Sign Six](./public/Six.png)
7. ![Sign Seven](./public/Seven.png)
8. ![Sign Eight](./public/Eight.png)


## Concepts


## Training


## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.
