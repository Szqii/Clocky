const letters =
  "ITLISCLOCKYACQUARTERDCTWENTYFIVEXHALFSTENFTOPASTERUNINEONESIXTHREEFOURFIVETWOEIGHTELEVENSEVENTWELVETENSEOCLOCK".split(
    ""
  );

const Clock = ({ currentTime }) => {
  const lettersToLight = [...currentTime.letters];

  return (
    <div className="clock">
      {letters.map((letter, index) => (
        <span
          key={index}
          className={`letter ${lettersToLight.includes(index) ? "active" : ""}`}
        >
          {letter}
        </span>
      ))}
    </div>
  );
};

export default Clock;
