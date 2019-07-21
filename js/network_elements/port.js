/**
 * This Is A Open Source Technology Under the Name radio Design to Help for build Network.
 */

class Port {
  constructor(id, index, x, y) {
    this.id = id;
    this.pX = x;
    this.pY = y;
    this.index = index;
    this.linkId = "";
    this.islink = false;
    this.cable = null;
  }

  get Id() {
    return this.id;
  }

  get PX() {
    return this.pX;
  }
  get PY() {
    return this.pY;
  }
  get Index() {
    return this.index;
  }

  set PX(value) {
    this.pX = value;
  }

  set PY(value) {
    this.pY = value;
  }

  set Link(value) {
    this.linkId = value;
  }
  get Link() {
    return this.linkId;
  }

  set isLink(value) {
    this.islink = true;
  }

  get isLink() {
    return this.islink;
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
    console.log(this.id + "" + this.Cble.FPort);
    //link update
    if (this.islink) {
      console.log(this.id == this.cable.FPort);
      if (this.id == this.cable.FPort) {
        this.cable.updateF(x, y);
      } else {
        this.cable.updateT(x, y);
      }
    }
  }
}
