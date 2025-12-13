"use client";

import React from "react";
import { Tooltip } from "@base-ui-components/react/tooltip";
import { motion } from "framer-motion";

import styles from "./style.module.css";

interface TooltipProps {
  children?: React.ReactNode;
  content?: React.ReactNode;
  imageUrl?: string;
  side?: "top" | "right" | "bottom" | "left";
  sideOffset?: number;
  href?: string;
  text?: string;
  showExternalIcon?: boolean;
  underlined?: boolean;
}

const CustomTooltip: React.FC<TooltipProps> = ({
  children,
  content,
  imageUrl,
  side = "top",
  sideOffset = 5,
  href,
  text,
  showExternalIcon = true,
  underlined = true,
}) => {
  const baseTriggerClass =
    "text-[var(--muted-foreground)] group inline-flex items-center";
  const underlineClass = underlined
    ? "decoration-[1px] underline dotted underline-offset-3 decoration-[var(--muted-foreground)]"
    : "";
  const triggerContent = text ? (
    href ? (
      <motion.a
        href={href}
        target="_blank"
        className={`${baseTriggerClass} ${underlineClass} hover:text-[var(--link-foreground)]`}
        whileHover="hover"
        initial="initial"
        variants={{
          initial: {},
          hover: {},
        }}
      >
        {text}
        {href && showExternalIcon && (
          <motion.svg
            className="w-3 h-3 ml-0.5 inline-block"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            variants={{
              initial: {
                x: 0,
                y: 0,
              },
              hover: {
                x: 2,
                y: -2,
              },
            }}
            transition={{
              type: "tween",
              duration: 0.2,
              ease: "easeOut",
            }}
          >
            <line x1="7" y1="17" x2="17" y2="7"></line>
            <polyline points="7 7 17 7 17 17"></polyline>
          </motion.svg>
        )}
      </motion.a>
    ) : (
      <motion.span
        className={`${baseTriggerClass} ${underlineClass}`}
        whileHover="hover"
        initial="initial"
        variants={{
          initial: {},
          hover: {},
        }}
      >
        {text}
      </motion.span>
    )
  ) : (
    children
  );

  return (
    <Tooltip.Root>
      <Tooltip.Trigger>{triggerContent}</Tooltip.Trigger>
      <Tooltip.Portal>
        <Tooltip.Positioner side={side} sideOffset={sideOffset}>
          <Tooltip.Popup className={styles.Popup}>
            {imageUrl && (
              <div style={{ marginBottom: "8px" }}>
                <img
                  src={imageUrl}
                  alt=""
                  style={{
                    width: "100%",
                    height: "120px",
                    objectFit: "cover",
                    borderRadius: "6px",
                  }}
                />
              </div>
            )}
            <div>{content}</div>
            <Tooltip.Arrow className={styles.Arrow}>
              <ArrowSvg />
            </Tooltip.Arrow>
          </Tooltip.Popup>
        </Tooltip.Positioner>
      </Tooltip.Portal>
    </Tooltip.Root>
  );
};

function ArrowSvg(props: React.ComponentProps<"svg">) {
  return (
    <svg width="20" height="10" viewBox="0 0 20 10" fill="none" {...props}>
      <path
        d="M9.66437 2.60207L4.80758 6.97318C4.07308 7.63423 3.11989 8 2.13172 8H0V10H20V8H18.5349C17.5468 8 16.5936 7.63423 15.8591 6.97318L11.0023 2.60207C10.622 2.2598 10.0447 2.25979 9.66437 2.60207Z"
        className={styles.ArrowFill}
      />
      <path
        d="M8.99542 1.85876C9.75604 1.17425 10.9106 1.17422 11.6713 1.85878L16.5281 6.22989C17.0789 6.72568 17.7938 7.00001 18.5349 7.00001L15.89 7L11.0023 2.60207C10.622 2.2598 10.0447 2.2598 9.66436 2.60207L4.77734 7L2.13171 7.00001C2.87284 7.00001 3.58774 6.72568 4.13861 6.22989L8.99542 1.85876Z"
        className={styles.ArrowOuterStroke}
      />
      <path
        d="M10.3333 3.34539L5.47654 7.71648C4.55842 8.54279 3.36693 9 2.13172 9H0V8H2.13172C3.11989 8 4.07308 7.63423 4.80758 6.97318L9.66437 2.60207C10.0447 2.25979 10.622 2.2598 11.0023 2.60207L15.8591 6.97318C16.5936 7.63423 17.5468 8 18.5349 8H20V9H18.5349C17.2998 9 16.1083 8.54278 15.1901 7.71648L10.3333 3.34539Z"
        className={styles.ArrowInnerStroke}
      />
    </svg>
  );
}

export { CustomTooltip };
export default CustomTooltip;
