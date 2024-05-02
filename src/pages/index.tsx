import { VStack } from "@chakra-ui/react";
import React,{useState} from "react";
import { RootState } from "@store";
import { PostWizard } from "components/CreatePost";
import { GlobalModal } from "components/GlobalModal";
import { PostCard } from "components/Post";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useGetAllPostsQuery } from "@services";
const API_URL: string | undefined = process.env.NEXT_PUBLIC_API_URL;

export default function Page() {
  const [showModal, setShowModal] = useState(false);
  const [challengeIsComplete, setChallengeIsComplete] = useState(false);
  const allPosts = useSelector((state: RootState) => state.postsSlice.posts);

  const {
    data: allPostsData,
    isLoading: isPostsLoading,
    isError: isPostsError,
    error: postsError,
  } = useGetAllPostsQuery();

  const iqQuestion = "What months have 28 days?";

  const getChallengeIsCompleteFromLocalStorage = () => {
    return localStorage.getItem('challengeIsComplete') === 'true';
  }

  const dailyChallengeQuestion = () => {
    return (
      <div className="flex flex-col gap-4">
        <h1 className="font-bold text-2xl">Daily Challenge</h1>
        <h2>{iqQuestion}</h2>
        <input
          className="w-full bg-gray-100 rounded-sm p-2 overflow-hidden focus:outline-none"
          placeholder="Enter Answer"
        />
        <div className="flex flex-row justify-between gap-4">
        <button onClick={()=>{
          setShowModal(false)
          localStorage.setItem('challengeIsComplete', 'true');
        }} className="w-full bg-blue-500 text-white p-2 rounded-md">Submit</button>
        <button onClick={()=>{
          setShowModal(false);
          localStorage.setItem('challengeIsComplete', 'true');
        }} className="w-full bg-blue-500 text-white p-2 rounded-md">Skip</button>
        </div>
      </div>
    )
  };


  useEffect(() => {
    const challengeIsComplete = getChallengeIsCompleteFromLocalStorage();
    if(!challengeIsComplete){
      setTimeout(() => {
        setShowModal(true);
      }, 1000);
    } 
  }
  ,[]);


    return (
      <VStack w={'full'} paddingLeft={'5px'} paddingRight={'5px'}>
        <PostWizard isDisabled={false} isEditPost={false} openLockModal={
          ()=>{
            console.log('open lock modal')
          }
        }/>
        {allPosts && allPosts.map((post, index) => (
        <PostCard id={
          post._id
        } isLocked={post.isLocked} key={index} createdAt={post.createdAt} username={"Junaid"} comments={post.comments.length} content={post.content} images={post.images.map((image) => `${API_URL}/image/get/${image._id}`)} 
        likes={0} isDisabled={false} isEditPost={false} />
        ))}
        <GlobalModal isOpen={showModal} onClose={()=>{
          setShowModal(false)
        }}
        content={dailyChallengeQuestion()}
        key={'test'}
        />
      </VStack>
    );
  }