import iro from "@jaames/iro";
import { useEffect, useRef } from "react";

interface ColorPickerProps {
    setColor?: (color: string) => void;
    color?: string;
}

function ColorPicker({ setColor, color }: ColorPickerProps) {
    const colorPickerElRef = useRef<HTMLDivElement | null>(null);
    const colorPickerRef = useRef<iro.ColorPicker | null>(null);
    useEffect(() => {
    
                const container = document.createElement("div");
                container.id = "color-picker-container";
                colorPickerElRef.current?.appendChild(container);
                colorPickerRef.current =  iro.ColorPicker(container, {
                    width: 250,
                    color,
                    borderWidth: 1,
                    borderColor: "#fff",
                    layout: [
                        {
                            component: iro.ui.Box,
                        },
                        {
                            component: iro.ui.Slider,
                            options: {
                                id: "hue-slider",
                                sliderType: "hue",
                            },
                        },
                    ],
                }) ;
                colorPickerRef.current.on("input:change", (color: any) => {
                    if (setColor) setColor?.(color.hexString);
                }
                );
    }, [ ]);

    colorPickerRef.current?.color?.set(color as string);
    return <div ref={colorPickerElRef} />;
}
export default ColorPicker;

