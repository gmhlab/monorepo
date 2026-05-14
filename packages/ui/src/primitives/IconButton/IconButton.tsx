"use client";

import clsx from "clsx";
import {
  Button,
  ButtonDanger,
  type ButtonDangerProps,
  type ButtonProps,
} from "../Button/Button";
import { ForwardedRef, forwardRef } from "react";
import "./iconButton.css";

export type IconButtonProps = Omit<ButtonProps, "aria-label"> & {
  "aria-label": string;
  href?: string;
};
export const IconButton = forwardRef(function IconButton(
  { className, ...props }: IconButtonProps,
  ref: ForwardedRef<HTMLElement>,
) {
  const classNames = clsx(className, "icon-button");
  return <Button {...(props as ButtonProps)} {...ref} className={classNames} />;
});

export type DestructiveIconButtonProps = Omit<
  ButtonDangerProps,
  "aria-label"
> & {
  "aria-label": string;
  href?: string;
};
export const DestructiveIconButton = forwardRef(function IconButton(
  props: DestructiveIconButtonProps,
  ref: ForwardedRef<HTMLElement>,
) {
  return (
    <ButtonDanger {...(props as ButtonDangerProps)} {...ref} className="icon-button" />
  );
});
