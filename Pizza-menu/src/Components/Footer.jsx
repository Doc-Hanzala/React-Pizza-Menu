const Footer = () => {
  let hours = new Date().getHours();
  let openHours = 12;
  let closeHours = 22;
  let open = hours >= openHours && hours <= closeHours;

  return (
    <div className="footer">
      <p>
        {hours
          ? `we are open from ${openHours}:00 to ${closeHours}:00. come and visit us online`
          : `we are closed. come after ${openHours}:00`}
      </p>
    </div>
  );
};

export default Footer;
