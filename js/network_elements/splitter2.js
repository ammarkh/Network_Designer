class Splitter {
  constructor(id, x, y) {
    this.url = "http://www.w3.org/2000/svg";
    this.el = this.createElement(x, y);
    this.el.setAttribute("id", id);
    this.el.setAttribute("stroke-width", this.width);
    this.el.setAttribute("stroke", this.Color || "#181818");
    this.id = id;
    this.eX = x;
    this.eY = y;

    this.cports = [
      new DoublePort(this.id + "prt_top", 0, "top", x + 15, y - 15),
      new DoublePort(this.id + "prt_dwn_" + 1, 1, "down", x + 5, y + 43),
      new DoublePort(this.id + "prt_dwn_" + 2, 2, "down", x + 15, y + 43),
      new DoublePort(this.id + "prt_dwn_" + 3, 3, "down", x + 25, y + 43),
    ];
  }

  //create element
  createElement(x, y) {
    var bts_cord = [
      ["M" + x, " " + y],
      ["L" + (x + 33), " " + y],
      ["L" + (x + 25), " " + (y - 10)],
      ["L" + (x - 5), " " + (y - 10)],
      ["L" + x, " " + y],
      ["M" + (x + 33), " " + y],
      ["L" + (x + 33), " " + (y + 33)],
      ["L" + x, " " + (y + 33)],
      ["L" + (x - 5), " " + (y + 20)],
      ["L" + (x - 5), " " + (y - 10)],
      ["L" + x, " " + y],
      ["M" + x, " " + (y + 33)],
      ["L" + x, " " + y],
      //port up
      ["M" + (x + 15), " " + (y - 5)],
      ["L" + (x + 15), " " + (y - 15)],
      //port 1
      ["M" + (x + 5), " " + (y + 33)],
      ["L" + (x + 5), " " + (y + 43)],
      //port 2
      ["M" + (x + 15), " " + (y + 33)],
      ["L" + (x + 15), " " + (y + 43)],
      //port 2
      ["M" + (x + 25), " " + (y + 33)],
      ["L" + (x + 25), " " + (y + 43)],
    ];

    var points = "";
    for (var i = 0; i < bts_cord.length; i++) {
      points += bts_cord[i][0] + bts_cord[i][1] + " ";
    }

    points += "Z";

    var bts_el = document.createElementNS(this.url, "path");
    bts_el.setAttribute("d", points);

    return bts_el;
  }

  get Points() {
    return this.el.getAttribute("points");
  }

  get type() {
    return this.el.getAttribute("type");
  }

  set type(value) {
    this.el.setAttribute("type", value);
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

  set port(value) {
    this.cports.push(value);
  }
  get port() {
    return this.cports;
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

    var bts_cord = [
      ["M" + x, " " + y],
      ["L" + (x + 33), " " + y],
      ["L" + (x + 25), " " + (y - 10)],
      ["L" + (x - 5), " " + (y - 10)],
      ["L" + x, " " + y],
      ["M" + (x + 33), " " + y],
      ["L" + (x + 33), " " + (y + 33)],
      ["L" + x, " " + (y + 33)],
      ["L" + (x - 5), " " + (y + 20)],
      ["L" + (x - 5), " " + (y - 10)],
      ["L" + x, " " + y],
      ["M" + x, " " + (y + 33)],
      ["L" + x, " " + y],
      //port up
      ["M" + (x + 15), " " + (y - 5)],
      ["L" + (x + 15), " " + (y - 15)],
      //port 1
      ["M" + (x + 5), " " + (y + 33)],
      ["L" + (x + 5), " " + (y + 43)],
      //port 2
      ["M" + (x + 15), " " + (y + 33)],
      ["L" + (x + 15), " " + (y + 43)],
      //port 2
      ["M" + (x + 25), " " + (y + 33)],
      ["L" + (x + 25), " " + (y + 43)],
    ];

    var points = "";
    for (var i = 0; i < bts_cord.length; i++) {
      points += bts_cord[i][0] + bts_cord[i][1] + " ";
    }
    points += "Z"; //end path

    this.el.setAttribute("d", points);

    //update port
    this.cports[0].update(x + 15, y - 15);
    this.cports[1].update(x + 5, y + 43);
    this.cports[2].update(x + 15, y + 43);
    this.cports[3].update(x + 25, y + 43);
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
