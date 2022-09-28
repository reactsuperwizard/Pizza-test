import style from "./dropdown.module.scss";

type DropdownProps = {
  chosen: string;
  item: Array<string>;
  onClick: (va: string) => void;
};

function Dropdown({ chosen, item = [], onClick }: DropdownProps) {
  return (
    <nav className={style["menu"]}>
      <ol>
        <li className={style["menu-item"]}>
          <a href="#0">{chosen ? chosen : "Choose"}</a>
          <ol className={style["sub-menu"]}>
            {item.map((it) => (
              <li className={style["menu-item"]} onClick={() => onClick(it)}>
                <a href="#0">{it}</a>
              </li>
            ))}
            <li className={style["menu-item"]}>
              <a href="#0">All In</a>
            </li>
            <li className={style["menu-item"]}>
              <a href="#0">Build My Own</a>
            </li>
          </ol>
        </li>
      </ol>
    </nav>
  );
}

export { Dropdown };
