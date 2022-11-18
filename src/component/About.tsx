import { useNavigate } from "react-router-dom";
const About = () => {
  const handleClick = () => {
    navigate("/order-summary");
  };
  const navigate = useNavigate();
  return (
    <>
      <div>About</div>
      <button onClick={handleClick}>Place Order</button>
      <div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eu condimentum mi. Maecenas eu felis commodo, fringilla
          quam et, hendrerit dui. Duis dapibus tortor erat, vitae facilisis nisi interdum egestas. In condimentum euismod
          tincidunt. Proin a laoreet enim, et pretium lorem. Morbi lacinia ipsum porta sagittis accumsan. Aenean accumsan
          pellentesque justo, vel efficitur lorem congue a. Nunc et luctus purus. Fusce venenatis maximus metus, vitae bibendum
          libero pretium et. Vivamus nec metus ac augue consequat placerat. Suspendisse dignissim ornare massa, viverra pharetra
          nibh consectetur condimentum. In sed sem sodales, luctus libero non, interdum lectus. Sed scelerisque pulvinar orci, ac
          imperdiet enim. Aliquam odio mi, sagittis vel ex non, vehicula efficitur urna. Vestibulum ante ipsum primis in faucibus
          orci luctus et ultrices posuere cubilia curae; Sed tempus nunc ut cursus tempus. Aenean bibendum euismod augue vel
          commodo. Integer mollis tortor in leo vestibulum, scelerisque vestibulum neque pellentesque. Aenean molestie dolor sed
          lacinia suscipit. Cras dignissim consequat arcu at auctor. Phasellus sed nisl volutpat, aliquet velit eget, mollis leo.
          Morbi condimentum nisl vel elit condimentum, sit amet bibendum sapien scelerisque. Phasellus eget urna sed lectus
          gravida laoreet. Cras venenatis eros in justo lacinia, nec vulputate nisl porta. Sed ante sapien, hendrerit a tempus
          mattis, egestas et nulla. Nam libero lacus, aliquet in dui ut, laoreet euismod elit. Vivamus et erat volutpat, lacinia
          erat vitae, ornare nisl. In elementum libero mollis posuere lobortis. Phasellus pulvinar turpis vel interdum
          pellentesque. Phasellus convallis odio felis, sed egestas turpis volutpat vitae. Curabitur a mattis orci, sed cursus
          est. Aliquam convallis mattis magna, ut venenatis quam lacinia eu. Sed vulputate erat arcu, at maximus libero ornare et.
          Donec ut luctus sapien, id dapibus lorem. Ut ac nibh sit amet urna consequat suscipit. Cras aliquet vehicula velit,
          vitae vestibulum tellus vulputate eu. Mauris accumsan leo quam, ut ullamcorper turpis dictum eget. Fusce pulvinar
          vulputate est a elementum. Pellentesque finibus vel erat a congue. Fusce ut porttitor orci, nec sagittis ligula. In hac
          habitasse platea dictumst. Curabitur vitae est cursus, pellentesque erat vel, sagittis quam. Integer quis sapien turpis.
          Nulla dolor tellus, pharetra ac blandit et, congue sit amet ligula. Donec at turpis ex. Proin posuere pretium lacus.
          Nullam eu molestie risus, eget luctus sapien. Sed tincidunt tincidunt enim ac eleifend.
        </p>
      </div>
    </>
  );
};
export default About;
