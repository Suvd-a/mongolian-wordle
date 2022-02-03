import { Cell } from '../grid/Cell'
import { BaseModal } from './BaseModal'

type Props = {
  isOpen: boolean
  handleClose: () => void
}

export const InfoModal = ({ isOpen, handleClose }: Props) => {
  return (
    <BaseModal title="How to play" isOpen={isOpen} handleClose={handleClose}>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        Тухайн өдрийн өгөгдсөн үгийг 6 удаагийн оролдлогоор таана. Сонгосон үгээ
        оруулсны дараа дөрвөлжингийн өнгө өөрчлөгдөж таны сонгосон үг өнөөдрийн
        үгтэй таарсан эсэхийг харуулна.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="Н" status="correct" />
        <Cell value="А" />
        <Cell value="М" />
        <Cell value="А" />
        <Cell value="Г" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        Н үсэг өнөөдрийн үгэнд орсон мөн зөв байрлалд байна.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="С" />
        <Cell value="А" />
        <Cell value="Л" status="present" />
        <Cell value="Х" />
        <Cell value="И" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        Л үсэг өнөөдрийн үгэнд орсон хэдий ч буруу байрлалд байна.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="Ш" />
        <Cell value="А" />
        <Cell value="Т" />
        <Cell value="А" status="absent" />
        <Cell value="Р" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        А үсэг өнөөдрийн үгэнд ороогүй байна.
      </p>
    </BaseModal>
  )
}
