import { GithubOutlined } from '@ant-design/icons'
import { useContext, useState } from 'react'
import { UserContext } from '../context/UserContext'
import { Button, Input, SearchContainer, Text } from '../styles'

const SearchUser = () => {
  const { setSearchedUser } = useContext(UserContext)
  const [username, setUsername] = useState('')
  const handleSearch = () => {
    setSearchedUser(username)
  }
  return <SearchContainer>
    <Input
      type='text'
      value={username}
      placeholder='Procure por usuários do Github'
      onChange={(text) => setUsername(text.target.value)}
      className='input-text'
    />
    <Button
      onClick={handleSearch}
    >
      <GithubOutlined size={32} />
      <Text>Pesquisar</Text>
    </Button>
  </SearchContainer>
}

export default SearchUser