import { BaseModal } from './BaseModal'

type Props = {
  isOpen: boolean
  handleClose: () => void
}

export const AboutModal = ({ isOpen, handleClose }: Props) => {
  return (
    <BaseModal title="Тоглоомын тухай" isOpen={isOpen} handleClose={handleClose}>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        Энэ бол үг таадаг тоглоом юм. Энэхүү тоглоомын эх кодыг -{' '}
        <a
          href="https://github.com/hannahcode/GAME"
          className="underline font-bold"
        >
          эндээс үзнэ үү.
        </a>{' '}
      </p>
    </BaseModal>
  )
}
