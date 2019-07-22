/**
 * class for help to serialize array of elements to using as template.
 */

class TemplateSerializer {
  constructor(elements, type, name, version) {
    this.type = type;
    if (Array.isArray(elements)) {
      this.elements = elements;
    } else {
      throw "NOT VALID ARRAY EXCEPTION: THE ELEMENTS HAS PASSED NOT ARRAY";
    }

    this.template = "<?xml version='1.0' encoding='UTF-8' ?>";
    this.name = name;
    this.version = version;
  }

  serialize = () => {
    this.template +=
      "<Template name='" + this.name + "'  ver='" + this.version + "' >";
    this.elements.forEach(item => {
      if (item.type != "cable") {
        this.template +=
          "<Element type='" + item.type + "' name='" + item.id + "'>";
        this.template +=
          "<coordinitor X='" + item.eX + "' Y='" + item.eY + "' />";
        var x = this.serializePorts(item);

        this.template += this.serializePorts(item);
        this.template += "</Element>";
      }
    });
    this.template += "</Template>";
  };

  serializePorts(item) {
    if (item.type != "cable") {
      if (!item.IsEmpty) {
        var ports = item.port;
        var port = ""; //port
        for (i = 0; i < ports.length; i++) {
          if (ports[i].isLinked) {
            port = `<port name='${ports[i].id}' index='${i}'> \n

            ${this.serializeCable(ports[i])} \n

            </port>`;
          }
        }
        return port;
      } else return null;
    }
  }

  serializeCable(port) {
    var cable = port.Cble;
    var cableSer = `<cable id='${cable.id}'> \n
                      <coordinitor FX="${cable.fX}" TX="${cable.tX}" FY="${cable.fY}" TY="${cable.tY}" />
                      <from id="${cable.FElement}" port_id="${cable.FPort}"></from> \n
                      <to id="${cable.TElement}" port_id="${cable.TPort}"></to>\n
                    </cable>`;

    return cableSer;
  }

  get Template() {
    return this.template;
  }
}
