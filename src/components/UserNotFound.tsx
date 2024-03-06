import { GithubOutlined } from '@ant-design/icons'
import { NotFoundContainer, NotFoundText } from '../styles'

const UserNotFound = () => {
  return <NotFoundContainer>
    <GithubOutlined className='icon-white' />
    <NotFoundText>Não foi possível encontrar o usuário informado</NotFoundText>
  </NotFoundContainer>
}

export default UserNotFound