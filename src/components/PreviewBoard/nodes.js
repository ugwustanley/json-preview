class Nodes {
  constructor(json) {
    this.json = json;
    this.position = { x: 0, y: 0 };
    this.nodes = [];
    this.edges = [];
    this.edgeType = "default";
    this.animated = false;
  }
 
  getValueStyle(value) {
    if (typeof value === "string") {
      return { color: "#fff", padding: 0, margin: 0 };
    }
    if (typeof value === "number") {
      return { color: "tomato", padding: 0, margin: 0 };
    }
    if (typeof value === "boolean") {
      return { color: "yellow", padding: 0, margin: 0 };
    }
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
                  background: "#122d42cb",
                  padding: ".7rem .5rem",
                  marginRight: "1rem",
                  color: "#fff",
                }}
              >{`./`}</b>
              <i style={{ padding: ".7rem 0" }}>Root</i>
            </div>
          ),
        },
        position: this.position,
        style: {
          background: "#122d424f",
          fontSize: ".95rem",
          textAlign: "left",
          color: "teal",
          border: "2px solid #122d42cb",
          minWidth: 220,
          padding: 0,
          textOverflow: "ellipsis !important",
          whiteSpace: "nowrap",
          overflow: "hidden",
        },
      });
    }
    if (typeof input === "object" && !Array.isArray(input)) {
      let valueArray = [];
      Object.keys(input).map((key, index) => {
        if (typeof input[key] === "object" || Array.isArray(input[key])) {
          const id = `${parentID + 1}${index + 1} ${Math.random() * 10000}`;

          this.nodes.push({
            id,
            data: {
              label: (
                <div style={{ padding: ".7rem 0" }}>
                  <b
                    style={{
                      background: "#122d42cb",
                      padding: ".7rem .5rem",
                      marginRight: "1rem",
                      color: "#fff",
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
              background: "#122d424f",
              fontSize: ".95rem",
              textAlign: "left",
              color: "teal",
              border: "2px solid #122d42cb",
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
          valueArray.push({ key: key, value: input[key] });
        }
      });

      if (valueArray.length > 0) {
        const id = `${Math.random() & 1000000}${Math.random() * 100000}`;

        this.nodes.push({
          id,
          data: {
            label: (
              <div style={{ padding: ".7rem" }}>
                {valueArray.map((value) => (
                  <p
                    style={{
                      width: "100%",
                      textOverflow: "ellipsis",
                      overflow: "hidden",
                      whiteSpace: "nowrap",
                      display: "inline-block",
                      lineHeight: "1",
                      margin: 0,
                      marginTop: ".2rem",
                    }}
                  >
                    <b style={{ fontWeight: "bold" }}>{value.key}: </b>
                    <i
                      style={this.getValueStyle(value?.value)}
                    >{`${value?.value}`}</i>
                  </p>
                ))}
              </div>
            ),
          },
          position: this.position,
          style: {
            background: "#122d424f",
            fontSize: ".95rem",
            fontFamily: " 'Noto Sans Mono', monospace",
            textAlign: "left",
            color: "teal",
            border: "2px solid #122d42cb",
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
    }

    if (Array.isArray(input)) {
      input.map((item, index) => {
        if (typeof item === "object" || Array.isArray(item)) {
          const id = `${parentID + 1}${index + 1} ${Math.random() * 10000}`;

          this.getNodes(item, parentID);
        } else {
          const id = `${parentID + 1}${index + 1} ${Math.random() * 10000}`;

          this.nodes.push({
            id,
            data: {
              label: (
                <div style={{ padding: ".7rem 1rem" }}>
                  <p
                    style={{
                      //   padding: ".7rem 0",
                      color: "#f97448",
                      width: "100%",
                      textOverflow: "ellipsis",
                      overflow: "hidden",
                      whiteSpace: "nowrap",
                      display: "inline-block",
                      lineHeight: "1",
                      textAlign: "center",
                      margin: "auto",
                    }}
                  >
                    {item}
                  </p>
                </div>
              ),
            },
            position: this.position,
            style: {
              background: "#122d424f",
              fontSize: ".95rem",
              fontFamily: "'Noto Sans Mono', monospace",
              textAlign: "left",
              color: "teal",
              border: "2px solid #122d42cb",
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

export default Nodes;

//export default Nodes;
