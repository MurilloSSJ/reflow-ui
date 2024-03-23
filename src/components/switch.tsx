type SwitchProps = {
    checked: boolean;
    onChange: () => void;
  };

const Switch = ({checked, onChange}: SwitchProps) => {
    return (
        <>
        <input
          className="react-switch-checkbox flex items-center justify-center"
          id={`react-switch-new`}
          type="checkbox"
          checked={checked}
          onChange={onChange}
        />
        <label
          className="react-switch-label"
          htmlFor={`react-switch-new`}
        >
          <span className={`react-switch-button`} />
        </label>
      </>
    );
  };
  
  export default Switch;