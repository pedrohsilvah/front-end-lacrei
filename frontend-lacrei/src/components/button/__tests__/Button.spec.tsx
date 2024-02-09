import {render} from '@testing-library/react'
import { DivButton } from '../Button'

describe('App Component', () => {
    it('should render', () =>{
        render(<DivButton />)
        expect(1).toBe(1)
    })
})

