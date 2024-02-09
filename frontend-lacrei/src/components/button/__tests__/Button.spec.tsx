import {render} from '@testing-library/react'
import { LinkButton } from '../Button'

describe('App Component', () => {
    it('should render', () =>{
        render(<LinkButton />)
        expect(1).toBe(1)
    })
})

