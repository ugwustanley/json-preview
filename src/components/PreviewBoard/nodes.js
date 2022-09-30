class Nodes {
  constructor(json) {
    this.json = json;
    this.position = { x: 0, y: 0 };
    this.nodes = [];
    this.edges = [];
    this.edgeType = "default";
    this.animated = false;
  }
  getNodes(input = this.json, parentID = "11", name = "Root") {
    if (parentID === "11") {
      this.nodes.push({
        id: "11",
        data: {
          label: (
            <div style={{ padding: ".7rem 0" }}>
              <b
                style={{
                  background: "#5C4599",
                  padding: ".7rem .5rem",
                  marginRight: "1rem",
                }}
              >{`./`}</b>
              <i style={{ padding: ".7rem 0" }}>Root</i>
            </div>
          ),
        },
        position: this.position,
        style: {
          background: "#011627",
          fontSize: ".8rem", 
          textAlign: "left",
          color: "teal",
          border: "1px solid #5C4599",
          minWidth: 220,
          padding: 0,
          textOverflow: "ellipsis !important",
          whiteSpace: "nowrap",
          overflow: "hidden",
        },
      });
    }
    if (typeof input === "object" && !Array.isArray(input)) {
      Object.keys(input).map((key, index) => {
        if (typeof input[key] === "object" || Array.isArray(input[key])) {
          const id = `${parentID + 1}${index + 1} ${
            Math.random() * 10000
          }`;

          this.nodes.push({
            id,
            data: {
              label: (
                <div style={{ padding: ".7rem 0" }}>
                  <b
                    style={{
                      background: "#5C4599",
                      padding: ".7rem .5rem",
                      marginRight: "1rem",
                    }}
                  >
                    {Array.isArray(input[key]) ? `[]` : `{}`}
                  </b>
                  <i
                    style={{
                      //   padding: ".7rem 0",
                      width: "210px",
                      textOverflow: "ellipsis",
                      overflow: "hidden",
                      whiteSpace: "nowrap",
                      display: "inline-block",
                      lineHeight: "1",
                    }}
                  >
                    {key}
                  </i>
                </div>
              ),
            },
            position: this.position,
            style: {
              background: "#011627",
              fontSize: ".8rem",
              textAlign: "left",
              color: "teal",
              border: "1px solid #5C4599",
              minWidth: 280,
              padding: 0,
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
              overflow: "hidden",
            },
          });

          this.edges.push({
            id: id + parentID,
            source: parentID,
            target: id,
            type: this.edgeType,
            animated: this.animated,
          });

          this.getNodes(input[key], id, key);
        } else {
          const id = `${parentID + 1}${index + 1} ${
            Math.random() * 10000
          }`;

          this.nodes.push({
            id,
            data: {
              label: (
                <div style={{ padding: ".7rem 0" }}>
                  <b
                    style={{
                      background: "#5C4599",
                      padding: ".7rem .5rem",
                      marginRight: "1rem",
                    }}
                  >{`<>`}</b>

                  <span
                    style={{
                      width: "210px",
                      textOverflow: "ellipsis",
                      overflow: "hidden",
                      whiteSpace: "nowrap",
                      display: "inline-block",
                      lineHeight: "1",
                    }}
                  >
                    <i style={{ padding: ".7rem 0" }}>{key}: </i>
                    <i
                      style={
                        typeof input[key] === "number"
                          ? { color: "tomato" }
                          : { color: "yellow" }
                      }
                    >
                      {`${input[key]}`}
                    </i>
                  </span>
                </div>
              ),
            },
            position: this.position,
            style: {
              background: "#011627",
              fontSize: ".8rem",
              fontFamily: " 'Noto Sans Mono', monospace",
              textAlign: "left",
              color: "teal",
              border: "1px solid #5C4599",
              width: 280,
              padding: 0,
            },
          });

          this.edges.push({
            id: id + parentID,
            source: parentID,
            target: id,
            type: this.edgeType,
            animated: this.animated,
          });
        }
      });
    }

    if (Array.isArray(input)) {
      input.map((item, index) => {
        if (typeof item === "object" || Array.isArray(item)) {
          const id = `${parentID + 1}${index + 1} ${
            Math.random() * 10000
          }`;

          //   this.nodes.push({
          //     id,
          //     data: { label: "none" },
          //     position: this.position,
          //   });

          //   this.edges.push({
          //     id: id + parentID,
          //     source: parentID,
          //     target: id,
          //     type: this.edgeType,
          //     animated: this.animated,
          //   });

          this.getNodes(item, parentID);
        } else {
          const id = `${parentID + 1}${index + 1} ${
            Math.random() * 10000
          }`;

          //   this.nodes.push({
          //     id,
          //     data: { label: item },
          //     position: this.position,
          //   });

          this.nodes.push({
            id,
            data: {
              label: (
                <div style={{ padding: ".7rem 0" }}>
                  <b
                    style={{
                      background: "#5C4599",
                      padding: ".7rem .5rem",
                      marginRight: "1rem",
                    }}
                  >{`<>`}</b>
                  <i
                    style={{
                      //   padding: ".7rem 0",
                      color: "yellow",
                      width: "210px",
                      textOverflow: "ellipsis",
                      overflow: "hidden",
                      whiteSpace: "nowrap",
                      display: "inline-block",
                      lineHeight: "1",
                    }}
                  >
                    {item}
                  </i>
                </div>
              ),
            },
            position: this.position,
            style: {
              background: "#011627",
              fontSize: ".8rem",
              fontFamily: "'Noto Sans Mono', monospace",
              textAlign: "left",
              color: "teal",
              border: "1px solid #5C4599",
              width: 280,
              padding: 0,
            },
          });

          this.edges.push({
            id: id + parentID,
            source: parentID,
            target: id,
            type: this.edgeType,
            animated: this.animated,
          });
        }
      });
    }

    return [this.nodes, this.edges];
  }
}

const objectValue = {
  name: "json preview",
 
//   version: ["1.0.1", "1.0.2", "1.0.3", "1.0.4", "1.0.5", "1.0.6", "1.0.7"],
  example: {
    1: {
        name: "peter",
        age: 18,
    },
    2: {
        name: "james",
        age: 22,
    },
    // 3: {
    //     name: "john",
    //     age: 24,
    //     passed: false
    // }
  },
  //keywords: ["Preview JSON/Object",  "Visualize JSON/Object",  "View JSON file"],
};


export default Nodes;



//export default Nodes;
