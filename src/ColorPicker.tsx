import iro from "@jaames/iro"
import { memo, useEffect, useRef } from "react"

interface ColorPickerProps {
    setColor?: (color: string) => void
    color?: string
}

function ColorPicker({ setColor, color }: ColorPickerProps) {
    const ref = useRef<null>(null)
    const colorPicker = useRef<null>(null)
    useEffect(() => {
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
              id: 'hue-slider',
              sliderType: 'hue'
            }
          }
        ]
      }) as any)
      cp.on('color:change', (color:any) => {
        console.log(color)
        if (setColor) setColor?.(color.hexString)
      })
      return () => {
        // cp?.removeAllListeners();
        // cp.destroy();
      };
    }, [])
    return <div className="color-picker-container" ref={ref} />
  }
  export default memo(ColorPicker)