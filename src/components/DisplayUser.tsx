import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { UserContext } from '../context/UserContext'
import { IGithubUserProps } from '../types'
import UserFounded from './UserFounded'
import UserNotFound from './UserNotFound'

const DisplayUser = () => {
  const { searchedUser } = useContext(UserContext)
  const [userInfo, setUserInfo] = useState<IGithubUserProps>()
  const formatDate = (date: string) => {
    const formattedDate = new Date(date).toLocaleDateString('pt-BR', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    })
    return `Desde ${formattedDate.charAt(0).toUpperCase() + formattedDate.slice(1)}`
  }
  const handleSearchUser = async () => {
    const baseURL = 'https://api.github.com/'
    try {
      const response = await axios.get(`${baseURL}users/${searchedUser}`)
      const data = response.data
      setUserInfo({
        name: data.name,
        login: data.login,
        avatar: data.avatar_url,
        joined: formatDate(data.created_at),
        location: data.location,
        bio: data.bio,
        blog: data.blog,
        twitter: data.twitter_username,
        company: data.company,
        repos: data.public_repos,
        followers: data.followers,
        following: data.following,
      })
    } catch (error) {
      setUserInfo(undefined)
      console.log(error)
    }
  }
  useEffect(() => {
    handleSearchUser()
  }, [searchedUser])
  return <React.Fragment>
    { searchedUser && (userInfo ? <UserFounded {...userInfo} /> : <UserNotFound />) }
  </React.Fragment>
}

export default DisplayUser