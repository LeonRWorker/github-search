import { CoffeeOutlined, CompassOutlined, LinkOutlined, TwitterOutlined } from '@ant-design/icons'
import { Bio, GithubUserSection, IconInformation, JoinedAt, MoreInformation, Name, PersonalInfo, Profile, Section, ShadowSection, Text, UserAsset, UserFoundedContainer, Username } from '../styles'
import { IGithubUserProps } from '../types'

const UserFounded: React.FC<IGithubUserProps> = ({ name, login, avatar, joined, location, bio, blog, twitter, company, followers, following, repos }) => {
  return <UserFoundedContainer>
    <GithubUserSection>
      <UserAsset src={avatar} />
      <PersonalInfo>
        <Profile>
          <Name>{name}</Name>
          <Username>@{login}</Username>
        </Profile>
        <JoinedAt>{joined}</JoinedAt>
      </PersonalInfo>
    </GithubUserSection>
    <GithubUserSection>
      <Bio>{bio ?? 'Esse perfil não tem biografia' }</Bio>
    </GithubUserSection>
    <ShadowSection>
      <Section>
        <Text>Repositórios</Text>
        <Text>{ repos }</Text>
      </Section>
      <Section>
        <Text>Seguidores</Text>
        <Text>{ followers }</Text>
      </Section>
      <Section>
        <Text>Seguindo</Text>
        <Text>{ following }</Text>
      </Section>
    </ShadowSection>
    <MoreInformation>
      <IconInformation>
        <CompassOutlined size={30} />
        <Text>{location ?? 'Local não informado'}</Text>
      </IconInformation>
      <IconInformation>
        <CoffeeOutlined size={30} />
        <Text>{company ?? 'Empresa não informada'}</Text>
      </IconInformation>
      <IconInformation>
        <LinkOutlined size={30} />
        <Text>{blog.length >= 1 ? blog : 'Site não informado'}</Text>
      </IconInformation>
      <IconInformation>
        <TwitterOutlined size={30} />
        <Text>{twitter ?? 'Twitter não informado'}</Text>
      </IconInformation>
    </MoreInformation>
  </UserFoundedContainer>
}

export default UserFounded