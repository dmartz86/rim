((T) => {
  const scene = new T.Scene();
  const camera = new T.PerspectiveCamera(75, 1, 0.1, 100);

  const renderer = new T.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);

  function shape(p, color) {
    const geometry = new T.BoxGeometry(p[0], p[1], p[2]);
    const material = new T.MeshBasicMaterial({ color });
    return new T.Mesh(geometry, material);
  }

  const c001 = shape([1, 1, 1], 0x888888);
  const c002 = shape([1, 1, 1], 0x00ff00);
  const c003 = shape([1, 1, 1], 0xff0000);
  const c004 = shape([1, 1, 1], 0x0000ff);

  scene.add(c001);
  scene.add(c002);
  scene.add(c003);
  scene.add(c004);

  camera.position.z = 2;


  function render() {
    requestAnimationFrame(render);
    c001.rotation.y += .0025;
    c001.rotation.x += .0025;
    c002.rotation.y += .0005;
    c003.rotation.x += .0005;
    c003.rotation.y += -.0005;
    c003.rotation.x += -.0005;
    c004.rotation.y += -.0025;
    c004.rotation.x += -.0025;
    renderer.render(scene, camera);
  }

  render();

})(THREE);
