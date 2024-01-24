import { fabric } from "fabric";
import { getRandomPoints } from "./helpers";
import randomColor from "randomcolor";
import { ladybug, pug } from "../assets/images";

// Simple  Shapes
export const addRectangle = (canvas, canvasRef) => {

    const { left, top } = getRandomPoints(canvasRef.current, 100, 100);

    const rect = new fabric.Rect({
        top,
        left,
        fill: randomColor(),
        width: 100,
        height: 100
    });
    canvas.add(rect);
}

export const addCircle = (canvas, canvasRef) => {
    const { left, top } = getRandomPoints(canvasRef.current, 100, 100);

    const circle = new fabric.Circle({
        top,
        left,
        fill: randomColor(),
        radius: 50
    });
    canvas.add(circle);
}

export const addTriangle = (canvas, canvasRef) => {
    const { left, top } = getRandomPoints(canvasRef.current, 100, 100);

    const triangle = new fabric.Triangle({
        top,
        left,
        fill: randomColor(),
        width: 100,
        height: 100
    });

    canvas.add(triangle);
}


export const addLine = (canvas, canvasRef) => {
    const { left, top } = getRandomPoints(canvasRef.current, 100, 100);

    const line = new fabric.Line([left, top, left + 100, top + 100], {
        stroke: randomColor()
    });

    canvas.add(line);
}

export const addPolygon = (canvas, canvasRef) => {
    let { left, top } = getRandomPoints(canvasRef.current, 50, 130, 50, 0);
    const polygon = new fabric.Polygon([
        { x: left, y: top },
        { x: left + 50, y: top + 50 },
        { x: left + 50, y: top + 130 },
        { x: left - 50, y: top + 130 },
        { x: left - 50, y: top + 50 }],
        {
            fill: randomColor()
        });

    canvas.add(polygon);
}

export const addText = (canvas, canvasRef) => {
    const { left, top } = getRandomPoints(canvasRef.current, 100, 100);
    const text = new fabric.Text("this is\na multiline\ntext\nwith\ncustom colors\n&font", {
        left,
        top,
        fontSize: 14,
        editable: true,
        stroke: randomColor()
    });
    canvas.add(text)
}

export const addIText = (canvas, canvasRef) => {
    const { left, top } = getRandomPoints(canvasRef.current, 100, 100);
    const text = new fabric.IText("this is\na multiline Editable\ntext\nwith\ncustom colors\n&font", {
        left,
        top,
        fontSize: 14,
        editable: true,
        stroke: randomColor()
    });
    canvas.add(text)
}

export const addPatternRect = (canvas, canvasRef) => {
    const { left, top } = getRandomPoints(canvasRef.current, 300, 300);


    const rect = new fabric.Rect({
        left,
        top,
        width: 300,
        height: 300
    });


    // Adding pattern to rectangle
    fabric.util.loadImage(ladybug, function (img) {
        console.log(img);
        rect.set("fill", new fabric.Pattern({
            source: img,
            repeat: 'repeat',
        }));
        canvas.renderAll();
    });

    canvas.add(rect)
}

// Image Shapes
export const addImagePug = (canvas, canvasRef) => {
    const random_width = Math.random() * 200;
    const random_height = Math.random() * 200;
    const angle = Math.random() * 180

    const { left, top } = getRandomPoints(canvasRef.current, random_width, random_height);

    fabric.Image.fromURL(pug, (img_obj) => {
        img_obj.set({
            left,
            top,
            angle
        });

        img_obj.scaleToWidth(random_width);
        img_obj.scaleToHeight(random_height);

        canvas.add(img_obj);

    }, { crossOrigin: 'anonymous' })
}

export const addImageGoogle = (canvas, canvasRef) => {
    const random_width = Math.random() * 150;
    const random_height = Math.random() * 150;
    const angle = Math.random() * 180

    const { left, top } = getRandomPoints(canvasRef.current, random_width, random_height);

    fabric.Image.fromURL("http://fabricjs.com/assets/logo.png", (img_obj) => {
        img_obj.set({
            left,
            top,
            angle
        });

        img_obj.scaleToWidth(random_width);
        img_obj.scaleToHeight(random_height);

        canvas.add(img_obj);

    }, { crossOrigin: 'anonymous' })
}


export const addImagePrintio = (canvas, canvasRef) => {
    const { left, top } = getRandomPoints(canvasRef.current, 100, 100);

    // randomly scaling prinitio image
    const randomScale = Math.random() * 1;

    fabric.Image.fromURL("http://fabricjs.com/assets/printio.png", (img_obj) => {
        img_obj.set({
            left,
            top,
            scaleX: randomScale,
            scaleY: randomScale
        });

        canvas.add(img_obj);

    }, { crossOrigin: 'anonymous' })
}

