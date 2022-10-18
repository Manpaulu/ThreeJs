let renderer, camera, scene;
let teta = 0;

scene = new THREE.Scene();
const BPM = 50; 
let = 0;
let startTime ;

let spotLight;
let directionalLight;

let controls;

let cube;


init(); 
render();

function init(){
    // Create the Scene
    scene = new THREE.Scene();
    scene.fog = new THREE.Fog(0x0000ff, 0.015, 100); 

    //Create the Camera
    camera = new THREE.PerspectiveCamera(
        45, 
        800 / 600,
        0.1, 
        1000);
    camera.position.set(0, -12, 21);
    camera.lookAt(scene.position);
    scene.add(camera);

    // create the ground plane
    let planeGeometry = new THREE.PlaneGeometry(80, 80);
    let planeMaterial = new THREE.MeshLambertMaterial({color: 0xaaaaaa});
    let plane = new THREE.Mesh(planeGeometry, planeMaterial);
    plane.receiveShadow = true;
    scene.add(plane);

    for(i=0; i<200; i++){
        let height =  Math.random()*10;
        let cubeGeometry = new THREE.BoxGeometry(2, 2, height);
        let cubeMaterial = new THREE.MeshLambertMaterial({color: 0x888888});
        cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
        cube.position.set(Math.random()*40-20, Math.random()*40-20, height/2);
        scene.add(cube);
    }
    
    spotLight = new THREE.SpotLight(0xffffff);
    spotLight.position.set(0, 0, 10);
    //scene.add(spotLight);

    pointLight = new THREE.PointLight(0xccffcc);
    pointLight.position.set(0, 0, 20);
    const pointSphere = new THREE.SphereGeometry(0.5, 16, 8);
    pointLight.add(new THREE.Mesh( pointSphere, new THREE.MeshBasicMaterial({color: 0xccffcc})));
    pointLight.castShadow = true;
    scene.add(pointLight);

    directionalLight = new THREE.DirectionalLight(0xccffcc);
    directionalLight.position.set(0, 0, 20);
    directionalLight.intensity = 1;
    directionalLight.add(new THREE.Mesh( pointSphere, new THREE.MeshBasicMaterial({color: 0xccffcc})));
    //scene.add(directionalLight);

    ambientLight = new THREE.AmbientLight(0x00ffff);
    //scene.add(ambientLight);

    hemiLight = new THREE.HemisphereLight(0xff0000, 0xccffcc);
    hemiLight.position.set(0, 0, 20);
    hemiLight.add(new THREE.Mesh(pointSphere, new THREE.MeshBasicMaterial({color: 0xccffcc})));
    //scene.add(hemiLight);

    // show axes in the screen
    const axes = new THREE.AxesHelper(20);
    //scene.add(axes);

    controls = new function(){
        this.cameraX = -3;
        this.cameraY = -25;
        this.cameraZ = 25;
        this.lightZ = 100;
        };
    let gui = new dat.GUI();
    gui.add(controls, 'cameraX', -100, 100);
    gui.add(controls, 'cameraY', -100, 100);
    gui.add(controls, 'cameraZ', -100, 100);
    gui.add(controls, 'lightZ', 0, 100);

    // Finally create the Renderer
    renderer = new THREE.WebGLRenderer({
        canvas: document.querySelector('canvas.webgl'),
        antialias: true
    });
    renderer.setSize(800, 600);
    renderer.shadowMap.enabled = true;
}

function render() {
    // spotLight.position.z -= 0.01;
    pointLight.position.z = controls.lightZ;
    // directionalLight.position.z -= 0.01;
    // hemiLight.position.z -= 0.1;
    camera.position.set(controls.cameraX, controls.cameraY, controls.cameraZ);
    camera.lookAt(scene.position);
    renderer.render(scene, camera);
    requestAnimationFrame(render);


    for(i=0; i<200; i++){
        cube.scale.y = 1 + 3* Math.cos(teta);
    }





    }
