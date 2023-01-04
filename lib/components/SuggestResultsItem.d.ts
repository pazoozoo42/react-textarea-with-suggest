import React from "react";
import { CustomSuggestItemRenderer, OnItemClickHandler } from "../types";
interface SuggestResultsItemProps<T> {
    item: T;
    isSelected: boolean;
    isMobile?: boolean;
    className?: string;
    customSuggestItemRenderer?: CustomSuggestItemRenderer<T>;
    onItemClickHandler: OnItemClickHandler<T>;
}
export declare const SuggestResultsItem: React.MemoExoticComponent<(<T>({ isSelected, isMobile, item: itemProp, className, customSuggestItemRenderer, onItemClickHandler, }: SuggestResultsItemProps<T>) => JSX.Element)>;
export {};
