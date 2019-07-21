class DoublePort {
  constructor(id, index, type, x, y, name) {
    this.id = id ;
    this.index = index;
    this.type = type;
    this.pX = x;
    this.pY = y;
    this.linkId = "";
    this.islnk = false;
    this.cable = null;
    this.name = name;
  }

  get Name() {
    return this.name;
  }
  get Id() {
    return this.id;
  }

  get Index() {
    return this.index;
  }
  get Type() {
    return this.type;
  }
  get PY() {
    return this.pY;
  }
  set PY(value) {
    this.pY = value;
  }

  get PX() {
    return this.pX;
  }

  set PX(value) {
    this.pX = value;
  }

  get Link() {
    return this.linkId;
  }
  set Link(value) {
    this.linkId = value;
  }

  get isLinked() {
    return this.islnk;
  }

  set isLinked(value) {
    this.islnk = value;
  }

  set Cble(value) {
    this.cable = value;
  }

  get Cble() {
    return this.cable;
  }

  update(x, y) {
    this.pX = x;
    this.pY = y;

    //update link -------------- >>>>>>
    if (this.islnk) {
      if (this.id == this.cable.FPort) {
        this.cable.updateF(x, y);
      } else {
        this.cable.updateT(x, y);
      }
    }
  }
}
