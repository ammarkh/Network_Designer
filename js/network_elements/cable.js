class Cable {
  constructor(id, x1, y1, x2, y2) {
    this.fX = x1;
    this.tX = x2;
    this.fY = y1;
    this.tY = y2;
    this.id = id;
    this.fPort = "";
    this.tPort = "";
    this.fElement = "";
    this.tElement = "";
    this.uri = "http://www.w3.org/2000/svg";
    this.el = this.CreateElement(x1, y1, x2, y2);
    this.el.setAttribute("stroke-width", 0.7);
    this.el.setAttribute("stroke", "olive");
    this.el.setAttribute('id', id);
  }

  CreateElement(x1, x2, y1, y2) {
    var cable = document.createElementNS(this.uri, "line");
    cable.setAttribute("x1", x1);
    cable.setAttribute("y1", x2);
    cable.setAttribute("x2", y1);
    cable.setAttribute("y2", y2);
    return cable;
  }

  get Id() {
    return this.id;
  }

  set FElement(value) {
    this.fElement = value;
  }

  get FElement() {
    return this.fElement;
  }

  set TElement(value) {
    this.tElement = value;
  }

  get TElement() {
    return this.tElement;
  }

  set FPort(value) {
    this.fPort = value;
  }

  get FPort() {
    return this.fPort;
  }

  set TPort(value) {
    this.tPort = value;
  }

  get TPort() {
    return this.tPort;
  }

  set FX(value) {
    this.fX = value;
  }

  get FX() {
    return this.fX;
  }

  set TX(value) {
    this.tX = value;
  }
  get TX() {
    return this.tX;
  }

  set FY(value) {
    this.fY = value;
  }

  get FY() {
    return this.fY;
  }

  set TY(value) {
    this.tY = value;
  }
  get TY() {
    return this.tY;
  }

  get Element() {
    return this.el;
  }

  //update cable from // to // all cable
  updateF(x1, y1) {
    this.el.setAttribute("x1", x1);
    this.el.setAttribute("y1", y1);
  }
  updateT(x2, y2) {
    this.el.setAttribute("x2", x2);
    this.el.setAttribute("y2", y2);
  }
  update(x1, x2, y1, y2) {}
}
