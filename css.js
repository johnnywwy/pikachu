const string = `
.skin * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}

.skin *::before, .skin *::after {
    box-sizing: border-box;
}

.skin {
    position: relative;
    background: #ffe600;
    min-height: 50vh;
}


.nose {
    border: 8px solid red;
    border-color: black transparent transparent;
    border-bottom: none;
    width: 0px;
    height: 0px;
    position: relative;
    left: 50%;
    top: 148px;
    margin-left: -8px;
    z-index: 2;
}

@keyframes wave {
    0% {
        transform: rotate(0deg);
    }

    33% {
        transform: rotate(5deg);
    }

    66% {
        transform: rotate(-5deg);
    }

    100% {
        transform: rotate(0deg);
    }
}

.nose:hover {
    transform-origin: center bottom;
    animation: wave 150ms infinite;
}

.yuan {
    position: relative;
    /* border: 1px solid red; */
    width: 16px;
    height: 6px;
    /* left: 50%; */
    top: -14px;
    left: -8px;
    border-radius: 8px 8px 0 0;
    background-color: black;
}

.eye {
    border: 2px solid #000;
    width: 64px;
    height: 64px;
    border-radius: 64px;
    position: absolute;
    left: 50%;
    top: 100px;
    margin-left: -32px;
    background: #2e2e2e;
}

.eye::before {
    content: '';
    display: block;
    border: 3px solid #000;
    width: 30px;
    height: 30px;
    background: #fff;
    border-radius: 50%;
    transform: translateX(10px);
}

.leftEye {
    transform: translateX(-120px);
}

.rightEye {
    transform: translateX(120px);
}

.mouth {
    /* border: 1px solid red; */
    width: 200px;
    height: 200px;
    position: absolute;
    top: 168px;
    left: 50%;
    margin-left: -100px;
}

.mouth .up {
    position: relative;
    top: -15px;
}

.mouth .up .lip {
    border: 3px solid black;
    height: 25px;
    width: 98px;
    position: absolute;
    border-top-color: transparent;
    z-index: 1;
    background: #ffe600;
}

.mouth .up .lip.left {
    border-radius: 0 0 0 50px;
    border-left-color: transparent;
    transform: rotate(-18deg) translateX(-53px);
    left: 50%;
    margin-left: -48px;
}

.mouth .up .lip.right {
    border-radius: 0 0 50px 0;
    border-right-color: transparent;
    transform: rotate(18deg) translateX(53px);
    right: 50%;
    margin-right: -48px;
}

.mouth .up .lip::before {
    content: '';
    display: block;
    height: 25px;
    width: 10px;
    /* border: 1px solid red; */
    position: absolute;
    bottom: 0;
    background-color: #ffe600;
}

.mouth .up .lip.left::before {
    right: -4px;
}

.mouth .up .lip.right::before {
    left: -4px;
}

.mouth .down {
    /* border: 1px solid red; */
    height: 170px;
    width: 100%;
    position: absolute;
    top: 10px;
    overflow: hidden;
}

.mouth .down .yuan1 {
    border: 3px solid #000;
    width: 150px;
    height: 1000px;
    position: absolute;
    bottom: 0;
    left: 50%;
    margin-left: -75px;
    border-radius: 80px /280px;
    background: #9b000a;
    overflow: hidden;

}

.mouth .down .yuan1 .yuan2 {
    /* border: 1px solid blue; */
    width: 180px;
    height: 300px;
    position: absolute;
    z-index: 2;
    bottom: -162px;
    left: 50%;
    margin-left: -90px;
    border-radius: 90px/90px;
    background: #ff485f;

}

.face {
    border: 3px solid #000;
    height: 88px;
    width: 88px;
    position: absolute;
    left: 50%;
    top: 220px;
    border-radius: 44px;
    margin-left: -44px;
    z-index: 3;
    background: #ff0000;
}

.face.leftFace {
    transform: translateX(-180px);
}

.face.rightFace {
    transform: translateX(180px);
}
`
export default string