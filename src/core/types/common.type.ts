import type { IconType } from 'react-icons/lib'
export interface HeadingProps {
  title: string
  subTitle?: string
  isButtonVisible?: boolean
  buttonIcon?: IconType
  buttonText?: string
  buttonAction?: () => void
}
