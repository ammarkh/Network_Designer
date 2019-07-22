/**
 * 
 */

class Antenna4Port {
  constructor(id, x, y, name, type) {
    this.url = "http://www.w3.org/2000/svg";
    this.el = this.createElement(x, y);
    this.el.setAttribute("id", id);
    this.el.setAttribute("stroke-width", this.width);
    this.el.setAttribute("stroke", this.Color || "#181818");
    this.type = type = "Antenna4Port";
    this.name = name;
    this.id = id;
    this.eX = x;
    this.eY = y;
    this.isEmpty = true;
    this.cport = [
      new DoublePort("port_1_" + this.id, 0, "down", x + 10, y + 210),
      new DoublePort("port_2_" + this.id, 1, "down", x + 16, y + 210),
      /* new DoublePort(this.id + "prt1_t" + 1, 1, "t", x + 18.5, y + 210),
      new DoublePort(this.id + "prt1_r" + 1, 1, "r", x + 21, y + 210),
      new DoublePort(this.id + "prt1_t" + 2, 0, "t", x + 28.5, y + 210),
      new DoublePort(this.id + "prt1_r" + 2, 0, "r", x + 31, y + 210),*/
      new DoublePort("port_3_" + this.id, 2, "down", x + 35, y + 210),
      new DoublePort("port_4_" + this.id, 3, "down", x + 41, y + 210),
    ];
  }

  createElement(x, y) {
    var antenna_cord = [
      ["M" + x, " " + y],
      ["L" + (x + 50), " " + y],
      ["L" + (x + 40), " " + (y - 10)],
      ["L" + (x - 5), " " + (y - 10)],
      ["L" + x, " " + y],
      ["M" + (x + 50), " " + y],
      ["L" + (x + 50), " " + (y + 200)],
      ["L" + x, " " + (y + 200)],
      ["L" + (x - 5), " " + (y + 190)],
      ["L" + (x - 5), " " + (y - 10)],
      ["L" + x, " " + y],
      ["M" + x, " " + (y + 200)],
      ["L" + x, " " + y],
      //port
      ["M" + (x + 10), " " + (y + 200)],
      ["L" + (x + 10), " " + (y + 210)],
      ["M" + (x + 16), " " + (y + 200)],
      ["L" + (x + 16), " " + (y + 210)],
      //port
      /* ["M" + (x + 18.5), " " + (y + 200)],
      ["L" + (x + 18.5), " " + (y + 210)],
      ["M" + (x + 21), " " + (y + 200)],
      ["L" + (x + 21), " " + (y + 210)],
      //port
      ["M" + (x + 28.5), " " + (y + 200)],
      ["L" + (x + 28.5), " " + (y + 210)],
      ["M" + (x + 31), " " + (y + 200)],
      ["L" + (x + 31), " " + (y + 210)],*/
      //port
      ["M" + (x + 35), " " + (y + 200)],
      ["L" + (x + 35), " " + (y + 210)],
      ["M" + (x + 41), " " + (y + 200)],
      ["L" + (x + 41), " " + (y + 210)],
    ];
    var points = "";

    for (var i = 0; i < antenna_cord.length; i++) {
      points += antenna_cord[i][0] + antenna_cord[i][1] + " ";
    }
    points += "Z"; //end path

    var _antenna = document.createElementNS(this.url, "path");
    _antenna.setAttribute("d", points);
    return _antenna;
  }

  //return if link is empty;
  get IsEmpty() {
    this.isEmpty = true;
    for (var i = 0; i < this.cport.length; i++) {
      if (this.cport[i].isLinked) {
        this.isEmpty = false;
      }
    }
    return this.isEmpty;
  }

  set Name(value) {
    this.el.setAttribute("name", value);
  }

  get Name() {
    return this.el.getAttribute("name");
  }

  set Type(value) {
    this.type = value;
  }

  get Type() {
    return this.type;
  }

  get Points() {
    return this.el.getAttribute("points");
  }

  

  set Color(color = "C1C1C1") {
    this.el.setAttribute("stroke", color);
  }

  get Color() {
    return this.el.getAttribute("stroke");
  }

  set fillColor(fColor = "FEFEFE") {
    this.el.setAttribute("fill", "#" + fColor);
  }

