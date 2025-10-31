import type { HeadingProps } from '@/core/types/common.type'

export const Heading = ({
  title = 'title',
  subTitle,
  isButtonVisible = false,
  buttonText = 'add',
  buttonIcon,
  buttonAction = () => {},
}: HeadingProps) => {
  const Icon = buttonIcon
  return (
    <div className="flex items-center justify-between">
      <div>
        <h1 className="text-3xl font-medium  mb-2">{title}</h1>
        {subTitle && <p className="">{subTitle}</p>}
      </div>
      {isButtonVisible && (
        <button
          className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-3 py-2 rounded-md flex items-center space-x-2 font-semibold shadow-soft dark:shadow-soft-dark cursor-pointer hover:shadow-lg hover:-translate-y-0.25 transition-transform duration-200 ease-in-out outline-0 text-sm"
          onClick={buttonAction}
        >
          {Icon && <Icon className="mr-2 size-6 fill-white" />}
          <span>{buttonText}</span>
        </button>
      )}
    </div>
  )
}
