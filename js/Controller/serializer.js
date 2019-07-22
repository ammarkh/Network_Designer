/**
 * class for help to serialize array of elements to using as template.
 */

class Serializer {
  constructor(elements, type, name, version) {
    this.type = type;
    if (Array.isArray(elements)) {
      this.elements = elements;
    } else {
      throw "NOT VALID ARRAY EXCEPTION: THE ELEMENTS HAS PASSED NOT ARRAY";
    }

    this.template = "<?xml version='1.0' encoding='UTF-8'>";
    this.name = name;
    this.version = version;
  }

  serialize = () => {
    this.template +=
      "<Template name='" + this.name + "'  ver='" + this.version + "' >";
    this.elements.forEach(item => {
      this.template +=
        "<Element type='" + item.type + "' name='" + item.id + "'>";
      this.template +=
        "<coordinitor X='" + item.eX + "' Y='" + item.eY + "' />";
    });
    this.template += "</Template>";
  };

  get Template() {
    return this.template;
  }
}
