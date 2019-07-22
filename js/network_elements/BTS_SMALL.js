class BTS_SMALL {
  constructor(id, x, y, name, type) {
    this.url = "http://www.w3.org/2000/svg";
    this.el = this.createElement(x, y);
    this.el.setAttribute("id", id);
    this.el.setAttribute("stroke-width", this.width);
    this.el.setAttribute("stroke", this.Color || "#181818");
    this.id = id;
    this.type = type = "BTS-SMALL-CELL";
    this.name = name;
    this.eX = x;
    this.eY = y;
    this.isEmpty = true;
    this.cport = [
      new DoublePort("port_1_" + this.id, 0, "down", x + 25, y + 77),
      new DoublePort("port_2_" + this.id, 1, "down", x + 40, y + 77),
      /* new DoublePort(this.id + "prt_" + 2, 2, "down", x + 13, y + 77),
      new DoublePort(this.id + "prt_" + 3, 3, "down", x + 25, y + 77),
      new DoublePort(this.id + "prt_" + 4, 4, "down", x + 31, y + 77),
      new DoublePort(this.id + "prt_" + 5, 5, "down", x + 37, y + 77),
      new DoublePort(this.id + "prt_" + 6, 6, "down", x + 42, y + 77),
      new DoublePort(this.id + "prt_" + 7, 7, "down", x + 48, y + 77),
      new DoublePort(this.id + "prt_" + 8, 8, "down", x + 52, y + 77),
      new DoublePort(this.id + "prt_" + 9, 9, "down", x + 54, y + 77),
      new DoublePort(this.id + "prt_" + 10, 10, "down", x + 60, y + 77),
      new DoublePort(this.id + "prt_" + 11, 11, "down", x + 66, y + 77),*/
    ];
  }

  //create element
  createElement(x, y) {
    var bts_cord = [
      ["M" + x, " " + y],
      ["L" + (x + 67), " " + y],
      ["L" + (x + 60), " " + (y - 20)],
      ["L" + (x - 5), " " + (y - 20)],
      ["L" + x, " " + y],
      ["M" + (x + 67), " " + y],
      ["L" + (x + 67), " " + (y + 67)],
      ["L" + x, " " + (y + 67)],
      ["L" + (x - 5), " " + (y + 50)],
      ["L" + (x - 5), " " + (y - 20)],
      ["L" + x, " " + y],
      ["M" + x, " " + (y + 67)],
      ["L" + x, " " + y],
      //port 1
      /* ["M" + (x + 1), " " + (y + 67)],
      ["L" + (x + 1), " " + (y + 77)],
      //port 2
      ["M" + (x + 7), " " + (y + 67)],
      ["L" + (x + 7), " " + (y + 77)],
      //port 3
      ["M" + (x + 13), " " + (y + 67)],
      ["L" + (x + 13), " " + (y + 77)],
      //port 4
      ["M" + (x + 19), " " + (y + 67)],
      ["L" + (x + 19), " " + (y + 77)],
      //port 5
      ["M" + (x + 25), " " + (y + 67)],
      ["L" + (x + 25), " " + (y + 77)],
      //port 6
      ["M" + (x + 31), " " + (y + 67)],
      ["L" + (x + 31), " " + (y + 77)],

      //port 7
      ["M" + (x + 37), " " + (y + 67)],
      ["L" + (x + 37), " " + (y + 77)],
      //port 8
      ["M" + (x + 42), " " + (y + 67)],
      ["L" + (x + 42), " " + (y + 77)],
      //port 9
      ["M" + (x + 48), " " + (y + 67)],
      ["L" + (x + 48), " " + (y + 77)],
      //port 10
      ["M" + (x + 54), " " + (y + 67)],
      ["L" + (x + 54), " " + (y + 77)],
      //port 11
      ["M" + (x + 60), " " + (y + 67)],
      ["L" + (x + 60), " " + (y + 77)],
      //port 12
      ["M" + (x + 66), " " + (y + 67)],
      ["L" + (x + 66), " " + (y + 77)],*/
      //port 3
      ["M" + (x + 25), " " + (y + 67)],
      ["L" + (x + 25), " " + (y + 77)],
      //port 4
      ["M" + (x + 40), " " + (y + 67)],
      ["L" + (x + 40), " " + (y + 77)],
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

  get Points() {
    return this.el.getAttribute("points");
  }

  get Type() {
    return this.type;
  }

  set Type(value) {
    this.type = type;
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

    var bts_cord = [
      ["M" + x, " " + y],
      ["L" + (x + 67), " " + y],
      ["L" + (x + 60), " " + (y - 20)],
      ["L" + (x - 5), " " + (y - 20)],
      ["L" + x, " " + y],
      ["M" + (x + 67), " " + y],
      ["L" + (x + 67), " " + (y + 67)],
      ["L" + x, " " + (y + 67)],
      ["L" + (x - 5), " " + (y + 50)],
      ["L" + (x - 5), " " + (y - 20)],
      ["L" + x, " " + y],
      ["M" + x, " " + (y + 67)],
      ["L" + x, " " + y],
      //port 1
      ["M" + (x + 25), " " + (y + 67)],
      ["L" + (x + 25), " " + (y + 77)],
      //port 2
      ["M" + (x + 40), " " + (y + 67)],
      ["L" + (x + 40), " " + (y + 77)],
      //port 3
      /*["M" + (x + 13), " " + (y + 67)],
      ["L" + (x + 13), " " + (y + 77)],
      //port 4
      ["M" + (x + 19), " " + (y + 67)],
      ["L" + (x + 19), " " + (y + 77)],
      //port 5
      ["M" + (x + 25), " " + (y + 67)],
      ["L" + (x + 25), " " + (y + 77)],
      //port 6
      ["M" + (x + 31), " " + (y + 67)],
      ["L" + (x + 31), " " + (y + 77)],

      //port 7
      ["M" + (x + 37), " " + (y + 67)],
      ["L" + (x + 37), " " + (y + 77)],
      //port 8
      ["M" + (x + 42), " " + (y + 67)],
      ["L" + (x + 42), " " + (y + 77)],
      //port 9
      ["M" + (x + 48), " " + (y + 67)],
      ["L" + (x + 48), " " + (y + 77)],
      //port 10
      ["M" + (x + 54), " " + (y + 67)],
      ["L" + (x + 54), " " + (y + 77)],
      //port 11
      ["M" + (x + 60), " " + (y + 67)],
      ["L" + (x + 60), " " + (y + 77)],
      //port 12
      ["M" + (x + 66), " " + (y + 67)],
      ["L" + (x + 66), " " + (y + 77)],*/
    ];

    var points = "";
    for (var i = 0; i < bts_cord.length; i++) {
      points += bts_cord[i][0] + bts_cord[i][1] + " ";
    }
    points += "Z"; //end path

    this.el.setAttribute("d", points);

    this.cport[0].update(x + 25, y + 77);
    this.cport[1].update(x + 40, y + 77);

    /*  this.cport[2].update(x + 13, y + 77);
    this.cport[3].update(x + 20, y + 77);
    this.cport[4].update(x + 25, y + 77);
    this.cport[5].update(x + 31, y + 77);

    this.cport[6].update(x + 37, y + 77);
    this.cport[7].update(x + 42, y + 77);
    this.cport[8].update(x + 48, y + 77);
    this.cport[9].update(x + 54, y + 77);

    this.cport[10].update(x + 60, y + 77);
    this.cport[11].update(x + 66, y + 77);*/
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

BTS_BBU.prototype = {};
