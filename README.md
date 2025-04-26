# Namste React

// this is using ReactCore
const heading = React.createElement("div",{id:"parent"},
React.createElement("div",{id:"child"},
React.createElement("h1",{id:"heading"},"hello nested")
)
);

//This is react ELement JSX
const jsxHeading = (<h1 id="heading"> Hello World JSX 😁 </h1>);

//React Component (Functional Component )

const Title = () => {
return <h1 id="heading">Learning React</h1>
};

const JsxHeading = ( ) => {
return<div>

<h1 id="heading">Hello world</h1>
<Title/> {/_ // puting react Component in react Component _/}
{jsxHeading} {/_ puting react ELement in react Component _/}

  </div> 
};

<!-- Requirements  -->

/\*\*
Header

- logo
- Nav Items
  Body
- Search Bar
- Cards container
  - Restaurant Cards
    -Image
    -Restaurant Name
    -Rating
    Footer
    -copy right
    -Links
- Address \*

<!--
To obtimize our APP performance : break down our app into chunk
APP chunking
code spliter
dynamic loading
lazy loading -->

//ways to implement css

1. Sass Scss
2. Styled components
3. material Ui
4. Tailwind CSS
5. bootStrap
6. Chakra UI
7. AntUI
