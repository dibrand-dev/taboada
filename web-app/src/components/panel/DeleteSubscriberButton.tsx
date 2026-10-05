'use client'

import { useState } from 'react'
import { deleteSubscriber } from '@/actions/newsletter'

export default function DeleteSubscriberButton({ id }: { id: string }) {
  const [isDeleting, setIsDeleting] = useState(false)
  const [showModal, setShowModal] = useState(false)
  const [errorMsg, setErrorMsg] = useState('')

  const handleDelete = async () => {
    setIsDeleting(true)
    setErrorMsg('')
    const result = await deleteSubscriber(id)
    if (result.error) {
      setErrorMsg(result.error)
      setIsDeleting(false)
    } else {
      setShowModal(false)
    }
  }

  return (
    <>
      <button
        onClick={() => setShowModal(true)}
        disabled={isDeleting}
        className="inline-flex items-center justify-center p-2 text-red-500 hover:text-red-700 hover:bg-red-50 rounded-lg transition-colors disabled:opacity-50"
        title="Eliminar suscriptor"
      >
        <span className="material-symbols-outlined text-[20px]">
          {isDeleting ? 'hourglass_empty' : 'delete'}
        </span>
      </button>

      {showModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-900/50 backdrop-blur-sm">
          <div className="bg-white rounded-2xl p-6 max-w-sm w-full mx-4 shadow-xl">
            <div className="flex items-center gap-3 text-red-600 mb-4">
              <span className="material-symbols-outlined text-3xl">warning</span>
              <h3 className="text-lg font-semibold text-slate-900">Eliminar Suscriptor</h3>
            </div>
            <p className="text-slate-600 mb-6 text-sm text-left whitespace-normal">
              ¿Estás seguro de que deseas eliminar este suscriptor? Esta acción no se puede deshacer y el usuario dejará de recibir correos.
            </p>
            {errorMsg && (
              <div className="mb-6 p-3 bg-red-50 border border-red-100 rounded-lg text-sm text-red-600">
                {errorMsg}
              </div>
            )}
            <div className="flex justify-end gap-3">
              <button
                onClick={() => {
                  setShowModal(false)
                  setErrorMsg('')
                }}
                disabled={isDeleting}
                className="px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100 rounded-lg transition-colors"
              >
                Cancelar
              </button>
              <button
                onClick={handleDelete}
                disabled={isDeleting}
                className="px-4 py-2 text-sm font-medium text-white bg-red-600 hover:bg-red-700 rounded-lg transition-colors flex items-center gap-2 disabled:opacity-70"
              >
                {isDeleting ? 'Eliminando...' : 'Sí, eliminar'}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
