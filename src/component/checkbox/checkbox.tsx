import style from "./checkbox.module.scss";
function Checkbox({ id }: { id: string }) {
  return (
    <div className={style["checkbox"]}>
      <input className={style["checkbox-flip"]} type="checkbox" id={id} />
      <label htmlFor={id}>
        <span>{}</span>
      </label>
    </div>
  );
}

export { Checkbox };
