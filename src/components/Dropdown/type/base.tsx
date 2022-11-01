import { isEmpty } from "lodash";
import { ChangeEvent, useCallback, useEffect, useRef, useState } from "react";
import { CgChevronDown, CgSearch } from "react-icons/cg";

import {
  DropdownContainer,
  DropdownItem,
  DropdownItemContainer,
  DropdownSearch,
} from "../styles/decorates/base.decorate";
import { dropdownAnimate } from "../styles/variants/base.variant";

export interface ItemProp {
  value: any;
  name: string;
}

interface DropdownProps {
  disabled?: boolean;
  width?: string;
  height?: string;
  placeholder?: string;
  initialState?: "expanded" | "collapsed";
  data: ItemProp[];
  initialValue?: number;
  onSelected?: (selected: ItemProp) => void;
}

const Dropdown = (props: DropdownProps) => {
  const {
    disabled = false,
    width = "100%",
    height = "fit-content",
    placeholder = "Search",
    initialState = "collapsed",
    data,
    initialValue,
    onSelected,
  } = props;

  const selectedItem = useRef<ItemProp>();
  const searchRef = useRef<HTMLInputElement>(null);
  const [selections, setSelection] = useState(data);

  const [isExpanded, setExpanded] = useState<boolean>(false);

  useEffect(() => {
    setSelection(data);
    return () => setSelection([]);
  }, [data]);

  const toggle = () => {
    if (!isExpanded) {
      searchRef.current?.focus();
    }
    setExpanded(!isExpanded);
  };

  const onChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const value = event.target.value;
      if (!!value) {
        const filter = [...data.filter((data) => data.name.includes(value))];
        selectedItem.current = filter[0];
        setSelection(filter);
      } else {
        selectedItem.current = undefined;
        setSelection(data);
      }
    },
    [data]
  );

  const onSubmit = (e: any) => {
    if (e.key === "Enter" || e.keyCode === 13) {
      selected(selections[0]);
      if (searchRef.current) {
        searchRef.current.value = selections[0].name;
      }
    }
    if (e.key === "Esc" || e.keyCode === 27) {
      closeDropdown();
    }
  };

  const openDropdown = () => {
    if (!isExpanded) {
      setExpanded(true);
    }
  };

  const closeDropdown = () => {
    if (isExpanded) {
      setExpanded(false);
    }
  };

  const selected = (item: ItemProp) => {
    closeDropdown();
    selectedItem.current = item;
    if (searchRef.current) {
      searchRef.current.value = item?.name ?? "";
    }
    onSelected && onSelected(item);
  };

  useEffect(() => {
    if (selections?.length !== 0) {
      selected(data[initialValue ?? 0]);
    }
    // eslint-disable-next-line
  }, [initialValue, data, selections]);

  return (
    <DropdownContainer width={width} height={height}>
      <DropdownSearch>
        <CgSearch className='search-icon' />
        <input
          ref={searchRef}
          type='search'
          name='search dropdown'
          className='search-input'
          defaultValue={isEmpty(data) ? "" : data[initialValue ?? -1]?.name}
          disabled={disabled}
          placeholder={placeholder}
          onChange={onChange}
          onKeyUp={onSubmit}
          onFocus={openDropdown}
        />
        <button
          tabIndex={-1}
          type='button'
          className='search-dropdown'
          disabled={disabled}
          onClick={toggle}
        >
          <CgChevronDown />
        </button>
      </DropdownSearch>
      <DropdownItemContainer
        variants={dropdownAnimate}
        initial={disabled && initialState}
        animate={isExpanded ? "expanded" : "collapsed"}
      >
        {!isEmpty(selections) ? (
          selections.map((data: any, index: number) => {
            const select =
              selectedItem?.current === data ? "select" : undefined;
            return (
              <DropdownItem
                key={`${data.name}-${index}`}
                className={select}
                tabIndex={0}
                onKeyUp={onSubmit}
                onClick={() => selected(data)}
              >
                <span className='value'>{data.name}</span>
              </DropdownItem>
            );
          })
        ) : (
          <div className='empty'>Empty element</div>
        )}
      </DropdownItemContainer>
    </DropdownContainer>
  );
};

export default Dropdown;
