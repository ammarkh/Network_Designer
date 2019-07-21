/**
 * 
 */

class RRU4 {
  constructor(id, x, y, name) {
    this.url = "http://www.w3.org/2000/svg";
    this.el = this.createElement(x, y);
    this.el.setAttribute("id", id);
    this.el.setAttribute("stroke-width", this.width);
    this.el.setAttribute("stroke", this.Color || "#181818");
    this.id = id;
    this.name = name;
    this.eX = x;
    this.eY = y;
    this.isEmpty = true;
    this.cports = [
      new DoublePort("port-top_1_" + this.id, 0, "top", x + 2, y - 15),
      new DoublePort("port-top_2_" + this.id, 1, "top", x + 12, y - 15),
      new DoublePort("port-top_3_" + this.id, 2, "top", x + 20, y - 15),
      new DoublePort("port-top_4_" + this.id, 3, "top", x + 28, y - 15),
      new DoublePort("port-down_" + this.id, 4, "down", x + 16, y + 60), // x =5
      /*   new DoublePort(this.id + "prt_dwn" + 1, 1, "t", x + 14, y + 60),
      new DoublePort(this.id + "prt_dwn" + 2, 2, "t", x + 23, y + 60),
      new DoublePort(this.id + "prt_dwn" + 3, 3, "t", x + 32, y + 60),*/
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
      ["L" + (x + 35), " " + (y + 50)],
      ["L" + x, " " + (y + 50)],
      ["L" + (x - 5), " " + (y + 40)],
      ["L" + (x - 5), " " + (y - 10)],
      ["L" + x, " " + y],
      ["M" + x, " " + (y + 50)],
      ["L" + x, " " + y],
      ["M" + (x + 18), " " + y],
      ["L" + (x + 18), " " + (y + 25)],
      ["M" + (x + 35), " " + (y + 25)],
      ["L" + (x + 15), " " + (y + 25)],
      ["M" + (x + 15), " " + (y + 50)],
      ["L" + (x + 15), " " + (y + 25)],
      //port top 1
      ["M" + (x + 2), " " + (y - 5)],
      ["L" + (x + 2), " " + (y - 15)],
      // port top 2
      ["M" + (x + 12), " " + (y - 5)],
      ["L" + (x + 12), " " + (y - 15)],
      // port top 3
      ["M" + (x + 20), " " + (y - 5)],
      ["L" + (x + 20), " " + (y - 15)],
      // port top 4
      ["M" + (x + 28), " " + (y - 5)],
      ["L" + (x + 28), " " + (y - 15)],
      // port down 1
      ["M" + (x + 16), " " + (y + 50)],
      ["L" + (x + 16), " " + (y + 60)],
      // port down 2
      /* ["M" + (x + 14), " " + (y + 50)],
      ["L" + (x + 14), " " + (y + 60)],
      // port down 3
      ["M" + (x + 23), " " + (y + 50)],
      ["L" + (x + 23), " " + (y + 60)],
      // port down 2
      ["M" + (x + 32), " " + (y + 50)],
      ["L" + (x + 32), " " + (y + 60)],*/
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

  //return if link is empty;
  get IsEmpty() {
    this.isEmpty = true;
    for (var i = 0; i < this.cports.length; i++) {
      if (this.cports[i].isLinked) {
        this.isEmpty = false;
      }
    }
    return this.isEmpty;
  }

  get Points() {
    return this.el.getAttribute("points");
  }

  get type() {
    return this.el.getAttribute("type");
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

  set width(w = 0.3) {
    this.el.setAttribute("stroke-width", w);
  }

  get width() {
    return this.el.getAttribute("stroke-width") || 0.3;
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

    var antenna_cord = [
      ["M" + x, " " + y],
      ["L" + (x + 35), " " + y],
      ["L" + (x + 30), " " + (y - 10)],
      ["L" + (x - 5), " " + (y - 10)],
      ["L" + x, " " + y],
      ["M" + (x + 35), " " + y],
      ["L" + (x + 35), " " + (y + 50)],
      ["L" + x, " " + (y + 50)],
      ["L" + (x - 5), " " + (y + 40)],
      ["L" + (x - 5), " " + (y - 10)],
      ["L" + x, " " + y],
      ["M" + x, " " + (y + 50)],
      ["L" + x, " " + y],
      ["M" + (x + 18), " " + y],
      ["L" + (x + 18), " " + (y + 25)],
      ["M" + (x + 35), " " + (y + 25)],
      ["L" + (x + 15), " " + (y + 25)],
      ["M" + (x + 15), " " + (y + 50)],
      ["L" + (x + 15), " " + (y + 25)],
      //port top 1
      ["M" + (x + 2), " " + (y - 5)],
      ["L" + (x + 2), " " + (y - 15)],
      // port top 2
      ["M" + (x + 12), " " + (y - 5)],
      ["L" + (x + 12), " " + (y - 15)],
      // port top 3
      ["M" + (x + 20), " " + (y - 5)],
      ["L" + (x + 20), " " + (y - 15)],
      // port top 4
      ["M" + (x + 28), " " + (y - 5)],
      ["L" + (x + 28), " " + (y - 15)],
      // port down 1
      ["M" + (x + 16), " " + (y + 50)],
      ["L" + (x + 16), " " + (y + 60)],
      // port down 2
      /*  ["M" + (x + 14), " " + (y + 50)],
      ["L" + (x + 14), " " + (y + 60)],
      // port down 3
      ["M" + (x + 23), " " + (y + 50)],
      ["L" + (x + 23), " " + (y + 60)],
      // port down 2
      ["M" + (x + 32), " " + (y + 50)],
      ["L" + (x + 32), " " + (y + 60)],*/
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

    //update port
    this.cports[0].update(x + 2, y - 15);
    this.cports[1].update(x + 12, y - 15);
    this.cports[2].update(x + 20, y - 15);
    this.cports[3].update(x + 28, y - 15);

    this.cports[4].update(x + 16, y + 60);
    /*this.cports[5].update(x + 14, y + 60);
    this.cports[6].update(x + 23, y + 60);
    this.cports[7].update(x + 32, y + 60);*/
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
