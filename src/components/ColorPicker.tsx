import iro from "@jaames/iro";
import { useEffect, useRef } from "react";

interface ColorPickerProps {
    setColor?: (color: string) => void;
    color?: string;
}

function ColorPicker({ setColor, color }: ColorPickerProps) {
    const ref = useRef<null>(null);
    const colorPicker = useRef<iro.ColorPicker | null>(null);
    const effectRan = useRef(false);
    useEffect(() => {
        if (!ref.current) return;

        if (effectRan.current === true) {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            const cp = (colorPicker.current = new iro.ColorPicker(ref.current, {
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
            }) as any);
            cp.on("input:change", (color: any) => {
                if (setColor) setColor?.(color.hexString);
            });
            cp.on("input:end", (color: any) => {
                if (setColor) setColor?.(color.hexString);
            });
        }
        return () => {
            effectRan.current = true;
        };
    }, []);
    console.log(colorPicker.current);
    colorPicker.current?.color?.set(color as string);
    return <div className="color-picker-container" ref={ref} />;
}
export default ColorPicker;