  get fillColor() {
    return this.el.getAttribute("fill");
  }

  set width(w = 0.5) {
    this.el.setAttribute("stroke-width", w);
  }

  get width() {
    return this.el.getAttribute("stroke-width") || 0.5;
  }

  get Element() {
    return this.el;
  }

  get Capacity() {
    return this.el.getAttribute("capacity");
  }

  set Capacity(value) {
    if (isNaN(value)) {
      throw "INVALID TYPE NUMBER ERROR: ANTENNA SHOULD DEFINE WITH CAPACITY NUMBER";
    }
    return this.el.setAttribute("capacity", value);
  }

  get port() {
    return this.cport;
  }

  set Link(value) {
    this.clink.push(value);
  }

  get Link() {
    return this.clink;
  }

  update(x, y) {
    //this.el.removeAttribute("points");
    this.eX = x;
    this.eY = y;
    /*
      var antenna_cord = [
        [x, y],
        [x + 20, y],
        [x + 20, y + 160],
        [x, y + 160],
        [x, y],
        [x + 20, y - 20],
        [x + 40, y - 20],
        [x + 20, y],
        [x + 40, y - 20],
        [x + 40, y + 140],
        [x + 20, y + 160]
      ];*/
    var antenna_cord = [
      ["M" + x, " " + y],
      ["L" + (x + 50), " " + y],
      ["L" + (x + 40), " " + (y - 10)],
      ["L" + (x - 5), " " + (y - 10)],
      ["L" + x, " " + y],
      ["M" + (x + 50), " " + y],
      ["L" + (x + 50), " " + (y + 200)],
      ["L" + x, " " + (y + 200)],
      ["L" + (x - 5), " " + (y + 190)],
      ["L" + (x - 5), " " + (y - 10)],
      ["L" + x, " " + y],
      ["M" + x, " " + (y + 200)],
      ["L" + x, " " + y],
      //port
      ["M" + (x + 10), " " + (y + 200)],
      ["L" + (x + 10), " " + (y + 210)],
      ["M" + (x + 16), " " + (y + 200)],
      ["L" + (x + 16), " " + (y + 210)],
      //port
      /*   ["M" + (x + 18.5), " " + (y + 200)],
      ["L" + (x + 18.5), " " + (y + 210)],
      ["M" + (x + 21), " " + (y + 200)],
      ["L" + (x + 21), " " + (y + 210)],
      //port
      ["M" + (x + 28.5), " " + (y + 200)],
      ["L" + (x + 28.5), " " + (y + 210)],
      ["M" + (x + 31), " " + (y + 200)],
      ["L" + (x + 31), " " + (y + 210)],*/
      //port
      ["M" + (x + 35), " " + (y + 200)],
      ["L" + (x + 35), " " + (y + 210)],
      ["M" + (x + 41), " " + (y + 200)],
      ["L" + (x + 41), " " + (y + 210)],
    ];

    var points = "";
    for (var i = 0; i < antenna_cord.length; i++) {
      points += antenna_cord[i][0] + antenna_cord[i][1] + " ";
    }
    points += "Z"; //end path
    /*
      var points = "";
      for (var i = 0; i < antenna_cord.length; i++) {
        points += antenna_cord[i][0] + "," + antenna_cord[i][1] + " ";
      }
      */

    this.el.setAttribute("d", points);

    this.cport[0].update(x + 10, y + 210);
    this.cport[1].update(x + 16, y + 210);

    this.cport[2].update(x + 35, y + 210);
    this.cport[3].update(x + 41, y + 210);
    /*this.cport[4].update(x + 28.5, y + 210);
    this.cport[5].update(x + 31, y + 210);

    this.cport[6].update(x + 38.5, y + 210);
    this.cport[7].update(x + 41, y + 210);*/
  }
  /**
     *check if point has pressed represent port coordinitors.
     * @param {x of point has user pressed on} x
     * @param {y of point has user pressed on} y
     */
  isPort(event) {
    console.log(event.clientX);
    if (
      this.cports.indexOf(event.clientX) > -1 &&
      (event.clientY > this.eY || event.clientY < this.eY + 20)
    )
      return true;
    return false;
  }
}
