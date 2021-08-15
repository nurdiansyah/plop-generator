import "firebase/auth"
import "firebase/firestore"
import "firebase/storage"
import "firebase/analytics"

export function onRenderBody({ setBodyAttributes }) {
  setBodyAttributes({
      className: 'no-js'
    })
}