const createVideoElement = () => {
    const video = document.createElement('video');

    video.src =
        'https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4';

    video.poster =
        'https://peach.blender.org/wp-content/uploads/title_anouncement.jpg?x11217';

    video.autoplay = false;
    video.controls = false;
    video.muted = true;
    video.width = 320;
    video.height = 240;
    // video.autoplay = true;

    const videoContainer = document.getElementById('videos-container');

    videoContainer.appendChild(video);

    return video;
}

// creating canvas for playing video
export const addBunnyVideo = (canvas, canvasRef) => {
    const video = createVideoElement();

    const { left, top } = getRandomPoints(canvasRef.current, 320, 240);

    const videoObject = new fabric.Image(video, {
        left,
        top,
        angle: -15,
        objectCaching: false,
    });

    // videoObject.getElement().play();

    canvas.add(videoObject);
    fabric.util.requestAnimFrame(function render() {
        canvas.renderAll();
        fabric.util.requestAnimFrame(render);
    });
}


// Gradient Shapes
export const addGradient1 = (canvas, canvasRef) => {
    const { left, top } = getRandomPoints(canvasRef.current, 85, 60);

    const ellipse = new fabric.Ellipse({
        left,
        top,
        radius: 60,
        ry: 60,
        rx: 85,
    });

    const gradient = new fabric.Gradient({
        type: 'linear',
        gradientUnits: 'pixels',
        coords: { x1: 0, y1: 0, x2: ellipse.width, y2: 0 },
        colorStops: [
            { offset: 0, color: "red" },
            { offset: 1, color: "orange" }
        ]
    })

    ellipse.set("fill", gradient);
    canvas.add(ellipse);
}


export const addGradient2 = (canvas, canvasRef) => {
    const { left, top } = getRandomPoints(canvasRef.current, 70, 70);

    const rect = new fabric.Rect({
        left,
        top,
        width: 70,
        height: 70
    });

    const gradient = new fabric.Gradient({
        type: "linear",
        gradientUnits: 'pixels',
        coords: { x1: 0, y1: 0, x2: rect.width, y2: 0 },
        colorStops: [
            { offset: 0, color: "#fff" },
            { offset: 1, color: "#000" }
        ]
    })

    rect.set("fill", gradient);

    canvas.add(rect);
}

export const addGradient3 = (canvas, canvasRef) => {
    const { left, top } = getRandomPoints(canvasRef.current, 85, 60);

    const ellipse = new fabric.Ellipse({
        left,
        top,
        radius: 60,
        ry: 60,
        rx: 85,
    });

    const gradient = new fabric.Gradient({
        type: 'linear',
        gradientUnits: 'pixels',
        coords: { x1: 0, y1: 0, x2: 0, y2: ellipse.height },
        colorStops: [
            { offset: 0, color: "red" },
            { offset: 1, color: "orange" }
        ]
    })

    ellipse.set("fill", gradient);
    canvas.add(ellipse);
}


export const addGradient4 = (canvas, canvasRef) => {
    const { left, top } = getRandomPoints(canvasRef.current, 100, 100);
    // M 87.1269531, 91.4121094 L 18.126953099999994, 91.4121094 C 6.176757799999994, 91.4121094, -2.113281300000004, 83.171875, 4.516601499999995, 68.22167970000001 C 10.466796799999994, 54.82226560000001, 30.646484299999997, 22.29199220000001, 36.886718699999996, 12.29199220000001 L 68.35644529999999, 12.29199220000001 C 74.60644529999999, 22.29199220000001, 94.78710939999999, 54.82226560000001, 100.7265625, 68.22167970000001 C 107.3564453, 83.171875, 99.0664062, 91.4121094, 87.1269531, 91.4121094 z

    // Custom path for gradient shape
    const path = new fabric.Path("M 0,0 L 40, 0 C 80,80 105,105 70,110 L 70, 110 -35, 110 C -55, 95 -35,85  0, 0 ", {
        strokeWidth: 2,
        fill: 'transparent',
        stroke: 'black'
    })

    const gradient = new fabric.Gradient({
        type: 'linear',
        gradientUnits: 'pixels',
        coords: { x1: 0, y1: 0, x2: path.width, y2: path.height },
        colorStops: [
            { offset: 0, color: "#fff", opacity: 0.5 },
            { offset: 1, color: "#000", opacity: 0.8 }
        ]
    });


    path.set({ left, top, fill: gradient });
    canvas.add(path);
}


// Arcs Shapes
export const addArc1 = (canvas, canvasRef) => {
    const { left, top } = getRandomPoints(canvasRef.current, 100, 100)
    const path = new fabric.Path("M 100,200, C 120,150 145,160 155,180 C 185,300 200,180 200,130 C 200,80 255,90 245,250", {
        strokeWidth: 4,
        fill: 'transparent',
        stroke: "red"
    });

    console.log(path);

    path.set({ left, top });
    canvas.add(path);
}

