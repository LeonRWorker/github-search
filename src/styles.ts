import styled from "styled-components"

export const Text = styled.span`
  font-size: 13px;
`
export const IconInformation = styled.div`
  gap: 10px;
  display: flex;
  align-items: center;
`
export const MoreInformation = styled.div`
  width: 100%;
  color: white;
  display: grid;
  grid-gap: 10px 20px;
  grid-template-columns: repeat(2, 1fr);
  @media (max-width: 767px) {
    grid-template-columns: repeat(1, 1fr);
    ${IconInformation} ${Text} {  
      width: 200px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
`
export const Section = styled.div`
  gap: 5px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  ${Text}:nth-child(1) {
    font-size: 0.8em;
    filter: opacity(80%);
  }
  ${Text}:nth-child(2) {
    font-size: 1.1em;
    font-weight: 600;
  }
`
export const ShadowSection = styled.div`
  gap: 15px;
  width: 100%;
  color: white;
  display: flex;
  padding: 10px 15px;
  align-items: center;
  border-radius: 10px;
  background-color: #141c2f;
  justify-content: space-between;
  @media (max-width: 399px) {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
  }
`
export const Bio = styled.span`
  color: white;
  font-size: 1em;
  text-align: left;
  filter: opacity(60%);
`
export const GithubUserSection = styled.div`
  gap: 30px;
  width: 100%;
  display: flex;
  align-items: center;
`
export const JoinedAt = styled.span`
  color: white;
  font-size: 1em;
  filter: opacity(70%);
`
export const PersonalInfo = styled.div`
  gap: 5px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`
export const Profile = styled.section`
  gap: 5px;
  display: flex;
  flex-direction: column;
`
export const Name = styled.span`
  width: 100%;
  color: white;
  font-size: 1.4em;
  font-weight: 600;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  text-transform: capitalize;
  @media (max-width: 767px) {
    width: 130px;
  }
`
export const Username = styled.span`
  width: 100%;
  color: #0863cb;
  font-size: 1em;
  cursor: pointer;
  text-transform: capitalize;
`
export const UserAsset = styled.img`
  width: 100px;
  border: none;
  height: 100px;
  border-radius: 50%;
  background-color: transparent;
`
export const UserFoundedContainer = styled.section`
  gap: 20px;
  width: 80%;
  padding: 30px;
  display: flex;
  overflow: hidden;
  max-width: 600px;
  border-radius: 10px;
  align-items: center;
  flex-direction: column;
  background-color: #1f2a48;
  box-shadow: 0px 0px 15px -1px rgba(0,0,0,0.3);
`
export const NotFoundContainer = styled.div`
  gap: 50px;
  width: 80%;
  display: flex;
  height: 300px;
  max-width: 600px;
  align-items: center;
  border-radius: 10px;
  flex-direction: column;
  justify-content: center;
  background-color: #1f2a48;
  box-shadow: 0px 0px 15px -1px rgba(0,0,0,0.3);
`
export const NotFoundText = styled.span`
  width: 70%;
  color: white;
  font-size: 1.1em;
  font-weight: 600;
  text-align: center;
`
export const Button = styled.button`
  gap: 10px;
  color: white;
  display: flex;
  padding: 12px;
  cursor: pointer;
  font-size: 20px;
  font-weight: 600;
  border-radius: 8px;
  align-items: center;
  justify-content: center;
  border: 1px solid #0079FE;
  background-color: #0079FE;
`
export const Input = styled.input`
  width: 100%;
  color: white;
  border: none;
  outline: none;
  padding: 12.5px;
  background-color: transparent;
`
export const SearchContainer = styled.section`
  gap: 10px;
  width: 80%;
  padding: 7px;
  display: flex;
  max-width: 600px;
  align-items: center;
  border-radius: 10px;
  justify-content: center;
  background-color: #1F2A48;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 0px 15px -1px;
`
export const LayoutContainer = styled.main`
  gap: 30px;
  width: 100dvw;
  height: 100dvh;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  background-color: #141C2F;
  @media (max-width: 767px) {
    padding: 20px 0px;
  }
`