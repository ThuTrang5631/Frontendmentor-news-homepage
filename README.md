# Frontend Mentor - News homepage solution

This is a solution to the [News homepage challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/news-homepage-H6SWTa1MFl). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

#### Desktop:

![image](https://user-images.githubusercontent.com/70875419/237056312-97a42495-2c8c-4ed7-a3d8-e0b903b04de3.png)

#### Mobile

![image](https://user-images.githubusercontent.com/70875419/237056581-a87afb7d-8b39-4b6f-aa9e-c19f0bea4e22.png)
![image](https://user-images.githubusercontent.com/70875419/237056746-e07256a9-76cf-4007-a9e5-857a196c35c8.png)

### Links

- Live Site URL: https://news-homepage-frontendmentor-solution.netlify.app/

## My process

### Built with

- Semantic HTML5 markup
- SCSS
- Flexbox
- CSS Grid
- Desktop first workflow
- [Reactjs framework](https://reactjs.org/) - JS library

### What I learned

After this challenge, I understand about flexbox, grid. I also learn reactjs and understand it a bit better. I know how to make responsive web on devices: desktop, tablet, mobile and set the files to code.

Create a components in file `.jsx`, such as:

```const CardItem = ({ src, number, title, description }) => {
  return (
    <div className="carditem">
      <img className="carditem-img" src={src} alt="carditem-image"></img>
      <div className="carditem-content">
        <p className="carditem-content-number">{number}</p>
        <h5 className="carditem-content-title">{title}</h5>
        <p className="carditem-content-desc">{description}</p>
      </div>
    </div>
  );
};

export default CardItem;
```

Create folder style to containe files scss:
![image](https://user-images.githubusercontent.com/70875419/237057342-7f4e566e-8e13-4e24-b688-8d12fbab4be6.png)

File index.scss will contain child scss files:
![image](https://user-images.githubusercontent.com/70875419/237057399-b32f6488-ddf0-4e8b-a63e-5adb8951ac41.png)

File index.js will contain index.scss:
![image](https://user-images.githubusercontent.com/70875419/237057935-c7afe6f0-13a5-4b40-83bc-8dd19a21c61a.png)

## Author

- Frontend Mentor - [@ThuTrang5631](https://www.frontendmentor.io/profile/ThuTrang5631)
