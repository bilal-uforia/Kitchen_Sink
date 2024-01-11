import { fabric } from "fabric";
import { generateRandomColor, getRandomPoints } from "./helpers";

export const addRectangle = (canvas, canvasRef) => {

    const { left, top } = getRandomPoints(canvasRef.current, 100, 100);

    const rect = new fabric.Rect({
        top,
        left,
        fill: "#" + generateRandomColor(),
        width: 100,
        height: 100
    });
    canvas.current.add(rect);
}

export const addCircle = (canvas, canvasRef) => {
    const { left, top } = getRandomPoints(canvasRef.current, 100, 100);

    const circle = new fabric.Circle({
        top,
        left,
        fill: "#" + generateRandomColor(),
        radius: 50
    });
    canvas.current.add(circle);
}

export const addTriangle = (canvas, canvasRef) => {
    const { left, top } = getRandomPoints(canvasRef.current, 100, 100);

    const triangle = new fabric.Triangle({
        top,
        left,
        fill: "#" + generateRandomColor(),
        width: 100,
        height: 100
    });

    canvas.current.add(triangle);
}


export const addLine = (canvas, canvasRef) => {
    const { left, top } = getRandomPoints(canvasRef.current, 100, 100);

    const line = new fabric.Line([left, top, left + 100, top + 100], {
        stroke: "#" + generateRandomColor()
    });

    canvas.current.add(line);
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
            fill: "#" + generateRandomColor()
        });

    canvas.current.add(polygon);
}

export const addText = (canvas, canvasRef) => {
    const { left, top } = getRandomPoints(canvasRef.current, 100, 100);
    const text = new fabric.Text("this is\na multiline\ntext\nwith\ncustom colors\n&font", {
        left,
        top,
        fontSize: 14,
        editable: true,
        stroke: "#" + generateRandomColor()
    });
    canvas.current.add(text)
}

export const addIText = (canvas, canvasRef) => {
    const { left, top } = getRandomPoints(canvasRef.current, 100, 100);
    const text = new fabric.IText("this is\na multiline Editable\ntext\nwith\ncustom colors\n&font", {
        left,
        top,
        fontSize: 14,
        editable: true,
        stroke: "#" + generateRandomColor()
    });
    canvas.current.add(text)
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
    const url = "http://fabricjs.com/assets/ladybug.png";
    fabric.util.loadImage(url, function (img) {
        console.log(img);
        rect.set("fill", new fabric.Pattern({
            source: img,
            repeat: 'repeat',
        }));
        canvas.current.renderAll();
    });

    canvas.current.add(rect)
}


export const addImagePug = (canvas, canvasRef) => {
    const random_width = Math.random() * 200;
    const random_height = Math.random() * 200;
    const angle = Math.random() * 180

    const { left, top } = getRandomPoints(canvasRef.current, random_width, random_height);

    fabric.Image.fromURL("http://fabricjs.com/assets/pug.jpg", (img_obj) => {
        img_obj.set({
            left,
            top,
            angle
        });

        img_obj.scaleToWidth(random_width);
        img_obj.scaleToHeight(random_height);

        canvas.current.add(img_obj);

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

        canvas.current.add(img_obj);

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

        canvas.current.add(img_obj);

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

    videoObject.getElement().play();

    canvas.current.add(videoObject);
    fabric.util.requestAnimFrame(function render() {
        canvas.current.renderAll();
        fabric.util.requestAnimFrame(render);
    });
}

export const addGradient1 = (canvas, canvasRef) => {
    const { left, top } = getRandomPoints(canvasRef.current, 140, 120);

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
    canvas.current.add(ellipse);
}


export const addGradient2 = (canvas, canvasRef) => {
    const { left, top } = getRandomPoints(canvasRef.current, 100, 100);

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

    canvas.current.add(rect);
}

export const addGradient3 = (canvas, canvasRef) => {
    const { left, top } = getRandomPoints(canvasRef.current, 140, 120);

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
    canvas.current.add(ellipse);
}


export const addGradient4 = (canvas, canvasRef) => {
    const { left, top } = getRandomPoints(canvasRef.current, 100, 100);
    // M 87.1269531, 91.4121094 L 18.126953099999994, 91.4121094 C 6.176757799999994, 91.4121094, -2.113281300000004, 83.171875, 4.516601499999995, 68.22167970000001 C 10.466796799999994, 54.82226560000001, 30.646484299999997, 22.29199220000001, 36.886718699999996, 12.29199220000001 L 68.35644529999999, 12.29199220000001 C 74.60644529999999, 22.29199220000001, 94.78710939999999, 54.82226560000001, 100.7265625, 68.22167970000001 C 107.3564453, 83.171875, 99.0664062, 91.4121094, 87.1269531, 91.4121094 z

    // Custom path for gradient shape
    const path = new fabric.Path("M 0,0 L 40, 0 C 80,80 105,105 70,110 L 70, 110 -35, 110 C -45, 85  ", {
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
    canvas.current.add(path);
}