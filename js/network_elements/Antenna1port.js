/**
 * 
 */

class Antenna1Port {
  constructor(id, x, y, name, type) {
    this.url = "http://www.w3.org/2000/svg";
    this.el = this.createElement(x, y);
    this.el.setAttribute("id", id);
    this.el.setAttribute("stroke-width", this.width);
    this.el.setAttribute("stroke", this.Color || "#181818");
    this.type = type = "ANTENNA1PORT";
    this.eX = x;
    this.eY = y;
    this.id = id;
    this.name = name;
    this.isEmpty = true;
    this.cport = [
      new DoublePort("port_" + id, 0, "down", x + 23.5, y + 210, "port_1"),
      /* new DoublePort(id + "_" + 1, 1, "down", x + 26, y + 210, "port_1"),*/
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
      ["M" + (x + 23.5), " " + (y + 200)],
      ["L" + (x + 23.5), " " + (y + 210)],
      /* ["M" + (x + 26), " " + (y + 200)],
      ["L" + (x + 26), " " + (y + 210)],*/
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

  get Id() {
    return this.id;
  }
  set Name(value) {
    this.name = value;
  }

  get Name() {
    return this.name;
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

  update(x, y) {
    this.eX = x;
    this.eY = y;

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
      //port1
      ["M" + (x + 23.5), " " + (y + 200)],
      ["L" + (x + 23.5), " " + (y + 210)],
      /* ["M" + (x + 26), " " + (y + 200)],
      ["L" + (x + 26), " " + (y + 210)],*/
    ];

    var points = "";
    for (var i = 0; i < antenna_cord.length; i++) {
      points += antenna_cord[i][0] + antenna_cord[i][1] + " ";
    }
    points += "Z"; //end path

    this.el.setAttribute("d", points);

    this.cport[0].update(x + 23.5, y + 210);
    // this.cport[1].update(x + 26, y + 210);
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
