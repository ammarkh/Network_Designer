/**
 * 
 */

class WRFU {
  constructor(id, x, y, name, type) {
    this.url = "http://www.w3.org/2000/svg";
    this.el = this.createElement(x, y);
    this.el.setAttribute("id", id);
    this.el.setAttribute("stroke-width", this.width);
    this.el.setAttribute("stroke", this.Color || "#181818");
    this.id = id;
    this.type = type = "RRU WRFU";
    this.name = name;
    this.eX = x;
    this.eY = y;
    this.isEmpty = true;
    this.cport = [
      /* new DoublePort(this.id + "prt1_l" + 0, 0, "l", x - 10, y + 12.5),*/
      new DoublePort(this.id + "prt1_l" + 1, 1, "l", x - 10, y + 25),
      /* new DoublePort(this.id + "prt1_l" + 2, 2, "l", x - 10, y + 37.5),
      new DoublePort(this.id + "prt1_l" + 3, 3, "l", x - 10, y + 50),*/
      new DoublePort(this.id + "prt1_l" + 4, 4, "l", x - 10, y + 62.5),
      /* new DoublePort(this.id + "prt1_l" + 5, 5, "l", x - 10, y + 75),

      new DoublePort(this.id + "prt1_r" + 0, 6, "l", x + 45, y + 12.5),
      new DoublePort(this.id + "prt1_r" + 1, 7, "l", x + 45, y + 25),*/
      new DoublePort(this.id + "prt1_r" + 2, 8, "l", x + 45, y + 37.5),
      /* new DoublePort(this.id + "prt1_r" + 3, 9, "l", x + 45, y + 50),
      new DoublePort(this.id + "prt1_r" + 4, 10, "l", x + 45, y + 62.5),
      new DoublePort(this.id + "prt1_r" + 5, 11, "l", x + 45, y + 75),*/
    ];
  }

  createElement(x, y) {
    var antenna_cord = [
      ["M" + x, " " + y],
      ["L" + (x + 35), " " + y],
      ["L" + (x + 30), " " + (y - 10)],
      ["L" + (x - 5), " " + (y - 10)],
      ["L" + x, " " + y],
      ["M" + (x + 35), " " + y],
      ["L" + (x + 35), " " + (y + 100)],
      ["L" + x, " " + (y + 100)],
      ["L" + (x - 5), " " + (y + 90)],
      ["L" + (x - 5), " " + (y - 10)],
      ["L" + x, " " + y],
      ["M" + x, " " + (y + 100)],
      ["L" + x, " " + y],
      ["M" + x, " " + (y + 20)],
      ["L" + (x + 35), " " + (y + 20)],
      //port left 1
      /* ["M" + x, " " + (y + 12.5)],
      ["L" + (x - 10), " " + (y + 12.5)],*/
      // port left 2
      ["M" + x, " " + (y + 25)],
      ["L" + (x - 10), " " + (y + 25)],
      // port left 3
      /* ["M" + x, " " + (y + 37.5)],
      ["L" + (x - 10), " " + (y + 37.5)],
      // port left 4
      ["M" + x, " " + (y + 50)],
      ["L" + (x - 10), " " + (y + 50)],*/
      // port left 5
      ["M" + x, " " + (y + 62.5)],
      ["L" + (x - 10), " " + (y + 62.5)],
      // port left 5
      /* ["M" + x, " " + (y + 75)],
      ["L" + (x - 10), " " + (y + 75)],*/
      // port right 1
      /*   ["M" + (x + 35), " " + (y + 12.5)],
      ["L" + (x + 45), " " + (y + 12.5)],
      // port right 2
      ["M" + (x + 35), " " + (y + 25)],
      ["L" + (x + 45), " " + (y + 25)],*/
      // port right 3
      ["M" + (x + 35), " " + (y + 37.5)],
      ["L" + (x + 45), " " + (y + 37.5)],
      // port right 4
      /*    ["M" + (x + 35), " " + (y + 50)],
      ["L" + (x + 45), " " + (y + 50)],
      // port right 5
      ["M" + (x + 35), " " + (y + 62.5)],
      ["L" + (x + 45), " " + (y + 62.5)],
      // port right 6
      ["M" + (x + 35), " " + (y + 75)],
      ["L" + (x + 45), " " + (y + 75)],*/
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

  set Name(value) {
    this.el.setAttribute("name", value);
  }

  get Name() {
    return this.el.getAttribute("name");
  }
  get Points() {
    return this.el.getAttribute("points");
  }

  get Type(){
    return this.type;
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

  get Type() {
    return this.type;
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
    this.eX = x;
    this.eY = y;

    var antenna_cord = [
      ["M" + x, " " + y],
      ["L" + (x + 35), " " + y],
      ["L" + (x + 30), " " + (y - 10)],
      ["L" + (x - 5), " " + (y - 10)],
      ["L" + x, " " + y],
      ["M" + (x + 35), " " + y],
      ["L" + (x + 35), " " + (y + 100)],
      ["L" + x, " " + (y + 100)],
      ["L" + (x - 5), " " + (y + 90)],
      ["L" + (x - 5), " " + (y - 10)],
      ["L" + x, " " + y],
      ["M" + x, " " + (y + 100)],
      ["L" + x, " " + y],
      ["M" + x, " " + (y + 20)],
      ["L" + (x + 35), " " + (y + 20)],
      //port left 1
      /* ["M" + x, " " + (y + 12.5)],
      ["L" + (x - 10), " " + (y + 12.5)],*/
      // port left 2
      ["M" + x, " " + (y + 25)],
      ["L" + (x - 10), " " + (y + 25)],
      // port left 3
      /* ["M" + x, " " + (y + 37.5)],
      ["L" + (x - 10), " " + (y + 37.5)],
      // port left 4
      ["M" + x, " " + (y + 50)],
      ["L" + (x - 10), " " + (y + 50)],*/
      // port left 5
      ["M" + x, " " + (y + 62.5)],
      ["L" + (x - 10), " " + (y + 62.5)],
      // port left 5
      /* ["M" + x, " " + (y + 75)],
      ["L" + (x - 10), " " + (y + 75)],*/
      // port right 1
      /*   ["M" + (x + 35), " " + (y + 12.5)],
      ["L" + (x + 45), " " + (y + 12.5)],
      // port right 2
      ["M" + (x + 35), " " + (y + 25)],
      ["L" + (x + 45), " " + (y + 25)],*/
      // port right 3
      ["M" + (x + 35), " " + (y + 37.5)],
      ["L" + (x + 45), " " + (y + 37.5)],
      // port right 4
      /*    ["M" + (x + 35), " " + (y + 50)],
      ["L" + (x + 45), " " + (y + 50)],
      // port right 5
      ["M" + (x + 35), " " + (y + 62.5)],
      ["L" + (x + 45), " " + (y + 62.5)],
      // port right 6
      ["M" + (x + 35), " " + (y + 75)],
      ["L" + (x + 45), " " + (y + 75)],*/
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

    // this.cport[0].update(x - 10, y + 12.5);
    this.cport[0].update(x - 10, y + 25);
    // this.cport[2].update(x - 10, y + 37.5);
    // this.cport[3].update(x - 10, y + 50);
    this.cport[1].update(x - 10, y + 62.5);
    // this.cport[5].update(x - 10, y + 75);

    // this.cport[6].update(x + 45, y + 12.5);
    // this.cport[7].update(x + 45, y + 25);
    this.cport[2].update(x + 45, y + 37.5);
    /* this.cport[9].update(x + 45, y + 50);
    this.cport[10].update(x + 45, y + 62.5);
    this.cport[11].update(x + 45, y + 75);*/
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
