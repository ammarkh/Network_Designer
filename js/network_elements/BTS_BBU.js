class BTS_BBU {
  constructor(id, x, y, name, type) {
    this.url = "http://www.w3.org/2000/svg";
    this.el = this.createElement(x, y);
    this.el.setAttribute("id", id);
    this.el.setAttribute("stroke-width", this.width);
    this.el.setAttribute("stroke", this.Color || "#181818");
    this.name = name;
    this.type = type | "BTS-BBU";
    this.id = id;
    this.eX = x;
    this.eY = y;
    this.isEmpty = true;
    this.cport = [
      new DoublePort("port_1_" + this.id, 0, "down", x + 2, y + 208),
      new DoublePort("port_2_" + this.id, 1, "down", x + 7.5, y + 208),
      new DoublePort("port_3_" + this.id, 2, "down", x + 13, y + 208),
      new DoublePort("port_4_" + this.id, 3, "down", x + 18.5, y + 208),
      new DoublePort("port_5_" + this.id, 4, "down", x + 24, y + 208),
      new DoublePort("port_6_" + this.id, 5, "down", x + 29.5, y + 208),
      new DoublePort("port_7_" + this.id, 6, "down", x + 35, y + 208),
      new DoublePort("port_8_" + this.id, 7, "down", x + 41.5, y + 208),
      new DoublePort("port_9_" + this.id, 8, "down", x + 46, y + 208),
      new DoublePort("port_10_" + this.id, 9, "down", x + 51.5, y + 208),
      new DoublePort("port_11_" + this.id, 10, "down", x + 56, y + 208),
      new DoublePort("port_12_" + this.id, 11, "down", x + 61.5, y + 208),
      new DoublePort("port_13_" + this.id, 12, "down", x + 67, y + 208),
      new DoublePort("port_14_" + this.id, 13, "down", x + 72.5, y + 208),
      new DoublePort("port_15_" + this.id, 14, "down", x + 78, y + 208),
      new DoublePort("port_16_" + this.id, 15, "down", x + 83.5, y + 208),
      new DoublePort("port_17_" + this.id, 16, "down", x + 89, y + 208),
      new DoublePort("port_18_" + this.id, 17, "down", x + 94.5, y + 208),
    ];
  }

  //create element
  createElement(x, y) {
    var bts_cord = [
      ["M" + x, " " + y],
      ["L" + (x + 100), " " + y],
      ["L" + (x + 95), " " + (y - 20)],
      ["L" + (x - 5), " " + (y - 20)],
      ["L" + x, " " + y],
      ["M" + (x + 100), " " + y],
      ["L" + (x + 100), " " + (y + 200)],
      ["L" + x, " " + (y + 200)],
      ["L" + (x - 5), " " + (y + 180)],
      ["L" + (x - 5), " " + (y - 20)],
      ["L" + x, " " + y],
      ["M" + x, " " + (y + 200)],
      ["L" + x, " " + y],
      ["M" + x, " " + (y + 100)],
      ["L" + (x + 100), " " + (y + 100)],
      ["M" + (x + 80), " " + (y + 100)],
      ["L" + (x + 80), " " + (y + 200)],
      ["M" + (x + 60), " " + (y + 100)],
      ["L" + (x + 60), " " + (y + 200)],
      ["M" + (x + 40), " " + (y + 100)],
      ["L" + (x + 40), " " + (y + 200)],
      ["M" + (x + 20), " " + (y + 100)],
      ["L" + (x + 20), " " + (y + 200)],
      //port 1
      ["M" + (x + 2), " " + (y + 200)],
      ["L" + (x + 2), " " + (y + 208)],
      //port 2
      ["M" + (x + 7.5), " " + (y + 200)],
      ["L" + (x + 7.5), " " + (y + 208)],
      //port 3
      ["M" + (x + 13), " " + (y + 200)],
      ["L" + (x + 13), " " + (y + 208)],
      //port 4
      ["M" + (x + 18.5), " " + (y + 200)],
      ["L" + (x + 18.5), " " + (y + 208)],
      //port 5
      ["M" + (x + 24), " " + (y + 200)],
      ["L" + (x + 24), " " + (y + 208)],
      //port 6
      ["M" + (x + 29.5), " " + (y + 200)],
      ["L" + (x + 29.5), " " + (y + 208)],

      //port 7
      ["M" + (x + 35), " " + (y + 200)],
      ["L" + (x + 35), " " + (y + 208)],
      //port 8
      ["M" + (x + 41.5), " " + (y + 200)],
      ["L" + (x + 41.5), " " + (y + 208)],
      //port 9
      ["M" + (x + 46), " " + (y + 200)],
      ["L" + (x + 46), " " + (y + 208)],
      //port 10
      ["M" + (x + 51.5), " " + (y + 200)],
      ["L" + (x + 51.5), " " + (y + 208)],
      //port 11
      ["M" + (x + 56), " " + (y + 200)],
      ["L" + (x + 56), " " + (y + 208)],
      //port 12
      ["M" + (x + 61.5), " " + (y + 200)],
      ["L" + (x + 61.5), " " + (y + 208)],
      //port 13
      ["M" + (x + 67), " " + (y + 200)],
      ["L" + (x + 67), " " + (y + 208)],
      //port 14
      ["M" + (x + 72.5), " " + (y + 200)],
      ["L" + (x + 72.5), " " + (y + 208)],
      //port 15
      ["M" + (x + 78), " " + (y + 200)],
      ["L" + (x + 78), " " + (y + 208)],
      //port 16
      ["M" + (x + 83.5), " " + (y + 200)],
      ["L" + (x + 83.5), " " + (y + 208)],
      //port 17
      ["M" + (x + 89), " " + (y + 200)],
      ["L" + (x + 89), " " + (y + 208)],
      //port 18
      ["M" + (x + 94.5), " " + (y + 200)],
      ["L" + (x + 94.5), " " + (y + 208)],
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

  get Type() {
    return this.type;
  }

  set Type(value) {
    this.type = value;
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
      ["L" + (x + 100), " " + y],
      ["L" + (x + 95), " " + (y - 20)],
      ["L" + (x - 5), " " + (y - 20)],
      ["L" + x, " " + y],
      ["M" + (x + 100), " " + y],
      ["L" + (x + 100), " " + (y + 200)],
      ["L" + x, " " + (y + 200)],
      ["L" + (x - 5), " " + (y + 180)],
      ["L" + (x - 5), " " + (y - 20)],
      ["L" + x, " " + y],
      ["M" + x, " " + (y + 200)],
      ["L" + x, " " + y],
      ["M" + x, " " + (y + 100)],
      ["L" + (x + 100), " " + (y + 100)],
      ["M" + (x + 80), " " + (y + 100)],
      ["L" + (x + 80), " " + (y + 200)],
      ["M" + (x + 60), " " + (y + 100)],
      ["L" + (x + 60), " " + (y + 200)],
      ["M" + (x + 40), " " + (y + 100)],
      ["L" + (x + 40), " " + (y + 200)],
      ["M" + (x + 20), " " + (y + 100)],
      ["L" + (x + 20), " " + (y + 200)],
      //port 1
      ["M" + (x + 2), " " + (y + 200)],
      ["L" + (x + 2), " " + (y + 208)],
      //port 2
      ["M" + (x + 7.5), " " + (y + 200)],
      ["L" + (x + 7.5), " " + (y + 208)],
      //port 3
      ["M" + (x + 13), " " + (y + 200)],
      ["L" + (x + 13), " " + (y + 208)],
      //port 4
      ["M" + (x + 18.5), " " + (y + 200)],
      ["L" + (x + 18.5), " " + (y + 208)],
      //port 5
      ["M" + (x + 24), " " + (y + 200)],
      ["L" + (x + 24), " " + (y + 208)],
      //port 6
      ["M" + (x + 29.5), " " + (y + 200)],
      ["L" + (x + 29.5), " " + (y + 208)],

      //port 7
      ["M" + (x + 35), " " + (y + 200)],
      ["L" + (x + 35), " " + (y + 208)],
      //port 8
      ["M" + (x + 41.5), " " + (y + 200)],
      ["L" + (x + 41.5), " " + (y + 208)],
      //port 9
      ["M" + (x + 47), " " + (y + 200)],
      ["L" + (x + 47), " " + (y + 208)],
      //port 10
      ["M" + (x + 52.5), " " + (y + 200)],
      ["L" + (x + 52.5), " " + (y + 208)],
      //port 11
      ["M" + (x + 58), " " + (y + 200)],
      ["L" + (x + 58), " " + (y + 208)],
      //port 12
      ["M" + (x + 62.5), " " + (y + 200)],
      ["L" + (x + 62.5), " " + (y + 208)],
      //port 13
      ["M" + (x + 68), " " + (y + 200)],
      ["L" + (x + 68), " " + (y + 208)],
      //port 14
      ["M" + (x + 73.5), " " + (y + 200)],
      ["L" + (x + 73.5), " " + (y + 208)],
      //port 15
      ["M" + (x + 79), " " + (y + 200)],
      ["L" + (x + 79), " " + (y + 208)],
      //port 16
      ["M" + (x + 84.5), " " + (y + 200)],
      ["L" + (x + 84.5), " " + (y + 208)],
      //port 17
      ["M" + (x + 90), " " + (y + 200)],
      ["L" + (x + 90), " " + (y + 208)],
      //port 18
      ["M" + (x + 95.5), " " + (y + 200)],
      ["L" + (x + 95.5), " " + (y + 208)],
    ];

    var points = "";
    for (var i = 0; i < bts_cord.length; i++) {
      points += bts_cord[i][0] + bts_cord[i][1] + " ";
    }
    points += "Z"; //end path

    this.el.setAttribute("d", points);

    this.cport[0].update(x + 2, y + 208);
    this.cport[1].update(x + 7.5, y + 208);

    this.cport[2].update(x + 13, y + 208);
    this.cport[3].update(x + 18.5, y + 208);
    this.cport[4].update(x + 24, y + 208);
    this.cport[5].update(x + 29.5, y + 208);

    this.cport[6].update(x + 35, y + 208);
    this.cport[7].update(x + 41.5, y + 208);
    this.cport[8].update(x + 47, y + 208);
    this.cport[9].update(x + 52.5, y + 208);

    this.cport[10].update(x + 58, y + 208);
    this.cport[11].update(x + 62.5, y + 208);

    this.cport[12].update(x + 68, y + 208);
    this.cport[13].update(x + 73.5, y + 208);

    this.cport[14].update(x + 79, y + 208);
    this.cport[15].update(x + 84.5, y + 208);

    this.cport[16].update(x + 90, y + 208);
    this.cport[17].update(x + 95.5, y + 208);
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
