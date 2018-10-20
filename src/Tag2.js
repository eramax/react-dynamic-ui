import React from "react";
import Img from './Img';
import { NavLink  } from "react-router-dom";
import ERoutes from './ERoutes';
const components = {
  Img: Img,
  NavLink: NavLink,
  ERoutes: ERoutes
};

export default function Tag(props) {
  const { tag, handler, getVar, setVar } = props;

  if (typeof tag === "undefined" || tag === null || !("Type" in tag)) return <p className="is-loading">Loading....</p>;

  if ("onClick" in tag["Props"] && !IsFunc(tag["Props"]["onClick"])) {
    var toCall1 = tag["Props"]["onClick"]["function"];
    var varCall1 = tag["Props"]["onClick"]["vars"];
    tag["Props"]["onClick"] = () => handler(toCall1, varCall1);
  }

  if ("toggle" in tag["Props"] && !IsFunc(tag["Props"]["toggle"])) {
    var toCall2 = tag["Props"]["toggle"]["function"];
    var varCall2 = tag["Props"]["toggle"]["vars"];
    tag["Props"]["toggle"] = () => handler(toCall2, varCall2);
  }

  if ("Vars" in tag) {
    tag["Vars"].forEach(element => {
      setVar(element, false);
    });
    delete tag["Vars"];
  }

  if (tag["Props"]["isOpen"] !== undefined) {
    tag["Props"]["isOpen"] = getVar(tag["id"]);
  }

  if (tag["Props"]["is-active"] !== undefined ) {
    let v = getVar(tag["Props"]["is-active"]['vars'][0])
    if(v === true) tag["Props"]["className"] += " is-active";
    else tag["Props"]["className"] = tag["Props"]["className"].replace("is-active","");
  }

  if(tag["Type"] === "ERoutes")
  {
    tag["Props"]["handler"] = handler
  }

  let tggg;
  tggg = React.createElement(
    components[tag["Type"]] || tag["Type"],
    {
      ...tag["Props"]
    },
    tag["Content"],
    tag["Childerns"].map(item => (
      <Tag
        key={item['Key']}
        tag={item}
        handler={handler}
        getVar={getVar}
        setVar={setVar}
      />
    ))
  );
  return <React.Fragment>{tggg}</React.Fragment>;
}

var IsFunc = x => {
  return typeof x === "function";
};
/*var IsArray = x => {
  return x.constructor === Array;
};
*/