export const addArc2 = (canvas, canvasRef) => {
    const { left, top } = getRandomPoints(canvasRef.current, 100, 100)

    // var arcData = 'M 50 50 A 100 100 0 1 0 150 -50';
    const arcData = 'M 440 502 A 100 100 0 1 1 348 602 L 440 602 L 440 502'


    // Create a Fabric.js path with the arc path data
    let path = new fabric.Path(arcData, {
        left,
        top,
        fill: 'red',
        stroke: 'blue',
        strokeWidth: 4
    });


    canvas.add(path);
}

export const addArc3 = (canvas, canvasRef) => {
    const { left, top } = getRandomPoints(canvasRef.current, 200, 200)

    const path1 = new fabric.Path("M 0 0 C 100,-80 300,50 230,70", {
        strokeWidth: 2,
        fill: 'transparent',
        stroke: "black",
        left: 10,
        top: 250
    });

    var path2 = new fabric.Path("M 50 10 C 20,-70 180,-40 250,70", {
        strokeWidth: 2,
        fill: 'transparent',
        stroke: "black",
        left: 400,
        top: 150
    });

    var path3 = new fabric.Path("M 50 10 C 30,-140 180,-40 250,70", {
        strokeWidth: 2,
        fill: 'transparent',
        stroke: "black",
        left: 400,
        top: 300
    });

    var path4 = new fabric.Path("M 50 10 C 360,-190 370,50 370,50", {
        strokeWidth: 2,
        fill: 'transparent',
        stroke: "black",
        left: 700,
        top: 150
    });

    var group = new fabric.Group([path1, path2, path3, path4], {
        left,
        top,
        angle: 10,
    });

    canvas.add(group);
    // canvas.add(path4);
}

export const addArc4 = (canvas, canvasRef) => {

    // const path1 = new fabric.Path("M 100 100 A 50 50 0 0 1 40 70 L 100 40 L 100 100", {
    //     left: 0,
    //     top: 0,
    //     strokeWidth: 2,
    //     stroke: "black",
    //     fill:"transparent",
    // });

    const { left, top } = getRandomPoints(canvasRef.current, 100, 100)


    const clipPathCircle = new fabric.Path("M -140 0 L 0 0 L 0 140")

    const clipCircle = new fabric.Circle({
        radius: 40,
        top: 50,
        left: 50,
        fill: "green"
    });

    clipCircle.clipPath = clipPathCircle;

    const circleTrianglePath = new fabric.Path("M 320 340 A 60 60 0 1 1 270 290 L 320 290 L 320 340", {
        left: 150,
        top: 100,
        fill: "red"
    })

    const rect1 = new fabric.Rect({
        width: 100,
        height: 100,
        fill: "blue"
    })

    const rect2 = new fabric.Rect({
        width: 100,
        height: 100,
        fill: "blue",
        left: 100
    })

    const rect3 = new fabric.Rect({
        width: 100,
        height: 100,
        fill: "transparent",
        top: 100
    })


    const rect4 = new fabric.Rect({
        width: 100,
        height: 100,
        fill: "blue",
        top: 100,
        left: 100
    })

    const rectsClipCircle = new fabric.Circle({
        radius: 50,
        originX: "center",
        originY: "center"
    })


    const rectsGroup = new fabric.Group([rect1, rect2, rect3, rect4], {
        left: 170,
        top: 200
    })

    rectsGroup.clipPath = rectsClipCircle;



    const triCircle = new fabric.Path("M 0 0 L 30 -30 L 60 0 Q 30, -15, 0, 0", {
        fill: "purple",
        angle: 45,
        top: 300,
        left: 50
    })

    const group = new fabric.Group([clipCircle, circleTrianglePath, rectsGroup, triCircle], {
        left,
        top,
        angle: -10
    });

    canvas.add(group);
}


export const addArc5 = (canvas, canvasRef) => {
    const { left, top } = getRandomPoints(canvasRef.current, 100, 100)

    const circle = new fabric.Circle({
        radius: 100,
        fill: "#FF0000",
        left: 0,
        top: 0
    });

    const rect = new fabric.Rect({
        width: 150,
        height: 60,
        fill: "#ff00ff",
        left: 20,
        top: 5
    })


    const group = new fabric.Group([circle, rect], {
        left,
        top,
        angle: -10
    });

    canvas.add(group);
}


// Svg Shapes

//Function for adding any svg shape
export const addSVGShape = (canvas, canvasRef, url = "", objectOptions = {}, width = 100, height = 100, scaleToWidthHeight = true) => {

    const { left, top } = getRandomPoints(canvasRef.current, width, height)

    fabric.loadSVGFromURL(url, (objects, options) => {
        const svgObject = fabric.util.groupSVGElements(objects, options);
        svgObject.set({
            top,
            left,
            ...objectOptions
        });

        if (scaleToWidthHeight) {
            svgObject.scaleToWidth(width);
            svgObject.scaleToHeight(height);
        }

        canvas.add(svgObject);
    });

    console.log("inside addSVG shape");
}