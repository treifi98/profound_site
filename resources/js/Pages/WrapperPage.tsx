// This is your new wrapper component in a separate file
import { Inertia } from '@inertiajs/inertia'
import { usePage } from '@inertiajs/inertia-react'

import { CSSTransition, TransitionGroup } from 'react-transition-group'

const WrapperPage = ({ children }) => {
  const { key } = usePage().component // Use the page component as the unique key
  return (
    <TransitionGroup>
      <CSSTransition
        key={key}
        timeout={500}
        classNames="page"
      >
        {children}
      </CSSTransition>
    </TransitionGroup>
  )
}

export default WrapperPage
