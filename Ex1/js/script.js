let renderer, camera, scene;
let teta = 0;

scene = new THREE.Scene();
const BPM = 50; 
let = 0;
let startTime ;

let mesh;
let mesh2; 
let mesh3;


init(); 
render();

function init() {
    camera = new THREE.PerspectiveCamera(75, //en degré, c'est l'angle de vue
        window.innerWidth / window.innerHeight, // largeur divisée par la hauteur: c'est le ratio de notre écran
        0.1, // si l'objet est a moins de 0.1 on va pas représenter l'objet
        1000); // la même chose ici mais s'il est a plus de 1000
    camera.position.x = -30;
    camera.position.y = 40;
    camera.position.z = 20;
    camera.lookAt(scene.position);

    scene.add(camera);

    // premier cube
    const geometry = new THREE.BoxGeometry(10, 10, 10);
    const material = new THREE.MeshBasicMaterial({color: 0x74121D});
    mesh = new THREE.Mesh(geometry, material);
    mesh.position.set(1,2,1);

    scene.add(mesh)

    const axes = new THREE.AxesHelper(20);
    scene.add(axes);

    //deuxième cube 
    const geometry2 = new THREE.BoxGeometry(20, 5, 25);
    const material2 = new THREE.MeshBasicMaterial({ color: 0xA51C30 });
    mesh2 = new THREE.Mesh(geometry2, material2);
    mesh2.position.set(5,25,1);
    scene.add(mesh2);


    //troisième cube

    

    nbr1= Math.random() * 15;
    nbr2 = Math.random() * 15;
    nbr3 = Math.random() * 15;
    
    const geometry3 = new THREE.BoxGeometry(nbr1, nbr2, nbr3);
    const material3 = new THREE.MeshBasicMaterial({ color: 0xC52233});
    mesh3 = new THREE.Mesh(geometry3, material3);
    mesh3.position.set(-15,3,-10);
    scene.add(mesh3);

    const spotLight = new THREE.SpotLight(0xffffff);
    spotLight.position.set(-40, 60, -10);
    scene.add(spotLight);




    // Renderer
    renderer = new THREE.WebGLRenderer({
        canvas: document.querySelector('canvas.webgl')
        });
        renderer.setSize(window.innerWidth * 0.5 , window.innerHeight * 0.5);
    
    startTime = new Date().getTime();

}

    

function render() {
    let nowTime = new Date().getTime(); 
    t = (nowTime - startTime)/1000; //  on divise par mille pour que ce soit en seconde
    teta = (t * Math.PI * BPM / 30);
   
    // camera.position.y = 20 + 5*Math.cos(teta);
    mesh.position.x = 1 + 5*Math.cos(teta/4);
    renderer.render(scene, camera);
    requestAnimationFrame(render);

    mesh2.position.y = 1 + 10 * Math.cos(teta/4);

    mesh3.scale.y = 1 + 3* Math.cos(teta);

}