import React, { Children, cloneElement, isValidElement } from "react";
import type { ReactNode } from "react";

export function Colors({
  children,
  onColorChange,
}: {
  children: ReactNode;
  onColorChange: (color: string) => void;
}) {
  return (
    <div className="Colors">
      <h3 className="screen-reader-only">Colors</h3>
      {Children.map(children, child =>
        isValidElement(child)
          ? cloneElement(child, {
              name: "color",
              onChange: (event: React.ChangeEvent<HTMLInputElement>) => {
                onColorChange(event.target.value);
              },
            })
          : child
      )}
    </div>
  );
}

export function Color({
  label,
  value,
  name,
  defaultChecked,
  startColor,
  endColor,
  onChange,
}: {
  label: string;
  value: string;
  startColor: string;
  endColor: string;
  defaultChecked?: boolean;
  name?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <label className="Color" aria-label={label}>
      <input
        type="radio"
        name={name}
        value={value}
        defaultChecked={defaultChecked}
        onChange={onChange}
        style={
          {
            "--stop-1": startColor,
            "--stop-2": endColor,
          } as any
        }
      />
    </label>
  );
}
