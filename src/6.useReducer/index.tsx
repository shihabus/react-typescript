import { useReducer } from 'react'

type Category = 'Bread' | 'Milk' | 'Fruit' | 'Vegetables' | 'Meat'

interface ShoppingListItem {
  id: string
  title: string
  completed: boolean
  category: Category
}

type ShoppingListState = ShoppingListItem[]

interface AddAction {
  type: 'add'
  category: Category
}

interface DeleteAction {
  type: 'delete'
  id: string
}

interface EditAction {
  type: 'edit'
  id: string
  title: string
}

interface CompleteAction {
  type: 'complete'
  id: string
}

type ShoppingListActions =
  | AddAction
  | DeleteAction
  | EditAction
  | CompleteAction

function shoppingReducer(
  state: ShoppingListState,
  action: ShoppingListActions,
): ShoppingListState {
  switch (action.type) {
    case 'add':
      return state.concat({
        id: `${Math.random()}-${Date.now()}`,
        title: '',
        completed: false,
        category: action.category,
      })
    case 'complete':
      return state.map((item) => {
        if (item.id === action.id) {
          return { ...item, completed: true }
        }
        return item
      })
    case 'delete':
      return state.filter((item) => item.id !== action.id)
    case 'edit':
      return state.map((item) => {
        if (item.id === action.id) {
          return { ...item, title: action.title }
        }
        return item
      })
    default:
      return state
  }
}

const Button = () => {
  const [state, dispatch] = useReducer(shoppingReducer, [])
  dispatch({ type: 'complete', id: '10' })
  return null
}
