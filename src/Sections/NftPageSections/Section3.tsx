 
// example json for nftCardList
const comments = {
  name: "alex-jane",
  img: '',
  comment: "This is a comment",
  date: "12th Dec 2021",
  likes: "12",
  dislikes: "2",
  replies: "2",
}

type commentProps = typeof comments

export const Section3 = ({ comments }: { comments: commentProps[] }) => {

  // const [allNftTab, setAllNftTab] = useState(true)
  return (
    <section className=' containers relative w-full h-full text-white font-cpmono-heading'>
      <div className="absolute inset-0 h-[1px] -mt-20 bg-gradient-radial from-[#bbbbbb] via-[#232324] to-[#232324]"></div>
      <div className={`mt-20    `}>
        <div className=' rounded-full w-full bg-[#000D1A] font-cpmono-heading border-2 border-[#003A73]'>
          <input type="text" name="" id="" placeholder='Add a comment' className=' p-3 px-5 bg-transparent outline-none placeholder:text-[#0073E5] placeholder:opacity-65 max-w-xl w-full ' />
        </div>

        <div className=' mt-10'>
          <h2 className=' text-subtle'>Comments</h2>
        </div>
        <div className=' mt-5 space-y-5'>
          {comments.map(comment => <CommentCard {...comment} />)}
        </div>
      </div>
    </section>
  )
}

const CommentCard = ({ name, comment, date, likes, dislikes, replies, img }: commentProps) => {
  console.log(likes, dislikes, replies);
  
  return <div className=' border border-primary p-2 rounded-md '>
    <div className=' flex items-start gap-2'>
      <img width={25} src={img} alt="" className=' rounded-full inline-block' />
      <div>
        <div className=' inline-block'>
          <p className=' flex items-center text-[#0066CC] text-[14px] '>{name}
            <span className=' h-1 w-1 bg-[#FF9F00] mx-1 rounded-full '></span>
            <p className=' font-oxanium font-medium '>{date}</p>
          </p>
        </div>
        <p className=' text-subtle3 font-oxanium font-semibold text-[16px] '>
          {comment}
        </p>
      </div>
    </div>
    <div>

    </div>
  </div>
}
